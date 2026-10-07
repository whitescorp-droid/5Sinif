// Speech Synthesis Utility for English & German Foreign Language Learning
// Provides native browser & WebView pronunciation without external dependencies

let germanVoice = null;
let englishVoice = null;

function initVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  const updateVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    // German voice
    germanVoice = voices.find(v => v.lang === 'de-DE' || v.lang.startsWith('de')) || null;

    // English voice
    englishVoice = voices.find(v => 
      (v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en')) &&
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Samantha') || v.name.includes('Zira') || v.name.includes('David'))
    ) || voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en')) || null;
  };

  updateVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }
}

initVoices();

/**
 * Speaks a given text in English
 */
export const speakEnglish = (text, rate = 0.88, onEnd = null) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  window.speechSynthesis.cancel();

  const cleanText = text.replace(/[^\p{L}\p{N}\s.,?!'-]/gu, '').trim();
  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'en-US';
  utterance.rate = rate; // child friendly tempo
  utterance.pitch = 1.05;

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
};

export const stopEnglishSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

/**
 * Speaks a given text in German
 */
export const speakGerman = (text, rate = 0.88, onEnd = null) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  window.speechSynthesis.cancel();

  const cleanText = text.replace(/[^\p{L}\p{N}\s.,?!'-]/gu, '').trim();
  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'de-DE';
  utterance.rate = rate;
  utterance.pitch = 1.05;

  if (germanVoice) {
    utterance.voice = germanVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
};

export const stopGermanSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

/**
 * Helper to speak according to active language ('english' | 'german')
 */
export const speakWord = (text, lang = 'english', onEnd = null) => {
  if (lang === 'german') {
    speakGerman(text, 0.88, onEnd);
  } else {
    speakEnglish(text, 0.88, onEnd);
  }
};
