import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Sparkles, Check, X, RefreshCw, Award, ChevronRight, HelpCircle, BookOpen } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const QuizActivity = ({ topic, subjectId, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();
  const questions = topic.quiz || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="activity-empty-state">
        <p>Bu konu için henüz pekiştirme testi eklenmedi.</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctAnswerIndex;

    if (isCorrect) {
      playSound('correct', soundEnabled);
      setScore(score + 1);
    } else {
      playSound('wrong', soundEnabled);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowHint(false);
      playSound('click', soundEnabled);
    } else {
      completeActivity(subjectId, topic.id, 'quiz', score, questions.length);
      setIsFinished(true);
      playSound('victory', soundEnabled);
      if (score >= Math.ceil(questions.length * 0.7)) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowHint(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const isPerfect = score === questions.length;

    return (
      <div className="activity-finish-card">
        <div className={`finish-icon-wrapper ${isPerfect ? 'bg-gold' : 'bg-green'}`}>
          <Award size={48} className="finish-award-icon" />
        </div>
        <h3 className="finish-title">
          {isPerfect ? 'Kusursuz Başarı! 🌟 100 Tam Puan!' : 'Testi Tamamladın! 🎯'}
        </h3>
        <p className="finish-desc">
          "{topic.title}" ünitesi pekiştirme testini başarıyla bitirdin.
        </p>
        <div className="finish-stat-box">
          <div className="stat-item">
            <span className="stat-label">Doğru Sayısı</span>
            <span className="stat-val">{score} / {questions.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Başarı Yüzdesi</span>
            <span className="stat-val">%{percentage}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Kazanılan XP</span>
            <span className="stat-val text-gold">+{isPerfect ? '60' : '45'} XP ⭐</span>
          </div>
        </div>
        <div className="finish-actions">
          <button onClick={handleRestart} className="btn-secondary">
            <RefreshCw size={18} />
            <span>Testi Tekrar Çöz</span>
          </button>
          <button onClick={onFinish} className="btn-primary">
            <span>Ders Menüsüne Dön</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {/* Top Header */}
      <div className="quiz-header">
        <div className="quiz-info-left">
          <span className="quiz-q-num">Soru {currentIndex + 1} / {questions.length}</span>
          <span className="quiz-kazanim-badge">{topic.kazanimCode}</span>
        </div>
        <div className="quiz-score-chip">
          Doğru: <strong>{score}</strong>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="quiz-question-box">
        <h3 className="quiz-question-text">{currentQ.question}</h3>
      </div>

      {/* Hint toggle */}
      {currentQ.hint && (
        <div className="quiz-hint-row">
          <button
            onClick={() => setShowHint(!showHint)}
            className="btn-quiz-hint"
          >
            <HelpCircle size={16} />
            <span>{showHint ? 'İpucunu Kapat' : 'İpucu Göster 💡'}</span>
          </button>
          {showHint && (
            <div className="quiz-hint-content animate-fadeIn">
              {currentQ.hint}
            </div>
          )}
        </div>
      )}

      {/* Options List */}
      <div className="quiz-options-grid">
        {currentQ.options.map((option, idx) => {
          let btnStateClass = '';
          if (isAnswered) {
            if (idx === currentQ.correctAnswerIndex) {
              btnStateClass = 'correct-opt';
            } else if (idx === selectedOption) {
              btnStateClass = 'wrong-opt';
            } else {
              btnStateClass = 'dimmed-opt';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              disabled={isAnswered}
              className={`quiz-option-btn ${btnStateClass}`}
            >
              <div className="option-letter">{OPTION_LETTERS[idx]}</div>
              <div className="option-text">{option}</div>
              {isAnswered && idx === currentQ.correctAnswerIndex && (
                <Check size={20} className="option-state-icon text-success" />
              )}
              {isAnswered && idx === selectedOption && idx !== currentQ.correctAnswerIndex && (
                <X size={20} className="option-state-icon text-danger" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation & Next step */}
      {isAnswered && (
        <div className="quiz-feedback-container animate-fadeIn">
          <div className="quiz-explanation-box">
            <div className="explanation-title">
              <BookOpen size={18} />
              <span>Maarif Modeli Çözüm Açıklaması:</span>
            </div>
            <p className="explanation-text">{currentQ.explanation}</p>
          </div>
          <button onClick={handleNext} className="btn-primary btn-next-question">
            <span>{currentIndex + 1 < questions.length ? 'Sonraki Soruya Geç' : 'Testi Bitir'}</span>
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};
