import React from 'react';
import { X, Volume2, Backpack, Sparkles } from 'lucide-react';
import { speakEnglish } from '../utils/speechUtils';

export default function InventoryModal({ inventory = [], onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-card max-w-lg">
        {/* Header */}
        <div className="modal-header">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center">
              <Backpack className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">School Bag (Okul Çantası)</h3>
              <span className="text-xs text-blue-300">Toplanan Okul Eşyaları ({inventory.length} Eşya)</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Items List */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {inventory.length === 0 ? (
            <div className="text-center py-8">
              <span className="text-4xl block mb-2">🎒</span>
              <p className="text-gray-300 font-medium">Çantan henüz boş!</p>
              <p className="text-xs text-blue-300 mt-1">
                5-A sınıfını ve kütüphaneyi gezerek yerdeki okul eşyalarını (Pencil, Eraser vb.) topla.
              </p>
            </div>
          ) : (
            <div className="grid gap-3">
              {inventory.map((item) => (
                <div key={item.id} className="inventory-item-card">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl p-2 bg-white/10 rounded-xl">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white text-base">{item.name}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-300 border border-blue-400/30">
                          {item.turkish}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 mt-0.5">{item.description}</p>
                      <span className="text-[11px] text-yellow-300 font-mono">
                        Okunuş: /{item.pronunciation}/
                      </span>
                    </div>
                  </div>

                  <button
                    className="audio-play-btn shrink-0"
                    onClick={() => speakEnglish(item.name)}
                    title="Telaffuzunu Dinle"
                  >
                    <Volume2 className="w-5 h-5 text-blue-300" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
