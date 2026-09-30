import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Compass, Landmark, MapPin, CheckCircle2, 
  HelpCircle, RefreshCw, ArrowRight, Sparkles, Trophy, Lightbulb,
  Sun, Trees, Mountain, ShoppingBag, Eye
} from 'lucide-react';
import { TURKEY_MAP_VIEWBOX, REGIONS_DATA, PROVINCES_DATA } from '../../data/turkeyRealMapData';

// =========================================================================
// 1. TÜRKİYE HARİTA & KÜLTÜR KAŞİFİ SORULARI (7 COĞRAFİ BÖLGE)
// =========================================================================
const MAP_QUESTIONS = [
  {
    id: 'mq_1',
    targetRegion: 'karadeniz',
    targetTitle: 'Karadeniz Bölgesi',
    question: 'Kemençe eşliğinde oynanan, hamsinin ve hırçın dalgaların hareketliliğini simgeleyen "Horon" hangi bölgemize aittir?',
    hint: 'Bol yağış alan, yeşil yaylaları ve fındık-çayıyla ünlü kuzey sahil bölgemiz.',
    fact: 'Horon, Karadeniz insanının kıpır kıpır enerjisini ve hırçın dalgalarını yansıtan dünyaca ünlü bir kültürel mirasımızdır.'
  },
  {
    id: 'mq_2',
    targetRegion: 'marmara',
    targetTitle: 'Marmara Bölgesi (Edirne)',
    question: 'Türkiye’nin Avrupa kıtasına açılan en işlek ve en büyük sınır kapısı olan "Kapıkule" hangi bölgemizdedir?',
    hint: 'Bulgaristan ve Yunanistan sınırında, iki kıtayı birbirine bağlayan boğazların olduğu bölge.',
    fact: 'Edirne’deki Kapıkule Sınır Kapısı, Türkiye’nin Avrupa ile karayolu ihracat ve turizm trafiğinin en büyük merkezidir.'
  },
  {
    id: 'mq_3',
    targetRegion: 'guneydogu_anadolu',
    targetTitle: 'Güneydoğu Anadolu (Şanlıurfa)',
    question: '12.000 yıllık geçmişiyle "Tarihin Sıfır Noktası" kabul edilen ve dünyanın en eski tapınağı olan "Göbeklitepe" nerededir?',
    hint: 'Fırat ve Dicle nehirlerinin hayat verdiği güneydeki kadim Mezopotamya komşusu bölgemiz.',
    fact: 'Şanlıurfa Göbeklitepe, insanlık tarihinin bilinen en eski anıtsal ibadet merkezidir ve tüm arkeoloji tarihini değiştirmiştir.'
  },
  {
    id: 'mq_4',
    targetRegion: 'ege',
    targetTitle: 'Ege Bölgesi',
    question: 'Yiğitliği ve mertliği simgeleyen, efelerin davul-zurna eşliğinde oynadığı "Zeybek" halk oyunu hangi bölgemizindir?',
    hint: 'Zeytinlikleri, kıyıları ve antik kentleriyle ünlü batı sahil bölgemiz.',
    fact: 'Zeybek oyunu, Kurtuluş Savaşı’nda büyük kahramanlıklar gösteren milli mücadele efelerimizin onurlu duruşudur.'
  },
  {
    id: 'mq_5',
    targetRegion: 'ic_anadolu',
    targetTitle: 'İç Anadolu (Nevşehir / Kapadokya)',
    question: 'Rüzgâr ve sel sularının volkanik tüfleri aşındırmasıyla oluşan masalsı "Peri Bacaları" doğal anıtı hangi bölgemizdedir?',
    hint: 'Tuz Gölü’nün ve başkentimiz Ankara’nın bulunduğu orta bölgemiz.',
    fact: 'Nevşehir Kapadokya Peri Bacaları, doğanın milyonlarca yılda heykeltıraş gibi yonttuğu büyüleyici bir doğa harikasıdır.'
  },
  {
    id: 'mq_6',
    targetRegion: 'dogu_anadolu',
    targetTitle: 'Doğu Anadolu Bölgesi (Van)',
    question: 'Urartuların 2800 yıl önce kayaları oyup yaptığı ve günümüzde hâlâ çalışan meşhur "Şamran Su Kanalı" hangi bölgemizdedir?',
    hint: 'Van Gölü’nün ve Ağrı Dağı’nın yer aldığı en yüksek dağlık bölgemiz.',
    fact: 'Van Kalesi ve Şamran (Menua) sulama kanalı, Urartuların eşsiz taş işçiliği ve yüksek mühendislik dehasını gösterir.'
  },
  {
    id: 'mq_7',
    targetRegion: 'akdeniz',
    targetTitle: 'Akdeniz Bölgesi (Denizli/Antalya Kuşağı)',
    question: 'Kalsiyumlu suların bıraktığı bembeyaz tortularla oluşan "Pamukkale Travertenleri" ve görkemli Toros Dağları hangi bölgemizdedir?',
    hint: 'Toros Dağları’nın ve narenciye bahçelerinin bulunduğu güney kıyı kuşağımız.',
    fact: 'Pamukkale Travertenleri hem şifalı suları hem de bembeyaz teraslarıyla UNESCO Dünya Mirası koruması altındadır.'
  }
];

