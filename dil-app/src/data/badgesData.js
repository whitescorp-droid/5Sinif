// 5. Sınıf Dil Kulübü Başarı Rozetleri Kataloğu
export const BADGES = [
  {
    id: 'first_word',
    title: 'İlk Kelime 🚀',
    description: 'İlk kelime veya telaffuz alıştırmanı tamamladın!',
    icon: '🎯',
    color: '#3B82F6',
    xpReward: 50,
    checkUnlocked: (stats) => (stats.completedActivitiesCount || 0) >= 1
  },
  {
    id: 'pronunciation_star',
    title: 'Ses Ustası 🗣️',
    description: 'Sesli telaffuz etkinliğini başarıyla tamamladın.',
    icon: '🎙️',
    color: '#8B5CF6',
    xpReward: 60,
    checkUnlocked: (stats) => (stats.pronunciationCompleted || 0) >= 1
  },
  {
    id: 'match_master',
    title: 'Kelime Dedektifi 🧩',
    description: 'Kelime eşleştirme oyununda tüm çiftleri buldun.',
    icon: '🧩',
    color: '#EC4899',
    xpReward: 50,
    checkUnlocked: (stats) => (stats.matchingCompleted || 0) >= 1
  },
  {
    id: 'speed_answer',
    title: 'Şimşek Zihin ⚡',
    description: 'Hızlı Doğru/Yanlış turunu tamamladın.',
    icon: '⚡',
    color: '#F59E0B',
    xpReward: 50,
    checkUnlocked: (stats) => (stats.trueFalseCompleted || 0) >= 1
  },
  {
    id: 'quiz_hero',
    title: 'Test Şampiyonu 🏆',
    description: 'Bir pekiştirme testini başarıyla tamamladın.',
    icon: '🏆',
    color: '#10B981',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.quizCompleted || 0) >= 1
  },
  {
    id: 'streak_3',
    title: '3 Günlük Seri Ateşi 🔥',
    description: '3 gün üst üste uygulamaya gelip pratik yaptın!',
    icon: '🔥',
    color: '#EF4444',
    xpReward: 150,
    checkUnlocked: (stats) => (stats.streak || 0) >= 3
  },
  {
    id: 'english_explorer',
    title: 'English Explorer 🇬🇧',
    description: 'İngilizce bölümünde en az 3 etkinlik bitirdin.',
    icon: '🇬🇧',
    color: '#2563EB',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.englishCompleted || 0) >= 3
  },
  {
    id: 'german_star',
    title: 'Deutsch Meister 🇩🇪',
    description: 'Almanca bölümünde en az 3 etkinlik bitirdin.',
    icon: '🇩🇪',
    color: '#EA580C',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.germanCompleted || 0) >= 3
  },
  {
    id: 'vocab_champ',
    title: 'Kelime Hazinesi 💎',
    description: 'Kelime Dünyası kartlarından en az 10 kelime dinledin!',
    icon: '💎',
    color: '#06B6D4',
    xpReward: 120,
    checkUnlocked: (stats) => (stats.listenedWordsCount || 0) >= 10
  }
];
