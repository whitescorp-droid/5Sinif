// School Life Theme 1 - Quest and NPC Data for 3D Game World

export const NPCS_DATA = [
  {
    id: 'npc_deniz',
    name: 'Deniz (New Student)',
    title: 'Yeni Arkadaş',
    role: 'Student',
    color: '#3B82F6', // Blue outfit
    avatarEmoji: '👦',
    location: { x: 3, y: 0, z: 8 }, // In the schoolyard
    zoneName: 'Schoolyard (Okul Bahçesi)',
    questId: 'quest_1',
    dialogue: {
      greeting: "Hello! My name is Deniz. Welcome to our school!",
      turkishGreeting: "Merhaba! Benim adım Deniz. Okulumuza hoş geldin!",
      question: "What is your name?",
      turkishQuestion: "Senin adın ne?",
      options: [
        { text: "My name is Ali. Nice to meet you!", correct: true, feedback: "Nice to meet you too! Let's explore the school together." },
        { text: "I am fine, thank you.", correct: false, feedback: "Hmm, I asked for your name. You can say 'My name is...'" },
        { text: "I like football.", correct: false, feedback: "That's cool, but what is your name first?" }
      ],
      followUp: {
        speakerText: "Where are you from?",
        turkishText: "Nerelisin?",
        options: [
          { text: "I am from Türkiye.", correct: true, feedback: "Great! I am from Türkiye too. Let's go to the main building!" },
          { text: "I am ten years old.", correct: false, feedback: "That's your age! To say your country, say 'I am from...'" }
        ]
      },
      starsReward: 25,
      completedMessage: "Harika! Deniz ile tanıştın ve ilk arkadaşını edindin!"
    }
  },
  {
    id: 'npc_selin',
    name: 'Selin (Guide)',
    title: 'Rehber Öğrenci',
    role: 'Guide',
    color: '#EC4899', // Pink outfit
    avatarEmoji: '👧',
    location: { x: 0, y: 0, z: -2 }, // In the main corridor
    zoneName: 'Corridor (Ana Koridor)',
    questId: 'quest_2',
    dialogue: {
      greeting: "Hi there! I am Selin. Can I help you find a place in the school?",
      turkishGreeting: "Selam! Ben Selin. Okulda bir yeri bulmana yardımcı olabilir miyim?",
      question: "Where do we go to buy snacks and drinks at break time?",
      turkishQuestion: "Teneffüste atıştırmalık ve içecek almak için nereye gideriz?",
      options: [
        { text: "We go to the Canteen.", correct: true, feedback: "Spot on! The Canteen is down the hall to the right." },
        { text: "We go to the Library.", correct: false, feedback: "In the library we read books quietly!" },
        { text: "We go to the Gym.", correct: false, feedback: "In the gym we play sports like basketball!" }
      ],
      followUp: {
        speakerText: "And where is the Science Lab?",
        turkishText: "Peki Fen Laboratuvarı nerede?",
        options: [
          { text: "It is next to the library.", correct: true, feedback: "Exactly! Remember: 'next to' means yan yana." },
          { text: "It is under the desk.", correct: false, feedback: "A whole science lab can't be under a desk!" }
        ]
      },
      starsReward: 30,
      completedMessage: "Süper! Okulun bölümlerini ve yönleri öğrendin!"
    }
  },
  {
    id: 'npc_clark',
    name: 'Mr. Clark (English Teacher)',
    title: 'İngilizce Öğretmeni',
    role: 'Teacher',
    color: '#10B981', // Green teacher suit
    avatarEmoji: '👨‍🏫',
    location: { x: -8, y: 0, z: -10 }, // In Classroom 5-A
    zoneName: 'Classroom 5-A (5-A Sınıfı)',
    questId: 'quest_3',
    dialogue: {
      greeting: "Good morning class! I am your English teacher, Mr. Clark.",
      turkishGreeting: "Günaydın sınıf! Ben İngilizce öğretmeniniz Mr. Clark.",
      question: "Let's review our school rules. What MUST you do in class?",
      turkishQuestion: "Okul kurallarımızı hatırlayalım. Derste ne YAPMALISINIZ (MUST)?",
      options: [
        { text: "You must listen to your teacher.", correct: true, feedback: "Excellent rule! Listening is the key to learning." },
        { text: "You must run in the corridor.", correct: false, feedback: "No! You mustn't run in the corridor." },
        { text: "You must make noise.", correct: false, feedback: "No! Making noise is not allowed." }
      ],
      followUp: {
        speakerText: "Which after-school club builds robots and writes code?",
        turkishText: "Hangi okul kulübü robot yapar ve kod yazar?",
        options: [
          { text: "Robotics and Coding Club", correct: true, feedback: "Brilliant! You are a star student!" },
          { text: "Drama Club", correct: false, feedback: "Drama club is for acting out plays!" }
        ]
      },
      starsReward: 40,
      completedMessage: "Tebrikler! Mr. Clark sana tam puan verdi!"
    }
  },
  {
    id: 'npc_bob',
    name: 'Chef Bob (Canteen Staff)',
    title: 'Kantin Görevlisi',
    role: 'Chef',
    color: '#F59E0B', // Amber
    avatarEmoji: '👨‍🍳',
    location: { x: 8, y: 0, z: -8 }, // In Canteen
    zoneName: 'Canteen (Kantin)',
    questId: 'quest_4',
    dialogue: {
      greeting: "Hello student! What would you like from the canteen today?",
      turkishGreeting: "Merhaba öğrenci! Bugün kantinden ne istersin?",
      question: "How do you politely order an apple juice in English?",
      turkishQuestion: "İngilizce kibarca nasıl elma suyu sipariş edersin?",
      options: [
        { text: "Can I have an apple juice, please?", correct: true, feedback: "Sure! Here is your fresh apple juice. Enjoy!" },
        { text: "Give me apple juice now!", correct: false, feedback: "That sounds rude! Always say 'Can I have..., please?'" },
        { text: "I don't like juice.", correct: false, feedback: "That's fine, but how would you order if you wanted one?" }
      ],
      starsReward: 35,
      completedMessage: "Nezaket kurallarıyla sipariş vermeyi başardın!"
    }
  }
];

