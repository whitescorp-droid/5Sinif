import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Award, CheckCircle2, Telescope, Sparkles, Compass, Eye } from 'lucide-react';
import { useGame } from '../../context/GameContext';

const PHASES = [
  { id: 'yeni_ay', name: 'Yeni Ay', angle: 0, desc: "Ay, Güneş ile Dünya arasındadır. Aydınlık yüzü Dünya'dan görünmez.", shape: 'new' },
  { id: 'hilal_1', name: 'Hilal (İlk)', angle: 45, desc: "Güneş batarken batı ufkunda 'ters C' şeklinde görünür.", shape: 'crescent-waxing' },
  { id: 'ilk_dordun', name: 'İlk Dördün', angle: 90, desc: "Ay'ın Dünya'dan bakan sağ yarısı 'D' harfi gibi aydınlık görünür.", shape: 'first-quarter' },
  { id: 'siskin_1', name: 'Şişkin Ay (İlk)', angle: 135, desc: "İlk dördünden sonra aydınlık alan yarım daireden büyüktür.", shape: 'gibbous-waxing' },
  { id: 'dolunay', name: 'Dolunay', angle: 180, desc: "Dünya, Güneş ile Ay arasındadır. Ay'ın yüzü tam bir daire olarak ışıl ışıl parlar.", shape: 'full' },
  { id: 'siskin_2', name: 'Şişkin Ay (Son)', angle: 225, desc: "Dolunaydan sonra sol tarafa doğru küçülmeye başlar.", shape: 'gibbous-waning' },
  { id: 'son_dordun', name: 'Son Dördün', angle: 270, desc: "Ay'ın sol yarısı aydınlıktır, gökyüzünde 'C' harfinin tersi / düz ters 'D' gibi görünür.", shape: 'third-quarter' },
  { id: 'hilal_2', name: 'Hilal (Son)', angle: 315, desc: "Güneş doğmadan önce doğu ufkunda düz 'C' harfi şeklinde görünür.", shape: 'crescent-waning' },
];

