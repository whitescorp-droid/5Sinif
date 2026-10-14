import React from 'react';
import { X, CheckCircle2, Target, Sparkles, MapPin, Award } from 'lucide-react';

export default function QuestsModal({ quests = [], onClose }) {
  const completedCount = quests.filter(q => q.completed).length;

  return (
    <div className="modal-backdrop">
      <div className="modal-card quest-modal-card">
        {/* Header */}
        <div className="modal-header">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/25 border border-blue-400/50 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                School Life Görevleri
              </h3>
              <span className="text-xs text-sky-300 font-bold">
                {completedCount} / {quests.length} Görev Tamamlandı ⭐
              </span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} title="Kapat">
            <X className="w-4 h-4 text-gray-300" />
          </button>
        </div>

        {/* Quest List */}
        <div className="quest-list-body">
          {quests.map((quest, idx) => (
            <div
              key={quest.id}
              className={`quest-item-card ${quest.completed ? 'completed' : 'active'}`}
            >
              <div className="flex items-start gap-2.5">
                <div className="quest-status-icon shrink-0 mt-0.5">
                  {quest.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <div className="quest-num-badge">{idx + 1}</div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className={`quest-card-title ${quest.completed ? 'completed' : ''}`}>
                    {quest.title}
                  </h4>
                  <p className="quest-card-desc">{quest.description}</p>

                  <div className="quest-meta-row">
                    <span className="location-pill">
                      <MapPin className="w-3 h-3 inline mr-1 text-sky-400" />
                      {quest.targetZone}
                    </span>
                    <span className="stars-pill">
                      ⭐ +{quest.stars} XP
                    </span>
                    {quest.completed && (
                      <span className="status-done-pill">
                        ✓ Başarıldı
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
