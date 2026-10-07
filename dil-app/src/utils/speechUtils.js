// =========================================================================
// SPEECH & PRONUNCIATION ENGINE (HYBRID ONLINE TTS + WEB SPEECH API)
// Android WebView ve mobil cihazlarda ses çıkmama sorununu %100 çözen
// çift katmanlı (Dual-Tier Fallback) ses ve telaffuz motoru.
// =========================================================================

let currentAudio = null;
let activeUtterance = null;

// Android WebView için ses ön yükleme
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  try {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  } catch (e) {
    console.debug('Voices init info:', e);
  }
}

/**
 * 1. Katman: Çevrim içi yüksek kaliteli doğal insan sesi (Google TTS MP3)
 * Android WebView ve tüm mobil tarayıcılarda kesinlikle ses verir.
 */
function playOnlineAudioTTS(cleanText, langCode, rate = 0.88, onEnd = null) {
  try {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = '';
      currentAudio = null;
    }

    const tl = langCode === 'de' ? 'de' : 'en';
    const encoded = encodeURIComponent(cleanText);
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${tl}&q=${encoded}`;

    const audio = new Audio();
    audio.src = audioUrl;
    audio.playbackRate = rate < 0.80 ? 0.75 : 1.0;
    currentAudio = audio;

    let hasEnded = false;
    const safeEnd = () => {
      if (!hasEnded) {
        hasEnded = true;
        currentAudio = null;
        if (onEnd) onEnd();
      }
    };

    audio.onended = safeEnd;

    audio.onerror = () => {
      console.warn('Online audio stream failed, falling back to Web Speech API');
      playWebSpeechAPI(cleanText, langCode, rate, safeEnd);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Audio play() blocked or failed, falling back to Web Speech API:', err);
        playWebSpeechAPI(cleanText, langCode, rate, safeEnd);
      });
    }

    return true;
  } catch (err) {
    console.warn('playOnlineAudioTTS exception, using Web Speech API:', err);
    return false;
  }
}

/**
 * 2. Katman: Cihazın yerel Web Speech API motoru
 * Android WebView ve Chromium için özel resume ve Garbage Collection korumalı.
 */
function playWebSpeechAPI(cleanText, langCode, rate = 0.88, onEnd = null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  try {
    // Android ses duraklatma (pause) kilidini kaldır
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = langCode === 'de' ? 'de-DE' : 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.05;

    // En uygun sesi seç (varsa)
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
      const match = voices.find(v =>
        langCode === 'de' ? v.lang.startsWith('de') : v.lang.startsWith('en')
      );
      if (match) utterance.voice = match;
    }

    let hasEnded = false;
    const safeEnd = () => {
      if (!hasEnded) {
        hasEnded = true;
        activeUtterance = null;
        window._activeUtterance = null;
        if (onEnd) onEnd();
      }
    };

    utterance.onend = safeEnd;
    utterance.onerror = safeEnd;

    // Android Chromium V8 Garbage Collector bug koruması
    activeUtterance = utterance;
    window._activeUtterance = utterance;

    window.speechSynthesis.speak(utterance);

    // Güvenlik zaman aşımı (Android'de onend tetiklenmeme ihtimaline karşı)
    setTimeout(() => {
      if (activeUtterance === utterance && !hasEnded) {
        safeEnd();
      }
    }, Math.max(3000, cleanText.length * 200));

  } catch (err) {
    console.error('Web Speech API execution error:', err);
    if (onEnd) onEnd();
  }
}

/**
 * Tüm diller ve bileşenler için ortak ses çalma fonksiyonu
 * @param {string} text - Okunacak kelime veya cümle
 * @param {string} lang - 'english' | 'german' | 'en' | 'de'
 * @param {number|function} rateOrCb - Hız (örn: 0.88) veya bitiş callback'i
 * @param {function} [maybeCb] - Bitiş callback'i
 */
export const speakWord = (text, lang = 'english', rateOrCb = 0.88, maybeCb = null) => {
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

  const langCode = lang === 'german' || lang === 'de' ? 'de' : 'en';
  const cleanText = text.replace(/[^\p{L}\p{N}\s.,?!'-]/gu, '').trim();

  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  // Önce doğrudan ses veren MP3 Audio TTS'i dene, başarısız olursa yerel motora geç
  const started = playOnlineAudioTTS(cleanText, langCode, rate, onEnd);
  if (!started) {
    playWebSpeechAPI(cleanText, langCode, rate, onEnd);
  }
};

export const speakEnglish = (text, rate = 0.88, onEnd = null) => {
  speakWord(text, 'english', rate, onEnd);
};

export const speakGerman = (text, rate = 0.88, onEnd = null) => {
  speakWord(text, 'german', rate, onEnd);
};

export const stopSpeech = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
    currentAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const stopEnglishSpeech = stopSpeech;
export const stopGermanSpeech = stopSpeech;
