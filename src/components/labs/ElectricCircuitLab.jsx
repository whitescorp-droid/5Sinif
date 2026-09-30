import React, { useState } from 'react';
import { Zap, RotateCcw, Award, CheckCircle2, AlertTriangle, Sparkles, Power, HelpCircle } from 'lucide-react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';

export const ElectricCircuitLab = ({ topic, onFinish }) => {
  const { soundEnabled, addXp } = useGame();
  const [numBatteries, setNumBatteries] = useState(1);
  const [numBulbs, setNumBulbs] = useState(1);
  const [isSwitchClosed, setIsSwitchClosed] = useState(true);

  // Challenge mode
  const [isChallengeMode, setIsChallengeMode] = useState(false);
  const [challengeTargetRatio, setChallengeTargetRatio] = useState(2);
  const [challengeGoalText, setChallengeGoalText] = useState('Çok Parlak (2.0x oran yakala: Örn 2 Pil + 1 Ampul)');
  const [challengeScore, setChallengeScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [labCompleted, setLabCompleted] = useState(false);

  // Brightness calculation
  const ratio = numBatteries / numBulbs;
  const isOverloaded = ratio > 3.0;

  // Visual brightness parameters
  let brightnessLevel = 'off';
  let brightnessText = 'Işık Yok (Devre Açık)';
  let brightnessColor = '#64748b';
  let glowOpacity = 0;
  let glowRadius = 0;
  let bulbFill = '#334155';
  let filamentColor = '#475569';

  if (isSwitchClosed) {
    if (ratio < 0.6) {
      brightnessLevel = 'dim';
      brightnessText = 'Loş / Sönük (Enerji yetersiz)';
      brightnessColor = '#f59e0b';
      glowOpacity = 0.35;
      glowRadius = 15;
      bulbFill = '#fef08a';
      filamentColor = '#d97706';
    } else if (ratio <= 1.2) {
      brightnessLevel = 'normal';
      brightnessText = 'Normal Parlaklık';
      brightnessColor = '#eab308';
      glowOpacity = 0.65;
      glowRadius = 30;
      bulbFill = '#fde047';
      filamentColor = '#b45309';
    } else if (ratio <= 2.5) {
      brightnessLevel = 'bright';
      brightnessText = 'Çok Parlak ⚡';
      brightnessColor = '#facc15';
      glowOpacity = 0.9;
      glowRadius = 55;
      bulbFill = '#fef9c3';
      filamentColor = '#ef4444';
    } else {
      brightnessLevel = 'overload';
      brightnessText = 'Göz Kamaştırıcı (Aşırı Gerilim!)';
      brightnessColor = '#fbbf24';
      glowOpacity = 1;
      glowRadius = 75;
      bulbFill = '#ffffff';
      filamentColor = '#dc2626';
    }
  }

  const handleToggleSwitch = () => {
    setIsSwitchClosed(prev => !prev);
    playSound('click', soundEnabled);
  };

  const handleReset = () => {
    setNumBatteries(1);
    setNumBulbs(1);
    setIsSwitchClosed(true);
    setFeedback(null);
    playSound('click', soundEnabled);
  };

  const startChallenge = () => {
    setIsChallengeMode(true);
    setChallengeScore(0);
    setChallengeTargetRatio(2);
    setChallengeGoalText('Çok Parlak (2.0x oran: 2 Pil + 1 Ampul veya 4 Pil + 2 Ampul kur!)');
    setFeedback(null);
    playSound('click', soundEnabled);
  };

  const checkChallenge = () => {
    if (!isSwitchClosed) {
      setFeedback({
        type: 'error',
        text: '⚠️ Anahtar AÇIK konumda! Devreyi tamamlamak için önce anahtarı kapatmalısın.'
      });
      playSound('wrong', soundEnabled);
      return;
    }

    if (Math.abs(ratio - challengeTargetRatio) < 0.05) {
      const nextScore = challengeScore + 1;
      setChallengeScore(nextScore);
      setFeedback({
        type: 'success',
        text: `🎉 Harika! Tam hedeflenen ${challengeTargetRatio}x pil/ampul oranını başarıyla kurdun!`
      });
      addXp?.(15);
      playSound('correct', soundEnabled);

      if (nextScore >= 3 && !labCompleted) {
        setLabCompleted(true);
        addXp?.(50);
        playSound('fanfare', soundEnabled);
      } else {
        setTimeout(() => {
          if (nextScore === 1) {
            setChallengeTargetRatio(0.5);
            setChallengeGoalText('Sönük Işık (0.5x oran: 1 Pil + 2 Ampul veya 2 Pil + 4 Ampul kur!)');
          } else if (nextScore === 2) {
            setChallengeTargetRatio(1);
            setChallengeGoalText('Normal Parlaklık (1.0x oran: 2 Pil + 2 Ampul veya 3 Pil + 3 Ampul kur!)');
          }
          setFeedback(null);
        }, 1600);
      }
    } else {
      setFeedback({
        type: 'error',
        text: `Henüz olmadı. Şu anki pil/ampul oranın: ${ratio.toFixed(2)}x. Hedef: ${challengeTargetRatio}x!`
      });
      playSound('wrong', soundEnabled);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '100%',
      fontFamily: 'inherit',
      color: '#0f172a'
    }}>
      {/* 1. Header Card */}
      <div style={{
        background: 'linear-gradient(135deg, #fef9c3 0%, #fef08a 30%, #e0f2fe 100%)',
        border: '1px solid #fde047',
        borderRadius: '16px',
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        boxShadow: '0 4px 15px rgba(234, 179, 8, 0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
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
              ⚡
            </div>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#854d0e', margin: '0 0 4px 0' }}>
                Elektrik Devresi & Ampul Parlaklığı Laboratuvarı
              </h2>
              <p style={{ fontSize: '13px', color: '#713f12', margin: 0, lineHeight: 1.4 }}>
                Pil ve ampul sayılarını değiştir, anahtarı açıp kapatarak devredeki akımı ve parlaklığı canlı gözlemle!
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
                  background: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
                  border: 'none',
                  borderRadius: '100px',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(202, 138, 4, 0.3)'
                }}
              >
                <Award size={16} />
                Görev Modu (Kazanım Testi)
              </button>
            ) : (
              <div style={{
                background: '#ca8a04',
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
              title="Devreyi Sıfırla"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 14px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
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
      </div>

      {/* 2. Challenge Mode Active Banner */}
      {isChallengeMode && (
        <div style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '16px 20px',
          border: '1px solid #4338ca',
          boxShadow: '0 6px 20px rgba(49, 46, 129, 0.25)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <div style={{ fontSize: '11px', color: '#a5b4fc', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Görev {challengeScore + 1} / 3
            </div>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#fde047', marginTop: '2px' }}>
              {challengeGoalText}
            </div>
            <div style={{ fontSize: '12px', color: '#cbd5e1', marginTop: '4px' }}>
              Şu anki Oran: <strong style={{ color: '#38bdf8' }}>{numBatteries} Pil / {numBulbs} Ampul = {ratio.toFixed(2)}x</strong>
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
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(34, 197, 94, 0.35)'
            }}
          >
            <CheckCircle2 size={18} />
            Devreyi Test Et
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

      {/* 4. Main Two-Column Interactive Workspace */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 340px) 1fr',
        gap: '20px',
        alignItems: 'stretch'
      }}>
        {/* Left Column: Circuit Controls Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
        }}>
          {/* Switch Toggle */}
          <div style={{
            background: isSwitchClosed ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${isSwitchClosed ? '#86efac' : '#fecaca'}`,
            borderRadius: '12px',
            padding: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: isSwitchClosed ? '#166534' : '#991b1b' }}>
                Devre Anahtarı: {isSwitchClosed ? 'KAPALI' : 'AÇIK'}
              </div>
              <div style={{ fontSize: '11px', color: isSwitchClosed ? '#15803d' : '#b91c1c', marginTop: '2px' }}>
                {isSwitchClosed ? '⚡ Akım kesintisiz akıyor' : '🚫 Devre kesik, akım geçemez'}
              </div>
            </div>

            <button
              onClick={handleToggleSwitch}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: isSwitchClosed ? '#22c55e' : '#ef4444',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '12px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <Power size={14} />
              {isSwitchClosed ? 'Anahtarı Aç' : 'Anahtarı Kapat'}
            </button>
          </div>

          {/* Battery Controls */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#334155' }}>
                🔋 Pil Sayısı (Bağımsız Değişken):
              </span>
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#eab308' }}>
                {numBatteries} Adet ({numBatteries * 1.5}V)
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {[1, 2, 3, 4].map(n => (
                <button
                  key={n}
                  onClick={() => { setNumBatteries(n); playSound('click', soundEnabled); }}
                  style={{
                    padding: '10px 0',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    background: numBatteries === n ? '#eab308' : '#f8fafc',
                    color: numBatteries === n ? '#ffffff' : '#475569',
                    border: numBatteries === n ? '2px solid #ca8a04' : '1px solid #cbd5e1',
                    boxShadow: numBatteries === n ? '0 4px 10px rgba(234, 179, 8, 0.3)' : 'none'
                  }}
                >
                  {n} Pil
                </button>
              ))}
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '6px' }}>
              ℹ️ Pil sayısı arttıkça devreye verilen elektrik enerjisi artar.
            </div>
          </div>

          {/* Bulb Controls */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#334155' }}>
                💡 Ampul Sayısı (Yük):
              </span>
              <span style={{ fontSize: '14px', fontWeight: '800', color: '#0284c7' }}>
                {numBulbs} Adet
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {[1, 2, 3, 4].map(n => (
                <button
                  key={n}
                  onClick={() => { setNumBulbs(n); playSound('click', soundEnabled); }}
                  style={{
                    padding: '10px 0',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    background: numBulbs === n ? '#0284c7' : '#f8fafc',
                    color: numBulbs === n ? '#ffffff' : '#475569',
                    border: numBulbs === n ? '2px solid #0369a1' : '1px solid #cbd5e1',
                    boxShadow: numBulbs === n ? '0 4px 10px rgba(2, 132, 199, 0.3)' : 'none'
                  }}
                >
                  {n} Ampul
                </button>
              ))}
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '6px' }}>
              ℹ️ Ampul sayısı arttıkça enerji paylaşılır, parlaklık azalır.
            </div>
          </div>

          {/* Scientific Variables Rule Card */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '12px 14px',
            fontSize: '11.5px',
            color: '#334155',
            lineHeight: 1.5,
            marginTop: 'auto'
          }}>
            <div style={{ fontWeight: '800', color: '#0f172a', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HelpCircle size={14} color="#2563eb" /> Deney Değişkenleri Kuralı:
            </div>
            <div>• <strong>Pil Artarsa (Ampul Sabit):</strong> Parlaklık <strong>ARTAR</strong>.</div>
            <div>• <strong>Ampul Artarsa (Pil Sabit):</strong> Parlaklık <strong>AZALIR</strong>.</div>
            <div style={{ marginTop: '4px', color: '#64748b', fontSize: '11px' }}>
              * Bağımsız Değişken: Kasten değiştirdiğimiz pil/ampul sayısı.
            </div>
          </div>
        </div>

        {/* Right Column: Visual Circuit Board (Realistic SVG + Interactive Rig) */}
        <div style={{
          background: 'radial-gradient(ellipse at center, #1e293b 0%, #0f172a 100%)',
          borderRadius: '16px',
          border: '1px solid #334155',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '440px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.5)'
        }}>
          {/* Top Status & Badge */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10
          }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#94a3b8', letterSpacing: '0.5px' }}>
              ŞEMATİK ELEKTRİK DEVRESİ
            </span>
            <span style={{
              fontSize: '11px',
              fontWeight: '800',
              padding: '4px 10px',
              borderRadius: '100px',
              background: isSwitchClosed ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
              color: isSwitchClosed ? '#4ade80' : '#f87171',
              border: `1px solid ${isSwitchClosed ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`
            }}>
              {isSwitchClosed ? '● KAPALI DEVRE (AKIM AKTİF)' : '○ AÇIK DEVRE (AKIM KESİK)'}
            </span>
          </div>

          {/* Central Circuit Diagram Frame */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '280px',
            margin: 'auto 0'
          }}>
            {/* SVG Connecting Loop Wire */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 540 280">
              <defs>
                <filter id="wireGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Main Outer Cable Loop */}
              <rect
                x="60"
                y="40"
                width="420"
                height="200"
                rx="24"
                fill="none"
                stroke={isSwitchClosed ? '#38bdf8' : '#475569'}
                strokeWidth="5"
                filter={isSwitchClosed ? 'url(#wireGlow)' : 'none'}
              />

              {/* Flowing animated dash when circuit is active */}
              {isSwitchClosed && (
                <rect
                  x="60"
                  y="40"
                  width="420"
                  height="200"
                  rx="24"
                  fill="none"
                  stroke="#fef08a"
                  strokeWidth="3"
                  strokeDasharray="10 14"
                  strokeLinecap="round"
                  style={{
                    animation: 'dashAnimation 1.2s linear infinite'
                  }}
                />
              )}
            </svg>

            {/* TOP RAIL: Realistic Glowing Bulbs */}
            <div style={{
              position: 'absolute',
              top: '4px',
              left: '70px',
              right: '70px',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              zIndex: 5
            }}>
              {Array.from({ length: numBulbs }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: '#1e293b',
                    padding: '8px 12px',
                    borderRadius: '16px',
                    border: '1px solid #334155',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* Bulb Graphic */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: bulbFill,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '22px',
                      boxShadow: isSwitchClosed ? `0 0 ${glowRadius}px ${brightnessColor}` : 'none',
                      transition: 'all 0.3s ease',
                      border: isSwitchClosed ? '2px solid #ffffff' : '2px solid #475569',
                      position: 'relative'
                    }}
                  >
                    💡
                  </div>
                  {/* Socket base */}
                  <div style={{ width: '16px', height: '6px', background: '#64748b', borderRadius: '2px', marginTop: '2px' }}></div>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#cbd5e1', marginTop: '4px' }}>
                    Ampul {i + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* BOTTOM RAIL: Realistic Series Batteries */}
            <div style={{
              position: 'absolute',
              bottom: '4px',
              left: '70px',
              right: '70px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 5
            }}>
              <div style={{
                display: 'flex',
                gap: '8px',
                background: '#1e293b',
                padding: '8px 16px',
                borderRadius: '16px',
                border: '1px solid #334155',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
              }}>
                {Array.from({ length: numBatteries }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'linear-gradient(135deg, #78350f 0%, #d97706 50%, #78350f 100%)',
                      border: '1px solid #f59e0b',
                      borderRadius: '6px',
                      padding: '4px 8px',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: '800',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                    }}
                  >
                    <span>🔋</span>
                    <span style={{ fontFamily: 'monospace' }}>1.5V (+)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT RAIL: Interactive Physical Knife Switch */}
            <div
              onClick={handleToggleSwitch}
              title="Anahtarı açmak veya kapatmak için tıkla"
              style={{
                position: 'absolute',
                right: '42px',
                top: '110px',
                background: '#1e293b',
                border: `2px solid ${isSwitchClosed ? '#22c55e' : '#ef4444'}`,
                borderRadius: '12px',
                padding: '8px 12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                zIndex: 10,
                transform: 'translateY(-50%)',
                transition: 'transform 0.1s ease'
              }}
            >
              <div style={{ fontSize: '18px' }}>
                {isSwitchClosed ? '⚡' : '🚫'}
              </div>
              <span style={{ fontSize: '10px', fontWeight: '800', color: isSwitchClosed ? '#86efac' : '#fca5a5' }}>
                {isSwitchClosed ? 'KAPALI' : 'AÇIK'}
              </span>
            </div>
          </div>

          {/* Bottom Measurement & Diagnostic Dashboard */}
          <div style={{
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid #334155',
            borderRadius: '12px',
            padding: '12px 18px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 10
          }}>
            <div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>
                Ampul Parlaklığı
              </div>
              <div style={{ fontSize: '16px', fontWeight: '900', color: brightnessColor, marginTop: '2px' }}>
                {brightnessText}
              </div>
            </div>

            <div style={{ width: '1px', height: '28px', background: '#334155' }}></div>

            <div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>
                Pil / Ampul Oranı
              </div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#38bdf8', fontFamily: 'monospace', marginTop: '2px' }}>
                {numBatteries} Pil ÷ {numBulbs} Ampul = {ratio.toFixed(2)}x
              </div>
            </div>

            <div style={{ width: '1px', height: '28px', background: '#334155' }}></div>

            <div>
              <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>
                Devre Durumu
              </div>
              <div style={{
                fontSize: '12px',
                fontWeight: '800',
                color: !isSwitchClosed ? '#94a3b8' : isOverloaded ? '#f87171' : '#4ade80',
                marginTop: '2px'
              }}>
                {!isSwitchClosed ? 'Akım Geçmiyor' : isOverloaded ? '⚠️ Aşırı Yüksek Yük' : '✓ Kararlı & Güvenli'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Completion Modal Banner */}
      {labCompleted && (
        <div style={{
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
          border: '1px solid #10b981',
          borderRadius: '16px',
          padding: '20px',
          textAlign: 'center',
          color: '#ffffff',
          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.25)'
        }}>
          <Sparkles size={32} color="#6ee7b7" style={{ margin: '0 auto 8px auto' }} />
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#6ee7b7', margin: 0 }}>
            Tebrikler! Elektrik Devreleri & Parlaklık Uzmanı Oldun!
          </h3>
          <p style={{ fontSize: '13px', color: '#d1fae5', margin: '6px 0 14px 0' }}>
            Pil ve ampul sayılarının parlaklığa etkisini, anahtarın işlevini ve devre kurallarını başarıyla tamamladın (+50 XP).
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

      {/* Global CSS Animation for Cable dashes */}
      <style>{`
        @keyframes dashAnimation {
          to {
            stroke-dashoffset: -48;
          }
        }
      `}</style>
    </div>
  );
};
