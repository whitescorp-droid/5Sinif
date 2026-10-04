import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { VOCABULARY_CATEGORIES } from '../../data/vocabularyData';
import { speakEnglish, stopEnglishSpeech } from '../../utils/speechUtils';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import {
  BookOpen, Volume2, RotateCw, CheckCircle2, ChevronRight, ChevronLeft,
  Sparkles, Award, Shuffle, Search, Filter, Headphones, HelpCircle,
  Lightbulb, ArrowLeft, Star, Flame, Check, X, RefreshCw
} from 'lucide-react';
import './Vocabulary.css';

export const VocabularyHub = ({ onBack }) => {
  const {
    currentUser,
    masteredVocab,
    masterVocabWord,
    soundEnabled,
    completeActivity
  } = useGame();

  // Selected Category
  const [selectedCategoryId, setSelectedCategoryId] = useState(VOCABULARY_CATEGORIES[0].id);
  // Active Tab: 'flashcards' | 'listen_quiz' | 'scramble' | 'dictionary'
  const [activeTab, setActiveTab] = useState('flashcards');

  // Flashcard State
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Search State for Dictionary
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('all');

  // Listen Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [quizOptions, setQuizOptions] = useState([]);

  // Scramble State
  const [scrambleIndex, setScrambleIndex] = useState(0);
  const [userLetters, setUserLetters] = useState([]);
  const [availableLetters, setAvailableLetters] = useState([]);
  const [scrambleSolved, setScrambleSolved] = useState(false);

  // Active Category Data
  const currentCategory = VOCABULARY_CATEGORIES.find(c => c.id === selectedCategoryId) || VOCABULARY_CATEGORIES[0];
  const words = currentCategory.words;
  const currentCard = words[cardIndex] || words[0];

  // All words across all categories
  const allWords = VOCABULARY_CATEGORIES.flatMap(cat => cat.words.map(w => ({ ...w, categoryTitle: cat.titleTr, categoryColor: cat.color })));
  const totalMasteredCount = masteredVocab.length;

  // Category change handler
  const handleSelectCategory = (catId) => {
    setSelectedCategoryId(catId);
    setCardIndex(0);
    setIsFlipped(false);
    setQuizIndex(0);
    setQuizScore(0);
    setIsQuizFinished(false);
    setSelectedAnswer(null);
    setIsQuizAnswered(false);
    setScrambleIndex(0);
    playSound('click', soundEnabled);
  };

  // Flip Card
  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
    playSound('flip', soundEnabled);
  };

  // Play audio for word
  const handlePlayWordAudio = (e, text) => {
    if (e) e.stopPropagation();
    setIsPlayingAudio(true);
    speakEnglish(text, 0.88, () => {
      setIsPlayingAudio(false);
    });
  };

  // Next / Prev Card
  const handleNextCard = () => {
    if (cardIndex + 1 < words.length) {
      setCardIndex(cardIndex + 1);
      setIsFlipped(false);
      playSound('click', soundEnabled);
    } else {
      // Loop or stay
      setCardIndex(0);
      setIsFlipped(false);
      playSound('click', soundEnabled);
    }
  };

  const handlePrevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setIsFlipped(false);
      playSound('click', soundEnabled);
    }
  };

  // Toggle Learned Status
  const handleToggleLearned = (wordId) => {
    const isLearnedNow = !masteredVocab.includes(wordId);
    masterVocabWord(wordId, 10);
    if (isLearnedNow) {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  // --- LISTEN & MATCH QUIZ GENERATOR ---
  useEffect(() => {
    if (activeTab === 'listen_quiz' && words.length > 0 && quizIndex < words.length) {
      const targetWord = words[quizIndex];
      // Generate 3 wrong options from current category or all words
      const otherWords = allWords.filter(w => w.id !== targetWord.id);
      const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
      const combined = [targetWord, ...shuffledOthers].sort(() => 0.5 - Math.random());
      setQuizOptions(combined);
      setSelectedAnswer(null);
      setIsQuizAnswered(false);

      // Auto play target audio
      const timer = setTimeout(() => {
        speakEnglish(targetWord.word);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [activeTab, selectedCategoryId, quizIndex]);

  const handleAnswerQuiz = (selectedWord) => {
    if (isQuizAnswered) return;
    const targetWord = words[quizIndex];
    const isCorrect = selectedWord.id === targetWord.id;
    setSelectedAnswer(selectedWord.id);
    setIsQuizAnswered(true);

    if (isCorrect) {
      playSound('correct', soundEnabled);
      setQuizScore(prev => prev + 1);
      if (!masteredVocab.includes(targetWord.id)) {
        masterVocabWord(targetWord.id, 10);
      }
    } else {
      playSound('wrong', soundEnabled);
    }

    setTimeout(() => {
      if (quizIndex + 1 < words.length) {
        setQuizIndex(quizIndex + 1);
      } else {
        setIsQuizFinished(true);
        playSound('victory', soundEnabled);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        // Complete activity for teacher / XP progress
        completeActivity('ingilizce', `vocab_${currentCategory.id}`, 'quiz', quizScore + (isCorrect ? 1 : 0), words.length);
      }
    }, 1300);
  };

  // --- SCRAMBLE WORD PUZZLE GENERATOR ---
  useEffect(() => {
    if (activeTab === 'scramble' && words.length > 0) {
      const targetWord = words[scrambleIndex];
      // We take only alphabetic letters
      const cleanWord = targetWord.word.toUpperCase().replace(/[^A-Z]/g, '');
      const letterArray = cleanWord.split('').map((char, idx) => ({ id: `l_${idx}_${char}`, char }));
      // Shuffle letters
      const shuffled = [...letterArray].sort(() => 0.5 - Math.random());
      setAvailableLetters(shuffled);
      setUserLetters([]);
      setScrambleSolved(false);
    }
  }, [activeTab, selectedCategoryId, scrambleIndex]);

  const handleAddLetter = (letterItem) => {
    if (scrambleSolved) return;
    const nextUserLetters = [...userLetters, letterItem];
    const nextAvailable = availableLetters.filter(l => l.id !== letterItem.id);
    setUserLetters(nextUserLetters);
    setAvailableLetters(nextAvailable);
    playSound('click', soundEnabled);

    // Check if finished
    const targetWord = words[scrambleIndex];
    const targetClean = targetWord.word.toUpperCase().replace(/[^A-Z]/g, '');
    const currentWordString = nextUserLetters.map(l => l.char).join('');

    if (currentWordString.length === targetClean.length) {
      if (currentWordString === targetClean) {
        setScrambleSolved(true);
        playSound('victory', soundEnabled);
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
        if (!masteredVocab.includes(targetWord.id)) {
          masterVocabWord(targetWord.id, 10);
        }
      } else {
        playSound('wrong', soundEnabled);
      }
    }
  };

  const handleRemoveLetter = (letterItem) => {
    if (scrambleSolved) return;
    setUserLetters(prev => prev.filter(l => l.id !== letterItem.id));
    setAvailableLetters(prev => [...prev, letterItem]);
    playSound('click', soundEnabled);
  };

  const handleResetScramble = () => {
    const targetWord = words[scrambleIndex];
    const cleanWord = targetWord.word.toUpperCase().replace(/[^A-Z]/g, '');
    const letterArray = cleanWord.split('').map((char, idx) => ({ id: `l_${idx}_${char}`, char }));
    setAvailableLetters([...letterArray].sort(() => 0.5 - Math.random()));
    setUserLetters([]);
    setScrambleSolved(false);
    playSound('click', soundEnabled);
  };

  // Filtered words for dictionary tab
  const filteredWords = allWords.filter(item => {
    const matchesSearch =
      item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.exampleEn.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      selectedTypeFilter === 'all' ||
      item.type.toLowerCase().includes(selectedTypeFilter.toLowerCase());

    return matchesSearch && matchesType;
  });

  return (
    <div className="vocabulary-hub-container">
      {/* Top Banner Navigation */}
      <div className="vocab-header-card">
        <div className="vocab-header-top">
          <button onClick={onBack} className="btn-vocab-back">
            <ArrowLeft size={18} />
            <span>Ana Sayfaya Dön</span>
          </button>

          <div className="vocab-badge-pill">
            <Sparkles size={16} className="text-gold" />
            <span>Oxford Word Skills Metodolojisi & Serbest Kelime Dünyası</span>
          </div>
        </div>

        <div className="vocab-hero-content">
          <div className="vocab-hero-left">
            <h1 className="vocab-hero-title">
              Word Skills <span className="text-gradient">Kelime İstasyonu</span> 🇬🇧
            </h1>
            <p className="vocab-hero-subtitle">
              Sadece ezberleme, bağlamıyla ve kalıplarıyla öğren! Sesli telaffuzları dinle, 
              akıllı kartları çevir ve kelimeleri cümle içinde ustalıkla kullan.
            </p>
          </div>

          <div className="vocab-stats-pills">
            <div className="vocab-stat-box">
              <span className="vocab-stat-num">{totalMasteredCount} / {allWords.length}</span>
              <span className="vocab-stat-lbl">Öğrenilen Kelime</span>
            </div>
            <div className="vocab-stat-box highlight">
              <span className="vocab-stat-num">+{totalMasteredCount * 10} XP</span>
              <span className="vocab-stat-lbl">Kelime Puanı ⭐</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="vocab-nav-tabs">
          <button
            className={`vocab-tab-btn ${activeTab === 'flashcards' ? 'active' : ''}`}
            onClick={() => { setActiveTab('flashcards'); playSound('click', soundEnabled); }}
          >
            <BookOpen size={18} />
            <span>Akıllı Kartlar (Flashcards)</span>
          </button>

          <button
            className={`vocab-tab-btn ${activeTab === 'listen_quiz' ? 'active' : ''}`}
            onClick={() => { setActiveTab('listen_quiz'); playSound('click', soundEnabled); }}
          >
            <Headphones size={18} />
            <span>Dinle ve Bul (Listen & Match)</span>
          </button>

          <button
            className={`vocab-tab-btn ${activeTab === 'scramble' ? 'active' : ''}`}
            onClick={() => { setActiveTab('scramble'); playSound('click', soundEnabled); }}
          >
            <Shuffle size={18} />
            <span>Harf Sihirbazı (Word Scramble)</span>
          </button>

          <button
            className={`vocab-tab-btn ${activeTab === 'dictionary' ? 'active' : ''}`}
            onClick={() => { setActiveTab('dictionary'); playSound('click', soundEnabled); }}
          >
            <Search size={18} />
            <span>Kelime Sözlüğü & Arama ({allWords.length})</span>
          </button>
        </div>
      </div>

      {/* Category Ribbon / Picker (Shown in Flashcards, Listen, Scramble) */}
      {activeTab !== 'dictionary' && (
        <div className="vocab-category-strip">
          <div className="category-strip-title">
            <span>Konu Temaları:</span>
          </div>
          <div className="category-chips-scroll">
            {VOCABULARY_CATEGORIES.map(cat => {
              const isSelected = cat.id === selectedCategoryId;
              const catMastered = cat.words.filter(w => masteredVocab.includes(w.id)).length;
              return (
                <button
                  key={cat.id}
                  className={`category-chip ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectCategory(cat.id)}
                  style={{
                    '--cat-color': cat.color,
                    borderColor: isSelected ? cat.color : 'transparent'
                  }}
                >
                  <span className="cat-chip-icon">{cat.icon}</span>
                  <div className="cat-chip-info">
                    <span className="cat-chip-title">{cat.titleTr}</span>
                    <span className="cat-chip-count">{catMastered}/{cat.words.length} kelime</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 1: SMART FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <div className="vocab-section-content">
          <div className="card-top-status-row">
            <div className="card-counter">
              Kart: <strong>{cardIndex + 1}</strong> / {words.length}
            </div>

            <div className="card-category-indicator" style={{ color: currentCategory.color }}>
              <span>{currentCategory.icon} {currentCategory.title}</span>
            </div>

            <button
              className={`learned-toggle-btn ${masteredVocab.includes(currentCard.id) ? 'is-learned' : ''}`}
              onClick={() => handleToggleLearned(currentCard.id)}
              title="Bu kelimeyi öğrendim olarak işaretle"
            >
              <CheckCircle2 size={18} />
              <span>{masteredVocab.includes(currentCard.id) ? 'Öğrenildi! (+10 XP)' : 'Öğrendim Olarak İşaretle'}</span>
            </button>
          </div>

          {/* 3D Flashcard */}
          <div className="flashcard-scene" onClick={handleFlipCard}>
            <div className={`vocab-3d-card ${isFlipped ? 'flipped' : ''}`}>
              {/* FRONT FACE */}
              <div className="card-face card-front">
                <div className="face-header">
                  <span className="part-of-speech-badge">{currentCard.type}</span>
                  <span className="level-badge">{currentCard.level}</span>
                  <span className="card-hint-text">
                    <RotateCw size={14} /> Çevirmek için tıkla
                  </span>
                </div>

                <div className="face-center">
                  <div className="word-emoji-avatar">{currentCard.emoji}</div>
                  <h2 className="main-word-text">{currentCard.word}</h2>
                  
                  <div className="phonetic-row">
                    <span className="phonetic-text">{currentCard.phonetic}</span>
                    <span className="pronounce-hint">({currentCard.pronunciation})</span>
                    <button
                      className={`btn-listen-voice ${isPlayingAudio ? 'pulse' : ''}`}
                      onClick={(e) => handlePlayWordAudio(e, currentCard.word)}
                      title="Sesli Telaffuzu Dinle"
                    >
                      <Volume2 size={20} />
                      <span>Dinle</span>
                    </button>
                  </div>
                </div>

                <div className="face-footer-example">
                  <div className="example-header">
                    <Sparkles size={14} className="text-gold" />
                    <span>Örnek Cümle (Sentence in Context)</span>
                    <button
                      className="btn-example-audio"
                      onClick={(e) => handlePlayWordAudio(e, currentCard.exampleEn)}
                      title="Cümleyi Dinle"
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>
                  <p className="example-en">"{currentCard.exampleEn}"</p>
                </div>
              </div>

              {/* BACK FACE */}
              <div className="card-face card-back">
                <div className="face-header">
                  <span className="back-badge">Türkçe Anlamı & Word Skills İpuçları</span>
                  <span className="card-hint-text">
                    <RotateCw size={14} /> Ön yüze dön
                  </span>
                </div>

                <div className="back-meaning-box">
                  <span className="back-meaning-label">Anlamı:</span>
                  <h3 className="back-meaning-text">{currentCard.meaning}</h3>
                </div>

                <div className="back-example-tr-box">
                  <span className="back-sublabel">Örnek Cümle Çevirisi:</span>
                  <p className="back-example-tr">"{currentCard.exampleTr}"</p>
                </div>

                {currentCard.collocation && (
                  <div className="back-collocation-box">
                    <div className="collocation-header">
                      <Flame size={15} className="text-orange" />
                      <span>Birlikte Kullanılan Kalıp (Collocation):</span>
                    </div>
                    <p className="collocation-text">{currentCard.collocation}</p>
                  </div>
                )}

                {currentCard.tip && (
                  <div className="back-tip-box">
                    <div className="tip-header">
                      <Lightbulb size={15} className="text-gold" />
                      <span>Öğretmen İpucu:</span>
                    </div>
                    <p className="tip-text">{currentCard.tip}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Flashcard Controls */}
          <div className="flashcard-controls-bar">
            <button
              onClick={handlePrevCard}
              disabled={cardIndex === 0}
              className="btn-ctrl-prev"
            >
              <ChevronLeft size={20} />
              <span>Önceki</span>
            </button>

            <button onClick={handleFlipCard} className="btn-ctrl-flip">
              <RotateCw size={18} />
              <span>{isFlipped ? 'Ön Yüzü Gör' : 'Kartı Çevir'}</span>
            </button>

            <button
              onClick={() => handlePlayWordAudio(null, currentCard.word)}
              className="btn-ctrl-audio"
            >
              <Volume2 size={18} />
              <span>Telaffuz</span>
            </button>

            <button onClick={handleNextCard} className="btn-ctrl-next">
              <span>Sonraki</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: LISTEN & MATCH QUIZ */}
      {activeTab === 'listen_quiz' && (
        <div className="vocab-section-content">
          {!isQuizFinished ? (
            <div className="listen-quiz-card">
              <div className="quiz-progress-row">
                <span className="quiz-step-text">Soru {quizIndex + 1} / {words.length}</span>
                <span className="quiz-score-badge">⭐ Doğru: {quizScore}</span>
              </div>

              <div className="listen-prompt-center">
                <button
                  className="big-listen-pulse-btn"
                  onClick={() => speakEnglish(words[quizIndex].word)}
                >
                  <Volume2 size={36} />
                  <span>Tekrar Dinle</span>
                </button>
                <h3 className="listen-prompt-title">Duyduğun İngilizce kelimenin doğru karşılığı hangisi?</h3>
                <span className="listen-prompt-sub">(Doğru telaffuzu dikkatle dinle ve tıkla)</span>
              </div>

              <div className="quiz-options-grid">
                {quizOptions.map((opt) => {
                  const targetWord = words[quizIndex];
                  const isSelected = selectedAnswer === opt.id;
                  let optClass = 'quiz-option-btn';

                  if (isQuizAnswered) {
                    if (opt.id === targetWord.id) {
                      optClass += ' correct';
                    } else if (isSelected) {
                      optClass += ' wrong';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      className={optClass}
                      onClick={() => handleAnswerQuiz(opt)}
                      disabled={isQuizAnswered}
                    >
                      <span className="opt-emoji">{opt.emoji}</span>
                      <div className="opt-text-wrap">
                        <span className="opt-tr">{opt.meaning}</span>
                        {isQuizAnswered && <span className="opt-en">{opt.word}</span>}
                      </div>
                      {isQuizAnswered && opt.id === targetWord.id && (
                        <Check size={20} className="opt-icon-feedback correct" />
                      )}
                      {isQuizAnswered && isSelected && opt.id !== targetWord.id && (
                        <X size={20} className="opt-icon-feedback wrong" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="quiz-finish-card">
              <Award size={56} className="finish-award-icon" />
              <h2>Tebrikler! Dinleme Turu Tamamlandı 🎉</h2>
              <p>{currentCategory.titleTr} temasının dinleme alıştırmasını başarıyla tamamladın.</p>
              <div className="finish-score-box">
                <div className="finish-score-item">
                  <span className="score-val">{quizScore} / {words.length}</span>
                  <span className="score-lbl">Doğru Sayısı</span>
                </div>
                <div className="finish-score-item">
                  <span className="score-val text-gold">+{quizScore * 10} XP</span>
                  <span className="score-lbl">Kazanılan Deneyim</span>
                </div>
              </div>
              <button
                className="btn-restart-quiz"
                onClick={() => {
                  setQuizIndex(0);
                  setQuizScore(0);
                  setIsQuizFinished(false);
                }}
              >
                <RefreshCw size={18} />
                <span>Tekrar Oyna</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: WORD SCRAMBLE */}
      {activeTab === 'scramble' && (
        <div className="vocab-section-content">
          <div className="scramble-card">
            <div className="scramble-header">
              <span className="scramble-step">Kelime: {scrambleIndex + 1} / {words.length}</span>
              <button
                className="btn-next-scramble"
                onClick={() => {
                  if (scrambleIndex + 1 < words.length) {
                    setScrambleIndex(scrambleIndex + 1);
                  } else {
                    setScrambleIndex(0);
                  }
                  playSound('click', soundEnabled);
                }}
              >
                <span>Sıradaki Kelime</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="scramble-clue-box">
              <span className="clue-emoji">{words[scrambleIndex].emoji}</span>
              <div className="clue-text-wrap">
                <span className="clue-label">İpucu (Türkçe Anlam):</span>
                <h3 className="clue-meaning">{words[scrambleIndex].meaning}</h3>
                <span className="clue-sub">Örnek: "{words[scrambleIndex].exampleTr}"</span>
              </div>
              <button
                className="clue-audio-btn"
                onClick={() => speakEnglish(words[scrambleIndex].word)}
                title="Kelimeyi Dinle"
              >
                <Volume2 size={22} />
              </button>
            </div>

            {/* Answer Slots */}
            <div className="scramble-answer-tray">
              <span className="tray-label">Oluşturduğun Kelime:</span>
              <div className="tray-slots">
                {userLetters.length === 0 && (
                  <span className="tray-placeholder">Aşağıdaki harflere sırayla tıkla...</span>
                )}
                {userLetters.map((l) => (
                  <button
                    key={l.id}
                    className="scramble-letter-tile user"
                    onClick={() => handleRemoveLetter(l)}
                  >
                    {l.char}
                  </button>
                ))}
              </div>
            </div>

            {/* Solved Banner or Available Letter Tiles */}
            {scrambleSolved ? (
              <div className="scramble-success-banner">
                <CheckCircle2 size={32} className="text-green" />
                <div>
                  <h4 className="success-word">{words[scrambleIndex].word}</h4>
                  <p>Harika! Doğru kelimeyi yazdın ve +10 XP kazandın! ⭐</p>
                </div>
              </div>
            ) : (
              <div className="scramble-pool-container">
                <span className="pool-label">Kullanılabilir Harfler:</span>
                <div className="scramble-pool-tiles">
                  {availableLetters.map((l) => (
                    <button
                      key={l.id}
                      className="scramble-letter-tile pool"
                      onClick={() => handleAddLetter(l)}
                    >
                      {l.char}
                    </button>
                  ))}
                </div>
                <button onClick={handleResetScramble} className="btn-scramble-reset">
                  <RefreshCw size={15} />
                  <span>Harfleri Sıfırla</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: ALL WORDS DICTIONARY & SEARCH */}
      {activeTab === 'dictionary' && (
        <div className="vocab-section-content">
          <div className="dictionary-search-bar-row">
            <div className="search-input-wrap">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="İngilizce veya Türkçe kelime ara... (ör: wake up, delicious, okul)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="dict-search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="btn-clear-search">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="type-filter-chips">
              {['all', 'verb', 'noun', 'adjective', 'phrase'].map((t) => (
                <button
                  key={t}
                  className={`filter-chip ${selectedTypeFilter === t ? 'active' : ''}`}
                  onClick={() => setSelectedTypeFilter(t)}
                >
                  {t === 'all' ? 'Tümü' : t}
                </button>
              ))}
            </div>
          </div>

          <div className="dict-results-count">
            Toplam <strong>{filteredWords.length}</strong> kelime listeleniyor:
          </div>

          <div className="dictionary-grid">
            {filteredWords.map((item) => {
              const isLearned = masteredVocab.includes(item.id);
              return (
                <div key={item.id} className={`dict-word-card ${isLearned ? 'learned' : ''}`}>
                  <div className="dict-card-header">
                    <span className="dict-emoji">{item.emoji}</span>
                    <div className="dict-word-title-wrap">
                      <div className="dict-word-title-row">
                        <h4 className="dict-en-word">{item.word}</h4>
                        <button
                          className="btn-mini-audio"
                          onClick={() => speakEnglish(item.word)}
                          title="Telaffuz"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <span className="dict-phonetic">{item.phonetic}</span>
                    </div>

                    <button
                      className={`dict-check-btn ${isLearned ? 'active' : ''}`}
                      onClick={() => handleToggleLearned(item.id)}
                      title={isLearned ? 'Öğrenildi' : 'Öğrenildi olarak işaretle'}
                    >
                      <CheckCircle2 size={20} />
                    </button>
                  </div>

                  <div className="dict-meaning-text">
                    {item.meaning}
                  </div>

                  <div className="dict-example-text">
                    "{item.exampleEn}"
                  </div>

                  {item.collocation && (
                    <div className="dict-collocation-pill">
                      ⚡ <strong>Kalıp:</strong> {item.collocation}
                    </div>
                  )}

                  <div className="dict-card-footer">
                    <span className="dict-cat-tag" style={{ borderColor: item.categoryColor, color: item.categoryColor }}>
                      {item.categoryTitle}
                    </span>
                    <span className="dict-type-tag">{item.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
