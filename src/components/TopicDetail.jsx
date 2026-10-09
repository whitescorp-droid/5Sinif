import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { 
  ArrowLeft, BookOpen, Layers, Zap, CheckCircle2, 
  HelpCircle, Sparkles, ChevronDown, ChevronUp, Check 
} from 'lucide-react';
import { FlashcardActivity } from './activities/FlashcardActivity';
import { MatchingActivity } from './activities/MatchingActivity';
import { TrueFalseActivity } from './activities/TrueFalseActivity';
import { FillBlankActivity } from './activities/FillBlankActivity';
import { QuizActivity } from './activities/QuizActivity';
import { PronunciationActivity } from './activities/PronunciationActivity';
import { InteractiveLabActivity } from './activities/InteractiveLabActivity';
import { playSound } from '../utils/soundEffects';

export const TopicDetail = ({ subject, unit, topic, onBack, onGoHome }) => {
  const { completedActivities, soundEnabled } = useGame();
  
  // If there is an interactive lab, make it the default landing tab!
  const hasInteractiveLab = !!topic.interactiveLab;
  const hasPronunciation = topic.pronunciationPhrases && topic.pronunciationPhrases.length > 0;
  
  const defaultTab = hasInteractiveLab ? 'interactiveLab' : (hasPronunciation ? 'pronunciation' : 'flashcards');
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showSummary, setShowSummary] = useState(true);

  const activities = [
    ...(hasInteractiveLab ? [{
      id: 'interactiveLab',
      label: topic.interactiveLab.title || 'Keşif Laboratuvarı',
      icon: '🔬',
      count: 'Etkileşimli',
      isCompleted: !!completedActivities[`${topic.id}_interactiveLab`]
    }] : []),
    ...(hasPronunciation ? [{
      id: 'pronunciation',
      label: 'Sesli Telaffuz & Tekrar',
      icon: '🗣️',
      count: topic.pronunciationPhrases.length,
      isCompleted: !!completedActivities[`${topic.id}_pronunciation`]
    }] : []),
    {
      id: 'flashcards',
      label: 'Bilgi Kartları',
      icon: '🎴',
      count: topic.flashcards?.length || 0,
      isCompleted: !!completedActivities[`${topic.id}_flashcards`]
    },
    {
      id: 'matching',
      label: 'Kavram Eşleştirme',
      icon: '🧩',
      count: topic.matching?.length || 0,
      isCompleted: !!completedActivities[`${topic.id}_matching`]
    },
    {
      id: 'trueFalse',
      label: 'Hızlı D/Y Turu',
      icon: '⚡',
      count: topic.trueFalse?.length || 0,
      isCompleted: !!completedActivities[`${topic.id}_trueFalse`]
    },
    {
      id: 'fillBlank',
      label: 'Boşluk Doldurma',
      icon: '✏️',
      count: topic.fillBlank?.length || 0,
      isCompleted: !!completedActivities[`${topic.id}_fillBlank`]
    },
    {
      id: 'quiz',
      label: 'Pekiştirme Testi',
      icon: '🏆',
      count: topic.quiz?.length || 0,
      isCompleted: !!completedActivities[`${topic.id}_quiz`]
    }
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    playSound('click', soundEnabled);
  };

  return (
    <div className="topic-detail-page">
      {/* Navigation Breadcrumbs */}
      <div className="breadcrumb-nav">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={18} />
          <span>{subject.name} Konuları</span>
        </button>
        <div className="breadcrumb-trail">
          <span onClick={onGoHome} className="crumb-link">Ana Sayfa</span>
          <span className="crumb-sep">/</span>
          <span onClick={onBack} className="crumb-link">{subject.name}</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">{topic.title}</span>
        </div>
      </div>

      {/* Topic Title & TYMM Learning Outcome Header */}
      <div className="topic-hero-card" style={{ borderColor: subject.color }}>
        <div className="topic-hero-top">
          <div className="kazanim-badge-row">
            <span className="badge-kazanim-code">{topic.kazanimCode}</span>
            <span className="badge-maarif">Türkiye Yüzyılı Maarif Modeli</span>
          </div>
          <h1 className="topic-hero-title">{topic.title}</h1>
          <p className="topic-kazanim-desc">
            🎯 <strong>Kazanım Hedefi:</strong> {topic.kazanimDesc}
          </p>
        </div>

        {/* Key Concepts Pills */}
        {topic.keyConcepts && topic.keyConcepts.length > 0 && (
          <div className="key-concepts-row">
            <span className="concepts-label">Anahtar Kavramlar:</span>
            <div className="concepts-list">
              {topic.keyConcepts.map((concept, idx) => (
                <span key={idx} className="concept-pill" style={{ color: subject.color }}>
                  #{concept}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Visual Illustration if available */}
        {topic.visualImage && (
          <div className="topic-visual-illustration-box" style={{ margin: '14px 0' }}>
            <img 
              src={topic.visualImage} 
              alt={topic.title} 
              className="topic-visual-full-img"
              style={{ maxHeight: '420px', width: '100%', objectFit: 'contain', borderRadius: '12px', border: '1px solid #CBD5E1', background: '#F8FAFC' }}
            />
          </div>
        )}

        {/* Collapsible Topic Summary */}
        <div className="topic-summary-accordion">
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="summary-toggle-header"
          >
            <div className="summary-toggle-title">
              <BookOpen size={18} />
              <span>Hızlı Konu Tekrar Özeti & Bilgi Notları</span>
            </div>
            {showSummary ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {showSummary && (
            <div className="summary-content-body animate-fadeIn">
              <div 
                className="summary-formatted-text"
                dangerouslySetInnerHTML={{ 
                  __html: topic.summary
                    .replace(/\n/g, '<br/>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/•/g, '<span class="bullet-dot">•</span>')
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Activity Mode Selection Tabs */}
      <div className="activity-tabs-container">
        <h3 className="activity-tabs-title">Etkileşimli Pekiştirme Modları</h3>
        <div className="activity-tabs-scroll">
          {activities.map((act) => {
            const isActive = activeTab === act.id;
            return (
              <button
                key={act.id}
                onClick={() => handleTabChange(act.id)}
                className={`activity-tab-btn ${isActive ? 'active' : ''}`}
                style={isActive ? { borderBottomColor: subject.color, color: subject.color } : {}}
              >
                <span className="act-tab-icon">{act.icon}</span>
                <span className="act-tab-label">{act.label}</span>
                <span className="act-tab-count">({act.count})</span>
                {act.isCompleted && (
                  <span className="act-tab-done" title="Tamamlandı!">
                    <Check size={14} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Activity Main Area */}
      <div className="activity-stage-card">
        {activeTab === 'interactiveLab' && (
          <InteractiveLabActivity
            topic={topic}
            subjectId={subject.id}
            onFinish={() => setActiveTab('flashcards')}
          />
        )}
        {activeTab === 'pronunciation' && (
          <PronunciationActivity
            topic={topic}
            subjectId={subject.id}
            onFinish={() => setActiveTab('flashcards')}
          />
        )}
        {activeTab === 'flashcards' && (
          <FlashcardActivity
            topic={topic}
            subjectId={subject.id}
            onFinish={() => setActiveTab('matching')}
          />
        )}
        {activeTab === 'matching' && (
          <MatchingActivity
            topic={topic}
            subjectId={subject.id}
            onFinish={() => setActiveTab('trueFalse')}
          />
        )}
        {activeTab === 'trueFalse' && (
          <TrueFalseActivity
            topic={topic}
            subjectId={subject.id}
            onFinish={() => setActiveTab('fillBlank')}
          />
        )}
        {activeTab === 'fillBlank' && (
          <FillBlankActivity
            topic={topic}
            subjectId={subject.id}
            onFinish={() => setActiveTab('quiz')}
          />
        )}
        {activeTab === 'quiz' && (
          <QuizActivity
            topic={topic}
            subjectId={subject.id}
            onFinish={onBack}
          />
        )}
      </div>
    </div>
  );
};
