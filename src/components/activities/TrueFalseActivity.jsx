import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Check, X, Sparkles, RefreshCw, Award, ChevronRight, Zap } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

export const TrueFalseActivity = ({ topic, subjectId, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();
  const questions = topic.trueFalse || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // boolean or null
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="activity-empty-state">
        <p>Bu konu için henüz Doğru/Yanlış etkinliği eklenmedi.</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleAnswer = (choice) => {
    if (isAnswered) return;

    setSelectedAnswer(choice);
    setIsAnswered(true);

    const isCorrect = choice === currentQ.isTrue;

    if (isCorrect) {
      playSound('correct', soundEnabled);
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
    } else {
      playSound('wrong', soundEnabled);
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      playSound('click', soundEnabled);
    } else {
      // Completed!
      completeActivity(subjectId, topic.id, 'trueFalse', score, questions.length);
      setIsFinished(true);
      playSound('victory', soundEnabled);
      if (score >= questions.length * 0.7) {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="activity-finish-card">
        <div className="finish-icon-wrapper bg-orange">
          <Zap size={48} className="finish-award-icon" />
        </div>
        <h3 className="finish-title">Hızlı Tur Tamamlandı! ⚡</h3>
        <p className="finish-desc">
          "{topic.title}" konusunda seri kararlar verdin ve bilgilerini test ettin.
        </p>
        <div className="finish-stat-box">
          <div className="stat-item">
            <span className="stat-label">Doğru Sayısı</span>
            <span className="stat-val">{score} / {questions.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Başarı Oranı</span>
            <span className="stat-val">%{percentage}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">En İyi Seri</span>
            <span className="stat-val text-orange">🔥 {bestStreak}</span>
          </div>
        </div>
        <div className="finish-actions">
          <button onClick={handleRestart} className="btn-secondary">
            <RefreshCw size={18} />
            <span>Tekrar Dene</span>
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
    <div className="tf-container">
      {/* Header bar */}
      <div className="tf-header">
        <div className="tf-progress-info">
          Soru <strong>{currentIndex + 1}</strong> / {questions.length}
        </div>
        {streak > 1 && (
          <div className="combo-badge animate-bounce">
            <Zap size={16} /> {streak} Seri Combo! 🔥
          </div>
        )}
        <div className="tf-score-chip">
          Puan: <strong>{score}</strong>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="tf-progress-bar">
        <div
          className="tf-progress-fill"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="tf-card">
        <div className="tf-badge">Doğru mu? Yanlış mı?</div>
        <p className="tf-statement-text">
          "{currentQ.text}"
        </p>
      </div>

      {/* Answer Buttons */}
      {!isAnswered ? (
        <div className="tf-actions-grid">
          <button
            onClick={() => handleAnswer(true)}
            className="tf-btn tf-btn-true"
          >
            <div className="tf-btn-icon"><Check size={32} /></div>
            <div className="tf-btn-label">DOĞRU</div>
          </button>

          <button
            onClick={() => handleAnswer(false)}
            className="tf-btn tf-btn-false"
          >
            <div className="tf-btn-icon"><X size={32} /></div>
            <div className="tf-btn-label">YANLIŞ</div>
          </button>
        </div>
      ) : (
        /* Feedback Panel */
        <div className={`tf-feedback-card ${selectedAnswer === currentQ.isTrue ? 'correct' : 'wrong'} animate-fadeIn`}>
          <div className="feedback-header">
            {selectedAnswer === currentQ.isTrue ? (
              <span className="feedback-result text-success">
                <Check size={24} /> Tebrikler, Doğru Cevap! 🎯
              </span>
            ) : (
              <span className="feedback-result text-danger">
                <X size={24} /> Dikkat, Cevabın Doğru Değildi!
              </span>
            )}
          </div>
          <div className="feedback-explanation">
            <strong>Maarif Modeli Açıklaması:</strong> {currentQ.explanation}
          </div>
          <button onClick={handleNext} className="btn-next-step">
            <span>{currentIndex + 1 < questions.length ? 'Sonraki Cümleye Geç' : 'Sonucu Gör'}</span>
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
