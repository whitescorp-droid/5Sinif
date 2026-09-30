import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { speakEnglish, stopEnglishSpeech } from '../../utils/speechUtils';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Volume2, CheckCircle2, Award, RefreshCw, ChevronRight, 
  MessageSquare, Compass, Sparkles, HelpCircle, Shuffle, Check, Play
} from 'lucide-react';

export const EnglishDialogueLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  const [activeTab, setActiveTab] = useState('explorer'); // 'explorer', 'dialogue', 'scramble'
  const [selectedStation, setSelectedStation] = useState(0);
  const [playingKey, setPlayingKey] = useState(null);

  // STATIONS DATA for School Explorer
  const stations = [
    {
      id: 'classroom',
      name: 'Classroom',
      titleTr: 'Sınıf Ortamı',
      icon: '🏫',
      description: 'Sınıfta her gün kullandığımız temel araç gereçler ve eşyalar.',
      items: [
        { en: 'Whiteboard', tr: 'Yazı tahtası', phonetic: 'wayt-bord', sentence: 'The teacher writes on the whiteboard.' },
        { en: 'School bag', tr: 'Okul çantası', phonetic: 'skuul bäg', sentence: 'My school bag is blue and heavy.' },
        { en: 'Pencil case', tr: 'Kalemlik', phonetic: 'pensıl keys', sentence: 'There are two pens in my pencil case.' },
        { en: 'Ruler', tr: 'Cetvel', phonetic: 'ruulır', sentence: 'Can I borrow your ruler, please?' },
        { en: 'Desk', tr: 'Sıra / Çalışma masası', phonetic: 'desk', sentence: 'Please sit at your desk.' },
        { en: 'Sharpener', tr: 'Kalemtıraş', phonetic: 'şarpınır', sentence: 'I need a sharpener for my pencil.' }
      ]
    },
    {
      id: 'sciencelab',
      name: 'Science Lab',
      titleTr: 'Fen Laboratuvarı',
      icon: '🔬',
      description: 'Deneyler yaptığımız, mikroskop ve araç gereçlerin olduğu laboratuvar.',
      items: [
        { en: 'Microscope', tr: 'Mikroskop', phonetic: 'maykroskoop', sentence: 'Look at the plant cells through the microscope.' },
        { en: 'Test tube', tr: 'Deney tüpü', phonetic: 'test tüüb', sentence: 'Be careful with the glass test tube.' },
        { en: 'Safety goggles', tr: 'Koruyucu gözlük', phonetic: 'seyfti gaagılz', sentence: 'Always wear safety goggles during experiments.' },
        { en: 'Experiment', tr: 'Deney', phonetic: 'iksperımınt', sentence: 'We love doing science experiments!' }
      ]
    },
    {
      id: 'library',
      name: 'Library',
      titleTr: 'Okul Kütüphanesi',
      icon: '📚',
      description: 'Kitap okuduğumuz, araştırma yaptığımız sessiz bilgi merkezi.',
      items: [
        { en: 'Bookcase', tr: 'Kitaplık / Raf', phonetic: 'buk-keys', sentence: 'There are many storybooks on the bookcase.' },
        { en: 'Dictionary', tr: 'Sözlük', phonetic: 'dikşınari', sentence: 'Look up new English words in the dictionary.' },
        { en: 'Silence, please!', tr: 'Lütfen sessiz olun!', phonetic: 'saylıns pliiz', sentence: 'Silence, please! Students are reading.' },
        { en: 'Borrow a book', tr: 'Kitap ödünç almak', phonetic: 'barov e buk', sentence: 'You can borrow up to three books.' }
      ]
    },
    {
      id: 'canteen',
      name: 'School Canteen',
      titleTr: 'Okul Kantini',
      icon: '🥪',
      description: 'Teneffüslerde beslendiğimiz ve sosyalleştiğimiz kantin alanı.',
      items: [
        { en: 'Sandwich', tr: 'Sandviç', phonetic: 'sendviç', sentence: 'I eat a cheese sandwich at lunch.' },
        { en: 'Apple juice', tr: 'Elma suyu', phonetic: 'epıl cuus', sentence: 'Can I have an apple juice, please?' },
        { en: 'Mineral water', tr: 'Maden suyu / Su', phonetic: 'minırıl vaatır', sentence: 'Drinking water is very healthy.' },
        { en: 'Lunch tray', tr: 'Yemek tepsisi', phonetic: 'lanç trey', sentence: 'Put your lunch tray on the table.' }
      ]
    },
    {
      id: 'gym',
      name: 'Gym & Playground',
      titleTr: 'Spor Salonu & Bahçe',
      icon: '⚽',
      description: 'Beden eğitimi dersleri ve oyunlar için açık ve kapalı spor alanları.',
      items: [
        { en: 'Basketball', tr: 'Basketbol topu', phonetic: 'basket-bool', sentence: 'Let\'s play basketball after school!' },
        { en: 'Skipping rope', tr: 'İp atlama ipi', phonetic: 'skiping roop', sentence: 'She likes skipping rope with friends.' },
        { en: 'Whistle', tr: 'Düdük', phonetic: 'visıl', sentence: 'The P.E. teacher blows the whistle.' },
        { en: 'Playground', tr: 'Okul bahçesi / Oyun alanı', phonetic: 'pley-gravnd', sentence: 'Children run happily in the playground.' }
      ]
    }
  ];

  // DIALOGUE ROLEPLAY CHALLENGES
  const dialogues = [
    {
      id: 1,
      title: 'Meeting a New Friend (Yeni Arkadaşla Tanışma)',
      context: 'Okulun ilk günü koridorda yeni bir öğrenciyle karşılaştın.',
      characterA: { name: 'Oliver', avatar: '👦', role: 'Student' },
      characterB: { name: 'Sen', avatar: '🌟', role: 'You' },
      lines: [
        { speaker: 'Oliver', text: 'Hello! I am Oliver. What is your name?', audioRate: 0.9 },
        { 
          speaker: 'You', 
          prompt: 'Kendini nasıl tanıtırsın?',
          options: [
            { text: 'Hi Oliver! My name is Deniz. Nice to meet you.', isCorrect: true, feedback: 'Harika! Selam verip adını söyledin ve memnuniyetini belirttin.' },
            { text: 'I don\'t like maths.', isCorrect: false, feedback: 'Bu cevap tanışma için uygun değil.' },
            { text: 'Goodbye, see you tomorrow.', isCorrect: false, feedback: 'Henüz yeni karşılaştınız, vedalaşma söylenmez.' }
          ]
        },
        { speaker: 'Oliver', text: 'Nice to meet you too, Deniz! Where are you from?', audioRate: 0.9 },
        {
          speaker: 'You',
          prompt: 'Nereli olduğunu belirt:',
          options: [
            { text: 'I am from Türkiye. What about you?', isCorrect: true, feedback: 'Çok iyi! "I am from Türkiye" doğru ülke ifadesidir.' },
            { text: 'I am eleven years old.', isCorrect: false, feedback: 'Bu ifade yaş belirtir, nereli olduğunu söylemez.' },
            { text: 'Yes, I have got a pencil.', isCorrect: false, feedback: 'Bu cevap "Where are you from?" sorusuna uymaz.' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'In the Classroom: Asking for Help (Sınıfta İzin İsteme & Yardım)',
      context: 'Derste silgini unuttun ve yanındaki arkadaştan rica edeceksin.',
      characterA: { name: 'Emma', avatar: '👧', role: 'Classmate' },
      characterB: { name: 'Sen', avatar: '🌟', role: 'You' },
      lines: [
        { speaker: 'Emma', text: 'We need an eraser for this drawing.', audioRate: 0.9 },
        {
          speaker: 'You',
          prompt: 'Arkadaşından nazikçe silgisini ödünç iste:',
          options: [
            { text: 'Can I borrow your eraser, please?', isCorrect: true, feedback: 'Mükemmel! "Can I borrow ... please?" en kibar rica kalıbıdır.' },
            { text: 'Give me your eraser now!', isCorrect: false, feedback: 'Bu kaba bir emir cümlesidir, "please" ve "borrow" tercih edilir.' },
            { text: 'I like playing football.', isCorrect: false, feedback: 'Konuyla ilgisiz bir cümle.' }
          ]
        },
        { speaker: 'Emma', text: 'Sure, here you are!', audioRate: 0.9 },
        {
          speaker: 'You',
          prompt: 'Silgiyi aldıktan sonra ne söylersin?',
          options: [
            { text: 'Thank you very much, Emma!', isCorrect: true, feedback: 'Nezaket kuralı: Teşekkür ettin!' },
            { text: 'No, thank you.', isCorrect: false, feedback: 'Eşyayı aldın, reddetmek mantıksız olur.' },
            { text: 'Open your books!', isCorrect: false, feedback: 'Bu bir öğretmen yönergesidir.' }
          ]
        }
      ]
    }
  ];

  // SCRAMBLE CHALLENGE DATA
  const scrambleTasks = [
    {
      id: 1,
      turkish: 'Sen nerelisin? (Ülke sorusu)',
      words: ['Where', 'are', 'you', 'from', '?'],
      correctOrder: ['Where', 'are', 'you', 'from', '?']
    },
    {
      id: 2,
      turkish: 'Lütfen içeri girebilir miyim? (İzin isteme)',
      words: ['May', 'I', 'come', 'in', ',', 'please', '?'],
      correctOrder: ['May', 'I', 'come', 'in', ',', 'please', '?']
    },
    {
      id: 3,
      turkish: 'Benim en sevdiğim ders Fen Bilimleri.',
      words: ['My', 'favourite', 'school', 'subject', 'is', 'Science', '.'],
      correctOrder: ['My', 'favourite', 'school', 'subject', 'is', 'Science', '.']
    },
    {
      id: 4,
      turkish: 'Pazartesi günü İngilizce dersimiz var.',
      words: ['We', 'have', 'got', 'English', 'on', 'Monday', '.'],
      correctOrder: ['We', 'have', 'got', 'English', 'on', 'Monday', '.']
    }
  ];

  // Dialogue State
  const [currentDialogueIdx, setCurrentDialogueIdx] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [dialogueHistory, setDialogueHistory] = useState([]);
  const [dialogueDone, setDialogueDone] = useState(false);

  // Scramble State
  const [currentScrambleIdx, setCurrentScrambleIdx] = useState(0);
  const [placedWords, setPlacedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [scrambleStatus, setScrambleStatus] = useState(null);
  const [scrambleCompletedCount, setScrambleCompletedCount] = useState(0);

  // Initialize Scramble task
  const initScramble = (index) => {
    const task = scrambleTasks[index];
    if (!task) return;
    const shuffled = [...task.words].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setPlacedWords([]);
    setScrambleStatus(null);
  };

  const handlePlayWord = (word, key) => {
    setPlayingKey(key);
    speakEnglish(word, 0.9, () => setPlayingKey(null));
  };

  const handleStartDialogue = () => {
    const d = dialogues[currentDialogueIdx];
    setDialogueHistory([d.lines[0]]);
    setCurrentStep(1);
    setDialogueDone(false);
    speakEnglish(d.lines[0].text);
  };

  const handleChooseOption = (option) => {
    const d = dialogues[currentDialogueIdx];
    if (!option.isCorrect) {
      playSound('wrong', soundEnabled);
      alert(option.feedback || 'Tekrar dene!');
      return;
    }

    playSound('correct', soundEnabled);
    speakEnglish(option.text);

    const updated = [
      ...dialogueHistory,
      { speaker: 'You', text: option.text, feedback: option.feedback }
    ];

    const nextIdx = currentStep + 1;
    if (nextIdx < d.lines.length) {
      const nextLine = d.lines[nextIdx];
      updated.push(nextLine);
      setDialogueHistory(updated);
      setCurrentStep(nextIdx + 1);
      setTimeout(() => {
        speakEnglish(nextLine.text);
      }, 700);
    } else {
      setDialogueHistory(updated);
      setDialogueDone(true);
      completeActivity('ingilizce', topic.id, 'interactiveLab', 100, 100);
      playSound('victory', soundEnabled);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    }
  };

  const handleWordClick = (word, index) => {
    playSound('click', soundEnabled);
    speakEnglish(word, 1.0);
    const nextPlaced = [...placedWords, word];
    const nextAvailable = availableWords.filter((_, i) => i !== index);
    setPlacedWords(nextPlaced);
    setAvailableWords(nextAvailable);

    const task = scrambleTasks[currentScrambleIdx];
    if (nextPlaced.length === task.correctOrder.length) {
      const isCorrect = nextPlaced.every((w, i) => w === task.correctOrder[i]);
      if (isCorrect) {
        setScrambleStatus('correct');
        playSound('correct', soundEnabled);
        setTimeout(() => {
          speakEnglish(nextPlaced.join(' '));
        }, 300);

        setScrambleCompletedCount(prev => prev + 1);
      } else {
        setScrambleStatus('wrong');
        playSound('wrong', soundEnabled);
      }
    }
  };

  const handleRemovePlacedWord = (word, index) => {
    playSound('click', soundEnabled);
    const nextPlaced = placedWords.filter((_, i) => i !== index);
    const nextAvailable = [...availableWords, word];
    setPlacedWords(nextPlaced);
    setAvailableWords(nextAvailable);
    setScrambleStatus(null);
  };

  const handleNextScramble = () => {
    if (currentScrambleIdx + 1 < scrambleTasks.length) {
      const nextIdx = currentScrambleIdx + 1;
      setCurrentScrambleIdx(nextIdx);
      initScramble(nextIdx);
    } else {
      completeActivity('ingilizce', topic.id, 'interactiveLab', 100, 100);
      playSound('victory', soundEnabled);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      alert('Tebrikler! Cümle kurma laboratuvarını başarıyla tamamladın! (+50 XP)');
    }
  };

  return (
    <div className="english-lab-container p-6 bg-slate-900/90 rounded-3xl border border-blue-500/30 text-white shadow-2xl">
      {/* Lab Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
            <Sparkles size={16} /> 5. Sınıf Çoklu Yabancı Dil Maarif Modeli
          </div>
          <h2 className="text-2xl font-black flex items-center gap-3">
            <span>🇬🇧 English Interactive Lab: School & Classroom Studio</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Okul ve sınıf yaşamını sesli keşfet, İngilizce diyalog kur ve kelimeleri doğru sıraya dizerek pratik yap!
          </p>
        </div>

        {/* Lab Navigation Sub-Tabs */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700">
          <button
            onClick={() => { setActiveTab('explorer'); stopEnglishSpeech(); }}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'explorer' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass size={16} />
            <span>Okul Keşif İstasyonu</span>
          </button>

          <button
            onClick={() => { 
              setActiveTab('dialogue'); 
              stopEnglishSpeech();
              if (dialogueHistory.length === 0) handleStartDialogue();
            }}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'dialogue' 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare size={16} />
            <span>Canlı Diyalog Stüdyosu</span>
          </button>

          <button
            onClick={() => { 
              setActiveTab('scramble'); 
              stopEnglishSpeech();
              if (placedWords.length === 0 && availableWords.length === 0) initScramble(0);
            }}
            className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'scramble' 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Shuffle size={16} />
            <span>Cümle Kurma Oyunu</span>
          </button>
        </div>
      </div>

      {/* TAB 1: SCHOOL EXPLORER */}
      {activeTab === 'explorer' && (
        <div className="space-y-6">
          {/* Station Selector Bar */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {stations.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => { setSelectedStation(idx); stopEnglishSpeech(); }}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl border transition-all flex-shrink-0 ${
                  selectedStation === idx
                    ? 'bg-blue-600/30 border-blue-400 text-white shadow-md'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="text-2xl">{st.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-bold">{st.name}</div>
                  <div className="text-xs text-slate-400">{st.titleTr}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Station Card & Item Grid */}
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2 text-blue-300">
                  <span>{stations[selectedStation].icon}</span>
                  <span>{stations[selectedStation].name}</span>
                  <span className="text-sm text-slate-400 font-normal">({stations[selectedStation].titleTr})</span>
                </h3>
                <p className="text-slate-400 text-sm mt-1">{stations[selectedStation].description}</p>
              </div>
              <div className="text-xs font-semibold text-blue-400 bg-blue-900/40 px-3 py-1.5 rounded-full border border-blue-800">
                🔊 Nesneye tıklayarak doğal İngilizce sesini dinle!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stations[selectedStation].items.map((item, idx) => {
                const isPlaying = playingKey === `${selectedStation}_${idx}`;
                return (
                  <div
                    key={idx}
                    className={`bg-slate-800/80 border rounded-2xl p-4 transition-all hover:scale-[1.02] flex flex-col justify-between ${
                      isPlaying ? 'border-blue-400 shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/50' : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-lg font-black text-white">{item.en}</span>
                        <button
                          onClick={() => handlePlayWord(item.en, `${selectedStation}_${idx}`)}
                          className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-xl transition-all flex items-center gap-1 text-xs"
                          title="Doğal Telaffuzu Dinle"
                        >
                          <Volume2 size={16} />
                          <span>Dinle</span>
                        </button>
                      </div>

                      <div className="text-emerald-400 text-sm font-semibold mb-1">
                        {item.tr}
                      </div>

                      <div className="text-slate-400 text-xs italic mb-3">
                        Okunuşu: <span className="text-amber-300">[{item.phonetic}]</span>
                      </div>
                    </div>

                    <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-300">💬 {item.sentence}</span>
                      <button
                        onClick={() => handlePlayWord(item.sentence, `sen_${selectedStation}_${idx}`)}
                        className="text-blue-400 hover:text-blue-300 p-1"
                        title="Cümleyi Dinle"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LIVE DIALOGUE STUDIO */}
      {activeTab === 'dialogue' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-purple-900/30 border border-purple-700/50 p-4 rounded-2xl">
            <div>
              <div className="text-xs uppercase font-bold text-purple-300">İnteraktif Konuşma & Rol Oyunu</div>
              <h3 className="text-lg font-bold text-white mt-0.5">{dialogues[currentDialogueIdx].title}</h3>
              <p className="text-slate-300 text-xs mt-1">{dialogues[currentDialogueIdx].context}</p>
            </div>

            <button
              onClick={() => {
                const next = (currentDialogueIdx + 1) % dialogues.length;
                setCurrentDialogueIdx(next);
                setDialogueHistory([dialogues[next].lines[0]]);
                setCurrentStep(1);
                setDialogueDone(false);
                speakEnglish(dialogues[next].lines[0].text);
              }}
              className="bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <RefreshCw size={14} />
              <span>Diğer Senaryoya Geç</span>
            </button>
          </div>

          {/* Dialogue Conversation Stream */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 min-h-[300px] flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {dialogueHistory.map((item, idx) => {
                const isYou = item.speaker === 'You';
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 ${isYou ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl flex-shrink-0">
                      {isYou ? '🌟' : '👦'}
                    </div>

                    <div
                      className={`max-w-[80%] p-4 rounded-2xl text-sm relative ${
                        isYou 
                          ? 'bg-purple-600 text-white rounded-tr-none' 
                          : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <span className="text-xs font-bold opacity-80">{item.speaker}</span>
                        <button
                          onClick={() => speakEnglish(item.text)}
                          className="hover:scale-110 transition-transform opacity-75 hover:opacity-100"
                          title="Cümleyi Dinle"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <p className="font-semibold text-base">{item.text}</p>
                      {item.feedback && (
                        <div className="text-xs mt-2 pt-2 border-t border-purple-400/40 text-purple-200">
                          💡 {item.feedback}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* User Choice Options */}
            {!dialogueDone && currentStep < dialogues[currentDialogueIdx].lines.length && (
              <div className="bg-slate-900/90 border border-slate-700 p-5 rounded-2xl mt-4 animate-fadeIn">
                <div className="text-sm font-bold text-amber-400 mb-3 flex items-center gap-2">
                  <span>🎯 Sıra sende! Uygun İngilizce cevabı seç:</span>
                </div>
                <div className="space-y-2.5">
                  {dialogues[currentDialogueIdx].lines[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleChooseOption(opt)}
                      className="w-full text-left p-3.5 rounded-xl bg-slate-800/80 hover:bg-purple-600/30 border border-slate-700 hover:border-purple-400 text-sm font-semibold transition-all flex items-center justify-between group"
                    >
                      <span>{opt.text}</span>
                      <ChevronRight size={18} className="text-slate-500 group-hover:text-purple-300 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dialogue Completed Celebration */}
            {dialogueDone && (
              <div className="bg-emerald-950/40 border border-emerald-500/50 p-5 rounded-2xl text-center animate-fadeIn">
                <Award size={40} className="mx-auto text-emerald-400 mb-2" />
                <h4 className="text-lg font-bold text-emerald-300">Splendid! Diyaloğu Başarıyla Tamamladın! 🇬🇧</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Doğal telaffuz ve doğru kalıplarla okul diyalog görevini bitirdin.
                </p>
                <button
                  onClick={handleStartDialogue}
                  className="mt-3 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-2"
                >
                  <RefreshCw size={14} />
                  <span>Diyaloğu Yeniden Başlat</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: SENTENCE SCRAMBLE GAME */}
      {activeTab === 'scramble' && (
        <div className="space-y-6">
          <div className="bg-emerald-950/40 border border-emerald-700/50 p-4 rounded-2xl flex items-center justify-between">
            <div>
              <div className="text-xs uppercase font-bold text-emerald-300">Cümle Sıralama & Gramer Laboratuvarı</div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Görev {currentScrambleIdx + 1} / {scrambleTasks.length}
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                Hedef Türkçe Anlam: <strong className="text-amber-300">"{scrambleTasks[currentScrambleIdx].turkish}"</strong>
              </p>
            </div>
            <div className="text-xs font-bold text-emerald-400 bg-emerald-900/60 px-3 py-1.5 rounded-full border border-emerald-800">
              Tamamlanan: {scrambleCompletedCount} / {scrambleTasks.length}
            </div>
          </div>

          {/* Sentence Builder Drop Zone */}
          <div className="bg-slate-950/70 border-2 border-dashed border-slate-700 rounded-3xl p-6 min-h-[140px] flex flex-col justify-center">
            <div className="text-xs text-slate-500 font-semibold mb-3 uppercase tracking-wider text-center">
              Aşağıdaki kelimelere dokunarak doğru cümle sırasını oluştur:
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 min-h-[50px]">
              {placedWords.length === 0 ? (
                <span className="text-slate-600 italic text-sm">Buraya kelimeler dizilecek...</span>
              ) : (
                placedWords.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRemovePlacedWord(word, idx)}
                    className="bg-blue-600 hover:bg-red-600/80 text-white font-bold px-4 py-2 rounded-xl text-base shadow-lg transition-all animate-scaleUp group flex items-center gap-1.5"
                    title="Kaldırmak için tıkla"
                  >
                    <span>{word}</span>
                    <span className="text-xs opacity-60 group-hover:opacity-100">✕</span>
                  </button>
                ))
              )}
            </div>

            {/* Validation Feedback */}
            {scrambleStatus === 'correct' && (
              <div className="mt-4 p-3 rounded-xl bg-emerald-600/20 border border-emerald-500 text-emerald-300 text-center font-bold flex items-center justify-center gap-2 animate-fadeIn text-sm">
                <CheckCircle2 size={18} />
                <span>Harika! Cümle kusursuz kuruldu!</span>
              </div>
            )}

            {scrambleStatus === 'wrong' && (
              <div className="mt-4 p-3 rounded-xl bg-red-600/20 border border-red-500 text-red-300 text-center font-bold text-sm animate-fadeIn">
                Sıralamada bir hata var. Kelimeleri geri alıp Türkçe anlama göre tekrar dizmeyi dene!
              </div>
            )}
          </div>

          {/* Available Word Bank */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5">
            <div className="text-xs text-slate-400 font-bold uppercase mb-3">Kullanılabilir Kelimeler:</div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {availableWords.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWordClick(word, idx)}
                  className="bg-slate-700 hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-base border border-slate-600 hover:border-emerald-400 shadow-md transition-all active:scale-95"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => initScramble(currentScrambleIdx)}
              className="text-slate-400 hover:text-white text-xs font-bold flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700"
            >
              <RefreshCw size={14} />
              <span>Sıfırla & Baştan Diz</span>
            </button>

            {scrambleStatus === 'correct' && (
              <button
                onClick={handleNextScramble}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/30 animate-pulse"
              >
                <span>{currentScrambleIdx + 1 < scrambleTasks.length ? 'Sonraki Cümleye Geç' : 'Laboratuvarı Tamamla! 🏆'}</span>
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
