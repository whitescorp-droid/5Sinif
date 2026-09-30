import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Sparkles, RefreshCw, CheckCircle2, Award, 
  HelpCircle, Move, BookOpen, Layers
} from 'lucide-react';

export const TrianglePolygonsLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  const [activeTab, setActiveTab] = useState('triangle'); // 'triangle', 'tearProof', 'polygons', 'ataturk'
  
  // Triangle Vertices (A, B, C) in SVG viewBox 0 0 500 350
  const [points, setPoints] = useState({
    A: { x: 250, y: 70 },
    B: { x: 100, y: 280 },
    C: { x: 400, y: 280 }
  });

  const [activeDraggingPoint, setActiveDraggingPoint] = useState(null);
  const [showTearProof, setShowTearProof] = useState(false);

  // Polygon lab state
  const [selectedPolySides, setSelectedPolySides] = useState(3);
  const [showDiagonals, setShowDiagonals] = useState(true);

  // Calculate side lengths
  const dist = (p1, p2) => Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  const sideC = dist(points.A, points.B); // c is opposite to C
  const sideA = dist(points.B, points.C); // a is opposite to A
  const sideB = dist(points.C, points.A); // b is opposite to B

  // Scale pixels to approximate cm (e.g. 25px = 1cm)
  const pxToCm = 25;
  const lenA = (sideA / pxToCm).toFixed(1);
  const lenB = (sideB / pxToCm).toFixed(1);
  const lenC = (sideC / pxToCm).toFixed(1);

  // Calculate internal angles using Law of Cosines: cos(A) = (b^2 + c^2 - a^2) / (2bc)
  const getAngleDeg = (a, b, c) => {
    let cosVal = (b * b + c * c - a * a) / (2 * b * c);
    cosVal = Math.max(-1, Math.min(1, cosVal));
    return (Math.acos(cosVal) * 180) / Math.PI;
  };

  const rawAngleA = getAngleDeg(sideA, sideB, sideC);
  const rawAngleB = getAngleDeg(sideB, sideA, sideC);
  const rawAngleC = getAngleDeg(sideC, sideA, sideB);

  // Round neatly so sum always strictly equals 180
  const roundA = Math.round(rawAngleA);
  const roundB = Math.round(rawAngleB);
  const roundC = 180 - (roundA + roundB);

  // Determine angle classification
  const maxAngle = Math.max(roundA, roundB, roundC);
  let angleType = 'Dar Açılı Üçgen';
  let angleTypeColor = '#10B981';
  if (roundA === 90 || roundB === 90 || roundC === 90) {
    angleType = 'Dik Açılı Üçgen (90°)';
    angleTypeColor = '#3B82F6';
  } else if (maxAngle > 90) {
    angleType = 'Geniş Açılı Üçgen (>90°)';
    angleTypeColor = '#F59E0B';
  }

  // Determine side classification
  const diffAB = Math.abs(sideA - sideB);
  const diffBC = Math.abs(sideB - sideC);
  const diffCA = Math.abs(sideC - sideA);
  const tolerance = 12;

  let sideType = 'Çeşitkenar Üçgen';
  if (diffAB < tolerance && diffBC < tolerance && diffCA < tolerance) {
    sideType = 'Eşkenar Üçgen (Tüm kenarlar eşit)';
  } else if (diffAB < tolerance || diffBC < tolerance || diffCA < tolerance) {
    sideType = 'İkizkenar Üçgen (İki kenar eşit)';
  }

  // Dragging logic
  const svgRef = useRef(null);

  const handlePointerDown = (pointKey) => {
    setActiveDraggingPoint(pointKey);
  };

  const handlePointerMove = (e) => {
    if (!activeDraggingPoint || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    if (clientX === undefined || clientY === undefined) return;

    const scaleX = 500 / rect.width;
    const scaleY = 350 / rect.height;
    let newX = Math.round((clientX - rect.left) * scaleX);
    let newY = Math.round((clientY - rect.top) * scaleY);

    // Keep within bounds
    newX = Math.max(40, Math.min(460, newX));
    newY = Math.max(40, Math.min(320, newY));

    setPoints(prev => ({
      ...prev,
      [activeDraggingPoint]: { x: newX, y: newY }
    }));
  };

  const handlePointerUp = () => {
    if (activeDraggingPoint) {
      setActiveDraggingPoint(null);
      playSound('click', soundEnabled);
    }
  };

  // Preset snaps
  const snapToEquilateral = () => {
    setPoints({
      A: { x: 250, y: 75 },
      B: { x: 130, y: 283 },
      C: { x: 370, y: 283 }
    });
    playSound('correct', soundEnabled);
  };

  const snapToRightTriangle = () => {
    setPoints({
      A: { x: 120, y: 80 },
      B: { x: 120, y: 280 },
      C: { x: 380, y: 280 }
    });
    playSound('correct', soundEnabled);
  };

  const snapToIsosceles = () => {
    setPoints({
      A: { x: 250, y: 60 },
      B: { x: 110, y: 280 },
      C: { x: 390, y: 280 }
    });
    playSound('correct', soundEnabled);
  };

  const snapToObtuse = () => {
    setPoints({
      A: { x: 340, y: 170 },
      B: { x: 80, y: 280 },
      C: { x: 420, y: 280 }
    });
    playSound('correct', soundEnabled);
  };

  // Polygon points & diagonals calculation
  const getPolygonVertices = (n) => {
    const polyCx = 250;
    const polyCy = 175;
    const polyRadius = 120;
    const verts = [];
    for (let i = 0; i < n; i++) {
      const angleR = (i * 2 * Math.PI) / n - Math.PI / 2;
      verts.push({
        x: Math.round(polyCx + polyRadius * Math.cos(angleR)),
        y: Math.round(polyCy + polyRadius * Math.sin(angleR)),
        label: String.fromCharCode(65 + i)
      });
    }
    return verts;
  };

  const currentPolyVerts = getPolygonVertices(selectedPolySides);

  // Generate diagonals: any pair of vertices (i, j) where j > i and not adjacent
  const getDiagonals = (verts) => {
    const diags = [];
    const n = verts.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const isNeighbor = j === i + 1 || (i === 0 && j === n - 1);
        if (!isNeighbor) {
          diags.push({ from: verts[i], to: verts[j], key: `${i}-${j}` });
        }
      }
    }
    return diags;
  };

  const diagonalsList = getDiagonals(currentPolyVerts);

  return (
    <div className="lab-container animate-fadeIn">
      {/* Header */}
      <div className="lab-header">
        <div className="lab-title-box">
          <div className="lab-icon-badge">📐</div>
          <div>
            <h2 className="lab-main-title">Üçgen & Çokgen Atölyesi (180° Laboratuvarı)</h2>
            <p className="lab-subtitle">Köşeleri serbestçe sürükle, iç açıların toplamının hep 180° kaldığını ve üçgen türlerini kendin keşfet!</p>
          </div>
        </div>

        {/* Sub-tabs */}
        <div className="lab-subtabs">
          <button 
            className={`lab-subtab-btn ${activeTab === 'triangle' ? 'active' : ''}`}
            onClick={() => { setActiveTab('triangle'); playSound('click', soundEnabled); }}
          >
            <span>🔺 Dinamik Üçgen & 180° Kuralı</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'tearProof' ? 'active' : ''}`}
            onClick={() => { setActiveTab('tearProof'); playSound('click', soundEnabled); }}
          >
            <span>✂️ Köşeleri Birleştir (180° İspatı)</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'polygons' ? 'active' : ''}`}
            onClick={() => { setActiveTab('polygons'); playSound('click', soundEnabled); }}
          >
            <span>🔷 Çokgenler & Köşegenler</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'ataturk' ? 'active' : ''}`}
            onClick={() => { setActiveTab('ataturk'); playSound('click', soundEnabled); }}
          >
            <span>🇹🇷 Atatürk'ün Geometri Kitabı</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Dynamic Triangle & 180° rule */}
      {activeTab === 'triangle' && (
        <div className="lab-workspace">
          {/* Canvas with draggable vertices */}
          <div className="lab-canvas-card">
            {/* Top Live Classification Bar */}
            <div className="canvas-badge-overlay triangle-badges">
              <span className="live-angle-pill" style={{ backgroundColor: angleTypeColor }}>
                {angleType}
              </span>
              <span className="live-angle-pill bg-slate">
                {sideType}
              </span>
            </div>

            <svg 
              ref={svgRef}
              viewBox="0 0 500 350" 
              className="triangle-svg"
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              style={{ touchAction: 'none' }}
            >
              <defs>
                <linearGradient id="triangleFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* Grid Background lines */}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 40} x2="500" y2={i * 40} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              {Array.from({ length: 13 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="350" stroke="#F1F5F9" strokeWidth="1" />
              ))}

              {/* Triangle Body */}
              <polygon 
                points={`${points.A.x},${points.A.y} ${points.B.x},${points.B.y} ${points.C.x},${points.C.y}`} 
                fill="url(#triangleFill)" 
                stroke="#1E40AF" 
                strokeWidth="3.5" 
              />

              {/* Side Length Labels */}
              {/* Side c (AB) */}
              <text 
                x={(points.A.x + points.B.x) / 2 - 25} 
                y={(points.A.y + points.B.y) / 2} 
                fontSize="11" 
                fontWeight="700" 
                fill="#475569"
              >
                c: {lenC} cm
              </text>
              {/* Side a (BC) */}
              <text 
                x={(points.B.x + points.C.x) / 2} 
                y={(points.B.y + points.C.y) / 2 + 20} 
                fontSize="11" 
                fontWeight="700" 
                fill="#475569" 
                textAnchor="middle"
              >
                a: {lenA} cm
              </text>
              {/* Side b (CA) */}
              <text 
                x={(points.C.x + points.A.x) / 2 + 15} 
                y={(points.C.y + points.A.y) / 2} 
                fontSize="11" 
                fontWeight="700" 
                fill="#475569"
              >
                b: {lenB} cm
              </text>

              {/* Angle Arc Wedges and Labels */}
              {/* Corner A */}
              <circle cx={points.A.x} cy={points.A.y} r="22" fill="#3B82F6" fillOpacity="0.2" />
              <text x={points.A.x} y={points.A.y - 12} fontSize="13" fontWeight="800" fill="#1D4ED8" textAnchor="middle">
                Â: {roundA}°
              </text>

              {/* Corner B */}
              <circle cx={points.B.x} cy={points.B.y} r="22" fill="#10B981" fillOpacity="0.2" />
              <text x={points.B.x - 15} y={points.B.y + 22} fontSize="13" fontWeight="800" fill="#047857">
                B̂: {roundB}°
              </text>

              {/* Corner C */}
              <circle cx={points.C.x} cy={points.C.y} r="22" fill="#F59E0B" fillOpacity="0.2" />
              <text x={points.C.x + 10} y={points.C.y + 22} fontSize="13" fontWeight="800" fill="#B45309">
                Ĉ: {roundC}°
              </text>

              {/* Draggable Vertex Knobs */}
              {['A', 'B', 'C'].map((k) => (
                <g 
                  key={k} 
                  onPointerDown={() => handlePointerDown(k)}
                  style={{ cursor: 'grab' }}
                >
                  <circle 
                    cx={points[k].x} 
                    cy={points[k].y} 
                    r="15" 
                    fill="#FFFFFF" 
                    stroke="#2563EB" 
                    strokeWidth="3.5" 
                    className="draggable-knob"
                  />
                  <circle cx={points[k].x} cy={points[k].y} r="6" fill="#2563EB" />
                  <text 
                    x={points[k].x} 
                    y={points[k].y + 4} 
                    fontSize="10" 
                    fontWeight="bold" 
                    fill="#FFFFFF" 
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {k}
                  </text>
                </g>
              ))}
            </svg>

            <p className="canvas-hint-text">
              👆 <strong>Köşelerdeki (A, B, C) noktalarını tut ve çek!</strong> İç açılar toplamı her zaman tam 180° kalır.
            </p>
          </div>

          {/* Controls & Metrics */}
          <div className="lab-controls-card">
            {/* 180 Degree Equation Box */}
            <div className="equation-highlight-box">
              <span className="box-tag">TÜM ÜÇGENLER İÇİN ALTIN KURAL</span>
              <h3 className="equation-math">
                s(Â) + s(B̂) + s(Ĉ) = <strong>180°</strong>
              </h3>
              <div className="equation-breakdown">
                <span className="badge-angle a">{roundA}°</span> + 
                <span className="badge-angle b">{roundB}°</span> + 
                <span className="badge-angle c">{roundC}°</span> = 
                <span className="badge-total">180°</span>
              </div>
            </div>

            {/* Quick Shape Snap Presets */}
            <div className="preset-buttons-grid mt-3">
              <span className="control-label">Özel Üçgen Şablonları Dene:</span>
              <div className="presets-row flex-wrap">
                <button onClick={snapToEquilateral} className="btn-preset-snap">
                  📐 Eşkenar Üçgen (Her açı 60°)
                </button>
                <button onClick={snapToRightTriangle} className="btn-preset-snap">
                  📐 Dik Açılı Üçgen (90°)
                </button>
                <button onClick={snapToIsosceles} className="btn-preset-snap">
                  📐 İkizkenar Üçgen
                </button>
                <button onClick={snapToObtuse} className="btn-preset-snap">
                  📐 Geniş Açılı Üçgen (&gt;90°)
                </button>
              </div>
            </div>

            {/* Educational takeaway cards */}
            <div className="learning-takeaway-card">
              <h4>💡 Maarif Modeli Çıkarımı:</h4>
              <p>• Bir üçgende en fazla <strong>1 tane dik açı</strong> veya <strong>1 tane geniş açı</strong> bulunabilir. Asla 2 dik açı veya 2 geniş açı olamaz!</p>
              <p>• Eşkenar üçgen aynı zamanda düzgün bir çokgendir ve <strong>bütün açıları 60°</strong> olup daima dar açılıdır.</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: "Köşeleri Yırt & Birleştir" (180° Proof Visual) */}
      {activeTab === 'tearProof' && (
        <div className="lab-workspace">
          <div className="lab-canvas-card">
            <h3 className="section-subtitle">Kağıt Katlama & Yırtma Deneyi: Neden 180°?</h3>
            <p className="text-muted-sm">Üçgenin 3 köşesindeki açıları kesip yan yana dizdiğimizde, tam bir <strong>DOĞRU AÇI (180°)</strong> oluşturur!</p>

            <svg viewBox="0 0 500 280" className="tear-proof-svg">
              {/* Flat base horizontal line */}
              <line x1="50" y1="180" x2="450" y2="180" stroke="#1E293B" strokeWidth="3" />
              <text x="250" y="220" fontSize="13" fontWeight="bold" fill="#1E293B" textAnchor="middle">
                Düz Çizgi = Doğru Açı = 180°
              </text>

              {/* Three assembled angle wedges */}
              {/* Wedge 1: Angle B (green) on the left */}
              <path 
                d="M 250 180 L 180 180 A 70 70 0 0 1 210 120 Z" 
                fill="#10B981" 
                fillOpacity="0.8" 
                stroke="#047857" 
                strokeWidth="2" 
              />
              <text x="200" y="165" fontSize="12" fontWeight="bold" fill="#FFFFFF">B̂</text>

              {/* Wedge 2: Angle A (blue) in the middle */}
              <path 
                d="M 250 180 L 210 120 A 70 70 0 0 1 290 120 Z" 
                fill="#3B82F6" 
                fillOpacity="0.8" 
                stroke="#1D4ED8" 
                strokeWidth="2" 
              />
              <text x="250" y="145" fontSize="12" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">Â</text>

              {/* Wedge 3: Angle C (orange) on the right */}
              <path 
                d="M 250 180 L 290 120 A 70 70 0 0 1 320 180 Z" 
                fill="#F59E0B" 
                fillOpacity="0.8" 
                stroke="#B45309" 
                strokeWidth="2" 
              />
              <text x="295" y="165" fontSize="12" fontWeight="bold" fill="#FFFFFF">Ĉ</text>

              {/* Center point mark */}
              <circle cx="250" cy="180" r="5" fill="#EF4444" />
              <text x="250" y="195" fontSize="10" fill="#EF4444" textAnchor="middle">Ortak Tepe</text>

              {/* 180 degree outer arc */}
              <path 
                d="M 160 180 A 90 90 0 0 1 340 180" 
                fill="none" 
                stroke="#7C3AED" 
                strokeWidth="2.5" 
                strokeDasharray="4 4" 
              />
              <text x="250" y="80" fontSize="14" fontWeight="800" fill="#7C3AED" textAnchor="middle">
                Â + B̂ + Ĉ = 180°
              </text>
            </svg>

            <div className="tear-instruction-box">
              <span className="step-badge">Deney Adımları:</span>
              <ol className="experiment-steps">
                <li>Bir kağıda herhangi bir üçgen çiz ve makasla kes.</li>
                <li>Üç köşesini (Â, B̂, Ĉ) makasla dikkatlice kopar.</li>
                <li>Köşeleri düz bir çizgi üzerinde sırayla yan yana yapıştır.</li>
                <li>Gördüğün gibi aralarında hiçbir boşluk kalmadan tam bir <strong>Doğru Açı (180°)</strong> oluştururlar!</li>
              </ol>
            </div>
          </div>

          <div className="lab-controls-card">
            <h4 className="analysis-title">✨ Neden Bu Bilgi Çok Önemli?</h4>
            <div className="rule-card blue-border">
              <h5>Bilinmeyen Açıyı Kolayca Bulma</h5>
              <p>Bir üçgende iki açıyı biliyorsan, üçüncü açıyı bulmak çocuk oyuncağıdır:</p>
              <div className="example-math-pill">
                Örnek: Açılar 70° ve 50° ise:<br/>
                70° + 50° = 120°<br/>
                Üçüncü Açı: 180° - 120° = <strong>60°</strong>
              </div>
            </div>

            <div className="rule-card orange-border">
              <h5>Eşkenar Üçgenin Sırrı</h5>
              <p>Eşkenar üçgenin 3 açısı da birbirine eşittir:</p>
              <div className="example-math-pill">
                180° ÷ 3 = <strong>60°</strong> (Her iç açı mutlaka 60° dir!)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Polygons & Diagonals (Çokgenler ve Köşegenler) */}
      {activeTab === 'polygons' && (
        <div className="lab-workspace">
          <div className="lab-canvas-card">
            <div className="poly-side-selector">
              <span className="control-label">Çokgen Seç:</span>
              <div className="presets-row">
                {[
                  { n: 3, name: 'Üçgen' },
                  { n: 4, name: 'Dörtgen' },
                  { n: 5, name: 'Beşgen' },
                  { n: 6, name: 'Altıgen' }
                ].map(p => (
                  <button
                    key={p.n}
                    onClick={() => { setSelectedPolySides(p.n); playSound('click', soundEnabled); }}
                    className={`btn-preset-snap ${selectedPolySides === p.n ? 'active' : ''}`}
                  >
                    {p.name} ({p.n} Kenar)
                  </button>
                ))}
              </div>
            </div>

            <svg viewBox="0 0 500 320" className="polygon-svg">
              {/* Polygon outline */}
              <polygon 
                points={currentPolyVerts.map(v => `${v.x},${v.y}`).join(' ')} 
                fill="#EFF6FF" 
                stroke="#2563EB" 
                strokeWidth="3.5" 
              />

              {/* Diagonals (dashed lines) */}
              {showDiagonals && diagonalsList.map(diag => (
                <line 
                  key={diag.key}
                  x1={diag.from.x} 
                  y1={diag.from.y} 
                  x2={diag.to.x} 
                  y2={diag.to.y} 
                  stroke="#EF4444" 
                  strokeWidth="2.5" 
                  strokeDasharray="5 4" 
                />
              ))}

              {/* Vertices */}
              {currentPolyVerts.map(v => (
                <g key={v.label}>
                  <circle cx={v.x} cy={v.y} r="12" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="2.5" />
                  <text x={v.x} y={v.y + 4} fontSize="11" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                    {v.label}
                  </text>
                </g>
              ))}
            </svg>

            <div className="poly-bottom-bar">
              <button 
                onClick={() => setShowDiagonals(!showDiagonals)} 
                className={`btn-toggle-diagonals ${showDiagonals ? 'on' : ''}`}
              >
                {showDiagonals ? '🔴 Köşegenleri Gizle' : '🔴 Köşegenleri Çiz'}
              </button>
            </div>
          </div>

          <div className="lab-controls-card">
            <h4 className="analysis-title">📊 Çokgen Özellik Tablosu</h4>
            
            <div className="poly-stat-grid">
              <div className="stat-card">
                <span className="stat-label">Kenar Sayısı:</span>
                <span className="stat-val">{selectedPolySides}</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Köşe Sayısı:</span>
                <span className="stat-val">{selectedPolySides}</span>
              </div>
              <div className="stat-card highlight">
                <span className="stat-label">Köşegen Sayısı:</span>
                <span className="stat-val text-red">{diagonalsList.length}</span>
              </div>
            </div>

            {selectedPolySides === 3 ? (
              <div className="critical-insight-card red">
                <h5>⚠️ Çok Önemli Kural:</h5>
                <p><strong>ÜÇGENİN KÖŞEGENİ YOKTUR (0 TANE)!</strong></p>
                <p>Çünkü köşegen, komşu (ardışık) <em>olmayan</em> iki köşeyi birleştirir. Üçgende her köşe birbiriyle komşudur, bu yüzden köşegen çizilemez!</p>
              </div>
            ) : (
              <div className="critical-insight-card green">
                <h5>✨ Köşegen Nedir?</h5>
                <p>Çokgende yan yana olmayan (ardışık olmayan) iki köşeyi içeriden birleştiren doğru parçasıdır. Kırmızı kesikli çizgiler köşegenleri gösterir ({diagonalsList.length} adet).</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 4: Atatürk's Geometri Kitabı */}
      {activeTab === 'ataturk' && (
        <div className="lab-workspace single-column">
          <div className="ataturk-book-card">
            <div className="ataturk-hero-header">
              <div className="ataturk-icon">🇹🇷</div>
              <div>
                <h3>Gazi Mustafa Kemal Atatürk ve Geometri Kitabı (1937)</h3>
                <p>Cumhuriyetimizin kurucusu Atatürk, 1937 yılında bizzat yazdığı kılavuz kitap ile Osmanlıca karmaşık terimleri Türkçeleştirmiştir.</p>
              </div>
            </div>

            <div className="dictionary-grid">
              {[
                { old: 'Müselles', modern: 'ÜÇGEN', icon: '🔺' },
                { old: 'Murabba', modern: 'KARE', icon: '🟩' },
                { old: 'Zaviye', modern: 'AÇI', icon: '📐' },
                { old: 'Kutur', modern: 'ÇAP', icon: '⭕' },
                { old: 'Nısf-ı Kutur', modern: 'YARIÇAP', icon: '📏' },
                { old: 'Hatt-ı Müstakim', modern: 'DOĞRU', icon: '➖' },
                { old: 'Muhit', modern: 'ÇEVRE', icon: '🔄' },
                { old: 'Mümâs', modern: 'TEĞET', icon: '📍' },
                { old: 'Vech / Sath', modern: 'YÜZEY', icon: '📄' },
                { old: 'Buut', modern: 'BOYUT', icon: '📦' }
              ].map((item, idx) => (
                <div key={idx} className="dictionary-item-card">
                  <span className="dict-icon">{item.icon}</span>
                  <div className="dict-content">
                    <span className="dict-old">Eski: {item.old}</span>
                    <span className="dict-arrow">➔</span>
                    <span className="dict-modern">{item.modern}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
