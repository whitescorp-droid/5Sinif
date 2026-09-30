import React, { useState } from 'react';
import { X, Check, Copy, BookOpen, Layers, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export const AddContentGuideModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleTemplate = `// Örnek Ders ve Konu Formatı
{
  id: 'mat_u1_t2',
  title: 'Doğal Sayılarda Toplama ve Çıkarma İşlemi',
  kazanimCode: 'MAT.5.1.2',
  kazanimDesc: 'En çok beş basamaklı doğal sayılarla toplama ve çıkarma işlemi yapar.',
  summary: '• Toplama işleminde eldeye, çıkarma işleminde onluk bozmaya dikkat edilir...',
  keyConcepts: ['Toplama', 'Çıkarma', 'Elde', 'Fark'],
  flashcards: [
    { front: 'Elde nedir?', back: 'Bir basamaktaki toplam 9\\'u aştığında yan basamağa aktarılan onluktur.' }
  ],
  matching: [
    { left: 'Toplanan + Toplanan', right: 'Toplam' },
    { left: 'Eksilen - Çıkan', right: 'Fark' }
  ],
  trueFalse: [
    { text: 'Çıkarma işleminde eksilen her zaman farktan büyüktür.', isTrue: true, explanation: '...' }
  ],
  quiz: [
    {
      question: '25.430 + 14.280 işleminin sonucu kaçtır?',
      options: ['39.710', '39.610', '40.710', '38.710'],
      correctAnswerIndex: 0,
      explanation: 'Sırasıyla basamakları topladığımızda 39.710 elde ederiz.'
    }
  ]
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card modal-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title">
            <span className="modal-emoji">📘</span>
            <div>
              <h2 className="modal-title">Ders Kitabı & TYMM Kazanımı Ekleme</h2>
              <p className="modal-sub">Yeni ünite ve soruları sisteme nasıl kolayca aktarabilirsiniz?</p>
            </div>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Kapat">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="guide-welcome-card">
            <Sparkles size={24} className="text-gold" />
            <div>
              <h4>Altyapımız Tamamen Modüler Hazırlandı!</h4>
              <p>
                Sohbet ekranında bana MEB Türkiye Yüzyılı Maarif Modeli kazanım listesini, 
                öğrenci çalışma kitabındaki metinleri, alıştırmaları veya ekran görüntülerini 
                iletmeniz yeterlidir. Ben bunları otomatik olarak aşağıdaki 5 eğlenceli etkileşimli formata dönüştürerek sisteme ekleyeceğim:
              </p>
            </div>
          </div>

          <div className="guide-steps-grid">
            <div className="guide-step-card">
              <div className="step-num">1</div>
              <h5>Bilgi Kartları (Flashcards)</h5>
              <p>Çocuğunuzun kartı çevirerek tanımı, ipucunu ve örneği pratik görmesini sağlar.</p>
            </div>

            <div className="guide-step-card">
              <div className="step-num">2</div>
              <h5>Kavram Eşleştirme</h5>
              <p>Kitaptaki terimler ve anlamları eşleştirme bulmacasına dönüştürülür.</p>
            </div>

            <div className="guide-step-card">
              <div className="step-num">3</div>
              <h5>Hızlı Doğru / Yanlış</h5>
              <p>Konunun can alıcı noktalarını test eden refleks ve pekiştirme turu.</p>
            </div>

            <div className="guide-step-card">
              <div className="step-num">4</div>
              <h5>Boşluk Doldurma</h5>
              <p>Cümle içindeki kilit terimleri yerine yerleştirme etkinliği.</p>
            </div>

            <div className="guide-step-card">
              <div className="step-num">5</div>
              <h5>Pekiştirme Testi (Quiz)</h5>
              <p>Çalışma kitabındaki test formatı; ipuçlu ve Maarif Modeli açıklamalı.</p>
            </div>
          </div>

          <div className="guide-code-box">
            <div className="code-box-header">
              <span>curriculumData.js Veri Formatı Şablonu</span>
              <button onClick={handleCopy} className="btn-copy">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Kopyalandı!' : 'Şablonu Kopyala'}</span>
              </button>
            </div>
            <pre className="code-preview">
              <code>{sampleTemplate}</code>
            </pre>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn-primary">
            <span>Anladım, Dersleri Eklemeye Hazırım</span>
          </button>
        </div>
      </div>
    </div>
  );
};
