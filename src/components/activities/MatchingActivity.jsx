import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { Sparkles, Check, RefreshCw, Award, ChevronRight } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

export const MatchingActivity = ({ topic, subjectId, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();
  const pairs = topic.matching || [];

  const [shuffledRights, setShuffledRights] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize and shuffle
  useEffect(() => {
    if (pairs.length > 0) {
      const rights = pairs.map(p => ({ id: p.id, text: p.right }));
      // Fisher-Yates shuffle
      for (let i = rights.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rights[i], rights[j]] = [rights[j], rights[i]];
      }
      setShuffledRights(rights);
      setSelectedLeft(null);
      setSelectedRight(null);
      setMatchedIds([]);
      setWrongPair(null);
      setAttempts(0);
      setIsFinished(false);
    }
  }, [topic]);

  if (pairs.length === 0) {
    return (
      <div className="activity-empty-state">
        <p>Bu konu için henüz eşleştirme etkinliği eklenmedi.</p>
      </div>
    );
  }

  // Handle clicking left item
  const handleLeftClick = (id) => {
    if (matchedIds.includes(id) || wrongPair) return;
    playSound('click', soundEnabled);
    setSelectedLeft(id);

    if (selectedRight !== null) {
      checkMatch(id, selectedRight);
    }
  };

  // Handle clicking right item
  const handleRightClick = (id) => {
    if (matchedIds.includes(id) || wrongPair) return;
    playSound('click', soundEnabled);
    setSelectedRight(id);

    if (selectedLeft !== null) {
      checkMatch(selectedLeft, id);
    }
  };

  const checkMatch = (leftId, rightId) => {
    setAttempts(prev => prev + 1);

    if (leftId === rightId) {
      // Correct Match!
      playSound('correct', soundEnabled);
      const newMatched = [...matchedIds, leftId];
      setMatchedIds(newMatched);
      setSelectedLeft(null);
      setSelectedRight(null);

      // Check if finished
      if (newMatched.length === pairs.length) {
        completeActivity(subjectId, topic.id, 'matching', pairs.length, pairs.length);
        setIsFinished(true);
        playSound('victory', soundEnabled);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      // Wrong Match
      playSound('wrong', soundEnabled);
      setWrongPair({ left: leftId, right: rightId });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 900);
    }
  };

  const handleRestart = () => {
    const rights = [...pairs.map(p => ({ id: p.id, text: p.right }))];
    for (let i = rights.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rights[i], rights[j]] = [rights[j], rights[i]];
    }
    setShuffledRights(rights);
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedIds([]);
    setWrongPair(null);
    setAttempts(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="activity-finish-card">
        <div className="finish-icon-wrapper bg-purple">
          <Award size={48} className="finish-award-icon" />
        </div>
        <h3 className="finish-title">Tebrikler, Tüm Kavramlar Eşleşti! 🧩</h3>
        <p className="finish-desc">
          "{topic.title}" konusunun tüm terimlerini başarıyla birbirine bağladın.
        </p>
        <div className="finish-stat-box">
          <div className="stat-item">
            <span className="stat-label">Toplam Eşleşme</span>
            <span className="stat-val">{pairs.length} Çift</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Hamle Sayısı</span>
            <span className="stat-val">{attempts} Hamle</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Kazanılan XP</span>
            <span className="stat-val text-gold">+50 XP ⭐</span>
          </div>
        </div>
        <div className="finish-actions">
          <button onClick={handleRestart} className="btn-secondary">
            <RefreshCw size={18} />
            <span>Tekrar Oyna</span>
          </button>
          <button onClick={onFinish} className="btn-primary">
            <span>Konu Menüsüne Dön</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="matching-container">
      <div className="matching-header">
        <div className="matching-instructions">
          💡 Sol sütundaki kavram ile sağ sütundaki doğru açıklamayı seçerek eşleştir!
        </div>
        <div className="matching-counter">
          Eşleşen: <strong>{matchedIds.length}</strong> / {pairs.length}
        </div>
      </div>

      <div className="matching-columns-grid">
        {/* Left Column (Concepts) */}
        <div className="matching-col">
          <h4 className="matching-col-title">Kavramlar / Terimler</h4>
          <div className="matching-list">
            {pairs.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedLeft === item.id;
              const isWrong = wrongPair && wrongPair.left === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleLeftClick(item.id)}
                  disabled={isMatched}
                  className={`matching-card ${isSelected ? 'selected' : ''} ${isMatched ? 'matched' : ''} ${isWrong ? 'wrong shake' : ''}`}
                >
                  <span className="card-item-text">{item.left}</span>
                  {isMatched && <Check size={18} className="matched-check" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column (Descriptions) */}
        <div className="matching-col">
          <h4 className="matching-col-title">Açıklamalar / Karşılıklar</h4>
          <div className="matching-list">
            {shuffledRights.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedRight === item.id;
              const isWrong = wrongPair && wrongPair.right === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleRightClick(item.id)}
                  disabled={isMatched}
                  className={`matching-card matching-card-right ${isSelected ? 'selected' : ''} ${isMatched ? 'matched' : ''} ${isWrong ? 'wrong shake' : ''}`}
                >
                  <span className="card-item-text">{item.text}</span>
                  {isMatched && <Check size={18} className="matched-check" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
