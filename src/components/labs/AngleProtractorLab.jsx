import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  RotateCw, CheckCircle2, Sparkles, HelpCircle, 
  ArrowRight, Award, Compass, RefreshCw, Eye
} from 'lucide-react';

export const AngleProtractorLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();
  
  // Angle state (0 to 180 degrees)
  const [angle, setAngle] = useState(55);
  const [activeSubTab, setActiveSubTab] = useState('protractor'); // 'protractor', 'intersecting', 'challenges'
  const [showTümler, setShowTümler] = useState(false);
  const [showBütünler, setShowBütünler] = useState(false);
  
  // Challenge mode state
  const challenges = [
    {
      id: 1,
      instruction: "İbreyi sürükleyerek tam 90° lik DİK AÇI oluştur.",
      targetAngle: 90,
      tolerance: 2,
      hint: "Dik açı tam olarak 90 derecedir."
    },
    {
      id: 2,
      instruction: "Ölçüsü 35° olan açının TÜMLERİNİ bul ve ibreyi o açıya getir!",
      targetAngle: 55, // 90 - 35 = 55
      tolerance: 2,
      hint: "Tümler açılar toplamı 90° dir: 90 - 35 = ?"
    },
    {
      id: 3,
      instruction: "İbreyi 120° lik bir GENİŞ AÇI konumuna getir.",
      targetAngle: 120,
      tolerance: 3,
      hint: "Geniş açılar 90° den büyük, 180° den küçüktür."
    },
    {
      id: 4,
      instruction: "Ölçüsü 70° olan açının BÜTÜNLERİNİ bul ve ibreyi ayarla!",
      targetAngle: 110, // 180 - 70 = 110
      tolerance: 2,
      hint: "Bütünler açılar toplamı 180° dir: 180 - 70 = ?"
    },
    {
      id: 5,
      instruction: "İbreyi DOĞRU AÇI (180°) konumuna getir.",
      targetAngle: 180,
      tolerance: 2,
      hint: "Doğru açı tam bir düz çizgidir ve 180 derecedir."
    }
  ];

  const [currentChallengeIdx, setCurrentChallengeIdx] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [challengeScore, setChallengeScore] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  // SVG Protractor Coordinates
  const cx = 250;
  const cy = 250;
  const radius = 190;
  const armLength = 195;

  // Calculate coordinates of the moving arm based on angle (0° is right along X axis, going counter-clockwise)
  const rad = (angle * Math.PI) / 180;
  const armX = cx + armLength * Math.cos(rad);
  const armY = cy - armLength * Math.sin(rad);

  // Arc path generator
  const getArcPath = (startAngle, endAngle, arcRadius) => {
    const sRad = (startAngle * Math.PI) / 180;
    const eRad = (endAngle * Math.PI) / 180;
    const x1 = cx + arcRadius * Math.cos(sRad);
    const y1 = cy - arcRadius * Math.sin(sRad);
    const x2 = cx + arcRadius * Math.cos(eRad);
    const y2 = cy - arcRadius * Math.sin(eRad);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${arcRadius} ${arcRadius} 0 ${largeArc} 0 ${x2} ${y2} Z`;
  };

  // Determine angle classification
  const getAngleType = (deg) => {
    if (deg === 0) return { name: 'Sıfır Açı', color: '#6B7280', badge: 'bg-gray' };
    if (deg < 90) return { name: 'Dar Açı', color: '#10B981', badge: 'bg-green' };
    if (deg === 90) return { name: 'Dik Açı (90°)', color: '#3B82F6', badge: 'bg-blue' };
    if (deg < 180) return { name: 'Geniş Açı', color: '#F59E0B', badge: 'bg-orange' };
    if (deg === 180) return { name: 'Doğru Açı (180°)', color: '#8B5CF6', badge: 'bg-purple' };
    return { name: 'Tam Açı (360°)', color: '#EC4899', badge: 'bg-pink' };
  };

  const currentType = getAngleType(angle);

  // Interactive Drag on SVG
  const svgRef = useRef(null);
  const isDragging = useRef(false);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    if (clientX === undefined || clientY === undefined) return;

    const scaleX = 500 / rect.width;
    const scaleY = 320 / rect.height;
    const x = (clientX - rect.left) * scaleX - cx;
    const y = cy - (clientY - rect.top) * scaleY;

    let deg = Math.round((Math.atan2(y, x) * 180) / Math.PI);
    if (deg < 0) deg = 0;
    if (deg > 180) deg = 180;
    setAngle(deg);
  };

  const handlePointerUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      playSound('click', soundEnabled);
    }
  };

  useEffect(() => {
    const handleGlobalUp = () => { isDragging.current = false; };
    window.addEventListener('pointerup', handleGlobalUp);
    return () => window.removeEventListener('pointerup', handleGlobalUp);
  }, []);

  // Check Challenge
  const checkCurrentChallenge = () => {
    const currentChallenge = challenges[currentChallengeIdx];
    const diff = Math.abs(angle - currentChallenge.targetAngle);

    if (diff <= currentChallenge.tolerance) {
      playSound('correct', soundEnabled);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      const newScore = challengeScore + 1;
      setChallengeScore(newScore);
      setFeedbackMsg({
        type: 'success',
        text: `Harika! Hedef ${currentChallenge.targetAngle}° idi, sen ${angle}° ayarladın. Tam isabet! 🎉`
      });

      setTimeout(() => {
        if (currentChallengeIdx < challenges.length - 1) {
          setCurrentChallengeIdx(prev => prev + 1);
          setFeedbackMsg(null);
        } else {
          setChallengeCompleted(true);
          playSound('fanfare', soundEnabled);
          completeActivity('matematik', topic.id, 'interactiveLab', newScore, challenges.length);
        }
      }, 1400);
    } else {
      playSound('wrong', soundEnabled);
      setFeedbackMsg({
        type: 'error',
        text: `Henüz olmadı. Şu anki açın: ${angle}°. İpucu: ${currentChallenge.hint}`
      });
    }
  };

  return (
    <div className="lab-container animate-fadeIn">
      {/* Lab Header */}
      <div className="lab-header">
        <div className="lab-title-box">
          <div className="lab-icon-badge">📐</div>
          <div>
            <h2 className="lab-main-title">İnteraktif Açıölçer (İletki) Laboratuvarı</h2>
            <p className="lab-subtitle">Açıları serbestçe sürükle, dereceyi canlı ölç ve açı ilişkilerini görsel olarak keşfet!</p>
          </div>
        </div>

        {/* Sub-modes navigation tabs */}
        <div className="lab-subtabs">
          <button 
            className={`lab-subtab-btn ${activeSubTab === 'protractor' ? 'active' : ''}`}
            onClick={() => { setActiveSubTab('protractor'); playSound('click', soundEnabled); }}
          >
            <span>🧭 İletki & Açı Çeşitleri</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeSubTab === 'intersecting' ? 'active' : ''}`}
            onClick={() => { setActiveSubTab('intersecting'); playSound('click', soundEnabled); }}
          >
            <span>✂️ Ters & Komşu Açılar</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeSubTab === 'challenges' ? 'active' : ''}`}
            onClick={() => { setActiveSubTab('challenges'); playSound('click', soundEnabled); }}
          >
            <span>🎯 Açı Avcısı Görevleri</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Protractor & Complementary / Supplementary */}
      {activeSubTab === 'protractor' && (
        <div className="lab-workspace">
          {/* Main Visual Protractor Canvas */}
          <div className="lab-canvas-card">
            <div className="canvas-badge-overlay">
              <span className="live-angle-pill" style={{ backgroundColor: currentType.color }}>
                {angle}° — {currentType.name}
              </span>
            </div>

            <svg 
              ref={svgRef}
              viewBox="0 0 500 320" 
              className="protractor-svg"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              style={{ touchAction: 'none', cursor: 'grab' }}
            >
              <defs>
                <radialGradient id="protractorGlass" cx="50%" cy="100%" r="90%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                  <stop offset="70%" stopColor="#E0F2FE" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.3" />
                </radialGradient>
                <linearGradient id="angleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={currentType.color} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={currentType.color} stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="tumlerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="butunlerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Shaded Angle Area */}
              {angle > 0 && (
                <path d={getArcPath(0, angle, radius - 5)} fill="url(#angleGradient)" />
              )}

              {/* Show Complementary Arc (Tümler) if toggled and angle < 90 */}
              {showTümler && angle < 90 && (
                <path d={getArcPath(angle, 90, radius - 20)} fill="url(#tumlerGradient)" stroke="#D97706" strokeDasharray="3 3" />
              )}

              {/* Show Supplementary Arc (Bütünler) if toggled and angle < 180 */}
              {showBütünler && angle < 180 && (
                <path d={getArcPath(angle, 180, radius - 35)} fill="url(#butunlerGradient)" stroke="#7C3AED" strokeDasharray="3 3" />
              )}

              {/* Protractor Body (Semi-circle) */}
              <path 
                d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy} Z`} 
                fill="url(#protractorGlass)" 
                stroke="#0284C7" 
                strokeWidth="2.5" 
              />

              {/* Inner cutout semi-circle */}
              <path 
                d={`M ${cx - 60} ${cy} A 60 60 0 0 1 ${cx + 60} ${cy} Z`} 
                fill="#FFFFFF" 
                fillOpacity="0.8" 
                stroke="#94A3B8" 
                strokeWidth="1" 
              />

              {/* Protractor Tick Marks & Degree Numbers */}
              {Array.from({ length: 181 }).map((_, deg) => {
                if (deg % 5 !== 0) return null;
                const isTen = deg % 10 === 0;
                const tickLen = isTen ? 14 : 7;
                const tickRad = (deg * Math.PI) / 180;
                const x1 = cx + radius * Math.cos(tickRad);
                const y1 = cy - radius * Math.sin(tickRad);
                const x2 = cx + (radius - tickLen) * Math.cos(tickRad);
                const y2 = cy - (radius - tickLen) * Math.sin(tickRad);

                const textRad = (deg * Math.PI) / 180;
                const tx = cx + (radius - 24) * Math.cos(textRad);
                const ty = cy - (radius - 24) * Math.sin(textRad) + 3;

                return (
                  <g key={deg}>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#334155" strokeWidth={isTen ? 1.5 : 0.8} />
                    {isTen && deg >= 0 && deg <= 180 && (
                      <text 
                        x={tx} 
                        y={ty} 
                        fontSize="9" 
                        fontWeight="600" 
                        fill="#1E293B" 
                        textAnchor="middle"
                      >
                        {deg}°
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Baseline (0° axis) */}
              <line x1={cx - radius} y1={cy} x2={cx + radius} y2={cy} stroke="#1E293B" strokeWidth="2" />
              {/* Baseline Right Arm Arrow */}
              <line x1={cx} y1={cy} x2={cx + armLength} y2={cy} stroke="#1E293B" strokeWidth="3" />
              <circle cx={cx + armLength} cy={cy} r="4" fill="#1E293B" />

              {/* 90° reference dashed line */}
              <line x1={cx} y1={cy} x2={cx} y2={cy - radius} stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
              {/* 90° square symbol if exactly 90 */}
              {angle === 90 && (
                <rect x={cx} y={cy - 18} width="18" height="18" fill="none" stroke="#2563EB" strokeWidth="2" />
              )}

              {/* Dynamic Rotating Arm */}
              <line x1={cx} y1={cy} x2={armX} y2={armY} stroke={currentType.color} strokeWidth="3.5" />
              
              {/* Draggable Handle Knob */}
              <circle 
                cx={armX} 
                cy={armY} 
                r="12" 
                fill={currentType.color} 
                stroke="#FFFFFF" 
                strokeWidth="3" 
                className="draggable-knob"
              />
              <circle cx={armX} cy={armY} r="4" fill="#FFFFFF" />

              {/* Center Pivot Point O */}
              <circle cx={cx} cy={cy} r="6" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2" />
              <text x={cx} y={cy + 18} fontSize="11" fontWeight="bold" fill="#475569" textAnchor="middle">Köşe (O)</text>
            </svg>

            <p className="canvas-hint-text">
              👆 <strong>İletkinin kolunu tut ve döndür!</strong> Veya aşağıdaki hazır açılara tıkla.
            </p>
          </div>

          {/* Controls & Real-time Mathematical Analysis Card */}
          <div className="lab-controls-card">
            {/* Quick Angle Preset Buttons */}
            <div className="preset-buttons-grid">
              <span className="control-label">Hızlı Açı Seç:</span>
              <div className="presets-row">
                {[30, 45, 60, 90, 120, 135, 150, 180].map(deg => (
                  <button
                    key={deg}
                    onClick={() => { setAngle(deg); playSound('click', soundEnabled); }}
                    className={`btn-preset-deg ${angle === deg ? 'active' : ''}`}
                  >
                    {deg}° {deg === 90 ? '📐' : deg === 180 ? '📏' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="slider-control-group">
              <div className="slider-header-row">
                <span className="control-label">Hassas Açı Ayarı:</span>
                <span className="current-angle-val" style={{ color: currentType.color }}>
                  {angle}°
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="180" 
                value={angle} 
                onChange={(e) => setAngle(Number(e.target.value))}
                className="angle-range-slider"
              />
            </div>

            {/* Live Pedagogical Analysis Box */}
            <div className="analysis-box">
              <h4 className="analysis-title">📊 Anlık Açı Analizi</h4>
              
              <div className="analysis-item">
                <span className="item-label">Açı Türü:</span>
                <span className="item-value" style={{ color: currentType.color, fontWeight: '700' }}>
                  {currentType.name}
                </span>
              </div>

              <div className="analysis-item">
                <span className="item-label">Tanım ve Kural:</span>
                <span className="item-desc">
                  {angle < 90 && "Ölçüsü 0° ile 90° arasında olduğu için DAR açıdır."}
                  {angle === 90 && "Ölçüsü tam 90° olduğu için DİK açıdır (dik doğrular oluşturur)."}
                  {angle > 90 && angle < 180 && "Ölçüsü 90° ile 180° arasında olduğu için GENİŞ açıdır."}
                  {angle === 180 && "Ölçüsü tam 180° olduğu için DOĞRU açıdır (düz bir çizgidir)."}
                </span>
              </div>

              {/* Tümler Açı Modülü */}
              <div className="analysis-calc-card tümler">
                <div className="calc-header">
                  <span>🟡 <strong>Tümler Açısı (90° ye tamamlayan):</strong></span>
                  <button 
                    onClick={() => setShowTümler(!showTümler)} 
                    className={`btn-toggle-arc ${showTümler ? 'on' : ''}`}
                  >
                    <Eye size={13} /> {showTümler ? 'Gizle' : 'İletkide Gör'}
                  </button>
                </div>
                {angle <= 90 ? (
                  <p className="calc-math">
                    90° - {angle}° = <strong className="highlight-math">{90 - angle}°</strong>
                  </p>
                ) : (
                  <p className="calc-warn">Açı 90° den büyük olduğu için tümleri yoktur (yalnızca dar açıların tümleri olur).</p>
                )}
              </div>

              {/* Bütünler Açı Modülü */}
              <div className="analysis-calc-card bütünler">
                <div className="calc-header">
                  <span>🟣 <strong>Bütünler Açısı (180° ye tamamlayan):</strong></span>
                  <button 
                    onClick={() => setShowBütünler(!showBütünler)} 
                    className={`btn-toggle-arc ${showBütünler ? 'on' : ''}`}
                  >
                    <Eye size={13} /> {showBütünler ? 'Gizle' : 'İletkide Gör'}
                  </button>
                </div>
                {angle <= 180 ? (
                  <p className="calc-math">
                    180° - {angle}° = <strong className="highlight-math">{180 - angle}°</strong>
                  </p>
                ) : (
                  <p className="calc-warn">Açı 180° den büyük olamaz.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Intersecting Lines & Opposite (Ters) Angles */}
      {activeSubTab === 'intersecting' && (
        <div className="lab-workspace">
          <div className="lab-canvas-card">
            <h3 className="section-subtitle">Kesişen İki Doğru ve Ters Açılar Simülatörü</h3>
            <p className="text-muted-sm">İki doğru kesiştiğinde zıt yönlü açılara <strong>Ters Açılar</strong> denir ve ölçüleri HER ZAMAN eşittir!</p>

            <svg viewBox="0 0 500 280" className="intersecting-svg">
              {/* Line 1 (Horizontal) */}
              <line x1="40" y1="140" x2="460" y2="140" stroke="#1E293B" strokeWidth="3" />
              <text x="475" y="145" fontSize="12" fontWeight="bold" fill="#64748B">d₁</text>

              {/* Line 2 (Rotating by angle) */}
              {(() => {
                const len = 190;
                const r = (angle * Math.PI) / 180;
                const x1 = 250 - len * Math.cos(r);
                const y1 = 140 + len * Math.sin(r);
                const x2 = 250 + len * Math.cos(r);
                const y2 = 140 - len * Math.sin(r);
                return (
                  <>
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3B82F6" strokeWidth="3" />
                    <text x={x2 + 10} y={y2} fontSize="12" fontWeight="bold" fill="#3B82F6">d₂</text>
                  </>
                );
              })()}

              {/* Intersection Point */}
              <circle cx="250" cy="140" r="5" fill="#EF4444" />
              <text x="250" y="160" fontSize="11" fontWeight="bold" fill="#EF4444" textAnchor="middle">Kesişim Noktası</text>

              {/* 4 Angle Labels */}
              {/* Right angle (angle) */}
              <text x="320" y="125" fontSize="14" fontWeight="bold" fill="#10B981">A: {angle}°</text>
              {/* Left angle (opposite to A, also angle) */}
              <text x="140" y="165" fontSize="14" fontWeight="bold" fill="#10B981">C: {angle}° (Ters Açı)</text>
              
              {/* Top angle (180 - angle) */}
              <text x="220" y="65" fontSize="14" fontWeight="bold" fill="#8B5CF6">B: {180 - angle}°</text>
              {/* Bottom angle (opposite to B, also 180 - angle) */}
              <text x="220" y="225" fontSize="14" fontWeight="bold" fill="#8B5CF6">D: {180 - angle}° (Ters Açı)</text>
            </svg>

            <div className="slider-control-group mt-3">
              <span className="control-label">Kesişme Açısını Değiştir: {angle}°</span>
              <input 
                type="range" 
                min="20" 
                max="160" 
                value={angle} 
                onChange={(e) => setAngle(Number(e.target.value))}
                className="angle-range-slider"
              />
            </div>
          </div>

          <div className="lab-controls-card">
            <h4 className="analysis-title">✨ Ters ve Komşu Açılar Kuralı</h4>
            
            <div className="rule-card green-border">
              <h5>1. Ters Açılar Eşittir (A = C ve B = D)</h5>
              <p>Karşılıklı duran açılar birbirinin tersidir. Ölçüleri daima birbirine eşittir: <strong>{angle}° = {angle}°</strong> ve <strong>{180 - angle}° = {180 - angle}°</strong>.</p>
            </div>

            <div className="rule-card purple-border">
              <h5>2. Komşu Açılar Bütünlerdir (A + B = 180°)</h5>
              <p>Yan yana duran ve düz bir doğru oluşturan komşu açıların toplamı daima 180 derecedir:</p>
              <div className="highlight-pill">
                {angle}° + {180 - angle}° = <strong>180° (Doğru Açı)</strong>
              </div>
            </div>

            <div className="real-life-callout">
              <span>✂️ <strong>Günlük Hayat Örneği:</strong> Bir makasın kollarını ne kadar açarsanız açın, karşılıklı iki bıçağın arasındaki açı ile parmak halkalarının arasındaki açı hep birbirine eşittir!</span>
            </div>
          </div>
        </div>
      )}

      {/* Mode 3: Angle Hunter Challenge (Game Mode) */}
      {activeSubTab === 'challenges' && (
        <div className="lab-workspace">
          {!challengeCompleted ? (
            <>
              <div className="lab-canvas-card">
                <div className="challenge-mission-banner">
                  <div className="mission-step-indicator">
                    Görev {currentChallengeIdx + 1} / {challenges.length}
                  </div>
                  <h3 className="mission-text">{challenges[currentChallengeIdx].instruction}</h3>
                </div>

                {/* Interactive Protractor for Challenge */}
                <div className="canvas-badge-overlay">
                  <span className="live-angle-pill" style={{ backgroundColor: currentType.color }}>
                    Şu anki Açın: {angle}°
                  </span>
                </div>

                <svg 
                  ref={svgRef}
                  viewBox="0 0 500 300" 
                  className="protractor-svg"
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  style={{ touchAction: 'none', cursor: 'grab' }}
                >
                  <path 
                    d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy} Z`} 
                    fill="#F8FAFC" 
                    stroke="#0284C7" 
                    strokeWidth="2" 
                  />
                  {angle > 0 && (
                    <path d={getArcPath(0, angle, radius - 5)} fill={currentType.color} fillOpacity="0.35" />
                  )}
                  <line x1={cx} y1={cy} x2={cx + armLength} y2={cy} stroke="#1E293B" strokeWidth="3" />
                  <line x1={cx} y1={cy} x2={armX} y2={armY} stroke={currentType.color} strokeWidth="4" />
                  <circle cx={armX} cy={armY} r="14" fill={currentType.color} stroke="#FFFFFF" strokeWidth="3" />
                  <circle cx={cx} cy={cy} r="6" fill="#1E293B" />
                </svg>

                {/* Slider */}
                <input 
                  type="range" 
                  min="0" 
                  max="180" 
                  value={angle} 
                  onChange={(e) => setAngle(Number(e.target.value))}
                  className="angle-range-slider mt-2"
                />

                {feedbackMsg && (
                  <div className={`challenge-feedback-box ${feedbackMsg.type}`}>
                    {feedbackMsg.text}
                  </div>
                )}
              </div>

              <div className="lab-controls-card">
                <h4 className="analysis-title">🎯 Görev Kontrol Masası</h4>
                <p className="text-muted-sm">Açıölçerin kolunu hedeflenen dereceye getir ve kontrol butonuna bas.</p>

                <div className="action-button-row mt-4">
                  <button onClick={checkCurrentChallenge} className="btn-action-primary">
                    <CheckCircle2 size={18} />
                    <span>Açıyı Kontrol Et</span>
                  </button>
                </div>

                <div className="challenge-hint-box">
                  <HelpCircle size={16} />
                  <span><strong>İpucu:</strong> {challenges[currentChallengeIdx].hint}</span>
                </div>
              </div>
            </>
          ) : (
            <div className="challenge-success-screen">
              <div className="success-badge-celebration">🏆</div>
              <h2>Tebrikler! Açı Avcısı Görevlerini Tamamladın!</h2>
              <p>Açıölçer kullanma, dar/dik/geniş açıları belirleme, tümler ve bütünler açı hesaplamalarını başarıyla gerçekleştirdin.</p>
              <div className="earned-rewards-pill">
                <Award size={20} />
                <span>+50 XP Kazandın!</span>
              </div>
              <button onClick={() => { setActiveSubTab('protractor'); setCurrentChallengeIdx(0); setChallengeCompleted(false); }} className="btn-action-secondary">
                <RefreshCw size={16} />
                <span>Yeniden Keşfet</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
