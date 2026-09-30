import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { speakEnglish, stopEnglishSpeech } from '../../utils/speechUtils';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Volume2, CheckCircle2, Award, RefreshCw, ChevronRight, 
  MessageSquare, Compass, Sparkles, Shuffle
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
      lines: [
        { speaker: 'Oliver', text: 'Hello! I am Oliver. What is your name?' },
        { 
          speaker: 'You', 
          prompt: 'Kendini nasıl tanıtırsın?',
          options: [
            { text: 'Hi Oliver! My name is Deniz. Nice to meet you.', isCorrect: true, feedback: 'Harika! Selam verip adını söyledin ve memnuniyetini belirttin.' },
            { text: 'I don\'t like maths.', isCorrect: false, feedback: 'Bu cevap tanışma için uygun değil.' },
            { text: 'Goodbye, see you tomorrow.', isCorrect: false, feedback: 'Henüz yeni karşılaştınız, vedalaşma söylenmez.' }
          ]
        },
        { speaker: 'Oliver', text: 'Nice to meet you too, Deniz! Where are you from?' },
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
      lines: [
        { speaker: 'Emma', text: 'We need an eraser for this drawing.' },
        {
          speaker: 'You',
          prompt: 'Arkadaşından nazikçe silgisini ödünç iste:',
          options: [
            { text: 'Can I borrow your eraser, please?', isCorrect: true, feedback: 'Mükemmel! "Can I borrow ... please?" en kibar rica kalıbıdır.' },
            { text: 'Give me your eraser now!', isCorrect: false, feedback: 'Bu kaba bir emir cümlesidir, "please" ve "borrow" tercih edilir.' },
            { text: 'I like playing football.', isCorrect: false, feedback: 'Konuyla ilgisiz bir cümle.' }
          ]
        },
        { speaker: 'Emma', text: 'Sure, here you are!' },
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
    <div className="lab-container">
      {/* Header with Standard Lab Design */}
      <div className="lab-header eng-lab-header">
        <div className="lab-title-box">
          <div className="lab-icon-badge">🇬🇧</div>
          <div>
            <h2 className="lab-main-title">
              English Interactive Lab: School & Classroom Studio
            </h2>
            <p className="lab-subtitle">
              Okul ve sınıf yaşamını sesli keşfet, İngilizce diyalog kur ve kelimeleri doğru sıraya dizerek pratik yap!
            </p>
          </div>
        </div>

        {/* Subtabs Bar */}
        <div className="lab-subtabs">
          <button
            onClick={() => { setActiveTab('explorer'); stopEnglishSpeech(); }}
            className={`lab-subtab-btn ${activeTab === 'explorer' ? 'active' : ''}`}
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
            className={`lab-subtab-btn ${activeTab === 'dialogue' ? 'active' : ''}`}
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
            className={`lab-subtab-btn ${activeTab === 'scramble' ? 'active' : ''}`}
          >
            <Shuffle size={16} />
            <span>Cümle Kurma Oyunu</span>
          </button>
        </div>
      </div>

      {/* TAB 1: SCHOOL EXPLORER */}
      {activeTab === 'explorer' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Station Selector Bar */}
          <div className="eng-station-selector">
            {stations.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => { setSelectedStation(idx); stopEnglishSpeech(); }}
                className={`eng-station-btn ${selectedStation === idx ? 'active' : ''}`}
              >
                <span className="st-icon">{st.icon}</span>
                <div>
                  <div className="st-name">{st.name}</div>
                  <div className="st-tr">{st.titleTr}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Station Card & Item Grid */}
          <div className="eng-station-card">
            <div className="eng-station-header">
              <div>
                <h3 className="eng-station-title">
                  <span>{stations[selectedStation].icon}</span>
                  <span>{stations[selectedStation].name}</span>
                  <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 'normal' }}>
                    ({stations[selectedStation].titleTr})
                  </span>
                </h3>
                <p className="eng-station-desc">{stations[selectedStation].description}</p>
              </div>
              <div className="eng-audio-hint">
                🔊 Nesneye tıklayarak doğal İngilizce sesini dinle!
              </div>
            </div>

            <div className="eng-items-grid">
              {stations[selectedStation].items.map((item, idx) => {
                const isPlaying = playingKey === `${selectedStation}_${idx}`;
                return (
                  <div
                    key={idx}
                    className={`eng-item-card ${isPlaying ? 'playing' : ''}`}
                  >
                    <div>
                      <div className="eng-item-top">
                        <span className="eng-word-text">{item.en}</span>
                        <button
                          onClick={() => handlePlayWord(item.en, `${selectedStation}_${idx}`)}
                          className="eng-btn-listen"
                          title="Doğal Telaffuzu Dinle"
                        >
                          <Volume2 size={15} />
                          <span>Dinle</span>
                        </button>
                      </div>

                      <div className="eng-tr-meaning">
                        {item.tr}
                      </div>

                      <div className="eng-phonetic-badge" style={{ marginTop: '4px' }}>
                        Okunuşu: <span>[{item.phonetic}]</span>
                      </div>
                    </div>

                    <div className="eng-sentence-box">
                      <span>💬 {item.sentence}</span>
                      <button
                        onClick={() => handlePlayWord(item.sentence, `sen_${selectedStation}_${idx}`)}
                        className="eng-btn-sentence-listen"
                        title="Cümleyi Dinle"
                      >
                        <Volume2 size={16} />
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="eng-dialogue-meta-card">
            <div>
              <div className="eng-dialogue-meta-tag">İnteraktif Konuşma & Rol Oyunu</div>
              <h3 className="eng-dialogue-title">{dialogues[currentDialogueIdx].title}</h3>
              <p className="eng-dialogue-context">{dialogues[currentDialogueIdx].context}</p>
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
              className="eng-btn-switch-scenario"
            >
              <RefreshCw size={14} />
              <span>Diğer Senaryoya Geç</span>
            </button>
          </div>

          {/* Dialogue Conversation Stream */}
          <div className="eng-chat-window">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {dialogueHistory.map((item, idx) => {
                const isYou = item.speaker === 'You';
                return (
                  <div
                    key={idx}
                    className={`eng-chat-row ${isYou ? 'user' : 'partner'}`}
                  >
                    <div className="eng-chat-avatar">
                      {isYou ? '🌟' : '👦'}
                    </div>

                    <div className="eng-chat-bubble">
                      <div className="eng-chat-bubble-top">
                        <span>{item.speaker}</span>
                        <button
                          onClick={() => speakEnglish(item.text)}
                          style={{ cursor: 'pointer', opacity: 0.8 }}
                          title="Cümleyi Dinle"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <div className="eng-chat-bubble-text">{item.text}</div>
                      {item.feedback && (
                        <div className="eng-chat-feedback">
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
              <div className="eng-options-picker">
                <div className="eng-options-prompt">
                  <span>🎯 Sıra sende! Uygun İngilizce cevabı seç:</span>
                </div>
                <div>
                  {dialogues[currentDialogueIdx].lines[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleChooseOption(opt)}
                      className="eng-option-btn"
                    >
                      <span>{opt.text}</span>
                      <ChevronRight size={18} style={{ color: '#94a3b8' }} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dialogue Completed Celebration */}
            {dialogueDone && (
              <div className="eng-dialogue-finish-card">
                <Award size={44} style={{ color: '#059669', margin: '0 auto 6px auto' }} />
                <h4 className="eng-dialogue-finish-title">Splendid! Diyaloğu Başarıyla Tamamladın! 🇬🇧</h4>
                <p className="eng-dialogue-finish-desc">
                  Doğal telaffuz ve doğru kalıplarla okul diyalog görevini bitirdin (+50 XP).
                </p>
                <button
                  onClick={handleStartDialogue}
                  style={{
                    marginTop: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    background: '#059669',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '13px'
                  }}
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="eng-scramble-meta">
            <div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>
                Cümle Sıralama & Gramer Laboratuvarı
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#064e3b', marginTop: '2px' }}>
                Görev {currentScrambleIdx + 1} / {scrambleTasks.length}
              </h3>
              <p style={{ fontSize: '13px', color: '#065f46', marginTop: '4px' }}>
                Hedef Türkçe Anlam: <strong style={{ color: '#0f172a' }}>"{scrambleTasks[currentScrambleIdx].turkish}"</strong>
              </p>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, background: '#a7f3d0', color: '#065f46', padding: '6px 14px', borderRadius: '9999px' }}>
              Tamamlanan: {scrambleCompletedCount} / {scrambleTasks.length}
            </div>
          </div>

          {/* Sentence Builder Drop Zone */}
          <div className={`eng-scramble-dropzone ${scrambleStatus === 'correct' ? 'success' : ''}`}>
            <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
              Aşağıdaki kelimelere dokunarak doğru cümle sırasını oluştur:
            </div>

            <div className="eng-placed-words-row">
              {placedWords.length === 0 ? (
                <span style={{ color: '#94a3b8', fontStyle: 'italic', fontSize: '14px' }}>
                  Kelimeleri seçtiğinde burada yan yana dizilecek...
                </span>
              ) : (
                placedWords.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleRemovePlacedWord(word, idx)}
                    className="eng-placed-chip"
                    title="Kaldırmak için tıkla"
                  >
                    <span>{word}</span>
                    <span style={{ fontSize: '12px', opacity: 0.7 }}>✕</span>
                  </button>
                ))
              )}
            </div>

            {/* Validation Feedback */}
            {scrambleStatus === 'correct' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontWeight: 800, fontSize: '14px', marginTop: '6px' }}>
                <CheckCircle2 size={18} />
                <span>Harika! Cümle kusursuz kuruldu!</span>
              </div>
            )}

            {scrambleStatus === 'wrong' && (
              <div style={{ color: '#dc2626', fontWeight: 700, fontSize: '13px', marginTop: '6px' }}>
                Sıralamada bir hata var. Kelimelerin üzerine tıklayarak geri al ve tekrar dene!
              </div>
            )}
          </div>

          {/* Available Word Bank */}
          <div className="eng-word-bank-card">
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              Kullanılabilir Kelimeler:
            </div>
            <div className="eng-word-bank-grid">
              {availableWords.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWordClick(word, idx)}
                  className="eng-bank-word-btn"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => initScramble(currentScrambleIdx)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'white',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#475569',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={14} />
              <span>Sıfırla & Baştan Diz</span>
            </button>

            {scrambleStatus === 'correct' && (
              <button
                onClick={handleNextScramble}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  background: '#059669',
                  color: 'white',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(5, 150, 105, 0.3)'
                }}
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
