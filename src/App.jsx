import React, { useState } from 'react';
import { GameProvider } from './context/GameContext';
import { CURRICULUM_DATA } from './data/curriculumData';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { SubjectView } from './components/SubjectView';
import { TopicDetail } from './components/TopicDetail';
import { ParentReportModal } from './components/ParentReportModal';
import { AddContentGuideModal } from './components/AddContentGuideModal';
import { CelebrationModal } from './components/CelebrationModal';
import './App.css';

function MainApp() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'subject' | 'topic'
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [isParentReportOpen, setIsParentReportOpen] = useState(false);
  const [isAddContentOpen, setIsAddContentOpen] = useState(false);

  // Navigation handlers
  const handleGoHome = () => {
    setCurrentView('dashboard');
    setSelectedSubject(null);
    setSelectedUnit(null);
    setSelectedTopic(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setCurrentView('subject');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTopic = (unit, topic) => {
    setSelectedUnit(unit);
    setSelectedTopic(topic);
    setCurrentView('topic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDailyMission = (mission) => {
    const subject = CURRICULUM_DATA.subjects.find(s => s.id === mission.subjectId);
    if (!subject) return;

    const unit = subject.units.find(u => u.id === mission.unitId);
    if (!unit) return;

    const topic = unit.topics.find(t => t.id === mission.topicId);
    if (!topic) return;

    setSelectedSubject(subject);
    setSelectedUnit(unit);
    setSelectedTopic(topic);
    setCurrentView('topic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Header bar */}
      <Header
        onOpenParentReport={() => setIsParentReportOpen(true)}
        onOpenAddContent={() => setIsAddContentOpen(true)}
        onGoHome={handleGoHome}
        currentView={currentView}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {currentView === 'dashboard' && (
          <Dashboard
            onSelectSubject={handleSelectSubject}
            onSelectDailyMission={handleSelectDailyMission}
          />
        )}

        {currentView === 'subject' && selectedSubject && (
          <SubjectView
            subject={selectedSubject}
            onSelectTopic={handleSelectTopic}
            onBack={handleGoHome}
          />
        )}

        {currentView === 'topic' && selectedSubject && selectedUnit && selectedTopic && (
          <TopicDetail
            subject={selectedSubject}
            unit={selectedUnit}
            topic={selectedTopic}
            onBack={() => setCurrentView('subject')}
            onGoHome={handleGoHome}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">🎓 Maarif 5</span>
            <span className="footer-copy">Türkiye Yüzyılı Maarif Modeli 5. Sınıf Akıllı Öğrenme & Pekiştirme</span>
          </div>
          <div className="footer-info">
            Tüm dersler, üniteler ve kazanımlar MEB 5. sınıf müfredatına ve öğrenci çalışma kitaplarına tam uyumludur.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ParentReportModal
        isOpen={isParentReportOpen}
        onClose={() => setIsParentReportOpen(false)}
      />

      <AddContentGuideModal
        isOpen={isAddContentOpen}
        onClose={() => setIsAddContentOpen(false)}
      />

      <CelebrationModal />
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <MainApp />
    </GameProvider>
  );
}
