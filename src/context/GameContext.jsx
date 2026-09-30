import React, { createContext, useContext, useState, useEffect } from 'react';
import { BADGES } from '../data/badgesData';
import { playSound } from '../utils/soundEffects';

const GameContext = createContext();

const STORAGE_KEY = 'maarif5_game_data_v1';

const INITIAL_DATA = {
  studentName: 'Ahmet',
  xp: 120,
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  soundEnabled: true,
  completedActivities: {},
  unlockedBadgeIds: ['first_step'],
  stats: {
    completedActivitiesCount: 1,
    matchingCompleted: 0,
    trueFalseCompleted: 0,
    perfectQuizzes: 0,
    subjectActivities: {
      matematik: 1
    }
  }
};

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Check daily streak
        const today = new Date().toISOString().split('T')[0];
        const lastDate = parsed.lastActiveDate;
        
        let newStreak = parsed.streak || 1;
        if (lastDate && lastDate !== today) {
          const last = new Date(lastDate);
          const current = new Date(today);
          const diffDays = Math.round((current - last) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            newStreak += 1;
          } else if (diffDays > 1) {
            newStreak = 1;
          }
        }

        return {
          ...INITIAL_DATA,
          ...parsed,
          streak: newStreak,
          lastActiveDate: today
        };
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return INITIAL_DATA;
  });

  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState(null);
  const [levelUpInfo, setLevelUpInfo] = useState(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [gameState]);

  // Calculate Level from XP
  // Level 1: 0 - 199 XP
  // Level 2: 200 - 399 XP
  // Level 3: 400 - 699 XP
  // Level 4: 700 - 1099 XP
  // Level 5+: 1100+
  const getLevelInfo = (xp) => {
    if (xp < 200) return { level: 1, title: 'Meraklı Kaşif 🧭', nextXp: 200, currentBaseXp: 0 };
    if (xp < 450) return { level: 2, title: 'Bilgi Yolcusu 🚀', nextXp: 450, currentBaseXp: 200 };
    if (xp < 750) return { level: 3, title: 'Ders Ustası ⚡', nextXp: 750, currentBaseXp: 450 };
    if (xp < 1150) return { level: 4, title: 'Maarif Yıldızı 🌟', nextXp: 1150, currentBaseXp: 750 };
    return { level: 5, title: 'Geleceğin Dehası 👑', nextXp: xp + 500, currentBaseXp: 1150 };
  };

  const levelInfo = getLevelInfo(gameState.xp);

  // Sound toggle
  const toggleSound = () => {
    const newVal = !gameState.soundEnabled;
    setGameState(prev => ({ ...prev, soundEnabled: newVal }));
    if (newVal) playSound('click', true);
  };

  const updateStudentName = (name) => {
    setGameState(prev => ({ ...prev, studentName: name.trim() || 'Öğrenci' }));
  };

  // Complete an activity
  const completeActivity = (subjectId, topicId, activityType, score, maxScore) => {
    const key = `${topicId}_${activityType}`;
    const prevEntry = gameState.completedActivities[key];

    // XP calculation: 30 base XP, plus bonus for performance
    const earnedXp = Math.max(25, Math.round((score / maxScore) * 60));

    const isPerfect = score === maxScore;

    setGameState(prev => {
      const prevXp = prev.xp;
      const nextXp = prevXp + earnedXp;

      // Check level up
      const oldLvl = getLevelInfo(prevXp).level;
      const newLvl = getLevelInfo(nextXp).level;
      if (newLvl > oldLvl) {
        setLevelUpInfo({ oldLevel: oldLvl, newLevel: newLvl, title: getLevelInfo(nextXp).title });
        playSound('victory', prev.soundEnabled);
      } else {
        playSound('correct', prev.soundEnabled);
      }

      // Update stats
      const nextStats = {
        ...prev.stats,
        completedActivitiesCount: (prev.stats.completedActivitiesCount || 0) + (prevEntry ? 0 : 1),
        matchingCompleted: (prev.stats.matchingCompleted || 0) + (activityType === 'matching' ? 1 : 0),
        trueFalseCompleted: (prev.stats.trueFalseCompleted || 0) + (activityType === 'trueFalse' ? 1 : 0),
        perfectQuizzes: (prev.stats.perfectQuizzes || 0) + (activityType === 'quiz' && isPerfect ? 1 : 0),
        subjectActivities: {
          ...prev.stats.subjectActivities,
          [subjectId]: ((prev.stats.subjectActivities && prev.stats.subjectActivities[subjectId]) || 0) + 1
        }
      };

      // Check for newly unlocked badges
      const currentBadges = [...prev.unlockedBadgeIds];
      const newlyUnlocked = [];

      BADGES.forEach(badge => {
        if (!currentBadges.includes(badge.id)) {
          const statsForCheck = {
            ...nextStats,
            xp: nextXp,
            streak: prev.streak
          };
          if (badge.checkUnlocked(statsForCheck)) {
            currentBadges.push(badge.id);
            newlyUnlocked.push(badge);
          }
        }
      });

      if (newlyUnlocked.length > 0) {
        setNewlyUnlockedBadge(newlyUnlocked[0]);
        playSound('badge', prev.soundEnabled);
      }

      return {
        ...prev,
        xp: nextXp,
        completedActivities: {
          ...prev.completedActivities,
          [key]: {
            score,
            maxScore,
            completedAt: new Date().toISOString(),
            xpEarned: earnedXp
          }
        },
        stats: nextStats,
        unlockedBadgeIds: currentBadges
      };
    });

    return earnedXp;
  };

  const resetAllProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setGameState(INITIAL_DATA);
    playSound('click', true);
  };

  return (
    <GameContext.Provider
      value={{
        ...gameState,
        levelInfo,
        toggleSound,
        updateStudentName,
        completeActivity,
        resetAllProgress,
        newlyUnlockedBadge,
        setNewlyUnlockedBadge,
        levelUpInfo,
        setLevelUpInfo
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
