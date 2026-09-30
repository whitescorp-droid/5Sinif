import React, { useState } from 'react';
import { Lightbulb, RotateCcw, Award, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';

const OBJECTS = [
  { id: 'top', name: 'Opak Top', height: 40, icon: '⚽' },
  { id: 'kutu', name: 'Karton Kutu', height: 50, icon: '📦' },
  { id: 'elma', name: 'Elma', height: 35, icon: '🍎' },
];

export const LightShadowLab = ({ topic, onFinish }) => {
  const { soundEnabled, addXp } = useGame();
  const [mode, setMode] = useState('lab'); // 'lab' or 'sun'
  
  // Lab mode variables
  const [lightX, setLightX] = useState(60);
  const [objectX, setObjectX] = useState(250);
  const screenX = 500;

  const [selectedObjectId, setSelectedObjectId] = useState('top');
  const currentObject = OBJECTS.find(o => o.id === selectedObjectId);

  // Sun mode (hour of day: 8 to 18)
  const [timeHour, setTimeHour] = useState(12);

  // Challenge mode
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [challengeTargetHeight, setChallengeTargetHeight] = useState(90);
  const [challengeScore, setChallengeScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [labCompleted, setLabCompleted] = useState(false);

  // Magnification
  const d1 = Math.max(30, objectX - lightX);
  const d2 = screenX - lightX;
  const magnification = d2 / d1;
  const shadowHeight = Math.min(220, Math.round(currentObject.height * magnification));

  // Sun mode angle
  const sunAngleDeg = 20 + ((timeHour - 8) / 10) * 140;
  const rad = (Math.min(160, Math.max(20, sunAngleDeg)) * Math.PI) / 180;
  const sunShadowLength = Math.max(10, Math.min(250, Math.round(75 / Math.tan(rad > Math.PI/2 ? Math.PI - rad : rad))));
  const sunShadowDir = sunAngleDeg < 90 ? 'right' : 'left';

  const handleStartChallenge = () => {
    setIsChallengeMode(true);
    setChallengeScore(0);
    setMode('lab');
    generateNextChallenge();
    playSound('click', soundEnabled);
  };

  const generateNextChallenge = () => {
    const targets = [70, 85, 110, 130, 160];
    const target = targets[Math.floor(Math.random() * targets.length)];
    setChallengeTargetHeight(target);
    setFeedback(null);
  };

  const checkChallenge = () => {
    const diff = Math.abs(shadowHeight - challengeTargetHeight);
    if (diff <= 8) {
      const nextScore = challengeScore + 1;
      setChallengeScore(nextScore);
      setFeedback({
        type: 'success',
        text: `🎉 Tebrikler! Hedef ${challengeTargetHeight} cm idi, tam ${shadowHeight} cm yakaladın!`
      });
      addXp?.(15);
      playSound('correct', soundEnabled);

      if (nextScore >= 3 && !labCompleted) {
        setLabCompleted(true);
        addXp?.(50);
        playSound('fanfare', soundEnabled);
      } else {
        setTimeout(() => {
          generateNextChallenge();
        }, 1500);
      }
    } else {
      setFeedback({
        type: 'error',
        text: shadowHeight < challengeTargetHeight 
          ? `Gölge boyu (${shadowHeight} cm) küçük kaldı! Feneri cisme yaklaştır veya cismi perdeye yaklaştır.`
          : `Gölge boyu (${shadowHeight} cm) çok büyük! Feneri cisimden uzaklaştır.`
      });
      playSound('wrong', soundEnabled);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', fontFamily: 'inherit' }}>
      {/* 1. Header */}
      <div style={{
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fef9c3 100%)',
        border: '1px solid #fcd34d',
        borderRadius: '16px',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '0 4px 15px rgba(245, 158, 11, 0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}>
            🔦
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#b45309', margin: '0 0 4px 0' }}>
              Işık & Tam Gölge Laboratuvarı
            </h2>
            <p style={{ fontSize: '13px', color: '#92400e', margin: 0, lineHeight: 1.4 }}>
              Işık kaynağı, opak engel ve perde arasındaki mesafeleri değiştirerek gölge boyunu keşfet!
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Sub-tabs */}
          <div style={{ display: 'flex', background: '#ffffff', padding: '4px', borderRadius: '100px', border: '1px solid #e2e8f0', gap: '4px' }}>
            <button
              onClick={() => { setMode('lab'); playSound('click', soundEnabled); }}
              style={{
                padding: '6px 14px',
                borderRadius: '100px',
                border: 'none',
                fontSize: '12px',
                fontWeight: '800',
                cursor: 'pointer',
                background: mode === 'lab' ? '#d97706' : 'transparent',
                color: mode === 'lab' ? '#ffffff' : '#64748b'
              }}
            >
              Fener & Perde Labı
            </button>
            <button
              onClick={() => { setMode('sun'); playSound('click', soundEnabled); }}
              style={{
                padding: '6px 14px',
                borderRadius: '100px',
                border: 'none',
                fontSize: '12px',
                fontWeight: '800',
                cursor: 'pointer',
                background: mode === 'sun' ? '#d97706' : 'transparent',
                color: mode === 'sun' ? '#ffffff' : '#64748b'
              }}
            >
              Güneş & Gün İçinde Gölge
            </button>
          </div>

          {!isChallengeMode && mode === 'lab' && (
            <button
              onClick={handleStartChallenge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 16px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                border: 'none',
                borderRadius: '100px',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              <Award size={16} />
              Görev Modu
            </button>
          )}
        </div>
      </div>

      {/* 2. Challenge Active Banner */}
      {isChallengeMode && mode === 'lab' && (
        <div style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '16px 20px',
          border: '1px solid #10b981',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <div style={{ fontSize: '11px', color: '#a7f3d0', fontWeight: '800', textTransform: 'uppercase' }}>
              Gölge Boyu Görevi ({challengeScore}/3)
            </div>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#fde047', marginTop: '2px' }}>
              Hedef Gölge Boyu: <span style={{ fontSize: '20px', color: '#38bdf8' }}>{challengeTargetHeight} cm</span>
            </div>
            <div style={{ fontSize: '12px', color: '#d1fae5', marginTop: '4px' }}>
              Şu anki Gölge: <strong style={{ color: '#ffffff' }}>{shadowHeight} cm</strong>
            </div>
          </div>

          <button
            onClick={checkChallenge}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: '#22c55e',
              border: 'none',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '800',
              cursor: 'pointer'
            }}
          >
            <CheckCircle2 size={18} />
            Ölçümü Onayla
          </button>
        </div>
      )}

      {/* 3. Feedback Banner */}
      {feedback && (
        <div style={{
          padding: '12px 16px',
          borderRadius: '12px',
          fontSize: '13px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: feedback.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: feedback.type === 'success' ? '#15803d' : '#b91c1c',
          border: `1px solid ${feedback.type === 'success' ? '#86efac' : '#fca5a5'}`
        }}>
          {feedback.type === 'success' ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
          <span>{feedback.text}</span>
        </div>
      )}

      {/* 4. MODE 1: Lab Mode (Flashlight, Object, Screen) */}
      {mode === 'lab' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Canvas Board */}
          <div style={{
            background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)',
            borderRadius: '16px',
            border: '1px solid #334155',
            padding: '20px',
            height: '320px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Ground Line */}
            <div style={{ position: 'absolute', bottom: '40px', left: '20px', right: '20px', height: '2px', background: '#475569' }}></div>

            {/* SVG Rays */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 600 320">
              <line
                x1={lightX + 35}
                y1={255}
                x2={screenX}
                y2={280 - shadowHeight}
                stroke="#fbbf24"
                strokeWidth="2"
                strokeDasharray="5 3"
                opacity="0.8"
              />
              <line
                x1={lightX + 35}
                y1={255}
                x2={screenX}
                y2={280}
                stroke="#fbbf24"
                strokeWidth="2"
                strokeDasharray="5 3"
                opacity="0.8"
              />
              <polygon
                points={`${lightX + 35},255 ${screenX},${280 - shadowHeight} ${screenX},280`}
                fill="#f59e0b"
                opacity="0.15"
              />
            </svg>

            {/* 1. Flashlight */}
            <div style={{ position: 'absolute', bottom: '40px', left: `${lightX}px`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: '#fbbf24', fontWeight: '800', marginBottom: '2px' }}>Fener</span>
              <div style={{ fontSize: '26px' }}>🔦</div>
            </div>

            {/* 2. Obstacle */}
            <div style={{ position: 'absolute', bottom: '40px', left: `${objectX}px`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: '#38bdf8', fontWeight: '800', marginBottom: '2px' }}>Opak Cisim</span>
              <div style={{ fontSize: '30px' }}>{currentObject.icon}</div>
            </div>

            {/* 3. Screen */}
            <div style={{ position: 'absolute', bottom: '40px', left: `${screenX}px`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '10px', color: '#cbd5e1', fontWeight: '800', marginBottom: '2px' }}>Perde</span>
              <div style={{ width: '14px', height: '220px', background: '#f8fafc', border: '1px solid #94a3b8', borderRadius: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: `${shadowHeight}px`, background: '#090d16', transition: 'height 0.15s ease' }}></div>
              </div>
            </div>

            {/* Status Readout in canvas */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '10px 16px',
              textAlign: 'right'
            }}>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>Perdedeki Tam Gölge Boyu</div>
              <div style={{ fontSize: '22px', fontWeight: '900', color: '#fbbf24', fontFamily: 'monospace' }}>{shadowHeight} cm</div>
              <div style={{ fontSize: '10px', color: '#64748b' }}>Fener-Cisim: {objectX - lightX}px | Cisim-Perde: {screenX - objectX}px</div>
            </div>
          </div>

          {/* Sliders Controls Panel */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            padding: '16px 20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '800', color: '#b45309', marginBottom: '4px' }}>
                <span>Fener Pozisyonu:</span>
                <span style={{ fontFamily: 'monospace' }}>{lightX} px</span>
              </div>
              <input
                type="range"
                min="20"
                max={objectX - 45}
                value={lightX}
                onChange={(e) => setLightX(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#d97706', cursor: 'pointer' }}
              />
              <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px' }}>Fenere yaklaştıkça gölge büyür!</div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '800', color: '#0369a1', marginBottom: '4px' }}>
                <span>Cisim Pozisyonu:</span>
                <span style={{ fontFamily: 'monospace' }}>{objectX} px</span>
              </div>
              <input
                type="range"
                min={lightX + 45}
                max={screenX - 35}
                value={objectX}
                onChange={(e) => setObjectX(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0284c7', cursor: 'pointer' }}
              />
              <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px' }}>Perdeye yaklaştıkça gölge küçülür!</div>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#334155', marginBottom: '6px' }}>Opak Nesne:</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {OBJECTS.map(obj => (
                  <button
                    key={obj.id}
                    onClick={() => { setSelectedObjectId(obj.id); playSound('click', soundEnabled); }}
                    style={{
                      flex: 1,
                      padding: '6px 4px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: '800',
                      cursor: 'pointer',
                      background: selectedObjectId === obj.id ? '#0284c7' : '#f8fafc',
                      color: selectedObjectId === obj.id ? '#ffffff' : '#475569',
                      border: selectedObjectId === obj.id ? '1px solid #0369a1' : '1px solid #cbd5e1'
                    }}
                  >
                    {obj.icon} {obj.name.split(' ')[1] || obj.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* MODE 2: Sun & Daily Shadow */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            background: timeHour === 12
              ? 'linear-gradient(to bottom, #1e3a8a, #0f172a)'
              : timeHour <= 9 || timeHour >= 16
              ? 'linear-gradient(to bottom, #7c2d12, #0f172a)'
              : 'linear-gradient(to bottom, #1e293b, #0f172a)',
            borderRadius: '16px',
            border: '1px solid #334155',
            padding: '24px',
            height: '300px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            {/* Sun */}
            <div style={{
              position: 'absolute',
              left: `${20 + ((timeHour - 8) / 10) * 65}%`,
              top: `${140 - Math.sin(((timeHour - 8) / 10) * Math.PI) * 95}px`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'all 0.25s ease'
            }}>
              <div style={{ fontSize: '38px', filter: 'drop-shadow(0 0 15px #fde047)' }}>☀️</div>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#fde047' }}>Saat {timeHour}:00</span>
            </div>

            {/* Tree and shadow */}
            <div style={{ position: 'relative', marginTop: 'auto', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: '#059669' }}></div>
              <div style={{ fontSize: '54px', zIndex: 5 }}>🌳</div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                height: '8px',
                background: 'rgba(0,0,0,0.65)',
                borderRadius: '100px',
                width: `${sunShadowLength}px`,
                left: sunShadowDir === 'right' ? '50%' : `calc(50% - ${sunShadowLength}px)`,
                transition: 'all 0.25s ease'
              }}></div>
            </div>

            {/* Explanation box */}
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid #334155',
              borderRadius: '12px',
              padding: '10px 14px',
              color: '#f8fafc',
              fontSize: '12px'
            }}>
              <div style={{ fontWeight: '800', color: '#fde047' }}>
                {timeHour === 12
                  ? '☀️ Öğle Vakti: Güneş tam tepede, gölge EN KISA!'
                  : timeHour < 12
                  ? '🌅 Sabah Vakti: Güneş eğik geliyor, gölge batıya doğru UZUN!'
                  : '🌇 Akşam Vakti: Güneş batarken eğik geliyor, gölge doğuya doğru UZUN!'}
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                Gölge Boyu: ~{sunShadowLength} cm ({sunShadowDir === 'right' ? 'Doğuya' : 'Batıya'})
              </div>
            </div>
          </div>

          {/* Time slider */}
          <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '16px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '800', color: '#b45309', marginBottom: '6px' }}>
              <span>Günün Saati (Sabah ➔ Öğle ➔ Akşam):</span>
              <span style={{ fontSize: '16px', fontFamily: 'monospace' }}>{timeHour}:00</span>
            </div>
            <input
              type="range"
              min="8"
              max="18"
              value={timeHour}
              onChange={(e) => setTimeHour(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#d97706', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
              <span>08:00 (Sabah - Uzun)</span>
              <span>12:00 (Öğle - En Kısa)</span>
              <span>18:00 (Akşam - Uzun)</span>
            </div>
          </div>
        </div>
      )}

      {/* 5. Completion Modal */}
      {labCompleted && (
        <div style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
          border: '1px solid #10b981',
          borderRadius: '16px',
          padding: '20px',
          textAlign: 'center',
          color: '#ffffff'
        }}>
          <Sparkles size={32} color="#6ee7b7" style={{ margin: '0 auto 8px auto' }} />
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#6ee7b7', margin: 0 }}>
            Harika! Işık ve Gölge Uzmanı Oldun!
          </h3>
          <p style={{ fontSize: '13px', color: '#d1fae5', margin: '6px 0 14px 0' }}>
            Gölge boyunun ışık kaynağının ve cismin konumuna, günün saatine göre nasıl değiştiğini kavradın (+50 XP).
          </p>
          {onFinish && (
            <button
              onClick={onFinish}
              style={{
                padding: '10px 24px',
                background: '#10b981',
                border: 'none',
                borderRadius: '10px',
                color: '#ffffff',
                fontWeight: '800',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              Etkinliği Tamamla
            </button>
          )}
        </div>
      )}
    </div>
  );
};
