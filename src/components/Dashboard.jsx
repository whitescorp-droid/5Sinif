import React from 'react';
import { useGame } from '../context/GameContext';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { BADGES } from '../data/badgesData';
import { Sparkles, Flame, CheckCircle, ChevronRight, BookOpen, Award, ArrowUpRight, Zap } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const Dashboard = ({ onSelectSubject, onSelectDailyMission }) => {
  const { studentName, xp, streak, completedActivities, unlockedBadgeIds, soundEnabled } = useGame();

  const subjects = CURRICULUM_DATA.subjects;

  // Daily Recommended Missions
  const dailyMissions = [
    {
      id: 'mission_1',
      subjectId: 'matematik',
      unitId: 'mat_u1',
      topicId: 'mat_u1_t1',
      activityType: 'flashcards',
      title: 'Temel Geometrik Çizimler ve Çizgi Türleri',
      subjectName: 'Matematik',
      icon: '📐',
      color: '#3B82F6',
      xpReward: 40,
      isDone: !!completedActivities['mat_u1_t1_flashcards']
    },
    {
      id: 'mission_2',
      subjectId: 'fen',
      unitId: 'fen_u1',
      topicId: 'fen_u1_t1',
      activityType: 'trueFalse',
      title: "Güneş'in Özellikleri Hızlı D/Y Turu",
      subjectName: 'Fen Bilimleri',
      icon: '🔬',
      color: '#10B981',
      xpReward: 45,
      isDone: !!completedActivities['fen_u1_t1_trueFalse']
    },
    {
      id: 'mission_3',
      subjectId: 'turkce',
      unitId: 'tur_u1',
      topicId: 'tur_u1_t1',
      activityType: 'quiz',
      title: 'Gerçek & Mecaz Anlam Pekiştirme Testi',
      subjectName: 'Türkçe',
      icon: '📖',
      color: '#EC4899',
      xpReward: 50,
      isDone: !!completedActivities['tur_u1_t1_quiz']
    },
    {
      id: 'mission_4',
      subjectId: 'ingilizce',
      unitId: 'eng_u1',
      topicId: 'eng_u1_t1',
      activityType: 'pronunciation',
      title: 'İngilizce: School Life Sesli Telaffuz & Tekrar',
      subjectName: 'İngilizce (English)',
      icon: '🇬🇧',
      color: '#2563EB',
      xpReward: 50,
      isDone: !!completedActivities['eng_u1_t1_pronunciation']
    },
    {
      id: 'mission_5',
      subjectId: 'almanca',
      unitId: 'de_u1',
      topicId: 'de_u1_t1',
      activityType: 'pronunciation',
      title: 'Almanca: Selamlaşma Sesli Telaffuz & Tekrar',
      subjectName: 'Almanca (Deutsch)',
      icon: '🇩🇪',
      color: '#EA580C',
      xpReward: 50,
      isDone: !!completedActivities['de_u1_t1_pronunciation']
    },
    {
      id: 'mission_6',
      subjectId: 'sosyal',
      unitId: 'sos_u2',
      topicId: 'sos_u2_t1',
      activityType: 'interactiveLab',
      title: 'Sosyal Bilgiler: Türkiye Harita & Coğrafya Kaşifi',
      subjectName: 'Sosyal Bilgiler',
      icon: '🗺️',
      color: '#0284C7',
      xpReward: 60,
      isDone: !!completedActivities['sos_u2_t1_interactiveLab']
    }
  ];

  return (
    <div className="dashboard-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="welcome-left">
          <div className="welcome-badge">
            <Sparkles size={16} />
            <span>Türkiye Yüzyılı Maarif Modeli ile 5. Sınıf Başarı Programı</span>
          </div>
          <h1 className="welcome-title">
            Hoş Geldin, <span className="highlight-name">{studentName}</span>! 🚀
          </h1>
          <p className="welcome-subtitle">
            Bugün okulda öğrendiğin konuları eğlenceli oyunlar ve etkileşimli alıştırmalarla pekiştirmeye hazır mısın?
          </p>

          <div className="welcome-quick-stats">
            <div className="quick-stat-pill">
              <Flame size={18} className="text-orange" />
              <span><strong>{streak}</strong> Günlük Çalışma Serisi</span>
            </div>
            <div className="quick-stat-pill">
              <Award size={18} className="text-gold" />
              <span><strong>{unlockedBadgeIds.length}</strong> Rozet Kazanıldı</span>
            </div>
          </div>
        </div>

        <div className="welcome-right-art">
          <div className="floating-bubble bubble-1">📐 Matematik</div>
          <div className="floating-bubble bubble-2">🔬 Fen Bilimleri</div>
          <div className="floating-bubble bubble-3">🇬🇧 İngilizce</div>
          <div className="banner-mascot">🎯</div>
        </div>
      </div>

      {/* Günün Görevleri / Günlük Tekrar */}
      <section className="dashboard-section">
        <div className="section-header-row">
          <div className="section-title-wrap">
            <span className="section-icon">🌟</span>
            <div>
              <h2 className="section-title">Günün Tekrar Görevleri</h2>
              <p className="section-subtitle">Günde 10-15 dakika ayırarak okulda gördüğün dersleri taze tut!</p>
            </div>
          </div>
        </div>

        <div className="missions-grid">
          {dailyMissions.map((mission) => {
            return (
              <div 
                key={mission.id} 
                className={`mission-card ${mission.isDone ? 'mission-done' : ''}`}
                onClick={() => {
                  playSound('click', soundEnabled);
                  onSelectDailyMission(mission);
                }}
                role="button"
                tabIndex={0}
              >
                <div className="mission-icon" style={{ backgroundColor: `${mission.color}15`, color: mission.color }}>
                  {mission.icon}
                </div>
                <div className="mission-body">
                  <div className="mission-subject-tag" style={{ color: mission.color }}>
                    {mission.subjectName}
                  </div>
                  <h3 className="mission-title">{mission.title}</h3>
                  <div className="mission-xp-tag">
                    <Sparkles size={14} /> +{mission.xpReward} XP Ödülü
                  </div>
                </div>

                <div className="mission-action">
                  {mission.isDone ? (
                    <span className="done-check-badge">
                      <CheckCircle size={20} /> Tamamlandı
                    </span>
                  ) : (
                    <button className="btn-start-mission" style={{ backgroundColor: mission.color }}>
                      <span>Başla</span>
                      <ChevronRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Sınıf Dersleri Grid */}
      <section className="dashboard-section">
        <div className="section-header-row">
          <div className="section-title-wrap">
            <span className="section-icon">📚</span>
            <div>
              <h2 className="section-title">5. Sınıf Dersleri</h2>
              <p className="section-subtitle">Ders kitabına ve TYMM kazanımlarına uygun ünite ve etkinlikler</p>
            </div>
          </div>
        </div>

        <div className="subjects-grid">
          {subjects.map((sub) => {
            let totalTopics = 0;
            let completedCount = 0;

            sub.units.forEach(u => {
              u.topics.forEach(t => {
                totalTopics++;
                const actKeys = ['flashcards', 'matching', 'trueFalse', 'fillBlank', 'quiz'];
                const doneActs = actKeys.filter(k => !!completedActivities[`${t.id}_${k}`]).length;
                if (doneActs >= 2) completedCount++;
              });
            });

            const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

            return (
              <div
                key={sub.id}
                onClick={() => {
                  playSound('click', soundEnabled);
                  onSelectSubject(sub);
                }}
                className="subject-tile-card"
                role="button"
                tabIndex={0}
              >
                <div className="tile-top-row">
                  <div className="tile-icon-frame" style={{ background: sub.gradient }}>
                    {sub.icon}
                  </div>
                  <span className="tile-progress-pill">
                    %{percent}
                  </span>
                </div>

                <h3 className="tile-title">{sub.name}</h3>
                <p className="tile-desc">{sub.description}</p>

                <div className="tile-stats-row">
                  <span className="stat-unit-count">
                    <BookOpen size={14} /> {sub.units.length} Ünite
                  </span>
                  <span className="stat-topic-count">
                    {totalTopics} Konu Kazanımı
                  </span>
                </div>

                <div className="tile-progress-bar">
                  <div
                    className="tile-progress-fill"
                    style={{ 
                      width: `${Math.max(5, percent)}%`,
                      backgroundColor: sub.color 
                    }}
                  />
                </div>

                <div className="tile-footer">
                  <span className="tile-cta-text" style={{ color: sub.color }}>
                    Dersi İncele & Çalış
                  </span>
                  <ChevronRight size={18} style={{ color: sub.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Başarı Rozetleri Vitrini */}
      <section className="dashboard-section badges-section">
        <div className="section-header-row">
          <div className="section-title-wrap">
            <span className="section-icon">🏆</span>
            <div>
              <h2 className="section-title">Başarı Rozetlerin</h2>
              <p className="section-subtitle">Dersleri tekrar ettikçe ve etkinlikleri tamamladıkça yeni rozetler aç!</p>
            </div>
          </div>
        </div>

        <div className="badges-showcase-grid">
          {BADGES.map((badge) => {
            const isUnlocked = unlockedBadgeIds.includes(badge.id);

            return (
              <div 
                key={badge.id}
                className={`badge-item-card ${isUnlocked ? 'unlocked' : 'locked'}`}
                title={isUnlocked ? badge.description : `Kilitli: ${badge.description}`}
              >
                <div className="badge-emoji-box">
                  {badge.icon}
                </div>
                <div className="badge-name">{badge.title}</div>
                <div className="badge-reward">+{badge.xpReward} XP</div>
                {!isUnlocked && (
                  <div className="badge-lock-overlay">
                    <span>🔒</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
