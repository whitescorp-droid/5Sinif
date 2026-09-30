import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Volume2, VolumeX, Flame, Award, BookOpen, User, HelpCircle, FileText } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const Header = ({ onOpenParentReport, onOpenAddContent, onGoHome, currentView }) => {
  const {
    studentName,
    updateStudentName,
    xp,
    streak,
    soundEnabled,
    toggleSound,
    levelInfo
  } = useGame();

  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(studentName);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      updateStudentName(nameInput);
    }
    setIsEditingName(false);
    playSound('click', soundEnabled);
  };

  // Calculate percentage within current level
  const xpInCurrentLevel = xp - levelInfo.currentBaseXp;
  const xpNeededForLevel = levelInfo.nextXp - levelInfo.currentBaseXp;
  const progressPercent = Math.min(100, Math.max(5, Math.round((xpInCurrentLevel / xpNeededForLevel) * 100)));

  return (
    <header className="header-container">
      <div className="header-inner">
        {/* Brand Logo & Home link */}
        <div className="header-brand" onClick={onGoHome} role="button" tabIndex={0}>
          <div className="brand-icon-wrapper">
            <span className="brand-emoji">🎓</span>
            <div className="brand-pulse"></div>
          </div>
          <div>
            <div className="brand-title">
              Maarif<span className="brand-badge">5</span>
            </div>
            <div className="brand-subtitle">5. Sınıf Akıllı Pekiştirme</div>
          </div>
        </div>

        {/* Center: Student Level & XP Bar */}
        <div className="header-center">
          <div className="level-badge-container">
            <div className="level-chip">
              <span className="level-star">⭐</span>
              <span className="level-text">Seviye {levelInfo.level}</span>
            </div>
            <span className="level-title-label">{levelInfo.title}</span>
          </div>

          <div className="xp-bar-container" title={`${xp} / ${levelInfo.nextXp} XP`}>
            <div className="xp-bar-track">
              <div 
                className="xp-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              >
                <div className="xp-bar-shine"></div>
              </div>
            </div>
            <div className="xp-text-row">
              <span className="xp-amount"><strong>{xp}</strong> XP</span>
              <span className="xp-next">Sonraki Seviye: {levelInfo.nextXp} XP</span>
            </div>
          </div>
        </div>

        {/* Right side tools */}
        <div className="header-actions">
          {/* Daily Streak */}
          <div className="streak-pill" title={`${streak} günlük kesintisiz çalışma serisi!`}>
            <Flame className="streak-icon" size={20} />
            <span className="streak-count">{streak} Gün Seri</span>
          </div>

          {/* Student Avatar / Name */}
          <div className="student-profile-pill">
            <div className="avatar-circle">
              <User size={16} />
            </div>
            {isEditingName ? (
              <form onSubmit={handleNameSubmit} className="name-edit-form">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onBlur={handleNameSubmit}
                  autoFocus
                  className="name-input"
                  maxLength={16}
                />
              </form>
            ) : (
              <span
                className="student-name-text"
                onClick={() => { setIsEditingName(true); setNameInput(studentName); }}
                title="İsmi değiştirmek için tıkla"
              >
                {studentName} ✏️
              </span>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`tool-btn ${soundEnabled ? 'active' : 'muted'}`}
            title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
            aria-label="Ses Ayarı"
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>

          {/* Parent Report Button */}
          <button
            onClick={onOpenParentReport}
            className="parent-report-btn"
            title="Veli Gelişim & Takip Raporu"
          >
            <FileText size={18} />
            <span>Veli Paneli</span>
          </button>

          {/* Content / Guide Button */}
          <button
            onClick={onOpenAddContent}
            className="guide-btn"
            title="Ders Kitabı ve TYMM Kazanımı Ekleme Rehberi"
          >
            <HelpCircle size={18} />
            <span>Kazanım Ekle</span>
          </button>
        </div>
      </div>
    </header>
  );
};
