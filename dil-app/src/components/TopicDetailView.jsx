import React, { useState } from 'react';
import { ArrowLeft, Volume2, BookOpen, Layers, CheckCircle2, Zap, HelpCircle, Award, Sparkles } from 'lucide-react';
import { useDil } from '../context/DilContext';
import { playSound } from '../utils/soundEffects';

import { PronunciationPlayer } from './activities/PronunciationPlayer';
import { FlashcardPlayer } from './activities/FlashcardPlayer';
import { MatchingPlayer } from './activities/MatchingPlayer';
import { TrueFalsePlayer } from './activities/TrueFalsePlayer';
import { FillBlankPlayer } from './activities/FillBlankPlayer';
import { QuizPlayer } from './activities/QuizPlayer';

export const TopicDetailView = ({ unit, topic, onBack }) => {
  const { activeLang, completedActivities, markActivityComplete, soundEnabled } = useDil();
  const [activeActivityType, setActiveActivityType] = useState(null); // null | 'pronunciation' | 'flashcards' | 'matching' | 'trueFalse' | 'fillBlank' | 'quiz'

  const activityConfigs = [
    {
      key: 'pronunciationPhrases',
      type: 'pronunciation',
      title: 'Sesli Telaffuz & Tekrar',
      desc: 'Doğru telaffuzu dinle, tekrar et ve konuşma pratiği yap!',
      icon: '🗣️',
      color: '#3B82F6',
      xp: 50,
      data: topic.pronunciationPhrases
    },
    {
      key: 'flashcards',
      type: 'flashcards',
      title: 'Bilgi & Kelime Kartları',
      desc: 'Kartları çevirerek kavramları ve örnek cümleleri pekiştir!',
      icon: '🃏',
      color: '#8B5CF6',
      xp: 40,
      data: topic.flashcards
    },
    {
      key: 'matching',
      type: 'matching',
      title: 'Kelime Eşleştirme',
      desc: 'Yabancı kelimeler ile Türkçe karşılıklarını eşleştir!',
      icon: '🧩',
      color: '#EC4899',
      xp: 50,
      data: topic.matching
    },
    {
      key: 'trueFalse',
      type: 'trueFalse',
      title: 'Hızlı Doğru / Yanlış',
      desc: 'İfadeleri oku, şimşek hızında doğru mu yanlış mı karar ver!',
      icon: '⚡',
      color: '#F59E0B',
      xp: 45,
      data: topic.trueFalse
    },
    {
      key: 'fillBlank',
      type: 'fillBlank',
      title: 'Boşluk Doldurma',
      desc: 'Cümledeki eksik kelimeyi seçeneklerden seçip tamamla!',
      icon: '✏️',
      color: '#10B981',
      xp: 45,
      data: topic.fillBlank
    },
    {
      key: 'quiz',
      type: 'quiz',
      title: 'Mini Test (Quiz)',
      desc: '4 şıklı sorularla konuyu tam öğrendiğini göster!',
      icon: '🎯',
      color: '#6366F1',
      xp: 60,
      data: topic.quiz
    }
  ];

  const handleSelectActivity = (cfg) => {
    playSound('click', soundEnabled);
    setActiveActivityType(cfg.type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleActivityComplete = (type, xpReward) => {
    markActivityComplete(`${topic.id}_${type}`, xpReward);
  };

  const handleBackToActivities = () => {
    playSound('click', soundEnabled);
    setActiveActivityType(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentActiveCfg = activityConfigs.find(c => c.type === activeActivityType);

  return (
    <div className="topic-detail-container">
      {/* Top Header */}
      <div className="topic-detail-header">
        <button
          type="button"
          className="btn-back-round"
          onClick={activeActivityType ? handleBackToActivities : onBack}
        >
          <ArrowLeft size={22} />
        </button>

        <div className="topic-header-text">
          <span className="topic-unit-subtitle">{unit.title}</span>
          <h2 className="topic-main-title">{topic.title}</h2>
        </div>
      </div>

      {/* Main Activity Area */}
      {activeActivityType ? (
        <div className="active-player-wrapper">
          <div className="active-activity-banner">
            <span className="player-tag-icon">{currentActiveCfg.icon}</span>
            <span className="player-tag-title">{currentActiveCfg.title}</span>
          </div>

          {activeActivityType === 'pronunciation' && (
            <PronunciationPlayer
              phrases={topic.pronunciationPhrases}
              activeLang={activeLang}
              soundEnabled={soundEnabled}
              onComplete={() => handleActivityComplete('pronunciationPhrases', 50)}
            />
          )}

          {activeActivityType === 'flashcards' && (
            <FlashcardPlayer
              cards={topic.flashcards}
              activeLang={activeLang}
              soundEnabled={soundEnabled}
              onComplete={() => handleActivityComplete('flashcards', 40)}
            />
          )}

          {activeActivityType === 'matching' && (
            <MatchingPlayer
              pairs={topic.matching}
              activeLang={activeLang}
              soundEnabled={soundEnabled}
              onComplete={() => handleActivityComplete('matching', 50)}
            />
          )}

          {activeActivityType === 'trueFalse' && (
            <TrueFalsePlayer
              questions={topic.trueFalse}
              activeLang={activeLang}
              soundEnabled={soundEnabled}
              onComplete={() => handleActivityComplete('trueFalse', 45)}
            />
          )}

          {activeActivityType === 'fillBlank' && (
            <FillBlankPlayer
              questions={topic.fillBlank}
              activeLang={activeLang}
              soundEnabled={soundEnabled}
              onComplete={() => handleActivityComplete('fillBlank', 45)}
            />
          )}

          {activeActivityType === 'quiz' && (
            <QuizPlayer
              questions={topic.quiz}
              activeLang={activeLang}
              soundEnabled={soundEnabled}
              onComplete={() => handleActivityComplete('quiz', 60)}
            />
          )}
        </div>
      ) : (
        <div className="activities-selection-grid">
          <div className="choose-activity-intro">
            <Sparkles size={20} className="sparkle-gold" />
            <span>Bir etkinlik seç ve yıldızları topla!</span>
          </div>

          <div className="activity-cards-list">
            {activityConfigs.map((cfg) => {
              const isAvailable = !!cfg.data && cfg.data.length > 0;
              const isCompleted = !!completedActivities[`${topic.id}_${cfg.key}`];

              if (!isAvailable) return null;

              return (
                <button
                  key={cfg.type}
                  type="button"
                  className={`activity-choice-card ${isCompleted ? 'card-completed' : ''}`}
                  onClick={() => handleSelectActivity(cfg)}
                >
                  <div
                    className="activity-card-icon"
                    style={{ background: `${cfg.color}15`, color: cfg.color }}
                  >
                    <span>{cfg.icon}</span>
                  </div>

                  <div className="activity-card-details">
                    <div className="activity-card-title-row">
                      <h4 className="activity-title">{cfg.title}</h4>
                      {isCompleted ? (
                        <span className="badge-done">
                          <CheckCircle2 size={16} /> Tamamlandı
                        </span>
                      ) : (
                        <span className="badge-xp">+{cfg.xp} XP</span>
                      )}
                    </div>
                    <p className="activity-desc">{cfg.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
