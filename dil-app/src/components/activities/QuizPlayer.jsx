import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

export const QuizPlayer = ({ questions, activeLang, onComplete, soundEnabled }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [score, setScore] = useState(0);

  if (!questions || questions.length === 0) {
    return <div className="player-empty">Bu konuda test sorusu bulunamadı.</div>;
  }

  const current = questions[currentIndex];
  const isAnswered = selectedIdx !== null;
  const isCorrect = isAnswered && selectedIdx === current.correctAnswerIndex;

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelectedIdx(idx);

    if (idx === current.correctAnswerIndex) {
      playSound('correct', soundEnabled);
      setScore(prev => prev + 1);
    } else {
      playSound('wrong', soundEnabled);
    }
  };

  const handleNext = () => {
    setSelectedIdx(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      if (soundEnabled) playSound('celebrate');
      confetti({ particleCount: 80, spread: 75, origin: { y: 0.6 } });
      if (onComplete) onComplete();
    }
  };

  return (
    <div className="activity-player-card">
      <div className="player-progress-header">
        <span className="step-tag">Test Sorusu {currentIndex + 1} / {questions.length}</span>
        <span className="step-score">Doğru: ⭐ {score}</span>
      </div>

      <div className="quiz-question-box">
        <h3 className="quiz-question-text">{current.question}</h3>
        {current.hint && (
          <div className="sentence-hint-chip">
            <HelpCircle size={15} /> İpucu: {current.hint}
          </div>
        )}
      </div>

      <div className="quiz-options-list">
        {current.options.map((opt, idx) => {
          let optionClass = '';
          if (isAnswered) {
            if (idx === current.correctAnswerIndex) optionClass = 'quiz-correct';
            else if (idx === selectedIdx) optionClass = 'quiz-wrong';
          }

          const optionLetters = ['A', 'B', 'C', 'D'];

          return (
            <button
              key={idx}
              type="button"
              className={`btn-quiz-option ${optionClass}`}
              onClick={() => handleSelect(idx)}
              disabled={isAnswered}
            >
              <span className="quiz-letter">{optionLetters[idx]}</span>
              <span className="quiz-option-text">{opt}</span>
              {isAnswered && idx === current.correctAnswerIndex && (
                <CheckCircle2 size={20} className="quiz-status-icon success" />
              )}
              {isAnswered && idx === selectedIdx && idx !== current.correctAnswerIndex && (
                <XCircle size={20} className="quiz-status-icon error" />
              )}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`tf-feedback-card ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
          <div className="feedback-status">
            {isCorrect ? '🎉 Tebrikler! Doğru Seçenek!' : '💡 Çözüm Açıklaması:'}
          </div>
          {current.explanation && (
            <p className="feedback-explanation">{current.explanation}</p>
          )}
          <button
            type="button"
            className="btn-next-step"
            onClick={handleNext}
          >
            {currentIndex === questions.length - 1 ? 'Testi Bitir & XP Al 🏆' : 'Sonraki Soru 👉'}
          </button>
        </div>
      )}
    </div>
  );
};
