import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Volume2, Play, CheckCircle2, Award, ChevronRight, RefreshCw, Sparkles, Mic } from 'lucide-react';
import { speakGerman, stopGermanSpeech } from '../../utils/speechUtils';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

export const PronunciationActivity = ({ topic, subjectId, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();
  const phrases = topic.pronunciationPhrases || [];

  const [playingIndex, setPlayingIndex] = useState(null);
  const [practicedIndices, setPracticedIndices] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  if (phrases.length === 0) {
    return (
      <div className="activity-empty-state">
        <p>Bu konu için henüz sesli telaffuz listesi eklenmedi.</p>
      </div>
    );
  }

  const handlePlay = (index, text, rate = 0.92) => {
    setPlayingIndex(index);
    speakGerman(text, rate, () => {
      setPlayingIndex(null);
    });

    if (!practicedIndices.includes(index)) {
      const nextPracticed = [...practicedIndices, index];
      setPracticedIndices(nextPracticed);

      // Check if finished
      if (nextPracticed.length === phrases.length) {
        completeActivity(subjectId, topic.id, 'pronunciation', phrases.length, phrases.length);
        setIsFinished(true);
        playSound('victory', soundEnabled);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setPracticedIndices([]);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="activity-finish-card">
        <div className="finish-icon-wrapper bg-blue">
          <Award size={48} className="finish-award-icon" />
        </div>
        <h3 className="finish-title">Ausgezeichnet! Harika Telaffuz! 🇩🇪</h3>
        <p className="finish-desc">
          "{topic.title}" ünitesindeki tüm Almanca kalıpları dinledin ve sesli tekrarlarını tamamladın.
        </p>
        <div className="finish-stat-box">
          <div className="stat-item">
            <span className="stat-label">Tekrar Edilen Sözcük</span>
            <span className="stat-val">{phrases.length} İfade</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Kazanılan Deneyim</span>
            <span className="stat-val text-gold">+50 XP ⭐</span>
          </div>
        </div>
        <div className="finish-actions">
          <button onClick={handleRestart} className="btn-secondary">
            <RefreshCw size={18} />
            <span>Tekrar Dinle</span>
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
    <div className="pronunciation-container">
      {/* Top Banner */}
      <div className="pronunciation-intro-box">
        <div className="intro-icon-box">🗣️</div>
        <div>
          <h4 className="intro-title">Sesli Telaffuz & Tekrar Stüdyosu (Aussprache-Labor)</h4>
          <p className="intro-desc">
            Almanca kelimelerin ve kalıpların üzerine tıklayarak doğal telaffuzunu dinle, 
            yavaş modda inceliklerini yakala ve yüksek sesle tekrar et!
          </p>
        </div>
      </div>

      {/* Progress header */}
      <div className="pronunciation-progress-row">
        <span className="progress-label">
          Dinlenen & Tekrar Edilen: <strong>{practicedIndices.length}</strong> / {phrases.length}
        </span>
        <div className="pronunciation-progress-track">
          <div
            className="pronunciation-progress-fill"
            style={{ width: `${(practicedIndices.length / phrases.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Phrases List */}
      <div className="phrases-grid">
        {phrases.map((item, idx) => {
          const isPlaying = playingIndex === idx;
          const isPracticed = practicedIndices.includes(idx);

          return (
            <div
              key={idx}
              className={`phrase-card ${isPracticed ? 'practiced' : ''} ${isPlaying ? 'playing' : ''}`}
            >
              <div className="phrase-card-content">
                <div className="phrase-de-row">
                  <span className="phrase-de-text">{item.german}</span>
                  {item.category && (
                    <span className="phrase-cat-pill">{item.category}</span>
                  )}
                </div>

                <div className="phrase-tr-text">{item.turkish}</div>

                {item.phonetic && (
                  <div className="phrase-phonetic">
                    <span>Okunuşu:</span> <em>[{item.phonetic}]</em>
                  </div>
                )}
              </div>

              <div className="phrase-audio-actions">
                <button
                  onClick={() => handlePlay(idx, item.german, 0.92)}
                  className={`btn-audio-play ${isPlaying ? 'pulse' : ''}`}
                  title="Doğal Hızda Dinle"
                >
                  <Volume2 size={20} />
                  <span>Dinle</span>
                </button>

                <button
                  onClick={() => handlePlay(idx, item.german, 0.70)}
                  className="btn-audio-slow"
                  title="Yavaş Hızda Dinle (Heceleme & Vurgu)"
                >
                  <span>🐢 Yavaş</span>
                </button>

                {isPracticed ? (
                  <span className="practiced-badge" title="Dinlendi ve tekrar edildi">
                    <CheckCircle2 size={18} />
                  </span>
                ) : (
                  <span className="unpracticed-dot" title="Henüz dinlenmedi"></span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
