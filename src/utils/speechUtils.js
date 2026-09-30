// Speech Synthesis Utility for English & German Foreign Language Learning
// Provides native browser-based pronunciation without external dependencies

let germanVoice = null;
let englishVoice = null;

// Initialize and locate best German and English voices
function initVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  const updateVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    // Prioritize natural/de-DE voices
    germanVoice = voices.find(v => v.lang === 'de-DE' || v.lang.startsWith('de')) || null;

    // Prioritize natural English voices (Google US English, Microsoft Zira/David/Jenny, en-US, en-GB)
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
 * @param {string} text - English word or sentence
 * @param {number} rate - Speed (default 0.90 for clear student learning)
 * @param {function} onEnd - Callback when speech ends
 */
export const speakEnglish = (text, rate = 0.90, onEnd = null) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
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
  utterance.rate = rate; // slightly slower for language learners
  utterance.pitch = 1.05; // clear and friendly pitch

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
 * @param {string} text - German word or sentence
 * @param {number} rate - Speed (default 0.92 for clear language learning)
 * @param {function} onEnd - Callback when speech ends
 */
export const speakGerman = (text, rate = 0.92, onEnd = null) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
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

export const stopAllSpeech = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

