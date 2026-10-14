import React from 'react';
import { X, Volume2, Backpack, Sparkles } from 'lucide-react';
import { speakEnglish } from '../utils/speechUtils';

export default function InventoryModal({ inventory = [], onClose }) {
  return (
    <div className="modal-backdrop">
      <div 
        className="modal-card"
        style={{
          width: '92%',
          maxWidth: '440px',
          background: '#0f172a',
          border: '2px solid #ec4899',
          borderRadius: '18px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 25px rgba(236, 72, 153, 0.3)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 18px',
            background: 'linear-gradient(90deg, #831843, #0f172a)',
            borderBottom: '2px solid rgba(236, 72, 153, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#db2777',
              border: '1.5px solid #f472b6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Backpack style={{ width: '20px', height: '20px', color: '#ffffff' }} />
            </div>
            <div>
              <h3 style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 800,
                margin: 0,
                lineHeight: 1.2
              }}>
                School Bag (Okul Çantası)
              </h3>
              <span style={{
                color: '#f472b6',
                fontSize: '12px',
                fontWeight: 700,
                display: 'block',
                marginTop: '2px'
              }}>
                Toplanan Eşyalar: {inventory.length} Adet ⭐
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            title="Kapat"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff'
            }}
          >
            <X style={{ width: '18px', height: '18px', color: '#ffffff' }} />
          </button>
        </div>

        {/* Items List */}
        <div style={{
          padding: '14px',
          maxHeight: '68vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {inventory.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '24px 12px' }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>🎒</span>
              <p style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px', margin: 0 }}>Çantan henüz boş!</p>
              <p style={{ color: '#93c5fd', fontSize: '12px', marginTop: '6px', lineHeight: 1.4 }}>
                5-A sınıfı ve kütüphaneyi gezerek yerdeki okul eşyalarını (Pencil, Eraser, Ruler vb.) topla.
              </p>
            </div>
          ) : (
            inventory.map((item) => (
              <div 
                key={item.id} 
                style={{
                  background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                  border: '2px solid #ec4899',
                  borderRadius: '14px',
                  padding: '12px 14px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontSize: '24px',
                    padding: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h4 style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px', margin: 0 }}>
                        {item.name}
                      </h4>
                      <span style={{
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'rgba(236, 72, 153, 0.25)',
                        color: '#fbcfe8',
                        fontWeight: 700,
                        border: '1px solid #f472b6'
                      }}>
                        {item.turkish}
                      </span>
                    </div>
                    <p style={{ color: '#f1f5f9', fontSize: '12px', margin: '4px 0 0 0', lineHeight: 1.35 }}>
                      {item.description}
                    </p>
                    <span style={{
                      color: '#fef08a',
                      fontSize: '11px',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      display: 'block',
                      marginTop: '4px'
                    }}>
                      🗣️ /{item.pronunciation}/
                    </span>
                  </div>
                  <button
                    onClick={() => speakEnglish(item.name)}
                    title="Telaffuzunu Dinle"
                    style={{
                      background: 'rgba(236, 72, 153, 0.2)',
                      border: '1px solid #ec4899',
                      borderRadius: '8px',
                      width: '34px',
                      height: '34px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0
                    }}
                  >
                    <Volume2 style={{ width: '18px', height: '18px', color: '#f472b6' }} />
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
