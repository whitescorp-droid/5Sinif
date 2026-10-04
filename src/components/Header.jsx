import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { Volume2, VolumeX, Flame, Award, BookOpen, User, HelpCircle, FileText, LogOut, ShieldCheck } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const Header = ({ onOpenParentReport, onOpenAddContent, onGoHome, onOpenTeacherDashboard, onOpenVocabulary, currentView }) => {
  const {
    currentUser,
    logout,
    studentName,
    xp,
    streak,
    soundEnabled,
    toggleSound,
    levelInfo
  } = useGame();

  const isTeacher = currentUser?.role === 'teacher';

  // Calculate percentage within current level
  const xpInCurrentLevel = xp - levelInfo.currentBaseXp;
  const xpNeededForLevel = levelInfo.nextXp - levelInfo.currentBaseXp;
  const progressPercent = Math.min(100, Math.max(5, Math.round((xpInCurrentLevel / xpNeededForLevel) * 100)));

  const handleLogoutClick = () => {
    if (window.confirm('Oturumu kapatmak istiyor musunuz?')) {
      logout();
    }
  };

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

        {/* Center: Student Level & XP Bar (Only for student view) */}
        {!isTeacher && (
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
        )}

        {/* Right side tools */}
        <div className="header-actions">
          {/* Daily Streak (Only for student) */}
          {!isTeacher && (
            <div className="streak-pill" title={`${streak} günlük kesintisiz çalışma serisi!`}>
              <Flame className="streak-icon" size={20} />
              <span className="streak-count">{streak} Gün Seri</span>
            </div>
          )}

          {/* User Profile Pill */}
          <div className="student-profile-pill">
            <div className="avatar-circle">
              {currentUser?.avatar ? (
                <span style={{ fontSize: '18px' }}>{currentUser.avatar}</span>
              ) : (
                <User size={16} />
              )}
            </div>
            <span className="student-name-text">
              {currentUser?.name || studentName}
              {currentUser?.studentNo && <span style={{ opacity: 0.7, fontSize: '11px', marginLeft: '4px' }}>#{currentUser.studentNo}</span>}
            </span>
          </div>

          {/* Teacher Quick Button if logged in as teacher */}
          {isTeacher && (
            <button
              onClick={onOpenTeacherDashboard}
              className={`parent-report-btn ${currentView === 'teacher' ? 'active' : ''}`}
              title="Öğretmen Masası & Sınıf Yönetimi"
            >
              <ShieldCheck size={18} />
              <span>Öğretmen Masası</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`tool-btn ${soundEnabled ? 'active' : 'muted'}`}
            title={soundEnabled ? 'Sesi Kapat' : 'Sesi Aç'}
            aria-label="Ses Ayarı"
          >
            {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>

          {/* Word Skills Vocabulary Button */}
          {!isTeacher && (
            <button
              onClick={onOpenVocabulary}
              className={`parent-report-btn vocab-header-link ${currentView === 'vocabulary' ? 'active' : ''}`}
              title="Word Skills İngilizce Kelime İstasyonu"
            >
              <BookOpen size={18} />
              <span>Kelime Dünyası</span>
            </button>
          )}

          {/* Parent Report Button (Only for students) */}
          {!isTeacher && (
            <button
              onClick={onOpenParentReport}
              className="parent-report-btn"
              title="Veli Gelişim & Takip Raporu"
            >
              <FileText size={18} />
              <span>Veli Paneli</span>
            </button>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogoutClick}
            className="header-logout-btn"
            title="Oturumu Kapat / Kullanıcı Değiştir"
          >
            <LogOut size={16} />
            <span>Çıkış</span>
          </button>
        </div>
      </div>
    </header>
  );
};
