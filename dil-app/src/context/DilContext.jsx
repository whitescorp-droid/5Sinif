import React, { createContext, useContext, useState, useEffect } from 'react';
import { playSound } from '../utils/soundEffects';
import { BADGES } from '../data/badgesData';

const DilContext = createContext();

export const DilProvider = ({ children }) => {
  const [activeLang, setActiveLang] = useState(() => {
    return localStorage.getItem('dil_active_lang') || 'english';
  });

  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('dil_student_name') || 'Genç Kaşif';
  });

  const [studentAvatar, setStudentAvatar] = useState(() => {
    return localStorage.getItem('dil_student_avatar') || '🚀';
  });

  const [xp, setXp] = useState(() => {
    return parseInt(localStorage.getItem('dil_xp') || '0', 10);
  });

  const [streak, setStreak] = useState(() => {
    return parseInt(localStorage.getItem('dil_streak') || '1', 10);
  });

  const [completedActivities, setCompletedActivities] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dil_completed_activities')) || {};
    } catch {
      return {};
    }
  });

  const [listenedWords, setListenedWords] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dil_listened_words')) || {};
    } catch {
      return {};
    }
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('dil_sound_enabled');
    return saved !== null ? saved === 'true' : true;
  });

  const [unlockedBadgeIds, setUnlockedBadgeIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dil_badges')) || [];
    } catch {
      return [];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('dil_active_lang', activeLang);
  }, [activeLang]);

  useEffect(() => {
    localStorage.setItem('dil_student_name', studentName);
  }, [studentName]);

  useEffect(() => {
    localStorage.setItem('dil_student_avatar', studentAvatar);
  }, [studentAvatar]);

  useEffect(() => {
    localStorage.setItem('dil_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('dil_streak', streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('dil_completed_activities', JSON.stringify(completedActivities));
  }, [completedActivities]);

  useEffect(() => {
    localStorage.setItem('dil_listened_words', JSON.stringify(listenedWords));
  }, [listenedWords]);

  useEffect(() => {
    localStorage.setItem('dil_sound_enabled', soundEnabled.toString());
  }, [soundEnabled]);

  useEffect(() => {
    localStorage.setItem('dil_badges', JSON.stringify(unlockedBadgeIds));
  }, [unlockedBadgeIds]);

  // Check and unlock badges whenever stats change
  const checkBadges = (currentActivities, currentListened, currentStreak) => {
    const actKeys = Object.keys(currentActivities);
    const stats = {
      completedActivitiesCount: actKeys.length,
      pronunciationCompleted: actKeys.filter(k => k.includes('pronunciation')).length,
      matchingCompleted: actKeys.filter(k => k.includes('matching')).length,
      trueFalseCompleted: actKeys.filter(k => k.includes('trueFalse')).length,
      quizCompleted: actKeys.filter(k => k.includes('quiz')).length,
      englishCompleted: actKeys.filter(k => k.startsWith('eng_')).length,
      germanCompleted: actKeys.filter(k => k.startsWith('de_')).length,
      listenedWordsCount: Object.keys(currentListened).length,
      streak: currentStreak
    };

    setUnlockedBadgeIds(prev => {
      const newlyUnlocked = [];
      BADGES.forEach(badge => {
        if (!prev.includes(badge.id) && badge.checkUnlocked(stats)) {
          newlyUnlocked.push(badge.id);
        }
      });
      if (newlyUnlocked.length > 0) {
        playSound('celebrate', soundEnabled);
        return [...prev, ...newlyUnlocked];
      }
      return prev;
    });
  };

  const addXP = (amount) => {
    setXp(prev => prev + amount);
    playSound('correct', soundEnabled);
  };

  const markActivityComplete = (activityId, xpReward = 50) => {
    if (completedActivities[activityId]) return; // already completed

    const updated = { ...completedActivities, [activityId]: true };
    setCompletedActivities(updated);
    addXP(xpReward);
    checkBadges(updated, listenedWords, streak);
  };

  const markWordListened = (wordId) => {
    if (!listenedWords[wordId]) {
      const updated = { ...listenedWords, [wordId]: true };
      setListenedWords(updated);
      setXp(prev => prev + 5); // small encouraging boost
      checkBadges(completedActivities, updated, streak);
    }
  };

  return (
    <DilContext.Provider
      value={{
        activeLang,
        setActiveLang,
        studentName,
        setStudentName,
        studentAvatar,
        setStudentAvatar,
        xp,
        addXP,
        streak,
        setStreak,
        completedActivities,
        markActivityComplete,
        listenedWords,
        markWordListened,
        soundEnabled,
        setSoundEnabled,
        unlockedBadgeIds
      }}
    >
      {children}
    </DilContext.Provider>
  );
};

export const useDil = () => {
  const context = useContext(DilContext);
  if (!context) {
    throw new Error('useDil must be used within a DilProvider');
  }
  return context;
};
