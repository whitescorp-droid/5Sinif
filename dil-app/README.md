# 🎓 Dil Kulübü 5 (İngilizce & Almanca Mobil Uygulaması)

5. sınıf (10-11 yaş) öğrencileri için özel olarak tasarlanmış; karmaşık web arayüzlerinden arındırılmış, çocuk dostu ve dokunmatik ekran odaklı mobil yabancı dil öğrenme uygulaması.

---

## 🌟 Öne Çıkan Özellikler

1. **İki Dil Tek Tıkla Geçiş (Bilingual Switcher):**
   - 🇬🇧 **İngilizce:** 4 Tema, 12 Konu (School Life, Classroom Life, Personal Life, Family Life)
   - 🇩🇪 **Almanca:** 2 Lektion, 6 Konu (Begrüßung, Sich vorstellen, Das Alphabet, Zahlen, Länder, Wohnort)
2. **6 Çeşit Dokunmatik & Eğlenceli Etkinlik:**
   - 🗣️ **Sesli Telaffuz & Tekrar:** Cihazın yerel konuşma motoruyla (Web Speech API) kelime ve cümleleri sesli okuma ve dinleme.
   - 🃏 **Bilgi Kartları (Flashcards):** 3D çevrilebilen, örnek cümleli ve ipuçlu kartlar.
   - 🧩 **Kelime Eşleştirme:** Renkli, dokunmatik eşleştirme oyunu.
   - ⚡ **Hızlı Doğru / Yanlış:** Şimşek hızında karar turları ve anında açıklamalar.
   - ✏️ **Boşluk Doldurma:** Cümle tamamlama alıştırmaları.
   - 🎯 **Mini Test (Quiz):** 4 şıklı sorular ve konfeti kutlamaları.
3. **🔤 Kelime Dünyası (Vocabulary Zone):**
   - Tematik kelime kartları, sesli okuma, fonetik alfabe ve örnek cümleler.
4. **🏆 Rozet ve Seviye Sistemi:**
   - XP puanları, günlük seri (streak), 5 kademeli seviye atlama ve başarı rozetleri.
5. **🦁 Çocuk Profili:**
   - Şifresiz, tek dokunuşla isim belirleme ve eğlenceli avatar seçimi (🚀, 🦁, 🐼 vb.).

---

## 🚀 Tarayıcıda Çalıştırma ve Test

Uygulamayı bilgisayarınızda veya telefonunuzun tarayıcısında test etmek için:

```bash
# Ana klasörden:
npm run dev:dil

# Veya dil-app klasörünün içinden:
cd dil-app
npm run dev
```

---

## 📱 Android APK Oluşturma Seçenekleri

Uygulamanın `dil-app/android` klasörü **Capacitor** ile tam uyumlu yerel Android projesi olarak oluşturulmuştur.

### Yöntem 1: Android Studio ile (En Kolay Yerel Yöntem)
1. **Android Studio**'yu açın.
2. `Open Project` seçeneğiyle `c:\Users\DELL\Desktop\5Sinif\dil-app\android` klasörünü seçin.
3. Üst menüden **Build > Build Bundle(s) / APK(s) > Build APK(s)** seçeneğine tıklayın.
4. Derleme bittiğinde sağ altta çıkan **"locate"** butonuna basarak `app-debug.apk` dosyasını telefonunuza yükleyin.

### Yöntem 2: GitHub Actions ile (Kurulumsuz Bulut Yöntemi)
Projeye `.github/workflows/build-dil-apk.yml` otomasyonu eklenmiştir:
1. Projenizi GitHub'a push ettiğinizde otomatik olarak derlenir.
2. GitHub deponuzdaki **Actions** sekmesinden derlenen `DilKulubu-5Sinif-Debug-APK` dosyasını tek tıkla doğrudan telefonunuza indirebilirsiniz.

### Kodları Güncellediğinizde Android'e Aktarma:
Web kodlarında değişiklik yaptığınızda:
```bash
cd dil-app
npm run build
npx cap sync android
```
komutlarını çalıştırmanız yeterlidir.
