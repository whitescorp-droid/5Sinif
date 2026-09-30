import React from 'react';
import { useGame } from '../context/GameContext';
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Sparkles, Star } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const SubjectView = ({ subject, onSelectTopic, onBack }) => {
  const { completedActivities, soundEnabled } = useGame();

  // Calculate subject progress
  let totalTopics = 0;
  let completedTopicsCount = 0;

  subject.units.forEach(unit => {
    unit.topics.forEach(topic => {
      totalTopics++;
      // check if at least 2 activities are completed in this topic
      const actKeys = ['flashcards', 'matching', 'trueFalse', 'fillBlank', 'quiz'];
      const doneCount = actKeys.filter(k => !!completedActivities[`${topic.id}_${k}`]).length;
      if (doneCount >= 2) {
        completedTopicsCount++;
      }
    });
  });

  const progressPercent = totalTopics > 0 ? Math.round((completedTopicsCount / totalTopics) * 100) : 0;

  return (
    <div className="subject-page-container">
      {/* Top bar with back button */}
      <div className="subject-top-nav">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={18} />
          <span>Tüm Derslere Dön</span>
        </button>
      </div>

      {/* Subject Hero Header */}
      <div 
        className="subject-banner-card"
        style={{ background: subject.gradient }}
      >
        <div className="banner-content">
          <div className="banner-icon-box">{subject.icon}</div>
          <div className="banner-text">
            <span className="banner-tag">5. Sınıf Maarif Modeli</span>
            <h1 className="banner-title">{subject.name}</h1>
            <p className="banner-desc">{subject.description}</p>
          </div>
        </div>

        <div className="banner-progress-panel">
          <div className="progress-info-row">
            <span>Ders Başarı Durumu</span>
            <span className="progress-pct">%{progressPercent}</span>
          </div>
          <div className="progress-bar-white">
            <div 
              className="progress-fill-white" 
              style={{ width: `${Math.max(6, progressPercent)}%` }}
            />
          </div>
          <div className="progress-sub-info">
            {completedTopicsCount} / {totalTopics} Konu Pekiştirildi
          </div>
        </div>
      </div>

      {/* Units & Topics List */}
      <div className="units-container">
        {subject.units.map((unit) => (
          <div key={unit.id} className="unit-card">
            <div className="unit-header">
              <div className="unit-badge">
                {unit.unitNumber}. ÜNİTE
              </div>
              <h2 className="unit-title">{unit.title}</h2>
              <p className="unit-desc">{unit.description}</p>
            </div>

            <div className="topics-grid">
              {unit.topics.map((topic) => {
                const actKeys = ['flashcards', 'matching', 'trueFalse', 'fillBlank', 'quiz'];
                const doneCount = actKeys.filter(k => !!completedActivities[`${topic.id}_${k}`]).length;
                const isFullyDone = doneCount === actKeys.length;

                return (
                  <div
                    key={topic.id}
                    onClick={() => {
                      playSound('click', soundEnabled);
                      onSelectTopic(unit, topic);
                    }}
                    className={`topic-card ${isFullyDone ? 'completed-border' : ''}`}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="topic-card-top">
                      <span className="kazanim-code-pill">
                        {topic.kazanimCode}
                      </span>
                      {isFullyDone && (
                        <span className="fully-done-badge" title="Tüm etkinlikler tamamlandı!">
                          <CheckCircle size={16} /> Tamamlandı
                        </span>
                      )}
                    </div>

                    <h3 className="topic-card-title">{topic.title}</h3>
                    <p className="topic-card-kazanim-desc">
                      {topic.kazanimDesc}
                    </p>

                    {/* Activity mini indicators */}
                    <div className="topic-card-bottom">
                      <div className="activity-mini-icons">
                        <span className={`mini-act-badge ${completedActivities[`${topic.id}_flashcards`] ? 'done' : ''}`} title="Bilgi Kartları">
                          🎴
                        </span>
                        <span className={`mini-act-badge ${completedActivities[`${topic.id}_matching`] ? 'done' : ''}`} title="Kavram Eşleştirme">
                          🧩
                        </span>
                        <span className={`mini-act-badge ${completedActivities[`${topic.id}_trueFalse`] ? 'done' : ''}`} title="Hızlı D/Y">
                          ⚡
                        </span>
                        <span className={`mini-act-badge ${completedActivities[`${topic.id}_fillBlank`] ? 'done' : ''}`} title="Boşluk Doldurma">
                          ✏️
                        </span>
                        <span className={`mini-act-badge ${completedActivities[`${topic.id}_quiz`] ? 'done' : ''}`} title="Test">
                          🏆
                        </span>
                      </div>

                      <div className="topic-start-action">
                        <span>Çalışmaya Başla</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
