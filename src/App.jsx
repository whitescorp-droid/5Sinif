import React, { useState, useEffect } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { CURRICULUM_DATA } from './data/curriculumData';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { SubjectView } from './components/SubjectView';
import { TopicDetail } from './components/TopicDetail';
import { ParentReportModal } from './components/ParentReportModal';
import { AddContentGuideModal } from './components/AddContentGuideModal';
import { CelebrationModal } from './components/CelebrationModal';
import { LoginScreen } from './components/LoginScreen';
import { TeacherDashboard } from './components/TeacherDashboard';
import './App.css';

function MainApp() {
  const { currentUser } = useGame();
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'subject' | 'topic' | 'teacher'
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [isParentReportOpen, setIsParentReportOpen] = useState(false);
  const [isAddContentOpen, setIsAddContentOpen] = useState(false);

  // Sync default view on user login
  useEffect(() => {
    if (currentUser?.role === 'teacher') {
      setCurrentView('teacher');
    } else {
      setCurrentView('dashboard');
    }
  }, [currentUser?.role, currentUser?.id]);

  // If user is not authenticated, render LoginScreen
  if (!currentUser) {
    return <LoginScreen />;
  }

  // Navigation handlers
  const handleGoHome = () => {
    if (currentUser.role === 'teacher') {
      setCurrentView('teacher');
    } else {
      setCurrentView('dashboard');
    }
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
        onOpenTeacherDashboard={() => setCurrentView('teacher')}
        currentView={currentView}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {currentView === 'teacher' && (
          <TeacherDashboard onPreviewStudentView={() => setCurrentView('dashboard')} />
        )}

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
