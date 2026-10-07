import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Sparkles, BookOpen, Star } from 'lucide-react';
import { LANGUAGES_DATA } from '../data/languagesCurriculum';
import { useDil } from '../context/DilContext';
import { playSound } from '../utils/soundEffects';

const getCurriculumData = () => {
  try {
    const cached = localStorage.getItem('dil_live_curriculum');
    if (cached) return JSON.parse(cached);
  } catch (e) {}
  return LANGUAGES_DATA;
};

export const ThemesView = ({ onSelectTopic }) => {
  const { activeLang, completedActivities, soundEnabled } = useDil();
  const allData = getCurriculumData();
  const currentSubject = allData[activeLang] || LANGUAGES_DATA[activeLang];

  // Keep first unit open by default
  const [openUnits, setOpenUnits] = useState({
    [currentSubject?.units?.[0]?.id]: true
  });

  const toggleUnit = (unitId) => {
    playSound('click', soundEnabled);
    setOpenUnits(prev => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  if (!currentSubject) {
    return <div className="view-empty">Müfredat içeriği yüklenemedi.</div>;
  }

  // Calculate total progress
  let totalTopics = 0;
  let totalDoneCount = 0;

  currentSubject.units.forEach(u => {
    u.topics.forEach(t => {
      totalTopics += 1;
      const acts = ['pronunciationPhrases', 'flashcards', 'matching', 'trueFalse', 'fillBlank', 'quiz'];
      const doneForThis = acts.filter(a => !!completedActivities[`${t.id}_${a}`]).length;
      if (doneForThis >= 3) totalDoneCount += 1; // consider topic progressed
    });
  });

  const completionPercent = Math.round((totalDoneCount / Math.max(totalTopics, 1)) * 100);

  return (
    <div className="themes-view-container">
      {/* Subject Hero Card */}
      <div className={`subject-hero-banner ${activeLang === 'german' ? 'hero-de' : 'hero-en'}`}>
        <div className="hero-text-content">
          <div className="hero-badge-pill">
            <Sparkles size={16} /> MEB 5. Sınıf Maarif Modeli
          </div>
          <h1 className="hero-title">{currentSubject.name}</h1>
          <p className="hero-subtitle">
            {activeLang === 'german'
              ? 'Selamlaşma, kendini tanıtma, sayılar ve günlük yaşam!'
              : 'School life, classroom, personality ve aile temalarıyla dilini geliştir!'}
          </p>
        </div>

        <div className="hero-progress-pill">
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${completionPercent}%` }}
            />
          </div>
          <span className="progress-text">İlerleme: %{completionPercent}</span>
        </div>
      </div>

      {/* Units List */}
      <div className="units-accordion-list">
        {currentSubject.units.map((unit, uIdx) => {
          const isOpen = !!openUnits[unit.id];

          // Count activities finished in this unit
          let unitFinishedCount = 0;
          let unitTotalActs = 0;

          unit.topics.forEach(t => {
            const acts = ['pronunciationPhrases', 'flashcards', 'matching', 'trueFalse', 'fillBlank', 'quiz'];
            acts.forEach(a => {
              if (t[a]) {
                unitTotalActs++;
                if (completedActivities[`${t.id}_${a}`]) unitFinishedCount++;
              }
            });
          });

          return (
            <div key={unit.id} className="unit-card-wrapper">
              <button
                type="button"
                className={`unit-header-btn ${isOpen ? 'open' : ''}`}
                onClick={() => toggleUnit(unit.id)}
              >
                <div className="unit-number-badge">
                  {uIdx + 1}
                </div>

                <div className="unit-info-col">
                  <h3 className="unit-title">{unit.title}</h3>
                  <div className="unit-meta-sub">
                    <span>{unit.topics.length} Konu</span>
                    <span>•</span>
                    <span className="unit-stars">
                      ⭐ {unitFinishedCount}/{unitTotalActs} Tamamlandı
                    </span>
                  </div>
                </div>

                <div className="unit-arrow">
                  {isOpen ? <ChevronDown size={22} /> : <ChevronRight size={22} />}
                </div>
              </button>

              {isOpen && (
                <div className="unit-topics-body">
                  {unit.topics.map((topic, tIdx) => {
                    const acts = ['pronunciationPhrases', 'flashcards', 'matching', 'trueFalse', 'fillBlank', 'quiz'];
                    const doneForTopic = acts.filter(a => !!completedActivities[`${topic.id}_${a}`]).length;
                    const availableActs = acts.filter(a => !!topic[a]).length;
                    const isAllDone = doneForTopic > 0 && doneForTopic === availableActs;

                    return (
                      <button
                        key={topic.id}
                        type="button"
                        className={`topic-tile-btn ${isAllDone ? 'all-done' : ''}`}
                        onClick={() => {
                          playSound('click', soundEnabled);
                          onSelectTopic(unit, topic);
                        }}
                      >
                        <div className="topic-icon-ring">
                          {isAllDone ? '🌟' : '📖'}
                        </div>

                        <div className="topic-tile-info">
                          <h4 className="topic-name">{topic.title}</h4>
                          <span className="topic-progress-badge">
                            {doneForTopic}/{availableActs} Etkinlik Tamamlandı
                          </span>
                        </div>

                        <div className="topic-start-arrow">
                          <ChevronRight size={20} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
