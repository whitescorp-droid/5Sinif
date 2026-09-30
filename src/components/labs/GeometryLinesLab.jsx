import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Sparkles, RefreshCw, CheckCircle2, Award, 
  HelpCircle, Ruler, ArrowRight, Layers
} from 'lucide-react';

export const GeometryLinesLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  const [activeTab, setActiveTab] = useState('drawing'); // 'drawing', 'relations', 'game'
  const [selectedShape, setSelectedShape] = useState('segment'); // 'point', 'segment', 'ray', 'line', 'perpendicular', 'parallel'
  const [lineAngle, setLineAngle] = useState(45); // For intersecting lines simulation

  // Game state
  const gameMissions = [
    {
      id: 1,
      question: "İki ucu da sınırlı olan ve boyu cetvelle ölçülebilen şekli seç!",
      targetShape: 'segment',
      hint: "Başlangıç ve bitiş noktası bellidir: [AB]."
    },
    {
      id: 2,
      question: "Fener ışığı gibi başlangıç noktası sabit, diğer ucu sonsuza uzayan şekli seç!",
      targetShape: 'ray',
      hint: "Bir ucu kapalı, diğer ucu oklu: [AB)."
    },
    {
      id: 3,
      question: "Bir noktadan bir doğruya çizilebilecek EN KISA mesafeyi oluşturan aracı seç!",
      targetShape: 'perpendicular',
      hint: "Doğruya 90 derecelik açıyla inen dikmedir (⟂)."
    },
    {
      id: 4,
      question: "Tren rayları gibi hiçbir noktada kesişmeyen çizgileri seç!",
      targetShape: 'parallel',
      hint: "Aralarındaki uzaklık hep sabittir: d // k."
    }
  ];

  const [currentMissionIdx, setCurrentMissionIdx] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [gameFeedback, setGameFeedback] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleGameSelect = (shape) => {
    const currentMission = gameMissions[currentMissionIdx];
    if (shape === currentMission.targetShape) {
      playSound('correct', soundEnabled);
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
      const newScore = gameScore + 1;
      setGameScore(newScore);
      setGameFeedback({ type: 'success', text: 'Doğru Seçim! Harikasın! 🎉' });

      setTimeout(() => {
        if (currentMissionIdx < gameMissions.length - 1) {
          setCurrentMissionIdx(prev => prev + 1);
          setGameFeedback(null);
        } else {
          setGameCompleted(true);
          playSound('fanfare', soundEnabled);
          completeActivity('matematik', topic.id, 'interactiveLab', newScore, gameMissions.length);
        }
      }, 1200);
    } else {
      playSound('wrong', soundEnabled);
      setGameFeedback({ type: 'error', text: `Tekrar dene! İpucu: ${currentMission.hint}` });
    }
  };

  return (
    <div className="lab-container animate-fadeIn">
      {/* Header */}
      <div className="lab-header">
        <div className="lab-title-box">
          <div className="lab-icon-badge">📏</div>
          <div>
            <h2 className="lab-main-title">Geometri Çizim Tahtası & Doğru Laboratuvarı</h2>
            <p className="lab-subtitle">Nokta, doğru parçası, ışın, dikme ve paralel doğruları görselleştir ve aralarındaki farkları keşfet!</p>
          </div>
        </div>

        {/* Sub-tabs */}
        <div className="lab-subtabs">
          <button 
            className={`lab-subtab-btn ${activeTab === 'drawing' ? 'active' : ''}`}
            onClick={() => { setActiveTab('drawing'); playSound('click', soundEnabled); }}
          >
            <span>📐 Geometrik Şekil Çizim Masası</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'relations' ? 'active' : ''}`}
            onClick={() => { setActiveTab('relations'); playSound('click', soundEnabled); }}
          >
            <span>🚂 Doğruların Birbirine Göre Durumları</span>
          </button>
          <button 
            className={`lab-subtab-btn ${activeTab === 'game' ? 'active' : ''}`}
            onClick={() => { setActiveTab('game'); playSound('click', soundEnabled); }}
          >
            <span>🎯 Çizim Dedektifi Görevleri</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Drawing Board */}
      {activeTab === 'drawing' && (
        <div className="lab-workspace">
          <div className="lab-canvas-card">
            {/* Shape selection toolbar */}
            <div className="shape-toolbar">
              {[
                { id: 'segment', label: 'Doğru Parçası [AB]', icon: '📏' },
                { id: 'ray', label: 'Işın [AB)', icon: '🔦' },
                { id: 'line', label: 'Doğru AB', icon: '♾️' },
                { id: 'perpendicular', label: 'Dikme (⟂)', icon: '📐' },
                { id: 'parallel', label: 'Paralel (//)', icon: '🚂' }
              ].map(tool => (
                <button
                  key={tool.id}
                  onClick={() => { setSelectedShape(tool.id); playSound('click', soundEnabled); }}
                  className={`btn-tool-pill ${selectedShape === tool.id ? 'active' : ''}`}
                >
                  <span>{tool.icon} {tool.label}</span>
                </button>
              ))}
            </div>

            {/* SVG Visual Display */}
            <svg viewBox="0 0 500 280" className="geometry-board-svg">
              <defs>
                <marker id="arrowHead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563EB" />
                </marker>
                <marker id="arrowHeadRed" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                </marker>
              </defs>

              {/* Grid Background */}
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 40} x2="500" y2={i * 40} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              {Array.from({ length: 13 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="280" stroke="#F1F5F9" strokeWidth="1" />
              ))}

              {/* 1. Doğru Parçası [AB] */}
              {selectedShape === 'segment' && (
                <g className="animate-scaleIn">
                  <line x1="120" y1="140" x2="380" y2="140" stroke="#2563EB" strokeWidth="4" />
                  <circle cx="120" cy="140" r="7" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="120" y="170" fontSize="14" fontWeight="800" fill="#1D4ED8" textAnchor="middle">A</text>
                  <circle cx="380" cy="140" r="7" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="380" y="170" fontSize="14" fontWeight="800" fill="#1D4ED8" textAnchor="middle">B</text>

                  {/* Ruler measure display */}
                  <rect x="200" y="90" width="100" height="28" rx="6" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
                  <text x="250" y="109" fontSize="12" fontWeight="bold" fill="#1E40AF" textAnchor="middle">
                    |AB| = 8 cm
                  </text>
                </g>
              )}

              {/* 2. Işın [AB) */}
              {selectedShape === 'ray' && (
                <g className="animate-scaleIn">
                  <line x1="120" y1="140" x2="440" y2="140" stroke="#2563EB" strokeWidth="4" markerEnd="url(#arrowHead)" />
                  <circle cx="120" cy="140" r="7" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="120" y="170" fontSize="14" fontWeight="800" fill="#1D4ED8" textAnchor="middle">A (Kapalı)</text>

                  <circle cx="280" cy="140" r="4" fill="#2563EB" />
                  <text x="280" y="165" fontSize="13" fontWeight="bold" fill="#2563EB" textAnchor="middle">B</text>

                  <text x="440" y="170" fontSize="12" fontWeight="bold" fill="#EF4444" textAnchor="middle">
                    Sonsuza Uzuyor ➔
                  </text>
                </g>
              )}

              {/* 3. Doğru AB */}
              {selectedShape === 'line' && (
                <g className="animate-scaleIn">
                  <line 
                    x1="60" y1="140" 
                    x2="440" y2="140" 
                    stroke="#2563EB" 
                    strokeWidth="4" 
                    markerStart="url(#arrowHead)" 
                    markerEnd="url(#arrowHead)" 
                  />
                  <circle cx="180" cy="140" r="5" fill="#1D4ED8" />
                  <text x="180" y="165" fontSize="14" fontWeight="800" fill="#1D4ED8" textAnchor="middle">A</text>
                  <circle cx="320" cy="140" r="5" fill="#1D4ED8" />
                  <text x="320" y="165" fontSize="14" fontWeight="800" fill="#1D4ED8" textAnchor="middle">B</text>
                  <text x="460" y="145" fontSize="14" fontWeight="bold" fill="#64748B">d doğrusu</text>
                </g>
              )}

              {/* 4. Dikme */}
              {selectedShape === 'perpendicular' && (
                <g className="animate-scaleIn">
                  {/* Baseline d */}
                  <line x1="60" y1="200" x2="440" y2="200" stroke="#1E293B" strokeWidth="3" />
                  <text x="455" y="205" fontSize="12" fontWeight="bold" fill="#64748B">d</text>

                  {/* Point P outside line */}
                  <circle cx="250" cy="60" r="7" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="250" y="45" fontSize="14" fontWeight="800" fill="#EF4444" textAnchor="middle">P Noktası</text>

                  {/* Perpendicular Line segment (Dikme) */}
                  <line x1="250" y1="60" x2="250" y2="200" stroke="#EF4444" strokeWidth="3.5" />

                  {/* 90° Square symbol */}
                  <rect x="250" y="180" width="20" height="20" fill="none" stroke="#EF4444" strokeWidth="2" />
                  <circle cx="260" cy="190" r="2" fill="#EF4444" />

                  <text x="250" y="235" fontSize="12" fontWeight="bold" fill="#EF4444" textAnchor="middle">
                    En Kısa Mesafe (Dikme) | [PH] ⟂ d
                  </text>
                </g>
              )}

              {/* 5. Paralel Doğrular */}
              {selectedShape === 'parallel' && (
                <g className="animate-scaleIn">
                  <line x1="60" y1="90" x2="440" y2="90" stroke="#059669" strokeWidth="3.5" />
                  <text x="455" y="95" fontSize="13" fontWeight="bold" fill="#059669">d₁</text>

                  <line x1="60" y1="180" x2="440" y2="180" stroke="#059669" strokeWidth="3.5" />
                  <text x="455" y="185" fontSize="13" fontWeight="bold" fill="#059669">d₂</text>

                  {/* Sleepers (train tracks) to show constant distance */}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={i} x1={90 + i * 40} y1="90" x2={90 + i * 40} y2="180" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
                  ))}

                  <text x="250" y="140" fontSize="13" fontWeight="800" fill="#059669" textAnchor="middle">
                    Mesafe Sabittir — d₁ // d₂ (Asla Kesişmezler!)
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Educational info card based on selected tool */}
          <div className="lab-controls-card">
            {selectedShape === 'segment' && (
              <div className="concept-info-card">
                <span className="badge-concept">DOĞRU PARÇASI [AB]</span>
                <h4>Cetvelle Ölçülebilen Tek Şekil!</h4>
                <p>• İki ucu da kapalı ve sınırlıdır ($A$ ve $B$ noktaları).</p>
                <p>• Uzunluğu $|AB|$ sembolüyle gösterilir ve cetvelle kesin olarak ölçülebilir.</p>
                <div className="real-world-chip">
                  📍 <strong>Günlük Hayat Örneği:</strong> Kurşun kalem, cetvel kenarı, kibrit çöpü.
                </div>
              </div>
            )}

            {selectedShape === 'ray' && (
              <div className="concept-info-card">
                <span className="badge-concept">IŞIN [AB)</span>
                <h4>Bir Ucu Sabit, Diğer Ucu Sonsuz!</h4>
                <p>• Başlangıç noktası ($A$) bellidir, diğer ucu ($B$) sonsuza kadar ilerler.</p>
                <p>• Sonsuza uzadığı için boyu cetvelle ölçülemez!</p>
                <div className="real-world-chip">
                  📍 <strong>Günlük Hayat Örneği:</strong> El fenerinden çıkan ışık, lazer ışığı, Güneş ışınları.
                </div>
              </div>
            )}

            {selectedShape === 'line' && (
              <div className="concept-info-card">
                <span className="badge-concept">DOĞRU AB veya d</span>
                <h4>İki Yöne de Sınırsız Uzayan Çizgi!</h4>
                <p>• Her iki yönden de sonsuza kadar devam eder, uç noktası yoktur.</p>
                <p>• Cetvelle boyu ölçülemez!</p>
                <p>• <strong>Önemli Kural:</strong> Farklı iki noktadan yalnızca <strong>1 tane doğru</strong> geçer!</p>
              </div>
            )}

            {selectedShape === 'perpendicular' && (
              <div className="concept-info-card">
                <span className="badge-concept">DİKME (⟂)</span>
                <h4>Noktadan Doğruya En Kısa Yol!</h4>
                <p>• Bir noktadan bir doğruya inilen 90 derecelik dik doğru parçasına <strong>dikme</strong> denir.</p>
                <p>• Bir noktadan bir doğruya yalnızca <strong>TEK BİR dikme</strong> çizilebilir!</p>
                <p>• Sembolü: $AB \perp CD$ (Ters T sembolü).</p>
              </div>
            )}

            {selectedShape === 'parallel' && (
              <div className="concept-info-card">
                <span className="badge-concept">PARALEL DOĞRULAR (//)</span>
                <h4>Hiçbir Zaman Kesişmeyen Çizgiler!</h4>
                <p>• Aynı düzlemde bulunan ve uzatıldıklarında asla birbiriyle temas etmeyen doğrulardır.</p>
                <p>• Aralarındaki uzaklık her zaman eşittir.</p>
                <div className="real-world-chip">
                  📍 <strong>Günlük Hayat Örneği:</strong> Düz uzanan tren rayları, çizgili defter satırları.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Line Relationships (Paralel, Kesişen, Dik, Çakışık) */}
      {activeTab === 'relations' && (
        <div className="lab-workspace single-column">
          <div className="relations-grid">
            <div className="relation-card">
              <div className="relation-icon">⏸️</div>
              <h4>1. Paralel Doğrular (d₁ // d₂)</h4>
              <p>Ortak noktaları YOKTUR. Hiçbir zaman kesişmezler. Aralarındaki mesafe hep sabittir.</p>
              <div className="relation-visual">
                <span className="line-bar green"></span>
                <span className="line-bar green"></span>
              </div>
              <span className="example-text">Örnek: Tren rayları, pencere dikey çıtaları.</span>
            </div>

            <div className="relation-card">
              <div className="relation-icon">✂️</div>
              <h4>2. Kesişen Doğrular</h4>
              <p>Düzlemde yalnız tek bir ortak noktası bulunan doğrulardır. 4 adet açı oluştururlar.</p>
              <div className="relation-visual cross">
                <span className="cross-line one"></span>
                <span className="cross-line two"></span>
              </div>
              <span className="example-text">Örnek: Makasın kolları, yol kavşağı (dörtyol).</span>
            </div>

            <div className="relation-card">
              <div className="relation-icon">📐</div>
              <h4>3. Dik Kesişen Doğrular (⟂)</h4>
              <p>Kesiştiklerinde aralarında tam 90° lik dik açı oluşturan doğrulardır.</p>
              <div className="relation-visual perp">
                <span className="perp-h"></span>
                <span className="perp-v"></span>
              </div>
              <span className="example-text">Örnek: Artı (+) işareti, duvar ile taban birleşimi.</span>
            </div>

            <div className="relation-card">
              <div className="relation-icon">🔄</div>
              <h4>4. Çakışık Doğrular</h4>
              <p>Bütün noktaları ortak olan doğrulardır. Üst üste binerler ve tek bir doğru gibi görünürler.</p>
              <div className="relation-visual">
                <span className="line-bar purple bold"></span>
              </div>
              <span className="example-text">Örnek: Üst üste konulmuş iki cetvel kenarı.</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Mini-Game Challenge */}
      {activeTab === 'game' && (
        <div className="lab-workspace single-column">
          {!gameCompleted ? (
            <div className="game-interactive-card">
              <div className="game-header-bar">
                <span className="game-step-pill">Soru {currentMissionIdx + 1} / {gameMissions.length}</span>
                <span className="game-score-pill">Puan: {gameScore}</span>
              </div>

              <h3 className="game-question-text">{gameMissions[currentMissionIdx].question}</h3>

              {/* Selection tiles */}
              <div className="game-options-grid">
                {[
                  { id: 'segment', label: 'Doğru Parçası [AB]', icon: '📏', desc: 'İki ucu kapalı, boyu ölçülür' },
                  { id: 'ray', label: 'Işın [AB)', icon: '🔦', desc: 'Başlangıcı sabit, ucu sonsuz' },
                  { id: 'line', label: 'Doğru AB', icon: '♾️', desc: 'İki ucu da sonsuz' },
                  { id: 'perpendicular', label: 'Dikme (⟂)', icon: '📐', desc: '90° ile en kısa mesafe' },
                  { id: 'parallel', label: 'Paralel Doğrular (//)', icon: '🚂', desc: 'Asla kesişmeyen raylar' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleGameSelect(opt.id)}
                    className="game-option-tile"
                  >
                    <span className="opt-icon">{opt.icon}</span>
                    <span className="opt-title">{opt.label}</span>
                    <span className="opt-desc">{opt.desc}</span>
                  </button>
                ))}
              </div>

              {gameFeedback && (
                <div className={`challenge-feedback-box ${gameFeedback.type} mt-3`}>
                  {gameFeedback.text}
                </div>
              )}
            </div>
          ) : (
            <div className="challenge-success-screen">
              <div className="success-badge-celebration">🏆</div>
              <h2>Tebrikler! Geometri Çizim Görevlerini Tamamladın!</h2>
              <p>Doğru, doğru parçası, ışın, dikme ve paralellik kavramlarını kusursuz bir şekilde pekiştirdin.</p>
              <div className="earned-rewards-pill">
                <Award size={20} />
                <span>+50 XP Kazandın!</span>
              </div>
              <button 
                onClick={() => { setActiveTab('drawing'); setCurrentMissionIdx(0); setGameCompleted(false); setGameScore(0); }} 
                className="btn-action-secondary"
              >
                <RefreshCw size={16} />
                <span>Yeniden Oyna</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
