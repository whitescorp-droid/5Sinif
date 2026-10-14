import React from 'react';
import { X, CheckCircle2, Circle, Sparkles, MapPin } from 'lucide-react';

export default function QuestsModal({ quests = [], onClose }) {
  const completedCount = quests.filter(q => q.completed).length;

  return (
    <div className="modal-backdrop">
      <div className="modal-card max-w-lg">
        {/* Header */}
        <div className="modal-header">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Theme 1: School Life Görevleri</h3>
              <span className="text-xs text-blue-300">
                {completedCount} / {quests.length} Görev Tamamlandı
              </span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Quest List */}
        <div className="p-6 max-h-96 overflow-y-auto grid gap-3">
          {quests.map((quest) => (
            <div
              key={quest.id}
              className={`quest-item-card ${quest.completed ? 'completed' : 'active'}`}
            >
              <div className="flex items-start gap-3">
                {quest.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className={`font-bold text-base ${quest.completed ? 'text-emerald-300 line-through' : 'text-white'}`}>
                    {quest.title}
                  </h4>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">{quest.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="location-pill">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {quest.targetZone}
                    </span>
                    <span className="stars-pill">
                      ⭐ +{quest.stars} Yıldız
                    </span>
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
