// Speech Synthesis Utility for German & Foreign Language Learning
// Provides native browser-based German pronunciation without external dependencies

let germanVoice = null;

// Initialize and locate best German voice
function initVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  const updateVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural/de-DE voices (e.g. Google Deutsch, Microsoft Hedda, Stefan, Katja)
    germanVoice = voices.find(v => v.lang === 'de-DE' || v.lang.startsWith('de')) || null;
  };

  updateVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }
}

initVoices();

/**
 * Speaks a given text in German
 * @param {string} text - German word or sentence
 * @param {number} rate - Speed (default 0.95 for clear language learning)
 * @param {function} onEnd - Callback when speech ends
 */
export const speakGerman = (text, rate = 0.92, onEnd = null) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    if (onEnd) onEnd();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Clean text from symbols / emojis if any
  const cleanText = text.replace(/[^\p{L}\p{N}\s.,?!'-]/gu, '').trim();
  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'de-DE';
  utterance.rate = rate; // slightly slower for language learners
  utterance.pitch = 1.05; // clear and friendly pitch

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
