import React, { useState } from 'react';
import { Check, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

export const TrueFalsePlayer = ({ questions, activeLang, onComplete, soundEnabled }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  if (!questions || questions.length === 0) {
    return <div className="player-empty">Bu konuda Doğru/Yanlış sorusu bulunamadı.</div>;
  }

  const current = questions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = isAnswered && selectedAnswer === current.isTrue;

  const handleSelect = (userChoice) => {
    if (isAnswered) return;
    setSelectedAnswer(userChoice);

    if (userChoice === current.isTrue) {
      playSound('correct', soundEnabled);
      setScore(prev => prev + 1);
    } else {
      playSound('wrong', soundEnabled);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentIndex < questions.length - 1) {
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
        <span className="step-tag">Soru {currentIndex + 1} / {questions.length}</span>
        <span className="step-score">Doğru: ⭐ {score}</span>
      </div>

      <div className="tf-statement-box">
        <span className="tf-label">Bu ifade doğru mu yoksa yanlış mı?</span>
        <h3 className="tf-text">"{current.text}"</h3>
      </div>

      {/* Action Buttons */}
      <div className="tf-actions-row">
        <button
          type="button"
          className={`btn-tf btn-tf-true ${selectedAnswer === true ? (current.isTrue ? 'correct-glow' : 'wrong-glow') : ''}`}
          onClick={() => handleSelect(true)}
          disabled={isAnswered}
        >
          <Check size={28} />
          <span>DOĞRU</span>
        </button>

        <button
          type="button"
          className={`btn-tf btn-tf-false ${selectedAnswer === false ? (!current.isTrue ? 'correct-glow' : 'wrong-glow') : ''}`}
          onClick={() => handleSelect(false)}
          disabled={isAnswered}
        >
          <X size={28} />
          <span>YANLIŞ</span>
        </button>
      </div>

      {/* Feedback banner */}
      {isAnswered && (
        <div className={`tf-feedback-card ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
          <div className="feedback-status">
            {isCorrect ? '🎉 Tebrikler! Doğru Bildin!' : '💡 Dikkat! Tekrar Bakalım:'}
          </div>
          {current.explanation && (
            <p className="feedback-explanation">{current.explanation}</p>
          )}
          <button
            type="button"
            className="btn-next-step"
            onClick={handleNext}
          >
            {currentIndex === questions.length - 1 ? 'Bitir & Puanı Al 🏆' : 'Sonraki Soru 👉'}
          </button>
        </div>
      )}
    </div>
  );
};
