import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { 
  Sparkles, KeyRound, User, Lock, ArrowRight, ShieldCheck, 
  HelpCircle, GraduationCap, Award, BookOpen
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export const LoginScreen = () => {
  const { students, loginStudent, loginTeacher, soundEnabled } = useGame();

  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'teacher'
  
  // Student Login state
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [studentNoInput, setStudentNoInput] = useState('');
  const [pinInput, setPinInput] = useState('');
  const [studentError, setStudentError] = useState('');

  // Teacher Login state
  const [teacherPwInput, setTeacherPwInput] = useState('');
  const [teacherError, setTeacherError] = useState('');

  // When clicking an avatar card
  const handleSelectStudentCard = (student) => {
    setSelectedStudentId(student.id);
    setStudentNoInput(student.studentNo);
    setStudentError('');
    playSound('click', soundEnabled);
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    setStudentError('');

    if (!studentNoInput.trim()) {
      setStudentError('Lütfen okul numaranı gir veya listeden adını seç.');
      return;
    }

    if (!pinInput.trim()) {
      setStudentError('Lütfen 4 haneli PIN şifreni gir.');
      return;
    }

    const result = loginStudent(studentNoInput, pinInput);
    if (!result.success) {
      setStudentError(result.message);
      playSound('wrong', soundEnabled);
    }
  };

  const handleTeacherSubmit = (e) => {
    e.preventDefault();
    setTeacherError('');

    if (!teacherPwInput.trim()) {
      setTeacherError('Lütfen öğretmen şifrenizi giriniz.');
      return;
    }

    const result = loginTeacher(teacherPwInput);
    if (!result.success) {
      setTeacherError(result.message);
      playSound('wrong', soundEnabled);
    }
  };

  return (
    <div className="login-page-container">
      {/* Background glowing orbs */}
      <div className="login-bg-glow glow-1"></div>
      <div className="login-bg-glow glow-2"></div>

      <div className="login-main-card">
        {/* Top Header */}
        <div className="login-hero-header">
          <div className="login-mascot-badge">🎓</div>
          <h1 className="login-app-title">
            5. Sınıf <span className="highlight-text">Maarif Dünyası</span> 🚀
          </h1>
          <p className="login-app-subtitle">
            Türkiye Yüzyılı Maarif Modeli interaktif dersler, sesli tekrarlar ve oyunlarla öğrenme platformu
          </p>

          {/* Role Tabs */}
          <div className="login-role-tabs">
            <button
              onClick={() => { setActiveTab('student'); playSound('click', soundEnabled); }}
              className={`login-role-btn ${activeTab === 'student' ? 'active' : ''}`}
            >
              <span className="role-icon">🎒</span>
              <span>Öğrenci Girişi</span>
            </button>

            <button
              onClick={() => { setActiveTab('teacher'); playSound('click', soundEnabled); }}
              className={`login-role-btn ${activeTab === 'teacher' ? 'active' : ''}`}
            >
              <span className="role-icon">👩‍🏫</span>
              <span>Öğretmen Masası</span>
            </button>
          </div>
        </div>

        {/* TAB 1: STUDENT LOGIN */}
        {activeTab === 'student' && (
          <div className="login-form-body animate-fadeIn">
            {/* Quick Roster Selector */}
            <div className="quick-student-section">
              <label className="input-field-label">
                ✨ Adını veya avatarını seç ya da numaranı yaz:
              </label>
              
              <div className="student-avatar-scroll-grid">
                {students.map((std) => {
                  const isSelected = selectedStudentId === std.id || studentNoInput === std.studentNo;
                  return (
                    <button
                      key={std.id}
                      type="button"
                      onClick={() => handleSelectStudentCard(std)}
                      className={`student-avatar-tile ${isSelected ? 'selected' : ''}`}
                    >
                      <span className="student-tile-avatar">{std.avatar || '🦁'}</span>
                      <span className="student-tile-name">{std.name.split(' ')[0]}</span>
                      <span className="student-tile-no">#{std.studentNo}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleStudentSubmit} className="login-inputs-form">
              <div className="input-group-row">
                <div className="input-field-wrap">
                  <label className="input-field-label">Okul Numarası</label>
                  <div className="input-with-icon">
                    <User size={18} className="field-icon" />
                    <input
                      type="text"
                      value={studentNoInput}
                      onChange={(e) => {
                        setStudentNoInput(e.target.value);
                        setStudentError('');
                      }}
                      placeholder="Örn: 101"
                      className="login-text-input"
                      maxLength={10}
                    />
                  </div>
                </div>

                <div className="input-field-wrap">
                  <label className="input-field-label">4 Haneli PIN Şifren</label>
                  <div className="input-with-icon">
                    <Lock size={18} className="field-icon" />
                    <input
                      type="password"
                      value={pinInput}
                      onChange={(e) => {
                        setPinInput(e.target.value);
                        setStudentError('');
                      }}
                      placeholder="••••"
                      className="login-text-input pin-input"
                      maxLength={6}
                    />
                  </div>
                </div>
              </div>

              {studentError && (
                <div className="login-error-box animate-fadeIn">
                  ⚠️ {studentError}
                </div>
              )}

              <button type="submit" className="login-submit-btn">
                <span>Giriş Yap ve Derse Başla!</span>
                <ArrowRight size={20} />
              </button>

              <div className="login-hint-note">
                💡 <strong>İpucu:</strong> Varsayılan öğrenci PIN şifresi: <code>1234</code>. Şifreni unuttuysan öğretmeninden sıfırlamasını isteyebilirsin.
              </div>
            </form>
          </div>
        )}

        {/* TAB 2: TEACHER LOGIN */}
        {activeTab === 'teacher' && (
          <div className="login-form-body animate-fadeIn">
            <div className="teacher-login-intro">
              <ShieldCheck size={32} className="teacher-shield-icon" />
              <div>
                <h3 className="teacher-intro-title">Öğretmen Yönetim & Sınıf Paneli</h3>
                <p className="teacher-intro-desc">
                  Öğrenci ekleme, PIN şifrelerini sıfırlama, sınıf başarı tablosu ve veli raporlarını yönetebilirsiniz.
                </p>
              </div>
            </div>

            <form onSubmit={handleTeacherSubmit} className="login-inputs-form">
              <div className="input-field-wrap">
                <label className="input-field-label">Öğretmen Giriş Şifresi</label>
                <div className="input-with-icon">
                  <KeyRound size={18} className="field-icon" />
                  <input
                    type="password"
                    value={teacherPwInput}
                    onChange={(e) => {
                      setTeacherPwInput(e.target.value);
                      setTeacherError('');
                    }}
                    placeholder="Şifrenizi giriniz"
                    className="login-text-input"
                  />
                </div>
              </div>

              {teacherError && (
                <div className="login-error-box animate-fadeIn">
                  ⚠️ {teacherError}
                </div>
              )}

              <button type="submit" className="login-submit-btn btn-teacher">
                <span>Öğretmen Masasına Giriş Yap</span>
                <ArrowRight size={20} />
              </button>

              <div className="login-hint-note">
                🔑 <strong>Başlangıç Şifresi:</strong> <code>ogretmen123</code> (Giriş yaptıktan sonra panelden değiştirebilirsiniz).
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
