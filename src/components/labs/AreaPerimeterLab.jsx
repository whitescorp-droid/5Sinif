import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Sparkles, RefreshCw, CheckCircle2, Award, 
  HelpCircle, Grid, Square, Ruler, Layers
} from 'lucide-react';

export const AreaPerimeterLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  const [activeTab, setActiveTab] = useState('explorer'); // 'explorer', 'carpetProblem', 'challenges'
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(4);
  const [showUnitSquares, setShowUnitSquares] = useState(true);

  // Challenges state
  const challenges = [
    {
      id: 1,
      targetType: 'area',
      targetVal: 20,
      instruction: "Alanı tam 20 cm² olan bir dikdörtgen oluştur!",
      hint: "Kenarların çarpımı 20 olmalı (Örn: 4 × 5 veya 2 × 10)."
    },
    {
      id: 2,
      targetType: 'perimeter',
      targetVal: 24,
      instruction: "Çevre uzunluğu tam 24 cm olan bir dikdörtgen veya kare oluştur!",
      hint: "Kısa ve uzun kenarın toplamı 12 olmalı: 2 × (a + b) = 24."
    },
    {
      id: 3,
      targetType: 'square',
      targetVal: 25,
      instruction: "Alanı 25 cm² olan bir KARE oluştur!",
      hint: "Karenin tüm kenarları eşittir: 5 × 5 = 25."
    },
    {
      id: 4,
      targetType: 'carpet',
      targetVal: 24,
      instruction: "Mete'nin salonu için alanı 24 m² ve çevresi 20 m olan halıyı tasarla!",
      hint: "Çevre: 2 × (4 + 6) = 20, Alan: 4 × 6 = 24."
    }
  ];

  const [currentChallengeIdx, setCurrentChallengeIdx] = useState(0);
  const [challengeFeedback, setChallengeFeedback] = useState(null);
  const [challengeScore, setChallengeScore] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  // Calculations
  const perimeter = 2 * (width + height);
  const area = width * height;
  const isSquare = width === height;

  const checkChallenge = () => {
    const ch = challenges[currentChallengeIdx];
    let isCorrect = false;

    if (ch.targetType === 'area') {
      isCorrect = area === ch.targetVal;
    } else if (ch.targetType === 'perimeter') {
      isCorrect = perimeter === ch.targetVal;
    } else if (ch.targetType === 'square') {
      isCorrect = isSquare && area === ch.targetVal;
    } else if (ch.targetType === 'carpet') {
      isCorrect = area === 24 && perimeter === 20;
    }

    if (isCorrect) {
      playSound('correct', soundEnabled);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
      const newScore = challengeScore + 1;
      setChallengeScore(newScore);
      setChallengeFeedback({ type: 'success', text: 'Tebrikler! Tam isabet! 🎉' });

      setTimeout(() => {
        if (currentChallengeIdx < challenges.length - 1) {
          setCurrentChallengeIdx(prev => prev + 1);
          setChallengeFeedback(null);
        } else {
          setChallengeCompleted(true);
          playSound('fanfare', soundEnabled);
          completeActivity('matematik', topic.id, 'interactiveLab', newScore, challenges.length);
        }
      }, 1300);
    } else {
      playSound('wrong', soundEnabled);
      setChallengeFeedback({ 
        type: 'error', 
        text: `Şu anki Alan: ${area} cm², Çevre: ${perimeter} cm. Tekrar dene! İpucu: ${ch.hint}` 
      });
    }
  };

  return (
    <div className="lab-container animate-fadeIn">
      {/* Header */}
      <div className="lab-header">
        <div className="lab-title-box">
          <div className="lab-icon-badge">🟩</div>
          <div>
            <h2 className="lab-main-title">Dikdörtgende Çevre ve Alan Laboratuvarı</h2>
            <p className="lab-subtitle">Kenarları serbestçe uzat, birim kareleri sayarak alan ve çevre formüllerinin mantığını keşfet!</p>
          </div>
        </div>

        {/* Sub-tabs */}
        <div className="lab-subtabs">
          <button 
            className={`lab-subtab-btn ${activeTab === 'explorer' ? 'active' : ''}`}
            onClick={() => { setActiveTab('explorer'); playSound('click', soundEnabled); }}
          >
            <span>📐 İnteraktif Çevre & Alan Masası</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'carpetProblem' ? 'active' : ''}`}
            onClick={() => { setActiveTab('carpetProblem'); playSound('click', soundEnabled); }}
          >
            <span>🛋️ Mete'nin 24 m² Halı Problemi</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'challenges' ? 'active' : ''}`}
            onClick={() => { setActiveTab('challenges'); playSound('click', soundEnabled); }}
          >
            <span>🎯 Alan ve Çevre Görevleri</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Explorer */}
      {activeTab === 'explorer' && (
        <div className="lab-workspace">
          <div className="lab-canvas-card">
            {/* Classification Badge */}
            <div className="canvas-badge-overlay">
              <span className={`live-angle-pill ${isSquare ? 'bg-green' : 'bg-blue'}`}>
                {isSquare ? '🟩 Kare (Tüm Kenarlar Eşit)' : '🟦 Dikdörtgen'}
              </span>
              <button 
                onClick={() => setShowUnitSquares(!showUnitSquares)} 
                className="btn-toggle-arc on"
              >
                <Grid size={13} /> {showUnitSquares ? 'Birim Kareleri Gizle' : 'Birim Kareleri Göster'}
              </button>
            </div>

            {/* Dynamic Grid SVG */}
            <svg viewBox="0 0 500 320" className="area-grid-svg">
              <defs>
                <pattern id="unitGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                </pattern>
              </defs>

              {/* Background grid */}
              <rect width="500" height="320" fill="url(#unitGrid)" />

              {/* Dynamic Rectangle Centered */}
              {(() => {
                const cell = 26; // px per cm
                const rectW = width * cell;
                const rectH = height * cell;
                const rx = 250 - rectW / 2;
                const ry = 160 - rectH / 2;

                return (
                  <g>
                    {/* Rectangle Fill */}
                    <rect 
                      x={rx} y={ry} 
                      width={rectW} height={rectH} 
                      fill="#3B82F6" 
                      fillOpacity="0.2" 
                      stroke="#1D4ED8" 
                      strokeWidth="3.5" 
                      rx="4" 
                    />

                    {/* Unit Squares Grid if enabled */}
                    {showUnitSquares && Array.from({ length: height }).map((_, r) => 
                      Array.from({ length: width }).map((_, c) => (
                        <rect 
                          key={`${r}-${c}`}
                          x={rx + c * cell} 
                          y={ry + r * cell} 
                          width={cell} 
                          height={cell} 
                          fill="none" 
                          stroke="#60A5FA" 
                          strokeWidth="1" 
                        />
                      ))
                    )}

                    {/* Top Width Label */}
                    <text x={rx + rectW / 2} y={ry - 10} fontSize="14" fontWeight="800" fill="#1D4ED8" textAnchor="middle">
                      {width} cm
                    </text>

                    {/* Bottom Width Label */}
                    <text x={rx + rectW / 2} y={ry + rectH + 18} fontSize="12" fontWeight="bold" fill="#64748B" textAnchor="middle">
                      {width} cm
                    </text>

                    {/* Left Height Label */}
                    <text x={rx - 15} y={ry + rectH / 2 + 5} fontSize="14" fontWeight="800" fill="#1D4ED8" textAnchor="middle">
                      {height} cm
                    </text>

                    {/* Right Height Label */}
                    <text x={rx + rectW + 15} y={ry + rectH / 2 + 5} fontSize="12" fontWeight="bold" fill="#64748B" textAnchor="middle">
                      {height} cm
                    </text>

                    {/* Center Area Readout */}
                    <rect 
                      x={rx + rectW / 2 - 45} y={ry + rectH / 2 - 16} 
                      width="90" height="32" rx="6" 
                      fill="#FFFFFF" 
                      fillOpacity="0.9" 
                      stroke="#2563EB" 
                      strokeWidth="1.5" 
                    />
                    <text x={rx + rectW / 2} y={ry + rectH / 2 + 5} fontSize="13" fontWeight="900" fill="#1E40AF" textAnchor="middle">
                      {area} cm²
                    </text>
                  </g>
                );
              })()}
            </svg>

            {/* Sliders for Width and Height */}
            <div className="slider-control-group mt-3 w-100">
              <div className="slider-header-row">
                <span className="control-label">Genişlik (Uzun Kenar):</span>
                <span className="current-angle-val text-blue">{width} cm</span>
              </div>
              <input 
                type="range" min="1" max="12" value={width} 
                onChange={(e) => setWidth(Number(e.target.value))} 
                className="angle-range-slider" 
              />
            </div>

            <div className="slider-control-group mt-2 w-100">
              <div className="slider-header-row">
                <span className="control-label">Yükseklik (Kısa Kenar):</span>
                <span className="current-angle-val text-blue">{height} cm</span>
              </div>
              <input 
                type="range" min="1" max="8" value={height} 
                onChange={(e) => setHeight(Number(e.target.value))} 
                className="angle-range-slider" 
              />
            </div>
          </div>

          {/* Formulas and Real-time Calculations */}
          <div className="lab-controls-card">
            {/* Area Formula Card */}
            <div className="rule-card blue-border">
              <div className="calc-header">
                <span className="badge-concept">ALAN HESABI</span>
                <span className="formula-tag">Kısa Kenar × Uzun Kenar</span>
              </div>
              <h3>Alan = {width} × {height} = <strong className="text-blue">{area} cm²</strong></h3>
              <p>Dikdörtgenin içine hiç boşluk kalmadan tam <strong>{area} adet</strong> 1 cm² lik birim kare sığar.</p>
            </div>

            {/* Perimeter Formula Card */}
            <div className="rule-card green-border">
              <div className="calc-header">
                <span className="badge-concept bg-green">ÇEVRE HESABI</span>
                <span className="formula-tag">2 × (Kısa Kenar + Uzun Kenar)</span>
              </div>
              <h3>Çevre = 2 × ({width} + {height}) = <strong className="text-green">{perimeter} cm</strong></h3>
              <p>Tüm dış kenarların toplamıdır: {width} + {height} + {width} + {height} = <strong>{perimeter} cm</strong>.</p>
            </div>

            {/* Quick Shape Presets */}
            <div className="preset-buttons-grid mt-2">
              <span className="control-label">Hızlı Örnekler:</span>
              <div className="presets-row flex-wrap">
                <button onClick={() => { setWidth(5); setHeight(5); playSound('click', soundEnabled); }} className="btn-preset-snap">
                  🟩 5 × 5 Kare (Alan: 25, Çevre: 20)
                </button>
                <button onClick={() => { setWidth(8); setHeight(3); playSound('click', soundEnabled); }} className="btn-preset-snap">
                  🟦 8 × 3 Dikdörtgen (Alan: 24, Çevre: 22)
                </button>
                <button onClick={() => { setWidth(6); setHeight(4); playSound('click', soundEnabled); }} className="btn-preset-snap">
                  🟦 6 × 4 Dikdörtgen (Alan: 24, Çevre: 20)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Mete's Carpet Problem (Page 150-151) */}
      {activeTab === 'carpetProblem' && (
        <div className="lab-workspace single-column">
          <div className="ataturk-book-card">
            <div className="ataturk-hero-header">
              <div className="ataturk-icon">🛋️</div>
              <div>
                <h3>Mete'nin 24 m² Halı Problemi (Ders Kitabı Sayfa 150)</h3>
                <p>Mete ve ailesi salonları için 24 m² lik bir halı almak istiyor. Firma yetkilisi 24 m² alana sahip birçok farklı dikdörtgen halı olabileceğini söylüyor. Peki nasıl?</p>
              </div>
            </div>

            <div className="dictionary-grid">
              {[
                { w: 24, h: 1, area: 24, perimeter: 50, desc: 'Çok uzun ve çok dar bir koridor halısı (yolluk)' },
                { w: 12, h: 2, area: 24, perimeter: 28, desc: 'Geniş bir antre halısı' },
                { w: 8, h: 3, area: 24, perimeter: 22, desc: 'Dikdörtgen salon halısı' },
                { w: 6, h: 4, area: 24, perimeter: 20, desc: 'Mete\'nin aradığı ideal salon halısı (Çevre = 20 m)' }
              ].map((c, i) => (
                <div key={i} className="carpet-card">
                  <span className="carpet-tag">{c.w} m × {c.h} m Halı</span>
                  <div className="carpet-specs">
                    <div><strong>Alan:</strong> {c.area} m²</div>
                    <div><strong>Çevre:</strong> {c.perimeter} m</div>
                  </div>
                  <p className="carpet-desc">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="critical-insight-card green mt-3">
              <h5>💡 Maarif Modeli Büyük Çıkarımı:</h5>
              <p>• <strong>Alanları aynı olan dikdörtgenlerin çevre uzunlukları birbirinden FARKLI olabilir!</strong></p>
              <p>• Kenarlar birbirine yaklaştıkça (yani şekil kareye yaklaştıkça) çevre uzunluğu KÜÇÜLÜR!</p>
              <p>• Kenarlar birbirinden uzaklaştıkça (şekil uzayıp inceldikçe) çevre uzunluğu BÜYÜR!</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Challenges */}
      {activeTab === 'challenges' && (
        <div className="lab-workspace single-column">
          {!challengeCompleted ? (
            <div className="game-interactive-card">
              <div className="game-header-bar">
                <span className="game-step-pill">Görev {currentChallengeIdx + 1} / {challenges.length}</span>
                <span className="game-score-pill">Puan: {challengeScore}</span>
              </div>

              <h3 className="game-question-text">{challenges[currentChallengeIdx].instruction}</h3>

              {/* Sliders to solve challenge */}
              <div className="challenge-controls-box">
                <div className="slider-control-group">
                  <span className="control-label">Genişlik: {width} cm</span>
                  <input type="range" min="1" max="12" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="angle-range-slider" />
                </div>
                <div className="slider-control-group">
                  <span className="control-label">Yükseklik: {height} cm</span>
                  <input type="range" min="1" max="10" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="angle-range-slider" />
                </div>
              </div>

              {/* Current Metrics */}
              <div className="current-challenge-metrics">
                <span>Oluşturulan Alan: <strong>{area} cm²</strong></span>
                <span>Oluşturulan Çevre: <strong>{perimeter} cm</strong></span>
              </div>

              {challengeFeedback && (
                <div className={`challenge-feedback-box ${challengeFeedback.type}`}>
                  {challengeFeedback.text}
                </div>
              )}

              <div className="action-button-row mt-3">
                <button onClick={checkChallenge} className="btn-action-primary">
                  <CheckCircle2 size={18} />
                  <span>Şekli Kontrol Et</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="challenge-success-screen">
              <div className="success-badge-celebration">🏆</div>
              <h2>Harika! Çevre ve Alan Görevlerini Başarıyla Bitirdin!</h2>
              <p>Dikdörtgenin alanını hesaplama, çevre formülünü uygulama ve aynı alana sahip farklı dikdörtgenleri keşfetme becerilerini kazandın.</p>
              <div className="earned-rewards-pill">
                <Award size={20} />
                <span>+50 XP Kazandın!</span>
              </div>
              <button onClick={() => { setActiveTab('explorer'); setCurrentChallengeIdx(0); setChallengeCompleted(false); setChallengeScore(0); }} className="btn-action-secondary">
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
