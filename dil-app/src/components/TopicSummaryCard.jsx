import React, { useState } from 'react';
import { BookOpen, Sparkles, Volume2 } from 'lucide-react';
import { speakWord } from '../utils/speechUtils';

export const TopicSummaryCard = ({ topic, activeLang }) => {
  const [playingWord, setPlayingWord] = useState(null);

  if (!topic || (!topic.summary && (!topic.keyConcepts || topic.keyConcepts.length === 0))) {
    return null;
  }

  const handleSpeak = (word) => {
    const cleanWord = word.replace(/[\(\)✓✗_]/g, '').trim();
    if (!cleanWord) return;
    setPlayingWord(word);
    speakWord(cleanWord, activeLang || 'oxford', 0.88, () => {
      setPlayingWord(null);
    });
  };

  // Structured summary parser
  const parseSummaryContent = (rawText) => {
    if (!rawText) return { title: '', sections: [], spotlight: '' };

    let text = rawText.trim();

    // 1. Extract Spotlight
    let spotlight = '';
    const spotMatch = text.match(/💡\s*\*\*?Spotlight:?\*\*?\s*([\s\S]*?)$/i);
    if (spotMatch) {
      spotlight = spotMatch[1].trim();
      text = text.slice(0, spotMatch.index).trim();
    }

    // 2. Extract Subheading/Title
    let title = '';
    const titleMatch = text.match(/###\s*(.*)/);
    if (titleMatch) {
      title = titleMatch[1].trim();
      text = text.replace(titleMatch[0], '').trim();
    }

    // 3. Process lines into organized groups
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const sections = [];
    let currentSection = null;

    lines.forEach(line => {
      // Category header: • **Category:** rest or • **Category**
      const catMatch = line.match(/^[•\-\*]\s*\*\*(.*?)\*\*:?\s*(.*)$/);
      if (catMatch) {
        currentSection = {
          title: catMatch[1].trim(),
          inlineText: catMatch[2].trim(),
          items: []
        };
        sections.push(currentSection);
        return;
      }

      // Definition item: - **term:** definition or - term: definition
      const defMatch = line.match(/^[•\-\*]\s*(?:\*\*(.*?)\*\*|(.*?)):\s*(.*)$/);
      if (defMatch) {
        const term = (defMatch[1] || defMatch[2] || '').trim();
        const def = (defMatch[3] || '').trim();
        if (!currentSection) {
          currentSection = { title: 'Temel Bilgiler', inlineText: '', items: [] };
          sections.push(currentSection);
        }
        currentSection.items.push({ term, def });
        return;
      }

      // Simple bullet or text
      if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
        const cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();
        if (!currentSection) {
          currentSection = { title: 'Notlar', inlineText: '', items: [] };
          sections.push(currentSection);
        }
        currentSection.items.push({ raw: cleanLine });
      } else {
        if (!currentSection) {
          currentSection = { title: 'Açıklama', inlineText: '', items: [] };
          sections.push(currentSection);
        }
        currentSection.items.push({ raw: line });
      }
    });

    return { title, sections, spotlight };
  };

  const { title, sections, spotlight } = parseSummaryContent(topic.summary);

  // Helper to parse inline "word (turkish), word (turkish)" into chips
  const renderInlineWords = (inlineText) => {
    if (!inlineText) return null;

    // Check if it contains word (tr) pairs e.g. whiteboard (yazı tahtası), desk (öğrenci sırası)
    const pairs = [];
    const regex = /([a-zA-Z0-9\s\/\+\-\=\÷\']+) \(([^)]+)\)/g;
    let match;
    while ((match = regex.exec(inlineText)) !== null) {
      pairs.push({ en: match[1].trim(), tr: match[2].trim() });
    }

    if (pairs.length > 0) {
      return (
        <div className="summary-inline-vocab-grid">
          {pairs.map((p, idx) => (
            <div 
              key={idx} 
              className={`summary-word-card ${playingWord === p.en ? 'playing' : ''}`}
              onClick={() => handleSpeak(p.en)}
              title="Sesli dinlemek için tıkla"
            >
              <div className="word-card-top">
                <span className="word-card-en">{p.en}</span>
                <Volume2 size={13} className="word-speak-icon" />
              </div>
              <span className="word-card-tr">{p.tr}</span>
            </div>
          ))}
        </div>
      );
    }

    // Fallback: format bold markdown
    return (
      <div 
        className="summary-inline-text"
        dangerouslySetInnerHTML={{
          __html: inlineText
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/➔/g, '<span class="arrow-sym">➔</span>')
        }}
      />
    );
  };

  return (
    <div className="topic-summary-mobile-card">
      {/* Header */}
      <div className="topic-summary-mobile-header">
        <div className="header-icon-box">
          <BookOpen size={18} />
        </div>
        <div className="header-title-box">
          <span className="header-title-main">Konu Notları & Kelimeler</span>
          {title && <span className="header-subtitle-tag">{title}</span>}
        </div>
      </div>

      {/* Sections & Concept Tables */}
      <div className="topic-summary-sections-list">
        {sections.map((sec, sIdx) => (
          <div key={sIdx} className="summary-section-box">
            <div className="summary-section-badge">
              <span className="section-bullet">●</span>
              <span className="section-title-text">{sec.title}</span>
            </div>

            {/* Inline word pairs or text */}
            {sec.inlineText && renderInlineWords(sec.inlineText)}

            {/* Structured Definition Items */}
            {sec.items.length > 0 && (
              <div className="summary-items-table">
                {sec.items.map((it, iIdx) => {
                  if (it.term && it.def) {
                    return (
                      <div 
                        key={iIdx} 
                        className={`summary-def-row ${playingWord === it.term ? 'playing' : ''}`}
                        onClick={() => handleSpeak(it.term)}
                        title="Sesli dinlemek için tıkla"
                      >
                        <div className="def-term-col">
                          <span className="def-term-text">{it.term}</span>
                          <Volume2 size={13} className="def-speak-icon" />
                        </div>
                        <span className="def-arrow">➜</span>
                        <div className="def-mean-col">
                          <span>{it.def}</span>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div 
                      key={iIdx} 
                      className="summary-raw-line"
                      dangerouslySetInnerHTML={{
                        __html: (it.raw || '')
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/➔/g, '<span class="arrow-sym">➔</span>')
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Spotlight Callout Box */}
      {spotlight && (
        <div className="summary-spotlight-card">
          <div className="spotlight-badge-header">
            <span className="spotlight-bulb-icon">💡</span>
            <span className="spotlight-title-text">SPOTLIGHT İPUCU</span>
          </div>
          <div 
            className="spotlight-body-text"
            dangerouslySetInnerHTML={{
              __html: spotlight
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br/>')
            }}
          />
        </div>
      )}

      {/* Key Concepts (Vocabulary Bank) */}
      {topic.keyConcepts && topic.keyConcepts.length > 0 && (
        <div className="topic-vocab-bank">
          <div className="topic-vocab-bank-title">
            <Sparkles size={14} className="sparkle-icon" />
            <span>Hedef Kelime Bankası ({topic.keyConcepts.length})</span>
          </div>
          <div className="topic-vocab-grid">
            {topic.keyConcepts.map((word, wIdx) => (
              <button
                key={wIdx}
                type="button"
                className={`topic-vocab-btn ${playingWord === word ? 'playing' : ''}`}
                onClick={() => handleSpeak(word)}
                title="Sesli dinlemek için tıkla"
              >
                <span className="vocab-word-text">{word}</span>
                <Volume2 size={13} className="vocab-volume-icon" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
