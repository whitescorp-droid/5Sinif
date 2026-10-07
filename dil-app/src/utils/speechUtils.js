import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { Capacitor } from '@capacitor/core';

// =========================================================================
// UNIFIED SPEECH SYNTHESIS ENGINE
// - Android APK: Native android.speech.tts.TextToSpeech (100% reliable hardware TTS)
// - Web Browser: Synchronous Web Speech API with unpause & GC protection
// =========================================================================

let activeUtterance = null;

// Initialize browser voices if available
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  try {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  } catch (e) {
    console.debug('Voices init ignored:', e);
  }
}

/**
 * Speaks text in the chosen foreign language
 * @param {string} text - Text to speak
 * @param {string} lang - 'english' | 'german' | 'en' | 'de'
 * @param {number|function} [rateOrCb=0.88] - Rate (e.g. 0.88 or 0.70) or callback
 * @param {function} [maybeCb=null] - Optional callback
 */
export const speakWord = async (text, lang = 'english', rateOrCb = 0.88, maybeCb = null) => {
  if (!text) {
    if (typeof rateOrCb === 'function') rateOrCb();
    else if (maybeCb) maybeCb();
    return;
  }

  let rate = 0.88;
  let onEnd = null;

  if (typeof rateOrCb === 'function') {
    onEnd = rateOrCb;
  } else if (typeof rateOrCb === 'number') {
    rate = rateOrCb;
    if (typeof maybeCb === 'function') onEnd = maybeCb;
  }

  const cleanText = text.replace(/[^\p{L}\p{N}\s.,?!'-]/gu, '').trim();
  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  const langCode = (lang === 'german' || lang === 'de') ? 'de-DE' : 'en-US';

  // 1. Android / iOS Native Platform (APK) -> Native TextToSpeech Engine
  if (Capacitor.isNativePlatform()) {
    try {
      await TextToSpeech.stop();
      await TextToSpeech.speak({
        text: cleanText,
        lang: langCode,
        rate: rate < 0.80 ? 0.75 : 1.0,
        pitch: 1.0,
        volume: 1.0,
        category: 'ambient',
      });
      if (onEnd) onEnd();
      return;
    } catch (err) {
      console.warn('Native TextToSpeech call failed, falling back to Web Speech API:', err);
    }
  }

  // 2. Web / Browser Platform -> Direct Web Speech API
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = langCode;
      utterance.rate = rate || 0.88;
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const prefix = langCode.substring(0, 2);
        const match = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(prefix));
        if (match) utterance.voice = match;
      }

      let ended = false;
      const finish = () => {
        if (!ended) {
          ended = true;
          activeUtterance = null;
          window._activeUtterance = null;
          if (onEnd) onEnd();
        }
      };

      utterance.onend = finish;
      utterance.onerror = (e) => {
        console.warn('Web Speech utterance error:', e);
        finish();
      };

      activeUtterance = utterance;
      window._activeUtterance = utterance;

      window.speechSynthesis.speak(utterance);

      // Failsafe timeout in case onend doesn't fire
      setTimeout(() => {
        if (activeUtterance === utterance && !ended) {
          finish();
        }
      }, Math.max(2500, cleanText.length * 150));
      return;
    } catch (err) {
      console.error('Web Speech API execution error:', err);
    }
  }

  if (onEnd) onEnd();
};

export const stopSpeech = async () => {
  if (Capacitor.isNativePlatform()) {
    try {
      await TextToSpeech.stop();
    } catch (e) {}
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const speakEnglish = (text, rate = 0.88, onEnd = null) => {
  speakWord(text, 'english', rate, onEnd);
};

export const speakGerman = (text, rate = 0.88, onEnd = null) => {
  speakWord(text, 'german', rate, onEnd);
};

export const stopEnglishSpeech = stopSpeech;
export const stopGermanSpeech = stopSpeech;
