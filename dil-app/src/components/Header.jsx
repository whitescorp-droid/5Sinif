import React from 'react';
import { Volume2, VolumeX, Flame, Star, Globe2, RefreshCw } from 'lucide-react';
import { useDil } from '../context/DilContext';
import { playSound } from '../utils/soundEffects';

export const Header = ({ onOpenProfile, onOpenUpdate }) => {
  const {
    activeLang,
    setActiveLang,
    studentName,
    studentAvatar,
    xp,
    streak,
    soundEnabled,
    setSoundEnabled
  } = useDil();

  const handleLangToggle = (lang) => {
    playSound('click', soundEnabled);
    setActiveLang(lang);
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) playSound('click', true);
  };

  return (
    <header className="mobile-header">
      {/* Top row: Profile & stats */}
      <div className="header-top-row">
        <div className="header-brand-user-group">
          <div className="header-brand-badge">
            <img src="/favicon.png" alt="Mingo" className="mingo-logo-img" />
            <span className="mingo-title-text">Mingo</span>
          </div>

          <button
            type="button"
            className="user-pill-btn"
            onClick={onOpenProfile}
            title="Profili Düzenle"
          >
            <span className="user-avatar-emoji">{studentAvatar}</span>
            <span className="user-display-name">{studentName}</span>
          </button>
        </div>

        <div className="header-stats-group">
          <div className="stat-capsule streak">
            <Flame size={18} className="fire-icon" />
            <span>{streak}</span>
          </div>

          <div className="stat-capsule xp">
            <Star size={18} className="star-icon" />
            <span>{xp} XP</span>
          </div>

          <button
            type="button"
            className="sound-toggle-btn"
            onClick={toggleSound}
            title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>

          <button
            type="button"
            className="update-trigger-btn"
            onClick={() => {
              playSound('click', soundEnabled);
              if (onOpenUpdate) onOpenUpdate();
            }}
            title="Güncellemeleri Denetle"
          >
            <RefreshCw size={17} />
          </button>
        </div>
      </div>

      {/* Language Switcher Tabs */}
      <div className="lang-switcher-bar">
        <button
          type="button"
          className={`lang-tab-btn ${activeLang === 'english' ? 'active-en' : ''}`}
          onClick={() => handleLangToggle('english')}
        >
          <span className="lang-flag">🇬🇧</span>
          <span className="lang-text">İngilizce</span>
        </button>

        <button
          type="button"
          className={`lang-tab-btn ${activeLang === 'oxford' ? 'active-oxford' : ''}`}
          onClick={() => handleLangToggle('oxford')}
        >
          <span className="lang-flag">📚</span>
          <span className="lang-text">Oxford Skills</span>
        </button>

        <button
          type="button"
          className={`lang-tab-btn ${activeLang === 'german' ? 'active-de' : ''}`}
          onClick={() => handleLangToggle('german')}
        >
          <span className="lang-flag">🇩🇪</span>
          <span className="lang-text">Almanca</span>
        </button>
      </div>
    </header>
  );
};