// =========================================================================
// 2. ARKEOLOJİ DEDEKTİFİ: KAYIP ESERLER VE MEDENİYETLER
// =========================================================================
const ARTIFACTS_DATA = [
  {
    id: 'art_1',
    name: 'Çivi Yazılı Kil Tablet',
    icon: '📜',
    clue: 'İnsanlık tarihinde yazıyı ilk kez bularak Tarih Çağlarını başlatan ve 7 katlı Ziggurat tapınakları inşa eden Mezopotamya medeniyetidir.',
    correctCivilization: 'Sümerler',
    options: ['Sümerler', 'Hititler', 'Lidyalılar', 'Urartular'],
    explanation: 'Sümerler MÖ 3200’de çivi yazısını icat ederek insanlık tarihinin en büyük buluşuna imza atmışlardır.'
  },
  {
    id: 'art_2',
    name: 'İlk Madeni Para (Elektron)',
    icon: '🪙',
    clue: 'Ticarette zor ve zahmetli olan takas (değiş-tokuş) usulüne son vermiş, Kral Yolu üzerinde ticaret yaparak zenginleşmişlerdir.',
    correctCivilization: 'Lidyalılar',
    options: ['Frigler', 'Lidyalılar', 'Babiller', 'Sümerler'],
    explanation: 'Manisa Sardes merkezli Lidyalılar, parayı icat ederek dünya ticaretinde devrim yapmışlardır.'
  },
  {
    id: 'art_3',
    name: 'Fibula (Tarihin İlk Çengelli İğnesi)',
    icon: '🧷',
    clue: 'Başkentleri Ankara Gordion olan; saban kırana veya öküz öldürene ölüm cezası veren, dokumacılıkta usta uygarlıktır.',
    correctCivilization: 'Frigler',
    options: ['Hititler', 'Frigler', 'Urartular', 'Asurlar'],
    explanation: 'Frigler tunçtan yaptıkları Fibula çengelli iğneleri ve Tapates kilimleriyle tanınırlar.'
  },
  {
    id: 'art_4',
    name: 'Kadeş Barış Antlaşması Tableti',
    icon: '🕊️',
    clue: 'Çorum Hattuşa merkezli bu büyük devlet, Mısırlılar ile tarihteki ilk yazılı barış antlaşmasını imzalamış ve Anal adlı yıllıklar tutmuştur.',
    correctCivilization: 'Hititler',
    options: ['Hititler', 'Babiller', 'Lidyalılar', 'Frigler'],
    explanation: 'Hititler tarihin ilk yazılı barış antlaşması olan Kadeş Barışı’nı imzalayarak dünya diplomasisine öncülük etmiştir.'
  },
  {
    id: 'art_5',
    name: 'Kültepe Ticaret Tabletleri',
    icon: '🐪',
    clue: 'Mezopotamya’dan Kayseri Kültepe (Kaniş) pazar yerine gelip ticaret yaparak Anadolu insanına çivi yazısını öğreten tüccar uygarlıktır.',
    correctCivilization: 'Asurlar',
    options: ['Sümerler', 'Asurlar', 'Urartular', 'Lidyalılar'],
    explanation: 'Asurlu tüccarlar Anadolu’ya yazıyı getirerek Anadolu’da Tarih Çağlarını başlatmışlardır.'
  },
  {
    id: 'art_6',
    name: 'Hammurabi Kanunları Steli',
    icon: '⚖️',
    clue: 'Kralının adıyla anılan sert adalet kuralları (kısasa kısas) koyan ve Dünyanın Yedi Harikası’ndan Asma Bahçeleri inşa eden devlettir.',
    correctCivilization: 'Babiller',
    options: ['Babiller', 'Sümerler', 'Hititler', 'Frigler'],
    explanation: 'Babiller Kral Hammurabi’nin kanunları ve görkemli Babil Kulesi ile tarihe geçmişlerdir.'
  },
  {
    id: 'art_7',
    name: 'Taş Sulama Kanalı (Şamran)',
    icon: '🌊',
    clue: 'Başkenti Tuşpa (Van) olan, sarp dağlar üzerine görkemli kaleler kuran ve taş oymacılığında rakipsiz olan madenci uygarlıktır.',
    correctCivilization: 'Urartular',
    options: ['Urartular', 'Hititler', 'Lidyalılar', 'Asurlar'],
    explanation: 'Urartuların inşa ettiği Şamran su kanalı 2800 yıldır hâlâ akmakta ve tarlaları sulamaktadır.'
  }
];

