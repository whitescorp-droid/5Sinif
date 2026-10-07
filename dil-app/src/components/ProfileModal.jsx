import React, { useState } from 'react';
import { X, Check, Smile } from 'lucide-react';
import { useDil } from '../context/DilContext';
import { playSound } from '../utils/soundEffects';

const AVATAR_OPTIONS = ['🚀', '🦁', '🐼', '🦊', '🦄', '⚽', '🎮', '🌟', '🐱', '🐬', '🏆', '🎯'];

export const ProfileModal = ({ onClose }) => {
  const { studentName, setStudentName, studentAvatar, setStudentAvatar, soundEnabled } = useDil();
  const [nameInput, setNameInput] = useState(studentName);
  const [selectedAvatar, setSelectedAvatar] = useState(studentAvatar);

  const handleSave = () => {
    if (nameInput.trim()) {
      setStudentName(nameInput.trim());
    }
    setStudentAvatar(selectedAvatar);
    playSound('correct', soundEnabled);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="profile-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-row">
            <Smile size={22} className="modal-title-icon" />
            <h3>Öğrenci Profilim</h3>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Avatar Selector */}
          <label className="field-label">Avatarını Seç:</label>
          <div className="avatar-grid-select">
            {AVATAR_OPTIONS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                className={`avatar-option-btn ${selectedAvatar === emoji ? 'active' : ''}`}
                onClick={() => {
                  playSound('click', soundEnabled);
                  setSelectedAvatar(emoji);
                }}
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* Name input */}
          <label className="field-label" style={{ marginTop: '16px' }}>Adın / Takma Adın:</label>
          <input
            type="text"
            className="name-text-input"
            value={nameInput}
            maxLength={20}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Örn: Ayşe, Can, Dil Kaşifi..."
          />
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-save-profile" onClick={handleSave}>
            <Check size={18} /> Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};
