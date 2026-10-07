import React from 'react';
import { BookOpen, BookA, Award } from 'lucide-react';
import { playSound } from '../utils/soundEffects';
import { useDil } from '../context/DilContext';

export const BottomNav = ({ activeTab, onSelectTab }) => {
  const { soundEnabled } = useDil();

  const handleTabClick = (tab) => {
    playSound('click', soundEnabled);
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="mobile-bottom-nav">
      <button
        type="button"
        className={`nav-item ${activeTab === 'themes' ? 'active' : ''}`}
        onClick={() => handleTabClick('themes')}
      >
        <BookOpen size={24} />
        <span className="nav-label">Üniteler</span>
      </button>

      <button
        type="button"
        className={`nav-item ${activeTab === 'vocabulary' ? 'active' : ''}`}
        onClick={() => handleTabClick('vocabulary')}
      >
        <BookA size={24} />
        <span className="nav-label">Kelimeler</span>
      </button>

      <button
        type="button"
        className={`nav-item ${activeTab === 'badges' ? 'active' : ''}`}
        onClick={() => handleTabClick('badges')}
      >
        <Award size={24} />
        <span className="nav-label">Başarılar</span>
      </button>
    </nav>
  );
};
