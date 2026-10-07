import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import { speakWord } from '../../utils/speechUtils';
import confetti from 'canvas-confetti';

export const MatchingPlayer = ({ pairs, activeLang, onComplete, soundEnabled }) => {
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState({});
  const [shuffledRights, setShuffledRights] = useState([]);
  const [errorPair, setErrorPair] = useState(null);

  useEffect(() => {
    if (pairs && pairs.length > 0) {
      // Shuffle right side
      const rights = pairs.map(p => ({ id: p.id, text: p.right }));
      setShuffledRights([...rights].sort(() => Math.random() - 0.5));
      setMatchedPairs({});
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  }, [pairs]);

  if (!pairs || pairs.length === 0) {
    return <div className="player-empty">Bu konuda eşleştirme oyunu bulunamadı.</div>;
  }

  const handleSelectLeft = (pair) => {
    if (matchedPairs[pair.id]) return;
    playSound('click', soundEnabled);
    speakWord(pair.left, activeLang);
    setSelectedLeft(pair);
    checkMatch(pair, selectedRight);
  };

  const handleSelectRight = (item) => {
    if (matchedPairs[item.id]) return;
    playSound('click', soundEnabled);
    setSelectedRight(item);
    checkMatch(selectedLeft, item);
  };

  const checkMatch = (left, right) => {
    if (!left || !right) return;

    if (left.id === right.id) {
      // Correct Match!
      playSound('correct', soundEnabled);
      const newMatches = { ...matchedPairs, [left.id]: true };
      setMatchedPairs(newMatches);
      setSelectedLeft(null);
      setSelectedRight(null);

      // Check if all matched
      if (Object.keys(newMatches).length === pairs.length) {
        if (soundEnabled) playSound('celebrate');
        confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1200);
      }
    } else {
      // Wrong Match
      playSound('wrong', soundEnabled);
      setErrorPair({ leftId: left.id, rightId: right.id });
      setTimeout(() => {
        setErrorPair(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 700);
    }
  };

  const isAllDone = Object.keys(matchedPairs).length === pairs.length;

  return (
    <div className="activity-player-card">
      <div className="player-progress-header">
        <span className="step-tag">Eşleştirme Oyunu</span>
        <span className="step-score">
          Eşleşen: {Object.keys(matchedPairs).length} / {pairs.length}
        </span>
      </div>

      <p className="matching-instruction">
        👉 Sol sütundaki yabancı kelimeye, ardından sağdaki Türkçe anlamına dokun!
      </p>

      <div className="matching-grid-columns">
        {/* Left Column (Foreign Word) */}
        <div className="matching-col">
          <span className="col-label">{activeLang === 'german' ? '🇩🇪 Almanca' : '🇬🇧 İngilizce'}</span>
          {pairs.map((pair) => {
            const isMatched = !!matchedPairs[pair.id];
            const isSelected = selectedLeft?.id === pair.id;
            const isError = errorPair?.leftId === pair.id;

            return (
              <button
                key={pair.id}
                type="button"
                className={`match-btn match-left ${isSelected ? 'selected' : ''} ${isMatched ? 'matched' : ''} ${isError ? 'error' : ''}`}
                onClick={() => handleSelectLeft(pair)}
                disabled={isMatched}
              >
                <span>{pair.left}</span>
                {isMatched && <CheckCircle2 size={18} className="matched-icon" />}
              </button>
            );
          })}
        </div>

        {/* Right Column (Turkish) */}
        <div className="matching-col">
          <span className="col-label">🇹🇷 Türkçe Anlamı</span>
          {shuffledRights.map((item) => {
            const isMatched = !!matchedPairs[item.id];
            const isSelected = selectedRight?.id === item.id;
            const isError = errorPair?.rightId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                className={`match-btn match-right ${isSelected ? 'selected' : ''} ${isMatched ? 'matched' : ''} ${isError ? 'error' : ''}`}
                onClick={() => handleSelectRight(item)}
                disabled={isMatched}
              >
                <span>{item.text}</span>
                {isMatched && <CheckCircle2 size={18} className="matched-icon" />}
              </button>
            );
          })}
        </div>
      </div>

      {isAllDone && (
        <div className="all-matched-banner">
          🎉 Harika! Tüm eşleştirmeleri tamamladın!
        </div>
      )}
    </div>
  );
};
