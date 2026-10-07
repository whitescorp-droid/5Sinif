import React, { useState } from 'react';
import { Volume2, Search, Sparkles, Check, Bookmark, BookA } from 'lucide-react';
import { VOCABULARY_BY_LANG } from '../data/vocabularyData';
import { useDil } from '../context/DilContext';
import { speakWord } from '../utils/speechUtils';
import { playSound } from '../utils/soundEffects';

const getVocabularyData = () => {
  try {
    const cached = localStorage.getItem('dil_live_vocabulary');
    if (cached) return JSON.parse(cached);
  } catch (e) {}
  return VOCABULARY_BY_LANG;
};

export const VocabularyView = () => {
  const { activeLang, listenedWords, markWordListened, soundEnabled } = useDil();
  const allVocab = getVocabularyData();
  const categories = allVocab[activeLang] || VOCABULARY_BY_LANG[activeLang] || [];

  const [selectedCatId, setSelectedCatId] = useState(categories[0]?.id || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const [playingWordId, setPlayingWordId] = useState(null);

  // Sync selectedCatId when activeLang changes
  React.useEffect(() => {
    if (categories.length > 0 && !categories.find(c => c.id === selectedCatId)) {
      setSelectedCatId(categories[0].id);
    }
  }, [activeLang, categories, selectedCatId]);

  const handleSpeak = (word) => {
    playSound('click', soundEnabled);
    setPlayingWordId(word.id);
    speakWord(word.word, activeLang, () => {
      setPlayingWordId(null);
    });
    markWordListened(word.id);
  };

  const handleSpeakSentence = (sentence, wordId) => {
    playSound('click', soundEnabled);
    speakWord(sentence, activeLang);
    markWordListened(wordId);
  };

  // Filter words
  let activeCategory = categories.find(c => c.id === selectedCatId);
  let wordsToShow = activeCategory ? activeCategory.words : categories.flatMap(c => c.words);

  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase();
    wordsToShow = wordsToShow.filter(w =>
      w.word.toLowerCase().includes(q) ||
      w.meaning.toLowerCase().includes(q)
    );
  }

  return (
    <div className="vocabulary-view-container">
      {/* Search & Header */}
      <div className="vocab-header-card">
        <div className="vocab-header-title-row">
          <BookA size={24} className="vocab-title-icon" />
          <h2 className="vocab-title">
            {activeLang === 'german' ? 'Almanca Kelime Dünyası' : 'İngilizce Kelime Dünyası'}
          </h2>
        </div>
        <p className="vocab-desc">
          Sesli telaffuzlu, resimli ve örnek cümleli kelime kartları!
        </p>

        {/* Search input */}
        <div className="search-bar-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Kelime veya anlam ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSearchTerm('')}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="category-scroll-pills">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`cat-pill-btn ${selectedCatId === cat.id ? 'active' : ''}`}
            onClick={() => {
              playSound('click', soundEnabled);
              setSelectedCatId(cat.id);
            }}
          >
            <span className="cat-pill-icon">{cat.icon}</span>
            <span className="cat-pill-title">{cat.titleTr}</span>
            <span className="cat-pill-count">({cat.words.length})</span>
          </button>
        ))}
      </div>

      {/* Word Cards Grid */}
      <div className="vocab-words-grid">
        {wordsToShow.length === 0 ? (
          <div className="no-words-found">Aradığın kelime bulunamadı.</div>
        ) : (
          wordsToShow.map((w) => {
            const isListened = !!listenedWords[w.id];
            const isPlaying = playingWordId === w.id;

            return (
              <div key={w.id} className="word-card-item">
                <div className="word-card-top">
                  <div className="word-main-group">
                    <span className="word-emoji">{w.emoji || '📖'}</span>
                    <div>
                      <h3 className="word-text">{w.word}</h3>
                      {w.phonetic && <span className="word-phonetic">{w.phonetic}</span>}
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`btn-word-audio ${isPlaying ? 'playing' : ''}`}
                    onClick={() => handleSpeak(w)}
                    title="Sesli Dinle"
                  >
                    <Volume2 size={24} />
                  </button>
                </div>

                <div className="word-meaning-row">
                  <span className="badge-level">{w.level || 'A1'}</span>
                  <span className="word-meaning">{w.meaning}</span>
                </div>

                {w.exampleEn && (
                  <div className="word-example-box">
                    <div className="example-target-line">
                      <span>"{w.exampleEn}"</span>
                      <button
                        type="button"
                        className="btn-mini-audio"
                        onClick={() => handleSpeakSentence(w.exampleEn, w.id)}
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                    {w.exampleTr && (
                      <span className="example-tr-line">{w.exampleTr}</span>
                    )}
                  </div>
                )}

                {w.tip && (
                  <div className="word-tip-box">
                    <Sparkles size={14} />
                    <span>{w.tip}</span>
                  </div>
                )}

                <div className="word-card-footer">
                  {isListened ? (
                    <span className="listened-pill">
                      <Check size={14} /> Dinlendi & Öğrenildi
                    </span>
                  ) : (
                    <span className="listen-invite-pill">
                      🔊 Dinle ve +5 XP Kazan!
                    </span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
