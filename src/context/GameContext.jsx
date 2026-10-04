import React, { createContext, useContext, useState, useEffect } from 'react';
import { BADGES } from '../data/badgesData';
import { playSound } from '../utils/soundEffects';
import { db } from '../firebase';
import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  writeBatch 
} from 'firebase/firestore';

const GameContext = createContext();

const STUDENTS_STORAGE_KEY = 'maarif5_students_v1';
const ACTIVE_USER_STORAGE_KEY = 'maarif5_active_user_v1';
const TEACHER_PW_KEY = 'maarif5_teacher_password_v1';

// Default initial 5th-grade student roster
const DEFAULT_STUDENTS = [
  {
    id: 'std_101',
    studentNo: '101',
    name: 'Ahmet Yılmaz',
    pin: '1234',
    avatar: '🦁',
    xp: 320,
    streak: 3,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedActivities: { 'mat_u1_t1_flashcards': true, 'fen_u1_t1_trueFalse': true },
    unlockedBadgeIds: ['first_step', 'math_explorer'],
    stats: {
      completedActivitiesCount: 2,
      matchingCompleted: 0,
      trueFalseCompleted: 1,
      perfectQuizzes: 0,
      subjectActivities: { matematik: 1, fen: 1 }
    }
  },
  {
    id: 'std_102',
    studentNo: '102',
    name: 'Elif Kaya',
    pin: '1234',
    avatar: '🚀',
    xp: 280,
    streak: 2,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedActivities: { 'eng_u1_t1_pronunciation': true },
    unlockedBadgeIds: ['first_step', 'english_star'],
    stats: {
      completedActivitiesCount: 1,
      matchingCompleted: 0,
      trueFalseCompleted: 0,
      perfectQuizzes: 0,
      subjectActivities: { ingilizce: 1 }
    }
  },
  {
    id: 'std_103',
    studentNo: '103',
    name: 'Can Öztürk',
    pin: '1234',
    avatar: '🐼',
    xp: 410,
    streak: 4,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedActivities: { 'de_u1_t1_pronunciation': true, 'mat_u1_t1_quiz': true },
    unlockedBadgeIds: ['first_step', 'german_star'],
    stats: {
      completedActivitiesCount: 2,
      matchingCompleted: 0,
      trueFalseCompleted: 0,
      perfectQuizzes: 1,
      subjectActivities: { almanca: 1, matematik: 1 }
    }
  },
  {
    id: 'std_104',
    studentNo: '104',
    name: 'Zeynep Demir',
    pin: '1234',
    avatar: '🌟',
    xp: 180,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedActivities: { 'tur_u1_t1_flashcards': true },
    unlockedBadgeIds: ['first_step'],
    stats: {
      completedActivitiesCount: 1,
      matchingCompleted: 0,
      trueFalseCompleted: 0,
      perfectQuizzes: 0,
      subjectActivities: { turkce: 1 }
    }
  }
];

