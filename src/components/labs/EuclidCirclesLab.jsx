import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Sparkles, RefreshCw, CheckCircle2, Award, 
  HelpCircle, Compass, Play, ChevronRight, ChevronLeft, Circle
} from 'lucide-react';

export const EuclidCirclesLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  const [activeTab, setActiveTab] = useState('euclid'); // 'euclid', 'circleVsDisk', 'flowerOfLife'
  
  // Euclid Step Simulator (0 to 4)
  const [step, setStep] = useState(0);

  // Circle vs Disk Slider
  const [radiusVal, setRadiusVal] = useState(6); // in cm
  const [isDiskMode, setIsDiskMode] = useState(false); // false = Çember, true = Daire

  // Flower of Life circle count
  const [flowerCircles, setFlowerCircles] = useState(1);

  const euclidSteps = [
    {
      title: "1. Adım: Başlangıç Noktaları (A ve B)",
      desc: "Cetvel yardımıyla A ve B noktalarını işaretle. Bu iki nokta arasındaki uzaklık r (yarıçap) kadardır.",
      hint: "Pergelin ayaklarını bu iki nokta kadar açacağız."
    },
    {
      title: "2. Adım: A Merkezli 1. Çemberi Çiz",
      desc: "Pergelin sivri ucunu A noktasına sabitle, kalemli ucunu B noktasına koy ve birinci çemberi çiz! (Yarıçap = r)",
      hint: "Çemberin üzerindeki tüm noktalar A noktasına tam r uzaklıktadır."
    },
    {
      title: "3. Adım: B Merkezli 2. Çemberi Çiz",
      desc: "Pergel açıklığını HİÇ BOZMADAN sivri ucu B noktasına koy ve A noktasından geçen ikinci çemberi çiz! (Yarıçap = r)",
      hint: "İki çember birbirinin merkezinden geçer ve iki noktada kesişir."
    },
    {
      title: "4. Adım: Kesişim Noktasını (C) İşaretle",
      desc: "İki çemberin üstte kesiştiği noktayı C olarak belirle. C noktası hem A çemberinin hem de B çemberinin üzerindedir!",
      hint: "Dolayısıyla |AC| = r ve |BC| = r olur!"
    },
    {
      title: "5. Adım: Noktaları Birleştir ve Eşkenar Üçgeni Tamamla!",
      desc: "A, B ve C noktalarını birleştirdiğimizde kusursuz bir EŞKENAR ÜÇGEN elde ederiz! |AB| = |AC| = |BC| = r!",
      hint: "Tebrikler! M.Ö. 300 yılında Öklid'in bulduğu gibi cetvelle ölçü almadan sadece pergel ile eşkenar üçgen inşa ettin!"
    }
  ];

  const handleNextStep = () => {
    if (step < euclidSteps.length - 1) {
      const nextS = step + 1;
      setStep(nextS);
      playSound('click', soundEnabled);
      if (nextS === euclidSteps.length - 1) {
        playSound('fanfare', soundEnabled);
        confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
        completeActivity('matematik', topic.id, 'interactiveLab', 5, 5);
      }
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
      playSound('click', soundEnabled);
    }
  };

  // Center coordinates for Euclid in viewBox 0 0 500 350
  const euclidR = 100;
  const pA = { x: 200, y: 220 };
  const pB = { x: 300, y: 220 };
  // Top intersection point C
  const pC = { x: 250, y: 220 - Math.sqrt(euclidR ** 2 - (euclidR / 2) ** 2) }; // approx y = 133.4

  return (
    <div className="lab-container animate-fadeIn">
      {/* Header */}
      <div className="lab-header">
        <div className="lab-title-box">
          <div className="lab-icon-badge">⭕</div>
          <div>
            <h2 className="lab-main-title">Öklid Pergel & Çember İnşa Laboratuvarı</h2>
            <p className="lab-subtitle">Pergel kullanarak cetvelsiz eşkenar üçgen inşa et, çember ile daire arasındaki farkı keşfet!</p>
          </div>
        </div>

        {/* Sub-tabs */}
        <div className="lab-subtabs">
          <button 
            className={`lab-subtab-btn ${activeTab === 'euclid' ? 'active' : ''}`}
            onClick={() => { setActiveTab('euclid'); playSound('click', soundEnabled); }}
          >
            <span>📐 Öklid 1. Önermesi (Eşkenar Üçgen İnşası)</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'circleVsDisk' ? 'active' : ''}`}
            onClick={() => { setActiveTab('circleVsDisk'); playSound('click', soundEnabled); }}
          >
            <span>🟠 Çember vs Daire & Yarıçap (r)</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'flowerOfLife' ? 'active' : ''}`}
            onClick={() => { setActiveTab('flowerOfLife'); playSound('click', soundEnabled); }}
          >
            <span>🌸 Yaşam Çiçeği & Selçuklu Sanatı</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Euclid Step-by-Step Triangle Construction */}
      {activeTab === 'euclid' && (
        <div className="lab-workspace">
          <div className="lab-canvas-card">
            <div className="euclid-step-pill">
              Adım {step + 1} / 5
            </div>

            <svg viewBox="0 0 500 350" className="euclid-svg">
              <defs>
                <radialGradient id="circleAGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="85%" stopColor="#3B82F6" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                </radialGradient>
                <radialGradient id="circleBGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="85%" stopColor="#F59E0B" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
                </radialGradient>
              </defs>

              {/* Grid Background */}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 40} x2="500" y2={i * 40} stroke="#F8FAFC" strokeWidth="1" />
              ))}

              {/* Step 1+: Base line AB */}
              <line 
                x1={pA.x} y1={pA.y} 
                x2={pB.x} y2={pB.y} 
                stroke="#1E293B" 
                strokeWidth={step === 4 ? 4 : 2.5} 
              />
              <text x={(pA.x + pB.x) / 2} y={pA.y + 20} fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">
                r
              </text>

              {/* Step 2+: Circle A */}
              {step >= 1 && (
                <circle 
                  cx={pA.x} cy={pA.y} r={euclidR} 
                  fill="url(#circleAGrad)" 
                  stroke="#3B82F6" 
                  strokeWidth="2.5" 
                  className="animate-fadeIn"
                />
              )}

              {/* Step 3+: Circle B */}
              {step >= 2 && (
                <circle 
                  cx={pB.x} cy={pB.y} r={euclidR} 
                  fill="url(#circleBGrad)" 
                  stroke="#F59E0B" 
                  strokeWidth="2.5" 
                  className="animate-fadeIn"
                />
              )}

              {/* Step 4+: Intersection point C */}
              {step >= 3 && (
                <g className="animate-fadeIn">
                  <circle cx={pC.x} cy={pC.y} r="8" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
                  <text x={pC.x} y={pC.y - 14} fontSize="14" fontWeight="800" fill="#EF4444" textAnchor="middle">
                    C (Kesişim)
                  </text>
                </g>
              )}

              {/* Step 5: Equilateral Triangle ABC */}
              {step >= 4 && (
                <polygon 
                  points={`${pA.x},${pA.y} ${pB.x},${pB.y} ${pC.x},${pC.y}`} 
                  fill="#10B981" 
                  fillOpacity="0.3" 
                  stroke="#059669" 
                  strokeWidth="4" 
                  className="animate-scaleIn"
                />
              )}

              {/* Center points A and B */}
              <circle cx={pA.x} cy={pA.y} r="6" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
              <text x={pA.x - 14} y={pA.y + 6} fontSize="14" fontWeight="800" fill="#2563EB">A</text>

              <circle cx={pB.x} cy={pB.y} r="6" fill="#D97706" stroke="#FFFFFF" strokeWidth="2" />
              <text x={pB.x + 10} y={pB.y + 6} fontSize="14" fontWeight="800" fill="#D97706">B</text>

              {/* Angle labels inside triangle at step 5 */}
              {step >= 4 && (
                <>
                  <text x={(pA.x + pC.x) / 2 - 15} y={(pA.y + pC.y) / 2} fontSize="12" fontWeight="bold" fill="#047857">r</text>
                  <text x={(pB.x + pC.x) / 2 + 10} y={(pB.y + pC.y) / 2} fontSize="12" fontWeight="bold" fill="#047857">r</text>
                  <text x={pC.x} y={pC.y + 40} fontSize="13" fontWeight="800" fill="#065F46" textAnchor="middle">
                    60° (Eşkenar)
                  </text>
                </>
              )}
            </svg>

            {/* Stepper Navigation Buttons */}
            <div className="stepper-controls-row">
              <button 
                onClick={handlePrevStep} 
                disabled={step === 0} 
                className="btn-stepper prev"
              >
                <ChevronLeft size={18} /> Önceki Adım
              </button>

              <div className="stepper-dots">
                {euclidSteps.map((_, i) => (
                  <span 
                    key={i} 
                    className={`stepper-dot ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}
                    onClick={() => setStep(i)}
                  />
                ))}
              </div>

              <button 
                onClick={handleNextStep} 
                disabled={step === euclidSteps.length - 1} 
                className="btn-stepper next"
              >
                Sonraki Adım <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="lab-controls-card">
            <h4 className="analysis-title">📜 {euclidSteps[step].title}</h4>
            <p className="step-desc-text">{euclidSteps[step].desc}</p>

            <div className="challenge-hint-box mt-3">
              <HelpCircle size={16} />
              <span><strong>Önemli Detay:</strong> {euclidSteps[step].hint}</span>
            </div>

            {step === 4 && (
              <div className="euclid-success-banner mt-4">
                <span className="celebrate-badge">🎉 Öklid'in Zaferi!</span>
                <h4>Cetvelsiz Eşkenar Üçgen!</h4>
                <p>Üçgenin tüm kenarları çemberlerin yarıçapı (r) kadar oldu. Böylece hiçbir milimetrik cetvel ölçümü yapmadan kusursuz bir eşkenar üçgen inşa edildi!</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Circle vs Disk (Çember vs Daire & Yarıçap Hesabı) */}
      {activeTab === 'circleVsDisk' && (
        <div className="lab-workspace">
          <div className="lab-canvas-card">
            {/* Toggle Mode Button */}
            <div className="mode-toggle-group">
              <button 
                onClick={() => { setIsDiskMode(false); playSound('click', soundEnabled); }}
                className={`btn-mode-toggle ${!isDiskMode ? 'active' : ''}`}
              >
                ⭕ Çember (İçi Boş Halka)
              </button>
              <button 
                onClick={() => { setIsDiskMode(true); playSound('click', soundEnabled); }}
                className={`btn-mode-toggle ${isDiskMode ? 'active' : ''}`}
              >
                🟡 Daire (İçi Dolu Alan)
              </button>
            </div>

            <svg viewBox="0 0 500 300" className="circle-disk-svg">
              {/* Dynamic Circle / Disk */}
              {(() => {
                const svgR = radiusVal * 15; // scale cm to px
                const cx = 250;
                const cy = 150;
                return (
                  <>
                    {/* Fill if Disk Mode */}
                    <circle 
                      cx={cx} cy={cy} r={svgR} 
                      fill={isDiskMode ? '#F59E0B' : 'none'} 
                      fillOpacity={isDiskMode ? 0.35 : 0} 
                      stroke="#2563EB" 
                      strokeWidth="4" 
                    />

                    {/* Center Point */}
                    <circle cx={cx} cy={cy} r="6" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2" />
                    <text x={cx} y={cy - 12} fontSize="12" fontWeight="bold" fill="#1E293B" textAnchor="middle">
                      Merkez (M)
                    </text>

                    {/* Radius Line (r) */}
                    <line x1={cx} y1={cy} x2={cx + svgR} y2={cy} stroke="#EF4444" strokeWidth="3" />
                    <text x={cx + svgR / 2} y={cy - 8} fontSize="12" fontWeight="bold" fill="#EF4444" textAnchor="middle">
                      r = {radiusVal} cm (Yarıçap)
                    </text>

                    {/* Diameter Line (R) - dashed on left half */}
                    <line x1={cx - svgR} y1={cy} x2={cx} y2={cy} stroke="#7C3AED" strokeWidth="2" strokeDasharray="3 3" />
                    <text x={cx - svgR / 2} y={cy - 8} fontSize="11" fontWeight="bold" fill="#7C3AED" textAnchor="middle">
                      r = {radiusVal} cm
                    </text>

                    {/* Total Diameter Label at bottom */}
                    <line x1={cx - svgR} y1={cy + svgR + 20} x2={cx + svgR} y2={cy + svgR + 20} stroke="#475569" strokeWidth="1.5" />
                    <text x={cx} y={cy + svgR + 35} fontSize="12" fontWeight="bold" fill="#1E293B" textAnchor="middle">
                      Çap (R) = 2 × r = {radiusVal * 2} cm
                    </text>
                  </>
                );
              })()}
            </svg>

            {/* Slider */}
            <div className="slider-control-group mt-3">
              <span className="control-label">Yarıçapı Değiştir: {radiusVal} cm</span>
              <input 
                type="range" 
                min="3" 
                max="9" 
                value={radiusVal} 
                onChange={(e) => setRadiusVal(Number(e.target.value))}
                className="angle-range-slider"
              />
            </div>
          </div>

          <div className="lab-controls-card">
            <h4 className="analysis-title">🔍 Çember ve Daire Karşılaştırması</h4>
            
            <div className="formula-box">
              <span className="formula-tag">TEMEL BAĞINTI</span>
              <h3>Çap (R) = 2 × Yarıçap (r)</h3>
              <p>Yarıçap: <strong>{radiusVal} cm</strong> ise Çap: 2 × {radiusVal} = <strong>{radiusVal * 2} cm</strong> dir.</p>
            </div>

            <div className="comparison-columns mt-3">
              <div className={`comp-col ${!isDiskMode ? 'active-col' : ''}`}>
                <h5>⭕ Çember</h5>
                <p>Yalnızca çevre çizgisidir. <strong>İçi boştur.</strong> Alanı yoktur, sadece uzunluğu (çevresi) vardır.</p>
                <div className="examples-tag">
                  Örnekler: Simit, Parmak Yüzüğü, Hula Hoop, Bisiklet Tekerlek Teli.
                </div>
              </div>

              <div className={`comp-col ${isDiskMode ? 'active-col' : ''}`}>
                <h5>🟡 Daire</h5>
                <p>Çember ile birlikte <strong>iç bölgesinin tamamıdır</strong>. İçi doludur, yüzey alanı kaplar.</p>
                <div className="examples-tag">
                  Örnekler: Madeni 1 TL, Pizza, Duvar Saati Kadranı, Yuvarlak Tabak.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Flower of Life & Seljuk sacred art */}
      {activeTab === 'flowerOfLife' && (
        <div className="lab-workspace">
          <div className="lab-canvas-card">
            <h3 className="section-subtitle">Geleneksel Geometrik Sanat: Yaşam Çiçeği</h3>
            <p className="text-muted-sm">Selçuklu çinileri ve cami süslemeleri, eşit yarıçaplı çemberlerin çember yayları üzerine dizilmesiyle inşa edilir.</p>

            <svg viewBox="0 0 500 320" className="flower-svg">
              {/* Central Circle */}
              <circle cx="250" cy="160" r="70" fill="none" stroke="#2563EB" strokeWidth="2.5" />
              <circle cx="250" cy="160" r="4" fill="#2563EB" />

              {/* 6 Peripheral Circles */}
              {Array.from({ length: 6 }).map((_, i) => {
                if (i >= flowerCircles) return null;
                const angle = (i * 60 * Math.PI) / 180;
                const fx = 250 + 70 * Math.cos(angle);
                const fy = 160 + 70 * Math.sin(angle);
                return (
                  <circle 
                    key={i} 
                    cx={fx} cy={fy} r="70" 
                    fill="none" 
                    stroke="#F59E0B" 
                    strokeWidth="2" 
                    className="animate-fadeIn"
                  />
                );
              })}
            </svg>

            <div className="flower-controls-row">
              <button 
                onClick={() => {
                  setFlowerCircles(prev => Math.min(6, prev + 1));
                  playSound('click', soundEnabled);
                }}
                disabled={flowerCircles >= 6}
                className="btn-action-primary"
              >
                🌸 Yeni Çember Ekle ({flowerCircles}/6)
              </button>
              <button 
                onClick={() => {
                  setFlowerCircles(1);
                  playSound('click', soundEnabled);
                }}
                className="btn-action-secondary"
              >
                <RefreshCw size={15} /> Başa Dön
              </button>
            </div>
          </div>

          <div className="lab-controls-card">
            <h4 className="analysis-title">✨ Geometri ve Kültürel Mirasımız</h4>
            <div className="rule-card blue-border">
              <h5>Pergel ile Sanatın Uyumu</h5>
              <p>Pergel açıklığını hiç bozmadan bir çemberin çevresindeki noktalara yeni çemberler çizdiğinizde, çemberler tam 6 eşit yapraklı bir çiçek motifi (Yaşam Çiçeği) oluşturur.</p>
            </div>

            <div className="rule-card green-border">
              <h5>Selçuklu ve Osmanlı Mimarisi</h5>
              <p>Divriği Ulu Camii kapıları, Edirne Selimiye pencereleri ve Bursa Yeşil Türbe çinileri, cetvel ve pergel ile inşa edilen bu muazzam geometrik simetriyi taşır.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
