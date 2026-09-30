import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Sparkles, Check, RefreshCw, Award, ChevronRight, HelpCircle } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

export const FillBlankActivity = ({ topic, subjectId, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();
  const items = topic.fillBlank || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (items.length === 0) {
    return (
      <div className="activity-empty-state">
        <p>Bu konu için henüz boşluk doldurma etkinliği eklenmedi.</p>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  const handleSelectWord = (word) => {
    if (isAnswered) return;
    setSelectedWord(word);
    playSound('click', soundEnabled);
  };

  const handleCheck = () => {
    if (!selectedWord) return;
    setIsAnswered(true);

    const isCorrect = selectedWord.toLowerCase() === currentItem.correctWord.toLowerCase();

    if (isCorrect) {
      playSound('correct', soundEnabled);
      setScore(score + 1);
    } else {
      playSound('wrong', soundEnabled);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < items.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedWord('');
      setIsAnswered(false);
      setShowHint(false);
      playSound('click', soundEnabled);
    } else {
      completeActivity(subjectId, topic.id, 'fillBlank', score, items.length);
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
    setSelectedWord('');
    setIsAnswered(false);
    setShowHint(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="activity-finish-card">
        <div className="finish-icon-wrapper bg-blue">
          <Award size={48} className="finish-award-icon" />
        </div>
        <h3 className="finish-title">Cümleleri Başarıyla Tamamladın! ✏️</h3>
        <p className="finish-desc">
          "{topic.title}" konusundaki kilit kavramları yerli yerine yerleştirdin.
        </p>
        <div className="finish-stat-box">
          <div className="stat-item">
            <span className="stat-label">Doğru Tamamlama</span>
            <span className="stat-val">{score} / {items.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Kazanılan XP</span>
            <span className="stat-val text-gold">+45 XP ⭐</span>
          </div>
        </div>
        <div className="finish-actions">
          <button onClick={handleRestart} className="btn-secondary">
            <RefreshCw size={18} />
            <span>Tekrar Çöz</span>
          </button>
          <button onClick={onFinish} className="btn-primary">
            <span>Konu Menüsüne Dön</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // Render sentence with slot
  const parts = currentItem.sentence.split('___');

  return (
    <div className="fb-container">
      {/* Header */}
      <div className="fb-header">
        <div className="fb-counter">
          Cümle <strong>{currentIndex + 1}</strong> / {items.length}
        </div>
        <div className="fb-progress-bar">
          <div
            className="fb-progress-fill"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
          />
        </div>
        <div className="fb-score">
          Puan: <strong>{score}</strong>
        </div>
      </div>

      {/* Sentence Box */}
      <div className="fb-sentence-card">
        <p className="fb-sentence-text">
          {parts[0]}
          <span className={`fb-slot ${selectedWord ? 'filled' : ''} ${isAnswered ? (selectedWord.toLowerCase() === currentItem.correctWord.toLowerCase() ? 'correct' : 'wrong') : ''}`}>
            {selectedWord || '__________'}
          </span>
          {parts[1]}
        </p>
      </div>

      {/* Hint */}
      {currentItem.hint && (
        <div className="fb-hint-row">
          <button
            onClick={() => setShowHint(!showHint)}
            className="btn-hint"
          >
            <HelpCircle size={16} />
            <span>{showHint ? 'İpucunu Kapat' : 'İpucu İster misin?'}</span>
          </button>
          {showHint && (
            <span className="hint-text animate-fadeIn">💡 {currentItem.hint}</span>
          )}
        </div>
      )}

      {/* Word Bank Options */}
      {!isAnswered ? (
        <div className="fb-wordbank-container">
          <h4 className="wordbank-title">Uygun Sözcüğü Seç:</h4>
          <div className="wordbank-grid">
            {currentItem.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectWord(option)}
                className={`word-pill ${selectedWord === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="fb-submit-row">
            <button
              onClick={handleCheck}
              disabled={!selectedWord}
              className="btn-primary btn-check"
            >
              <span>Cevabı Kontrol Et</span>
              <Check size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* Feedback after answer */
        <div className={`fb-feedback-box ${selectedWord.toLowerCase() === currentItem.correctWord.toLowerCase() ? 'correct' : 'wrong'} animate-fadeIn`}>
          <div className="feedback-text">
            {selectedWord.toLowerCase() === currentItem.correctWord.toLowerCase() ? (
              <p>🎯 <strong>Harika!</strong> Doğru kelimeyi yerleştirdin.</p>
            ) : (
              <p>❌ <strong>Tekrar Hatırla:</strong> Doğru kelime "<strong>{currentItem.correctWord}</strong>" olmalıydı.</p>
            )}
          </div>
          <button onClick={handleNext} className="btn-primary">
            <span>{currentIndex + 1 < items.length ? 'Sıradaki Cümleye Geç' : 'Sonucu Gör'}</span>
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
