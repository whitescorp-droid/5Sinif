import React, { useState } from 'react';
import { DilProvider, useDil } from './context/DilContext';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ThemesView } from './components/ThemesView';
import { TopicDetailView } from './components/TopicDetailView';
import { VocabularyView } from './components/VocabularyView';
import { BadgesView } from './components/BadgesView';
import { ProfileModal } from './components/ProfileModal';
import { UpdateModal } from './components/UpdateModal';
import './App.css';

function MainDilApp() {
  const { soundEnabled } = useDil();
  const [activeTab, setActiveTab] = useState('themes'); // 'themes' | 'vocabulary' | 'badges'
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const handleSelectTopic = (unit, topic) => {
    setSelectedUnit(unit);
    setSelectedTopic(topic);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToThemes = () => {
    setSelectedTopic(null);
    setSelectedUnit(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // If navigating to another tab, exit topic view
    if (selectedTopic) {
      setSelectedTopic(null);
      setSelectedUnit(null);
    }
  };

  return (
    <div className="mobile-app-wrapper">
      <div className="mobile-phone-frame">
        {/* Sticky Header */}
        <Header
          onOpenProfile={() => setIsProfileOpen(true)}
          onOpenUpdate={() => setIsUpdateOpen(true)}
        />

        {/* Content Area */}
        <main className="mobile-main-content">
          {selectedTopic && selectedUnit ? (
            <TopicDetailView
              unit={selectedUnit}
              topic={selectedTopic}
              onBack={handleBackToThemes}
            />
          ) : (
            <>
              {activeTab === 'themes' && (
                <ThemesView onSelectTopic={handleSelectTopic} />
              )}
              {activeTab === 'vocabulary' && <VocabularyView />}
              {activeTab === 'badges' && <BadgesView />}
            </>
          )}
        </main>

        {/* Sticky Bottom Navigation */}
        <BottomNav activeTab={activeTab} onSelectTab={handleTabChange} />

        {/* Profile Modal */}
        {isProfileOpen && (
          <ProfileModal
            onClose={() => setIsProfileOpen(false)}
            onOpenUpdate={() => setIsUpdateOpen(true)}
          />
        )}

        {/* Update Modal */}
        {isUpdateOpen && (
          <UpdateModal
            onClose={() => setIsUpdateOpen(false)}
            soundEnabled={soundEnabled}
          />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <DilProvider>
      <MainDilApp />
    </DilProvider>
  );
}
