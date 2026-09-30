import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Compass, Landmark, MapPin, CheckCircle2, 
  HelpCircle, RefreshCw, ArrowRight, Sparkles, Trophy, Lightbulb
} from 'lucide-react';

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
    targetRegion: 'guneydogu',
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
    targetRegion: 'icanadolu',
    targetTitle: 'İç Anadolu (Nevşehir / Kapadokya)',
    question: 'Rüzgâr ve sel sularının volkanik tüfleri aşındırmasıyla oluşan masalsı "Peri Bacaları" doğal anıtı hangi bölgemizdedir?',
    hint: 'Tuz Gölü’nün ve başkentimiz Ankara’nın bulunduğu orta bölgemiz.',
    fact: 'Nevşehir Kapadokya Peri Bacaları, doğanın milyonlarca yılda heykeltıraş gibi yonttuğu büyüleyici bir doğa harikasıdır.'
  },
  {
    id: 'mq_6',
    targetRegion: 'doguanadolu',
    targetTitle: 'Doğu Anadolu Bölgesi (Van)',
    question: 'Urartuların 2800 yıl önce kayaları oyup yaptığı ve günümüzde hâlâ çalışan meşhur "Şamran Su Kanalı" hangi bölgemizdedir?',
    hint: 'Van Gölü’nün ve Ağrı Dağı’nın yer aldığı en yüksek dağlık bölgemiz.',
    fact: 'Van Kalesi ve Şamran (Menua) sulama kanalı, Urartuların eşsiz taş işçiliği ve yüksek mühendislik dehasını gösterir.'
  },
  {
    id: 'mq_7',
    targetRegion: 'akdeniz',
    targetTitle: 'Akdeniz Bölgesi (Denizli)',
    question: 'Kalsiyumlu termal suların bıraktığı bembeyaz tortularla oluşan dünyaca ünlü "Pamukkale Travertenleri" hangi bölgemizdedir?',
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

// Real Turkey Regional SVG Map Data (800x380 viewport)
const TURKEY_REGIONS = [
  {
    id: 'marmara',
    name: 'Marmara Bölgesi',
    shortName: 'Marmara',
    badge: '🌉 Boğazlar & Kapıkule',
    color: '#38bdf8',
    hoverColor: '#0ea5e9',
    center: { x: 130, y: 100 },
    // Realistic regional polygon for Marmara (Trakya, Boğazlar, Bursa, Çanakkale)
    d: 'M 45,55 C 65,40 100,35 130,45 C 145,50 160,45 175,60 C 190,65 210,65 220,80 C 225,95 215,115 195,125 C 175,135 150,140 135,135 C 115,145 95,150 80,140 C 65,130 55,105 50,90 Z'
  },
  {
    id: 'ege',
    name: 'Ege Bölgesi',
    shortName: 'Ege',
    badge: '🌿 Zeybek & Efeler',
    color: '#34d399',
    hoverColor: '#10b981',
    center: { x: 110, y: 200 },
    // Ege coastline and hinterland (İzmir, Muğla, Afyon)
    d: 'M 75,145 C 95,145 130,140 150,145 C 165,155 175,175 175,200 C 175,235 160,265 140,275 C 115,280 85,270 70,250 C 60,225 65,195 65,170 C 65,155 70,150 75,145 Z'
  },
  {
    id: 'karadeniz',
    name: 'Karadeniz Bölgesi',
    shortName: 'Karadeniz',
    badge: '🌊 Horon & Yaylalar',
    color: '#10b981',
    hoverColor: '#059669',
    center: { x: 420, y: 75 },
    // Long arching northern coastal belt from Bolu/Sinop to Artvin/Sarp
    d: 'M 220,80 C 270,70 330,65 375,45 C 410,50 460,65 520,60 C 580,60 635,70 670,85 C 660,115 625,120 570,120 C 510,120 450,115 390,115 C 330,115 270,115 235,115 C 220,105 215,90 220,80 Z'
  },
  {
    id: 'icanadolu',
    name: 'İç Anadolu Bölgesi',
    shortName: 'İç Anadolu',
    badge: '🏛️ Peri Bacaları & Başkent',
    color: '#fbbf24',
    hoverColor: '#f59e0b',
    center: { x: 300, y: 165 },
    // Central high plateau (Ankara, Konya, Kapadokya, Sivas)
    d: 'M 195,125 C 240,120 310,120 390,120 C 420,125 450,135 455,160 C 460,195 440,225 410,230 C 370,235 320,235 270,230 C 230,225 190,215 180,185 C 175,160 185,135 195,125 Z'
  },
  {
    id: 'akdeniz',
    name: 'Akdeniz Bölgesi',
    shortName: 'Akdeniz',
    badge: '☀️ Pamukkale & Toroslar',
    color: '#f59e0b',
    hoverColor: '#d97706',
    center: { x: 280, y: 275 },
    // Southern Mediterranean crescent (Antalya Bay, Mersin, Adana, Hatay)
    d: 'M 140,275 C 165,260 180,240 215,235 C 260,235 310,240 370,240 C 410,245 450,250 475,265 C 500,285 520,325 500,345 C 475,340 450,305 410,295 C 350,285 290,290 240,300 C 190,305 160,295 140,275 Z'
  },
  {
    id: 'doguanadolu',
    name: 'Doğu Anadolu Bölgesi',
    shortName: 'Doğu Anadolu',
    badge: '🏔️ Van Kalesi & Ağrı Dağı',
    color: '#f97316',
    hoverColor: '#ea580c',
    center: { x: 590, y: 170 },
    // High eastern highlands surrounding Lake Van
    d: 'M 455,140 C 510,125 570,125 670,90 C 720,110 755,140 760,185 C 760,220 735,250 690,255 C 640,260 590,255 540,245 C 490,235 465,200 455,160 Z'
  },
  {
    id: 'guneydogu',
    name: 'Güneydoğu Anadolu Bölgesi',
    shortName: 'Güneydoğu',
    badge: '🏺 Göbeklitepe & Kadim Kentler',
    color: '#ec4899',
    hoverColor: '#db2777',
    center: { x: 510, y: 280 },
    // Southeastern Fertile Crescent (Şanlıurfa, Gaziantep, Diyarbakır, Mardin)
    d: 'M 475,255 C 520,245 580,250 640,255 C 670,265 670,295 640,315 C 600,325 550,325 500,320 C 470,310 465,285 475,255 Z'
  }
];

export const SosyalResfebeLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  // 2 Pure, clear tabs: 'map' and 'detective'
  const [activeTab, setActiveTab] = useState('map'); // 'map' | 'detective'

  // Map Game State
  const [mapIndex, setMapIndex] = useState(0);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [hoveredRegionId, setHoveredRegionId] = useState(null);
  const [mapFeedback, setMapFeedback] = useState(null);
  const [showMapHint, setShowMapHint] = useState(false);
  const [solvedMapCount, setSolvedMapCount] = useState(0);

  // Detective Game State
  const [artIndex, setArtIndex] = useState(0);
  const [artFeedback, setArtFeedback] = useState(null);
  const [solvedArtCount, setSolvedArtCount] = useState(0);

  const currentMapQ = MAP_QUESTIONS[mapIndex];
  const currentArt = ARTIFACTS_DATA[artIndex];

  // Map Click Handler
  const handleRegionClick = (regionId) => {
    setSelectedRegionId(regionId);

    if (regionId === currentMapQ.targetRegion) {
      setMapFeedback({ isCorrect: true, text: `Doğru Bölge: ${currentMapQ.targetTitle}! Harikasın! 🎉` });
      playSound('correct', soundEnabled);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
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

  // Detective Click Handler
  const handleArtifactAnswer = (choice) => {
    if (choice === currentArt.correctCivilization) {
      setArtFeedback({ isCorrect: true, text: `Tebrikler! Eser ait olduğu medeniyete ulaştı: ${currentArt.correctCivilization} 🏛️` });
      playSound('correct', soundEnabled);
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
      setSolvedArtCount(prev => prev + 1);
    } else {
      setArtFeedback({ isCorrect: false, text: 'Yanlış sandık! Arkeolog ipucunu dikkatlice oku ve tekrar dene.' });
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
      {/* Lab Header */}
      <div className="lab-header-banner">
        <div className="lab-badge-row">
          <span className="lab-pill-tag">🌍 5. Sınıf Sosyal Bilgiler</span>
          <span className="lab-pill-tag tag-gold">✨ İnteraktif Öğrenme Atölyesi</span>
        </div>
        <h2 className="lab-main-title">Sosyal Kaşif & Tarih-Coğrafya Laboratuvarı 🧭</h2>
        <p className="lab-subtitle-desc">
          Türkiye haritası üzerinde kültürümüzü ve coğrafyamızı keşfet, kadim medeniyetlerin kayıp eserlerini doğru sandığa yerleştir!
        </p>

        {/* Clean, perfectly balanced 2-Tab Navigation Bar */}
        <div className="clean-dual-tab-bar">
          <button
            type="button"
            onClick={() => { setActiveTab('map'); playSound('click', soundEnabled); }}
            className={`dual-tab-btn ${activeTab === 'map' ? 'active' : ''}`}
          >
            <Compass size={20} className="tab-btn-icon" />
            <div className="tab-btn-text">
              <span className="tab-title">1. Türkiye Harita & Kültür Kaşifi</span>
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
          TAB 1: TÜRKİYE HARİTA & KÜLTÜR KAŞİFİ
          ========================================================================= */}
      {activeTab === 'map' && (
        <div className="map-explorer-card animate-fadeIn">
          {/* Progress row */}
          <div className="resfebe-progress-bar-wrap">
            <div className="progress-info-row">
              <span className="progress-label">Görev {mapIndex + 1} / {MAP_QUESTIONS.length}</span>
              <span className="progress-percent">Hedef Bölge: <strong>{currentMapQ.targetTitle}</strong></span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${((mapIndex + 1) / MAP_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Box */}
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
              <span className="q-instruction">👉 Aşağıdaki Türkiye haritasında veya butonlarda doğru bölgeye dokun:</span>
            </div>

            {showMapHint && (
              <div className="map-hint-pop animate-fadeIn">
                💡 <strong>Coğrafi İpucu:</strong> {currentMapQ.hint}
              </div>
            )}
          </div>

          {/* Realistic Turkey Regional Map Stage */}
          <div className="turkey-map-container-box">
            <div className="map-sea-backdrop">
              <span className="sea-label sea-black">Karadeniz</span>
              <span className="sea-label sea-aegean">Ege Denizi</span>
              <span className="sea-label sea-med">Akdeniz</span>
              
              <svg viewBox="0 0 800 380" className="turkey-accurate-svg">
                <defs>
                  <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="110%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
                  </filter>
                </defs>

                {/* 7 Regions */}
                {TURKEY_REGIONS.map((region) => {
                  const isSelected = selectedRegionId === region.id;
                  const isTarget = currentMapQ.targetRegion === region.id;
                  const isHovered = hoveredRegionId === region.id;

                  let fillColor = region.color;
                  if (isSelected && isTarget) fillColor = '#10b981'; // Green on success
                  if (isSelected && !isTarget) fillColor = '#ef4444'; // Red on mistake
                  else if (isHovered) fillColor = region.hoverColor;

                  return (
                    <g 
                      key={region.id} 
                      onClick={() => handleRegionClick(region.id)}
                      onMouseEnter={() => setHoveredRegionId(region.id)}
                      onMouseLeave={() => setHoveredRegionId(null)}
                      className="region-clickable-group"
                      filter="url(#mapShadow)"
                    >
                      <path
                        d={region.d}
                        fill={fillColor}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? '3.5' : '2'}
                        className={`turkey-region-polygon ${isSelected ? 'active-target' : ''}`}
                      />

                      {/* Region Label Badge Pin */}
                      <g className="region-pin-marker" pointerEvents="none">
                        <rect
                          x={region.center.x - 48}
                          y={region.center.y - 12}
                          width="96"
                          height="24"
                          rx="12"
                          fill="rgba(15, 23, 42, 0.75)"
                          stroke="#ffffff"
                          strokeWidth="1.2"
                        />
                        <text
                          x={region.center.x}
                          y={region.center.y + 4}
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="11"
                          fontWeight="800"
                        >
                          {region.shortName}
                        </text>
                      </g>
                    </g>
                  );
                })}

                {/* Van Gölü */}
                <ellipse cx="680" cy="180" rx="20" ry="12" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" pointerEvents="none" />
                <text x="680" y="183" textAnchor="middle" fill="#0369a1" fontSize="8" fontWeight="800" pointerEvents="none">Van G.</text>

                {/* Tuz Gölü */}
                <ellipse cx="305" cy="190" rx="18" ry="10" fill="#e0f2fe" stroke="#ffffff" strokeWidth="1.5" pointerEvents="none" />
                <text x="305" y="193" textAnchor="middle" fill="#0284c7" fontSize="8" fontWeight="800" pointerEvents="none">Tuz G.</text>
              </svg>
            </div>
          </div>

          {/* Region Quick Interactive Cards Grid */}
          <div className="regions-interactive-grid">
            {TURKEY_REGIONS.map(reg => {
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

          {/* Feedback Card */}
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
          TAB 2: ARKEOLOJİ DEDEKTİFİ: MEDENİYET SANDIĞI
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
