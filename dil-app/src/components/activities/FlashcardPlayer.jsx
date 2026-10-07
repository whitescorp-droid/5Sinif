import React, { useState } from 'react';
import { RotateCw, Volume2, Sparkles, Check } from 'lucide-react';
import { speakWord } from '../../utils/speechUtils';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

export const FlashcardPlayer = ({ cards, activeLang, onComplete, soundEnabled }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);

  if (!cards || cards.length === 0) {
    return <div className="player-empty">Bu konuda bilgi kartı bulunamadı.</div>;
  }

  const current = cards[currentIndex];

  const handleFlip = () => {
    playSound('click', soundEnabled);
    setIsFlipped(prev => !prev);
  };

  const handleSpeak = (e, text) => {
    e.stopPropagation();
    playSound('click', soundEnabled);
    speakWord(text, activeLang);
  };

  const handleNext = (learned = false) => {
    if (learned) {
      setKnownCount(prev => prev + 1);
      playSound('correct', soundEnabled);
    } else {
      playSound('click', soundEnabled);
    }

    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      if (soundEnabled) playSound('celebrate');
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      if (onComplete) onComplete();
    }
  };

  return (
    <div className="activity-player-card">
      <div className="player-progress-header">
        <span className="step-tag">Kart {currentIndex + 1} / {cards.length}</span>
        <span className="step-score">Öğrenilen: ⭐ {knownCount}</span>
      </div>

      <div
        className={`flashcard-3d-box ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          {/* Front */}
          <div className="flashcard-face flashcard-front">
            <span className="hint-flip">👆 Dokun ve Arkasını Çevir</span>
            <h3 className="card-question">{current.front}</h3>
            {current.tip && (
              <div className="card-tip">
                <Sparkles size={16} /> {current.tip}
              </div>
            )}
            <div className="card-footer-action">
              <RotateCw size={18} /> Çevirmek İçin Tıkla
            </div>
          </div>

          {/* Back */}
          <div className="flashcard-face flashcard-back">
            <span className="hint-flip">Cevap & Açıklama</span>
            <div className="card-answer">{current.back}</div>
            {current.example && (
              <div className="card-example">
                <strong>Örnek:</strong> {current.example}
                <button
                  type="button"
                  className="btn-audio-mini"
                  onClick={(e) => handleSpeak(e, current.example)}
                >
                  <Volume2 size={16} /> Dinle
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="player-actions-dual">
        <button
          type="button"
          className="btn-action-half btn-repeat"
          onClick={() => handleNext(false)}
        >
          Tekrar Edeceğim 🔄
        </button>

        <button
          type="button"
          className="btn-action-half btn-learned"
          onClick={() => handleNext(true)}
        >
          <Check size={20} /> Öğrendim! 🌟
        </button>
      </div>
    </div>
  );
};
