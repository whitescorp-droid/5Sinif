import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { 
  Users, UserPlus, Award, Flame, KeyRound, Trash2, 
  RefreshCw, CheckCircle2, Trophy, ArrowRight, Eye, LogOut, Sparkles
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

const AVATAR_OPTIONS = ['🦁', '🚀', '🐼', '🌟', '🦊', '⚡', '🎨', '⚽', '🐬', '🦉'];

export const TeacherDashboard = ({ onPreviewStudentView }) => {
  const { 
    students, 
    addStudent, 
    deleteStudent, 
    resetStudentPin, 
    logout, 
    soundEnabled 
  } = useGame();

  // Add student form state
  const [name, setName] = useState('');
  const [studentNo, setStudentNo] = useState('');
  const [pin, setPin] = useState('1234');
  const [avatar, setAvatar] = useState('🦁');
  const [formMsg, setFormMsg] = useState({ text: '', type: '' });

  // Reset PIN modal / inline state
  const [editingPinId, setEditingPinId] = useState(null);
  const [newPinValue, setNewPinValue] = useState('1234');

  // Stats calculation
  const totalStudents = students.length;
  const totalXp = students.reduce((acc, s) => acc + (s.xp || 0), 0);
  const avgXp = totalStudents > 0 ? Math.round(totalXp / totalStudents) : 0;
  const totalCompletedActs = students.reduce((acc, s) => acc + (s.stats?.completedActivitiesCount || 0), 0);

  // Leaderboard sorted by XP
  const leaderboard = [...students].sort((a, b) => (b.xp || 0) - (a.xp || 0));

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setFormMsg({ text: '', type: '' });

    if (!name.trim() || !studentNo.trim()) {
      setFormMsg({ text: 'Lütfen isim ve okul numarasını eksiksiz giriniz.', type: 'error' });
      return;
    }

    const result = addStudent({
      name: name.trim(),
      studentNo: studentNo.trim(),
      pin: pin.trim() || '1234',
      avatar
    });

    if (result.success) {
      setFormMsg({ text: `"${name}" başarıyla sınıfa eklendi!`, type: 'success' });
      setName('');
      setStudentNo('');
      setPin('1234');
      playSound('correct', soundEnabled);
    } else {
      setFormMsg({ text: result.message, type: 'error' });
      playSound('wrong', soundEnabled);
    }
  };

  const handleDelete = (id, studentName) => {
    if (window.confirm(`"${studentName}" adlı öğrenciyi sınıftan silmek istediğinize emin misiniz?`)) {
      deleteStudent(id);
      playSound('click', soundEnabled);
    }
  };

  const handleResetPinSubmit = (id) => {
    if (!newPinValue.trim()) return;
    resetStudentPin(id, newPinValue.trim());
    setEditingPinId(null);
    setNewPinValue('1234');
  };

  return (
    <div className="teacher-dashboard-page">
      {/* Teacher Top Navigation Bar */}
      <div className="teacher-top-bar">
        <div className="teacher-brand-info">
          <div className="teacher-avatar-badge">👩‍🏫</div>
          <div>
            <h1 className="teacher-page-title">Öğretmen Masası & Sınıf Yönetimi</h1>
            <p className="teacher-page-sub">5. Sınıf Maarif Modeli Öğrenci Takip Sistemi</p>
          </div>
        </div>

        <div className="teacher-top-actions">
          <button
            onClick={onPreviewStudentView}
            className="btn-preview-student"
            title="Öğrenci ekranını ve dersleri incele"
          >
            <Eye size={18} />
            <span>Platformu İncele (Öğrenci Görünümü)</span>
          </button>

          <button
            onClick={logout}
            className="btn-teacher-logout"
            title="Öğretmen oturumunu sonlandır"
          >
            <LogOut size={18} />
            <span>Çıkış Yap</span>
          </button>
        </div>
      </div>

      {/* Overview Stats Cards */}
      <div className="teacher-metrics-grid">
        <div className="teacher-metric-card">
          <div className="metric-icon-box bg-blue">
            <Users size={24} />
          </div>
          <div>
            <div className="metric-number">{totalStudents}</div>
            <div className="metric-label">Kayıtlı Öğrenci</div>
          </div>
        </div>

        <div className="teacher-metric-card">
          <div className="metric-icon-box bg-gold">
            <Trophy size={24} />
          </div>
          <div>
            <div className="metric-number">{totalXp.toLocaleString()} ⭐</div>
            <div className="metric-label">Sınıf Toplam XP</div>
          </div>
        </div>

        <div className="teacher-metric-card">
          <div className="metric-icon-box bg-purple">
            <Award size={24} />
          </div>
          <div>
            <div className="metric-number">{avgXp} XP</div>
            <div className="metric-label">Öğrenci Başı Ortalama</div>
          </div>
        </div>

        <div className="teacher-metric-card">
          <div className="metric-icon-box bg-green">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <div className="metric-number">{totalCompletedActs}</div>
            <div className="metric-label">Çözülen Etkinlik Sayısı</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Add Student Form + Class List */}
      <div className="teacher-main-grid">
        {/* LEFT: Add Student Form */}
        <div className="teacher-card add-student-card">
          <div className="teacher-card-header">
            <UserPlus size={20} className="text-primary" />
            <h3 className="teacher-card-title">Yeni Öğrenci Ekle</h3>
          </div>

          <form onSubmit={handleAddSubmit} className="add-student-form">
            <div className="form-group">
              <label className="form-label">Öğrencinin Adı Soyadı</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Örn: Kerem Kaya"
                className="form-input"
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Okul Numarası</label>
                <input
                  type="text"
                  value={studentNo}
                  onChange={(e) => setStudentNo(e.target.value)}
                  placeholder="Örn: 105"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Başlangıç PIN Şifresi</label>
                <input
                  type="text"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="1234"
                  className="form-input"
                  maxLength={6}
                />
              </div>
            </div>

            {/* Avatar Selector */}
            <div className="form-group">
              <label className="form-label">Öğrenci Avatarı</label>
              <div className="avatar-pick-row">
                {AVATAR_OPTIONS.map((av, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setAvatar(av)}
                    className={`avatar-pick-btn ${avatar === av ? 'selected' : ''}`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            {formMsg.text && (
              <div className={`form-feedback-pill ${formMsg.type} animate-fadeIn`}>
                {formMsg.type === 'success' ? '✅' : '⚠️'} {formMsg.text}
              </div>
            )}

            <button type="submit" className="btn-add-student-submit">
              <UserPlus size={18} />
              <span>Sınıfa Kaydet</span>
            </button>
          </form>
        </div>

        {/* RIGHT: Student Leaderboard / Podium */}
        <div className="teacher-card leaderboard-card">
          <div className="teacher-card-header">
            <Trophy size={20} className="text-gold" />
            <h3 className="teacher-card-title">Haftalık Sınıf Liderlik Tablosu</h3>
          </div>

          <div className="leaderboard-list">
            {leaderboard.slice(0, 5).map((std, idx) => {
              const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`;
              return (
                <div key={std.id} className={`leaderboard-item rank-${idx + 1}`}>
                  <div className="leaderboard-rank">{medal}</div>
                  <div className="leaderboard-avatar">{std.avatar || '🦁'}</div>
                  <div className="leaderboard-info">
                    <div className="leaderboard-name">{std.name}</div>
                    <div className="leaderboard-sub">No: #{std.studentNo} • {std.streak || 1} Gün Seri 🔥</div>
                  </div>
                  <div className="leaderboard-xp">{std.xp} XP ⭐</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FULL WIDTH: Comprehensive Student Roster Table */}
      <div className="teacher-card roster-card">
        <div className="teacher-card-header flex-between">
          <div className="flex-row items-center gap-2">
            <Users size={20} className="text-primary" />
            <h3 className="teacher-card-title">Tüm Sınıf Listesi ({students.length} Öğrenci)</h3>
          </div>
          <span className="roster-badge-info">Şifreler ve ilerleme durumları canlı güncellenir</span>
        </div>

        <div className="roster-table-wrapper">
          <table className="roster-table">
            <thead>
              <tr>
                <th>Öğrenci</th>
                <th>Okul No</th>
                <th>4 Haneli PIN</th>
                <th>Kazanılan XP</th>
                <th>Çalışma Serisi</th>
                <th>Tamamlanan Etkinlik</th>
                <th className="text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {students.map((std) => {
                const isEditingThisPin = editingPinId === std.id;
                return (
                  <tr key={std.id}>
                    <td>
                      <div className="student-table-user">
                        <span className="table-avatar">{std.avatar || '🦁'}</span>
                        <span className="table-name">{std.name}</span>
                      </div>
                    </td>

                    <td>
                      <span className="badge-school-no">#{std.studentNo}</span>
                    </td>

                    <td>
                      {isEditingThisPin ? (
                        <div className="inline-pin-edit">
                          <input
                            type="text"
                            value={newPinValue}
                            onChange={(e) => setNewPinValue(e.target.value)}
                            maxLength={6}
                            className="pin-edit-input"
                            autoFocus
                          />
                          <button
                            onClick={() => handleResetPinSubmit(std.id)}
                            className="btn-pin-save"
                            title="Kaydet"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => setEditingPinId(null)}
                            className="btn-pin-cancel"
                            title="İptal"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <div className="pin-display-cell">
                          <code>{std.pin || '1234'}</code>
                          <button
                            onClick={() => {
                              setEditingPinId(std.id);
                              setNewPinValue(std.pin || '1234');
                            }}
                            className="btn-edit-pin"
                            title="PIN şifresini değiştir veya sıfırla"
                          >
                            <KeyRound size={14} />
                            <span>Sıfırla</span>
                          </button>
                        </div>
                      )}
                    </td>

                    <td>
                      <span className="table-xp-pill">
                        <strong>{std.xp || 0}</strong> XP
                      </span>
                    </td>

                    <td>
                      <span className="table-streak-pill">
                        <Flame size={15} />
                        <span>{std.streak || 1} Gün</span>
                      </span>
                    </td>

                    <td>
                      <span className="table-acts-count">
                        {std.stats?.completedActivitiesCount || Object.keys(std.completedActivities || {}).length} Etkinlik
                      </span>
                    </td>

                    <td className="text-right">
                      <button
                        onClick={() => handleDelete(std.id, std.name)}
                        className="btn-delete-student"
                        title="Öğrenciyi sınıftan sil"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