export const SosyalResfebeLab = ({ topic, initialTab = 'map', onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  // 2 Ana Sekme: 'map' ve 'detective'
  const [activeTab, setActiveTab] = useState(topic?.interactiveLab?.initialTab || initialTab);

  // Harita Görev Durumu
  const [mapIndex, setMapIndex] = useState(0);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [hoveredProvinceName, setHoveredProvinceName] = useState(null);
  const [mapFeedback, setMapFeedback] = useState(null);
  const [showMapHint, setShowMapHint] = useState(false);
  const [solvedMapCount, setSolvedMapCount] = useState(0);

  // Arkeoloji Görev Durumu
  const [artIndex, setArtIndex] = useState(0);
  const [artFeedback, setArtFeedback] = useState(null);
  const [solvedArtCount, setSolvedArtCount] = useState(0);

  const currentMapQ = MAP_QUESTIONS[mapIndex];
  const currentArt = ARTIFACTS_DATA[artIndex];
  const selectedRegion = selectedRegionId ? REGIONS_DATA[selectedRegionId] : null;

  // Bölge Tıklama
  const handleRegionClick = (regionId) => {
    setSelectedRegionId(regionId);

    if (regionId === currentMapQ.targetRegion) {
      setMapFeedback({ 
        isCorrect: true, 
        text: `Doğru Bölge: ${currentMapQ.targetTitle}! Harikasın! 🎉` 
      });
      playSound('correct', soundEnabled);
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
      setSolvedMapCount(prev => prev + 1);
    } else {
      setMapFeedback({ 
        isCorrect: false, 
        text: `Burası değil. İpucu: ${currentMapQ.hint}` 
      });
      playSound('wrong', soundEnabled);
    }
  };

  const handleNextMapQuestion = () => {
    if (mapIndex < MAP_QUESTIONS.length - 1) {
      setMapIndex(prev => prev + 1);
      setSelectedRegionId(null);
      setMapFeedback(null);
      setShowMapHint(false);
    } else {
      confetti({ particleCount: 90, spread: 80 });
      playSound('victory', soundEnabled);
      completeActivity('sosyal', topic?.id || 'sos_u2_t1', 'interactiveLab', 100, 100);
      if (onFinish) onFinish();
    }
  };

  // Arkeoloji Cevap
  const handleArtifactAnswer = (choice) => {
    if (choice === currentArt.correctCivilization) {
      setArtFeedback({ 
        isCorrect: true, 
        text: `Tebrikler! Eser ait olduğu medeniyete ulaştı: ${currentArt.correctCivilization} 🏛️` 
      });
      playSound('correct', soundEnabled);
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
      setSolvedArtCount(prev => prev + 1);
    } else {
      setArtFeedback({ 
        isCorrect: false, 
        text: 'Yanlış sandık! Arkeolog ipucunu dikkatlice oku ve tekrar dene.' 
      });
      playSound('wrong', soundEnabled);
    }
  };

  const handleNextArtifact = () => {
    if (artIndex < ARTIFACTS_DATA.length - 1) {
      setArtIndex(prev => prev + 1);
      setArtFeedback(null);
    } else {
      confetti({ particleCount: 90, spread: 80 });
      playSound('victory', soundEnabled);
      completeActivity('sosyal', topic?.id || 'sos_u3_t3', 'interactiveLab', 100, 100);
      if (onFinish) onFinish();
    }
  };

  return (
    <div className="sosyal-lab-container animate-fadeIn">
      {/* Lab Başlığı */}
      <div className="lab-header-banner">
        <div className="lab-badge-row">
          <span className="lab-pill-tag">🌍 5. Sınıf Sosyal Bilgiler</span>
          <span className="lab-pill-tag tag-gold">✨ İnteraktif Öğrenme Atölyesi</span>
        </div>
        <h2 className="lab-main-title">Sosyal Kaşif & Tarih-Coğrafya Laboratuvarı 🧭</h2>
        <p className="lab-subtitle-desc">
          Gerçek Türkiye haritası üzerinde 7 coğrafi bölgemizi keşfet, kültürel zenginliklerimizi ve kadim medeniyetlerimizin eserlerini tanı!
        </p>

        {/* 2 Temiz, Düzenli Sekme */}
        <div className="clean-dual-tab-bar">
          <button
            type="button"
            onClick={() => { setActiveTab('map'); playSound('click', soundEnabled); }}
            className={`dual-tab-btn ${activeTab === 'map' ? 'active' : ''}`}
          >
            <Compass size={20} className="tab-btn-icon" />
            <div className="tab-btn-text">
              <span className="tab-title">1. Gerçek Türkiye Haritası & Coğrafya Kaşifi</span>
              <span className="tab-count-badge">{solvedMapCount}/{MAP_QUESTIONS.length} Tamamlandı</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('detective'); playSound('click', soundEnabled); }}
            className={`dual-tab-btn ${activeTab === 'detective' ? 'active' : ''}`}
          >
            <Landmark size={20} className="tab-btn-icon" />
            <div className="tab-btn-text">
              <span className="tab-title">2. Arkeoloji Dedektifi (Medeniyet Sandığı)</span>
              <span className="tab-count-badge">{solvedArtCount}/{ARTIFACTS_DATA.length} Tamamlandı</span>
            </div>
          </button>
        </div>
      </div>

      {/* =========================================================================
          SEKME 1: GERÇEK TÜRKİYE COĞRAFİ BÖLGELER HARİTASI
          ========================================================================= */}
      {activeTab === 'map' && (
        <div className="map-explorer-card animate-fadeIn">
          {/* İlerleme Çubuğu */}
          <div className="resfebe-progress-bar-wrap">
            <div className="progress-info-row">
              <span className="progress-label">Keşif Görevi {mapIndex + 1} / {MAP_QUESTIONS.length}</span>
              <span className="progress-percent">Hedef: <strong>{currentMapQ.targetTitle}</strong></span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${((mapIndex + 1) / MAP_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Soru / Görev Kutusu */}
          <div className="map-question-box">
            <div className="q-badge">📍 Keşif Görevi</div>
            <h3 className="q-text">{currentMapQ.question}</h3>
            
            <div className="q-actions-row">
              <button 
                type="button"
                onClick={() => setShowMapHint(!showMapHint)} 
                className="btn-map-hint"
              >
                <Lightbulb size={16} />
                <span>{showMapHint ? 'İpucunu Kapat' : 'Coğrafi İpucu Al'}</span>
              </button>
              
              {/* Canlı İl ve Bölge Göstergesi */}
              <div className="map-hover-indicator">
                {hoveredProvinceName ? (
                  <span>📍 <strong>{hoveredProvinceName}</strong> • {REGIONS_DATA[hoveredRegionId]?.name}</span>
                ) : (
                  <span>👉 Haritada veya butonlarda ilgili bölgeye dokun:</span>
                )}
              </div>
            </div>

            {showMapHint && (
              <div className="map-hint-pop animate-fadeIn">
                💡 <strong>Coğrafi İpucu:</strong> {currentMapQ.hint}
              </div>
            )}
          </div>

          {/* GERÇEK TÜRKİYE VE BÖLGELER HARİTASI (100% Gerçek SVG Sınırları) */}
          <div className="turkey-map-container-box">
            <div className="map-sea-backdrop">
              {/* Deniz Etiketleri */}
              <span className="sea-label sea-black">🌊 Karadeniz</span>
              <span className="sea-label sea-aegean">Ege Denizi</span>
              <span className="sea-label sea-marmara">Marmara D.</span>
              <span className="sea-label sea-med">Akdeniz ☀️</span>
              
              <svg 
                viewBox={TURKEY_MAP_VIEWBOX} 
                className="turkey-accurate-svg"
                aria-label="Gerçek Türkiye Coğrafi Bölgeler Haritası"
              >
                <defs>
                  <filter id="realMapShadow" x="-2%" y="-2%" width="104%" height="106%">
                    <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.18" />
                  </filter>
                  <filter id="regionGlow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* 81 İl ve 7 Coğrafi Bölgenin Gerçek Sınırları */}
                <g filter="url(#realMapShadow)">
                  {PROVINCES_DATA.map((prov) => {
                    const reg = REGIONS_DATA[prov.regionId];
                    const isSelected = selectedRegionId === prov.regionId;
                    const isTarget = currentMapQ.targetRegion === prov.regionId;
                    const isHovered = hoveredRegionId === prov.regionId;

                    let fillColor = reg ? reg.color : '#94a3b8';
                    if (isSelected && isTarget) fillColor = '#10b981'; // Doğru bölge seçimi: Canlı Yeşil
                    else if (isSelected && !isTarget) fillColor = '#ef4444'; // Yanlış seçim: Kırmızı
                    else if (isHovered && reg) fillColor = reg.accentColor; // Hover vurgusu

                    return (
                      <g 
                        key={prov.id}
                        id={prov.id}
                        className={`province-group ${isHovered ? 'hovered' : ''} ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleRegionClick(prov.regionId)}
                        onMouseEnter={() => {
                          setHoveredRegionId(prov.regionId);
                          setHoveredProvinceName(prov.name);
                        }}
                        onMouseLeave={() => {
                          setHoveredRegionId(null);
                          setHoveredProvinceName(null);
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        {prov.paths.map((dPath, pIdx) => (
                          <path
                            key={pIdx}
                            d={dPath}
                            fill={fillColor}
                            stroke="#ffffff"
                            strokeWidth={isHovered || isSelected ? '1.4' : '0.75'}
                            strokeLinejoin="round"
                            className="turkey-real-province-path"
                          />
                        ))}
                      </g>
                    );
                  })}
                </g>

                {/* Tuz Gölü ve Van Gölü Belirteçleri */}
                <g className="lake-markers" pointerEvents="none">
                  <ellipse cx="430" cy="225" rx="16" ry="12" fill="#bae6fd" stroke="#ffffff" strokeWidth="1" />
                  <text x="430" y="228" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="800">Tuz G.</text>

                  <ellipse cx="885" cy="225" rx="18" ry="14" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                  <text x="885" y="228" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="800">Van G.</text>
                </g>

                {/* 7 Coğrafi Bölgenin Merkez Etiket Butonları */}
                {Object.values(REGIONS_DATA).map(reg => {
                  const isSelected = selectedRegionId === reg.id;
                  const isHovered = hoveredRegionId === reg.id;
                  const isTarget = currentMapQ.targetRegion === reg.id;

                  let pinBg = 'rgba(15, 23, 42, 0.85)';
                  let pinBorder = '#ffffff';

                  if (isSelected && isTarget) {
                    pinBg = '#10b981';
                    pinBorder = '#ffffff';
                  } else if (isSelected && !isTarget) {
                    pinBg = '#ef4444';
                    pinBorder = '#ffffff';
                  } else if (isHovered) {
                    pinBg = reg.accentColor;
                    pinBorder = '#fef08a';
                  }

                  return (
                    <g 
                      key={`label-${reg.id}`} 
                      className="region-label-pin"
                      onClick={() => handleRegionClick(reg.id)}
                      onMouseEnter={() => {
                        setHoveredRegionId(reg.id);
                        setHoveredProvinceName(null);
                      }}
                      onMouseLeave={() => setHoveredRegionId(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      <rect
                        x={reg.center.x - 52}
                        y={reg.center.y - 13}
                        width="104"
                        height="26"
                        rx="13"
                        fill={pinBg}
                        stroke={pinBorder}
                        strokeWidth={isSelected ? '2.4' : '1.5'}
                      />
                      <text
                        x={reg.center.x}
                        y={reg.center.y + 4.5}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="11.5"
                        fontWeight="800"
                      >
                        {reg.shortName}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* 7 Coğrafi Bölge Hızlı Seçim Butonları (Tablet/Telefonda Rahat Dokunma) */}
          <div className="regions-interactive-grid">
            {Object.values(REGIONS_DATA).map(reg => {
              const isSelected = selectedRegionId === reg.id;
              const isTarget = currentMapQ.targetRegion === reg.id;
              let cardStateClass = '';
              if (isSelected && isTarget) cardStateClass = 'correct';
              else if (isSelected && !isTarget) cardStateClass = 'wrong';

              return (
                <button
                  key={reg.id}
                  type="button"
                  onClick={() => handleRegionClick(reg.id)}
                  onMouseEnter={() => setHoveredRegionId(reg.id)}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  className={`region-select-card ${cardStateClass}`}
                >
                  <div className="card-top-indicator" style={{ backgroundColor: reg.color }}></div>
                  <div className="card-body">
                    <span className="card-region-title">{reg.name}</span>
                    <span className="card-region-badge">{reg.badge}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Seçili Bölge Eğitim & Coğrafya Bilgi Kartı (5. Sınıf MEB Kazanımları) */}
          {selectedRegion && (
            <div className="region-detailed-intel-card animate-fadeIn">
              <div className="intel-card-header" style={{ borderLeftColor: selectedRegion.color }}>
                <div className="intel-title-group">
                  <span className="intel-badge" style={{ backgroundColor: selectedRegion.bgLight, color: selectedRegion.accentColor }}>
                    {selectedRegion.badge}
                  </span>
                  <h4>{selectedRegion.name} Coğrafi Özellikleri</h4>
                </div>
                <p className="intel-summary">{selectedRegion.description}</p>
              </div>

              <div className="intel-grid-details">
                <div className="intel-item">
                  <div className="intel-item-head">
                    <Sun size={16} className="text-amber-500" />
                    <strong>İklim Tipi:</strong>
                  </div>
                  <span>{selectedRegion.iklim}</span>
                </div>

                <div className="intel-item">
                  <div className="intel-item-head">
                    <Trees size={16} className="text-emerald-500" />
                    <strong>Bitki Örtüsü:</strong>
                  </div>
                  <span>{selectedRegion.bitkiOrtusu}</span>
                </div>

                <div className="intel-item">
                  <div className="intel-item-head">
                    <Mountain size={16} className="text-indigo-500" />
                    <strong>Yeryüzü Şekilleri & Göller:</strong>
                  </div>
                  <span>{selectedRegion.yeryuzu}</span>
                </div>

                <div className="intel-item">
                  <div className="intel-item-head">
                    <ShoppingBag size={16} className="text-purple-500" />
                    <strong>Ekonomik Faaliyetler:</strong>
                  </div>
                  <span>{selectedRegion.ekonomi}</span>
                </div>

                <div className="intel-item full-width">
                  <div className="intel-item-head">
                    <Landmark size={16} className="text-rose-500" />
                    <strong>Tarihi & Kültürel Miras:</strong>
                  </div>
                  <span>{selectedRegion.tarihi}</span>
                </div>
              </div>
            </div>
          )}

          {/* Soru Bildirim Bannerı */}
          {mapFeedback && (
            <div className={`map-feedback-banner ${mapFeedback.isCorrect ? 'correct' : 'wrong'} animate-fadeIn`}>
              <div className="feedback-content">
                {mapFeedback.isCorrect ? (
                  <>
                    <div className="fb-header">
                      <CheckCircle2 size={24} className="text-emerald-400" />
                      <h4>{mapFeedback.text}</h4>
                    </div>
                    <p className="fb-fact">✨ <strong>Biliyor muydunuz?</strong> {currentMapQ.fact}</p>
                    <button onClick={handleNextMapQuestion} className="btn-next-map-q">
                      <span>{mapIndex < MAP_QUESTIONS.length - 1 ? 'Sonraki Keşif Görevine Geç' : 'Tüm Görevleri Tamamla! 🏆'}</span>
                      <ArrowRight size={18} />
                    </button>
                  </>
                ) : (
                  <p className="fb-wrong-txt">❌ {mapFeedback.text}</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          SEKME 2: ARKEOLOJİ DEDEKTİFİ: MEDENİYET SANDIĞI
          ========================================================================= */}
      {activeTab === 'detective' && (
        <div className="detective-game-card animate-fadeIn">
          <div className="resfebe-progress-bar-wrap">
            <div className="progress-info-row">
              <span className="progress-label">Eser {artIndex + 1} / {ARTIFACTS_DATA.length}</span>
              <span className="progress-percent">Kayıp Tarihi Eser İncelemesi</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${((artIndex + 1) / ARTIFACTS_DATA.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="artifact-showcase-box">
            <div className="artifact-icon-stage">
              <span className="art-emoji">{currentArt.icon}</span>
              <span className="art-badge">🔍 Bulunan Tarihi Eser</span>
            </div>

            <h3 className="art-name">{currentArt.name}</h3>

            <div className="art-clue-card">
              <p className="art-clue-label">📜 Arkeolog Notu & İpucu:</p>
              <p className="art-clue-body">{currentArt.clue}</p>
            </div>

            <p className="art-question-callout">
              Bu paha biçilmez ortak miras eseri hangi medeniyetimize aittir?
            </p>

            <div className="civilization-chests-grid">
              {currentArt.options.map((civName) => (
                <button
                  key={civName}
                  type="button"
                  onClick={() => handleArtifactAnswer(civName)}
                  className="civ-chest-button"
                >
                  <Landmark size={22} className="chest-icon" />
                  <span className="chest-title">{civName}</span>
                </button>
              ))}
            </div>
          </div>

          {artFeedback && (
            <div className={`map-feedback-banner ${artFeedback.isCorrect ? 'correct' : 'wrong'} animate-fadeIn`}>
              <div className="feedback-content">
                {artFeedback.isCorrect ? (
                  <>
                    <div className="fb-header">
                      <CheckCircle2 size={24} className="text-emerald-400" />
                      <h4>{artFeedback.text}</h4>
                    </div>
                    <p className="fb-fact">🏛️ <strong>Tarihi Bilgi:</strong> {currentArt.explanation}</p>
                    <button onClick={handleNextArtifact} className="btn-next-map-q">
                      <span>{artIndex < ARTIFACTS_DATA.length - 1 ? 'Sonraki Eseri İncele' : 'Tüm Eserleri Teslim Ettin! 🏆'}</span>
                      <ArrowRight size={18} />
                    </button>
                  </>
                ) : (
                  <p className="fb-wrong-txt">❌ {artFeedback.text}</p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
