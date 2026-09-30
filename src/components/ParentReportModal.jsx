import React from 'react';
import { useGame } from '../context/GameContext';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { X, Award, Flame, BookOpen, CheckCircle, AlertCircle, RotateCcw, Sparkles } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const ParentReportModal = ({ isOpen, onClose }) => {
  const { 
    studentName, 
    xp, 
    streak, 
    levelInfo, 
    completedActivities, 
    stats,
    resetAllProgress,
    soundEnabled
  } = useGame();

  if (!isOpen) return null;

  const subjects = CURRICULUM_DATA.subjects;

  // Compute detailed statistics
  const subjectStats = subjects.map(sub => {
    let totalTopics = 0;
    let completedActivitiesInSub = 0;
    let totalActivitiesInSub = 0;

    sub.units.forEach(u => {
      u.topics.forEach(t => {
        totalTopics++;
        const keys = ['flashcards', 'matching', 'trueFalse', 'fillBlank', 'quiz'];
        totalActivitiesInSub += keys.length;
        keys.forEach(k => {
          if (completedActivities[`${t.id}_${k}`]) {
            completedActivitiesInSub++;
          }
        });
      });
    });

    const completionRate = totalActivitiesInSub > 0 
      ? Math.round((completedActivitiesInSub / totalActivitiesInSub) * 100) 
      : 0;

    return {
      id: sub.id,
      name: sub.name,
      icon: sub.icon,
      color: sub.color,
      totalTopics,
      completedActivitiesInSub,
      totalActivitiesInSub,
      completionRate
    };
  });

  const handleReset = () => {
    if (window.confirm('Tüm öğrenci çalışma verileri ve kazanılan puanlar sıfırlanacak. Emin misiniz?')) {
      resetAllProgress();
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title">
            <span className="modal-emoji">📊</span>
            <div>
              <h2 className="modal-title">Veli Gelişim & Takip Raporu</h2>
              <p className="modal-sub">5. Sınıf Maarif Modeli Öğrenci Takip Özeti</p>
            </div>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Kapat">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Student Overview Box */}
          <div className="report-summary-box">
            <div className="report-student-intro">
              <div className="report-avatar">🎓</div>
              <div>
                <h3 className="report-name">{studentName}</h3>
                <span className="report-level-title">{levelInfo.title} (Seviye {levelInfo.level})</span>
              </div>
            </div>

            <div className="report-metrics-grid">
              <div className="metric-card">
                <span className="metric-val text-gold">{xp} XP</span>
                <span className="metric-lbl">Toplam Deneyim Puanı</span>
              </div>
              <div className="metric-card">
                <span className="metric-val text-orange">🔥 {streak} Gün</span>
                <span className="metric-lbl">Düzenli Çalışma Serisi</span>
              </div>
              <div className="metric-card">
                <span className="metric-val text-green">{Object.keys(completedActivities).length}</span>
                <span className="metric-lbl">Tamamlanan Etkinlik</span>
              </div>
            </div>
          </div>

          {/* Subject Mastery Breakdown */}
          <div className="report-section-wrap">
            <h4 className="report-section-title">
              <BookOpen size={18} />
              <span>Ders Bazında Tamamlanma & Başarı Oranları</span>
            </h4>

            <div className="report-subjects-table">
              {subjectStats.map(stat => (
                <div key={stat.id} className="subject-stat-row">
                  <div className="stat-subject-name">
                    <span className="stat-sub-icon">{stat.icon}</span>
                    <span>{stat.name}</span>
                  </div>

                  <div className="stat-bar-container">
                    <div className="stat-bar-track">
                      <div 
                        className="stat-bar-fill"
                        style={{ 
                          width: `${Math.max(5, stat.completionRate)}%`,
                          backgroundColor: stat.color 
                        }}
                      />
                    </div>
                  </div>

                  <div className="stat-numbers">
                    <span className="stat-rate-text">%{stat.completionRate}</span>
                    <span className="stat-act-count">
                      ({stat.completedActivitiesInSub}/{stat.totalActivitiesInSub} Etkinlik)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Maarif Modeli Pedagogical Advice */}
          <div className="parent-advice-box">
            <div className="advice-icon">💡</div>
            <div className="advice-text">
              <strong>Veliye Maarif Modeli Önerisi:</strong>
              <p>
                5. sınıf, ilkokuldan ortaokula geçişte kavramların derinleştiği kritik bir yıldır. 
                Günde sadece 10-15 dakika okulda işlenen konunun bilgi kartlarını ve hızlı Doğru/Yanlış 
                turunu çözdürmek, çocuğunuzun hafızasında bilginin kalıcı olmasını sağlar.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button onClick={handleReset} className="btn-danger-outline" title="Gelişim verilerini sıfırla">
            <RotateCcw size={16} />
            <span>Verileri Sıfırla</span>
          </button>
          <button onClick={onClose} className="btn-primary">
            <span>Raporu Kapat</span>
          </button>
        </div>
      </div>
    </div>
  );
};
