import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Compass, Landmark, MapPin, Award, CheckCircle2, 
  HelpCircle, RefreshCw, ArrowRight, Sparkles, Trophy, Lightbulb, Puzzle
} from 'lucide-react';

// =========================================================================
// 1. HARİTA KAŞİFİ SORULARI (TÜRKİYE BÖLGELERİ & KÜLTÜR-COĞRAFYA OYUNU)
// =========================================================================
const MAP_QUESTIONS = [
  {
    id: 'mq_1',
    targetRegion: 'karadeniz',
    targetTitle: 'Karadeniz Bölgesi',
    question: 'Kemençe eşliğinde oynanan, hamsinin ve dalgaların hareketliliğini simgeleyen "Horon" hangi bölgemize aittir?',
    hint: 'Bol yağış alan, yaylaları ve çayıyla ünlü kuzey sahil bölgemiz.',
    fact: 'Horon, Karadeniz insanının kıpır kıpır enerjisini ve hırçın Karadeniz dalgalarını yansıtan eşsiz bir kültürel mirasımızdır.'
  },
  {
    id: 'mq_2',
    targetRegion: 'marmara',
    targetTitle: 'Marmara Bölgesi (Edirne)',
    question: 'Türkiye’nin Avrupa kıtasına açılan en işlek ve en büyük sınır kapısı olan "Kapıkule" hangi bölgemizdedir?',
    hint: 'Bulgaristan sınırında, iki kıtayı birbirine bağlayan boğazların olduğu bölge.',
    fact: 'Edirne’deki Kapıkule Sınır Kapısı, Türkiye’nin Avrupa ile karayolu ihracatının en büyük kapısıdır.'
  },
  {
    id: 'mq_3',
    targetRegion: 'guneydogu',
    targetTitle: 'Güneydoğu Anadolu (Şanlıurfa)',
    question: '12.000 yıllık geçmişiyle "Tarihin Sıfır Noktası" kabul edilen ve dünyanın en eski tapınağı olan "Göbeklitepe" nerededir?',
    hint: 'Fırat ve Dicle nehirlerinin hayat verdiği güneydeki kadim bölgemiz.',
    fact: 'Şanlıurfa Göbeklitepe, insanlık tarihinin bilinen en eski anıtsal ibadet merkezidir ve ezberleri bozmuştur.'
  },
  {
    id: 'mq_4',
    targetRegion: 'ege',
    targetTitle: 'Ege Bölgesi',
    question: 'Yiğitliği ve mertliği simgeleyen, efelerin davul-zurna eşliğinde oynadığı "Zeybek" halk oyunu hangi bölgemizindir?',
    hint: 'Zeytinlikleri, kıyıları ve antik kentleriyle ünlü batı bölgemiz.',
    fact: 'Zeybek oyunu, Kurtuluş Savaşı’nda büyük kahramanlıklar gösteren milli mücadele efelerimizin onurlu duruşudur.'
  },
  {
    id: 'mq_5',
    targetRegion: 'icanadolu',
    targetTitle: 'İç Anadolu (Nevşehir / Kapadokya)',
    question: 'Rüzgâr ve sel sularının volkanik tüfleri aşındırmasıyla oluşan masalsı "Peri Bacaları" doğal anıtı hangi bölgemizdedir?',
    hint: 'Tuz Gölü’nün ve başkentimiz Ankara’nın bulunduğu orta bölgemiz.',
    fact: 'Nevşehir Kapadokya Peri Bacaları, doğanın milyonlarca yılda heykeltıraş gibi yonttuğu bir doğa anıtıdır.'
  },
  {
    id: 'mq_6',
    targetRegion: 'doguanadolu',
    targetTitle: 'Doğu Anadolu Bölgesi',
    question: 'Urartuların 2800 yıl önce kayaları oyup yaptığı ve günümüzde hâlâ çalışan meşhur "Şamran Su Kanalı" hangi bölgemizdedir?',
    hint: 'Van Gölü’nün ve Ağrı Dağı’nın yer aldığı en yüksek dağlık bölgemiz.',
    fact: 'Van Kalesi ve Şamran (Menua) sulama kanalı, Urartuların eşsiz taş işçiliği ve mühendislik dehasını gösterir.'
  },
  {
    id: 'mq_7',
    targetRegion: 'akdeniz',
    targetTitle: 'Akdeniz Bölgesi (Denizli)',
    question: 'Kalsiyumlu termal suların bıraktığı bembeyaz tortularla oluşan dünyaca ünlü "Pamukkale Travertenleri" hangi bölgemizdedir?',
    hint: 'Toros Dağları’nın ve narenciye bahçelerinin bulunduğu güney sahil bölgemiz.',
    fact: 'Pamukkale Travertenleri hem şifalı suları hem de bembeyaz teraslarıyla UNESCO Dünya Mirası koruması altındadır.'
  }
];

