import React, { useState } from 'react';
import { Volume2, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { speakWord } from '../../utils/speechUtils';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

export const PronunciationPlayer = ({ phrases, activeLang, onComplete, soundEnabled }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [practicedItems, setPracticedItems] = useState({});

  if (!phrases || phrases.length === 0) {
    return <div className="player-empty">Bu konuda telaffuz alıştırması bulunamadı.</div>;
  }

  const current = phrases[currentIndex];
  const targetText = activeLang === 'german' ? current.german : current.phrase || current.english || current.word;
  const translationText = current.turkish || current.meaning;
  const isDone = currentIndex === phrases.length - 1 && practicedItems[currentIndex];

  const handleSpeak = (rate = 0.88) => {
    setIsSpeaking(true);
    playSound('click', soundEnabled);
    speakWord(targetText, activeLang, () => {
      setIsSpeaking(false);
    });
    setPracticedItems(prev => ({ ...prev, [currentIndex]: true }));
  };

  const handleNext = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed all
      if (soundEnabled) playSound('celebrate');
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      if (onComplete) onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="activity-player-card">
      <div className="player-progress-header">
        <span className="step-tag">Telaffuz Kartı {currentIndex + 1} / {phrases.length}</span>
        <div className="step-dots">
          {phrases.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''} ${practicedItems[idx] ? 'done' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="voice-hero-box">
        {current.category && (
          <span className="category-badge">{current.category}</span>
        )}

        <h2 className="voice-target-text">{targetText}</h2>

        {current.phonetic && (
          <p className="voice-phonetic-text">{current.phonetic}</p>
        )}

        <div className="voice-meaning-box">
          <span className="meaning-label">Türkçe Karşılığı:</span>
          <span className="meaning-text">{translationText}</span>
        </div>

        {/* Audio buttons */}
        <div className="audio-actions-row">
          <button
            type="button"
            className={`btn-listen-main ${isSpeaking ? 'speaking' : ''}`}
            onClick={() => handleSpeak(0.88)}
          >
            <Volume2 size={32} />
            <span>Sesli Dinle</span>
          </button>

          <button
            type="button"
            className="btn-listen-slow"
            onClick={() => handleSpeak(0.70)}
            title="Yavaş tempoda dinle"
          >
            🐢 Yavaş
          </button>
        </div>
      </div>

      <div className="player-nav-footer">
        <button
          type="button"
          className="btn-nav secondary"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Önceki
        </button>

        <button
          type="button"
          className="btn-nav primary"
          onClick={handleNext}
        >
          {currentIndex === phrases.length - 1 ? (
            <>Tamamla & Kazan 🌟</>
          ) : (
            <>Sonraki 👉</>
          )}
        </button>
      </div>
    </div>
  );
};
