import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { RotateCw, CheckCircle2, RefreshCw, Sparkles, ChevronRight, ChevronLeft, Award, Volume2 } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import { speakGerman } from '../../utils/speechUtils';
import confetti from 'canvas-confetti';

export const FlashcardActivity = ({ topic, subjectId, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();
  const cards = topic.flashcards || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [masteredCards, setMasteredCards] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  if (cards.length === 0) {
    return (
      <div className="activity-empty-state">
        <p>Bu konu için henüz bilgi kartı eklenmedi.</p>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    playSound('flip', soundEnabled);
  };

  const handleNext = (mastered = false) => {
    if (mastered && !masteredCards.includes(currentIndex)) {
      setMasteredCards([...masteredCards, currentIndex]);
    }

    if (currentIndex + 1 < cards.length) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setShowTip(false);
      playSound('click', soundEnabled);
    } else {
      // Activity completed
      const totalMastered = mastered ? masteredCards.length + 1 : masteredCards.length;
      completeActivity(subjectId, topic.id, 'flashcards', totalMastered, cards.length);
      setIsFinished(true);
      playSound('victory', soundEnabled);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowTip(false);
    setMasteredCards([]);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="activity-finish-card">
        <div className="finish-icon-wrapper">
          <Award size={48} className="finish-award-icon" />
        </div>
        <h3 className="finish-title">Harika İş Çıkardın! 🎉</h3>
        <p className="finish-desc">
          "{topic.title}" konusunun tüm akıllı bilgi kartlarını gözden geçirdin.
        </p>
        <div className="finish-stat-box">
          <div className="stat-item">
            <span className="stat-label">İncelenen Kart</span>
            <span className="stat-val">{cards.length} Adet</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Kazanılan Deneyim</span>
            <span className="stat-val text-gold">+40 XP ⭐</span>
          </div>
        </div>
        <div className="finish-actions">
          <button onClick={handleRestart} className="btn-secondary">
            <RefreshCw size={18} />
            <span>Tekrar İncele</span>
          </button>
          <button onClick={onFinish} className="btn-primary">
            <span>Diğer Etkinliklere Geç</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flashcard-container">
      {/* Top Header & Progress */}
      <div className="flashcard-header">
        <div className="flashcard-counter">
          Kart <strong>{currentIndex + 1}</strong> / {cards.length}
        </div>
        <div className="flashcard-progress-bar">
          <div
            className="flashcard-progress-fill"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>
        <div className="flashcard-badge-info">
          <Sparkles size={16} /> 5. Sınıf Maarif Modeli
        </div>
      </div>

      {/* 3D Flip Card */}
      <div 
        className={`flip-card-wrapper ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          {/* FRONT */}
          <div className="flip-card-face flip-card-front">
            <div className="card-top-tags">
              <span className="card-tag">Soru & Kavram</span>
              {subjectId === 'almanca' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakGerman(currentCard.front);
                  }}
                  className="btn-card-audio"
                  title="Almanca Telaffuzu Dinle"
                >
                  <Volume2 size={18} />
                  <span>Dinle</span>
                </button>
              )}
            </div>
            <div className="card-question-text">
              {currentCard.front}
            </div>
            <div className="card-flip-prompt">
              <RotateCw size={18} className="spin-hover" />
              <span>Cevabı görmek için karta dokun</span>
            </div>
          </div>

          {/* BACK */}
          <div className="flip-card-face flip-card-back">
            <div className="card-top-tags">
              <span className="card-tag card-tag-answer">Açıklama & Çözüm</span>
              {subjectId === 'almanca' && currentCard.example && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakGerman(currentCard.example);
                  }}
                  className="btn-card-audio"
                  title="Örnek Cümlenin Telaffuzunu Dinle"
                >
                  <Volume2 size={18} />
                  <span>Örneği Dinle</span>
                </button>
              )}
            </div>
            <div className="card-answer-text">
              {currentCard.back}
            </div>

            {currentCard.example && (
              <div className="card-example-box" onClick={(e) => e.stopPropagation()}>
                <strong>📌 Örnek:</strong> {currentCard.example}
              </div>
            )}

            <div className="card-flip-prompt">
              <RotateCw size={16} />
              <span>Tekrar çevirmek için dokun</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tip Box */}
      {currentCard.tip && (
        <div className="card-tip-container">
          <button
            onClick={() => setShowTip(!showTip)}
            className="tip-toggle-btn"
          >
            <span>💡 İpucu & Püf Noktası</span>
            <span>{showTip ? 'Gizle' : 'Göster'}</span>
          </button>
          {showTip && (
            <div className="tip-content-box animate-fadeIn">
              {currentCard.tip}
            </div>
          )}
        </div>
      )}

      {/* Bottom action controls */}
      <div className="flashcard-controls">
        <button
          onClick={() => handleNext(false)}
          className="card-action-btn btn-repeat"
          title="Bir sonraki sefere tekrar gözden geçir"
        >
          <RefreshCw size={18} />
          <span>Tekrar Edeceğim</span>
        </button>

        <button
          onClick={handleFlip}
          className="card-action-btn btn-flip"
        >
          <RotateCw size={18} />
          <span>{isFlipped ? 'Soruyu Gör' : 'Cevabı Çevir'}</span>
        </button>

        <button
          onClick={() => handleNext(true)}
          className="card-action-btn btn-mastered"
          title="Bu bilgiyi çok iyi kavradım!"
        >
          <CheckCircle2 size={18} />
          <span>Öğrendim! 👍</span>
        </button>
      </div>
    </div>
  );
};