export const MoonPhasesOrbitLab = ({ topic, onFinish }) => {
  const { addXp, playSound } = useGame();
  const [angle, setAngle] = useState(90); // Default to İlk Dördün
  const [isPlaying, setIsPlaying] = useState(false);
  const [challengeMode, setChallengeMode] = useState(false);
  const [targetPhaseIndex, setTargetPhaseIndex] = useState(0);
  const [challengeScore, setChallengeScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [labCompleted, setLabCompleted] = useState(false);

  // Play animation loop
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setAngle(prev => (prev + 1) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Determine current closest phase
  const normalizedAngle = (angle % 360 + 360) % 360;
  const currentPhase = PHASES.reduce((closest, phase) => {
    const diff = Math.min(
      Math.abs(phase.angle - normalizedAngle),
      360 - Math.abs(phase.angle - normalizedAngle)
    );
    const closestDiff = Math.min(
      Math.abs(closest.angle - normalizedAngle),
      360 - Math.abs(closest.angle - normalizedAngle)
    );
    return diff < closestDiff ? phase : closest;
  }, PHASES[0]);

  // Orbit calculations
  const orbitRadius = 120;
  const rad = (normalizedAngle * Math.PI) / 180;
  // Let Sun be at the left (X negative).
  // At 0 deg, Moon is between Sun and Earth (left of Earth) -> X = -orbitRadius, Y = 0
  const moonX = 175 - orbitRadius * Math.cos(rad);
  const moonY = 175 - orbitRadius * Math.sin(rad);

  const startChallenge = () => {
    setChallengeMode(true);
    setChallengeScore(0);
    setIsPlaying(false);
    // Pick random target from main 4 phases
    const mainPhases = [0, 2, 4, 6];
    const pick = mainPhases[Math.floor(Math.random() * mainPhases.length)];
    setTargetPhaseIndex(pick);
    setFeedback(null);
  };

  const checkChallenge = () => {
    const target = PHASES[targetPhaseIndex];
    const diff = Math.min(
      Math.abs(target.angle - normalizedAngle),
      360 - Math.abs(target.angle - normalizedAngle)
    );

    if (diff <= 22.5) {
      if (playSound) playSound('correct');
      const newScore = challengeScore + 1;
      setChallengeScore(newScore);
      setFeedback({ type: 'success', text: `Tebrikler! Doğru evre: ${target.name}` });

      if (newScore >= 3) {
        setLabCompleted(true);
        if (addXp) addXp(50);
        if (playSound) playSound('complete');
      } else {
        setTimeout(() => {
          const mainPhases = [0, 1, 2, 3, 4, 5, 6, 7].filter(i => i !== targetPhaseIndex);
          const next = mainPhases[Math.floor(Math.random() * mainPhases.length)];
          setTargetPhaseIndex(next);
          setFeedback(null);
        }, 1500);
      }
    } else {
      if (playSound) playSound('wrong');
      setFeedback({
        type: 'error',
        text: `Henüz doğru değil! Şu anki evre: ${currentPhase.name}. Hedef: ${target.name}`
      });
    }
  };

  return (
    <div className="lab-container">
      {/* Header */}
      <div className="lab-header">
        <div className="lab-title-area">
          <span className="lab-badge">🔭 İnteraktif Gözlem Simülatörü</span>
          <h2>Güneş, Dünya ve Ay Yörünge Laboratuvarı</h2>
          <p>Ay'ın Dünya etrafındaki hareketini yönet, uzaydan ve Dünya'dan Ay'ın evrelerini canlı keşfet!</p>
        </div>
        <div className="lab-header-actions">
          <button
            className={`lab-btn ${challengeMode ? 'active' : ''}`}
            onClick={() => setChallengeMode(!challengeMode)}
          >
            🎯 {challengeMode ? 'Serbest Mod' : 'Evre Bulucu Görevi'}
          </button>
        </div>
      </div>

      {challengeMode && (
        <div className="challenge-banner animate-fade-in" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', color: '#fff', padding: '16px 20px', borderRadius: '16px', marginBottom: '20px', border: '1px solid #4338CA' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#A5B4FC', fontWeight: 600 }}>GÖREV {challengeScore + 1}/3</span>
              <h3 style={{ margin: '4px 0 0 0', fontSize: '1.25rem', color: '#FCD34D' }}>
                Hedef Evre: <strong>{PHASES[targetPhaseIndex].name}</strong>
              </h3>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#E0E7FF' }}>
                Ay'ı yörünge çubuğunu kaydırarak bu evreye getir ve "Evreyi Doğrula" butonuna bas!
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button
                className="lab-btn primary"
                onClick={checkChallenge}
                style={{ background: '#F59E0B', borderColor: '#D97706', color: '#000', fontWeight: 'bold' }}
              >
                Evreyi Doğrula ✨
              </button>
            </div>
          </div>
          {feedback && (
            <div style={{ marginTop: '12px', padding: '8px 14px', borderRadius: '8px', background: feedback.type === 'success' ? '#065F46' : '#7F1D1D', color: '#fff', fontSize: '0.9rem' }}>
              {feedback.text}
            </div>
          )}
          {labCompleted && (
            <div style={{ marginTop: '14px', padding: '12px', background: '#047857', borderRadius: '10px', textAlign: 'center' }}>
              🎉 <strong>Tebrikler! Evre Bulucu Görevini Tamamladın!</strong> +50 XP Kazandın!
            </div>
          )}
        </div>
      )}

      {/* Main Dual-View Grid */}
      <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '20px', marginBottom: '20px' }}>
        {/* View 1: Top-down Orbital View */}
        <div className="lab-card" style={{ background: '#0F172A', color: '#fff', borderRadius: '20px', padding: '20px', border: '1px solid #1E293B', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Compass size={16} /> 1. UZAYDAN KUŞBAKIŞI GÖRÜNÜM
            </span>
            <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Açı: {Math.round(normalizedAngle)}°</span>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '350px', background: 'radial-gradient(ellipse at center, #1E293B 0%, #0F172A 70%)', borderRadius: '16px', overflow: 'hidden' }}>
            {/* Stars background */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {/* Sun Rays on the left */}
            <div style={{ position: 'absolute', left: '-50px', top: '50px', bottom: '50px', width: '90px', background: 'radial-gradient(circle, #FDE047 20%, #F59E0B 60%, transparent 90%)', borderRadius: '50%', filter: 'blur(20px)', opacity: 0.9 }}></div>
            <div style={{ position: 'absolute', left: '12px', top: '155px', color: '#FDE047', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>☀️ GÜNEŞ</span>
              <span style={{ fontSize: '0.65rem', color: '#FCD34D' }}>Işık soldan geliyor</span>
            </div>

            {/* SVG Orbit and Bodies */}
            <svg viewBox="0 0 350 350" style={{ width: '100%', height: '100%' }}>
              {/* Sunlight arrows */}
              <line x1="60" y1="100" x2="100" y2="100" stroke="#FDE047" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
              <line x1="60" y1="175" x2="110" y2="175" stroke="#FDE047" strokeWidth="2" strokeDasharray="4 3" opacity="0.8" />
              <line x1="60" y1="250" x2="100" y2="250" stroke="#FDE047" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />

              {/* Orbit Circle */}
              <circle cx="175" cy="175" r={orbitRadius} fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="6 4" />

              {/* Central Earth */}
              <g transform="translate(175, 175)">
                {/* Earth Atmosphere glow */}
                <circle cx="0" cy="0" r="28" fill="#38BDF8" opacity="0.2" />
                {/* Earth body */}
                <circle cx="0" cy="0" r="24" fill="#2563EB" />
                {/* Continents (green patches) */}
                <path d="M -10 -15 Q -5 -8 5 -12 Q 10 -2 0 10 Q -12 12 -15 0 Z" fill="#10B981" />
                <path d="M 5 5 Q 12 8 8 18 Q 0 16 2 8 Z" fill="#10B981" />
                {/* Earth shadow on right */}
                <path d="M 0 -24 A 24 24 0 0 1 0 24 Z" fill="#000" opacity="0.45" />
                <text x="0" y="38" textAnchor="middle" fill="#93C5FD" fontSize="11" fontWeight="bold">Dünya</text>
              </g>

              {/* Moon in Orbit */}
              <g transform={`translate(${moonX}, ${moonY})`}>
                {/* Moon body */}
                <circle cx="0" cy="0" r="14" fill="#94A3B8" stroke="#CBD5E1" strokeWidth="1" />
                {/* Lit half (always facing Sun on left) */}
                <path d="M 0 -14 A 14 14 0 0 0 0 14 Z" fill="#F8FAFC" />
                {/* Dark half (facing right away from sun) */}
                <path d="M 0 -14 A 14 14 0 0 1 0 14 Z" fill="#1E293B" opacity="0.8" />
                <circle cx="0" cy="0" r="14" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                <text x="0" y="26" textAnchor="middle" fill="#FCD34D" fontSize="10" fontWeight="bold">Ay</text>
              </g>

              {/* Sightline from Earth to Moon */}
              <line x1="175" y1="175" x2={moonX} y2={moonY} stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
            </svg>
          </div>

          <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              className="lab-btn icon-only"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Durdur' : 'Yörüngeyi Oynat'}
              style={{ background: isPlaying ? '#EF4444' : '#10B981', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <input
              type="range"
              min="0"
              max="359"
              value={normalizedAngle}
              onChange={(e) => setAngle(Number(e.target.value))}
              style={{ flex: 1, accentColor: '#38BDF8' }}
            />
            <button
              className="lab-btn icon-only"
              onClick={() => { setAngle(0); setIsPlaying(false); }}
              title="Başa Dön"
              style={{ background: '#334155', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px', cursor: 'pointer' }}
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        {/* View 2: Telescope View from Earth */}
        <div className="lab-card" style={{ background: '#1E1B4B', color: '#fff', borderRadius: '20px', padding: '20px', border: '1px solid #312E81', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#FCD34D', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Telescope size={16} /> 2. DÜNYA'DAN GÖRÜNÜM (TELESKOP)
            </span>
            <span style={{ background: '#4338CA', padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 'bold' }}>
              {currentPhase.name}
            </span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', background: '#0F172A', borderRadius: '16px', position: 'relative' }}>
            {/* Telescope crosshair circle */}
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', position: 'relative', overflow: 'hidden', boxShadow: '0 0 30px rgba(253, 224, 71, 0.15)', border: '2px solid #334155' }}>
              {/* Moon background (dark side) */}
              <div style={{ position: 'absolute', inset: 0, background: '#1E293B' }}>
                {/* Cratering texture */}
                <div style={{ position: 'absolute', top: '30px', left: '40px', width: '25px', height: '25px', borderRadius: '50%', background: '#0F172A', opacity: 0.4 }}></div>
                <div style={{ position: 'absolute', bottom: '40px', right: '50px', width: '35px', height: '35px', borderRadius: '50%', background: '#0F172A', opacity: 0.3 }}></div>
                <div style={{ position: 'absolute', top: '80px', right: '30px', width: '20px', height: '20px', borderRadius: '50%', background: '#0F172A', opacity: 0.4 }}></div>
              </div>

              {/* Dynamic illuminated shape based on phase */}
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
                {/* Render Moon phase using SVG path */}
                {(() => {
                  // Phase ratio from 0 to 1
                  // 0 = Yeni Ay, 0.25 = İlk Dördün, 0.5 = Dolunay, 0.75 = Son Dördün
                  const norm = normalizedAngle / 360;
                  const phaseAngle = normalizedAngle;

                  if (phaseAngle < 10 || phaseAngle > 350) {
                    // New Moon
                    return <circle cx="50" cy="50" r="50" fill="#0F172A" opacity="0.9" />;
                  } else if (phaseAngle >= 170 && phaseAngle <= 190) {
                    // Full Moon
                    return (
                      <g>
                        <circle cx="50" cy="50" r="50" fill="#FEF08A" />
                        <circle cx="35" cy="35" r="10" fill="#FDE047" opacity="0.5" />
                        <circle cx="65" cy="60" r="15" fill="#FDE047" opacity="0.5" />
                      </g>
                    );
                  } else if (phaseAngle < 180) {
                    // Waxing (Right side illuminated)
                    // k from -1 to 1: at 0 deg k = -1, at 90 deg k = 0, at 180 deg k = 1
                    const k = Math.cos((phaseAngle + 180) * Math.PI / 180);
                    const rx = Math.abs(k * 50);
                    const sweep = k >= 0 ? 1 : 0;
                    return (
                      <g>
                        <path d={`M 50 0 A 50 50 0 0 1 50 100 A ${rx} 50 0 0 ${sweep} 50 0 Z`} fill="#FEF08A" />
                      </g>
                    );
                  } else {
                    // Waning (Left side illuminated)
                    const k = Math.cos(phaseAngle * Math.PI / 180);
                    const rx = Math.abs(k * 50);
                    const sweep = k >= 0 ? 1 : 0;
                    return (
                      <g>
                        <path d={`M 50 0 A 50 50 0 0 0 50 100 A ${rx} 50 0 0 ${sweep} 50 0 Z`} fill="#FEF08A" />
                      </g>
                    );
                  }
                })()}
              </svg>
            </div>

            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 6px 0', color: '#FDE047', fontSize: '1.15rem' }}>{currentPhase.name}</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.4' }}>
                {currentPhase.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Jump Badges */}
      <div className="lab-card" style={{ background: '#F8FAFC', borderRadius: '16px', padding: '16px', border: '1px solid #E2E8F0' }}>
        <h4 style={{ margin: '0 0 12px 0', fontSize: '0.95rem', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} color="#F59E0B" /> Ay'ın 8 Evresine Hızlı Git:
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px' }}>
          {PHASES.map((p) => {
            const isActive = currentPhase.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setAngle(p.angle);
                  setIsPlaying(false);
                }}
                style={{
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: isActive ? '2px solid #2563EB' : '1px solid #CBD5E1',
                  background: isActive ? '#EFF6FF' : '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  boxShadow: isActive ? '0 2px 8px rgba(37, 99, 235, 0.15)' : 'none'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: isActive ? 'bold' : '600', color: isActive ? '#1D4ED8' : '#334155' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>
                  {p.angle}° Konumu
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Did you know callout */}
      <div style={{ marginTop: '16px', padding: '14px 18px', background: '#FEF3C7', borderRadius: '12px', borderLeft: '4px solid #F59E0B', fontSize: '0.88rem', color: '#92400E', lineHeight: '1.5' }}>
        💡 <strong>Biliyor muydun?</strong> Ay'ın kendi ekseni etrafında dönme süresi ile Dünya etrafında dolanma süresi birbirine eşittir (yaklaşık <strong>27.3 gün</strong>). Bu yüzden Dünya'dan baktığımızda <strong>her zaman Ay'ın aynı yüzünü</strong> görürüz! Ay'ın arka yüzüne ise "Karanlık Yüz" veya "Görünmeyen Yüz" denir.
      </div>
    </div>
  );
};
