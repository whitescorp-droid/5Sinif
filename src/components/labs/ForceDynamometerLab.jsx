import React, { useState } from 'react';
import { RotateCcw, Award, CheckCircle2, AlertTriangle, Scale, Sparkles } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';

const WEIGHT_OBJECTS = [
  { id: 'elma', name: 'Elma', weightN: 1, icon: '🍎', color: '#ef4444' },
  { id: 'kalemlik', name: 'Kalemlik', weightN: 3, icon: '✏️', color: '#f59e0b' },
  { id: 'kitap', name: 'Fen Kitabı', weightN: 5, icon: '📖', color: '#3b82f6' },
  { id: 'tas', name: 'Ağır Taş', weightN: 10, icon: '🪨', color: '#6b7280' },
  { id: 'canta', name: 'Okul Çantası', weightN: 20, icon: '🎒', color: '#8b5cf6' },
];

const DYNAMOMETERS = [
  {
    id: 'ince',
    name: 'Hassas (İnce Yay)',
    maxN: 10,
    scalePxPerN: 13,
    color: '#06b6d4',
    springWidth: 3,
    desc: 'Küçük kuvvetler için çok hassas. Maksimum 10 N tartar.'
  },
  {
    id: 'kalin',
    name: 'Güçlü (Kalın Yay)',
    maxN: 50,
    scalePxPerN: 3.2,
    color: '#f97316',
    springWidth: 6,
    desc: 'Ağır cisimler için dayanıklı. Maksimum 50 N tartar.'
  }
];

