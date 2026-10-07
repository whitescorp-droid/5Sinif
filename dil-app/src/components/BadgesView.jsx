import React from 'react';
import { Award, Star, Flame, CheckCircle2, Lock, Sparkles, Trophy } from 'lucide-react';
import { BADGES } from '../data/badgesData';
import { useDil } from '../context/DilContext';

export const BadgesView = () => {
  const { xp, streak, completedActivities, listenedWords, unlockedBadgeIds } = useDil();

  // Calculate Level
  const getLevelInfo = (xpAmount) => {
    if (xpAmount < 150) return { level: 1, title: 'Çaylak Kaşif 🌱', nextXp: 150, prevXp: 0 };
    if (xpAmount < 350) return { level: 2, title: 'Kelime Avcısı 🏹', nextXp: 350, prevXp: 150 };
    if (xpAmount < 700) return { level: 3, title: 'Akıcı Konuşmacı 🗣️', nextXp: 700, prevXp: 350 };
    if (xpAmount < 1200) return { level: 4, title: 'Dil Şampiyonu 🏆', nextXp: 1200, prevXp: 700 };
    return { level: 5, title: 'Dil Efsanesi 👑', nextXp: xpAmount, prevXp: 1200 };
  };

  const levelInfo = getLevelInfo(xp);
  const levelProgress = levelInfo.level === 5 ? 100 : Math.min(
    100,
    Math.round(((xp - levelInfo.prevXp) / (levelInfo.nextXp - levelInfo.prevXp)) * 100)
  );

  const completedActivitiesCount = Object.keys(completedActivities).length;
  const learnedWordsCount = Object.keys(listenedWords).length;

  return (
    <div className="badges-view-container">
      {/* Level Card */}
      <div className="level-hero-card">
        <div className="level-badge-circle">
          <Trophy size={36} className="trophy-icon" />
          <span className="level-number">{levelInfo.level}</span>
        </div>

        <div className="level-text-info">
          <span className="level-label">Mevcut Seviye</span>
          <h2 className="level-name">{levelInfo.title}</h2>
          <div className="level-bar-track">
            <div className="level-bar-fill" style={{ width: `${levelProgress}%` }} />
          </div>
          <span className="level-xp-sub">
            {levelInfo.level === 5 ? 'Maksimum Seviyeye Ulaştın!' : `${xp} / ${levelInfo.nextXp} XP (Sonraki Seviyeye %${levelProgress})`}
          </span>
        </div>
      </div>

      {/* Stats 4-Grid */}
      <div className="stats-four-grid">
        <div className="stat-card">
          <span className="stat-icon">🌟</span>
          <span className="stat-val">{xp}</span>
          <span className="stat-sub">Toplam XP</span>
        </div>

        <div className="stat-card">
          <span className="stat-icon">🔥</span>
          <span className="stat-val">{streak} Gün</span>
          <span className="stat-sub">Seri Ateşi</span>
        </div>

        <div className="stat-card">
          <span className="stat-icon">🎯</span>
          <span className="stat-val">{completedActivitiesCount}</span>
          <span className="stat-sub">Tamamlanan</span>
        </div>

        <div className="stat-card">
          <span className="stat-icon">💎</span>
          <span className="stat-val">{learnedWordsCount}</span>
          <span className="stat-sub">Kelimeler</span>
        </div>
      </div>

      {/* Badges Section */}
      <div className="badges-section-header">
        <Award size={22} className="award-icon" />
        <h3>Başarı Rozetleri ({unlockedBadgeIds.length} / {BADGES.length})</h3>
      </div>

      <div className="badges-grid-list">
        {BADGES.map((badge) => {
          const isUnlocked = unlockedBadgeIds.includes(badge.id);

          return (
            <div
              key={badge.id}
              className={`badge-card-item ${isUnlocked ? 'unlocked' : 'locked'}`}
            >
              <div
                className="badge-card-icon"
                style={{
                  background: isUnlocked ? `${badge.color}20` : '#F1F5F9',
                  borderColor: isUnlocked ? badge.color : '#CBD5E1'
                }}
              >
                <span>{badge.icon}</span>
                {!isUnlocked && (
                  <div className="badge-lock-overlay">
                    <Lock size={16} />
                  </div>
                )}
              </div>

              <div className="badge-card-info">
                <div className="badge-title-row">
                  <h4 className="badge-name">{badge.title}</h4>
                  {isUnlocked && <span className="unlocked-tag">Kazanıldı ✨</span>}
                </div>
                <p className="badge-desc">{badge.description}</p>
                <span className="badge-reward">+{badge.xpReward} XP Ödül</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
