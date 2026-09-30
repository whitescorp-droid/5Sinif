import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Award, CheckCircle2, RefreshCw, Lightbulb, 
  HelpCircle, Compass, BookOpen, ArrowRight, Trophy, Landmark
} from 'lucide-react';

const RESFEBE_DATA = [
  {
    id: 'res_1',
    word: 'HAK',
    clueVisual: {
      left: 'H',
      centerIcon: '⚪',
      centerText: 'AK (Beyaz)',
      note: 'H + AK = ?'
    },
    topicName: 'Birlikte Yaşamak',
    hint: 'Kanunların ve ahlaki kuralların bireylere tanıdığı meşru yetkiler ve korumadır.',
    explanation: 'HAK: Her bireyin doğuştan veya sonradan sahip olduğu dokunulmaz yetkilerdir (Eğitim hakkı, sağlık hakkı, yaşama hakkı).'
  },
  {
    id: 'res_2',
    word: 'ROL',
    clueVisual: {
      left: 'R',
      centerIcon: '🔟',
      centerText: 'ON - N = O',
      right: 'L',
      note: 'R + O + L = ?'
    },
    topicName: 'Birlikte Yaşamak',
    hint: 'Bir kimsenin içinde bulunduğu grupta üstlendiği görev ve konumdur.',
    explanation: 'ROL: Bireyler aynı gün içinde ailede çocuk, okulda öğrenci, takımda kaptan gibi birden fazla role sahip olabilir.'
  },
  {
    id: 'res_3',
    word: 'AFET',
    clueVisual: {
      left: 'A',
      centerIcon: '🐘',
      centerText: 'FİL - İL = F',
      right: '🥩 ET',
      note: 'A + F + ET = ?'
    },
    topicName: 'Evimiz Dünya',
    hint: 'Deprem, sel, heyelan veya çığ gibi büyük can ve mal kayıplarına yol açan doğa olayları.',
    explanation: 'AFET: Önlenemez doğa olaylarının zararları; sağlam binalar, afet çantası ve bilinçli hazırlıkla en aza indirilebilir.'
  },
  {
    id: 'res_4',
    word: 'MİRAS',
    clueVisual: {
      left: 'M',
      centerIcon: '🦣',
      centerText: 'İRİ - İ = İR',
      right: '🂡 AS',
      note: 'M + İR + AS = ?'
    },
    topicName: 'Ortak Mirasımız',
    hint: 'Geçmiş kuşaklardan bize kalan ve koruyup geleceğe aktarmamız gereken somut veya soyut değerler.',
    explanation: 'ORTAK MİRAS: UNESCO tarafından koruma altına alınan, tüm insanlığa ait tarihi yapılar, sanat eserleri ve geleneklerdir.'
  },
  {
    id: 'res_5',
    word: 'İKLİM',
    clueVisual: {
      left: 'İKİ - İ = İK',
      centerIcon: '🍋',
      centerText: 'LİMON - ON = LİM',
      note: 'İK + LİM = ?'
    },
    topicName: 'Evimiz Dünya',
    hint: 'Geniş bir bölgede uzun yıllar boyunca hava olaylarının gösterdiği ortalama durumdur.',
    explanation: 'İKLİM: Türkiye’de Karadeniz, Akdeniz ve Karasal olmak üzere 3 ana iklim tipi görülür.'
  },
  {
    id: 'res_6',
    word: 'HARİTA',
    clueVisual: {
      left: 'HA',
      centerIcon: '🐝',
      centerText: 'ARI - I = AR',
      right: 'İ + TA',
      note: 'H + ARİ + TA = ?'
    },
    topicName: 'Evimiz Dünya',
    hint: 'Yeryüzünün tamamının veya bir kısmının kuş bakışı görünüşünün ölçekle küçültülerek düzleme çizilmesidir.',
    explanation: 'HARİTA: Fiziki haritalarda renkler yükseltiyi gösterir (Yeşil: 0-500m alçak ovalar, Kahverengi: yüksek dağlar).'
  },
  {
    id: 'res_7',
    word: 'KÜLTÜR',
    clueVisual: {
      left: '🔥 KÜL',
      centerIcon: '🇹🇷',
      centerText: 'TÜRK - K = TÜR',
      note: 'KÜL + TÜR = ?'
    },
    topicName: 'Birlikte Yaşamak',
    hint: 'Bir toplumu diğer toplumlardan ayıran, kuşaktan kuşağa aktarılan maddi ve manevi değerler bütünü.',
    explanation: 'KÜLTÜR: Dilimiz, bayramlarımız, halk oyunlarımız, yemeklerimiz ve mimarimiz milli kültürümüzün parçalarıdır.'
  },
  {
    id: 'res_8',
    word: 'LEJANT',
    clueVisual: {
      left: 'LE',
      centerIcon: '🛞',
      centerText: 'JANT',
      note: 'LE + JANT = ?'
    },
    topicName: 'Evimiz Dünya',
    hint: 'Haritaların sağ alt köşesinde bulunan ve haritadaki özel sembollerin anlamını açıklayan harita anahtarıdır.',
    explanation: 'LEJANT: Haritayı doğru okumamızı sağlar; yolları, sınırları, gölleri ve yükselti basamaklarını gösterir.'
  }
];

