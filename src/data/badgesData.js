// 5. Sınıf Başarı Rozetleri Kataloğu
export const BADGES = [
  {
    id: 'first_step',
    title: 'İlk Adım 🚀',
    description: 'İlk etkileşimli etkinliğini başarıyla tamamladın!',
    icon: '🎯',
    color: '#3B82F6',
    xpReward: 50,
    checkUnlocked: (stats) => (stats.completedActivitiesCount || 0) >= 1
  },
  {
    id: 'concept_master',
    title: 'Kavram Avcısı 🧩',
    description: 'Bir kavram eşleştirme oyununu tamamladın.',
    icon: '🧩',
    color: '#8B5CF6',
    xpReward: 50,
    checkUnlocked: (stats) => (stats.matchingCompleted || 0) >= 1
  },
  {
    id: 'speed_thinker',
    title: 'Şimşek Zihin ⚡',
    description: 'Hızlı Doğru/Yanlış turunu yüksek başarıyla tamamladın.',
    icon: '⚡',
    color: '#F59E0B',
    xpReward: 50,
    checkUnlocked: (stats) => (stats.trueFalseCompleted || 0) >= 1
  },
  {
    id: 'quiz_champion',
    title: 'Test Şampiyonu 🏆',
    description: 'Bir pekiştirme testinde tüm soruları doğru bildin!',
    icon: '🏆',
    color: '#10B981',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.perfectQuizzes || 0) >= 1
  },
  {
    id: 'streak_3',
    title: '3 Günlük Seri Ateşi 🔥',
    description: '3 gün üst üste siteye gelip tekrar yaptın!',
    icon: '🔥',
    color: '#EF4444',
    xpReward: 150,
    checkUnlocked: (stats) => (stats.streak || 0) >= 3
  },
  {
    id: 'math_wolf',
    title: 'Matematik Kurdu 📐',
    description: 'Matematik dersinde en az 2 etkinlik tamamladın.',
    icon: '🔢',
    color: '#3B82F6',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.subjectActivities?.['matematik'] || 0) >= 2
  },
  {
    id: 'science_explorer',
    title: 'Fen Kaşifi 🔬',
    description: 'Fen Bilimleri dersinde en az 2 etkinlik tamamladın.',
    icon: '🔬',
    color: '#10B981',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.subjectActivities?.['fen'] || 0) >= 2
  },
  {
    id: 'word_master',
    title: 'Sözcük Ustası 📚',
    description: 'Türkçe dersinde en az 2 etkinlik tamamladın.',
    icon: '📖',
    color: '#EC4899',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.subjectActivities?.['turkce'] || 0) >= 2
  },
  {
    id: 'german_star',
    title: 'Almanca Yıldızı 🇩🇪',
    description: 'Almanca dersinde en az 2 etkinlik tamamladın. Wunderbar!',
    icon: '🇩🇪',
    color: '#EA580C',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.subjectActivities?.['almanca'] || 0) >= 2
  },
  {
    id: 'english_star',
    title: 'English Star 🇬🇧',
    description: 'İngilizce dersinde en az 2 etkinlik tamamladın. Splendid!',
    icon: '🇬🇧',
    color: '#2563EB',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.subjectActivities?.['ingilizce'] || 0) >= 2
  },
  {
    id: 'social_explorer',
    title: 'Sosyal Kaşif 🌍',
    description: 'Sosyal Bilgiler dersinde en az 2 etkinlik veya Resfebe bulmacasını tamamladın!',
    icon: '🌍',
    color: '#D97706',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.subjectActivities?.['sosyal'] || 0) >= 2
  },
  {
    id: 'xp_500',
    title: 'Maarif Yıldızı 🌟',
    description: 'Toplam 500 XP deneyim puanına ulaştın!',
    icon: '⭐',
    color: '#F59E0B',
    xpReward: 200,
    checkUnlocked: (stats) => (stats.xp || 0) >= 500
  },
  {
    id: 'xp_1000',
    title: 'Eğitim Şampiyonu 👑',
    description: '1000 XP barajını aştın, tebrikler süper öğrenci!',
    icon: '👑',
    color: '#6366F1',
    xpReward: 300,
    checkUnlocked: (stats) => (stats.xp || 0) >= 1000
  },
  {
    id: 'vocab_explorer',
    title: 'Word Skills Kaşifi 🔤',
    description: 'Kelime Dünyasında en az 10 İngilizce kelime kartını başarıyla öğrendin!',
    icon: '🔤',
    color: '#06B6D4',
    xpReward: 100,
    checkUnlocked: (stats) => (stats.vocabLearnedCount || 0) >= 10
  },
  {
    id: 'vocab_master',
    title: 'Oxford Word Master 🎓',
    description: 'Word Skills kelime havuzunda en az 30 kelimeyi tamamladın!',
    icon: '🎓',
    color: '#8B5CF6',
    xpReward: 250,
    checkUnlocked: (stats) => (stats.vocabLearnedCount || 0) >= 30
  }
];