const REGIONS = [
  { id: 'marmara', name: 'Marmara', color: '#38bdf8', d: 'M 40,50 L 140,40 L 160,90 L 120,130 L 60,110 Z' },
  { id: 'ege', name: 'Ege', color: '#34d399', d: 'M 50,115 L 120,135 L 110,210 L 40,190 Z' },
  { id: 'akdeniz', name: 'Akdeniz', color: '#f59e0b', d: 'M 115,200 L 250,210 L 320,240 L 350,210 L 260,170 L 130,165 Z' },
  { id: 'icanadolu', name: 'İç Anadolu', color: '#fbbf24', d: 'M 145,95 L 250,85 L 270,165 L 140,160 Z' },
  { id: 'karadeniz', name: 'Karadeniz', color: '#10b981', d: 'M 145,45 L 360,40 L 390,75 L 260,85 L 155,90 Z' },
  { id: 'doguanadolu', name: 'Doğu Anadolu', color: '#f97316', d: 'M 275,85 L 395,75 L 430,150 L 360,175 L 285,155 Z' },
  { id: 'guneydogu', name: 'Güneydoğu Anadolu', color: '#ec4899', d: 'M 285,170 L 365,175 L 390,220 L 310,230 Z' }
];

// =========================================================================
// 2. ARKEOLOJİ DEDEKTİFİ: KAYIP ESERLER VE MEDENİYETLER
// =========================================================================
const ARTIFACTS_DATA = [
  {
    id: 'art_1',
    name: 'Çivi Yazılı Kil Tablet',
    icon: '📜',
    clue: 'İnsanlık tarihinde yazıyı ilk kez bularak Tarih Çağlarını başlatan ve tapınaklarının en üst katını rasathane yapan medeniyettir.',
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

// =========================================================================
// 3. YENİLENMİŞ RESFEBE & KELİME BULMACASI (ÇÖZÜM GİZLİ!)
// =========================================================================
const RESFEBE_MYSTERIES = [
  {
    id: 'res_1',
    word: 'HAK',
    visualClues: [
      { icon: '🛡️', label: 'Koruma / Kalkan' },
      { icon: '⚪', label: 'Bembeyaz (Ak Renk)' }
    ],
    hint: 'Kanunların ve ahlaki değerlerin bireylere tanıdığı meşru yetkilerdir.',
    letters: ['H', 'A', 'K', 'L', 'O', 'R', 'E', 'T'],
    explanation: 'HAK: Bireyin doğuştan veya sonradan sahip olduğu dokunulmaz meşru yetkilerdir (Eğitim hakkı, sağlık hakkı, yaşama hakkı).'
  },
  {
    id: 'res_2',
    word: 'ROL',
    visualClues: [
      { icon: '🎭', label: 'Tiyatro Maskesi' },
      { icon: '⭕', label: 'Halka (O)' },
      { icon: '📐', label: 'L Harfi Cetvel' }
    ],
    hint: 'Bir kimsenin içinde bulunduğu grupta üstlendiği görev ve konumdur (öğrenci, evlat, kaptan).',
    letters: ['R', 'O', 'L', 'P', 'M', 'S', 'E', 'A'],
    explanation: 'ROL: Bireyler aynı gün içinde evde evlat, okulda öğrenci, takımda kaptan gibi birden fazla role sahip olabilir.'
  },
  {
    id: 'res_3',
    word: 'AFET',
    visualClues: [
      { icon: '🌪️', label: 'Doğa Olayı' },
      { icon: '🐘', label: 'İlk Harf (F)' },
      { icon: '🥩', label: 'Et Görseli' }
    ],
    hint: 'Deprem, sel, heyelan veya çığ gibi büyük can ve mal kayıplarına yol açan doğa olayları.',
    letters: ['A', 'F', 'E', 'T', 'K', 'L', 'M', 'R'],
    explanation: 'AFET: Önceden hazırlık, afet çantası ve dayanıklı binalarla zararları en aza indirilebilen olaylardır.'
  },
  {
    id: 'res_4',
    word: 'MİRAS',
    visualClues: [
      { icon: '🏛️', label: 'Tarihi Eser' },
      { icon: '🂡', label: 'İskambil Ası' },
      { icon: '⌛', label: 'Zaman Sandığı' }
    ],
    hint: 'Geçmiş kuşaklardan bize kalan ve koruyup geleceğe aktarmamız gereken somut veya soyut ortak değerler.',
    letters: ['M', 'İ', 'R', 'A', 'S', 'E', 'T', 'K'],
    explanation: 'ORTAK MİRAS: Tüm insanlığa ait tarihi yapılar, sanat eserleri ve gelenekler bütünüdür.'
  },
  {
    id: 'res_5',
    word: 'İKLİM',
    visualClues: [
      { icon: '⛅', label: 'Hava Olayı' },
      { icon: '🍋', label: 'Limon Dilimi' },
      { icon: '🌡️', label: 'Sıcaklık Grafiği' }
    ],
    hint: 'Geniş bir bölgede uzun yıllar boyunca hava olaylarının gösterdiği ortalama durumdur.',
    letters: ['İ', 'K', 'L', 'İ', 'M', 'A', 'R', 'T'],
    explanation: 'İKLİM: Türkiye’de Karadeniz, Akdeniz ve Karasal olmak üzere 3 ana iklim tipi görülür.'
  },
  {
    id: 'res_6',
    word: 'LEJANT',
    visualClues: [
      { icon: '🗺️', label: 'Harita' },
      { icon: '🛞', label: 'Araba Jantı' },
      { icon: '🗝️', label: 'Anahtar Tablosu' }
    ],
    hint: 'Haritaların sağ alt köşesinde bulunan ve haritadaki özel sembollerin anlamını açıklayan harita anahtarıdır.',
    letters: ['L', 'E', 'J', 'A', 'N', 'T', 'K', 'M'],
    explanation: 'LEJANT: Haritayı doğru okumamızı sağlar; yolları, sınırları, yükseltileri ve işaretleri açıklar.'
  },
  {
    id: 'res_7',
    word: 'KÜLTÜR',
    visualClues: [
      { icon: '🔥', label: 'Kül Görseli' },
      { icon: '🇹🇷', label: 'Milli Kimlik' },
      { icon: '🪕', label: 'Geleneksel Saz' }
    ],
    hint: 'Bir milleti diğer toplumlardan ayıran, kuşaktan kuşağa aktarılan maddi ve manevi değerler bütünüdür.',
    letters: ['K', 'Ü', 'L', 'T', 'Ü', 'R', 'A', 'M'],
    explanation: 'KÜLTÜR: Dilimiz, bayramlarımız, halk oyunlarımız, yemeklerimiz ve mimarimiz milli kültürümüzü oluşturur.'
  },
  {
    id: 'res_8',
    word: 'ÖLÇEK',
    visualClues: [
      { icon: '📏', label: 'Ölçüm Cetveli' },
      { icon: '🍞', label: 'Ekmek Parçası' }
    ],
    hint: 'Yeryüzündeki uzunlukların haritaya aktarılırken kaç kat küçültüldüğünü gösteren orandır.',
    letters: ['Ö', 'L', 'Ç', 'E', 'K', 'A', 'M', 'R'],
    explanation: 'ÖLÇEK: Haritalardaki küçültme oranıdır (Örn: 1/1.000.000).'
  }
];

export const SosyalResfebeLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  const [activeTab, setActiveTab] = useState('map'); // 'map' | 'detective' | 'resfebe'

  // 1. Map State
  const [mapIndex, setMapIndex] = useState(0);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [mapFeedback, setMapFeedback] = useState(null);
  const [showMapHint, setShowMapHint] = useState(false);
  const [solvedMapCount, setSolvedMapCount] = useState(0);

  // 2. Detective State
  const [artIndex, setArtIndex] = useState(0);
  const [artFeedback, setArtFeedback] = useState(null);
  const [solvedArtCount, setSolvedArtCount] = useState(0);

  // 3. Resfebe State
  const [resIndex, setResIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [resFeedback, setResFeedback] = useState(null);
  const [showResHint, setShowResHint] = useState(false);
  const [solvedResCount, setSolvedResCount] = useState(0);

  const currentMapQ = MAP_QUESTIONS[mapIndex];
  const currentArt = ARTIFACTS_DATA[artIndex];
  const currentRes = RESFEBE_MYSTERIES[resIndex];

  // Map Handlers
  const handleRegionClick = (regionId) => {
    setSelectedRegionId(regionId);
    if (regionId === currentMapQ.targetRegion) {
      setMapFeedback({ isCorrect: true, text: 'Doğru Bölge! Harikasın! 🎉' });
      playSound('correct', soundEnabled);
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });
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
      confetti({ particleCount: 80, spread: 70 });
      playSound('victory', soundEnabled);
      completeActivity('sosyal', topic?.id || 'sos_u2_t1', 'interactiveLab', 100, 100);
      if (onFinish) onFinish();
    }
  };

  // Detective Handlers
  const handleArtifactAnswer = (choice) => {
    if (choice === currentArt.correctCivilization) {
      setArtFeedback({ isCorrect: true, text: `Tebrikler! Eser doğru medeniyete ulaştı: ${currentArt.correctCivilization} 🏛️` });
      playSound('correct', soundEnabled);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      setSolvedArtCount(prev => prev + 1);
    } else {
      setArtFeedback({ isCorrect: false, text: 'Yanlış sandık! İpucunu dikkatlice oku ve tekrar dene.' });
      playSound('wrong', soundEnabled);
    }
  };

  const handleNextArtifact = () => {
    if (artIndex < ARTIFACTS_DATA.length - 1) {
      setArtIndex(prev => prev + 1);
      setArtFeedback(null);
    } else {
      confetti({ particleCount: 80, spread: 70 });
      playSound('victory', soundEnabled);
      completeActivity('sosyal', topic?.id || 'sos_u3_t3', 'interactiveLab', 100, 100);
      if (onFinish) onFinish();
    }
  };

  // Resfebe Handlers
  const handleLetterClick = (letter) => {
    if (userGuess.length < currentRes.word.length) {
      setUserGuess(prev => prev + letter);
      playSound('click', soundEnabled);
    }
  };

  const handleBackspace = () => {
    setUserGuess(prev => prev.slice(0, -1));
    playSound('click', soundEnabled);
  };

  const handleClear = () => {
    setUserGuess('');
    setResFeedback(null);
  };

  const handleCheckResfebe = () => {
    const cleanGuess = userGuess.trim().toLocaleUpperCase('tr-TR');
    const targetWord = currentRes.word.toLocaleUpperCase('tr-TR');

    if (cleanGuess === targetWord) {
      setResFeedback({ isCorrect: true, msg: 'Tebrikler! Gizli kavramı doğru çözdün! 🎉' });
      playSound('correct', soundEnabled);
      confetti({ particleCount: 45, spread: 65, origin: { y: 0.7 } });
      setSolvedResCount(prev => prev + 1);
    } else {
      setResFeedback({ isCorrect: false, msg: 'Doğru olmadı, harfleri ve görsel ipuçlarını tekrar incele!' });
      playSound('wrong', soundEnabled);
    }
  };

  const handleNextResfebe = () => {
    if (resIndex < RESFEBE_MYSTERIES.length - 1) {
      setResIndex(prev => prev + 1);
      setUserGuess('');
      setResFeedback(null);
      setShowResHint(false);
    } else {
      confetti({ particleCount: 90, spread: 80 });
      playSound('victory', soundEnabled);
      completeActivity('sosyal', topic?.id || 'sos_u1_t1', 'interactiveLab', 100, 100);
      if (onFinish) onFinish();
    }
  };

  return (
    <div className="sosyal-lab-container animate-fadeIn">
      {/* Top Banner */}
      <div className="lab-header-banner">
        <div className="lab-badge-row">
          <span className="lab-pill-tag">🌍 Sosyal Bilgiler 5. Sınıf</span>
          <span className="lab-pill-tag tag-gold">✨ 3'ü 1 Arada İnteraktif Atölye</span>
        </div>
        <h2 className="lab-main-title">Sosyal Kaşif & Medeniyetler Zaman Makinesi 🧭</h2>
        <p className="lab-subtitle-desc">
          Harita üzerinde Türkiye’nin kültürünü keşfet, kayıp tarihi eserleri ait olduğu medeniyetlere teslim et ve gizemli resfebeleri çöz!
        </p>

        {/* 3 Tab Mode Selector */}
        <div className="lab-tab-buttons">
          <button
            onClick={() => { setActiveTab('map'); playSound('click', soundEnabled); }}
            className={`lab-mode-tab ${activeTab === 'map' ? 'active' : ''}`}
          >
            <Compass size={18} />
            <span>1. Harita & Kültür Kaşifi ({solvedMapCount}/{MAP_QUESTIONS.length})</span>
          </button>

          <button
            onClick={() => { setActiveTab('detective'); playSound('click', soundEnabled); }}
            className={`lab-mode-tab ${activeTab === 'detective' ? 'active' : ''}`}
          >
            <Landmark size={18} />
            <span>2. Arkeoloji Dedektifi ({solvedArtCount}/{ARTIFACTS_DATA.length})</span>
          </button>

          <button
            onClick={() => { setActiveTab('resfebe'); playSound('click', soundEnabled); }}
            className={`lab-mode-tab ${activeTab === 'resfebe' ? 'active' : ''}`}
          >
            <Puzzle size={18} />
            <span>3. Resfebe Zeka Sandığı ({solvedResCount}/{RESFEBE_MYSTERIES.length})</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          MODE 1: TÜRKİYE HARİTA & KÜLTÜR KAŞİFİ
          ========================================================================= */}
      {activeTab === 'map' && (
        <div className="map-explorer-card animate-fadeIn">
          <div className="resfebe-progress-bar-wrap">
            <div className="progress-info-row">
              <span className="progress-label">Keşif Görevi {mapIndex + 1} / {MAP_QUESTIONS.length}</span>
              <span className="progress-percent">Hedef: {currentMapQ.targetTitle}</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${((mapIndex + 1) / MAP_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="map-question-box">
            <div className="q-badge">📍 Harita Görevi</div>
            <h3 className="q-text">{currentMapQ.question}</h3>
            
            <div className="q-actions-row">
              <button 
                type="button"
                onClick={() => setShowMapHint(!showMapHint)} 
                className="btn-map-hint"
              >
                <Lightbulb size={16} />
                <span>{showMapHint ? 'İpucunu Kapat' : 'Bölge İpucu Al'}</span>
              </button>
              <span className="q-instruction">👉 Aşağıdaki Türkiye haritasında ilgili bölgeye dokunun:</span>
            </div>

            {showMapHint && (
              <div className="map-hint-pop animate-fadeIn">
                💡 <strong>Coğrafi İpucu:</strong> {currentMapQ.hint}
              </div>
            )}
          </div>

          <div className="interactive-map-stage">
            <svg viewBox="0 0 460 260" className="turkey-svg-map">
              {REGIONS.map((region) => {
                const isSelected = selectedRegionId === region.id;
                const isTarget = currentMapQ.targetRegion === region.id;
                const isSuccess = isSelected && isTarget;
                const isWrong = isSelected && !isTarget;

                let fillColor = region.color;
                if (isSuccess) fillColor = '#10b981';
                if (isWrong) fillColor = '#ef4444';

                return (
                  <g key={region.id} onClick={() => handleRegionClick(region.id)} className="map-region-group">
                    <path
                      d={region.d}
                      fill={fillColor}
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      className={`region-path ${isSelected ? 'selected' : ''}`}
                    />
                    <text
                      x={
                        region.id === 'marmara' ? 95 :
                        region.id === 'ege' ? 75 :
                        region.id === 'akdeniz' ? 220 :
                        region.id === 'icanadolu' ? 200 :
                        region.id === 'karadeniz' ? 250 :
                        region.id === 'doguanadolu' ? 355 : 340
                      }
                      y={
                        region.id === 'marmara' ? 85 :
                        region.id === 'ege' ? 165 :
                        region.id === 'akdeniz' ? 225 :
                        region.id === 'icanadolu' ? 130 :
                        region.id === 'karadeniz' ? 68 :
                        region.id === 'doguanadolu' ? 120 : 205
                      }
                      className="region-label"
                    >
                      {region.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="region-buttons-grid">
            {REGIONS.map(reg => (
              <button
                key={reg.id}
                type="button"
                onClick={() => handleRegionClick(reg.id)}
                className={`region-click-pill ${selectedRegionId === reg.id ? 'active' : ''}`}
              >
                <MapPin size={14} />
                <span>{reg.name}</span>
              </button>
            ))}
          </div>

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
                      <span>{mapIndex < MAP_QUESTIONS.length - 1 ? 'Sonraki Keşfe Geç' : 'Görevi Tamamla! 🏆'}</span>
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
          MODE 2: ARKEOLOJİ DEDEKTİFİ: MEDENİYET SANDIĞI
          ========================================================================= */}
      {activeTab === 'detective' && (
        <div className="detective-game-card animate-fadeIn">
          <div className="resfebe-progress-bar-wrap">
            <div className="progress-info-row">
              <span className="progress-label">Eser {artIndex + 1} / {ARTIFACTS_DATA.length}</span>
              <span className="progress-percent">Kayıp Eser İncelemesi</span>
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
                  <Landmark size={20} className="chest-icon" />
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

      {/* =========================================================================
          MODE 3: YENİLENMİŞ RESFEBE & KELİME BULMACASI (ÇÖZÜM GİZLİ!)
          ========================================================================= */}
      {activeTab === 'resfebe' && (
        <div className="resfebe-game-box animate-fadeIn">
          <div className="resfebe-progress-bar-wrap">
            <div className="progress-info-row">
              <span className="progress-label">Resfebe {resIndex + 1} / {RESFEBE_MYSTERIES.length}</span>
              <span className="progress-percent">Kelime Uzunluğu: {currentRes.word.length} Harf</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${((resIndex + 1) / RESFEBE_MYSTERIES.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="resfebe-card">
            {/* Visual clue stage without giving answers away */}
            <div className="resfebe-visual-stage">
              <div className="resfebe-clue-bubble">
                <span className="clue-tag">Görsel İpuçlarını Birleştir:</span>
                <div className="resfebe-clues-row">
                  {currentRes.visualClues.map((clue, cIdx) => (
                    <div key={cIdx} className="visual-clue-item">
                      <span className="clue-icon-large">{clue.icon}</span>
                      <span className="clue-sublabel">{clue.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Answer Display Slots */}
            <div className="resfebe-answer-slots">
              {currentRes.word.split('').map((_, idx) => {
                const filledChar = userGuess[idx] || '';
                return (
                  <div key={idx} className={`answer-box ${filledChar ? 'filled' : ''}`}>
                    {filledChar}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="resfebe-action-controls">
              <button 
                type="button" 
                onClick={handleBackspace} 
                className="btn-resfebe-action"
                disabled={userGuess.length === 0}
              >
                ⌫ Sil
              </button>
              <button 
                type="button" 
                onClick={handleClear} 
                className="btn-resfebe-action"
                disabled={userGuess.length === 0}
              >
                Temizle
              </button>
              <button 
                type="button" 
                onClick={() => setShowResHint(!showResHint)} 
                className={`btn-resfebe-action btn-hint ${showResHint ? 'active' : ''}`}
              >
                <Lightbulb size={16} />
                <span>{showResHint ? 'İpucu Kapat' : 'Kavram İpucu Al'}</span>
              </button>
              <button 
                type="button" 
                onClick={handleCheckResfebe} 
                className="btn-resfebe-submit"
                disabled={userGuess.length === 0}
              >
                Cevabı Onayla
              </button>
            </div>

            {showResHint && (
              <div className="resfebe-hint-card animate-fadeIn">
                💡 <strong>Kavram İpucu:</strong> {currentRes.hint}
              </div>
            )}

            {resFeedback && (
              <div className={`map-feedback-banner ${resFeedback.isCorrect ? 'correct' : 'wrong'} animate-fadeIn`} style={{ width: '100%' }}>
                {resFeedback.isCorrect ? (
                  <div className="feedback-content">
                    <div className="fb-header">
                      <CheckCircle2 size={24} className="text-emerald-400" />
                      <h4>Tebrikler! Doğru Kelime: {currentRes.word}</h4>
                    </div>
                    <p className="fb-fact">{currentRes.explanation}</p>
                    <button onClick={handleNextResfebe} className="btn-next-map-q">
                      <span>{resIndex < RESFEBE_MYSTERIES.length - 1 ? 'Sonraki Resfeye Geç' : 'Resfebeleri Tamamla! 🏆'}</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                ) : (
                  <p className="fb-wrong-txt">❌ {resFeedback.msg}</p>
                )}
              </div>
            )}

            {/* Letter Wheel / Scramble Buttons */}
            <div className="resfebe-virtual-keyboard">
              <p className="keyboard-caption">Harflere dokunarak cevabı oluştur:</p>
              <div className="keyboard-keys-grid">
                {currentRes.letters.map((letter, lIdx) => (
                  <button
                    key={lIdx}
                    type="button"
                    onClick={() => handleLetterClick(letter)}
                    className="key-button"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