const MEDENIYET_DATA = [
  {
    id: 'sumerler',
    name: 'Sümerler',
    region: 'Mezopotamya',
    badge: '📜 Çivi Yazısının Mucidi',
    icon: '🏛️',
    description: 'Tarihte ilk kez yazıyı (çivi yazısını) bularak Tarih Çağlarını başlatan uygarlıktır.',
    facts: [
      'Çivi yazısını icat ederek kil tabletlere yazdılar.',
      'Ziggurat adı verilen 7 katlı tapınaklar inşa ettiler (en üst katı rasathane/gözlemeviydi).',
      'Tekerleği ve ay yılı esasına dayanan ilk takvimi buldular.'
    ]
  },
  {
    id: 'babiller',
    name: 'Babiller',
    region: 'Mezopotamya',
    badge: '⚖️ Hammurabi Kanunları',
    icon: '👑',
    description: 'Dünyanın ilk anayasası sayılan sert ceza kanunlarını yapan krallıktır.',
    facts: [
      'Kral Hammurabi kendi adıyla anılan çok sert adalet kuralları (kısasa kısas) koydu.',
      'Dünyanın Yedi Harikası’ndan biri olan Babil’in Asma Bahçeleri’ni yaptılar.',
      'Babil Kulesi ile gökyüzünü gözlemlediler.'
    ]
  },
  {
    id: 'asurlar',
    name: 'Asurlar',
    region: 'Mezopotamya',
    badge: '📚 İlk Kütüphane & Tüccarlar',
    icon: '🐪',
    description: 'Ticaret sayesinde çivi yazısını Anadolu’ya getirerek Anadolu’da tarihi başlatan devlettir.',
    facts: [
      'Kayseri Kültepe (Kaniş Karumu) pazar yerinde Anadolu insanına yazıyı öğrettiler.',
      'Başkentleri Ninova’da dünyanın ilk kütüphanesini kurdular.',
      'Kaya oymacılığı ve kabartma sanatında çok ilerlediler.'
    ]
  },
  {
    id: 'hititler',
    name: 'Hititler',
    region: 'Anadolu',
    badge: '🛡️ Kadeş Barışı & Meclis',
    icon: '🦁',
    description: 'Başkenti Çorum/Hattuşa olan, tarihteki ilk yazılı barış antlaşmasını imzalayan büyük devlettir.',
    facts: [
      'Mısırlılarla tarihin ilk yazılı barış antlaşması olan Kadeş Antlaşması’nı imzaladılar.',
      'Pankuş adı verilen danışma meclisi ve Tavananna adlı yetkili kraliçeleri vardı.',
      'Tanrılara hesap vermek için Anal (yıllık) adını verdikleri tarafsız tarih kitapları tuttular.'
    ]
  },
  {
    id: 'frigler',
    name: 'Frigler',
    region: 'Anadolu',
    badge: '🌾 Tarım Koruyucuları & Fibula',
    icon: '🧷',
    description: 'Başkenti Ankara/Polatlı (Gordion) olan, tarımı korumak için çok katı yasalar koyan uygarlık.',
    facts: [
      'Öküz öldüren veya saban kıran kişiye ölüm cezası veren tarım kanunları vardı.',
      'Fibula adı verilen tarihin ilk çengelli iğnelerini ve Tapates adlı halı-kilimleri dokudular.',
      'Efsanevi kralları Midas ve bereket tanrıçaları Kibele çok meşhurdur.'
    ]
  },
  {
    id: 'lidyalilar',
    name: 'Lidyalılar',
    region: 'Anadolu',
    badge: '💰 Paranın Mucidi',
    icon: '🪙',
    description: 'Başkenti Manisa/Salihli (Sardes) olan, takas usulüne son verip parayı icat eden tüccar devlet.',
    facts: [
      'MÖ 7. yüzyılda madeni parayı icat ederek ticarette çığır açtılar.',
      'Sardes’ten Mezopotamya’ya uzanan meşhur Kral Yolu’nu inşa edip zenginleştiler.',
      'Ordularında paralı askerler kullandıkları için kısa sürede yıkıldılar.'
    ]
  },
  {
    id: 'urartular',
    name: 'Urartular',
    region: 'Anadolu',
    badge: '🏰 Taş Ustaları & Su Kanalları',
    icon: '🌊',
    description: 'Başkenti Tuşpa (Van) olan, sarp dağlar üzerine görkemli kaleler ve sulama kanalları kuran devlet.',
    facts: [
      'Günümüzde hâlâ kullanılan Şamran (Menua) sulama kanalını inşa ettiler.',
      'Taş işçiliği, maden işlemeciliği ve kale yapımında usta bir uygarlıktı.',
      'Öldükten sonra dirilişe inandıkları için oda şeklinde kaya mezarları yaptılar.'
    ]
  }
];