export const ForceDynamometerLab = ({ topic, onFinish }) => {
  const { soundEnabled, addXp } = useGame();
  const [selectedDynId, setSelectedDynId] = useState('ince');
  const [hungObjects, setHungObjects] = useState([]);
  const [customForce, setCustomForce] = useState(0);
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [challengeTarget, setChallengeTarget] = useState(7);
  const [challengeScore, setChallengeScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [labCompleted, setLabCompleted] = useState(false);

  const currentDyn = DYNAMOMETERS.find(d => d.id === selectedDynId);

  // Total applied force
  const objectsForce = hungObjects.reduce((sum, obj) => sum + obj.weightN, 0);
  const totalForce = objectsForce + customForce;

  const isOverloaded = totalForce > currentDyn.maxN;
  const extensionPx = isOverloaded 
    ? currentDyn.maxN * currentDyn.scalePxPerN + 25 
    : totalForce * currentDyn.scalePxPerN;

  const handleAddObject = (obj) => {
    setHungObjects(prev => [...prev, { ...obj, uniqueId: Date.now() + Math.random() }]);
    playSound('click', soundEnabled);
  };

  const handleRemoveObject = (uniqueId) => {
    setHungObjects(prev => prev.filter(o => o.uniqueId !== uniqueId));
    playSound('click', soundEnabled);
  };

  const handleReset = () => {
    setHungObjects([]);
    setCustomForce(0);
    setFeedback(null);
    playSound('click', soundEnabled);
  };

  const startChallenge = () => {
    setIsChallengeMode(true);
    setChallengeScore(0);
    generateNextChallenge();
    playSound('click', soundEnabled);
  };

  const generateNextChallenge = () => {
    const targets = [4, 7, 8, 12, 15, 22, 30];
    const nextTarget = targets[Math.floor(Math.random() * targets.length)];
    setChallengeTarget(nextTarget);
    handleReset();
  };

  const checkChallengeAnswer = () => {
    if (isOverloaded) {
      setFeedback({
        type: 'error',
        text: '⚠️ Yayın esneklik sınırı aşıldı! Lütfen Kalın Yaylı dinamometreye geçin.'
      });
      playSound('wrong', soundEnabled);
      return;
    }

    if (totalForce === challengeTarget) {
      const newScore = challengeScore + 1;
      setChallengeScore(newScore);
      setFeedback({
        type: 'success',
        text: `🎉 Harika! Tam ${challengeTarget} N kuvvet uyguladın ve ibre doğru gösterdi!`
      });
      addXp?.(15);
      playSound('correct', soundEnabled);

      if (newScore >= 3 && !labCompleted) {
        setLabCompleted(true);
        addXp?.(50);
        playSound('fanfare', soundEnabled);
      } else {
        setTimeout(() => {
          generateNextChallenge();
          setFeedback(null);
        }, 1500);
      }
    } else {
      const diff = challengeTarget - totalForce;
      setFeedback({
        type: 'error',
        text: diff > 0 
          ? `Hedefe ulaşmak için ${diff} N daha kuvvete ihtiyacın var.` 
          : `Hedefi ${Math.abs(diff)} N aştın! Fazla ağırlıkları çıkar.`
      });
      playSound('wrong', soundEnabled);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', fontFamily: 'inherit' }}>
      {/* 1. Header */}
      <div style={{
        background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #f0fdf4 100%)',
        border: '1px solid #7dd3fc',
        borderRadius: '16px',
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '0 4px 15px rgba(2, 132, 199, 0.1)'
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
            ⚖️
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#0369a1', margin: '0 0 4px 0' }}>
              Dinamometre & Kuvvet Laboratuvarı
            </h2>
            <p style={{ fontSize: '13px', color: '#075985', margin: 0, lineHeight: 1.4 }}>
              Farklı yay sertliklerindeki dinamometrelere ağırlıklar as, esneme miktarını ve kuvveti incele!
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {!isChallengeMode ? (
            <button
              onClick={startChallenge}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 16px',
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                border: 'none',
                borderRadius: '100px',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
              }}
            >
              <Award size={16} />
              Görev Modu (Kazanım Testi)
            </button>
          ) : (
            <div style={{
              background: '#0284c7',
              color: '#ffffff',
              padding: '6px 14px',
              borderRadius: '100px',
              fontSize: '12px',
              fontWeight: '700'
            }}>
              🎯 Görev: {challengeScore}/3 Tamamlandı
            </div>
          )}

          <button
            onClick={handleReset}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 14px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '100px',
              color: '#475569',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={15} />
            Sıfırla
          </button>
        </div>
      </div>

      {/* 2. Challenge Active Banner */}
      {isChallengeMode && (
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '16px 20px',
          border: '1px solid #4338ca',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <div style={{ fontSize: '11px', color: '#a5b4fc', fontWeight: '800', textTransform: 'uppercase' }}>
              Görev {challengeScore + 1} / 3
            </div>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#fde047', marginTop: '2px' }}>
              Hedef Kuvvet: <span style={{ fontSize: '20px', color: '#38bdf8' }}>{challengeTarget} N</span>
            </div>
            <div style={{ fontSize: '12px', color: '#cbd5e1', marginTop: '4px' }}>
              {challengeTarget > 10 ? 'İpucu: 10 N üzeri için Kalın Yaylı dinamometreye geçmelisin!' : 'Uygun dinamometreyi seçip ağırlıkları kancaya as.'}
            </div>
          </div>

          <button
            onClick={checkChallengeAnswer}
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
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.35)'
            }}
          >
            <CheckCircle2 size={18} />
            Ölçümü Kontrol Et
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

      {/* 4. Two-Column Workspace */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 340px) 1fr',
        gap: '20px',
        alignItems: 'stretch'
      }}>
        {/* Left Side: Controls & Weight Tray */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {/* Dynamometer Type Selector */}
          <div>
            <label style={{ fontSize: '13px', fontWeight: '800', color: '#334155', display: 'block', marginBottom: '8px' }}>
              Dinamometre Tipi Seç:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {DYNAMOMETERS.map(dyn => (
                <button
                  key={dyn.id}
                  onClick={() => { setSelectedDynId(dyn.id); playSound('click', soundEnabled); }}
                  style={{
                    padding: '10px 8px',
                    borderRadius: '10px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    background: selectedDynId === dyn.id ? '#f0f9ff' : '#f8fafc',
                    border: selectedDynId === dyn.id ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    color: selectedDynId === dyn.id ? '#0369a1' : '#475569'
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: '800' }}>{dyn.name}</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Maks: {dyn.maxN} N</div>
                </button>
              ))}
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '6px', background: '#f8fafc', padding: '6px 10px', borderRadius: '6px' }}>
              ℹ️ {currentDyn.desc}
            </div>
          </div>

          {/* Objects Tray */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#334155' }}>Asılabilir Ağırlıklar:</span>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Tıkla ve kancaya tak</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {WEIGHT_OBJECTS.map(obj => (
                <button
                  key={obj.id}
                  onClick={() => handleAddObject(obj)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 10px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontSize: '18px' }}>{obj.icon}</span>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: '#1e293b' }}>{obj.name}</div>
                    <div style={{ fontSize: '11px', fontWeight: '800', color: '#d97706' }}>+{obj.weightN} N</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Slider for manual pull */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#334155' }}>El ile Ek Çekme Kuvveti:</span>
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#0284c7', fontFamily: 'monospace' }}>{customForce} N</span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              value={customForce}
              onChange={(e) => setCustomForce(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#0284c7', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace' }}>
              <span>0 N</span>
              <span>12 N</span>
              <span>25 N</span>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Rig */}
        <div style={{
          background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)',
          borderRadius: '16px',
          border: '1px solid #334155',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '440px'
        }}>
          {/* Top Hanging Stand */}
          <div style={{ width: '200px', height: '10px', background: '#78350f', borderRadius: '100px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '10px', left: '96px', width: '8px', height: '14px', background: '#94a3b8', borderRadius: '0 0 4px 4px' }}></div>
          </div>

          {/* Dynamometer Cylinder & Scale */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
            {/* Top Hook */}
            <div style={{ width: '4px', height: '16px', background: '#cbd5e1', borderRadius: '2px' }}></div>

            {/* Cylinder Tube */}
            <div style={{
              width: '90px',
              background: 'linear-gradient(to right, #334155, #1e293b, #0f172a)',
              border: '2px solid #475569',
              borderRadius: '12px 12px 0 0',
              padding: '10px 8px 6px 8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
              <div style={{ fontSize: '9px', fontWeight: '800', color: '#94a3b8', letterSpacing: '0.5px' }}>DİNAMOMETRE</div>
              <div style={{ fontSize: '10px', fontWeight: '800', color: '#38bdf8', fontFamily: 'monospace' }}>0 - {currentDyn.maxN} N</div>

              {/* Window showing Spring */}
              <div style={{
                width: '64px',
                height: '140px',
                background: '#090d16',
                border: '1px solid #334155',
                borderRadius: '6px',
                margin: '6px 0',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {/* Ticks on right */}
                <div style={{
                  position: 'absolute',
                  right: '4px',
                  top: '4px',
                  bottom: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  fontSize: '8px',
                  color: '#64748b',
                  fontFamily: 'monospace'
                }}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end' }}>
                      <span>{Math.round((i * currentDyn.maxN) / 5)}N</span>
                      <div style={{ width: '4px', height: '1px', background: '#64748b' }}></div>
                    </div>
                  ))}
                </div>

                {/* Coiled Spring SVG */}
                <svg style={{ width: '28px', height: '100%' }} viewBox="0 0 30 140" preserveAspectRatio="none">
                  <path
                    d={`M 15 0 
                        L 5 15 L 25 25 L 5 35 L 25 45 L 5 55 L 25 65 L 5 75 L 25 85 L 5 95 L 25 105 L 15 ${Math.min(135, 30 + extensionPx * 0.7)}`}
                    fill="none"
                    stroke={isOverloaded ? '#ef4444' : currentDyn.color}
                    strokeWidth={currentDyn.springWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Overload Alert overlay */}
                {isOverloaded && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(127, 29, 29, 0.85)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '4px'
                  }}>
                    <AlertTriangle size={18} color="#fca5a5" />
                    <span style={{ fontSize: '8px', fontWeight: '800', color: '#fee2e2', marginTop: '2px' }}>
                      ESNEKLİK SINIRI AŞILDI!
                    </span>
                  </div>
                )}
              </div>

              {/* Indicator rod */}
              <div style={{
                width: '4px',
                height: `${16 + extensionPx}px`,
                background: '#f59e0b',
                borderRadius: '0 0 2px 2px',
                transition: 'height 0.25s ease'
              }}></div>
            </div>

            {/* Bottom Hook */}
            <div style={{ width: '12px', height: '16px', border: '3px solid #cbd5e1', borderTop: 'none', borderRadius: '0 0 100px 100px' }}></div>

            {/* Objects suspended */}
            <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {hungObjects.length === 0 && customForce === 0 ? (
                <span style={{ fontSize: '11px', color: '#64748b', fontStyle: 'italic' }}>Kancada ağırlık yok</span>
              ) : (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  maxWidth: '220px',
                  justifyContent: 'center',
                  background: 'rgba(30, 41, 59, 0.9)',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  border: '1px solid #334155'
                }}>
                  {hungObjects.map(obj => (
                    <span
                      key={obj.uniqueId}
                      onClick={() => handleRemoveObject(obj.uniqueId)}
                      title="Çıkarmak için tıkla"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 8px',
                        background: '#0f172a',
                        border: '1px solid #334155',
                        borderRadius: '6px',
                        fontSize: '11px',
                        color: '#fde047',
                        cursor: 'pointer'
                      }}
                    >
                      <span>{obj.icon}</span>
                      <strong>{obj.weightN}N</strong>
                      <span style={{ color: '#94a3b8' }}>×</span>
                    </span>
                  ))}
                  {customForce > 0 && (
                    <span style={{ padding: '4px 8px', background: '#0284c7', color: '#ffffff', borderRadius: '6px', fontSize: '11px', fontWeight: '800' }}>
                      El: {customForce}N
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Measurement Readout */}
          <div style={{
            width: '100%',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '12px 18px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '16px'
          }}>
            <div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>Toplam Kuvvet</div>
              <div style={{ fontSize: '18px', fontWeight: '900', color: isOverloaded ? '#f87171' : '#38bdf8', fontFamily: 'monospace' }}>
                {totalForce} N
              </div>
            </div>

            <div style={{ width: '1px', height: '28px', background: '#334155' }}></div>

            <div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>Ölçüm Durumu</div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: isOverloaded ? '#f87171' : '#4ade80' }}>
                {isOverloaded ? 'Kapasite Aşımı (> ' + currentDyn.maxN + 'N)' : '✓ Güvenli Ölçüm'}
              </div>
            </div>

            <div style={{ width: '1px', height: '28px', background: '#334155' }}></div>

            <div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>Yay Uzaması</div>
              <div style={{ fontSize: '14px', fontWeight: '800', color: '#fde047', fontFamily: 'monospace' }}>
                ~{(totalForce * (selectedDynId === 'ince' ? 1.0 : 0.2)).toFixed(1)} cm
              </div>
            </div>
          </div>
        </div>
      </div>

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
            Tebrikler! Kuvvet ve Dinamometre Uzmanı Oldun!
          </h3>
          <p style={{ fontSize: '13px', color: '#d1fae5', margin: '6px 0 14px 0' }}>
            İnce ve kalın yayların farkını, esneklik sınırını ve kuvvet ölçümünü başarıyla tamamladın (+50 XP).
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
