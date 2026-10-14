// Browser Native Speech Utility for English Pronunciation and Recognition

let englishVoice = null;

function initVoices() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

  const updateVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

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

if (typeof window !== 'undefined') {
  initVoices();
}

/**
 * Speaks an English sentence with friendly pitch & learner pace
 */
export const speakEnglish = (text, rate = 0.88, onEnd = null) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  window.speechSynthesis.cancel();
  const clean = text.replace(/[^\p{L}\p{N}\s.,?!'-]/gu, '').trim();
  if (!clean) {
    if (onEnd) onEnd();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1.05;

  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  utterance.onend = () => {
    if (onEnd) onEnd();
  };
  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
};

/**
 * Starts speech recognition for English
 */
export const startSpeechRecognition = (onResult, onError) => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    if (onError) onError('Tarayıcınızda mikrofonla ses tanıma desteklenmiyor.');
    return null;
  }

  try {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (onResult) onResult(transcript);
    };

    recognition.onerror = (err) => {
      if (onError) onError(err.error);
    };

    recognition.start();
    return recognition;
  } catch (err) {
    if (onError) onError(err.message);
    return null;
  }
};