export const SosyalResfebeLab = ({ topic, onFinish }) => {
  const { soundEnabled, completeActivity } = useGame();

  const [activeTab, setActiveTab] = useState('resfebe'); // 'resfebe' | 'medeniyet'

  // Resfebe Game State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [solvedIds, setSolvedIds] = useState([]);
  const [feedback, setFeedback] = useState(null); // { isCorrect: bool, msg: string }

  // Medeniyet State
  const [selectedCivilization, setSelectedCivilization] = useState(MEDENIYET_DATA[0]);

  const currentResfebe = RESFEBE_DATA[currentIndex];

  const handleLetterClick = (letter) => {
    if (userGuess.length < currentResfebe.word.length) {
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
    setFeedback(null);
  };

  const handleCheckAnswer = () => {
    const cleanGuess = userGuess.trim().toLocaleUpperCase('tr-TR');
    const targetWord = currentResfebe.word.toLocaleUpperCase('tr-TR');

    if (!cleanGuess) return;

    if (cleanGuess === targetWord) {
      setFeedback({ isCorrect: true, msg: 'Tebrikler! Doğru bildin! 🎉' });
      playSound('correct', soundEnabled);
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });

      if (!solvedIds.includes(currentResfebe.id)) {
        setSolvedIds(prev => [...prev, currentResfebe.id]);
      }
    } else {
      setFeedback({ isCorrect: false, msg: 'Tekrar dene veya ipucundan yardım al!' });
      playSound('wrong', soundEnabled);
    }
  };

  const handleNextResfebe = () => {
    if (currentIndex < RESFEBE_DATA.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserGuess('');
      setShowHint(false);
      setFeedback(null);
    } else {
      // Completed all resfebes!
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      playSound('victory', soundEnabled);
      completeActivity('sosyal', topic?.id || 'sos_u1_t1', 'interactiveLab', 100, 100);
      if (onFinish) onFinish();
    }
  };

  // Keyboard support: Alphabet list
  const alphabet = 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ'.split('');

  return (
    <div className="sosyal-lab-container animate-fadeIn">
      {/* Lab Header */}
      <div className="lab-header-banner">
        <div className="lab-badge-row">
          <span className="lab-pill-tag">🌍 Sosyal Bilgiler 1. Kitap</span>
          <span className="lab-pill-tag tag-gold">✨ TYMM Etkileşimli Atölye</span>
        </div>
        <h2 className="lab-main-title">Sosyal Kaşif & Resfebe Zeka Sandığı 🧩</h2>
        <p className="lab-subtitle-desc">
          MEB ders kitabındaki resfebeleri çöz, anahtar kavramları keşfet ve Anadolu-Mezopotamya medeniyetler yolculuğuna çık!
        </p>

        {/* Tab Selector */}
        <div className="lab-tab-buttons">
          <button
            onClick={() => { setActiveTab('resfebe'); playSound('click', soundEnabled); }}
            className={`lab-mode-tab ${activeTab === 'resfebe' ? 'active' : ''}`}
          >
            <Sparkles size={18} />
            <span>Resfebe Zeka Oyunu ({solvedIds.length}/{RESFEBE_DATA.length})</span>
          </button>

          <button
            onClick={() => { setActiveTab('medeniyet'); playSound('click', soundEnabled); }}
            className={`lab-mode-tab ${activeTab === 'medeniyet' ? 'active' : ''}`}
          >
            <Landmark size={18} />
            <span>Medeniyetler & İcatlar Atlası</span>
          </button>
        </div>
      </div>

      {/* TAB 1: RESFEBE OYUNU */}
      {activeTab === 'resfebe' && (
        <div className="resfebe-game-box">
          {/* Progress bar */}
          <div className="resfebe-progress-bar-wrap">
            <div className="progress-info-row">
              <span className="progress-label">Soru {currentIndex + 1} / {RESFEBE_DATA.length}</span>
              <span className="progress-percent">Konu: {currentResfebe.topicName}</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentIndex + 1) / RESFEBE_DATA.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Puzzle Card */}
          <div className="resfebe-card">
            <div className="resfebe-visual-stage">
              <div className="resfebe-clue-bubble">
                <span className="clue-tag">Görsel Resfebe Bulmacası</span>
                <div className="resfebe-formula">
                  {currentResfebe.clueVisual.left && (
                    <span className="formula-part font-bold">{currentResfebe.clueVisual.left}</span>
                  )}
                  {currentResfebe.clueVisual.centerIcon && (
                    <span className="formula-icon">{currentResfebe.clueVisual.centerIcon}</span>
                  )}
                  {currentResfebe.clueVisual.centerText && (
                    <span className="formula-badge">{currentResfebe.clueVisual.centerText}</span>
                  )}
                  {currentResfebe.clueVisual.right && (
                    <span className="formula-part font-bold">{currentResfebe.clueVisual.right}</span>
                  )}
                </div>
                <div className="formula-hint-note">
                  {currentResfebe.clueVisual.note}
                </div>
              </div>
            </div>

            {/* Answer Display Slots */}
            <div className="resfebe-answer-slots">
              {currentResfebe.word.split('').map((char, idx) => {
                const filledChar = userGuess[idx] || '';
                return (
                  <div key={idx} className={`answer-box ${filledChar ? 'filled' : ''}`}>
                    {filledChar}
                  </div>
                );
              })}
            </div>

            {/* Input Action Controls */}
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
                onClick={() => setShowHint(!showHint)} 
                className={`btn-resfebe-action btn-hint ${showHint ? 'active' : ''}`}
              >
                <Lightbulb size={16} />
                <span>İpucu {showHint ? 'Kapat' : 'Göster'}</span>
              </button>
              <button 
                type="button" 
                onClick={handleCheckAnswer} 
                className="btn-resfebe-submit"
                disabled={userGuess.length === 0}
              >
                Kontrol Et
              </button>
            </div>

            {/* Hint Box */}
            {showHint && (
              <div className="resfebe-hint-card animate-fadeIn">
                💡 <strong>Kavram İpucu:</strong> {currentResfebe.hint}
              </div>
            )}

            {/* Success Feedback Card */}
            {feedback && feedback.isCorrect && (
              <div className="resfebe-success-card animate-fadeIn">
                <div className="success-header">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                  <h4>Harika! Cevap: {currentResfebe.word}</h4>
                </div>
                <p className="success-explanation">{currentResfebe.explanation}</p>
                <button onClick={handleNextResfebe} className="btn-resfebe-next">
                  <span>{currentIndex < RESFEBE_DATA.length - 1 ? 'Sonraki Resfeye Geç' : 'Etkinliği Tamamla!'}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {feedback && !feedback.isCorrect && (
              <div className="resfebe-wrong-card animate-fadeIn">
                ❌ {feedback.msg}
              </div>
            )}

            {/* Virtual Letter Keyboard */}
            <div className="resfebe-virtual-keyboard">
              <p className="keyboard-caption">Harflere dokunarak cevabı yazabilirsin:</p>
              <div className="keyboard-keys-grid">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
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

      {/* TAB 2: MEDENİYETLER VE İCATLAR ATLASI */}
      {activeTab === 'medeniyet' && (
        <div className="medeniyet-atlas-box animate-fadeIn">
          <div className="atlas-intro-card">
            <h3>🏛️ Anadolu ve Mezopotamya Medeniyetleri</h3>
            <p>
              Mezopotamya (Fırat ile Dicle arası) ve Anadolu medeniyetleri insanlık tarihine yazı, tekerlek, para, kanunlar ve su kanalları gibi paha biçilmez ortak miraslar bırakmıştır.
            </p>
          </div>

          <div className="atlas-layout-grid">
            {/* Sidebar List */}
            <div className="atlas-sidebar-list">
              <span className="sidebar-group-title">Mezopotamya Medeniyetleri</span>
              {MEDENIYET_DATA.filter(m => m.region === 'Mezopotamya').map(item => (
                <button
                  key={item.id}
                  onClick={() => { setSelectedCivilization(item); playSound('click', soundEnabled); }}
                  className={`civilization-nav-item ${selectedCivilization.id === item.id ? 'active' : ''}`}
                >
                  <span className="civ-icon">{item.icon}</span>
                  <div>
                    <div className="civ-name">{item.name}</div>
                    <div className="civ-badge">{item.badge}</div>
                  </div>
                </button>
              ))}

              <span className="sidebar-group-title" style={{ marginTop: '14px' }}>Anadolu Medeniyetleri</span>
              {MEDENIYET_DATA.filter(m => m.region === 'Anadolu').map(item => (
                <button
                  key={item.id}
                  onClick={() => { setSelectedCivilization(item); playSound('click', soundEnabled); }}
                  className={`civilization-nav-item ${selectedCivilization.id === item.id ? 'active' : ''}`}
                >
                  <span className="civ-icon">{item.icon}</span>
                  <div>
                    <div className="civ-name">{item.name}</div>
                    <div className="civ-badge">{item.badge}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail Showcase */}
            <div className="atlas-detail-card">
              <div className="detail-top-banner">
                <span className="detail-region-tag">{selectedCivilization.region} Medeniyeti</span>
                <h3 className="detail-title">{selectedCivilization.icon} {selectedCivilization.name}</h3>
                <span className="detail-subtitle">{selectedCivilization.badge}</span>
              </div>

              <p className="detail-summary-p">{selectedCivilization.description}</p>

              <div className="detail-facts-box">
                <h4>✨ İnsanlık Tarihine ve Ortak Mirasa Katkıları:</h4>
                <ul>
                  {selectedCivilization.facts.map((fact, fIdx) => (
                    <li key={fIdx}>
                      <span className="fact-bullet">⭐</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-card-footer">
                <button
                  onClick={() => {
                    confetti({ particleCount: 40, spread: 60 });
                    playSound('correct', soundEnabled);
                  }}
                  className="btn-mark-explored"
                >
                  <CheckCircle2 size={18} />
                  <span>Bu Medeniyeti Keşfettim!</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