export const COLLECTIBLES_DATA = [
  {
    id: 'item_backpack',
    name: 'School Bag',
    turkish: 'Okul Çantası',
    pronunciation: 'skuul beg',
    location: { x: -6, y: 0.5, z: -7 },
    room: 'Classroom 5-A',
    icon: '🎒',
    color: '#EC4899',
    description: 'We carry our books and notebooks in our school bag.'
  },
  {
    id: 'item_pencil',
    name: 'Pencil',
    turkish: 'Kurşun Kalem',
    pronunciation: 'pen-sıl',
    location: { x: -10, y: 0.5, z: -8 },
    room: 'Classroom 5-A',
    icon: '✏️',
    color: '#F59E0B',
    description: 'We write notes and draw with a pencil.'
  },
  {
    id: 'item_eraser',
    name: 'Eraser',
    turkish: 'Silgi',
    pronunciation: 'i-rey-sır',
    location: { x: -7, y: 0.5, z: -11 },
    room: 'Classroom 5-A',
    icon: '🧼',
    color: '#3B82F6',
    description: 'We erase mistakes with an eraser.'
  },
  {
    id: 'item_ruler',
    name: 'Ruler',
    turkish: 'Cetvel',
    pronunciation: 'ruu-lır',
    location: { x: -9, y: 0.5, z: -12 },
    room: 'Classroom 5-A',
    icon: '📏',
    color: '#10B981',
    description: 'We measure straight lines with a ruler.'
  },
  {
    id: 'item_book',
    name: 'English Book',
    turkish: 'İngilizce Kitabı',
    pronunciation: 'ing-liş buuk',
    location: { x: 7, y: 0.5, z: -12 },
    room: 'Library',
    icon: '📚',
    color: '#8B5CF6',
    description: 'Oxford English Book for 5th grade students.'
  }
];

export const QUESTS_LIST = [
  {
    id: 'quest_1',
    title: 'Yeni Bir Arkadaş Edin (Make a Friend)',
    description: 'Okul bahçesinde bekleyen Deniz ile tanış ve adını söyle.',
    targetZone: 'Schoolyard',
    npcId: 'npc_deniz',
    stars: 25,
    completed: false
  },
  {
    id: 'quest_2',
    title: 'Okulun Bölümlerini Keşfet (Explore Places)',
    description: 'Ana koridordaki Selin ile konuşup Canteen ve Library yönlerini öğren.',
    targetZone: 'Corridor',
    npcId: 'npc_selin',
    stars: 30,
    completed: false
  },
  {
    id: 'quest_3',
    title: '5-A Sınıfında Eşyalarını Topla (Classroom Items)',
    description: '5-A sınıfına gir ve gizlenmiş okul eşyalarını (Bag, Pencil, Eraser) topla.',
    targetZone: 'Classroom 5-A',
    requiredItems: ['item_backpack', 'item_pencil', 'item_eraser'],
    stars: 35,
    completed: false
  },
  {
    id: 'quest_4',
    title: 'Öğretmenin Kurallarını Öğren (School Rules)',
    description: '5-A sınıfındaki Mr. Clark ile konuş ve okul kuralları sınavını geç.',
    targetZone: 'Classroom 5-A',
    npcId: 'npc_clark',
    stars: 40,
    completed: false
  },
  {
    id: 'quest_5',
    title: 'Kantinden Sipariş Ver (Order at Canteen)',
    description: 'Kantine git ve Chef Bob ile kibarca İngilizce konuşarak sipariş ver.',
    targetZone: 'Canteen',
    npcId: 'npc_bob',
    stars: 35,
    completed: false
  }
];
