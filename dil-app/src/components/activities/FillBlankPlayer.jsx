import React, { useState } from 'react';
import { Sparkles, HelpCircle, Volume2 } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import { speakWord } from '../../utils/speechUtils';
import confetti from 'canvas-confetti';

export const FillBlankPlayer = ({ questions, activeLang, onComplete, soundEnabled }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState(null);
  const [score, setScore] = useState(0);

  if (!questions || questions.length === 0) {
    return <div className="player-empty">Bu konuda boşluk doldurma alıştırması bulunamadı.</div>;
  }

  const current = questions[currentIndex];
  const isAnswered = selectedWord !== null;
  const isCorrect = isAnswered && selectedWord === current.correctWord;

  const handleSelect = (word) => {
    if (isAnswered) return;
    setSelectedWord(word);

    if (word === current.correctWord) {
      playSound('correct', soundEnabled);
      setScore(prev => prev + 1);
    } else {
      playSound('wrong', soundEnabled);
    }
  };

  const handleNext = () => {
    setSelectedWord(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      if (soundEnabled) playSound('celebrate');
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      if (onComplete) onComplete();
    }
  };

  // Replace ___ with highlighted word or placeholder
  const renderSentence = () => {
    const parts = current.sentence.split('___');
    if (parts.length < 2) return current.sentence;

    return (
      <div className="fill-sentence-wrapper">
        <span>{parts[0]}</span>
        <span className={`fill-blank-slot ${isAnswered ? (isCorrect ? 'slot-correct' : 'slot-wrong') : ''}`}>
          {selectedWord || '______'}
        </span>
        <span>{parts[1]}</span>
      </div>
    );
  };

  return (
    <div className="activity-player-card">
      <div className="player-progress-header">
        <span className="step-tag">Boşluk Doldurma {currentIndex + 1} / {questions.length}</span>
        <span className="step-score">Puan: ⭐ {score}</span>
      </div>

      <div className="sentence-card-box">
        {renderSentence()}
        {current.hint && (
          <div className="sentence-hint-chip">
            <HelpCircle size={15} /> İpucu: {current.hint}
          </div>
        )}
      </div>

      <div className="fill-options-grid">
        {current.options.map((option, idx) => {
          let stateClass = '';
          if (isAnswered) {
            if (option === current.correctWord) stateClass = 'option-correct';
            else if (option === selectedWord) stateClass = 'option-wrong';
          }

          return (
            <button
              key={idx}
              type="button"
              className={`btn-fill-option ${stateClass}`}
              onClick={() => handleSelect(option)}
              disabled={isAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`tf-feedback-card ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
          <div className="feedback-status">
            {isCorrect ? '👏 Harika! Cümle tamamlandı!' : `💡 Doğru kelime: "${current.correctWord}"`}
          </div>
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
