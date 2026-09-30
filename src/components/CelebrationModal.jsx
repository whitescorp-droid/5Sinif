import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { Sparkles, Award, ArrowRight, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CelebrationModal = () => {
  const { newlyUnlockedBadge, setNewlyUnlockedBadge, levelUpInfo, setLevelUpInfo } = useGame();

  useEffect(() => {
    if (newlyUnlockedBadge || levelUpInfo) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 }
      });
    }
  }, [newlyUnlockedBadge, levelUpInfo]);

  if (!newlyUnlockedBadge && !levelUpInfo) return null;

  if (levelUpInfo) {
    return (
      <div className="modal-backdrop celebration-backdrop">
        <div className="celebration-card animate-pop">
          <div className="celebration-star-crown">👑</div>
          <h2 className="celebration-title">TEBRİKLER! SEVİYE ATLADIN!</h2>
          <div className="celebration-level-badge">
            Seviye {levelUpInfo.newLevel}
          </div>
          <p className="celebration-subtitle">Yeni Unvanın: <strong>{levelUpInfo.title}</strong></p>
          <p className="celebration-desc">
            Çalışmalarına devam ettikçe bilgi seviyen yükseliyor. Harikasın!
          </p>
          <button 
            onClick={() => setLevelUpInfo(null)}
            className="btn-celebration"
          >
            <span>Harika, Devam Et!</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (newlyUnlockedBadge) {
    return (
      <div className="modal-backdrop celebration-backdrop">
        <div className="celebration-card animate-pop">
          <div className="celebration-badge-icon">
            {newlyUnlockedBadge.icon}
          </div>
          <div className="badge-unlock-tag">YENİ ROZET AÇILDI! 🏆</div>
          <h2 className="celebration-title">{newlyUnlockedBadge.title}</h2>
          <p className="celebration-desc">{newlyUnlockedBadge.description}</p>
          <div className="celebration-reward-pill">
            <Sparkles size={18} /> +{newlyUnlockedBadge.xpReward} XP Ödülü Eklendi
          </div>
          <button 
            onClick={() => setNewlyUnlockedBadge(null)}
            className="btn-celebration"
          >
            <span>Rozetimi Al! 🌟</span>
          </button>
        </div>
      </div>
    );
  }

  return null;
};