export const GameProvider = ({ children }) => {
  // Load initial students from localStorage
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem(STUDENTS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Error loading students from localStorage:', e);
    }
    return DEFAULT_STUDENTS;
  });

  // Cloud connection status
  const [isFirebaseConnected, setIsFirebaseConnected] = useState(false);

  // Teacher password
  const [teacherPassword, setTeacherPassword] = useState(() => {
    try {
      return localStorage.getItem(TEACHER_PW_KEY) || 'ogretmen123';
    } catch {
      return 'ogretmen123';
    }
  });

  // Current logged in user: null | { role: 'student', ...studentData } | { role: 'teacher', name: 'Öğretmen Masası', avatar: '👩‍🏫' }
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(ACTIVE_USER_STORAGE_KEY);
      if (savedUser) {
        return JSON.parse(savedUser);
      }
    } catch (e) {
      console.warn('Error loading active user session:', e);
    }
    return null;
  });

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [newlyUnlockedBadge, setNewlyUnlockedBadge] = useState(null);
  const [levelUpInfo, setLevelUpInfo] = useState(null);

  // REALTIME FIRESTORE LISTENER
  useEffect(() => {
    let unsubscribe = () => {};
    try {
      const studentsCol = collection(db, 'students');
      unsubscribe = onSnapshot(
        studentsCol,
        async (snapshot) => {
          setIsFirebaseConnected(true);
          if (snapshot.empty) {
            console.log('Firebase Firestore students empty. Seeding default student roster...');
            try {
              const batch = writeBatch(db);
              DEFAULT_STUDENTS.forEach((student) => {
                const docRef = doc(db, 'students', student.id);
                batch.set(docRef, student);
              });
              await batch.commit();
            } catch (seedErr) {
              console.warn('Seeding default students to Firestore failed:', seedErr);
            }
          } else {
            const list = [];
            snapshot.forEach((docSnap) => {
              list.push({ id: docSnap.id, ...docSnap.data() });
            });
            // Sort by student number ascending
            list.sort((a, b) => Number(a.studentNo || 0) - Number(b.studentNo || 0));
            setStudents(list);

            // Sync current active student with latest cloud state
            setCurrentUser((prevUser) => {
              if (prevUser && prevUser.role === 'student') {
                const found = list.find((s) => s.id === prevUser.id);
                if (found) {
                  return { ...found, role: 'student' };
                }
              }
              return prevUser;
            });
          }
        },
        (error) => {
          console.warn('Firestore real-time subscription error (falling back to localStorage):', error);
          setIsFirebaseConnected(false);
        }
      );
    } catch (err) {
      console.warn('Firebase initialization error, running in offline mode:', err);
      setIsFirebaseConnected(false);
    }

    return () => {
      unsubscribe();
    };
  }, []);

  // Persist students to localStorage for offline cache
  useEffect(() => {
    try {
      localStorage.setItem(STUDENTS_STORAGE_KEY, JSON.stringify(students));
    } catch (e) {
      console.warn('Error saving students to localStorage:', e);
    }
  }, [students]);

  // Persist active user session to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(ACTIVE_USER_STORAGE_KEY, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(ACTIVE_USER_STORAGE_KEY);
      }
    } catch (e) {
      console.warn('Error saving active user session:', e);
    }
  }, [currentUser]);

  // LEVEL CALCULATION
  const getLevelInfo = (xp = 0) => {
    if (xp < 200) return { level: 1, title: 'Meraklı Kaşif 🧭', nextXp: 200, currentBaseXp: 0 };
    if (xp < 450) return { level: 2, title: 'Bilgi Yolcusu 🚀', nextXp: 450, currentBaseXp: 200 };
    if (xp < 750) return { level: 3, title: 'Ders Ustası ⚡', nextXp: 750, currentBaseXp: 450 };
    if (xp < 1150) return { level: 4, title: 'Maarif Yıldızı 🌟', nextXp: 1150, currentBaseXp: 750 };
    return { level: 5, title: 'Geleceğin Dehası 👑', nextXp: xp + 500, currentBaseXp: 1150 };
  };

  // AUTHENTICATION METHODS
  const loginStudent = (studentNo, pin) => {
    const cleanNo = String(studentNo).trim();
    const cleanPin = String(pin).trim();

    const student = students.find(s => String(s.studentNo).trim() === cleanNo);
    if (!student) {
      return { success: false, message: 'Bu okul numarasına ait öğrenci bulunamadı.' };
    }

    if (String(student.pin).trim() !== cleanPin) {
      return { success: false, message: 'Girdiğin 4 haneli PIN hatalı. Öğretmeninden yardım isteyebilirsin.' };
    }

    // Update streak if needed
    const today = new Date().toISOString().split('T')[0];
    let newStreak = student.streak || 1;
    if (student.lastActiveDate && student.lastActiveDate !== today) {
      const last = new Date(student.lastActiveDate);
      const current = new Date(today);
      const diffDays = Math.round((current - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        newStreak += 1;
      } else if (diffDays > 1) {
        newStreak = 1;
      }
    }

    const updatedStudent = {
      ...student,
      role: 'student',
      streak: newStreak,
      lastActiveDate: today
    };

    // Update locally
    setStudents(prev => prev.map(s => s.id === student.id ? updatedStudent : s));
    setCurrentUser(updatedStudent);
    playSound('victory', soundEnabled);

    // Sync to Firestore
    try {
      updateDoc(doc(db, 'students', student.id), {
        streak: newStreak,
        lastActiveDate: today
      }).catch(err => console.warn('Could not sync streak to Firebase:', err));
    } catch (e) {
      console.warn('Firebase update error:', e);
    }

    return { success: true, user: updatedStudent };
  };

  const loginTeacher = (password) => {
    if (password.trim() === teacherPassword) {
      const teacherUser = {
        role: 'teacher',
        name: 'Öğretmen Masası',
        avatar: '👩‍🏫',
        email: 'ogretmen@okul.meb.k12.tr'
      };
      setCurrentUser(teacherUser);
      playSound('victory', soundEnabled);
      return { success: true };
    }
    return { success: false, message: 'Öğretmen şifresi hatalı!' };
  };

  const logout = () => {
    setCurrentUser(null);
    playSound('click', soundEnabled);
  };

  // TEACHER STUDENT MANAGEMENT METHODS
  const addStudent = async ({ name, studentNo, pin = '1234', avatar = '🦁' }) => {
    const cleanNo = String(studentNo).trim();
    if (!cleanNo || !name.trim()) {
      return { success: false, message: 'İsim ve Okul Numarası zorunludur.' };
    }

    // Check duplicate
    if (students.some(s => String(s.studentNo).trim() === cleanNo)) {
      return { success: false, message: `Bu okul numarası (${cleanNo}) zaten kayıtlı.` };
    }

    const newStudent = {
      id: `std_${Date.now()}`,
      studentNo: cleanNo,
      name: name.trim(),
      pin: String(pin).trim() || '1234',
      avatar: avatar || '🦁',
      xp: 50,
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedActivities: {},
      unlockedBadgeIds: ['first_step'],
      stats: {
        completedActivitiesCount: 0,
        matchingCompleted: 0,
        trueFalseCompleted: 0,
        perfectQuizzes: 0,
        subjectActivities: {}
      }
    };

    // Update locally
    setStudents(prev => [...prev, newStudent]);
    playSound('correct', soundEnabled);

    // Sync to Firestore
    try {
      await setDoc(doc(db, 'students', newStudent.id), newStudent);
    } catch (err) {
      console.warn('Could not save new student to Firebase:', err);
    }

    return { success: true, student: newStudent };
  };

  const deleteStudent = async (studentId) => {
    // Update locally
    setStudents(prev => prev.filter(s => s.id !== studentId));
    playSound('click', soundEnabled);

    // Sync to Firestore
    try {
      await deleteDoc(doc(db, 'students', studentId));
    } catch (err) {
      console.warn('Could not delete student from Firebase:', err);
    }

    return { success: true };
  };

  const resetStudentPin = async (studentId, newPin = '1234') => {
    const cleanPin = String(newPin).trim();
    // Update locally
    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return { ...s, pin: cleanPin };
      }
      return s;
    }));
    playSound('correct', soundEnabled);

    // Sync to Firestore
    try {
      await updateDoc(doc(db, 'students', studentId), { pin: cleanPin });
    } catch (err) {
      console.warn('Could not update PIN in Firebase:', err);
    }

    return { success: true };
  };

  const updateStudentProfile = async (studentId, updates) => {
    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return { ...s, ...updates };
      }
      return s;
    }));

    if (currentUser?.id === studentId) {
      setCurrentUser(prev => ({ ...prev, ...updates }));
    }

    try {
      await setDoc(doc(db, 'students', studentId), updates, { merge: true });
    } catch (err) {
      console.warn('Could not update student profile in Firebase:', err);
    }
  };

  // Sound toggle
  const toggleSound = () => {
    const newVal = !soundEnabled;
    setSoundEnabled(newVal);
    if (newVal) playSound('click', true);
  };

  // Complete activity for current student
  const completeActivity = (subjectId, topicId, activityType, score, maxScore) => {
    if (!currentUser || currentUser.role !== 'student') return;

    const key = `${topicId}_${activityType}`;
    const prevCompleted = !!currentUser.completedActivities?.[key];

    const earnedXp = Math.max(25, Math.round((score / maxScore) * 60));
    const isPerfect = score === maxScore;

    const prevXp = currentUser.xp || 0;
    const nextXp = prevXp + earnedXp;

    // Check level up
    const oldLvl = getLevelInfo(prevXp).level;
    const newLvl = getLevelInfo(nextXp).level;
    if (newLvl > oldLvl) {
      setLevelUpInfo({ oldLevel: oldLvl, newLevel: newLvl, title: getLevelInfo(nextXp).title });
      playSound('victory', soundEnabled);
    } else {
      playSound('correct', soundEnabled);
    }

    // Next stats
    const currentStats = currentUser.stats || {};
    const nextStats = {
      ...currentStats,
      completedActivitiesCount: (currentStats.completedActivitiesCount || 0) + (prevCompleted ? 0 : 1),
      matchingCompleted: (currentStats.matchingCompleted || 0) + (activityType === 'matching' ? 1 : 0),
      trueFalseCompleted: (currentStats.trueFalseCompleted || 0) + (activityType === 'trueFalse' ? 1 : 0),
      perfectQuizzes: (currentStats.perfectQuizzes || 0) + (activityType === 'quiz' && isPerfect ? 1 : 0),
      subjectActivities: {
        ...(currentStats.subjectActivities || {}),
        [subjectId]: ((currentStats.subjectActivities && currentStats.subjectActivities[subjectId]) || 0) + 1
      }
    };

    // Check badges
    const currentBadges = [...(currentUser.unlockedBadgeIds || [])];
    const newlyUnlocked = [];

    BADGES.forEach(badge => {
      if (!currentBadges.includes(badge.id)) {
        const statsForCheck = {
          ...nextStats,
          xp: nextXp,
          streak: currentUser.streak || 1
        };
        if (badge.checkUnlocked(statsForCheck)) {
          currentBadges.push(badge.id);
          newlyUnlocked.push(badge);
        }
      }
    });

    if (newlyUnlocked.length > 0) {
      setNewlyUnlockedBadge(newlyUnlocked[0]);
      playSound('badge', soundEnabled);
    }

    const updatedUser = {
      ...currentUser,
      xp: nextXp,
      completedActivities: {
        ...(currentUser.completedActivities || {}),
        [key]: true
      },
      unlockedBadgeIds: currentBadges,
      stats: nextStats
    };

    // Update local state immediately
    setCurrentUser(updatedUser);
    setStudents(prev => prev.map(s => s.id === currentUser.id ? updatedUser : s));

    // Sync to Firebase Firestore
    try {
      const studentDocRef = doc(db, 'students', currentUser.id);
      setDoc(studentDocRef, {
        xp: nextXp,
        completedActivities: updatedUser.completedActivities,
        unlockedBadgeIds: currentBadges,
        stats: nextStats
      }, { merge: true }).catch(err => {
        console.warn('Firebase activity sync error:', err);
      });
    } catch (e) {
      console.warn('Firebase doc sync failed:', e);
    }
  };

  // Learn or toggle a Word Skills vocabulary word
  const masterVocabWord = (wordId, xpEarned = 10) => {
    if (!currentUser || currentUser.role !== 'student') return;

    const currentMastered = currentUser.masteredVocab || [];
    const isAlreadyMastered = currentMastered.includes(wordId);
    
    let nextMastered;
    let earnedXp = 0;
    if (isAlreadyMastered) {
      nextMastered = currentMastered.filter(id => id !== wordId);
    } else {
      nextMastered = [...currentMastered, wordId];
      earnedXp = xpEarned;
    }

    const prevXp = currentUser.xp || 0;
    const nextXp = prevXp + earnedXp;

    // Check level up if xp added
    if (earnedXp > 0) {
      const oldLvl = getLevelInfo(prevXp).level;
      const newLvl = getLevelInfo(nextXp).level;
      if (newLvl > oldLvl) {
        setLevelUpInfo({ oldLevel: oldLvl, newLevel: newLvl, title: getLevelInfo(nextXp).title });
        playSound('victory', soundEnabled);
      } else {
        playSound('correct', soundEnabled);
      }
    } else {
      playSound('click', soundEnabled);
    }

    const currentStats = currentUser.stats || {};
    const nextStats = {
      ...currentStats,
      vocabLearnedCount: nextMastered.length
    };

    // Check badges
    const currentBadges = [...(currentUser.unlockedBadgeIds || [])];
    const newlyUnlocked = [];

    BADGES.forEach(badge => {
      if (!currentBadges.includes(badge.id)) {
        const statsForCheck = {
          ...nextStats,
          xp: nextXp,
          streak: currentUser.streak || 1
        };
        if (badge.checkUnlocked(statsForCheck)) {
          currentBadges.push(badge.id);
          newlyUnlocked.push(badge);
        }
      }
    });

    if (newlyUnlocked.length > 0) {
      setNewlyUnlockedBadge(newlyUnlocked[0]);
      playSound('badge', soundEnabled);
    }

    const updatedUser = {
      ...currentUser,
      xp: nextXp,
      masteredVocab: nextMastered,
      unlockedBadgeIds: currentBadges,
      stats: nextStats
    };

    setCurrentUser(updatedUser);
    setStudents(prev => prev.map(s => s.id === currentUser.id ? updatedUser : s));

    try {
      const studentDocRef = doc(db, 'students', currentUser.id);
      setDoc(studentDocRef, {
        xp: nextXp,
        masteredVocab: nextMastered,
        unlockedBadgeIds: currentBadges,
        stats: nextStats
      }, { merge: true }).catch(err => console.warn('Firebase vocab sync error:', err));
    } catch (e) {
      console.warn('Firebase doc sync failed:', e);
    }
  };

  // Computed state for active student
  const studentName = currentUser?.name || 'Öğrenci';
  const xp = currentUser?.xp || 0;
  const streak = currentUser?.streak || 1;
  const completedActivities = currentUser?.completedActivities || {};
  const masteredVocab = currentUser?.masteredVocab || [];
  const unlockedBadgeIds = currentUser?.unlockedBadgeIds || ['first_step'];
  const stats = currentUser?.stats || { completedActivitiesCount: 0, subjectActivities: {} };
  const levelInfo = getLevelInfo(xp);

  return (
    <GameContext.Provider
      value={{
        // Auth state
        currentUser,
        students,
        isFirebaseConnected,
        loginStudent,
        loginTeacher,
        logout,
        addStudent,
        deleteStudent,
        resetStudentPin,
        updateStudentProfile,

        // Student active stats
        studentName,
        xp,
        streak,
        completedActivities,
        masteredVocab,
        unlockedBadgeIds,
        stats,
        levelInfo,

        // Audio & Modals & Actions
        soundEnabled,
        toggleSound,
        completeActivity,
        masterVocabWord,
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

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
