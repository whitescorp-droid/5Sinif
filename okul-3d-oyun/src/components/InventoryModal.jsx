import React from 'react';
import { X, Volume2, Backpack, Sparkles } from 'lucide-react';
import { speakEnglish } from '../utils/speechUtils';

export default function InventoryModal({ inventory = [], onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-card quest-modal-card">
        {/* Header */}
        <div className="modal-header">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-pink-500/25 border border-pink-400/50 flex items-center justify-center shrink-0">
              <Backpack className="w-5 h-5 text-pink-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">School Bag (Okul Çantası)</h3>
              <span className="text-xs text-pink-300 font-bold">Toplanan Eşyalar: {inventory.length} Adet</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} title="Kapat">
            <X className="w-4 h-4 text-gray-300" />
          </button>
        </div>

        {/* Items List */}
        <div className="quest-list-body">
          {inventory.length === 0 ? (
            <div className="text-center py-6">
              <span className="text-3xl block mb-2">🎒</span>
              <p className="text-white font-bold text-sm">Çantan henüz boş!</p>
              <p className="text-xs text-sky-200 mt-1 max-w-xs mx-auto">
                5-A sınıfı ve kütüphaneyi gezerek yerdeki okul eşyalarını (Pencil, Eraser, Ruler vb.) topla.
              </p>
            </div>
          ) : (
            inventory.map((item) => (
              <div key={item.id} className="inventory-item-card">
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2 bg-white/10 rounded-xl shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-white text-sm">{item.name}</h4>
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-sky-500/25 text-sky-200 font-bold border border-sky-400/30">
                        {item.turkish}
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 mt-0.5 leading-snug">{item.description}</p>
                    <span className="text-[11px] text-amber-300 font-mono font-semibold block mt-1">
                      🗣️ Telaffuz: /{item.pronunciation}/
                    </span>
                  </div>
                  <button
                    className="audio-play-btn shrink-0"
                    onClick={() => speakEnglish(item.name)}
                    title="Telaffuzunu Dinle"
                  >
                    <Volume2 className="w-4 h-4 text-sky-300" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
