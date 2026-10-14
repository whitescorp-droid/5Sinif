import React from 'react';
import { X, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export default function QuestsModal({ quests = [], onClose }) {
  const completedCount = quests.filter(q => q.completed).length;

  return (
    <div className="modal-backdrop">
      <div 
        className="modal-card"
        style={{
          width: '92%',
          maxWidth: '440px',
          background: '#0f172a',
          border: '2px solid #38bdf8',
          borderRadius: '18px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 25px rgba(14, 165, 233, 0.3)',
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
            background: 'linear-gradient(90deg, #1e3a8a, #0f172a)',
            borderBottom: '2px solid rgba(56, 189, 248, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#0284c7',
              border: '1.5px solid #38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Sparkles style={{ width: '20px', height: '20px', color: '#fef08a' }} />
            </div>
            <div>
              <h3 style={{
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 800,
                margin: 0,
                lineHeight: 1.2
              }}>
                School Life Görevleri
              </h3>
              <span style={{
                color: '#7dd3fc',
                fontSize: '12px',
                fontWeight: 700,
                display: 'block',
                marginTop: '2px'
              }}>
                {completedCount} / {quests.length} Görev Tamamlandı ⭐
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

        {/* Quest List */}
        <div style={{
          padding: '14px',
          maxHeight: '68vh',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          {quests.map((quest, idx) => {
            const isDone = quest.completed;
            return (
              <div
                key={quest.id}
                style={{
                  background: isDone 
                    ? 'linear-gradient(135deg, #064e3b, #022c22)' 
                    : 'linear-gradient(135deg, #1e293b, #0f172a)',
                  border: isDone ? '2px solid #10b981' : '2px solid #38bdf8',
                  borderRadius: '14px',
                  padding: '12px 14px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  {/* Status / Number Badge */}
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: isDone ? '#10b981' : '#0284c7',
                    color: '#ffffff',
                    fontWeight: 900,
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                    marginTop: '2px'
                  }}>
                    {isDone ? <CheckCircle2 style={{ width: '18px', height: '18px', color: '#ffffff' }} /> : (idx + 1)}
                  </div>

                  {/* Text details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{
                      color: isDone ? '#a7f3d0' : '#ffffff',
                      fontSize: '15px',
                      fontWeight: 800,
                      margin: 0,
                      lineHeight: 1.35,
                      textDecoration: isDone ? 'line-through' : 'none'
                    }}>
                      {quest.title}
                    </h4>

                    <p style={{
                      color: isDone ? '#d1fae5' : '#f8fafc',
                      fontSize: '13px',
                      fontWeight: 500,
                      margin: '6px 0 8px 0',
                      lineHeight: 1.45
                    }}>
                      {quest.description}
                    </p>

                    {/* Metadata tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                      <span style={{
                        background: 'rgba(14, 165, 233, 0.25)',
                        border: '1.5px solid #38bdf8',
                        color: '#bae6fd',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <MapPin style={{ width: '12px', height: '12px', color: '#38bdf8' }} />
                        {quest.targetZone}
                      </span>

                      <span style={{
                        background: 'rgba(234, 179, 8, 0.25)',
                        border: '1.5px solid #facc15',
                        color: '#fef08a',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '2px 8px',
                        borderRadius: '9999px'
                      }}>
                        ⭐ +{quest.stars} XP
                      </span>

                      {isDone && (
                        <span style={{
                          background: '#059669',
                          color: '#ffffff',
                          fontSize: '11px',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '9999px'
                        }}>
                          ✓ TAMAMLANDI
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
