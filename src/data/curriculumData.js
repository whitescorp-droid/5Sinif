// =========================================================================
// 5. SINIF TÜRKİYE YÜZYILI MAARİF MODELİ MÜFREDAT VE ETKİNLİK VERİ TABANI
// =========================================================================
// Bu dosya modüler yapıdadır. Yeni dersler, üniteler, TYMM kazanımları ve
// öğrenci çalışma kitabı soruları buraya doğrudan eklenebilir.

export const CURRICULUM_DATA = {
  subjects: [
    {
      id: 'matematik',
      name: 'Matematik',
      shortName: 'Matematik',
      icon: '📐',
      color: '#3B82F6',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      lightBg: '#EFF6FF',
      description: 'Sayılar, işlemler, şekiller ve problem çözme becerileri',
      units: [
        {
          id: "mat_u1",
          unitNumber: 1,
          title: "1. Tema: Geometrik Şekiller",
          description: "Temel geometrik kavramlar, açılar, doğruların birbirine göre durumları, çokgenler, üçgenler ve çember",
          topics: [
            {
              id: "mat_u1_t1",
              title: "Temel Geometrik Şekiller ve Çizimler",
              kazanimCode: "MAT.5.1.1, MAT.5.1.2",
              kazanimDesc: "Nokta, doğru, doğru parçası, ışın ve dikme çizimlerini yapar, özelliklerini kavrar ve sembolik gösterimlerini kullanır.",
              interactiveLab: {
                type: "geometry-lines",
                title: "Çizim Tahtası & Doğrular Labı"
              },
              summary: `

• **Nokta:** Boyutu (eni, boyu, derinliği) olmayan, kalemin kâğıda bıraktığı en küçük izdir. Büyük harfle gösterilir ($A, B$).
• **Doğru:** Her iki uçtan da sınırsız uzayan düz çizgidir. Uç noktası yoktur. $AB$ doğrusu veya küçük harfle $d$ doğrusu şeklinde gösterilir.
• **Doğru Parçası:** Bir doğrunun iki noktası arasında kalan sınırlı parçasıdır. İki ucu da kapalıdır: $[AB]$. Cetvelle boyu ölçülebilir: $|AB| = 8\\text{ cm}$.
• **Işın:** Başlangıç noktası sabit olup diğer ucu sonsuza uzayan çizgidir: $[AB)$. Fener veya lazer ışığı örnektir.
• **Dikme (⟂):** Bir doğruya dışındaki bir noktadan inilen $90^\\circ$'lik dik doğru parçasıdır. Noktadan doğruya çizilebilecek **EN KISA** mesafedir!
• **Önemli Kural:** Düzlemde farklı iki noktadan yalnızca **1 tane doğru** geçer!
        
              `,
              keyConcepts: [
                "Nokta",
                "Doğru",
                "Doğru Parçası",
                "Işın",
                "Dikme (⟂)",
                "Cetvel",
                "Gönye"
              ],
              flashcards: [
                {
                  id: "fc_u1_1",
                  front: "Doğru parçası ile ışın arasındaki fark nedir?",
                  back: "Doğru parçasının iki ucu da sınırlıdır [AB] ve boyu ölçülebilir. Işının ise bir ucu kapalı, diğer ucu sonsuza uzar [AB) ve boyu ölçülemez.",
                  tip: "Kurşun kalem doğru parçasına, lazer işaretleyici ışına modeldir.",
                  example: "[AB] = Doğru Parçası, [AB) = Işın"
                },
                {
                  id: "fc_u1_2",
                  front: "Bir doğruya dışındaki bir noktadan çizilebilecek en kısa doğru parçası hangisidir?",
                  back: "O noktadan doğruya inilen DİKME (90° lik dik doğru parçası) en kısa mesafedir.",
                  tip: "Bir noktadan bir doğruya yalnız TEK BİR dikme çizilebilir.",
                  example: "AB ⟂ CD (Ters T sembolü ile gösterilir)."
                },
                {
                  id: "fc_u1_3",
                  front: "İki noktadan kaç farklı doğru geçebilir?",
                  back: "Yalnızca bir (1) doğru geçebilir.",
                  tip: "İki nokta tek bir düz çizgi rotası belirler.",
                  example: "Haritada iki şehir arasına tek bir düz hat çizilebilir."
                }
              ],
              matching: [
                {
                  id: "m1_1",
                  left: "[AB]",
                  right: "İki ucu da kapalı doğru parçası"
                },
                {
                  id: "m1_2",
                  left: "[AB)",
                  right: "A başlangıçlı sonsuza uzayan ışın"
                },
                {
                  id: "m1_3",
                  left: "AB ⟂ CD",
                  right: "Aralarında 90° açı olan dik doğrular"
                },
                {
                  id: "m1_4",
                  left: "|AB|",
                  right: "Doğru parçasının ölçülen uzunluğu"
                }
              ],
              trueFalse: [
                {
                  id: "tf1_1",
                  text: "Doğrunun iki ucu da sonsuza uzadığı için uzunluğu cetvelle ölçülemez.",
                  isTrue: true,
                  explanation: "Doğru! Yalnızca iki ucu sınırlı olan doğru parçasının boyu cetvelle ölçülebilir."
                },
                {
                  id: "tf1_2",
                  text: "Bir noktadan bir doğruya sonsuz sayıda dikme çizilebilir.",
                  isTrue: false,
                  explanation: "Yanlış! Bir noktadan bir doğruya yalnızca TEK BİR dikme çizilebilir."
                }
              ],
              fillBlank: [
                {
                  id: "fb1_1",
                  sentence: "İki ucu da sınırlı olan ve boyu cetvelle ölçülebilen geometrik şekle ___ denir.",
                  options: ["Doğru parçası", "Işın", "Doğru", "Nokta"],
                  correctWord: "Doğru parçası",
                  hint: "[AB] şeklinde gösterilen parça."
                },
                {
                  id: "fb1_2",
                  sentence: "Bir noktadan bir doğruya inilen en kısa mesafeye ___ adı verilir.",
                  options: ["dikme", "ışın", "eğik", "kesen"],
                  correctWord: "dikme",
                  hint: "90 derecelik dik çizgi."
                }
              ],
              quiz: [
                {
                  id: "q1_1",
                  question: "Aşağıdaki geometrik şekillerden hangisinin uzunluğu cetvelle tam olarak ölçülebilir?",
                  options: ["[AB] Doğru parçası", "AB Doğrusu", "[AB) Işını", "d Doğrusu"],
                  correctAnswerIndex: 0,
                  hint: "Yalnızca iki ucu kapalı olan şekiller ölçülebilir.",
                  explanation: "Doğru parçası iki uçtan da sınırlı olduğundan cetvelle boyu ölçülebilir."
                }
              ]
            },
            {
              id: "mat_u1_t2",
              title: "Açıları Ölçme ve Açı Çeşitleri",
              kazanimCode: "MAT.5.1.3",
              kazanimDesc: "Açıölçer (iletki) kullanarak açıları derece cinsinden ölçer; dar, dik, geniş, doğru ve tam açıları belirler.",
              interactiveLab: {
                type: "angle-protractor",
                title: "Dijital Açıölçer (İletki) Labı"
              },
              summary: `

• **Açı:** Başlangıç noktaları ortak olan iki ışının birleşimidir.
• **Açıölçer (İletki):** Açıları ölçmek için kullanılan standart araçtır. Açı birimi **derece ($^\\circ$)**dir. Bir tam tur $360$ eş dilimdir.
• **Açı Çeşitleri:**
  - **Dar Açı:** $0^\\circ$ ile $90^\\circ$ arasındaki açılar ($0^\\circ < s(\\hat{A}) < 90^\\circ$).
  - **Dik Açı:** Ölçüsü tam $90^\\circ$ olan açıdır.
  - **Geniş Açı:** $90^\\circ$ ile $180^\\circ$ arasındaki açılar ($90^\\circ < s(\\hat{B}) < 180^\\circ$).
  - **Doğru Açı:** Ölçüsü tam $180^\\circ$ olan düz çizgidir.
  - **Tam Açı:** Ölçüsü tam $360^\\circ$ olan tam dönmedir.
        
              `,
              keyConcepts: [
                "Açıölçer (İletki)",
                "Derece (°)",
                "Dar Açı",
                "Dik Açı (90°)",
                "Geniş Açı",
                "Doğru Açı (180°)",
                "Tam Açı (360°)"
              ],
              flashcards: [
                {
                  id: "fc_u1_4",
                  front: "Dar açı ile geniş açı hangi derece aralıklarındadır?",
                  back: "Dar açı 0° ile 90° arasında; geniş açı 90° ile 180° arasındadır.",
                  tip: "Tam 90° dik açıdır. 89° dar, 91° geniş açıdır!",
                  example: "45° dar açıdır, 130° geniş açıdır."
                },
                {
                  id: "fc_u1_5",
                  front: "Doğru açı ve tam açının ölçüleri kaçar derecedir?",
                  back: "Doğru açı 180°, Tam açı ise 360° dir.",
                  tip: "Saat 6:00'da kollar doğru açı (180°) oluşturur.",
                  example: "Yarım tur = 180°, Tam tur = 360°"
                }
              ],
              matching: [
                {
                  id: "m1_5",
                  left: "Dik Açı",
                  right: "Tam 90 derece olan açı"
                },
                {
                  id: "m1_6",
                  left: "Doğru Açı",
                  right: "Tam 180 derece olan düz açı"
                },
                {
                  id: "m1_7",
                  left: "Dar Açı",
                  right: "0° ile 90° arasındaki açılar"
                },
                {
                  id: "m1_8",
                  left: "Geniş Açı",
                  right: "90° ile 180° arasındaki açılar"
                }
              ],
              trueFalse: [
                {
                  id: "tf1_3",
                  text: "Ölçüsü 89° olan açı bir dar açıdır.",
                  isTrue: true,
                  explanation: "Doğru! 90 dereceden küçük tüm pozitif açılar dar açıdır."
                },
                {
                  id: "tf1_4",
                  text: "Geniş bir açının ölçüsü 180 dereceden büyük olabilir.",
                  isTrue: false,
                  explanation: "Yanlış! Geniş açı 90° ile 180° arasındadır, 180° ise doğru açıdır."
                }
              ],
              fillBlank: [
                {
                  id: "fb1_3",
                  sentence: "Açıları derece cinsinden ölçmek için kullanılan araca ___ (açıölçer) denir.",
                  options: ["İletki", "Pergel", "Cetvel", "Büyüteç"],
                  correctWord: "İletki",
                  hint: "Yarım daire şeklindeki açı ölçüm aracı."
                }
              ],
              quiz: [
                {
                  id: "q1_2",
                  question: "Aşağıdaki açı ölçülerinden hangisi kesinlikle bir geniş açıdır?",
                  options: ["115°", "90°", "85°", "180°"],
                  correctAnswerIndex: 0,
                  hint: "90 dereceden büyük, 180 dereceden küçük açıdır.",
                  explanation: "115° ölçüsü 90° ile 180° arasında yer aldığı için geniş açıdır."
                }
              ]
            },
            {
              id: "mat_u1_t3",
              title: "Doğruların Yolculuğu ve Açılar",
              kazanimCode: "MAT.5.1.4",
              kazanimDesc: "Düzlemde doğruların birbirine göre durumlarını (paralel, kesişen, dik, çakışık) inceler; ters, komşu, tümler ve bütünler açıları belirler.",
              summary: `

• **Doğruların Durumları:**
  - **Paralel Doğrular ($d_1 \\parallel d_2$):** Hiçbir zaman kesişmez, ortak noktası yoktur. Mesafe hep sabittir (Tren rayları).
  - **Kesişen Doğrular:** Tek bir ortak noktası vardır.
  - **Dik Kesişen Doğrular ($AB \\perp CD$):** Aralarında $90^\\circ$ açı olan doğrulardır.
  - **Çakışık Doğrular:** Tüm noktaları ortaktır (üst üste binerler).
• **Açılar Arasındaki Özel İlişkiler:**
  - **Ters Açılar:** Kesişen iki doğrudan zıt yönlere bakan açılardır. **Ters açıların ölçüleri birbirine daima EŞİTTİR!** (Örn: Makasın karşılıklı açıları).
  - **Tümler Açılar:** Ölçüleri toplamı $90^\\circ$ olan iki açıdır ($30^\\circ$ ile $60^\\circ$).
  - **Bütünler Açılar:** Ölçüleri toplamı $180^\\circ$ olan iki açıdır ($70^\\circ$ ile $110^\\circ$).
        
              `,
              keyConcepts: ["Paralellik (//)", "Kesişen Doğrular", "Ters Açılar", "Tümler Açılar (90°)", "Bütünler Açılar (180°)", "Komşu Açılar"],
              flashcards: [
                {
                  id: "fc_u1_6",
                  front: "Tümler açılar ile bütünler açılar arasındaki fark nedir?",
                  back: "Ölçüleri toplamı 90° olan iki açıya TÜMLER, ölçüleri toplamı 180° olan iki açıya BÜTÜNLER açılar denir.",
                  tip: "Tümler 90°, Bütünler 180°!",
                  example: "40° nin tümleri 50°, bütünleri 140° dir."
                },
                {
                  id: "fc_u1_7",
                  front: "Kesişen iki doğrudan oluşan ters açıların ölçüleri nasıldır?",
                  back: "Ters açıların ölçüleri HER ZAMAN birbirine eşittir!",
                  tip: "Makasın karşılıklı iki açısı gibi.",
                  example: "Açılardan biri 75° ise tam karşısındaki ters açı da 75° dir."
                }
              ],
              matching: [
                {
                  id: "m1_9",
                  left: "Tümler Açılar",
                  right: "Ölçüleri toplamı 90° olan iki açı"
                },
                {
                  id: "m1_10",
                  left: "Bütünler Açılar",
                  right: "Ölçüleri toplamı 180° olan iki açı"
                },
                {
                  id: "m1_11",
                  left: "Ters Açılar",
                  right: "Kesişen doğruların eşit karşılıklı açıları"
                },
                {
                  id: "m1_12",
                  left: "Paralel Doğrular",
                  right: "Hiçbir noktası kesişmeyen raylar"
                }
              ],
              trueFalse: [
                {
                  id: "tf1_5",
                  text: "Ölçüsü 40° olan bir açının tümleri 50° dir.",
                  isTrue: true,
                  explanation: "Doğru! 90° - 40° = 50° dir."
                },
                {
                  id: "tf1_6",
                  text: "Ters açıların ölçüleri birbirinden farklıdır.",
                  isTrue: false,
                  explanation: "Yanlış! Kesişen doğruların oluşturduğu ters açılar daima birbirine eşittir."
                }
              ],
              fillBlank: [
                {
                  id: "fb1_4",
                  sentence: "Ölçüleri toplamı 180 derece olan iki açıya ___ açılar denir.",
                  options: ["Bütünler", "Tümler", "Ters", "Dik"],
                  correctWord: "Bütünler",
                  hint: "Doğru açıya (180°) tamamlayan açılar."
                }
              ],
              quiz: [
                {
                  id: "q1_3",
                  question: "Ölçüsü 130° olan bir açının bütünleri kaç derecedir?",
                  options: ["50°", "40°", "60°", "90°"],
                  correctAnswerIndex: 0,
                  hint: "180 - 130 işlemini yap.",
                  explanation: "180° - 130° = 50° bulunur."
                }
              ]
            },
            {
              id: "mat_u1_t4",
              title: "Doğrulardan Çokgenlere ve Temel Elemanları",
              kazanimCode: "MAT.5.1.5",
              kazanimDesc: "Çokgenleri kapalı şekiller olarak yorumlar, temel elemanlarını tanır ve Atatürk'ün Geometri kitabındaki terimleri inceler.",
              interactiveLab: {
                type: "triangle-polygons",
                title: "Üçgen & 180° Kuralı Atölyesi"
              },
              summary: `

• **Çokgen:** Düzlemde en az 3 doğrunun ardışık olarak kesişmesiyle oluşan kapalı şekillerdir (üçgen, dörtgen, beşgen, altıgen...).
• **Çokgenin Temel Elemanları:** Kenar, köşe, iç açı, dış açı ve **Köşegen**.
• **Köşegen:** Çokgende ardışık olmayan (komşu olmayan) iki köşeyi birleştiren doğru parçasıdır.
• **ÇOK ÖNEMLİ KURAL:** **ÜÇGENİN KÖŞEGENİ YOKTUR (0 TANE)!** Çünkü üçgenin tüm köşeleri birbirine komşudur. Dörtgende 2, beşgende 5 köşegen vardır.
• **Düzgün Çokgen:** Bütün kenar uzunlukları ve iç açı ölçüleri eşit olan çokgenlerdir (Eşkenar üçgen, kare).
• **Atatürk'ün Geometri Kitabı (1937):** Atatürk bizzat yazdığı kitapla *Müselles ➔ Üçgen*, *Murabba ➔ Kare*, *Zaviye ➔ Açı*, *Kutur ➔ Çap*, *Nısf-ı kutur ➔ Yarıçap* terimlerini Türkçemize kazandırmıştır.
        
              `,
              keyConcepts: [
                "Çokgen",
                "Kenar",
                "Köşe",
                "Köşegen (Üçgende 0 tane!)",
                "Düzgün Çokgen",
                "Atatürk'ün Geometri Kitabı"
              ],
              flashcards: [
                {
                  id: "fc_u1_8",
                  front: "Üçgenin neden köşegeni yoktur?",
                  back: "Köşegen komşu olmayan köşeleri birleştirir. Üçgenin tüm köşeleri birbirine komşu olduğu için köşegen çizilemez (Köşegen sayısı = 0).",
                  tip: "Dörtgenin 2, beşgenin 5 köşegeni varken üçgende 0'dır.",
                  example: "Üçgende karşı köşe yoktur."
                },
                {
                  id: "fc_u1_9",
                  front: "Atatürk 1937 Geometri kitabıyla hangi terimleri dilimize kazandırmıştır?",
                  back: "Açı, üçgen, dörtgen, kare, boyut, uzay, yüzey, teğet, çap, yarıçap gibi temel terimleri türetmiştir.",
                  tip: "Eski Osmanlıca terimleri Türkçeleştirmiştir.",
                  example: "Müselles yerine üçgen, zaviye yerine açı."
                }
              ],
              matching: [
                {
                  id: "m1_13",
                  left: "Köşegen",
                  right: "Komşu olmayan iki köşeyi birleştiren doğru parçası"
                },
                {
                  id: "m1_14",
                  left: "Üçgen Köşegeni",
                  right: "0 adettir (köşegeni yoktur)"
                },
                {
                  id: "m1_15",
                  left: "Düzgün Çokgen",
                  right: "Tüm kenarları ve tüm iç açıları eşit çokgen"
                },
                {
                  id: "m1_16",
                  left: "Atatürk (1937)",
                  right: "Geometri kitabını yazarak Türkçe terimleri türeten lider"
                }
              ],
              trueFalse: [
                {
                  id: "tf1_7",
                  text: "Üçgenin toplam 3 tane köşegeni vardır.",
                  isTrue: false,
                  explanation: "Yanlış! Üçgenin köşegeni YOKTUR (0 tanedir)."
                },
                {
                  id: "tf1_8",
                  text: "Kare ve eşkenar üçgen birer düzgün çokgendir.",
                  isTrue: true,
                  explanation: "Doğru! Bütün kenarları ve bütün iç açıları birbirine eşittir."
                }
              ],
              fillBlank: [
                {
                  id: "fb1_5",
                  sentence: "Çokgenlerde ardışık olmayan iki köşeyi birleştiren doğru parçasına ___ denir.",
                  options: ["Köşegen", "Kenar", "Dikme", "Işın"],
                  correctWord: "Köşegen",
                  hint: "Üçgende 0, dörtgende 2 adet bulunan çizgi."
                }
              ],
              quiz: [
                {
                  id: "q1_4",
                  question: "Aşağıdaki çokgenlerden hangisinin KÖŞEGENİ YOKTUR?",
                  options: ["Üçgen", "Kare", "Dikdörtgen", "Beşgen"],
                  correctAnswerIndex: 0,
                  hint: "Tüm köşeleri birbiriyle komşu olan şekil.",
                  explanation: "Üçgende komşu olmayan köşe bulunmadığından köşegen sayısı sıfırdır."
                }
              ]
            },
            {
              id: "mat_u1_t5",
              title: "Üçgen Çeşitleri ve Üçgen İnşası",
              kazanimCode: "MAT.5.1.6, MAT.5.1.7",
              kazanimDesc: "Üçgende iç açılar toplamının 180° olduğunu kavrar; kenarlarına ve açılarına göre üçgenleri sınıflandırır; pergel ve çemberlerle Öklid üçgen inşası yapar.",
              interactiveLab: {
                type: "euclid-circles",
                title: "Öklid Pergel & Çember Labı"
              },
              summary: `

• **Üçgende İç Açılar Toplamı:** Herhangi bir üçgenin iç açılarının ölçüleri toplamı **HER ZAMAN $180^\\circ$**dir!
• **Açılarına Göre Üçgenler:**
  - **Dar Açılı Üçgen:** Tüm iç açıları $<90^\\circ$ olan üçgen.
  - **Dik Açılı Üçgen:** Bir iç açısı tam $90^\\circ$ olan üçgen (en fazla 1 dik açı olabilir!).
  - **Geniş Açılı Üçgen:** Bir iç açısı $>90^\\circ$ olan üçgen (en fazla 1 geniş açı olabilir!).
• **Kenarlarına Göre Üçgenler:**
  - **Çeşitkenar Üçgen:** Üç kenarı da farklı uzunlukta.
  - **İkizkenar Üçgen:** İki kenarı ve taban açıları birbirine eşit.
  - **Eşkenar Üçgen:** Üç kenarı eşit ve **her iç açısı $60^\\circ$** olan düzgün üçgen.
• **Çember ve Daire:** Çember içi boş halkadır (simit, yüzük); daire içi dolu alandır (madeni para, pizza). Çap, yarıçapın 2 katıdır ($R = 2 \\times r$).
• **Öklid'in 1. Önermesi:** Yarıçapları eşit iki çember birbirinin merkezinden geçirilip kesişim noktaları birleştirildiğinde cetvelsiz kusursuz bir **Eşkenar Üçgen** inşa edilir!
        
              `,
              keyConcepts: [
                "İç Açılar Toplamı (180°)",
                "Eşkenar Üçgen (60°)",
                "İkizkenar Üçgen",
                "Dik Üçgen",
                "Çember & Daire",
                "Yarıçap (r)",
                "Çap (R=2r)",
                "Öklid 1. Önermesi"
              ],
              flashcards: [
                {
                  id: "fc_u1_10",
                  front: "Bir üçgenin iç açıları toplamı kaç derecedir?",
                  back: "Bir üçgenin iç açılarının toplamı HER ZAMAN 180° dir.",
                  tip: "Köşeleri yırtıp dizdiğimizde 180° lik doğru açı oluşur.",
                  example: "50° + 70° + 60° = 180°"
                },
                {
                  id: "fc_u1_11",
                  front: "Eşkenar üçgenin her bir iç açısı kaç derecedir?",
                  back: "Her iç açısı 60° dir (180 ÷ 3 = 60°).",
                  tip: "Eşkenar üçgen daima dar açılıdır.",
                  example: "Tüm kenarları ve açıları eşittir."
                },
                {
                  id: "fc_u1_12",
                  front: "Çember ile daire arasındaki fark nedir?",
                  back: "Çember içi boş halkadır; daire ise çember ile sınırladığı iç bölgenin tamamıdır (içi dolu yüzey).",
                  tip: "Simit çembere, madeni para daireye örnektir.",
                  example: "Hula hoop = çember, yemek tabağı = daire."
                }
              ],
              matching: [
                {
                  id: "m1_17",
                  left: "Eşkenar Üçgen",
                  right: "Her iç açısı 60° olan düzgün üçgen"
                },
                {
                  id: "m1_18",
                  left: "İç Açılar Toplamı",
                  right: "Üçgende daima 180 derecedir"
                },
                {
                  id: "m1_19",
                  left: "Çap (R)",
                  right: "Yarıçapın 2 katı uzunluğundaki doğru parçası"
                },
                {
                  id: "m1_20",
                  left: "Öklid 1. Önermesi",
                  right: "Kesişen eş çemberlerle cetvelsiz eşkenar üçgen inşası"
                }
              ],
              trueFalse: [
                {
                  id: "tf1_9",
                  text: "Bir üçgende iki tane 95° lik geniş açı bulunabilir.",
                  isTrue: false,
                  explanation: "Yanlış! İki geniş açının toplamı 180° yi aşar. Bir üçgende en fazla 1 geniş açı bulunabilir."
                },
                {
                  id: "tf1_10",
                  text: "Yarıçapı 7 cm olan çemberin çapı 14 cm dir.",
                  isTrue: true,
                  explanation: "Doğru! Çap = 2 x Yarıçap = 2 x 7 = 14 cm dir."
                }
              ],
              fillBlank: [
                {
                  id: "fb1_6",
                  sentence: "Bir üçgenin iç açılarının ölçüleri toplamı ___ derecedir.",
                  options: ["180", "360", "90", "270"],
                  correctWord: "180",
                  hint: "Doğru açının ölçüsüne eşit."
                }
              ],
              quiz: [
                {
                  id: "q1_5",
                  question: "İki iç açısı 55° ve 65° olan üçgenin üçüncü iç açısı kaç derecedir?",
                  options: ["60°", "70°", "50°", "80°"],
                  correctAnswerIndex: 0,
                  hint: "180 - (55 + 65) = ?",
                  explanation: "55 + 65 = 120°. 180 - 120 = 60° bulunur."
                }
              ]
            }
          ]
        },
        {
          id: "mat_u2",
          unitNumber: 2,
          title: "2. Tema: Sayılar ve Nicelikler (1) - Doğal Sayılar ve İşlemler",
          description: "Çok basamaklı milyonlu doğal sayılar, basamak değerleri, dört işlem stratejileri, zihinden işlemler ve Napier'ın Kemikleri",
          topics: [
            {
              id: "mat_u2_t1",
              title: "Çok Basamaklı Doğal Sayılar ve Basamak Değeri",
              kazanimCode: "MAT.5.2.1",
              kazanimDesc: "En çok dokuz basamaklı doğal sayıları okur, yazar, bölüklerine ayırır ve basamak değerlerini belirleyerek çözümler.",
              summary: `

• **Bölükler:** Çok basamaklı sayıları kolay okuyup yazmak için sayılar sağdan sola doğru üçerli gruplara (**Bölük**) ayrılır: **Birler Bölüğü**, **Binler Bölüğü**, **Milyonlar Bölüğü**.
• **Sayının Okunuşu:** Önce bölükteki sayı okunur, ardından bölüğün adı söylenir (Birler bölüğü hariç).
• **Basamak Değeri:** Bir rakamın bulunduğu basamağa göre aldığı değerdir.
• **Sayı Değeri:** Rakamın kendisinin gösterdiği değerdir (basamağa göre değişmez).
• **Çözümleme:** Sayının, basamak değerlerinin toplamı biçiminde yazılmasıdır.
        
              `,
              keyConcepts: ["Milyonlar Bölüğü", "Binler Bölüğü", "Birler Bölüğü", "Basamak Değeri", "Sayı Değeri", "Çözümleme"],
              flashcards: [
                {
                  id: "fc_u2_1",
                  front: "Sayı değeri ile basamak değeri arasındaki fark nedir?",
                  back: "Sayı değeri rakamın kendi değeridir (değişmez). Basamak değeri ise bulunduğu basamağın değeriyle çarpılarak bulunur.",
                  tip: "7 rakamı yüzler basamağında ise basamak değeri 700, sayı değeri 7'dir.",
                  example: "45.892.123 sayısında 5'in basamak değeri 5.000.000'dur."
                },
                {
                  id: "fc_u2_2",
                  front: "Bir sayıyı okurken hangi bölüğün adı söylenmez?",
                  back: "Birler bölüğü!",
                  tip: "Milyonlar ve Binler bölüğünün adı söylenir, en sondaki birler bölüğü sadece sayı olarak okunur.",
                  example: "'5 milyon 40 bin 12' deriz; '12 birler' demeyiz."
                }
              ],
              matching: [
                {
                  id: "m2_1",
                  left: "Milyonlar Bölüğü",
                  right: "Sayının en solundaki milyonluk grup"
                },
                {
                  id: "m2_2",
                  left: "Binler Bölüğü",
                  right: "Ortadaki üç basamaklı binlik grup"
                },
                {
                  id: "m2_3",
                  left: "Basamak Değeri",
                  right: "Rakamın bulunduğu yere göre kazandığı değer"
                },
                {
                  id: "m2_4",
                  left: "Sayı Değeri",
                  right: "Rakamın kendi değişmeyen saf değeri"
                }
              ],
              trueFalse: [
                {
                  id: "tf2_1",
                  text: "Bölükler ayrılırken sayının sağından (birler basamağından) başlanır.",
                  isTrue: true,
                  explanation: "Doğru! Her zaman sağdan sola üçerli gruplara ayrılır."
                },
                {
                  id: "tf2_2",
                  text: "Bir rakamın sayı değeri bulunduğu basamağa göre değişir.",
                  isTrue: false,
                  explanation: "Yanlış! Sayı değeri değişmez, basamak değeri değişir."
                }
              ],
              fillBlank: [
                {
                  id: "fb2_1",
                  sentence: "58.402.190 sayısında binler bölüğündeki sayı ___ dir.",
                  options: ["402", "58", "190", "40"],
                  correctWord: "402",
                  hint: "Sağdan ikinci üç basamaklı grup."
                }
              ],
              quiz: [
                {
                  id: "q2_1",
                  question: "78.542.109 sayısındaki '8' rakamının basamak değeri kaçtır?",
                  options: ["8.000.000", "80.000.000", "800.000", "80.000"],
                  correctAnswerIndex: 0,
                  hint: "Milyonlar basamağında yer alır.",
                  explanation: "8 x 1.000.000 = 8.000.000 bulunur."
                }
              ]
            },
            {
              id: "mat_u2_t2",
              title: "Doğal Sayılarla İşlemler ve Zihinden Stratejiler",
              kazanimCode: "MAT.5.2.2",
              kazanimDesc: "Doğal sayılarla dört işlem yapar; tahmin stratejilerini kullanır ve zihinden işlem becerilerini geliştirir.",
              summary: `

• **Toplama ve Çıkarma:** Aynı adlı basamaklar alt alta gelecek şekilde yazılır ve sağdan başlanarak işlem yapılır (Eldelere ve onluk bozmaya dikkat!).
• **Çarpma ve Bölme:** Çok basamaklı sayılarla çarpma yaparken basamak kaydırma kuralına uyulur. Bölmede kalan her zaman bölenden küçük olmalıdır ($Kalan < Bölen$).
• **Tahmin Stratejileri:**
  - **En Yakın Onluğa/Yüzlüğe Yuvarlama:** Hızlı yaklaşık sonuç bulmak için sayılar yuvarlanır.
  - **Basamak Değerine Göre Gruplama:** Yüzlükleri, onlukları ve birlikleri ayrı ayrı toplama.
• **Zihinden İşlem Stratejileri:**
  - 10, 100, 1000 ile zihinden çarparken sıfır ekleme, bölerken sıfır silme.
  - 9 ile toplarken 10 ekleyip 1 çıkarma.
        
              `,
              keyConcepts: ["Eldeli Toplama", "Onluk Bozma", "Basamak Kaydırma", "Kalanlı Bölme", "Yuvarlama ile Tahmin", "Zihinden İşlem"],
              flashcards: [
                {
                  id: "fc_u2_3",
                  front: "Bir bölme işleminde kalan sayı hakkında kesin kural nedir?",
                  back: "Kalan sayı daima bölenden KÜÇÜK olmalıdır (Kalan < Bölen).",
                  tip: "Bölen 12 ise kalan en fazla 11 olabilir.",
                  example: "Bölen = 8 ise kalan 0, 1, 2, 3, 4, 5, 6 veya 7 olabilir."
                },
                {
                  id: "fc_u2_4",
                  front: "Bir sayıyı 100 ile zihinden çarpmanın pratik yolu nedir?",
                  back: "Sayının sağına iki adet sıfır (00) eklemektir.",
                  tip: "10 ile çarparken 1 sıfır, 100 ile çarparken 2 sıfır, 1000 ile çarparken 3 sıfır eklenir.",
                  example: "45 x 100 = 4500"
                }
              ],
              matching: [
                {
                  id: "m2_5",
                  left: "Kalan Kuralı",
                  right: "Kalan daima bölenden küçüktür"
                },
                {
                  id: "m2_6",
                  left: "100 ile Çarpma",
                  right: "Sayının sağına 2 sıfır eklenir"
                },
                {
                  id: "m2_7",
                  left: "Yuvarlama",
                  right: "Sonucu yaklaşık olarak tahmin etme yöntemi"
                }
              ],
              trueFalse: [
                {
                  id: "tf2_3",
                  text: "Böleni 15 olan bir bölme işleminde kalan en fazla 14 olabilir.",
                  isTrue: true,
                  explanation: "Doğru! Kalan daima bölenden küçük olmalıdır (14 < 15)."
                }
              ],
              fillBlank: [
                {
                  id: "fb2_2",
                  sentence: "Bir bölme işleminde kalan sayı, ___ sayısından her zaman küçük olmak zorundadır.",
                  options: ["bölen", "bölüm", "bölünen", "fark"],
                  correctWord: "bölen",
                  hint: "Bölen sayı kalandan büyük olmalıdır."
                }
              ],
              quiz: [
                {
                  id: "q2_2",
                  question: "Böleni 9, bölümü 14 ve kalanı 5 olan bir bölme işleminde bölünen sayı kaçtır?",
                  options: ["131", "126", "135", "140"],
                  correctAnswerIndex: 0,
                  hint: "Bölünen = (Bölen x Bölüm) + Kalan",
                  explanation: "(9 x 14) + 5 = 126 + 5 = 131 bulunur."
                }
              ]
            },
            {
              id: "mat_u2_t3",
              title: "Gerçek Yaşam Problemleri ve Napier'ın Kemikleri",
              kazanimCode: "MAT.5.2.3",
              kazanimDesc: "Doğal sayılarla çok adımlı gerçek yaşam problemlerini çözer; parantezli işlemleri kavrar; Napier'ın Kemikleri tarihi çarpma aletini inceler.",
              summary: `

• **Problem Çözme Basamakları:** 1. Problemi Anlama, 2. Plan Yapma, 3. Planı Uygulama, 4. Sonucu Kontrol Etme.
• **Parantezli İşlemler:** Bir işlemde parantez varsa, **ÖNCE PARANTEZ İÇİNDEKİ İŞLEM** yapılır!
  - Örnek: $5 \\times (8 + 4) = 5 \\times 12 = 60$. Parantez olmasaydı: $5 \\times 8 + 4 = 40 + 4 = 44$ olurdu!
• **Performans Görevi: "Napier'ın Kemikleri" (Ders Kitabı Sayfa 124):**
  - İskoç matematikçi John Napier (1550-1617), çok basamaklı sayıların çarpımını kolaylaştırmak için kemik ve tahta çubuklardan oluşan bir çarpma aleti geliştirmiştir.
  - Basamakları çapraz şeritlerle bölen bu tarihi buluş, modern hesap makinelerinin atası kabul edilir.
        
              `,
              keyConcepts: [
                "Problem Çözme",
                "Parantez İçi Önceliği",
                "Napier'ın Kemikleri",
                "Tarihi Matematik Aletleri"
              ],
              flashcards: [
                {
                  id: "fc_u2_5",
                  front: "İşlemlerde parantezin görevi nedir?",
                  back: "Parantez, içerisindeki işlemin diğer işlemlerden önce yapılması gerektiğini belirtir.",
                  tip: "Parantez öncelik kazandırır!",
                  example: "4 x (10 - 3) = 4 x 7 = 28"
                },
                {
                  id: "fc_u2_6",
                  front: "Napier'ın Kemikleri nedir?",
                  back: "İskoç matematikçi John Napier tarafından çarpma işlemlerini kolaylaştırmak için geliştirilen tarihi çubuklu hesap aletidir.",
                  tip: "Ders kitabı sayfa 124'te performans görevi olarak yer alır.",
                  example: "Çapraz ızgara mantığıyla basamakları çarpar."
                }
              ],
              matching: [
                {
                  id: "m2_8",
                  left: "Parantez ( )",
                  right: "Öncelikli yapılacak işlemi belirtir"
                },
                {
                  id: "m2_9",
                  left: "John Napier",
                  right: "Napier'ın Kemikleri çarpma aletini geliştiren bilgin"
                }
              ],
              trueFalse: [
                {
                  id: "tf2_4",
                  text: "(12 + 8) x 3 işleminin sonucu 60'tır.",
                  isTrue: true,
                  explanation: "Doğru! Önce parantez içi: 12 + 8 = 20. Sonra: 20 x 3 = 60."
                }
              ],
              fillBlank: [
                {
                  id: "fb2_3",
                  sentence: "Matematiksel işlemlerde her zaman önce ___ içindeki işlem yapılır.",
                  options: ["parantez", "toplama", "çıkarma", "bölme"],
                  correctWord: "parantez",
                  hint: "( ) sembolünün içi."
                }
              ],
              quiz: [
                {
                  id: "q2_3",
                  question: "30 - (15 ÷ 3) işleminin sonucu kaçtır?",
                  options: ["25", "5", "20", "15"],
                  correctAnswerIndex: 0,
                  hint: "Önce parantez: 15 ÷ 3 = 5. Sonra 30 - 5 = ?",
                  explanation: "Parantez içi 15 ÷ 3 = 5. Ardından 30 - 5 = 25 bulunur."
                }
              ]
            }
          ]
        },
        {
          id: "mat_u3",
          unitNumber: 3,
          title: "3. Tema: Geometrik Nicelikler - Dikdörtgende Çevre ve Alan",
          description: "Dikdörtgen ve karenin çevre uzunluğu, alan hesabı, birim kareler, aynı çevreye/alana sahip farklı şekiller ve Mete'nin halı problemi",
          topics: [
            {
              id: "mat_u3_t1",
              title: "Dikdörtgen ve Karenin Çevre Uzunluğu",
              kazanimCode: "MAT.5.3.1",
              kazanimDesc: "Dikdörtgen ve karenin çevre uzunluğunu hesaplar; çevresi verilen şekillerin kenar uzunluklarını belirler.",
              summary: `

• **Çevre Uzunluğu:** Bir geometrik şeklin tüm dış kenar uzunluklarının toplamıdır.
• **Dikdörtgenin Çevresi:** Karşılıklı kenarları eşit olduğundan:
  $$\\text{Çevre} = 2 \\times (a + b) \\quad \\text{veya} \\quad a + b + a + b$$
  (Kısa kenar $a$, uzun kenar $b$).
• **Karenin Çevresi:** Dört kenarı da eşit olduğundan:
  $$\\text{Çevre} = 4 \\times a$$
• **Kenar Bulma:** Çevresi $28\\text{ cm}$ olan bir karenin bir kenarı: $28 \\div 4 = 7\\text{ cm}$ dir.
        
              `,
              keyConcepts: [
                "Çevre Uzunluğu",
                "Dikdörtgen Çevresi (2 x (a+b))",
                "Kare Çevresi (4 x a)",
                "Kenar Uzunluğu Bulma"
              ],
              flashcards: [
                {
                  id: "fc_u3_1",
                  front: "Dikdörtgenin çevre uzunluğu nasıl hesaplanır?",
                  back: "Kısa kenar ile uzun kenar toplanıp 2 ile çarpılır: Çevre = 2 x (a + b).",
                  tip: "Veya dört kenarı teker teker toplayabilirsin!",
                  example: "Kısa kenarı 4 cm, uzun kenarı 7 cm olan dikdörtgenin çevresi: 2 x (4 + 7) = 22 cm'dir."
                },
                {
                  id: "fc_u3_2",
                  front: "Çevre uzunluğu 36 cm olan bir karenin bir kenar uzunluğu kaç cm'dir?",
                  back: "9 cm dir (36 ÷ 4 = 9 cm).",
                  tip: "Karenin 4 kenarı da eşit olduğu için çevreyi 4'e böleriz.",
                  example: "4 x 9 = 36 cm"
                }
              ],
              matching: [
                {
                  id: "m3_1",
                  left: "Karenin Çevresi",
                  right: "4 x a (bir kenarın 4 katı)"
                },
                {
                  id: "m3_2",
                  left: "Dikdörtgenin Çevresi",
                  right: "2 x (kısa kenar + uzun kenar)"
                }
              ],
              trueFalse: [
                {
                  id: "tf3_1",
                  text: "Kenar uzunluğu 8 cm olan karenin çevre uzunluğu 32 cm dir.",
                  isTrue: true,
                  explanation: "Doğru! 4 x 8 = 32 cm dir."
                }
              ],
              fillBlank: [
                {
                  id: "fb3_1",
                  sentence: "Bir kenarı 6 cm olan karenin çevre uzunluğu ___ cm dir.",
                  options: ["24", "36", "18", "12"],
                  correctWord: "24",
                  hint: "4 x 6 işlemini yap."
                }
              ],
              quiz: [
                {
                  id: "q3_1",
                  question: "Kısa kenarı 5 cm, uzun kenarı 9 cm olan bir dikdörtgenin çevre uzunluğu kaç santimetredir?",
                  options: ["28 cm", "14 cm", "45 cm", "32 cm"],
                  correctAnswerIndex: 0,
                  hint: "2 x (5 + 9) = ?",
                  explanation: "5 + 9 = 14 cm. 14 x 2 = 28 cm bulunur."
                }
              ]
            },
            {
              id: "mat_u3_t2",
              title: "Dikdörtgen ve Karenin Alanı",
              kazanimCode: "MAT.5.3.2",
              kazanimDesc: "Dikdörtgen ve karenin alanını birim kareler kullanarak ve kenar uzunluklarını çarparak hesaplar.",
              interactiveLab: {
                type: "area-perimeter",
                title: "Çevre & Alan Simülatörü"
              },
              summary: `

• **Alan:** Bir şeklin düzlemde kapladığı yerin büyüklüğüdür. Standart olarak **birim karelerle ($\\text{br}^2, \\text{cm}^2, \\text{m}^2$)** ölçülür.
• **Dikdörtgenin Alanı:** İçine sığan birim kare sayısı ardışık kenarların çarpımına eşittir:
  $$\\text{Alan} = \\text{Kısa Kenar} \\times \\text{Uzun Kenar} = a \\times b$$
• **Karenin Alanı:**
  $$\\text{Alan} = a \\times a = a^2$$
• **Çevre ile Alan Farkı:** Çevre şeklin dış çerçeve uzunluğudur (cm, m); alan ise iç yüzeyin kapladığı düzlemsel yerdir ($\\text{cm}^2, \\text{m}^2$).
        
              `,
              keyConcepts: ["Alan", "Birim Kare", "cm² ve m²", "Dikdörtgen Alanı (a x b)", "Kare Alanı (a x a)"],
              flashcards: [
                {
                  id: "fc_u3_3",
                  front: "Dikdörtgenin alanı nasıl hesaplanır?",
                  back: "Kısa kenar ile uzun kenar uzunluğu çarpılarak bulunur: Alan = a x b.",
                  tip: "Birim karelerin satır ve sütun sayısını çarpmak gibidir.",
                  example: "Kenarları 4 cm ve 6 cm olan dikdörtgenin alanı: 4 x 6 = 24 cm² dir."
                },
                {
                  id: "fc_u3_4",
                  front: "Bir kenarı 7 cm olan karenin alanı kaç cm² dir?",
                  back: "49 cm² dir (7 x 7 = 49).",
                  tip: "Karenin alanı bir kenarının kendisiyle çarpımıdır.",
                  example: "7 x 7 = 49 cm²"
                }
              ],
              matching: [
                {
                  id: "m3_3",
                  left: "Dikdörtgen Alanı",
                  right: "Kısa kenar x Uzun kenar (a x b)"
                },
                {
                  id: "m3_4",
                  left: "Kare Alanı",
                  right: "Kenarın kendisiyle çarpımı (a x a)"
                },
                {
                  id: "m3_5",
                  left: "Birim Kare",
                  right: "Alanı ölçmek için kullanılan 1 br² lik kare"
                }
              ],
              trueFalse: [
                {
                  id: "tf3_2",
                  text: "Kenarları 5 cm ve 8 cm olan dikdörtgenin alanı 40 cm² dir.",
                  isTrue: true,
                  explanation: "Doğru! 5 x 8 = 40 cm² dir."
                },
                {
                  id: "tf3_3",
                  text: "Çevre ve alan kavramları tamamen aynı şeyi ifade eder.",
                  isTrue: false,
                  explanation: "Yanlış! Çevre dış çizgi uzunluğu (cm), alan ise iç yüzey büyüklüğüdür (cm²)."
                }
              ],
              fillBlank: [
                {
                  id: "fb3_2",
                  sentence: "Kenarları 6 cm ve 9 cm olan dikdörtgenin alanı ___ santimetrekaredir.",
                  options: ["54", "30", "45", "60"],
                  correctWord: "54",
                  hint: "6 x 9 işlemini yap."
                }
              ],
              quiz: [
                {
                  id: "q3_2",
                  question: "Alanı 36 cm² olan bir karenin çevre uzunluğu kaç santimetredir?",
                  options: ["24 cm", "18 cm", "12 cm", "36 cm"],
                  correctAnswerIndex: 0,
                  hint: "Önce kenarı bul: hangi sayının kendisiyle çarpımı 36 eder? Sonra çevreyi hesapla.",
                  explanation: "Kenar x Kenar = 36 olduğundan bir kenar 6 cm dir. Çevre = 4 x 6 = 24 cm bulunur."
                }
              ]
            },
            {
              id: "mat_u3_t3",
              title: "Çevre ve Alan İlişkisi & Piksel Sanatı",
              kazanimCode: "MAT.5.3.3",
              kazanimDesc: "Aynı çevre uzunluğuna sahip farklı alanlı ve aynı alana sahip farklı çevre uzunluklu dikdörtgenleri belirler ve karşılaştırır.",
              summary: `

• **Mete'nin 24 m² Halı Problemi (Ders Kitabı Sayfa 150-151):**
  - Alanları eşit ($24\\text{ m}^2$) olan farklı dikdörtgenler oluşturulabilir:
    - $1 \\times 24$ (Alan: $24\\text{ m}^2$, Çevre: $50\\text{ m}$)
    - $2 \\times 12$ (Alan: $24\\text{ m}^2$, Çevre: $28\\text{ m}$)
    - $3 \\times 8$ (Alan: $24\\text{ m}^2$, Çevre: $22\\text{ m}$)
    - $4 \\times 6$ (Alan: $24\\text{ m}^2$, Çevre: $20\\text{ m}$)
• **BÜYÜK MAARİF MODELİ ÇIKARIMI:**
  - **Alanları eşit olan dikdörtgenlerin çevre uzunlukları birbirinden farklı olabilir!**
  - Kenarlar birbirine yaklaştıkça (kareye doğru) çevre uzunluğu **KÜÇÜLÜR**.
  - Çevre uzunlukları eşit olan dikdörtgenlerin de alanları farklı olabilir (kare olduğunda alan en büyük değerini alır!).
• **Performans Görevi: Piksel Sanatı (Sayfa 155):** Birim karelerle aynı alana sahip estetik desenler tasarlama.
        
              `,
              keyConcepts: ["Aynı Alan Farklı Çevre", "Aynı Çevre Farklı Alan", "Mete'nin Halı Problemi", "Piksel Sanatı"],
              flashcards: [
                {
                  id: "fc_u3_5",
                  front: "Alanları 24 cm² olan iki dikdörtgenin çevreleri eşit olmak zorunda mıdır?",
                  back: "HAYIR! Alanları aynı olan dikdörtgenlerin çevre uzunlukları birbirinden farklı olabilir.",
                  tip: "Örneğin 1x24 dikdörtgeninin çevresi 50 cm iken, 4x6 dikdörtgeninin çevresi 20 cm'dir.",
                  example: "Mete'nin halı probleminde olduğu gibi!"
                },
                {
                  id: "fc_u3_6",
                  front: "Alanı sabit olan bir dikdörtgende çevre uzunluğunu en küçük yapmak için kenarlar nasıl seçilmelidir?",
                  back: "Kenar uzunlukları birbirine en yakın (mümkünse kareye en yakın) seçilmelidir.",
                  tip: "Kenarlar yaklaştıkça çevre küçülür, uzaklaştıkça çevre büyür.",
                  example: "Alan 36 ise: 1x36 çevresi 74 cm iken, 6x6 kare çevresi sadece 24 cm'dir!"
                }
              ],
              matching: [
                {
                  id: "m3_6",
                  left: "Kenarlar Birbirine Yaklaşırsa",
                  right: "Çevre uzunluğu küçülür"
                },
                {
                  id: "m3_7",
                  left: "Kenarlar Birbirinden Uzaklaşırsa",
                  right: "Çevre uzunluğu büyür"
                }
              ],
              trueFalse: [
                {
                  id: "tf3_4",
                  text: "Alanları eşit olan dikdörtgenlerin çevre uzunlukları kesinlikle birbirine eşittir.",
                  isTrue: false,
                  explanation: "Yanlış! Alanları aynı olsa bile çevre uzunlukları tamamen farklı çıkabilir."
                }
              ],
              fillBlank: [
                {
                  id: "fb3_3",
                  sentence: "Alanı 24 m² olan bir dikdörtgenin kenarları birbirine yaklaştıkça çevre uzunluğu ___ .",
                  options: ["küçülür", "büyür", "değişmez", "sıfır olur"],
                  correctWord: "küçülür",
                  hint: "Kareye yaklaştıkça çevre ne olur?"
                }
              ],
              quiz: [
                {
                  id: "q3_3",
                  question: "Alanı 36 cm² ve kenar uzunlukları doğal sayı olan bir dikdörtgenin çevre uzunluğu EN AZ kaç santimetre olabilir?",
                  options: ["24 cm", "26 cm", "30 cm", "74 cm"],
                  correctAnswerIndex: 0,
                  hint: "En küçük çevre için kenarları birbirine en yakın seç (kare durumu: 6 x 6).",
                  explanation: "Kenarları 6 cm ve 6 cm olan kare seçildiğinde Çevre = 4 x 6 = 24 cm ile en küçük değere ulaşır."
                }
              ]
            }
          ]
        },
        {
          id: "mat_u4",
          unitNumber: 4,
          title: "4. Tema: Sayılar ve Nicelikler (2) - Kesirler, Ondalık Gösterim ve Yüzdeler",
          description: "Birim kesirler, tam ve bileşik kesirler, kesirlerle toplama-çıkarma, ondalık basamaklar ve yüzde kavramı",
          topics: [
            {
              id: "mat_u4_t1",
              title: "Birim Kesirler ve Kesir Çeşitleri",
              kazanimCode: "MAT.5.4.1",
              kazanimDesc: "Birim kesirleri sıralar; basit, bileşik ve tam sayılı kesirleri tanır, birbirine dönüştürür ve sayı doğrusunda gösterir.",
              summary: `

• **Birim Kesir:** Payı 1 olan kesirlerdir (Örn: $1/3, 1/5, 1/8$). Birim kesirlerde payda büyüdükçe parçalar küçülür: $1/2 > 1/4 > 1/8$.
• **Kesir Çeşitleri:**
  - **Basit Kesir:** Payı paydasından küçük olan kesirlerdir ($pay < payda$). Değeri 1'den küçüktür (Örn: $3/5$).
  - **Bileşik Kesir:** Payı paydasına eşit veya paydasından büyük olan kesirlerdir ($pay \\ge payda$). Değeri 1 veya 1'den büyüktür (Örn: $7/4, 5/5$).
  - **Tam Sayılı Kesir:** Bir doğal sayı ve bir basit kesirden oluşan kesirlerdir (Örn: $2 \\frac{1}{3}$).
• **Dönüştürme:** Tam sayılı kesir bileşiğe dönüştürülürken: $\\text{Tam Kısım} \\times \\text{Payda} + \\text{Pay}$ formülü kullanılır.
        
              `,
              keyConcepts: [
                "Birim Kesir",
                "Basit Kesir",
                "Bileşik Kesir",
                "Tam Sayılı Kesir",
                "Denk Kesirler",
                "Genişletme & Sadeleştirme"
              ],
              flashcards: [
                {
                  id: "fc_u4_1",
                  front: "Birim kesirlerde payda büyüdükçe kesrin değeri nasıl değişir?",
                  back: "Kesrin değeri KÜÇÜLÜR! Çünkü bütün daha çok parçaya bölünmüş olur.",
                  tip: "Bir pizzayı 2 kişiye mi bölsen çok yersin, 8 kişiye mi?",
                  example: "1/2 > 1/4 > 1/10"
                },
                {
                  id: "fc_u4_2",
                  front: "2 tam 3/4 kesri bileşik kesir olarak nasıl yazılır?",
                  back: "11/4 olarak yazılır (2 x 4 + 3 = 11).",
                  tip: "Tam kısım ile paydayı çarp, payı ekle!",
                  example: "(2 x 4) + 3 = 11 / 4"
                }
              ],
              matching: [
                {
                  id: "m4_1",
                  left: "Birim Kesir",
                  right: "Payı 1 olan kesir (1/n)"
                },
                {
                  id: "m4_2",
                  left: "Basit Kesir",
                  right: "Payı paydasından küçük kesir (3/5)"
                },
                {
                  id: "m4_3",
                  left: "Bileşik Kesir",
                  right: "Payı paydasına eşit veya büyük kesir (7/4)"
                }
              ],
              trueFalse: [
                {
                  id: "tf4_1",
                  text: "1/3 kesri 1/7 kesrinden daha büyüktür.",
                  isTrue: true,
                  explanation: "Doğru! Birim kesirlerde paydası küçük olan daha büyüktür (1/3 > 1/7)."
                }
              ],
              fillBlank: [
                {
                  id: "fb4_1",
                  sentence: "Payı 1 olan kesirlere ___ kesir adı verilir.",
                  options: ["birim", "bileşik", "tam sayılı", "ondalık"],
                  correctWord: "birim",
                  hint: "1/2, 1/5 gibi kesirler."
                }
              ],
              quiz: [
                {
                  id: "q4_1",
                  question: "Aşağıdaki kesirlerden hangisi bir basit kesirdir?",
                  options: ["4/7", "8/5", "9/9", "12/4"],
                  correctAnswerIndex: 0,
                  hint: "Payı paydasından küçük olmalı.",
                  explanation: "4/7 kesrinde pay (4) paydadan (7) küçük olduğu için basit kesirdir."
                }
              ]
            },
            {
              id: "mat_u4_t2",
              title: "Kesirlerle Toplama ve Çıkarma İşlemleri",
              kazanimCode: "MAT.5.4.2",
              kazanimDesc: "Paydaları eşit veya birbirinin katı olan kesirlerle toplama ve çıkarma işlemlerini yapar ve modeller.",
              summary: `

• **Paydaları Eşit Kesirlerle İşlem:** Paylar toplanır veya çıkarılır, ortak payda aynen yazılır.
  $$\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}, \\quad \\frac{8}{9} - \\frac{5}{9} = \\frac{3}{9}$$
• **Paydaları Eşit Olmayan Kesirler:** Önce genişletme veya sadeleştirme yapılarak paydalar eşitlenir!
  - Örnek: $\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$ (1/2 kesri 2 ile genişletildi).
• **Tam Sayı ile Kesir:** $1 - \\frac{2}{5} = \\frac{5}{5} - \\frac{2}{5} = \\frac{3}{5}$.
        
              `,
              keyConcepts: ["Payda Eşitleme", "Kesirlerle Toplama", "Kesirlerle Çıkarma", "Genişletme"],
              flashcards: [
                {
                  id: "fc_u4_3",
                  front: "Paydaları farklı olan iki kesir toplanırken ilk adım nedir?",
                  back: "Genişletme veya sadeleştirme yaparak paydalar EŞİTLENİR.",
                  tip: "Paydalar eşitlenmeden paylar asla toplanamaz!",
                  example: "1/3 + 1/6 = 2/6 + 1/6 = 3/6"
                }
              ],
              matching: [
                {
                  id: "m4_4",
                  left: "3/8 + 2/8",
                  right: "5/8"
                },
                {
                  id: "m4_5",
                  left: "7/10 - 3/10",
                  right: "4/10"
                }
              ],
              trueFalse: [
                {
                  id: "tf4_2",
                  text: "Kesirler toplanırken paydalar da birbiriyle toplanır.",
                  isTrue: false,
                  explanation: "Yanlış! Ortak payda aynen kalır, sadece paylar toplanır."
                }
              ],
              fillBlank: [
                {
                  id: "fb4_2",
                  sentence: "Kesirlerle toplama yapabilmek için öncelikle ___ eşit olması gerekir.",
                  options: ["paydaların", "payların", "tam kısımların", "sayıların"],
                  correctWord: "paydaların",
                  hint: "Alttaki sayılar."
                }
              ],
              quiz: [
                {
                  id: "q4_2",
                  question: "1/2 + 3/8 işleminin sonucu kaçtır?",
                  options: ["7/8", "4/10", "5/8", "1/4"],
                  correctAnswerIndex: 0,
                  hint: "1/2 kesrini 4 ile genişlet: 4/8 + 3/8 = ?",
                  explanation: "4/8 + 3/8 = 7/8 bulunur."
                }
              ]
            },
            {
              id: "mat_u4_t3",
              title: "Ondalık Gösterim ve Yüzdeler",
              kazanimCode: "MAT.5.4.3",
              kazanimDesc: "Paydası 10, 100 veya 1000 olan kesirleri ondalık gösterimle ifade eder; basamak değerlerini belirler; yüzde kavramını (% sembolü) kullanır.",
              summary: `

• **Ondalık Gösterim:** Paydası 10, 100 veya 1000 olan kesirlerin virgül kullanılarak yazılmasıdır.
  - $\\frac{7}{10} = 0,7$ (Sıfır tam onda yedi)
  - $\\frac{25}{100} = 0,25$ (Sıfır tam yüzde yirmi beş)
• **Basamaklar:** Virgülün solu **Tam Kısım** (Birler, Onlar), sağı **Kesir Kısmı** (Onda birler, Yüzde birler, Binde birler).
• **Yüzdeler (%):** Paydası 100 olan kesirlerin '%' sembolü ile gösterilmesidir:
  - $\\frac{35}{100} = \\%35$ (Yüzde otuz beş).
  - Dönüşüm: $\\frac{1}{2} = \\frac{50}{100} = 0,50 = \\%50$.
        
              `,
              keyConcepts: ["Ondalık Gösterim", "Virgül", "Onda Birler", "Yüzde Birler", "Yüzde Sembolü (%)", "Dönüşümler"],
              flashcards: [
                {
                  id: "fc_u4_4",
                  front: "3/10 kesrinin ondalık gösterimi nasıldır?",
                  back: "0,3 (Sıfır tam onda üç) şeklinde yazılır.",
                  tip: "Paydada 1 sıfır varsa virgülden sonra 1 basamak olur.",
                  example: "3/10 = 0,3 | 3/100 = 0,03"
                },
                {
                  id: "fc_u4_5",
                  front: "1/4 kesri yüzde (%) olarak kaça eşittir?",
                  back: "%25'e eşittir (Çeyrek).",
                  tip: "Pay ve paydayı 25 ile genişlet: 25/100 = %25.",
                  example: "1/2 = %50 (Yarım), 1/4 = %25 (Çeyrek)"
                }
              ],
              matching: [
                {
                  id: "m4_6",
                  left: "1/2",
                  right: "%50 (Yarım)"
                },
                {
                  id: "m4_7",
                  left: "1/4",
                  right: "%25 (Çeyrek)"
                },
                {
                  id: "m4_8",
                  left: "3/10",
                  right: "0,3"
                },
                {
                  id: "m4_9",
                  left: "75/100",
                  right: "%75"
                }
              ],
              trueFalse: [
                {
                  id: "tf4_3",
                  text: "0,4 ondalık gösterimi %40'a eşittir.",
                  isTrue: true,
                  explanation: "Doğru! 0,4 = 0,40 = 40/100 = %40'tır."
                }
              ],
              fillBlank: [
                {
                  id: "fb4_3",
                  sentence: "Paydası 100 olan kesirleri göstermek için ___ sembolü kullanılır.",
                  options: ["%", "°", "⟂", "//"],
                  correctWord: "%",
                  hint: "Yüzde işareti."
                }
              ],
              quiz: [
                {
                  id: "q4_3",
                  question: "3/5 kesrinin yüzde (%) olarak gösterimi aşağıdakilerden hangisidir?",
                  options: ["%60", "%30", "%50", "%35"],
                  correctAnswerIndex: 0,
                  hint: "Paydayı 100 yapmak için 20 ile genişlet: (3 x 20) / (5 x 20) = ?",
                  explanation: "3 x 20 = 60, 5 x 20 = 100. Yani 60/100 = %60 bulunur."
                }
              ]
            }
          ]
        },
        {
          id: "mat_u5",
          unitNumber: 5,
          title: "5. Tema: İşlemlerle Cebirsel Düşünme - Eşitlik ve Örüntüler",
          description: "Eşitliğin korunumu, terazi modeli, işlem önceliği ve sayı-şekil örüntülerinin kuralları",
          topics: [
            {
              id: "mat_u5_t1",
              title: "Eşitliğin Korunumu ve Denge",
              kazanimCode: "MAT.5.5.1",
              kazanimDesc: "Eşit kollu terazi modelini kullanarak eşitliğin korunumu ilkesini anlar ve bilinmeyen değerleri bulur.",
              summary: `

• **Eşit Kollu Terazi:** Matematikteki '=' (eşittir) işareti dengede duran bir teraziye benzer.
• **Eşitliğin Korunumu İlkesi:**
  - Eşitliğin her iki tarafına aynı sayı **eklenirse** eşitlik bozulmaz ($a = b \\implies a + c = b + c$).
  - Eşitliğin her iki tarafından aynı sayı **çıkarılırsa** eşitlik bozulmaz ($a = b \\implies a - c = b - c$).
  - Eşitliğin her iki tarafı aynı sıfırdan farklı sayı ile **çarpılır veya bölünürse** denge korunur.
• **Bilinmeyeni Bulma:** $x + 7 = 15 \\implies x = 15 - 7 = 8$.
        
              `,
              keyConcepts: ["Eşitlik (=)", "Eşit Kollu Terazi", "Denge", "Eşitliğin Korunumu", "Bilinmeyen Sembol"],
              flashcards: [
                {
                  id: "fc_u5_1",
                  front: "Eşitliğin her iki tarafına aynı sayı eklenirse ne olur?",
                  back: "Eşitlik BOZULMAZ! Terazi dengede kalmaya devam eder.",
                  tip: "Dengeli terazinin iki kefesine de 2 kg koymak gibi.",
                  example: "8 = 8 ise 8 + 3 = 8 + 3 (11 = 11)"
                }
              ],
              matching: [
                {
                  id: "m5_1",
                  left: "Terazi Dengede",
                  right: "İki tarafın değeri birbirine eşittir"
                },
                {
                  id: "m5_2",
                  left: "■ + 5 = 12",
                  right: "■ = 7"
                }
              ],
              trueFalse: [
                {
                  id: "tf5_1",
                  text: "Eşitliğin bir tarafından 4 çıkarıp diğer tarafına 4 eklersek eşitlik korunur.",
                  isTrue: false,
                  explanation: "Yanlış! İki tarafa da AYNI işlem uygulanmalıdır."
                }
              ],
              fillBlank: [
                {
                  id: "fb5_1",
                  sentence: "Matematikte eşitliği modellemek için en sık ___ terazi modeli kullanılır.",
                  options: ["eşit kollu", "baskül", "kantar", "metre"],
                  correctWord: "eşit kollu",
                  hint: "İki kefeli terazi."
                }
              ],
              quiz: [
                {
                  id: "q5_1",
                  question: "▲ + 14 = 30 eşitliğinde ▲ sembolü yerine hangi sayı gelmelidir?",
                  options: ["16", "44", "14", "20"],
                  correctAnswerIndex: 0,
                  hint: "İki taraftan da 14 çıkar: 30 - 14 = ?",
                  explanation: "30 - 14 = 16 bulunur."
                }
              ]
            },
            {
              id: "mat_u5_t2",
              title: "İşlem Önceliği ve Parantez Kuralları",
              kazanimCode: "MAT.5.5.2",
              kazanimDesc: "Birden fazla işlem içeren durumlarda işlem önceliği kurallarını uygular.",
              summary: `

• **İşlem Önceliği Sıralaması:**
  1. **Parantez İçi:** Varsa önce parantez içindeki işlem tamamlanır.
  2. **Çarpma ve Bölme:** Soldan sağa sırayla yapılır.
  3. **Toplama ve Çıkarma:** Soldan sağa sırayla yapılır.
• **Dikkat:** $10 + 2 \\times 5$ işleminde önce çarpma yapılır: $2 \\times 5 = 10$, sonra $10 + 10 = 20$. (Önce toplama yapılsaydı yanlışlıkla 60 bulunurdu!).
        
              `,
              keyConcepts: ["İşlem Önceliği", "Parantez", "Çarpma Önceliği", "İşlem Sırası"],
              flashcards: [
                {
                  id: "fc_u5_2",
                  front: "Toplama ile çarpma bir arada olduğunda hangisi önce yapılır?",
                  back: "ÇARPMA işlemi önce yapılır!",
                  tip: "İşlem sırası: Parantez > Çarpma/Bölme > Toplama/Çıkarma",
                  example: "4 + 3 x 2 = 4 + 6 = 10"
                }
              ],
              matching: [
                {
                  id: "m5_3",
                  left: "1. Öncelik",
                  right: "Parantez içindeki işlemler"
                },
                {
                  id: "m5_4",
                  left: "2. Öncelik",
                  right: "Çarpma ve Bölme işlemleri"
                },
                {
                  id: "m5_5",
                  left: "3. Öncelik",
                  right: "Toplama ve Çıkarma işlemleri"
                }
              ],
              trueFalse: [
                {
                  id: "tf5_2",
                  text: "12 - 4 x 2 işleminin sonucu 16'dır.",
                  isTrue: false,
                  explanation: "Yanlış! Önce çarpma: 4 x 2 = 8. Sonra: 12 - 8 = 4 bulunur."
                }
              ],
              fillBlank: [
                {
                  id: "fb5_2",
                  sentence: "Birden fazla işlemde toplama ve çarpma varsa önce ___ işlemi yapılır.",
                  options: ["çarpma", "toplama", "çıkarma", "sayma"],
                  correctWord: "çarpma",
                  hint: "Çarpma toplamadan önceliklidir."
                }
              ],
              quiz: [
                {
                  id: "q5_2",
                  question: "24 ÷ (3 + 5) x 2 işleminin sonucu kaçtır?",
                  options: ["6", "16", "24", "10"],
                  correctAnswerIndex: 0,
                  hint: "Önce parantez: 3 + 5 = 8. Sonra 24 ÷ 8 = 3. Sonra 3 x 2 = ?",
                  explanation: "Parantez içi 8. 24 ÷ 8 = 3. 3 x 2 = 6 bulunur."
                }
              ]
            },
            {
              id: "mat_u5_t3",
              title: "Sayı ve Şekil Örüntüleri",
              kazanimCode: "MAT.5.5.3",
              kazanimDesc: "Kuralı verilen sayı ve şekil örüntülerinin kuralını belirler, sonraki adımlarını tahmin eder ve eksikleri tamamlar.",
              summary: `

• **Örüntü:** Belirli bir kurala göre düzenli olarak tekrar eden veya genişleyen sayı ya da şekil dizisidir.
• **Kuralı Bulma:** Ardışık terimler arasındaki artış veya azalış farkı incelenir.
  - Örnek: $4, 9, 14, 19, \\dots \\implies$ Kural: "4'ten başlayarak beşer beşer artan örüntü" (Artış miktarı = +5).
  - 6. adım: $19 + 5 = 24$, $24 + 5 = 29$.
• **Şekil Örüntüleri:** Şekildeki çubuk veya nokta sayıları tablolara dökülerek sayı örüntüsüne dönüştürülür.
        
              `,
              keyConcepts: ["Örüntü", "Artış Miktarı", "Örüntü Kuralı", "Şekil Örüntüsü", "Terim"],
              flashcards: [
                {
                  id: "fc_u5_3",
                  front: "Bir örüntünün kuralı nasıl bulunur?",
                  back: "Ardışık gelen sayılar arasındaki farka bakılır. Fark sabitse kural belirlenir.",
                  tip: "İkinci sayıdan birinci sayıyı çıkar!",
                  example: "7, 13, 19, 25... (Fark = +6, altışar artıyor)."
                }
              ],
              matching: [
                {
                  id: "m5_6",
                  left: "3, 7, 11, 15...",
                  right: "Dörder artan örüntü"
                },
                {
                  id: "m5_7",
                  left: "50, 45, 40, 35...",
                  right: "Beşer azalan örüntü"
                }
              ],
              trueFalse: [
                {
                  id: "tf5_3",
                  text: "6, 11, 16, 21 örüntüsünün bir sonraki sayısı 26'dır.",
                  isTrue: true,
                  explanation: "Doğru! Beşer beşer artmaktadır: 21 + 5 = 26."
                }
              ],
              fillBlank: [
                {
                  id: "fb5_3",
                  sentence: "5, 12, 19, 26 örüntüsünün artış miktarı ___ dir.",
                  options: ["7", "5", "6", "8"],
                  correctWord: "7",
                  hint: "12 - 5 işlemini yap."
                }
              ],
              quiz: [
                {
                  id: "q5_3",
                  question: "8, 15, 22, 29, A örüntüsünde 'A' yerine hangi sayı gelmelidir?",
                  options: ["36", "35", "37", "34"],
                  correctAnswerIndex: 0,
                  hint: "Örüntü 7'şer artmaktadır: 29 + 7 = ?",
                  explanation: "29 + 7 = 36 bulunur."
                }
              ]
            }
          ]
        },
        {
          id: "mat_u6",
          unitNumber: 6,
          title: "6. Tema: Veri ve Olasılık - İstatistiksel Araştırma ve Olasılık",
          description: "Araştırma sorusu üretme, sıklık tablosu, sütun grafiği ve olasılık spektrumu (imkânsız, kesin, eşit şanslı)",
          topics: [
            {
              id: "mat_u6_t1",
              title: "İstatistiksel Araştırma Süreci ve Grafikler",
              kazanimCode: "MAT.5.6.1",
              kazanimDesc: "Araştırma soruları üretir, veri toplar, sıklık tablosu ve sütun grafiği oluşturarak verileri yorumlar.",
              summary: `

• **İstatistiksel Araştırma Süreci:**
  1. Araştırma sorusu belirleme (Gruptan gruba değişebilen, tek bir cevabı olmayan soru).
  2. Uygun örneklemden veri toplama (Anket, görüşme, gözlem).
  3. Verileri düzenleme: **Çetele Tablosu** (çizgilerle) ve **Sıklık Tablosu** (sayılarla).
  4. Görselleştirme: **Sütun Grafiği** (Yatay ve dikey eksenler, eşit aralıklar, grafik başlığı).
  5. Yorumlama ve Sonuç Çıkarma.
• **Araştırma Sorusu Örneği:** "5. sınıf öğrencilerinin en sevdiği spor dalı hangisidir?" (Doğru araştırma sorusu). "Okul müdürünün adı nedir?" (Tek bir cevabı olduğu için araştırma sorusu DEĞİLDİR).
        
              `,
              keyConcepts: ["Araştırma Sorusu", "Veri Toplama", "Çetele Tablosu", "Sıklık Tablosu", "Sütun Grafiği", "Eksenler"],
              flashcards: [
                {
                  id: "fc_u6_1",
                  front: "İyi bir araştırma sorusunun özelliği nedir?",
                  back: "Kişiden kişiye değişebilen, birden fazla farklı cevabı olan ve veri toplanabilecek bir soru olmalıdır.",
                  tip: "'Türkiye'nin başkenti neresidir?' tek cevaplıdır, araştırma sorusu olmaz.",
                  example: "'Sınıf arkadaşlarımızın en sevdiği renkler hangileridir?' iyi bir araştırma sorusudur."
                },
                {
                  id: "fc_u6_2",
                  front: "Sıklık tablosu ile çetele tablosu arasındaki fark nedir?",
                  back: "Çetele tablosunda veriler beşerli çizgi gruplarıyla, sıklık tablosunda ise sayılarla (rakamlarla) gösterilir.",
                  tip: "Çetele = çizgi, Sıklık = sayı!",
                  example: "Futbol: IIII I (Çetele) -> 6 (Sıklık)"
                }
              ],
              matching: [
                {
                  id: "m6_1",
                  left: "Sıklık Tablosu",
                  right: "Verilerin sayılarla gösterildiği tablo"
                },
                {
                  id: "m6_2",
                  left: "Çetele Tablosu",
                  right: "Verilerin çizgilerle gruplandığı tablo"
                },
                {
                  id: "m6_3",
                  left: "Sütun Grafiği",
                  right: "Verilerin dikey/yatay sütunlarla görselleştirilmesi"
                }
              ],
              trueFalse: [
                {
                  id: "tf6_1",
                  text: "Sütun grafiğinde eksenlerdeki aralıkların eşit olması şart değildir.",
                  isTrue: false,
                  explanation: "Yanlış! Sütun grafiğinde eksen aralıkları mutlaka eşit olmalıdır, aksi halde yanıltıcı olur."
                }
              ],
              fillBlank: [
                {
                  id: "fb6_1",
                  sentence: "Verilerin sayılarla (rakamlarla) ifade edildiği tablolara ___ tablosu denir.",
                  options: ["sıklık", "çetele", "veri", "sütun"],
                  correctWord: "sıklık",
                  hint: "Çizgili değil, sayıyla yazılan tablo."
                }
              ],
              quiz: [
                {
                  id: "q6_1",
                  question: "Aşağıdakilerden hangisi bir araştırma sorusu OLABİLİR?",
                  options: [
                    "5-A sınıfı öğrencilerinin en sevdikleri dersler hangileridir?",
                    "Güneş Sistemi'ndeki en büyük gezegen hangisidir?",
                    "Atatürk hangi yılda doğmuştur?",
                    "Türkiye'nin kaç ili vardır?"
                  ],
                  correctAnswerIndex: 0,
                  hint: "Farklı kişilerden farklı cevaplar alınabilecek bir soru olmalıdır.",
                  explanation: "Öğrencilerin en sevdiği dersler kişiden kişiye değişir ve veri toplanarak araştırılır."
                }
              ]
            },
            {
              id: "mat_u6_t2",
              title: "Olasılık Spektrumu",
              kazanimCode: "MAT.5.6.2",
              kazanimDesc: "Bir olayın gerçekleşme olasılığını olasılık spektrumunda (imkânsız, kesin, eşit şanslı) yorumlar.",
              summary: `

• **Olasılık Spektrumu:** Olayların gerçekleşme ihtimalini 0 (İmkânsız) ile 1 (Kesin) arasında gösteren çizgidir.
• **Olay Çeşitleri:**
  - **İmkânsız Olay:** Gerçekleşmesi matematiksel olarak mümkün olmayan olaydır (İhtimal = 0).
    * Örn: Standart bir zarı attığımızda 8 gelmesi, bir torbadan mavi top çıkması (içinde sadece kırmızı top varken).
  - **Kesin Olay:** Kesinlikle gerçekleşecek olan olaydır (İhtimal = 1 veya %100).
    * Örn: Havaya atılan bir taşın yerçekimiyle yere düşmesi, haftanın günlerinin 'P' ile veya 'Ç' ile veya 'C' ile veya 'S' ile başlaması.
  - **Eşit Şanslı Olaylar:** Gerçekleşme şansları birbirine eşit olan durumlardır.
    * Örn: Düzgün bir madeni para atıldığında Yazı veya Tura gelmesi (%50 - %50).
• **Karşılaştırma:** "Daha fazla olasılık", "Eşit olasılık", "Daha az olasılık".
        
              `,
              keyConcepts: [
                "Olasılık Spektrumu",
                "İmkânsız Olay (0)",
                "Kesin Olay (1)",
                "Eşit Şanslı Olaylar (%50)",
                "Daha Olası / Az Olası"
              ],
              flashcards: [
                {
                  id: "fc_u6_3",
                  front: "İmkânsız olay nedir? Bir örnek ver.",
                  back: "Gerçekleşme olasılığı sıfır olan olaydır. Örneğin normal 6 yüzlü bir zarı attığımızda 9 gelmesi.",
                  tip: "İhtimal = 0.",
                  example: "Sadece elma olan sepetten muz çekmek imkânsız olaydır."
                },
                {
                  id: "fc_u6_4",
                  front: "Düzgün bir madeni paranın yazı veya tura gelme olasılığı nasıldır?",
                  back: "Eşit şanslıdır (%50 yazı, %50 tura).",
                  tip: "İki sonucun da şansı tamamen eşittir.",
                  example: "Yazı gelme şansı = Tura gelme şansı."
                }
              ],
              matching: [
                {
                  id: "m6_4",
                  left: "İmkânsız Olay",
                  right: "Zar atışında 10 gelmesi (Olasılık 0)"
                },
                {
                  id: "m6_5",
                  left: "Kesin Olay",
                  right: "Havaya atılan cismin yere düşmesi (Olasılık 1)"
                },
                {
                  id: "m6_6",
                  left: "Eşit Şanslı",
                  right: "Madeni parada yazı veya tura gelmesi"
                }
              ],
              trueFalse: [
                {
                  id: "tf6_2",
                  text: "İçinde sadece kırmızı bilyeler olan bir kutudan mavi bilye çekmek kesin bir olaydır.",
                  isTrue: false,
                  explanation: "Yanlış! Kutuda hiç mavi bilye olmadığı için bu olay İMKÂNSIZ bir olaydır."
                }
              ],
              fillBlank: [
                {
                  id: "fb6_2",
                  sentence: "Gerçekleşme ihtimali hiç bulunmayan olaylara ___ olay denir.",
                  options: ["imkânsız", "kesin", "eşit şanslı", "olası"],
                  correctWord: "imkânsız",
                  hint: "Olasılığı 0 olan olay."
                }
              ],
              quiz: [
                {
                  id: "q6_2",
                  question: "Bir torbada 10 sarı, 3 mavi ve 1 yeşil top vardır. Torbadan rastgele çekilen bir topun hangi renk olma olasılığı EN FAZLADIR?",
                  options: ["Sarı", "Mavi", "Yeşil", "Hepsi eşit"],
                  correctAnswerIndex: 0,
                  hint: "Sayısı en fazla olan topun gelme şansı en yüksektir.",
                  explanation: "Torbadaki en çok top sarı (10 adet) olduğu için sarı gelme olasılığı en fazladır (daha olasıdır)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'fen',
      name: 'Fen Bilimleri',
      shortName: 'Fen Bilimleri',
      icon: '🔬',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
      lightBg: '#ECFDF5',
      description: 'Güneş, Dünya, Ay, kuvvet, hücre, ışık, madde, elektrik ve geri dönüşüm',
      units: [
        {
          id: "fen_u1",
          unitNumber: 1,
          title: "1. Ünite: Gökyüzündeki Komşularımız ve Biz",
          description: "Güneş'in yapısı, Ay'ın özellikleri, hareketleri, evreleri ve Dünya ile büyüklük ilişkileri",
          topics: [
            {
              id: "fen_u1_t1",
              title: "Güneş'in Yapısı ve Özellikleri",
              kazanimCode: "FB.5.1.1",
              kazanimDesc: "Güneş'in geometrik şeklini ve temel özelliklerini kavrar; yapısındaki katmanları ve Güneş lekelerini açıklar.",
              summary: `

• **Şekli ve Boyutu:** Güneş, küre şeklinde dev bir gaz topudur. Dünya'mıza en yakın yıldızdır.
• **Güneş'in Büyüklüğü:** Güneş'in içine yaklaşık 1 milyon 300 bin tane Dünya sığabilir! Basketbol topu Güneş ise Dünya mercimek tanesi kadardır.
• **Gaz Yapısı:** Güneş'in yaklaşık %73'ü Hidrojen, %25'i Helyum gazından oluşur. Çekirdeğindeki nükleer tepkimelerle ısı ve ışık yayar.
• **Katmanları:** Tıpkı Dünya gibi katmanlardan oluşur (İçten dışa: Çekirdek, Işık küre / Fotosfer, Renk küre / Kromosfer, Taç küre / Korona).
• **Güneş Lekeleri:** Güneş'in yüzeyinde çevresine göre daha soğuk (yaklaşık 4000°C) olan koyu renkli bölgelerdir.
• **Kendi Ekseni Etrafında Dönüşü:** Galileo Galilei, teleskopuyla Güneş lekelerini izleyerek Güneş'in batıdan doğuya (saat yönünün tersine) döndüğünü keşfetmiştir. 1 tam dönüşünü yaklaşık 25 günde tamamlar.
• **Güvenlik Uyarısı:** Güneş'e asla çıplak gözle, dürbünle veya korumasız teleskopla doğrudan bakılmamalıdır!
      
              `,
              keyConcepts: [
                "Yıldız",
                "Hidrojen",
                "Helyum",
                "Güneş Lekesi",
                "Galileo",
                "Küre",
                "Katmanlar"
              ],
              flashcards: [
                {
                  id: "fc_fen_u1_1",
                  front: "Güneş bir gezegen midir, yıldız mıdır?",
                  back: "Güneş, Dünya'mıza en yakın orta büyüklükte bir YILDIZDIR.",
                  tip: "Kendi enerjisini kendi üretir (ısı ve ışık kaynağıdır).",
                  example: "Güneş sarı cüce türünde bir yıldızdır."
                },
                {
                  id: "fc_fen_u1_2",
                  front: "Güneş lekeleri nedir ve bize neyi kanıtlar?",
                  back: "Güneş yüzeyindeki daha soğuk ve koyu bölgelerdir. Bu lekelerin hareketi, Güneş'in kendi ekseni etrafında döndüğünü kanıtlar.",
                  tip: "Galileo Galilei teleskopla lekelerin yer değiştirdiğini fark etmiştir.",
                  example: "Lekeler batıdan doğuya doğru hareket eder."
                },
                {
                  id: "fc_fen_u1_3",
                  front: "Güneş ile Dünya'nın büyüklük oranını nasıl modelleriz?",
                  back: "Güneş bir basketbol topu veya pilates topu ise, Dünya bir mercimek veya nohut tanesi kadardır.",
                  tip: "Güneş'in içine yaklaşık 1.300.000 adet Dünya sığabilir.",
                  example: "Güneş çapı Dünya çapının yaklaşık 109 katıdır."
                }
              ],
              matching: [
                {
                  id: "m_f1_1",
                  left: "Güneş Lekesi",
                  right: "Yüzeydeki görece daha soğuk ve koyu renkli bölgeler"
                },
                {
                  id: "m_f1_2",
                  left: "Galileo Galilei",
                  right: "Güneş lekelerini gözlemleyip dönme hareketini ispatlayan bilim insanı"
                },
                {
                  id: "m_f1_3",
                  left: "Hidrojen & Helyum",
                  right: "Güneş'in büyük kısmını oluşturan gazlar"
                },
                {
                  id: "m_f1_4",
                  left: "Güneş'in Dönüş Yönü",
                  right: "Saat yönünün tersine (batıdan doğuya)"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f1_1",
                  question: "Güneş, Dünya'mıza en yakın gök cismidir.",
                  answer: false,
                  explanation: "Dünya'mıza en yakın gök cismi uydumuz olan Ay'dır; Güneş ise en yakın YILDIZDIR."
                },
                {
                  id: "tf_f1_2",
                  question: "Güneş de Dünya gibi katmanlı bir yapıya sahiptir.",
                  answer: true,
                  explanation: "İçten dışa çekirdek, ışık küre, renk küre ve taç küre katmanları bulunur."
                },
                {
                  id: "tf_f1_3",
                  question: "Güneş'e güneş gözlüğü takarak teleskopla bakmak tamamen güvenlidir.",
                  answer: false,
                  explanation: "Normal güneş gözlüğü göze gelen zararlı ışınları engellemez; özel filtrelere ihtiyaç vardır."
                },
                {
                  id: "tf_f1_4",
                  question: "Güneş kendi ekseni etrafında dönme hareketi yapar.",
                  answer: true,
                  explanation: "Güneş batıdan doğuya (saat yönünün tersine) yaklaşık 25 günde bir döner."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f1_1",
                  sentence: "Güneş'in geometrik şekli düzgün bir ___ benzer.",
                  blank: "küreye",
                  options: ["küreye", "çembere", "silindire", "elipse"],
                  tip: "3 boyutlu top gibidir."
                },
                {
                  id: "fb_f1_2",
                  sentence: "Güneş'in yüzeyinde sıcaklığı daha düşük olan bölgelere Güneş ___ denir.",
                  blank: "lekesi",
                  options: ["lekesi", "halkası", "patlaması", "ışığı"],
                  tip: "Koyu lekeler şeklinde görünür."
                },
                {
                  id: "fb_f1_3",
                  sentence: "Güneş'in kendi ekseni etrafında döndüğünü ilk gözlemleyen bilim insanı ___'dir.",
                  blank: "Galileo",
                  options: ["Galileo", "Newton", "Einstein", "Aristo"],
                  tip: "Teleskopla lekeleri incelemiştir."
                },
                {
                  id: "fb_f1_4",
                  sentence: "Güneş'in ana yakıtı olan gazlar ___ ve helyumdur.",
                  blank: "hidrojen",
                  options: ["hidrojen", "oksijen", "azot", "karbondioksit"],
                  tip: "Evrendeki en hafif gaz."
                }
              ],
              quiz: [
                {
                  id: "qz_f1_1",
                  question: "Güneş ile ilgili aşağıda verilen bilgilerden hangisi YANLIŞTIR?",
                  options: [
                    "Dünya'mızın ısı ve ışık kaynağıdır",
                    "Katmanlı bir yapıya sahiptir",
                    "Yüzey sıcaklığı çekirdek sıcaklığından çok daha fazladır",
                    "Kendi ekseni etrafında saat yönünün tersine döner"
                  ],
                  answer: 2,
                  explanation: "Güneş'in yüzey sıcaklığı yaklaşık 6.000°C iken merkezindeki çekirdek sıcaklığı yaklaşık 15 milyon °C'dir; çekirdek çok daha sıcaktır."
                },
                {
                  id: "qz_f1_2",
                  question: "Ali, fen bilgisi projesinde Güneş ve Dünya'nın büyüklüklerini karşılaştırmak istiyor. Güneş için futbol topu seçerse Dünya için ne seçmelidir?",
                  options: ["Basketbol topu", "Karpuz", "Mercimek tanesi", "Portakal"],
                  answer: 2,
                  explanation: "Güneş Dünya'dan hacimce 1.3 milyon kat büyük olduğundan futbol topunun yanına mercimek tanesi en doğru modeldir."
                },
                {
                  id: "qz_f1_3",
                  question: "Güneş lekelerini takip eden bir araştırmacı lekelerin hep aynı yönde ilerlediğini görüyor. Bu durum hangisinin doğrudan kanıtıdır?",
                  options: [
                    "Güneş'in kendi ekseni etrafında döndüğünün",
                    "Dünya'nın Güneş etrafında dolandığının",
                    "Güneş'in katı bir yüzeye sahip olduğunun",
                    "Ay'ın Güneş'in etrafında döndüğünün"
                  ],
                  answer: 0,
                  explanation: "Lekelerin yer değiştirmesi Güneş'in kendi ekseni etrafında batıdan doğuya döndüğünü ispatlar."
                },
                {
                  id: "qz_f1_4",
                  question: "Güneş gözlemi yaparken aşağıdakilerden hangisini yapmak göz sağlığımız için çok TEHLİKELİDİR?",
                  options: [
                    "Doğrudan korumasız dürbünle Güneş'e bakmak",
                    "Özel filtreli teleskop kullanmak",
                    "Güneş tutulması gözlüğü takmak",
                    "Güneş görüntüsünü beyaz bir perdeye yansıtmak"
                  ],
                  answer: 0,
                  explanation: "Dürbün veya teleskop ışığı odaklayarak göz retinasında kalıcı körlüğe yol açabilir."
                }
              ]
            },
            {
              id: "fen_u1_t2",
              title: "Ay'ın Yapısı ve Özellikleri",
              kazanimCode: "FB.5.1.2",
              kazanimDesc: "Ay'ın özelliklerini, yüzey şekillerini (krater vb.) ve atmosferinin yok denecek kadar az olmasının sonuçlarını açıklar.",
              summary: `

• **Dünya'nın Tek Doğal Uydusu:** Ay, Dünya'mızın etrafında dolanan tek doğal uydudur. Şekli küredir.
• **Işık Kaynağı Değildir:** Ay bir ışık kaynağı değildir; Güneş'ten aldığı ışığı yansıtır (aydınlatılmış cisimdir).
• **Ay'ın Büyüklüğü:** Dünya'nın çapı Ay'ın çapının yaklaşık 4 katıdır. (Dünya basketbol topu ise Ay tenis topu kadardır).
• **Atmosfer Yok Denecek Kadar Azdır:**
  - Hava olayları (rüzgâr, yağmur, kar, fırtına) görülmez.
  - Gece ile gündüz arasındaki sıcaklık farkı çok fazladır (Gündüz +120°C, Gece -170°C).
  - Ay'a çarpan gök taşları (meteorlar) parçalanmadan yüzeye düşer ve derin çukurlar açar. Bu çukurlara **KRATER** denir.
  - Rüzgâr ve erozyon olmadığı için astronotların ayak izleri milyonlarca yıl bozulmadan kalır!
• **Ay'ın Yüzeyi:** Toz tabakası (regolit), dağlar, kayalıklar, lav ovaları (Ay denizleri) ve binlerce krater ile kaplıdır.
      
              `,
              keyConcepts: [
                "Uydu",
                "Krater",
                "Meteor",
                "Atmosfer",
                "Sıcaklık Farkı",
                "Ay Denizi",
                "Neil Armstrong"
              ],
              flashcards: [
                {
                  id: "fc_fen_u1_4",
                  front: "Ay'ın yüzeyinde neden binlerce dev krater bulunur?",
                  back: "Ay'ın atmosferi yok denecek kadar ince olduğu için gök taşları (meteorlar) sürtünmeyle yanıp yok olmadan yüzeye çarpar.",
                  tip: "Dünya'nın atmosferi meteorları sürtünmeyle yakarak bizi korur.",
                  example: "Krater: Gök taşlarının çarpmasıyla oluşan dev çukurlar."
                },
                {
                  id: "fc_fen_u1_5",
                  front: "Ay'da rüzgâr, yağmur veya kar yağar mı?",
                  back: "HAYIR. Ay'da hava tabakası (atmosfer) olmadığı için hiçbir hava olayı gerçekleşmez.",
                  tip: "Bu yüzden astronot Neil Armstrong'un ayak izi ilk günkü gibi durmaktadır.",
                  example: "Hava olayları için su buharı ve atmosfer gerekir."
                },
                {
                  id: "fc_fen_u1_6",
                  front: "Ay kendi ışığını mı üretir?",
                  back: "HAYIR. Ay doğal bir ışık kaynağı değildir, Güneş'ten gelen ışığı ayna gibi Dünya'ya yansıtır.",
                  tip: "Yansıtıcı cisimlere 'aydınlatılmış cisim' denir.",
                  example: "Gece parlayan Ay, Güneş ışığının yansımasıdır."
                }
              ],
              matching: [
                {
                  id: "m_f1_5",
                  left: "Krater",
                  right: "Meteorların Ay yüzeyine çarpmasıyla oluşan derin çukurlar"
                },
                {
                  id: "m_f1_6",
                  left: "Ay'ın Atmosferi",
                  right: "Yok denecek kadar ince olan gaz tabakası"
                },
                {
                  id: "m_f1_7",
                  left: "Ay'ın Işığı",
                  right: "Güneş'ten alınıp yansıtılan ışıktır"
                },
                {
                  id: "m_f1_8",
                  left: "Gece-Gündüz Sıcaklık Farkı",
                  right: "Atmosfer olmadığı için yaklaşık 290°C'ye ulaşan fark"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f1_5",
                  question: "Ay, Dünya'mızın yapay bir uydusudur.",
                  answer: false,
                  explanation: "Ay, Dünya'mızın tek DOĞAL uydusudur; insan yapımı uydular yapaydır."
                },
                {
                  id: "tf_f1_6",
                  question: "Ay'da rüzgâr esmediği için astronotların ayak izleri bozulmadan kalır.",
                  answer: true,
                  explanation: "Hava ve su döngüsü olmadığı için aşınma meydana gelmez."
                },
                {
                  id: "tf_f1_7",
                  question: "Ay'ın kütlesi ve çekim kuvveti Dünya'dan daha fazladır.",
                  answer: false,
                  explanation: "Ay Dünya'dan çok daha küçüktür; yerçekimi Dünya'nın yaklaşık 1/6'sı kadardır."
                },
                {
                  id: "tf_f1_8",
                  question: "Ay'ın yüzeyindeki çukurlara krater adı verilir.",
                  answer: true,
                  explanation: "Meteor darbeleriyle oluşan çukurlara krater denir."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f1_5",
                  sentence: "Ay'a çarpan gök taşlarının oluşturduğu çukurlara ___ adı verilir.",
                  blank: "krater",
                  options: ["krater", "vadi", "kanyon", "hendek"],
                  tip: "Ay yüzeyindeki meşhur çukurlar."
                },
                {
                  id: "fb_f1_6",
                  sentence: "Ay, Dünya'nın tek doğal ___ konumundadır.",
                  blank: "uydusu",
                  options: ["uydusu", "gezegenidir", "yıldızıdır", "kuyrukluyıldızıdır"],
                  tip: "Dünya etrafında dolanır."
                },
                {
                  id: "fb_f1_7",
                  sentence: "Ay'da hava olaylarının görülmemesinin temel sebebi ___ yok denecek kadar az olmasıdır.",
                  blank: "atmosferin",
                  options: ["atmosferin", "suyun", "ışığın", "çekirdeğin"],
                  tip: "Gezegeni saran gaz örtüsü."
                },
                {
                  id: "fb_f1_8",
                  sentence: "Ay bir ışık kaynağı olmayıp ___'ten aldığı ışığı yansıtır.",
                  blank: "Güneş",
                  options: ["Güneş", "Dünya", "Kutup Yıldızı", "Mars"],
                  tip: "Sistemimizin yıldızı."
                }
              ],
              quiz: [
                {
                  id: "qz_f1_5",
                  question: "1969 yılında Apollo 11 astronotu Neil Armstrong'un Ay yüzeyine bıraktığı ayak izinin günümüzde hâlâ bozulmadan durmasının asıl sebebi nedir?",
                  options: [
                    "Ay yüzeyinin çok sıcak olması",
                    "Ay'da atmosfer ve rüzgâr gibi hava olaylarının bulunmaması",
                    "Ay'ın Dünya'dan çok uzakta olması",
                    "Ay'ın kendi etrafında dönmemesi"
                  ],
                  answer: 1,
                  explanation: "Atmosfer olmayınca rüzgâr ve yağış oluşmaz, erozyon gerçekleşmediği için izler silinmez."
                },
                {
                  id: "qz_f1_6",
                  question: "Aşağıdakilerden hangisi Ay'ın atmosferinin yok denecek kadar ince olmasının bir sonucu DEĞİLDİR?",
                  options: [
                    "Gece ve gündüz sıcaklık farkının aşırı yüksek olması",
                    "Meteorların yüzeye çarparak kraterler oluşturması",
                    "Güneş'ten aldığı ışığı Dünya'ya yansıtması",
                    "Sesin Ay yüzeyinde iletilememesi (uzay sessizliği)"
                  ],
                  answer: 2,
                  explanation: "Ay'ın Güneş ışığını yansıtması opak ve katı bir yüzeye sahip olmasından kaynaklanır; atmosferin olmamasıyla doğrudan ilgili değildir."
                },
                {
                  id: "qz_f1_7",
                  question: "Ay'ın yüzeyinde geniş, düzlük koyu renkli lav alanlarına eskiden su dolu sanıldığı için ne ad verilmiştir?",
                  options: ["Ay Dağları", "Ay Denizleri", "Krater Tepeleri", "Güneş Lekeleri"],
                  answer: 1,
                  explanation: "Eski gökbilimciler bu koyu düzlükleri deniz sanarak 'Mare' (Ay Denizi) adını vermişlerdir."
                },
                {
                  id: "qz_f1_8",
                  question: "Ay'da yürüyen bir astronot arkadaşına bağırdığında arkadaşı onu duyamaz. Bunun sebebi nedir?",
                  options: [
                    "Ay'ın yerçekiminin az olması",
                    "Ses dalgalarının yayılması için maddesel (hava) bir ortama ihtiyaç duyması",
                    "Ay'ın çok soğuk olması",
                    "Astronot kasklarının sesi emmesi"
                  ],
                  answer: 1,
                  explanation: "Ses boşlukta yayılamaz; Ay'da hava olmadığı için ses dalgaları mekanik olarak iletilemez."
                }
              ]
            },
            {
              id: "fen_u1_t3",
              title: "Ay'ın Hareketleri ve Evreleri",
              kazanimCode: "FB.5.1.3",
              kazanimDesc: "Ay'ın dönme ve dolanma hareketlerini açıklar; Ay'ın evrelerini modeller ve evrelerin oluşum sırasını kavrar.",
              interactiveLab: {
                type: "moon-phases-orbit",
                title: "Ay Evreleri & Yörünge Labı"
              },
              summary: `

• **Ay'ın 3 Temel Hareketi Vardır:**
  1. Kendi ekseni etrafında dönme (yaklaşık 27.3 gün)
  2. Dünya etrafında dolanma (yaklaşık 27.3 gün)
  3. Dünya ile birlikte Güneş etrafında dolanma (365 gün 6 saat)
• **Neden Ay'ın Hep Aynı Yüzünü Görürüz?**
  - Çünkü Ay'ın kendi ekseni etrafında dönme süresi ile Dünya etrafında dolanma süresi birbirine **EŞİTTİR** (yaklaşık 27 gün)! Bu duruma 'kütleçekim kilidi' denir.
• **Ay'ın Evreleri:** Ay, Dünya etrafında dolanırken Güneş'e göre konumu sürekli değişir. Bu nedenle Dünya'dan görünen aydınlık kısmı farklılaşır.
• **Ana Evreler (Aralarında yaklaşık 1 hafta / 7 gün vardır):**
  1. **Yeni Ay:** Ay Güneş ile Dünya arasındadır. Karanlık yüzü Dünya'ya dönüktür, görünmez.
  2. **İlk Dördün:** 1 hafta sonra gelir. Ay'ın sağ yarısı 'D' harfi gibi aydınlık görünür.
  3. **Dolunay:** 2. haftada gelir. Ay'ın Dünya'ya bakan yüzü tamamen aydınlıktır, tam bir daire görünür.
  4. **Son Dördün:** 3. haftada gelir. Ay'ın sol yarısı aydınlıktır (ters D görünümü).
• **Ara Evreler:** Hilal (Yeni Ay ile İlk Dördün arası 'ters C' ve Son Dördün ile Yeni Ay arası düz 'C') ile Şişkin Ay (İlk Dördün-Dolunay ve Dolunay-Son Dördün arası).
• **Döngü Süresi:** Yeni Ay'dan tekrar Yeni Ay'a geçiş yaklaşık **29.5 gün** (1 Ay) sürer.
      
              `,
              keyConcepts: [
                "Yeni Ay",
                "Hilal",
                "İlk Dördün",
                "Şişkin Ay",
                "Dolunay",
                "Son Dördün",
                "Dönme ve Dolanma",
                "Ay Döngüsü"
              ],
              flashcards: [
                {
                  id: "fc_fen_u1_7",
                  front: "Dünya'dan baktığımızda neden Ay'ın hep aynı yüzünü görürüz?",
                  back: "Çünkü Ay'ın kendi ekseni etrafında dönme süresi ile Dünya etrafında dolanma süresi BİRBİRİNE EŞİTTİR (yaklaşık 27.3 gün).",
                  tip: "Buna eşzamanlı dönme denir, arka yüzünü Dünya'dan göremeyiz.",
                  example: "Kendi etrafında 1 tur = Dünya etrafında 1 tur"
                },
                {
                  id: "fc_fen_u1_8",
                  front: "Ay'ın ana evreleri sırasıyla hangileridir ve aralarında kaç gün vardır?",
                  back: "Yeni Ay ➔ İlk Dördün ➔ Dolunay ➔ Son Dördün. İki ana evre arasında yaklaşık 1 HAFTA (7 gün) süre geçer.",
                  tip: "Tüm evrelerin tamamlanması yaklaşık 29.5 gün (1 ay) sürer.",
                  example: "İlk dördünden 1 hafta sonra Dolunay gerçekleşir."
                },
                {
                  id: "fc_fen_u1_9",
                  front: "İlk dördün ile son dördün evreleri gökyüzünde nasıl ayırt edilir?",
                  back: "İlk dördünde Ay'ın SAĞ tarafı aydınlıktır ('D' harfi gibi). Son dördünde ise SOL tarafı aydınlıktır (ters 'D' gibi).",
                  tip: "Düz D = İlk Dördün, Ters D = Son Dördün.",
                  example: "D harfi = Doğru/İlk, Ters D = Son."
                }
              ],
              matching: [
                {
                  id: "m_f1_9",
                  left: "Yeni Ay",
                  right: "Ay'ın aydınlık yüzünün Dünya'dan hiç görünmediği ana evre"
                },
                {
                  id: "m_f1_10",
                  left: "İlk Dördün",
                  right: "Ay'ın sağ tarafının 'D' harfi gibi aydınlık göründüğü evre"
                },
                {
                  id: "m_f1_11",
                  left: "Dolunay",
                  right: "Dünya'ya bakan yüzün tam bir daire şeklinde parladığı evre"
                },
                {
                  id: "m_f1_12",
                  left: "Son Dördün",
                  right: "Ay'ın sol yarısının aydınlık (ters D) göründüğü evre"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f1_9",
                  question: "Ay'ın iki ana evresi arasında geçen süre yaklaşık 1 haftadır.",
                  answer: true,
                  explanation: "4 ana evre olduğu için 28 gün / 4 = yaklaşık 7 gün (1 hafta) sürer."
                },
                {
                  id: "tf_f1_10",
                  question: "Yeni ay evresinde Ay, Güneş ile Dünya arasına girer.",
                  answer: true,
                  explanation: "Güneş ışığı Ay'ın Dünya'ya bakmayan arkadaki yüzüne vurduğu için karanlık kalır."
                },
                {
                  id: "tf_f1_11",
                  question: "Ay kendi ekseni etrafında saat yönünde döner.",
                  answer: false,
                  explanation: "Ay hem kendi ekseni etrafında hem de Dünya etrafında saat yönünün TERSİNE döner."
                },
                {
                  id: "tf_f1_12",
                  question: "Hilal ve Şişkin Ay, Ay'ın ana evrelerindendir.",
                  answer: false,
                  explanation: "Hilal ve Şişkin Ay ana evre değil, ARA EVRELERDİR."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f1_9",
                  sentence: "Ay'ın sağ yarısının 'D' harfi şeklinde aydınlandığı ana evreye ___ denir.",
                  blank: "İlk Dördün",
                  options: ["İlk Dördün", "Son Dördün", "Dolunay", "Yeni Ay"],
                  tip: "Yeni aydan 1 hafta sonra gelir."
                },
                {
                  id: "fb_f1_10",
                  sentence: "Ay'ın gökyüzünde tam bir daire şeklinde ışıl ışıl parladığı evre ___ evresidir.",
                  blank: "Dolunay",
                  options: ["Dolunay", "Yeni Ay", "Hilal", "Şişkin Ay"],
                  tip: "Kurtların uluduğu meşhur evre."
                },
                {
                  id: "fb_f1_11",
                  sentence: "Ay'ın evrelerinin tamamlanıp başa dönmesi yaklaşık ___ gün (1 ay) sürer.",
                  blank: "29.5",
                  options: ["29.5", "15", "365", "7"],
                  tip: "Yaklaşık bir takvim ayı."
                },
                {
                  id: "fb_f1_12",
                  sentence: "Ay'ın Dünya'dan hep aynı yüzünün görülmesi, dönme ve dolanma sürelerinin ___ olmasındandır.",
                  blank: "eşit",
                  options: ["eşit", "farklı", "hızlı", "yavaş"],
                  tip: "İki süre de yaklaşık 27 gündür."
                }
              ],
              quiz: [
                {
                  id: "qz_f1_9",
                  question: "Gökyüzüne bakan Zeynep, Ay'ın sol yarısının aydınlık olduğunu ve ters 'D' harfine benzediğini görüyor. Zeynep hangi evreyi gözlemlemiştir?",
                  options: ["İlk Dördün", "Dolunay", "Son Dördün", "Yeni Ay"],
                  answer: 2,
                  explanation: "Sol yarının aydınlık olduğu ters D şeklindeki evre Son Dördün evresidir."
                },
                {
                  id: "qz_f1_10",
                  question: "Bugün gökyüzünde 'Yeni Ay' evresini gözlemleyen bir öğrenci, yaklaşık 2 hafta (14 gün) sonra hangi ana evreyi görecektir?",
                  options: ["İlk Dördün", "Dolunay", "Son Dördün", "Hilal"],
                  answer: 1,
                  explanation: "Yeni Ay'dan 1 hafta sonra İlk Dördün, 2 hafta sonra ise Dolunay evresi oluşur."
                },
                {
                  id: "qz_f1_11",
                  question: "Aşağıdakilerden hangisi Ay'ın ARA evrelerinden biridir?",
                  options: ["Yeni Ay", "İlk Dördün", "Dolunay", "Hilal"],
                  answer: 3,
                  explanation: "Yeni Ay, İlk Dördün, Dolunay ve Son Dördün ana evredir. Hilal ve Şişkin Ay ara evredir."
                },
                {
                  id: "qz_f1_12",
                  question: "Ay'ın hareket yönleri (kendi etrafında ve Dünya etrafında) ile ilgili hangisi doğrudur?",
                  options: [
                    "İkisi de saat yönünün tersinedir (batıdan doğuya)",
                    "Kendi etrafında saat yönünde, Dünya etrafında tersinedir",
                    "İkisi de saat yönündedir (doğudan batıya)",
                    "Dönme hareketi yapmaz, sadece dolanır"
                  ],
                  answer: 0,
                  explanation: "Güneş, Dünya ve Ay'ın dönme/dolanma hareketlerinin tamamı saat yönünün tersinedir (batıdan doğuya)."
                }
              ]
            },
            {
              id: "fen_u1_t4",
              title: "Güneş, Dünya ve Ay'ın Büyüklük ve Hareket İlişkisi",
              kazanimCode: "FB.5.1.4",
              kazanimDesc: "Güneş, Dünya ve Ay'ın birbirlerine göre hareketlerini ve göreli büyüklüklerini karşılaştırarak modeller.",
              summary: `

• **Büyüklük Sıralaması:** Güneş > Dünya > Ay (Büyükten küçüğe).
• **Meyve ve Eşya Modeli:**
  - Güneş = Karpuz veya Pilates Topu
  - Dünya = Nohut veya Misket
  - Ay = Mercimek veya Karabiber tanesi
• **Uzaklık Etkisi:** Gökyüzüne baktığımızda Güneş ile Ay neredeyse aynı büyüklükte görünür. Bunun sebebi Güneş'in Ay'dan katlarca büyük olmasına rağmen Dünya'ya çok daha **UZAKTA** olmasıdır. Cisimler uzaklaştıkça daha küçük görünür.
• **Güneş-Dünya-Ay Dansı (Hareketler):**
  - Dünya: Kendi ekseni etrafında döner (1 gün -> Gece/Gündüz oluşur), Güneş etrafında dolanır (365 gün 6 saat -> 1 yıl / Mevsimler oluşur).
  - Ay: Kendi ekseni etrafında döner (~27 gün), Dünya etrafında dolanır (~27 gün), Dünya ile birlikte Güneş etrafında dolanır (365 gün 6 saat).
  - Güneş: Samanyolu galaksisinde dolanır ve kendi ekseni etrafında döner (~25 gün).
• **Dönüş Yönleri Kuralı:** Sistemimizdeki dönme ve dolanma hareketlerinin tamamı yukarıdan (Kuzey Kutbu'ndan) bakıldığında **SAAT YÖNÜNÜN TERSİNE** (Batıdan Doğuya) gerçekleşir!
      
              `,
              keyConcepts: ["Perspektif", "Göreceli Büyüklük", "Dönme", "Dolanma", "Saat Yönünün Tersi", "Güneş-Dünya-Ay"],
              flashcards: [
                {
                  id: "fc_fen_u1_10",
                  front: "Güneş, Dünya ve Ay'ın büyüklük sıralaması nasıldır?",
                  back: "Güneş > Dünya > Ay (En büyük Güneş, en küçük Ay'dır).",
                  tip: "Karpuz (Güneş) > Nohut (Dünya) > Mercimek (Ay).",
                  example: "Güneş'in içine 1.3 milyon Dünya, Dünya'nın içine yaklaşık 64 Ay sığabilir."
                },
                {
                  id: "fc_fen_u1_11",
                  front: "Güneş, Ay'dan milyonlarca kat büyük olmasına rağmen gökyüzünde neden ikisi de aynı boyutta gibi görünür?",
                  back: "Çünkü cisimler uzaklaştıkça küçük görünür. Güneş Ay'a göre Dünya'ya ÇOK DAHA UZAKTIR (yaklaşık 150 milyon km).",
                  tip: "Uzaklıktan kaynaklanan bu duruma optik perspektif denir.",
                  example: "Uçaktaki dev bir jet uçağının gökyüzünde serçe kuşu kadar görünmesi gibi."
                },
                {
                  id: "fc_fen_u1_12",
                  front: "Güneş, Dünya ve Ay'ın dönme hareketlerinin ortak yönü nedir?",
                  back: "Hepsi SAAT YÖNÜNÜN TERSİNE (batıdan doğuya doğru) döner ve dolanır.",
                  tip: "Saat yönünün tersi = Saatin akrep/yelkovanının aksi yönü.",
                  example: "Tüm temel yörünge hareketleri sola doğru akar."
                }
              ],
              matching: [
                {
                  id: "m_f1_13",
                  left: "Karpuz - Nohut - Mercimek",
                  right: "Güneş, Dünya ve Ay büyüklük modeli"
                },
                {
                  id: "m_f1_14",
                  left: "Dünya'nın kendi etrafında dönüşü",
                  right: "24 saat sürer ve gece-gündüzü oluşturur"
                },
                {
                  id: "m_f1_15",
                  left: "Dünya'nın Güneş etrafında dolanması",
                  right: "365 gün 6 saat sürer ve 1 yılı oluşturur"
                },
                {
                  id: "m_f1_16",
                  left: "Ortak Hareket Yönü",
                  right: "Saat yönünün tersi (Batıdan doğuya)"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f1_13",
                  question: "Güneş, Dünya ve Ay'ın hepsi küre şeklinde gök cisimleridir.",
                  answer: true,
                  explanation: "Üç gök cismi de geometrik olarak küreye benzer."
                },
                {
                  id: "tf_f1_14",
                  question: "Ay, Güneş'in etrafında Dünya'dan bağımsız olarak tek başına dolanır.",
                  answer: false,
                  explanation: "Ay, Dünya'nın uydusudur ve Dünya ile birlikte Güneş etrafında dolanır."
                },
                {
                  id: "tf_f1_15",
                  question: "Uzaklaşan cisimlerin gözümüze daha küçük görünmesi optik bir yanılsamadır.",
                  answer: true,
                  explanation: "Perspektif nedeniyle uzaktaki büyük cisimler yakındaki küçük cisimlerle aynı boyutta algılanabilir."
                },
                {
                  id: "tf_f1_16",
                  question: "Dünya'nın kendi etrafında dönmesi mevsimleri oluşturur.",
                  answer: false,
                  explanation: "Dünya'nın kendi ekseni etrafında dönmesi GECE-GÜNDÜZÜ oluşturur; Güneş etrafında dolanması mevsimleri oluşturur."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f1_13",
                  sentence: "Güneş, Dünya ve Ay arasında hacmi en küçük olan gök cismi ___'dır.",
                  blank: "Ay",
                  options: ["Ay", "Dünya", "Güneş", "Mars"],
                  tip: "Dünya'nın uydusu."
                },
                {
                  id: "fb_f1_14",
                  sentence: "Güneş, Dünya ve Ay'ın dönme hareketleri saat ibresinin ___ yönündedir.",
                  blank: "tersi",
                  options: ["tersi", "aynı", "kuzey", "güney"],
                  tip: "Batıdan doğuya doğru."
                },
                {
                  id: "fb_f1_15",
                  sentence: "Dünya'nın kendi ekseni etrafında 1 tam dönüşü ___ saat sürer.",
                  blank: "24",
                  options: ["24", "12", "48", "365"],
                  tip: "1 tam gün."
                },
                {
                  id: "fb_f1_16",
                  sentence: "Ay'ın Dünya ile birlikte Güneş etrafında 1 tam turu ___ sürer.",
                  blank: "1 yıl",
                  options: ["1 yıl", "1 ay", "1 hafta", "1 gün"],
                  tip: "365 gün 6 saat."
                }
              ],
              quiz: [
                {
                  id: "qz_f1_13",
                  question: "Güneş, Dünya ve Ay'ın büyüklüklerini modellemek isteyen Can sırasıyla hangi üçlüyü seçerse en doğru bilimsel modeli kurmuş olur?",
                  options: [
                    "Basketbol topu - Tenis topu - Mercimek tanesi",
                    "Tenis topu - Futbol topu - Basketbol topu",
                    "Misket - Ceviz - Karpuz",
                    "Portakal - Mandalina - Elma"
                  ],
                  answer: 0,
                  explanation: "En büyük Güneş (Basketbol topu), orta boy Dünya (Tenis topu/ceviz), en küçük Ay (mercimek/pirinç tanesi) olmalıdır."
                },
                {
                  id: "qz_f1_14",
                  question: "Güneş, Dünya ve Ay'ın hareketleri incelendiğinde aşağıdakilerden hangisi her üçü için de ORTAK bir özelliktir?",
                  options: [
                    "Kendi eksenleri etrafında saat yönünün tersine dönmeleri",
                    "Güneş etrafında dolanma sürelerinin 24 saat olması",
                    "Işık kaynağı olmaları",
                    "Yüzeylerinde rüzgâr ve yağmur olaylarının görülmesi"
                  ],
                  answer: 0,
                  explanation: "Güneş, Dünya ve Ay'ın üçü de kendi eksenleri etrafında batıdan doğuya (saat yönünün tersine) döner."
                },
                {
                  id: "qz_f1_15",
                  question: "Aşağıdaki olaylardan hangisi Dünya'nın GÜNEŞ etrafındaki dolanma hareketinin bir sonucudur?",
                  options: [
                    "Gece ve gündüzün birbirini takip etmesi",
                    "Bir günün (24 saat) tamamlanması",
                    "Bir yılın ve mevsimlerin oluşması",
                    "Güneş lekelerinin yer değiştirmesi"
                  ],
                  answer: 2,
                  explanation: "Dünya'nın Güneş etrafındaki 365 günlük turu bir yılı ve mevsimlerin oluşumunu sağlar."
                },
                {
                  id: "qz_f1_16",
                  question: "Gökyüzüne baktığımızda Güneş ile Ay'ın neredeyse aynı büyüklükte görünmesinin temel bilimsel sebebi nedir?",
                  options: [
                    "Gerçekte ikisinin de boyutlarının tamamen eşit olması",
                    "Güneş'in Ay'a göre Dünya'dan çok daha uzakta yer alması",
                    "Ay'ın ışık yayması",
                    "Dünya'nın atmosferinin Ay'ı büyütüp Güneş'i küçültmesi"
                  ],
                  answer: 1,
                  explanation: "Perspektif etkisi: Çok büyük olan Güneş yaklaşık 150 milyon km uzaktayken, küçük olan Ay sadece 384 bin km uzaktadır."
                }
              ]
            }
          ]
        },
        {
          id: "fen_u2",
          unitNumber: 2,
          title: "2. Ünite: Kuvveti Tanıyalım",
          description: "Kuvvetin ölçülmesi, dinamometre yapısı, kütle ile ağırlık farkı ve sürtünme kuvveti",
          topics: [
            {
              id: "fen_u2_t1",
              title: "Kuvvetin Ölçülmesi ve Dinamometre",
              kazanimCode: "FB.5.2.1",
              kazanimDesc: "Kuvvetin büyüklüğünü dinamometre ile ölçer; esneklik özelliğinden yararlanarak dinamometre çalışma prensibini açıklar.",
              interactiveLab: {
                type: "force-dynamometer",
                title: "Dinamometre ve Kuvvet Ölçüm Labı"
              },
              summary: `

• **Kuvvet Nedir?** Duran cismi hareket ettiren, hareket eden cismi durduran, cisimlerin yönünü, hızını ve şeklini değiştirebilen etkiye **kuvvet** denir.
• **Sembolü ve Birimi:** Kuvvet **F** harfi ile gösterilir. Birimi İngiliz bilim insanı Isaac Newton anısına **Newton (N)**'dur.
• **Dinamometre:** Kuvvetin büyüklüğünü ölçmek için kullanılan alettir.
• **Çalışma Prensibi:** Dinamometrelerin içinde sarmal bir **yay** bulunur. Yayların esneklik özelliğinden yararlanılır.
  - Uygulanan kuvvet arttıkça yayın uzama miktarı doğru orantılı olarak artar (Örn: 5 N yay 1 cm uzatırsa, 10 N kuvvet 2 cm uzatır).
• **Hassasiyet ve Ölçüm Sınırı:**
  - Her dinamometrenin ölçebileceği maksimum bir kuvvet sınırı vardır (Örn: 50 N'luk dinamometreye 80 N asılırsa yayın esnekliği bozulur ve alet bozulur).
  - İnce ve esnek yay kullanılan dinamometreler küçük kuvvetleri çok **hassas** ölçer; kalın yaylı dinamometreler ise büyük kuvvetleri ölçmek için uygundur.
      
              `,
              keyConcepts: [
                "Kuvvet",
                "Newton (N)",
                "Dinamometre",
                "Sarmal Yay",
                "Esneklik",
                "Hassasiyet",
                "Uzama Miktarı"
              ],
              flashcards: [
                {
                  id: "fc_fen_u2_1",
                  front: "Kuvvetin birimi ve ölçüm aleti nedir?",
                  back: "Kuvvetin birimi NEWTON (N), ölçüm aleti ise DİNAMOMETREDİR.",
                  tip: "Isaac Newton'un elma hikâyesinden aklına gelsin.",
                  example: "10 N büyüklüğünde bir çekme kuvveti."
                },
                {
                  id: "fc_fen_u2_2",
                  front: "Dinamometrenin çalışma prensibi neye dayanır?",
                  back: "İçindeki sarmal yayın esneklik ve kuvvetle orantılı uzama özelliğine dayanır.",
                  tip: "Kuvvet 2 katına çıkarsa yayın uzama miktarı da 2 katına çıkar.",
                  example: "5 N'da 2 cm uzayan yay, 15 N'da 6 cm uzar."
                },
                {
                  id: "fc_fen_u2_3",
                  front: "Küçük kuvvetleri daha hassas ölçmek için nasıl bir dinamometre seçilmelidir?",
                  back: "İnce yaylı ve küçük bölmeli dinamometreler seçilmelidir.",
                  tip: "Kalın yaylar küçük kuvvetlerde hemen hiç uzamaz.",
                  example: "1 N'luk silgiyi tartmak için 100 N'luk değil 5 N'luk hassas dinamometre kullanılır."
                }
              ],
              matching: [
                {
                  id: "m_f2_1",
                  left: "Newton (N)",
                  right: "Kuvvet ve ağırlığın uluslararası birimi"
                },
                {
                  id: "m_f2_2",
                  left: "Dinamometre",
                  right: "İçinde esnek yay bulunan kuvvet ölçer"
                },
                {
                  id: "m_f2_3",
                  left: "İnce Yay",
                  right: "Küçük kuvvetleri hassas ölçebilen esnek yapı"
                },
                {
                  id: "m_f2_4",
                  left: "Esneklik Sınırı",
                  right: "Aşıldığında yayın kalıcı deformasyona uğradığı maksimum değer"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f2_1",
                  question: "Dinamometre cisimlerin hacmini ölçmek için kullanılır.",
                  answer: false,
                  explanation: "Dinamometre cisimlerin hacmini değil, cisme uygulanan KUVVETİ veya ağırlığı ölçer."
                },
                {
                  id: "tf_f2_2",
                  question: "Kuvvet birimi Newton'dur ve kısaca 'N' ile gösterilir.",
                  answer: true,
                  explanation: "Kuvvetin birimi Newton (N)'dur."
                },
                {
                  id: "tf_f2_3",
                  question: "Bir dinamometreye taşıma kapasitesinden fazla ağırlık asılırsa yayı bozulur.",
                  answer: true,
                  explanation: "Yayın esneklik sınırı aşılırsa yay eski haline dönemez ve bozulur."
                },
                {
                  id: "tf_f2_4",
                  question: "Kalın yaylı dinamometreler küçük kuvvetleri ince yaylılara göre daha hassas ölçer.",
                  answer: false,
                  explanation: "Küçük kuvvetleri en hassas İNCE yaylı dinamometreler ölçer."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f2_1",
                  sentence: "Kuvvetin büyüklüğünü ölçen alete ___ denir.",
                  blank: "dinamometre",
                  options: ["dinamometre", "termometre", "barometre", "kronometre"],
                  tip: "İçinde yay bulunur."
                },
                {
                  id: "fb_f2_2",
                  sentence: "Kuvvetin birimi İngiliz fizikçinin anısına ___ olarak adlandırılmıştır.",
                  blank: "Newton",
                  options: ["Newton", "Joule", "Pascal", "Gram"],
                  tip: "Sembolü N harfidir."
                },
                {
                  id: "fb_f2_3",
                  sentence: "Dinamometrede kuvvet arttıkça yayın ___ miktarı da doğru orantılı artar.",
                  blank: "uzama",
                  options: ["uzama", "kısalma", "incelme", "kalınlaşma"],
                  tip: "Yay gerilir."
                },
                {
                  id: "fb_f2_4",
                  sentence: "Çok küçük kuvvetleri ölçmek için ___ yaylı dinamometre tercih edilir.",
                  blank: "ince",
                  options: ["ince", "kalın", "sert", "kısa"],
                  tip: "Kolayca esneyebilen."
                }
              ],
              quiz: [
                {
                  id: "qz_f2_1",
                  question: "10 eşit bölmeli ve en fazla 50 N ölçebilen bir dinamometreye bir cisim asıldığında ibre 4 bölme uzamıştır. Bu cismin uyguladığı kuvvet kaç Newton'dur?",
                  options: ["10 N", "20 N", "25 N", "40 N"],
                  answer: 1,
                  explanation: "Her 1 bölme = 50 N / 10 = 5 N'dur. 4 bölme uzadığına göre: 4 × 5 = 20 N'dur."
                },
                {
                  id: "qz_f2_2",
                  question: "En fazla 30 N kuvvet ölçebilen bir dinamometreye aşağıdaki kuvvetlerden hangisi uygulanırsa dinamometrenin esnekliği BOZULUR?",
                  options: ["10 N", "25 N", "30 N", "45 N"],
                  answer: 3,
                  explanation: "45 N, dinamometrenin 30 N olan maksimum kapasitesini aştığı için yay esneklik özelliğini kaybedip bozulur."
                },
                {
                  id: "qz_f2_3",
                  question: "Bir dinamometreye 6 N'luk ağırlık asıldığında yay 3 cm uzuyor. Aynı dinamometreye 14 N'luk ağırlık asılırsa yay kaç cm uzar?",
                  options: ["5 cm", "7 cm", "9 cm", "12 cm"],
                  answer: 1,
                  explanation: "6 N'da 3 cm uzuyorsa her 1 cm için 2 N gerekir (veya her 1 N'da 0.5 cm). 14 N / 2 N = 7 cm uzar."
                },
                {
                  id: "qz_f2_4",
                  question: "Aşağıdaki araçlardan hangisinde dinamometredeki gibi yayların esneklik özelliğinden yararlanılmaz?",
                  options: ["El kantarı", "Mutfak terazisi (yaylı)", "Yaylı yataklar", "Cıvalı termometre"],
                  answer: 3,
                  explanation: "Cıvalı termometre sıvıların genleşme prensibiyle çalışır; yay esnekliği ile ilgisi yoktur."
                }
              ]
            },
            {
              id: "fen_u2_t2",
              title: "Kütle ve Ağırlık İlişkisi",
              kazanimCode: "FB.5.2.3",
              kazanimDesc: "Kütle ve ağırlık kavramlarını karşılaştırır; yerçekimi kuvvetinin ağırlık üzerindeki etkisini açıklar.",
              summary: `

• **Kütle Nedir?**
  - Bir cismin değişmeyen madde miktarıdır.
  - Birimi **Gram (g)** veya **Kilogram (kg)**'dır.
  - **Eşit kollu terazi** ile ölçülür.
  - Evrenin neresine gidilirse gitsin kütle **ASLA DEĞİŞMEZ** (Dünya'da 60 kg olan bir astronot Ay'da da 60 kg'dır).
• **Ağırlık Nedir?**
  - Bir cisme etki eden **yerçekimi kuvvetidir**.
  - Ağırlık bir kuvvettir, bu yüzden birimi **Newton (N)**'dur!
  - **Dinamometre** ile ölçülür.
  - Bulunulan yere ve gök cismine göre **DEĞİŞİR**!
• **Dünya vs Ay Çekimi:**
  - Ay'ın kütlesi Dünya'dan küçük olduğu için yerçekimi kuvveti Dünya'nın yaklaşık **1/6'sı** kadardır.
  - Dünya'da ağırlığı 600 N olan bir cisim Ay'a götürülürse ağırlığı 100 N olarak ölçülür.
• **Yerçekiminin Yönü:** Her zaman gök cisminin merkezine doğrudur (aşağıya doğru).
      
              `,
              keyConcepts: [
                "Kütle",
                "Ağırlık",
                "Yerçekimi Kuvveti",
                "Eşit Kollu Terazi",
                "Kilogram (kg)",
                "Newton (N)",
                "Ay'da Ağırlık"
              ],
              flashcards: [
                {
                  id: "fc_fen_u2_4",
                  front: "Kütle ile Ağırlık arasındaki en temel fark nedir?",
                  back: "Kütle değişmeyen madde miktarıdır (kg, teraziyle ölçülür). Ağırlık ise cisme etki eden yerçekimi KUVVETİDİR (N, dinamometreyle ölçülür).",
                  tip: "Kütle her yerde aynıdır, ağırlık gezegene göre değişir.",
                  example: "Dünya'da 60 kg olan astronot Ay'da da 60 kg'dır ama ağırlığı 6 kat azalır."
                },
                {
                  id: "fc_fen_u2_5",
                  front: "Dünya'da ağırlığı 360 N olan bir cismin Ay'daki ağırlığı kaç N olur?",
                  back: "60 N olur. Çünkü Ay'ın yerçekimi Dünya'nın 6'da 1'i kadardır (360 ÷ 6 = 60 N).",
                  tip: "Ay'da zıpladığımızda havada daha uzun süre kalmamızın sebebi budur.",
                  example: "360 N / 6 = 60 N"
                },
                {
                  id: "fc_fen_u2_6",
                  front: "Kütle hangi aletle, ağırlık hangi aletle ölçülür?",
                  back: "Kütle EŞİT KOLLU TERAZİ ile, ağırlık ise DİNAMOMETRE ile ölçülür.",
                  tip: "Terazi kefeleri kütleleri dengeler, dinamometre yayı kuvveti çeker.",
                  example: "Pazarda patates tartılırken kütle, yerçekimi etkisinde ağırlık ölçülür."
                }
              ],
              matching: [
                {
                  id: "m_f2_5",
                  left: "Kütle Birimi",
                  right: "Kilogram (kg) veya Gram (g)"
                },
                {
                  id: "m_f2_6",
                  left: "Ağırlık Birimi",
                  right: "Newton (N)"
                },
                {
                  id: "m_f2_7",
                  left: "Kütle Ölçer",
                  right: "Eşit kollu terazi"
                },
                {
                  id: "m_f2_8",
                  left: "Ağırlık Ölçer",
                  right: "Dinamometre"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f2_5",
                  question: "Uzaya giden bir astronotun kütlesi sıfır olur.",
                  answer: false,
                  explanation: "Kütle madde miktarıdır ve uzayda da değişmez; sıfır olan şey yerçekimi yokluğunda ağırlıktır."
                },
                {
                  id: "tf_f2_6",
                  question: "Ağırlık bir kuvvet türüdür ve dinamometre ile ölçülür.",
                  answer: true,
                  explanation: "Ağırlık yerçekimi kuvvetidir ve birimi Newton'dur."
                },
                {
                  id: "tf_f2_7",
                  question: "Ay'daki yerçekimi Dünya'dakinden yaklaşık 6 kat daha azdır.",
                  answer: true,
                  explanation: "Ay'ın kütlesi küçük olduğu için çekim kuvveti Dünya'nın 1/6'sıdır."
                },
                {
                  id: "tf_f2_8",
                  question: "Dağın tepesine çıkıldığında cismin kütlesi azalır.",
                  answer: false,
                  explanation: "Kütle değişmez; yerin merkezinden uzaklaşıldığı için sadece ağırlık çok az azalır."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f2_5",
                  sentence: "Cisimlerin değişmeyen madde miktarına ___ denir.",
                  blank: "kütle",
                  options: ["kütle", "ağırlık", "hacim", "kuvvet"],
                  tip: "Her yerde aynıdır."
                },
                {
                  id: "fb_f2_6",
                  sentence: "Bir cisme etki eden yerçekimi kuvvetine o cismin ___ denir.",
                  blank: "ağırlığı",
                  options: ["ağırlığı", "kütlesi", "özkütlesi", "enerjisi"],
                  tip: "Dinamometreyle ölçülür."
                },
                {
                  id: "fb_f2_7",
                  sentence: "Ay'daki çekim kuvveti Dünya'dakinin yaklaşık ___ biri kadardır.",
                  blank: "altıda",
                  options: ["altıda", "ikide", "onda", "üçte"],
                  tip: "1/6 oranı."
                },
                {
                  id: "fb_f2_8",
                  sentence: "Kütle ölçümü için laboratuvarda ___ terazi kullanılır.",
                  blank: "eşit kollu",
                  options: ["eşit kollu", "yaylı", "dinamik", "elektronik"],
                  tip: "Kefeli alet."
                }
              ],
              quiz: [
                {
                  id: "qz_f2_5",
                  question: "Dünya'da kütlesi 48 kg ve ağırlığı 480 N olan bir cisim Ay'a götürülürse kütlesi ve ağırlığı ne olur?",
                  options: ["Kütle: 48 kg, Ağırlık: 80 N", "Kütle: 8 kg, Ağırlık: 80 N", "Kütle: 48 kg, Ağırlık: 480 N", "Kütle: 0 kg, Ağırlık: 0 N"],
                  answer: 0,
                  explanation: "Kütle değişmez (48 kg kalır). Ağırlık ise 6'da birine düşer: 480 N ÷ 6 = 80 N olur."
                },
                {
                  id: "qz_f2_6",
                  question: "Aşağıdakilerden hangisi kütle ve ağırlık kavramları için DOĞRU bir eşleştirmedir?",
                  options: [
                    "Kütle yönlü bir büyüklüktür, ağırlığın yönü yoktur",
                    "Kütle dinamometre ile, ağırlık eşit kollu terazi ile ölçülür",
                    "Kütle birimi kilogramdır, ağırlık birimi Newton'dur",
                    "Ağırlık her yerde aynı kalır, kütle konuma göre değişir"
                  ],
                  answer: 2,
                  explanation: "Kütle birimi kg veya gramdır; ağırlık ise yerçekimi kuvveti olduğu için birimi Newton (N)'dur."
                },
                {
                  id: "qz_f2_7",
                  question: "Deniz seviyesinden yüksek bir dağın zirvesine doğru tırmanan bir dağcının sırt çantasındaki değişim hangisinde doğru açıklanmıştır?",
                  options: [
                    "Çantanın kütlesi azalır, ağırlığı artar",
                    "Çantanın kütlesi değişmez, ağırlığı yerin merkezinden uzaklaştığı için bir miktar azalır",
                    "Çantanın hem kütlesi hem ağırlığı artar",
                    "Hiçbir değişiklik olmaz"
                  ],
                  answer: 1,
                  explanation: "Kütle sabit kalır. Yerin merkezinden uzaklaştıkça yerçekimi kuvveti azaldığı için ağırlık bir miktar azalır."
                },
                {
                  id: "qz_f2_8",
                  question: "Yerçekimi kuvvetinin yönü nereye doğrudur?",
                  options: ["Yukarıya doğru gökyüzüne", "Her zaman doğuya doğru", "Dünya'nın merkezine doğru", "Kuzey kutbuna doğru"],
                  answer: 2,
                  explanation: "Kütleçekim kuvveti daima gök cisminin merkezine doğrudur."
                }
              ]
            },
            {
              id: "fen_u2_t3",
              title: "Sürtünme Kuvveti",
              kazanimCode: "FB.5.2.4",
              kazanimDesc: "Sürtünme kuvvetinin özelliklerini, yönünü, günlük yaşamdaki olumlu/olumsuz etkilerini ve hava-su direncini kavrar.",
              summary: `

• **Sürtünme Kuvveti Nedir?**
  - Temas hâlindeki iki yüzey arasında hareketi zorlaştıran veya engelleyen kuvvettir.
  - Yönü daima cismin hareket yönüne **TERS** yöndedir.
• **Sürtünmeyi Etkileyen Faktörler:**
  1. **Yüzeyin Cinsi:** Pürüzlü yüzeylerde (zımpara kâğıdı, halı, çakıl) sürtünme çok fazladır; pürüzsüz yüzeylerde (buz, cam, yağlı zemin) sürtünme azdır.
  2. **Cismin Ağırlığı (Baskısı):** Cismin ağırlığı arttıkça yüzeye yaptığı baskı artar ve sürtünme kuvveti büyür.
• **Sürtünmenin Hayatımızdaki Yeri:**
  - **Faydaları:** Yürüyebilmemiz, yazı yazabilmemiz, arabaların fren yapıp durabilmesi, eşyaların kaymadan sabit durması sürtünme sayesindedir.
  - **Zararları:** Makine parçalarının aşınması, ısınması, enerji kaybı, araçların fazla yakıt yakması sürtünmenin olumsuz etkileridir.
• **Hava ve Su Direnci:**
  - Havanın cisimlerin hareketine karşı uyguladığı sürtünmeye **hava direnci** denir (Paraşütlerin yavaş inmesini sağlar).
  - Suyun cisimlere uyguladığı sürtünmeye **su direnci** denir (Balıkların ve gemilerin ön kısmı sürtünmeyi azaltmak için sivri/aerodinamik tasarlanmıştır).
      
              `,
              keyConcepts: [
                "Sürtünme Kuvveti",
                "Pürüzlü Yüzey",
                "Hava Direnci",
                "Su Direnci",
                "Paraşüt",
                "Aşınma",
                "Ters Yön"
              ],
              flashcards: [
                {
                  id: "fc_fen_u2_7",
                  front: "Sürtünme kuvvetinin yönü cismin hareket yönüne göre nasıldır?",
                  back: "Daima cismin hareket yönüne TERS (zıt) yöndedir.",
                  tip: "Hareketi durdurmaya ve yavaşlatmaya çalışır.",
                  example: "Sağa doğru kayan kızağa sola doğru sürtünme etki eder."
                },
                {
                  id: "fc_fen_u2_8",
                  front: "Sürtünmeyi artırmak ve azaltmak için neler yapılır?",
                  back: "Artırmak için: Kışın karlı yollara tuz/kum dökülmesi, kış lastiği takılması. Azaltmak için: Kapı menteşelerinin ve makine dişlilerinin yağlanması.",
                  tip: "Kaymayı önlemek için sürtünme artırılır, hızı korumak için azaltılır.",
                  example: "Buz pateni bıçağı sürtünmeyi azaltır, dağcı botu tabanı artırır."
                },
                {
                  id: "fc_fen_u2_9",
                  front: "Hava direnci olmasaydı ne olurdu?",
                  back: "Paraşütler açılamaz ve paraşütçüler yere güvenle inemezdi. Yağmur damlaları mermi hızında kafamıza düşerdi!",
                  tip: "Hava direnci havada hareket eden cisimleri yavaşlatır.",
                  example: "Geniş yüzeyli paraşüt hava direncini artırarak güvenli iniş sağlar."
                }
              ],
              matching: [
                {
                  id: "m_f2_9",
                  left: "Kış Lastiği Takmak",
                  right: "Sürtünmeyi artırarak kaymayı önleme yöntemi"
                },
                {
                  id: "m_f2_10",
                  left: "Menteşeleri Yağlamak",
                  right: "Sürtünmeyi azaltarak aşınma ve sesi önleme yöntemi"
                },
                {
                  id: "m_f2_11",
                  left: "Geniş Paraşüt",
                  right: "Hava direncini artırarak yavaşça yere inme"
                },
                {
                  id: "m_f2_12",
                  left: "Balıkların Gövde Şekli",
                  right: "Su direncini en aza indiren aerodinamik yapı"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f2_9",
                  question: "Sürtünme kuvveti daima cismin hareket yönüyle aynı yöndedir.",
                  answer: false,
                  explanation: "Sürtünme kuvveti cismin hareket yönüne daima ZIT (ters) yöndedir."
                },
                {
                  id: "tf_f2_10",
                  question: "Pürüzlü yüzeylerde sürtünme kuvveti pürüzsüz yüzeylere göre daha fazladır.",
                  answer: true,
                  explanation: "Zımpara ve halı gibi pürüzlü yüzeylerde sürtünme buz ve camdan çok daha büyüktür."
                },
                {
                  id: "tf_f2_11",
                  question: "Sürtünme kuvveti olmasaydı ellerimizle kalem tutup yazı yazamazdık.",
                  answer: true,
                  explanation: "Sürtünme nesnelerin elimizden kaymasını engeller."
                },
                {
                  id: "tf_f2_12",
                  question: "Gemilerin burun kısımlarının 'V' şeklinde sivri yapılması su direncini artırmak içindir.",
                  answer: false,
                  explanation: "Sivri burun su direncini AZALTARAK geminin suda daha hızlı ve az yakıtla gitmesini sağlar."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f2_9",
                  sentence: "Cismin hareketini zorlaştıran ve harekete zıt yönde etkiyen kuvvete ___ kuvveti denir.",
                  blank: "sürtünme",
                  options: ["sürtünme", "yerçekimi", "manyetik", "elektrik"],
                  tip: "Hareketi yavaşlatır."
                },
                {
                  id: "fb_f2_10",
                  sentence: "Havanın cisimlerin hareketine karşı uyguladığı direnç kuvvetine ___ direnci denir.",
                  blank: "hava",
                  options: ["hava", "su", "toprak", "ışık"],
                  tip: "Paraşütleri tutar."
                },
                {
                  id: "fb_f2_11",
                  sentence: "Gıcırdayan kapı menteşelerine yağ sürülmesi sürtünmeyi ___ amacıyla yapılır.",
                  blank: "azaltmak",
                  options: ["azaltmak", "artırmak", "durdurmak", "ölçmek"],
                  tip: "Daha kolay kayması için."
                },
                {
                  id: "fb_f2_12",
                  sentence: "Aynı araba karlı bir yolda ___ lastiği takarak sürtünmeyi artırır.",
                  blank: "kış",
                  options: ["kış", "yaz", "bisiklet", "yarış"],
                  tip: "Dişli tabanlıdır."
                }
              ],
              quiz: [
                {
                  id: "qz_f2_9",
                  question: "Aşağıdaki zeminlerden hangisinde aynı oyuncak araba aynı hızla fırlatıldığında EN UZUN mesafeyi kateder?",
                  options: ["Buz pisti", "Halı zemin", "Toprak yol", "Zımpara kâğıdı"],
                  answer: 0,
                  explanation: "Buz pisti en pürüzsüz ve sürtünmesi en az olan yüzeydir; araba sürtünmeyle yavaşlamadan en uzağa gider."
                },
                {
                  id: "qz_f2_10",
                  question: "Aşağıdakilerden hangisi sürtünme kuvvetini AZALTMAYA yönelik bir uygulamadır?",
                  options: [
                    "Haltercilerin ellerine beyaz toz (magnezyum) sürmesi",
                    "Kışın karlı yollara tuz ve kum serpilmesi",
                    "Bisiklet zincirlerinin makine yağı ile yağlanması",
                    "Krampon ayakkabıların altına çivili dişler yapılması"
                  ],
                  answer: 2,
                  explanation: "Bisiklet zincirinin yağlanması sürtünmeyi ve aşınmayı azaltarak pedalların rahat dönmesini sağlar."
                },
                {
                  id: "qz_f2_11",
                  question: "Uçaktan atlayan iki paraşütçüden Ali geniş yüzeyli paraşüt, Burak ise küçük yüzeyli paraşüt açıyor. Bu durumla ilgili hangisi doğrudur?",
                  options: [
                    "Burak daha yavaş yere iner",
                    "Ali'nin paraşütüne daha fazla hava direnci etki ettiği için Ali daha yavaş ve güvenli iner",
                    "İkisine etki eden hava direnci tamamen eşittir",
                    "Paraşüt yüzey alanı hava direncini etkilemez"
                  ],
                  answer: 1,
                  explanation: "Yüzey alanı arttıkça hava direnci artar. Bu sayede geniş paraşütlü Ali daha yavaş ve güvenli iner."
                },
                {
                  id: "qz_f2_12",
                  question: "Aşağıdakilerden hangisi sürtünme kuvvetinin hayatımıza getirdiği bir ZARARDIR?",
                  options: [
                    "Araba tekerleklerinin zamanla aşınıp yıpranması",
                    "Frene basıldığında otomobilin durabilmesi",
                    "Dağcıların kayalıklara tırmanabilmesi",
                    "Kibrit çöpünün kutuya sürtüldüğünde alev alması"
                  ],
                  answer: 0,
                  explanation: "Lastiklerin ve makine parçalarının aşınıp eskimesi sürtünmenin olumsuz ve yıpratıcı bir sonucudur."
                }
              ]
            }
          ]
        },
        {
          id: "fen_u3",
          unitNumber: 3,
          title: "3. Ünite: Canlıların Yapısına Yolculuk",
          description: "Hücre ve kısımları, bitki ve hayvan hücresi karşılaştırması, hücreden organizmaya geçiş ve destek-hareket sistemi",
          topics: [
            {
              id: "fen_u3_t1",
              title: "Hücre ve Hücrenin Temel Kısımları",
              kazanimCode: "FB.5.3.1",
              kazanimDesc: "Hücrenin temel kısımlarını (zar, sitoplazma, çekirdek) ve görevlerini kavrar; bitki ve hayvan hücresini karşılaştırır.",
              summary: `

• **Hücre Nedir?** Canlının canlılık özelliği gösteren en küçük yapı birimine **hücre** denir. Robert Hooke şişe mantarını mikroskopla inceleyerek odacıklar görmüş ve 'hücre' adını vermiştir.
• **Hücrenin 3 Temel Kısmı:**
  1. **Hücre Zarı:** Hücreyi dıştan sarar, şekil verir ve korur. **Seçici geçirgendir** (yararlı maddeleri alır, zararlıları dışarıda tutar veya atar). Canlı ve esnektir.
  2. **Sitoplazma:** Zar ile çekirdek arasını dolduran yumurta akı kıvamında yarı akışkan sıvıdır. İçinde yaşamsal faaliyetleri yürüten **organeller** (mitokondri, kloroplast, koful, ribozom vb.) bulunur.
  3. **Çekirdek:** Hücrenin yönetim ve denetim merkezidir. İçinde canlının kalıtsal özelliklerini (saç rengi, göz rengi vb.) taşıyan **DNA** bulunur.
• **Bitki Hücresi vs Hayvan Hücresi Farkları:**
  - **Bitki Hücresi:** Köşeli şekildedir. Hücre zarının dışında sert bir **hücre duvarı (hücre çeperi)** vardır. Fotosentez yapan yeşil renkli **kloroplast** organeli içerir. Kofulları büyük ve az sayıdadır.
  - **Hayvan Hücresi:** Yuvarlak şekildedir. Hücre duvarı ve kloroplast **YOKTUR**. Kofulları küçük ve çok sayıdadır.
      
              `,
              keyConcepts: [
                "Hücre",
                "Hücre Zarı",
                "Sitoplazma",
                "Çekirdek",
                "DNA",
                "Kloroplast",
                "Hücre Duvarı",
                "Bitki ve Hayvan Hücresi"
              ],
              flashcards: [
                {
                  id: "fc_fen_u3_1",
                  front: "Hücrenin üç temel kısmı nelerdir?",
                  back: "1. Hücre Zarı (seçici geçirgen dış örtü), 2. Sitoplazma (organelleri barındıran sıvı), 3. Çekirdek (yönetim merkezi).",
                  tip: "Yumurta modeli: Kabuk zarı, akı sitoplazmayı, sarısı çekirdeği temsil eder.",
                  example: "DNA çekirdeğin içinde bulunur."
                },
                {
                  id: "fc_fen_u3_2",
                  front: "Bitki hücresinde bulunup hayvan hücresinde BULUNMAYAN yapılar nelerdir?",
                  back: "1. Hücre Duvarı (hücre çeperi - sert ve koruyucu), 2. Kloroplast (fotosentez yaparak besin ve oksijen üretir).",
                  tip: "Bitkilerin yeşil olmasını kloroplast sağlar.",
                  example: "Köşeli şekil bitki hücresine, yuvarlak şekil hayvan hücresine aittir."
                },
                {
                  id: "fc_fen_u3_3",
                  front: "Hücre zarının 'seçici geçirgen' olması ne demektir?",
                  back: "Her maddenin hücreye rastgele girmesine izin vermez; gerekli besin ve oksijeni içeri alır, atıkları dışarı atar, zararlı maddeleri engeller.",
                  tip: "Okulun güvenlik kapısı gibidir.",
                  example: "Su ve glikoz geçer, büyük ve zararlı moleküller geçemez."
                }
              ],
              matching: [
                {
                  id: "m_f3_1",
                  left: "Çekirdek",
                  right: "Hücrenin yönetim merkezi ve DNA taşıyıcısı"
                },
                {
                  id: "m_f3_2",
                  left: "Kloroplast",
                  right: "Bitkilerde fotosentez ile besin ve oksijen üreten organel"
                },
                {
                  id: "m_f3_3",
                  left: "Hücre Duvarı",
                  right: "Sadece bitki hücrelerinde bulunan sert koruyucu dış katman"
                },
                {
                  id: "m_f3_4",
                  left: "Mitokondri",
                  right: "Hücrenin enerji (ATP) santrali olan organel"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f3_1",
                  question: "Hayvan hücreleri köşeli bir şekle sahiptir.",
                  answer: false,
                  explanation: "Hayvan hücreleri genellikle yuvarlaktır; bitki hücreleri köşeli bir şekle sahiptir."
                },
                {
                  id: "tf_f3_2",
                  question: "Hücre zarı canlı, esnek ve seçici geçirgendir.",
                  answer: true,
                  explanation: "Hücre zarı canlıdır ve maddeleri seçerek içeri alır."
                },
                {
                  id: "tf_f3_3",
                  question: "Kloroplast hem bitki hem de hayvan hücrelerinde ortak bulunur.",
                  answer: false,
                  explanation: "Kloroplast sadece fotosentez yapan bitki hücrelerinde ve bazı tek hücrelilerde bulunur, hayvanlarda bulunmaz."
                },
                {
                  id: "tf_f3_4",
                  question: "Kalıtsal bilgilerimizi taşıyan DNA çekirdeğin içinde yer alır.",
                  answer: true,
                  explanation: "Çekirdek hücrenin genetik bilgi merkezidir."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f3_1",
                  sentence: "Hücrenin yönetim ve kontrol merkezi ___tir.",
                  blank: "çekirdek",
                  options: ["çekirdek", "mitokondri", "zar", "koful"],
                  tip: "DNA'yı barındırır."
                },
                {
                  id: "fb_f3_2",
                  sentence: "Bitki hücrelerine yeşil rengini veren ve besin üreten organel ___tır.",
                  blank: "kloroplast",
                  options: ["kloroplast", "ribozom", "lizozom", "çekirdek"],
                  tip: "Fotosentez yapar."
                },
                {
                  id: "fb_f3_3",
                  sentence: "Bitki hücresinde hücre zarının dışında sert ve cansız bir hücre ___ bulunur.",
                  blank: "duvarı",
                  options: ["duvarı", "sıvısı", "kapısı", "ağı"],
                  tip: "Hücre çeperi olarak da bilinir."
                },
                {
                  id: "fb_f3_4",
                  sentence: "Hücre kavramını mantar kesitini inceleyerek ilk kez kullanan bilim insanı Robert ___'tur.",
                  blank: "Hooke",
                  options: ["Hooke", "Newton", "Pasteur", "Darwin"],
                  tip: "Mikroskop kaşifi."
                }
              ],
              quiz: [
                {
                  id: "qz_f3_1",
                  question: "Mikroskop altında bir hücreyi inceleyen Emre, hücrenin köşeli yapıda olduğunu ve yeşil renkli kloroplastlar içerdiğini fark ediyor. Emre hangi hücreyi inceliyor olabilir?",
                  options: [
                    "Soğan zarı veya yaprak hücresi",
                    "İnsan ağız içi epitel hücresi",
                    "Kurbağa kan hücresi",
                    "Koyun kas hücresi"
                  ],
                  answer: 0,
                  explanation: "Köşeli şekil ve kloroplast organeli sadece bitki hücrelerinde (yaprak, soğan vb.) bulunur."
                },
                {
                  id: "qz_f3_2",
                  question: "Aşağıdakilerden hangisi hücre zarının görevlerinden biri DEĞİLDİR?",
                  options: [
                    "Hücreyi dış etkenlerden korumak",
                    "Hücreye şekil vermek",
                    "Madde giriş çıkışını seçici geçirgen olarak denetlemek",
                    "Fotosentez yaparak oksijen üretmek"
                  ],
                  answer: 3,
                  explanation: "Fotosentez yaparak oksijen ve besin üretmek kloroplast organelinin görevidir; hücre zarının görevi değildir."
                },
                {
                  id: "qz_f3_3",
                  question: "Bir fabrika modeli düşünülürse hücredeki organellerden 'enerji santrali' görevi yapan organel hangisidir?",
                  options: ["Mitokondri", "Koful", "Ribozom", "Hücre Duvarı"],
                  answer: 0,
                  explanation: "Mitokondri hücrede besin ve oksijeni yakarak enerji (ATP) üreten santraldir."
                },
                {
                  id: "qz_f3_4",
                  question: "Bitki ve hayvan hücreleri karşılaştırıldığında aşağıdakilerden hangisi YANLIŞTIR?",
                  options: [
                    "Bitki hücresi köşeli, hayvan hücresi yuvarlaktır",
                    "Bitkilerde hücre duvarı vardır, hayvanlarda yoktur",
                    "Hayvan hücrelerinde kofullar büyük ve az sayıdadır",
                    "Bitki hücrelerinde kloroplast bulunurken hayvan hücrelerinde bulunmaz"
                  ],
                  answer: 2,
                  explanation: "Hayvan hücrelerinde kofullar KÜÇÜK ve ÇOK sayıdadır; bitkilerde ise BÜYÜK ve AZ sayıdadır."
                }
              ]
            },
            {
              id: "fen_u3_t2",
              title: "Hücreden Organizmaya (Doku, Organ, Sistem)",
              kazanimCode: "FB.5.3.2",
              kazanimDesc: "Hücreden dokuya, dokudan organa, organdan sisteme ve organizmaya uzanan basamaklı yapıyı açıklar.",
              summary: `

• **Birlikten Kuvvet Doğar (Hiyerarşi Sıralaması):**
  - **Hücre ➔ Doku ➔ Organ ➔ Sistem ➔ Organizma (Canlı)**
• **Tanımlar:**
  1. **Hücre:** Canlının en küçük yapı taşıdır (Örn: Kemik hücresi, Kas hücresi, Sinir hücresi).
  2. **Doku:** Benzer yapı ve görevdeki hücrelerin bir araya gelmesiyle oluşur (Örn: Kas dokusu, Kemik dokusu, Kan dokusu).
  3. **Organ:** Farklı dokuların belirli bir görevi yapmak için birleşmesiyle oluşur (Örn: Mide, Kalp, Akciğer, Göz).
  4. **Sistem:** Birlikte uyum içinde çalışan organlar topluluğudur (Örn: Sindirim sistemi, Dolaşım sistemi, Destek ve hareket sistemi).
  5. **Organizma:** Sistemlerin birleşerek oluşturduğu bağımsız yaşayabilen canlı varlıktır (Örn: İnsan, Kedi, Çam ağacı).
• **Analoji (Benzetim):**
  - Tuğla = Hücre
  - Duvar = Doku
  - Oda = Organ
  - Ev / Apartman = Sistem
  - Şehir = Organizma
      
              `,
              keyConcepts: [
                "Hücre",
                "Doku",
                "Organ",
                "Sistem",
                "Organizma",
                "Hiyerarşi",
                "Basitten Karmaşığa"
              ],
              flashcards: [
                {
                  id: "fc_fen_u3_4",
                  front: "Hücreden organizmaya hiyerarşik sıralama basitten karmaşığa nasıldır?",
                  back: "Hücre ➔ Doku ➔ Organ ➔ Sistem ➔ Organizma",
                  tip: "Baş harfleri: H - D - O - S - O",
                  example: "Kas hücresi ➔ Kas dokusu ➔ Mide (organ) ➔ Sindirim sistemi ➔ İnsan (organizma)"
                },
                {
                  id: "fc_fen_u3_5",
                  front: "Tuğla-duvar-oda benzetmesinde organ neye karşılık gelir?",
                  back: "ODA'ya karşılık gelir. (Tuğla=Hücre, Duvar=Doku, Oda=Organ, Apartman=Sistem, Site=Organizma).",
                  tip: "Farklı duvarlar birleşip bir odayı oluşturur.",
                  example: "Kalp dokulardan oluşmuş bir organdır."
                },
                {
                  id: "fc_fen_u3_6",
                  front: "Doku nedir ve nasıl oluşur?",
                  back: "Aynı görevi yapmak üzere özelleşmiş benzer hücre topluluğudur.",
                  tip: "Örnek: Kemik hücreleri kemik dokusunu oluşturur.",
                  example: "Kas dokusu kasılıp gevşeme işini yapar."
                }
              ],
              matching: [
                {
                  id: "m_f3_5",
                  left: "Kemik Hücresi",
                  right: "En küçük yapı birimi (Hücre)"
                },
                {
                  id: "m_f3_6",
                  left: "Mide",
                  right: "Farklı dokulardan oluşan Organ"
                },
                {
                  id: "m_f3_7",
                  left: "Dolaşım Sistemi",
                  right: "Kalp ve damarların oluşturduğu Sistem"
                },
                {
                  id: "m_f3_8",
                  left: "İnsan / Ağaç",
                  right: "Tüm sistemlerin birleştiği Organizma"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f3_5",
                  question: "Organlar birleşerek dokuları meydana getirir.",
                  answer: false,
                  explanation: "Tam tersi: Dokular birleşerek organları meydana getirir."
                },
                {
                  id: "tf_f3_6",
                  question: "Hücre, canlıların en küçük canlılık birimidir.",
                  answer: true,
                  explanation: "Hücre temel yaşam birimidir."
                },
                {
                  id: "tf_f3_7",
                  question: "Kalp bir sistemdir, dolaşım ise bir organdır.",
                  answer: false,
                  explanation: "Kalp bir ORGANDIR; kalp ve damarların birlikte oluşturduğu yapı ise DOLAŞIM SİSTEMİDİR."
                },
                {
                  id: "tf_f3_8",
                  question: "Canlıyı oluşturan tüm sistemler birbiriyle uyum içinde çalışır.",
                  answer: true,
                  explanation: "Organizma ancak sistemlerin ahenkli çalışmasıyla hayatta kalır."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f3_5",
                  sentence: "Benzer yapı ve görevdeki hücrelerin oluşturduğu topluluğa ___ adı verilir.",
                  blank: "doku",
                  options: ["doku", "organ", "sistem", "molekül"],
                  tip: "Örn: Kas dokusu."
                },
                {
                  id: "fb_f3_6",
                  sentence: "Farklı dokuların bir araya gelmesiyle oluşan yapıya ___ (kalp, böbrek vb.) denir.",
                  blank: "organ",
                  options: ["organ", "hücre", "doku", "organizma"],
                  tip: "Örn: Akciğer."
                },
                {
                  id: "fb_f3_7",
                  sentence: "Hücreden organizmaya basitten karmaşığa sıralamada 4. basamak ___dir.",
                  blank: "sistem",
                  options: ["sistem", "organ", "doku", "hücre"],
                  tip: "Organlar topluluğu."
                },
                {
                  id: "fb_f3_8",
                  sentence: "Tüm sistemlerin uyumlu birlikteliğiyle bağımsız yaşayan canlıya ___ denir.",
                  blank: "organizma",
                  options: ["organizma", "doku", "ekosistem", "popülasyon"],
                  tip: "Canlının tamamı."
                }
              ],
              quiz: [
                {
                  id: "qz_f3_5",
                  question: "'Hücre ➔ X ➔ Organ ➔ Y ➔ Organizma' şemasında X ve Y yerine sırasıyla hangi kavramlar gelmelidir?",
                  options: ["Doku - Sistem", "Sistem - Doku", "Çekirdek - Organel", "Molekül - Doku"],
                  answer: 0,
                  explanation: "Doğru basamak: Hücre ➔ DOKU ➔ Organ ➔ SİSTEM ➔ Organizma şeklindedir."
                },
                {
                  id: "qz_f3_6",
                  question: "Aşağıdaki eşleştirmelerden hangisi 'Organ' düzeyindedir?",
                  options: ["Akyuvar", "Sinir dokusu", "Göz", "Sindirim sistemi"],
                  answer: 2,
                  explanation: "Göz bir organdır. Akyuvar hücre, sinir dokusu doku, sindirim sistemi ise sistemdir."
                },
                {
                  id: "qz_f3_7",
                  question: "Bir inşaattaki tuğlaları hücreye benzetirsek, tamamlanmış ve içinde insanların yaşadığı binanın tamamı neye karşılık gelir?",
                  options: ["Dokuya", "Organa", "Sisteme", "Organizmaya"],
                  answer: 3,
                  explanation: "Tuğla hücre ise bütünleşmiş yaşayan bina canlıya (organizmaya) karşılık gelir."
                },
                {
                  id: "qz_f3_8",
                  question: "Aşağıdakilerden hangisi tek başına bir 'Sistem' örneğidir?",
                  options: ["Kalp", "Mide", "Solunum sistemi", "Kan"],
                  answer: 2,
                  explanation: "Solunum sistemi burun, yutak, soluk borusu ve akciğer gibi organların oluşturduğu bir sistemdir."
                }
              ]
            },
            {
              id: "fen_u3_t3",
              title: "Destek ve Hareket Sistemi (Kemik, Eklem, Kas)",
              kazanimCode: "FB.5.3.3",
              kazanimDesc: "Destek ve hareket sistemini oluşturan kemik, eklem ve kasların yapı ve çeşitlerini inceler; sağlığını koruma yollarını açıklar.",
              summary: `

• **Destek ve Hareket Sisteminin Görevleri:** Vücuda şekil verir, dik durmasını sağlar, iç organları (beyin, kalp, akciğer) korur, kaslarla birlikte hareket etmemizi sağlar, kalsiyum depolar ve kan hücresi üretir.
• **1. İskelet Sistemi ve Kemik Çeşitleri:**
  - **Uzun Kemikler:** Boyu eninden fazla olan kemiklerdir (Kol ve bacak kemikleri: uyluk, kaval, pazu).
  - **Kısa Kemikler:** Boyu ve eni yaklaşık eşit olan kemiklerdir (El ve ayak bilek kemikleri).
  - **Yassı Kemikler:** Yassılaşmış, geniş yüzeyli kemiklerdir (Kafatası, kaburga, kürek ve leğen kemikleri).
  - **Kıkırdak:** Kemik uçlarında sürtünmeyi önleyen esnek dokudur (Burun ucu, kulak kepçesi).
• **2. Eklemler (Kemiklerin Birleşme Noktaları):**
  - **Oynar Eklem:** Çok hareketli eklemlerdir (Kol, bacak, omuz, diz).
  - **Yarı Oynar Eklem:** Hareketi sınırlı eklemlerdir (Omurgamızdaki omurlar arası eklemler).
  - **Oynamaz Eklem:** Kemikler testere dişi gibi birbirine kilitlenmiştir, hareket etmez (Kafatası ve leğen kemiği eklemleri).
• **3. Kaslar (Vücudun Motorları):**
  - **Çizgili Kas (İskelet Kası):** Kemiklerimize bağlıdır. İsteğimizle çalışır. Hızlı kasılır, çabuk yorulur (Kol ve bacak kasları). Çiftler halinde zıt (biri kasılırken diğeri gevşer) çalışır.
  - **Düz Kas:** İç organlarımızda bulunur (Mide, bağırsak, damar). İsteğimiz dışında istemsiz çalışır. Yavaş kasılır, yorulmaz.
  - **Kalp Kası:** Yapısı çizgili kasa benzer (hızlı ve güçlü), çalışması düz kasa benzer (istemsiz ve yorulmaz). Hayat boyu durmaksızın atar.
      
              `,
              keyConcepts: [
                "Kemik Çeşitleri",
                "Uzun-Kısa-Yassı",
                "Oynar Eklem",
                "Oynamaz Eklem",
                "Çizgili Kas",
                "Düz Kas",
                "Kalp Kası"
              ],
              flashcards: [
                {
                  id: "fc_fen_u3_7",
                  front: "Kas çeşitleri nelerdir ve nasıl çalışırlar?",
                  back: "1. Çizgili Kas: İsteğimizle, hızlı çalışır, çabuk yorulur (kol, bacak). 2. Düz Kas: İstemsiz, yavaş çalışır, yorulmaz (mide, bağırsak). 3. Kalp Kası: İstemsiz, ritmik ve yorulmadan çalışır.",
                  tip: "Kalp kası özeldir: Görünüşü çizgili, çalışması düz kas gibidir.",
                  example: "Koşarken bacaklarımızdaki çizgili kaslar yorulur."
                },
                {
                  id: "fc_fen_u3_8",
                  front: "Kemikler şekillerine göre kaça ayrılır?",
                  back: "3'e ayrılır: Uzun kemikler (uyluk, pazu), Kısa kemikler (el-ayak bilekleri), Yassı kemikler (kafatası, kaburga).",
                  tip: "Vücudumuzdaki en uzun kemik bacağımızdaki UYLUK kemiğidir.",
                  example: "Kafatası yassı kemiktir ve beynimizi korur."
                },
                {
                  id: "fc_fen_u3_9",
                  front: "Eklemler hareket kabiliyetlerine göre nasıl sınıflandırılır?",
                  back: "1. Oynar eklemler (omuz, diz), 2. Yarı oynar eklemler (omurga), 3. Oynamaz eklemler (kafatası).",
                  tip: "Kafatasındaki kemikler testere dişi gibi birbirine kenetlenmiştir.",
                  example: "Diz eklemi oynar eklemdir ve geniş açıyla bükülebilir."
                }
              ],
              matching: [
                {
                  id: "m_f3_9",
                  left: "Kafatası Eklemi",
                  right: "Hareket etmeyen oynamaz eklem"
                },
                {
                  id: "m_f3_10",
                  left: "Uyluk Kemiği",
                  right: "Vücudumuzun en uzun ve güçlü kemiği"
                },
                {
                  id: "m_f3_11",
                  left: "Mide Kası",
                  right: "İstemsiz ve yorulmadan çalışan düz kas"
                },
                {
                  id: "m_f3_12",
                  left: "Kol Pazu Kası",
                  right: "İsteğimizle çalışan, çabuk yorulan çizgili kas"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f3_9",
                  question: "Kafatası kemikleri arasında oynar eklemler bulunur.",
                  answer: false,
                  explanation: "Kafatası kemikleri arasında beyni korumak için OYNAMAZ eklemler bulunur."
                },
                {
                  id: "tf_f3_10",
                  question: "Kalp kası isteğimiz dışında ömür boyu ritmik çalışır ve yorulmaz.",
                  answer: true,
                  explanation: "Kalp kası istemsiz çalışan benzersiz bir kastır."
                },
                {
                  id: "tf_f3_11",
                  question: "El ve ayak bileklerimizdeki kemikler uzun kemiklere örnektir.",
                  answer: false,
                  explanation: "Bilek kemikleri KISA kemiklere örnektir."
                },
                {
                  id: "tf_f3_12",
                  question: "Kolumuzu bükerken öndeki kas kasılırken arkadaki kas gevşer.",
                  answer: true,
                  explanation: "İskelet kasları birbirine zıt (biri kasılırken diğeri gevşeyen) çiftler halinde çalışır."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f3_9",
                  sentence: "Vücudumuzun en uzun kemiği bacakta bulunan ___ kemiğidir.",
                  blank: "uyluk",
                  options: ["uyluk", "omurga", "kaburga", "pazu"],
                  tip: "Üst bacak kemiği."
                },
                {
                  id: "fb_f3_10",
                  sentence: "Kemiklerin birbirine bağlandığı hareketli veya hareketsiz noktalara ___ denir.",
                  blank: "eklem",
                  options: ["eklem", "kas", "kıkırdak", "doku"],
                  tip: "Diz ve dirsek gibi."
                },
                {
                  id: "fb_f3_11",
                  sentence: "İç organlarımızda (mide, damarlar vb.) bulunan ve istemsiz çalışan kaslara ___ kas denir.",
                  blank: "düz",
                  options: ["düz", "çizgili", "kalp", "iskelet"],
                  tip: "Beyazımsı düz lifler."
                },
                {
                  id: "fb_f3_12",
                  sentence: "Kemiklerin uçlarında aşınmayı önleyen esnek kıkırdak doku ve ___ sıvısı bulunur.",
                  blank: "eklem",
                  options: ["eklem", "kan", "hücre", "mide"],
                  tip: "Menteşe yağı gibidir."
                }
              ],
              quiz: [
                {
                  id: "qz_f3_9",
                  question: "Aşağıdaki kemik ve çeşit eşleştirmelerinden hangisi YANLIŞTIR?",
                  options: ["Uyluk kemiği - Uzun kemik", "Kafatası kemiği - Yassı kemik", "El bilek kemiği - Kısa kemik", "Kaburga kemiği - Uzun kemik"],
                  answer: 3,
                  explanation: "Kaburga kemikleri göğüs kafesinde iç organları koruyan YASSI kemikler grubundadır."
                },
                {
                  id: "qz_f3_10",
                  question: "Aşağıdaki kaslardan hangisi isteğimiz dışında (istemsiz) çalışır ve çabuk yorulmaz?",
                  options: ["Mide kası", "Bacak çizgili kası", "Kol pazu kası", "Göz kapağı kası"],
                  answer: 0,
                  explanation: "Mide kası bir düz kastır; istemsiz çalışır ve yorulmaz."
                },
                {
                  id: "qz_f3_11",
                  question: "Omurgamızda bulunan eklemler hareket yeteneklerine göre hangi gruba girer?",
                  options: ["Oynar eklem", "Yarı oynar eklem", "Oynamaz eklem", "Kıkırdaksız eklem"],
                  answer: 1,
                  explanation: "Omurlar arasındaki eklemler sınırlı esneme ve eğilme sağlayan yarı oynar eklemlerdir."
                },
                {
                  id: "qz_f3_12",
                  question: "İskelet sistemimizin sağlığını korumak için aşağıdakilerden hangisini yapmak YANLIŞTIR?",
                  options: [
                    "Kalsiyum ve D vitamini açısından zengin süt ve peynir tüketmek",
                    "Yere eğilirken belden değil dizleri bükerek eğilmek",
                    "Sırt çantasını tek omuzda çok ağır yüklerle taşımak",
                    "Düzenli spor ve egzersiz yapmak"
                  ],
                  answer: 2,
                  explanation: "Ağır çantaları tek omuzda taşımak omurga eğriliğine (skolyoz) ve duruş bozukluğuna yol açar."
                }
              ]
            }
          ]
        },
        {
          id: "fen_u4",
          unitNumber: 4,
          title: "4. Ünite: Işığın Dünyası",
          description: "Işığın doğrusal yayılması, ışık ışınları, maddelerin ışık geçirgenliği ve tam gölge oluşumu",
          topics: [
            {
              id: "fen_u4_t1",
              title: "Işığın Yayılması (Doğrusal Yayılma)",
              kazanimCode: "FB.5.4.1",
              kazanimDesc: "Işığın her yönde ve doğrusal yollarla yayıldığını açıklar; ışık ışını çizimleriyle modeller.",
              summary: `

• **Işık Nedir?** Görmemizi sağlayan bir enerji türüdür. Doğal (Güneş, ateş böceği, yıldızlar) ve yapay (ampul, el feneri, mum) ışık kaynakları vardır.
• **Işığın Yayılma Kuralı:** Işık saydam bir ortamda veya boşlukta **HER YÖNE** ve **DOĞRUSAL** (düz bir çizgi boyunca) yayılır!
• **Işık Işını (Işın):** Işığın izlediği yolu göstermek için başlangıç noktası ışık kaynağında olan ve ucunda ok işareti bulunan düz çizgiler çizilir. Buna **ışık ışını** denir.
• **Doğrusal Yayılmanın İspatları:**
  - Kıvrık bir hortumun veya bükülmüş pipetin arkasından bakıldığında mum alevi **görünmez**, sadece düz borudan bakıldığında görünür.
  - Bulutların arasından veya ormanda ağaç yapraklarının arasından süzülen güneş ışınlarının düz hüzmeler halinde inmesi.
  - El fenerinin veya araba farlarının gece karanlığında düz çizgi şeklinde önümüzü aydınlatması.
  - Gölge oluşumu ışığın doğrusal yayıldığının en kesin kanıtıdır.
      
              `,
              keyConcepts: ["Işık Enerjisi", "Doğrusal Yayılma", "Işık Işını", "Her Yöne Yayılma", "Düz Boru Deneyi", "Işık Kaynağı"],
              flashcards: [
                {
                  id: "fc_fen_u4_1",
                  front: "Işık nasıl yayılır?",
                  back: "Işık saydam ortamlarda HER YÖNE ve DOĞRUSAL (düz çizgiler boyunca) yayılır.",
                  tip: "Kıvrık borudan baktığımızda arkadaki mumu göremeyiz çünkü ışık viraj alamaz!",
                  example: "Araba farının gece düz çizgi halinde yolu aydınlatması."
                },
                {
                  id: "fc_fen_u4_2",
                  front: "Işık ışını çizimle nasıl gösterilir?",
                  back: "Başlangıç noktası kaynaktan çıkan, düz bir çizgi ve yönünü belirten bir ok işaretiyle (➔) gösterilir.",
                  tip: "Matematikteki ışın kavramıyla aynıdır.",
                  example: "Güneş'ten uzaya doğru çizilen oklu düz çizgiler."
                },
                {
                  id: "fc_fen_u4_3",
                  front: "Işığın doğrusal yayıldığını gösteren günlük yaşam örnekleri nelerdir?",
                  back: "1. Bulutların arasından süzülen güneş ışık hüzmeleri, 2. Sinema projeksiyon cihazından perdeye uzanan ışık demeti, 3. Gölge oluşumu.",
                  tip: "Tozlu bir odada pencereden giren ışık huzmesi cetvel gibi düzdür.",
                  example: "Deniz fenerinin dönen ışık demetleri."
                }
              ],
              matching: [
                {
                  id: "m_f4_1",
                  left: "Doğrusal Yayılma",
                  right: "Işığın viraj almadan dümdüz bir hat boyunca ilerlemesi"
                },
                {
                  id: "m_f4_2",
                  left: "Işık Işını",
                  right: "Işığın yolunu modelleyen oklu düz çizgi"
                },
                {
                  id: "m_f4_3",
                  left: "Güneş",
                  right: "Dünya'mızın en büyük doğal ışık kaynağı"
                },
                {
                  id: "m_f4_4",
                  left: "Kıvrık Boru",
                  right: "Işığın doğrusal yayıldığı için içinden arkasının görünmediği araç"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f4_1",
                  question: "Işık bir enerji türüdür.",
                  answer: true,
                  explanation: "Işık bir enerjidir ve diğer enerjilere (ısı, elektrik) dönüşebilir."
                },
                {
                  id: "tf_f4_2",
                  question: "Işık dalgaları engellerin etrafından dolanarak kıvrık yollar çizebilir.",
                  answer: false,
                  explanation: "Işık saydam ortamda sadece düz ve doğrusal yayılır, viraj alamaz."
                },
                {
                  id: "tf_f4_3",
                  question: "Mum alevi sadece yukarı doğru ışık verir.",
                  answer: false,
                  explanation: "Işık kaynağından çıkan ışınlar her yöne (küresel olarak) yayılır."
                },
                {
                  id: "tf_f4_4",
                  question: "Tam gölge oluşumu ışığın doğrusal yayıldığını kanıtlar.",
                  answer: true,
                  explanation: "Işık bükülebilseydi engelin arkasına geçer ve gölge oluşmazdı."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f4_1",
                  sentence: "Işık saydam ortamlarda ___ yollarla ve her yöne doğru yayılır.",
                  blank: "doğrusal",
                  options: ["doğrusal", "dalgalı", "dairesel", "kıvrık"],
                  tip: "Dümdüz çizgi halinde."
                },
                {
                  id: "fb_f4_2",
                  sentence: "Işığın yolunu göstermek için çizilen oklu düz çizgiye ışık ___ denir.",
                  blank: "ışını",
                  options: ["ışını", "noktası", "küresi", "demeti"],
                  tip: "Işığın oku."
                },
                {
                  id: "fb_f4_3",
                  sentence: "U şeklinde kıvrılmış bir borudan bakıldığında mum alevi ___.",
                  blank: "görünmez",
                  options: ["görünmez", "daha net görünür", "büyür", "titreşir"],
                  tip: "Işık bükülemez."
                },
                {
                  id: "fb_f4_4",
                  sentence: "Güneş ve ateş böceği ___ ışık kaynaklarına örnektir.",
                  blank: "doğal",
                  options: ["doğal", "yapay", "soğuk", "geçici"],
                  tip: "İnsan yapımı olmayan."
                }
              ],
              quiz: [
                {
                  id: "qz_f4_1",
                  question: "Can, düz bir plastik pipetle baktığında mumu görebiliyorken, pipeti ortasından büktüğünde mumu göremiyor. Bu deney Can'a hangi bilimsel gerçeği gösterir?",
                  options: [
                    "Işığın sadece geceleri yayıldığını",
                    "Işığın doğrusal yayıldığını ve engellerin arkasına bükülemediğini",
                    "Pipetin ışığı soğurduğunu",
                    "Mum alevinin enerjisinin bittiğini"
                  ],
                  answer: 1,
                  explanation: "Bükülen pipetten ışığın geçememesi, ışığın kıvrılmayıp sadece doğrusal yayıldığını kanıtlar."
                },
                {
                  id: "qz_f4_2",
                  question: "Aşağıdakilerden hangisi ışığın doğrusal yayıldığının bir kanıtı DEĞİLDİR?",
                  options: [
                    "Güneşli bir günde arkamızda gölgemizin oluşması",
                    "Tozlu sinema salonunda projeksiyon ışık demetinin düz görünmesi",
                    "Güneş battıktan sonra havanın soğuması",
                    "Araba farlarından çıkan ışığın düz bir hat şeklinde yolu aydınlatması"
                  ],
                  answer: 2,
                  explanation: "Havanın soğuması Güneş enerjisinin gelmemesiyle ilgilidir; ışığın yayılma geometrisinin doğrusal olmasıyla ilgili değildir."
                },
                {
                  id: "qz_f4_3",
                  question: "Bir ışık kaynağından çıkan ışığın gösterimi ile ilgili hangisi doğrudur?",
                  options: [
                    "Dalgalı eğriler şeklinde çizilir",
                    "Kaynaktan çıkan ve yönü belirten oklu düz çizgilerle çizilir",
                    "Sadece tek bir yöne doğru ok çizilir",
                    "Kesikli daireler şeklinde gösterilir"
                  ],
                  answer: 1,
                  explanation: "Işık ışınları doğrusal çizgiler ve yayılma yönünü gösteren oklarla gösterilir."
                },
                {
                  id: "qz_f4_4",
                  question: "Aşağıdakilerden hangisi bir 'yapay' ışık kaynağıdır?",
                  options: ["Yıldızlar", "Şimşek", "El feneri", "Güneş"],
                  answer: 2,
                  explanation: "El feneri insanlar tarafından üretilmiş yapay bir ışık kaynağıdır."
                }
              ]
            },
            {
              id: "fen_u4_t2",
              title: "Işığın Maddeyle Etkileşimi (Saydam, Yarı Saydam, Opak)",
              kazanimCode: "FB.5.4.2",
              kazanimDesc: "Maddeleri ışık geçirgenliklerine göre saydam, yarı saydam ve opak (saydam olmayan) olarak sınıflandırır.",
              summary: `

• **Maddelerin Işık Geçirgenliği:** Maddeler üzerlerine düşen ışığı geçirme miktarlarına göre 3 gruba ayrılır:
• **1. Saydam Maddeler:**
  - Işığı tamamen veya büyük oranda geçiren maddelerdir.
  - Arkalarındaki cisimler **net** olarak görünür.
  - Örnekler: Cam, su, hava, şeffaf poşet, gözlük camı.
• **2. Yarı Saydam Maddeler:**
  - Işığın yalnızca bir kısmını geçiren maddelerdir.
  - Arkalarındaki cisimler **bulanık** görünür.
  - Örnekler: Buzlu cam, yağlı kâğıt, sis, tül perde, ince kumaş, naylon dosya.
• **3. Opak (Saydam Olmayan) Maddeler:**
  - Işığı hiç geçirmeyen maddelerdir.
  - Arkalarındaki cisimler **kesinlikle görünmez**.
  - Arkalarında karanlık bir bölge olan **tam gölge** oluşur!
  - Örnekler: Tahta, taş, demir, karton kutu, duvar, kitap, insan vücudu.
• **Önemli Not:** Bir maddenin kalınlığı artarsa geçirgenliği azalabilir. Örneğin ince bir tabaka su saydamken okyanusun derinlikleri ışıksız ve opaktır.
      
              `,
              keyConcepts: [
                "Saydam Madde",
                "Yarı Saydam Madde",
                "Opak Madde",
                "Net Görüntü",
                "Bulanık Görüntü",
                "Cam",
                "Buzlu Cam",
                "Tahta"
              ],
              flashcards: [
                {
                  id: "fc_fen_u4_4",
                  front: "Saydam, yarı saydam ve opak maddelerin temel farkı nedir?",
                  back: "Saydam: Işığı tam geçirir (cam), Yarı saydam: Işığı kısmen geçirir, bulanık gösterir (buzlu cam), Opak: Işığı hiç geçirmez, arkası görünmez (tahta).",
                  tip: "Evimizdeki pencere camı saydam, banyo camı yarı saydam, duvar opaktır.",
                  example: "Kitap opak bir maddedir, ışığı engeller."
                },
                {
                  id: "fc_fen_u4_5",
                  front: "Yağlı kâğıt ve tül perde hangi madde grubuna girer?",
                  back: "YARI SAYDAM madde grubuna girer. Işığın bir kısmını geçirip nesneleri bulanık gösterirler.",
                  tip: "Tül perdenin arkasındaki siluetler net seçilemez.",
                  example: "Buzlu cam ve sisli hava da yarı saydamdır."
                },
                {
                  id: "fc_fen_u4_6",
                  front: "Gölge oluşabilmesi için cismin hangi özellikte olması gerekir?",
                  back: "Cismin OPAK (saydam olmayan) olması gerekir. Işığı geçirmeyen maddelerin arkasında tam gölge oluşur.",
                  tip: "Saydam camın arkasında neredeyse hiç gölge oluşmaz.",
                  example: "Vücudumuz opak olduğu için arkamızda gölgemiz oluşur."
                }
              ],
              matching: [
                {
                  id: "m_f4_5",
                  left: "Pencere Camı",
                  right: "Işığı tam geçiren Saydam madde"
                },
                {
                  id: "m_f4_6",
                  left: "Yağlı Kâğıt & Buzlu Cam",
                  right: "Işığı kısmen geçiren Yarı Saydam madde"
                },
                {
                  id: "m_f4_7",
                  left: "Karton & Duvar",
                  right: "Işığı hiç geçirmeyen Opak madde"
                },
                {
                  id: "m_f4_8",
                  left: "Hava & Temiz Su",
                  right: "Işığı geçiren doğal Saydam ortamlar"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f4_5",
                  question: "Opak maddelerin arkasında bulunan cisimler net olarak görünür.",
                  answer: false,
                  explanation: "Opak maddeler ışığı hiç geçirmediği için arkasındaki cisimler hiç görünmez."
                },
                {
                  id: "tf_f4_6",
                  question: "Buzlu cam ve sis yarı saydam maddelere örnektir.",
                  answer: true,
                  explanation: "İkisi de ışığı kısmen geçirir ve arkasındaki nesneleri bulanık gösterir."
                },
                {
                  id: "tf_f4_7",
                  question: "Hava ve temiz su saydam ortamlardır.",
                  answer: true,
                  explanation: "Işığı geçirir ve nesnelerin net görülmesini sağlarlar."
                },
                {
                  id: "tf_f4_8",
                  question: "Işık geçirgenliği hiçbir koşulda maddenin kalınlığına bağlı değildir.",
                  answer: false,
                  explanation: "Kalınlık arttıkça ışık geçirgenliği azalabilir; örneğin kâğıt katlandıkça ışığı daha az geçirir."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f4_5",
                  sentence: "Işığı tamamen geçiren ve arkasını net gösteren maddelere ___ madde denir.",
                  blank: "saydam",
                  options: ["saydam", "opak", "yarı saydam", "parlak"],
                  tip: "Örn: Cam."
                },
                {
                  id: "fb_f4_6",
                  sentence: "Işığı hiç geçirmeyen tahta ve metal gibi maddelere ___ (saydam olmayan) denir.",
                  blank: "opak",
                  options: ["opak", "saydam", "yarı saydam", "esnek"],
                  tip: "Gölge oluştururlar."
                },
                {
                  id: "fb_f4_7",
                  sentence: "Buzlu camın arkasındaki nesnelerin bulanık görünmesi onun ___ saydam olmasındandır.",
                  blank: "yarı",
                  options: ["yarı", "tam", "aşırı", "sıfır"],
                  tip: "Kısmi geçirgen."
                },
                {
                  id: "fb_f4_8",
                  sentence: "Güneşli havada güneş gözlüğü takmamız ışığın bir kısmını engelleyen ___ saydam filtre sayesindedir.",
                  blank: "yarı",
                  options: ["yarı", "opak", "katı", "renksiz"],
                  tip: "Koyu filtre."
                }
              ],
              quiz: [
                {
                  id: "qz_f4_5",
                  question: "Aşağıdaki malzemelerden hangisi 'Opak' madde grubuna girer?",
                  options: ["Şeffaf poşet", "Pencere camı", "Karton koli", "Buzlu cam"],
                  answer: 2,
                  explanation: "Karton koli ışığı hiç geçirmez ve opaktır. Şeffaf poşet ve cam saydam, buzlu cam yarı saydamdır."
                },
                {
                  id: "qz_f4_6",
                  question: "Banyoların pencerelerinde genellikle buzlu cam kullanılmasının temel amacı nedir?",
                  options: [
                    "Odayı tamamen karanlık yapmak",
                    "Işığın bir kısmını içeri alırken içerinin dışarıdan net görünmesini engellemek",
                    "Sıcaklığı dışarıya iletmemek",
                    "Pencerenin kırılmasını önlemek"
                  ],
                  answer: 1,
                  explanation: "Yarı saydam buzlu cam ışığı içeri alır ancak arkasını bulanıklaştırarak mahremiyet sağlar."
                },
                {
                  id: "qz_f4_7",
                  question: "Bir el fenerinin önüne sırasıyla temiz cam, yağlı kâğıt ve tahta blok konuyor. Duvarda oluşan aydınlık hangisinde EN FAZLADIR?",
                  options: ["Temiz cam", "Yağlı kâğıt", "Tahta blok", "Hepsinde aynıdır"],
                  answer: 0,
                  explanation: "Temiz cam saydam olduğu için ışığın neredeyse tamamını geçirir ve duvarda en yüksek aydınlığı oluşturur."
                },
                {
                  id: "qz_f4_8",
                  question: "Aşağıdakilerden hangisi yarı saydam bir ortamdır?",
                  options: ["Yoğun sis", "Alüminyum folyo", "Ayna", "Elmas"],
                  answer: 0,
                  explanation: "Yoğun sis ışığı kısmen dağıtıp geçirir ve görüşü bulanıklaştırır, bu yüzden yarı saydamdır."
                }
              ]
            },
            {
              id: "fen_u4_t3",
              title: "Tam Gölge Oluşumu ve Gölge Boyu",
              kazanimCode: "FB.5.4.3",
              kazanimDesc: "Tam gölgenin nasıl oluştuğunu açıklar; ışık kaynağı, opak cisim ve perde arasındaki mesafeleri değiştirerek gölge boyunu etkileyen değişkenleri belirler.",
              interactiveLab: {
                type: "light-shadow",
                title: "Işık ve Tam Gölge Boyu Labı"
              },
              summary: `

• **Tam Gölge Nasıl Oluşur?**
  - Noktasal bir ışık kaynağından çıkan ışınların önüne **opak (saydam olmayan)** bir cisim konulduğunda, ışık doğrusal yayıldığı için cismin arkasına geçemez.
  - Perdede veya duvarda ışık alamayan tamamen karanlık bir alan oluşur. Bu karanlık alana **tam gölge** denir.
• **Gölgenin Şekli:** Tam gölgenin şekli, ışığı engelleyen opak cismin şekline ve duruş açısına benzer (Topun gölgesi daire, kutunun gölgesi karedir).
• **Gölge Boyunu Büyütmek İçin (2 Yol Vardır):**
  1. Işık kaynağı opak cisme **YAKLAŞTIRILMALIDIR** (veya opak cisim ışık kaynağına yaklaştırılmalıdır).
  2. Perde (ekran) opak cisimden **UZAKLAŞTIRILMALIDIR**.
• **Gölge Boyunu Küçültmek İçin:**
  - Işık kaynağı cisimden uzaklaştırılmalı veya perde cisme yaklaştırılmalıdır.
• **Güneş ve Gün İçindeki Gölge Boyumuz:**
  - Sabah ve akşam saatlerinde Güneş ufka yakın (eğik açıyla) geldiği için gölgemiz **EN UZUN** olur.
  - Öğle vakti Güneş tam tepeden (en dik açıyla) geldiği için gölgemiz **EN KISA** olur.
      
              `,
              keyConcepts: [
                "Tam Gölge",
                "Opak Cisim",
                "Işık Kaynağı",
                "Perde",
                "Gölge Boyu",
                "Öğle Vakti",
                "Eğik Açı",
                "Hacivat Karagöz"
              ],
              flashcards: [
                {
                  id: "fc_fen_u4_7",
                  front: "Gölge boyunu büyütmek için ne yapabiliriz?",
                  back: "1. Işık kaynağını cisme yaklaştırabiliriz, ya da 2. Perdeyi cisimden uzaklaştırabiliriz.",
                  tip: "Işığa yaklaştıkça gölgen dev gibi büyür!",
                  example: "El fenerini eline yaklaştırırsan duvardaki el gölgesi büyür."
                },
                {
                  id: "fc_fen_u4_8",
                  front: "Günün hangi vaktinde gölgemiz en kısa, hangi vakitlerinde en uzundur?",
                  back: "Öğle vakti Güneş tepede olduğu için gölgemiz EN KISA, sabah ve akşamüstü Güneş eğik geldiği için EN UZUNDUR.",
                  tip: "Güneş saati bu prensiple çalışır.",
                  example: "Öğlen 12:00'de gölgen ayaklarının dibindedir."
                },
                {
                  id: "fc_fen_u4_9",
                  front: "Geleneksel Türk gölge oyunu Hacivat ve Karagöz gölgenin hangi özelliğinden yararlanır?",
                  back: "Işığın opak deriden yapılmış tasvirlere çarpıp arkadaki beyaz perdeye tam gölge düşürmesi prensibinden yararlanır.",
                  tip: "Perdeye 'hayal perdesi' denir.",
                  example: "Tasvir perdeye yaklaştıkça gölgesi küçülür ve netleşir."
                }
              ],
              matching: [
                {
                  id: "m_f4_9",
                  left: "Öğle Vakti",
                  right: "Güneş dik açıyla geldiği için gölgenin en kısa olduğu an"
                },
                {
                  id: "m_f4_10",
                  left: "Sabah / Akşamüstü",
                  right: "Güneş eğik geldiği için gölgenin en uzun olduğu an"
                },
                {
                  id: "m_f4_11",
                  left: "Feneri Cisme Yaklaştırmak",
                  right: "Perdedeki gölgenin büyümesine neden olan hareket"
                },
                {
                  id: "m_f4_12",
                  left: "Hacivat ve Karagöz",
                  right: "Gölge oluşumundan yararlanan geleneksel seyirlik oyunumuz"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f4_9",
                  question: "Işık kaynağı opak cisme yaklaştırıldığında perdedeki tam gölgenin boyu büyür.",
                  answer: true,
                  explanation: "Işık kaynağı cisme yaklaştıkça engellenen ışın açısı genişler ve gölge büyür."
                },
                {
                  id: "tf_f4_10",
                  question: "Saydam bir cam şişenin arkasında çok koyu ve net bir tam gölge oluşur.",
                  answer: false,
                  explanation: "Cam ışığı geçirdiği için arkasında tam gölge oluşmaz, çok silik bir iz kalır."
                },
                {
                  id: "tf_f4_11",
                  question: "Güneşli bir günde öğle vakti gölge boyumuz günün en uzun değerine ulaşır.",
                  answer: false,
                  explanation: "Öğle vakti Güneş en tepede olduğu için gölge boyu EN KISA olur."
                },
                {
                  id: "tf_f4_12",
                  question: "Gölgenin şekli daima ışığı kesen opak cismin şekline benzer.",
                  answer: true,
                  explanation: "Işık doğrusal yayıldığı için cismin dış hatlarının sınırını çizer."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f4_9",
                  sentence: "Işık kaynağının önüne konulan opak cismin arkasında oluşan karanlık bölgeye ___ gölge denir.",
                  blank: "tam",
                  options: ["tam", "yarı", "kısmi", "parlak"],
                  tip: "Işık almayan bölge."
                },
                {
                  id: "fb_f4_10",
                  sentence: "Perde opak cisimden uzaklaştırılırsa perdedeki gölgenin boyutu ___.",
                  blank: "büyür",
                  options: ["büyür", "küçülür", "değişmez", "kaybolur"],
                  tip: "Daha geniş alana yayılır."
                },
                {
                  id: "fb_f4_11",
                  sentence: "Gün içinde gölge boyunun en kısa olduğu an ___ vaktidir.",
                  blank: "öğle",
                  options: ["öğle", "sabah", "akşam", "ikindi"],
                  tip: "Güneş tam tepedeyken."
                },
                {
                  id: "fb_f4_12",
                  sentence: "Gölgenin oluşması ışığın ___ yayıldığının en açık ispatıdır.",
                  blank: "doğrusal",
                  options: ["doğrusal", "yavaş", "hızlı", "renkli"],
                  tip: "Bükülmeden dümdüz."
                }
              ],
              quiz: [
                {
                  id: "qz_f4_9",
                  question: "Bir masada el feneri, elma (opak cisim) ve beyaz perde durmaktadır. Duvardaki elma gölgesinin KÜÇÜLMESİ için hangisi yapılmalıdır?",
                  options: [
                    "El fenerini elmaya yaklaştırmak",
                    "Elmayı fenere yaklaştırmak",
                    "Elmayı perdeden uzaklaştırmak",
                    "Perdeyi elmaya yaklaştırmak"
                  ],
                  answer: 3,
                  explanation: "Perde opak cisme yaklaştırıldığında ışınların kestiği alan daralır ve gölge boyu küçülür."
                },
                {
                  id: "qz_f4_10",
                  question: "Ali bahçedeki bir direğin gölgesini saat 09:00, 12:30 ve 17:00'de ölçüyor. En kısa gölge boyu hangi saatte ölçülmüştür?",
                  options: ["09:00", "12:30", "17:00", "Üçünde de aynıdır"],
                  answer: 1,
                  explanation: "Öğle vakti (12:30) Güneş en dik açıyla tepede olduğu için gölge boyu en kısa olur."
                },
                {
                  id: "qz_f4_11",
                  question: "Aşağıdaki cisimlerden hangisi ışık kaynağının önüne konulursa belirgin bir 'tam gölge' OLUŞMAZ?",
                  options: ["Futbol topu", "Şeffaf renksiz pencere camı", "Tahta blok", "Metal çaydanlık"],
                  answer: 1,
                  explanation: "Şeffaf cam saydamdır ve ışığı geçirdiği için arkasında tam gölge oluşmaz."
                },
                {
                  id: "qz_f4_12",
                  question: "Gölge oyunu oynatan bir sanatçı perdedeki kuklanın gölgesini seyircilere dev gibi DEVASA göstermek istiyor. Sanatçı ne yapmalıdır?",
                  options: [
                    "Kuklayı ışık kaynağına (fenere) çok yaklaştırmalıdır",
                    "Kuklayı perdeye yapıştırmalıdır",
                    "Feneri kapatmalıdır",
                    "Perdeyi küçültmelidir"
                  ],
                  answer: 0,
                  explanation: "Opak cisim ışık kaynağına yaklaştıkça perdedeki gölgesi devasa boyutlara ulaşır."
                }
              ]
            }
          ]
        },
        {
          id: "fen_u5",
          unitNumber: 5,
          title: "5. Ünite: Maddenin Doğası",
          description: "Maddenin tanecikli yapısı, ısı ve sıcaklık farkı, hâl değişimleri, genleşme-büzülme ve ısı yalıtımı",
          topics: [
            {
              id: "fen_u5_t1",
              title: "Maddenin Tanecikli Yapısı",
              kazanimCode: "FB.5.5.1",
              kazanimDesc: "Maddenin tanecikli, boşluklu ve hareketli yapıda olduğunu açıklar; katı, sıvı ve gaz hâllerindeki tanecik düzenini modeller.",
              summary: `

• **Bütün Maddeler Taneciklerden Oluşur:** Çevremizde gördüğümüz canlı ve cansız tüm maddeler (katı, sıvı, gaz) gözle görülemeyecek kadar küçük **taneciklerden (atom/molekül)** meydana gelir.
• **Taneciklerin 3 Temel Özelliği:**
  1. Tanecikli yapıdadır.
  2. Tanecikler arasında **boşluklar** vardır.
  3. Tanecikler sürekli **hareket** hâlindedir (titreşim, öteleme, dönme).
• **Maddenin 3 Hâli ve Tanecikleri:**
  - **Katı:** Tanecikler birbirine çok yakındır, aralarındaki boşluk yok denecek kadar azdır. Düzenli dizilirler. Sadece **TİTREŞİM** hareketi yaparlar. Belirli bir şekilleri ve hacimleri vardır, sıkıştırılamazlar.
  - **Sıvı:** Tanecikler katılara göre biraz daha gevşektir, aralarında boşluk vardır. Hem **titreşim** hem de birbirinin üzerinden kayarak **ÖTELEME (akma)** hareketi yaparlar. Belirli hacimleri vardır fakat belirli şekilleri yoktur (kabın şeklini alırlar), pratik olarak sıkıştırılamazlar.
  - **Gaz:** Tanecikler arasındaki boşluk çok fazladır. Bağımsız ve çok hızlı hareket ederler. **Titreşim, öteleme ve dönme** hareketlerinin hepsini yaparlar. Belirli şekil ve hacimleri yoktur, bulundukları ortama tamamen yayılırlar ve **KOLAYCA SIKIŞTIRILABİLİRLER**.
      
              `,
              keyConcepts: [
                "Tanecik",
                "Boşluklu Yapı",
                "Titreşim",
                "Öteleme",
                "Katı",
                "Sıvı",
                "Gaz",
                "Sıkıştırılabilirlik"
              ],
              flashcards: [
                {
                  id: "fc_fen_u5_1",
                  front: "Katı, sıvı ve gaz maddelerin tanecik hareketleri nasıldır?",
                  back: "Katılar: Sadece TİTREŞİM hareketi yapar. Sıvılar: Titreşim ve ÖTELEME (akma). Gazlar: Titreşim, ÖTELEME ve DÖNME hareketi yapar.",
                  tip: "Sıvıların akıcı olmasını taneciklerin öteleme hareketi sağlar.",
                  example: "Katı kristal yapıda tanecikler sadece yerinde titrer."
                },
                {
                  id: "fc_fen_u5_2",
                  front: "Maddenin hangi hâli kolayca sıkıştırılabilir, neden?",
                  back: "GAZ hâli kolayca sıkıştırılabilir. Çünkü gaz tanecikleri arasında çok büyük boşluklar vardır.",
                  tip: "Şırınganın ucunu parmağınla kapatıp havayı itebilirsin ama suyu itemezsin!",
                  example: "Tüpgaz, deodorant ve futbol toplarına gazlar sıkıştırılarak doldurulur."
                },
                {
                  id: "fc_fen_u5_3",
                  front: "Odanın bir köşesinde sıkılan parfüm kokusunun tüm odaya yayılması neyi kanıtlar?",
                  back: "Gaz taneciklerinin sürekli, hızlı ve rastgele hareket ettiğini ve boşluklu yapıda olduğunu kanıtlar.",
                  tip: "Taneciklerin yayılmasına difüzyon denir.",
                  example: "Çaya atılan şekerin karıştırmadan da zamanla dağılması."
                }
              ],
              matching: [
                {
                  id: "m_f5_1",
                  left: "Katı Tanecikleri",
                  right: "Aralarında neredeyse hiç boşluk olmayan, sadece titreyen yapı"
                },
                {
                  id: "m_f5_2",
                  left: "Sıvı Tanecikleri",
                  right: "Birbirinin üzerinden kayarak akabilen ve kabın şeklini alan yapı"
                },
                {
                  id: "m_f5_3",
                  left: "Gaz Tanecikleri",
                  right: "Aralarında çok boşluk olan ve kolayca sıkıştırılabilen yapı"
                },
                {
                  id: "m_f5_4",
                  left: "Titreşim Hareketi",
                  right: "Maddenin her üç hâlindeki taneciklerin de yaptığı ortak hareket"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f5_1",
                  question: "Katı maddelerin tanecikleri sadece titreşim hareketi yapabilir.",
                  answer: true,
                  explanation: "Katı tanecikleri bağlı oldukları yerde sadece sağa-sola titreşir, öteleme yapamaz."
                },
                {
                  id: "tf_f5_2",
                  question: "Sıvılar enjektör (şırınga) içine çekilip kolaylıkla sıkıştırılabilir.",
                  answer: false,
                  explanation: "Sıvı tanecikleri arasındaki boşluk çok az olduğu için sıvılar pratik olarak sıkıştırılamaz."
                },
                {
                  id: "tf_f5_3",
                  question: "Gazların tanecikleri arasındaki boşluk katı ve sıvılara göre çok fazladır.",
                  answer: true,
                  explanation: "Gazlarda tanecikler birbirinden bağımsız ve çok uzaktır."
                },
                {
                  id: "tf_f5_4",
                  question: "Bir madde ısıtıldığında taneciklerinin hareket hızı azalır.",
                  answer: false,
                  explanation: "Isınan maddenin enerjisi artar ve tanecikleri daha HIZLI hareket etmeye başlar."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f5_1",
                  sentence: "Maddelerin tümü gözle görülemeyecek kadar küçük ___lerden meydana gelir.",
                  blank: "tanecik",
                  options: ["tanecik", "taş", "ışık", "damla"],
                  tip: "Atom veya molekül."
                },
                {
                  id: "fb_f5_2",
                  sentence: "Katı, sıvı ve gazların hepsi ortak olarak ___ hareketi yapar.",
                  blank: "titreşim",
                  options: ["titreşim", "dönme", "öteleme", "uçma"],
                  tip: "Yerinde kıpırdanma."
                },
                {
                  id: "fb_f5_3",
                  sentence: "Tanecikleri arasında en fazla boşluk bulunan hâl ___ hâlidir.",
                  blank: "gaz",
                  options: ["gaz", "katı", "sıvı", "plazma"],
                  tip: "Uçucu hâl."
                },
                {
                  id: "fb_f5_4",
                  sentence: "Sıvıların akışkan olmasını sağlayan tanecik hareketi ___ hareketidir.",
                  blank: "öteleme",
                  options: ["öteleme", "titreşim", "sıkışma", "donma"],
                  tip: "Kayarak yer değiştirme."
                }
              ],
              quiz: [
                {
                  id: "qz_f5_1",
                  question: "Aşağıdaki maddelerden hangisinin tanecikleri arasındaki boşluk EN FAZLADIR ve kolayca sıkıştırılabilir?",
                  options: ["Demir çivi", "Zeytinyağı", "Balondaki hava", "Buz kalıbı"],
                  answer: 2,
                  explanation: "Balondaki hava gaz hâlindedir; gaz tanecikleri arasında çok geniş boşluklar vardır ve kolayca sıkıştırılabilir."
                },
                {
                  id: "qz_f5_2",
                  question: "İçine su çekilmiş bir şırınganın ucu parmakla kapatılıp pistonu itilmeye çalışıldığında pistonun neredeyse hiç ilerlemediği görülür. Bu deney neyi kanıtlar?",
                  options: [
                    "Suyun gaz hâline geçtiğini",
                    "Sıvıların sıkıştırılamaz olduğunu",
                    "Sıvıların belirli bir şekli olduğunu",
                    "Su taneciklerinin titreşmediğini"
                  ],
                  answer: 1,
                  explanation: "Sıvı tanecikleri birbirine çok yakın olduğu için sıvılar basınçla sıkıştırılamaz."
                },
                {
                  id: "qz_f5_3",
                  question: "Maddenin katı, sıvı ve gaz hâlleri için aşağıdakilerden hangisi HER ÜÇÜ için de ORTAK bir özelliktir?",
                  options: [
                    "Öteleme hareketi yapabilmeleri",
                    "Belirli bir geometrik şekle sahip olmaları",
                    "Taneciklerinin titreşim hareketi yapması",
                    "Bulundukları kabı tamamen doldurmaları"
                  ],
                  answer: 2,
                  explanation: "Katı, sıvı ve gaz tüm maddelerin tanecikleri ortak olarak titreşim hareketi yapar."
                },
                {
                  id: "qz_f5_4",
                  question: "Bir demir bilye ısıtıldığında taneciklerinde nasıl bir değişim gerçekleşir?",
                  options: [
                    "Tanecik sayısı iki katına çıkar",
                    "Taneciklerin hareket hızı artar ve birbirlerinden biraz uzaklaşırlar",
                    "Tanecikler küçülür",
                    "Tanecikler titreşmeyi bırakır"
                  ],
                  answer: 1,
                  explanation: "Isınan maddenin taneciklerinin kinetik enerjisi ve titreşim hızı artar, tanecikler arası mesafe genişler (genleşir)."
                }
              ]
            },
            {
              id: "fen_u5_t2",
              title: "Isı ve Sıcaklık Kavramları",
              kazanimCode: "FB.5.5.2",
              kazanimDesc: "Isı ve sıcaklık arasındaki temel farkları kavrar; ısı alışverişinin yönünü ve sıcaklık eşitlenmesini (denge sıcaklığı) açıklar.",
              summary: `

• **Isı ve Sıcaklık Aynı Şey Değildir!** Günlük hayatta sıkça karıştırılan bu iki kavram tamamen farklıdır:
• **Isı Nedir?**
  - Sıcaklıkları farklı iki madde arasında alınıp verilen bir **ENERJİ TÜRÜDÜR**.
  - Birimi **Joule (J)** veya **Kalori (cal)**'dir.
  - **Kalorimetre kabı** ile hesaplanır.
  - Maddenin kütlesine bağlıdır (1 tencere kaynar suyun ısısı 1 fincan kaynar sudan çok daha fazladır).
• **Sıcaklık Nedir?**
  - Bir enerji değildir! Taneciklerin ortalama hareket enerjisinin bir göstergesidir (ölçüsüdür).
  - Birimi **Derece Santigrat (°C)**'dir.
  - **Termometre** ile doğrudan ölçülür.
  - Madde miktarına (kütleye) bağlı değildir (1 fincan su da 1 tencere su da 100°C'de kaynar).
• **Isı Alışverişi Kuralı:**
  - İki madde temas ettirildiğinde ısı akışı daima **SICAK OLAN MADDEDEN SOĞUK OLAN MADDEYE** doğrudur!
  - Sıcaklığı yüksek olan ısı verir (sıcaklığı düşer), soğuk olan ısı alır (sıcaklığı yükselir).
  - İki maddenin sıcaklığı eşitlendiğinde (termal denge / denge sıcaklığı) ısı akışı durur!
      
              `,
              keyConcepts: [
                "Isı Enerjisi",
                "Sıcaklık",
                "Termometre",
                "Joule / Kalori",
                "Derece Santigrat (°C)",
                "Isı Alışverişi",
                "Denge Sıcaklığı"
              ],
              flashcards: [
                {
                  id: "fc_fen_u5_4",
                  front: "Isı ile Sıcaklık arasındaki en belirgin 3 fark nedir?",
                  back: "1. Isı bir ENERJİDİR (Joule/Kalori), Sıcaklık ise bir ölçümdür (°C). 2. Isı kalorimetreyle hesaplanır, Sıcaklık termometreyle ölçülür. 3. Isı maddeler arası aktarılır, sıcaklık aktarılmaz.",
                  tip: "'Bugün hava ısısı 25 derece' demek bilimsel olarak yanlıştır, 'hava sıcaklığı' denmelidir!",
                  example: "Sobadan odaya ısı enerjisi yayılır, odanın sıcaklığı yükselir."
                },
                {
                  id: "fc_fen_u5_5",
                  front: "Isı alışverişi hangi yönde gerçekleşir ve ne zaman durur?",
                  back: "Daima SICAK maddeden SOĞUK maddeye doğru akar. İki maddenin sıcaklığı EŞİTLENDİĞİNDE (denge sıcaklığında) ısı akışı durur.",
                  tip: "Sıcak maddeden soğuğa tek yönlü akar.",
                  example: "Sıcak çaya soğuk kaşık konulduğunda çay kaşığa ısı verir; kaşık ısınır, çay biraz soğur."
                },
                {
                  id: "fc_fen_u5_6",
                  front: "70°C'deki bir bardak su ile 20°C'deki bir bardak su karıştırılırsa karışımın denge sıcaklığı ne olabilir?",
                  back: "20°C ile 70°C arasında bir değer olur (örneğin eşit miktarlarsa (70+20)/2 = 45°C).",
                  tip: "Denge sıcaklığı en soğuktan küçük, en sıcaktan büyük olamaz!",
                  example: "20°C < Denge Sıcaklığı < 70°C"
                }
              ],
              matching: [
                {
                  id: "m_f5_5",
                  left: "Sıcaklık Ölçer",
                  right: "Termometre (°C)"
                },
                {
                  id: "m_f5_6",
                  left: "Isı Birimi",
                  right: "Joule (J) veya Kalori (cal)"
                },
                {
                  id: "m_f5_7",
                  left: "Isı Akış Yönü",
                  right: "Sıcak maddeden soğuk maddeye doğru"
                },
                {
                  id: "m_f5_8",
                  left: "Termal Denge",
                  right: "Sıcaklıklar eşitlendiğinde ısı alışverişinin durması"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f5_5",
                  question: "Havanın sıcaklığı termometre ile ölçülür.",
                  answer: true,
                  explanation: "Sıcaklık ölçüm aleti termometredir."
                },
                {
                  id: "tf_f5_6",
                  question: "'Vücut ısım 38 dereceye çıktı' cümlesi bilimsel olarak doğru bir ifadedir.",
                  answer: false,
                  explanation: "Doğrusu 'vücut sıcaklığım 38°C oldu' şeklinde olmalıdır; derece sıcaklık birimidir."
                },
                {
                  id: "tf_f5_7",
                  question: "Isı akışı soğuk maddeden sıcak maddeye doğru gerçekleşir.",
                  answer: false,
                  explanation: "Isı daima sıcaktan soğuğa doğru akar."
                },
                {
                  id: "tf_f5_8",
                  question: "Sıcaklıkları eşit olan iki madde arasında ısı alışverişi olmaz.",
                  answer: true,
                  explanation: "Isı alışverişi için sıcaklık farkı şarttır; sıcaklıklar eşitse alışveriş durur."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f5_5",
                  sentence: "Maddeler arasında alınıp verilen enerjiye ___ denir.",
                  blank: "ısı",
                  options: ["ısı", "sıcaklık", "kütle", "ağırlık"],
                  tip: "Enerji türüdür."
                },
                {
                  id: "fb_f5_6",
                  sentence: "Sıcaklığın birimi derece ___ (°C)'dir.",
                  blank: "Santigrat",
                  options: ["Santigrat", "Newton", "Gram", "Metre"],
                  tip: "Celsius ölçeği."
                },
                {
                  id: "fb_f5_7",
                  sentence: "Isı akışı daima ___ maddeden soğuk maddeye doğrudur.",
                  blank: "sıcak",
                  options: ["sıcak", "hafif", "katı", "büyük"],
                  tip: "Yüksek sıcaklıktan."
                },
                {
                  id: "fb_f5_8",
                  sentence: "Birbirine temas eden iki maddenin sıcaklığı eşitlendiğinde ulaşılan duruma ___ sıcaklığı denir.",
                  blank: "denge",
                  options: ["denge", "kaynama", "donma", "erime"],
                  tip: "Eşitlenme anı."
                }
              ],
              quiz: [
                {
                  id: "qz_f5_5",
                  question: "Aşağıdaki ifadelerden hangisinde ısı ve sıcaklık kavramı BİLİMSEL OLARAK DOĞRU kullanılmıştır?",
                  options: [
                    "Bugün Erzurum'da hava ısısı -5°C ölçüldü",
                    "Kaynayan suyun sıcaklığı 100°C'dir",
                    "Sobadan odaya sıcaklık aktarıldı",
                    "Ali'nin vücut ısısı termometreyle 36.5 derece çıktı"
                  ],
                  answer: 1,
                  explanation: "100°C sıcaklık değeridir ve 'sıcaklığı 100°C'dir' ifadesi bilimsel olarak kusursuzdur."
                },
                {
                  id: "qz_f5_6",
                  question: "Başlangıç sıcaklığı 80°C olan sıcak demir parçası, 20°C sıcaklığındaki bir kova suya atılıyor. Bu olayla ilgili hangisi YANLIŞTIR?",
                  options: [
                    "Demirden suya ısı akışı olur",
                    "Demirin sıcaklığı zamanla azalır",
                    "Suyun sıcaklığı zamanla artar",
                    "Denge sıcaklığı 80°C'den daha yüksek bir değerde kurulur"
                  ],
                  answer: 3,
                  explanation: "Denge sıcaklığı iki sıcaklığın arasında (20°C ile 80°C arasında) olmak zorundadır; 80°C'den yüksek olamaz."
                },
                {
                  id: "qz_f5_7",
                  question: "Isı enerjisi ile ilgili aşağıdakilerden hangisi doğrudur?",
                  options: [
                    "Birimi derecedir",
                    "Termometre ile doğrudan ölçülür",
                    "Bir enerji türüdür ve birimi Joule/Kaloridir",
                    "Maddenin kütlesinden bağımsızdır"
                  ],
                  answer: 2,
                  explanation: "Isı bir enerjidir; birimi Joule veya Kaloridir."
                },
                {
                  id: "qz_f5_8",
                  question: "Sıcaklıkları 40°C olan iki bardak süt birbirine karıştırılırsa karışımın son sıcaklığı kaç °C olur?",
                  options: ["20°C", "40°C", "80°C", "0°C"],
                  answer: 1,
                  explanation: "İki sütün de sıcaklığı eşit (40°C) olduğu için aralarında ısı alışverişi olmaz, son sıcaklık 40°C olarak kalır."
                }
              ]
            },
            {
              id: "fen_u5_t3",
              title: "Maddenin Hâl Değişimi (Erime, Donma, Buharlaşma vb.)",
              kazanimCode: "FB.5.5.4",
              kazanimDesc: "Maddelerin ısı etkisiyle katı, sıvı ve gaz hâlleri arasındaki geçişlerini (erime, donma, buharlaşma, yoğuşma, süblimleşme, kırağılaşma) kavrar.",
              summary: `

• **Hâl Değişimi Nedir?** Maddelerin ısı alarak veya ısı vererek bir fiziksel hâlden diğerine geçmesidir.
• **1. Isı ALARAK Gerçekleşen Hâl Değişimleri (Tanecikler hızlanır ve birbirinden uzaklaşır):**
  - **Erime:** Katının ısı alarak sıvıya dönüşmesi (Buzun suya dönüşmesi).
  - **Buharlaşma:** Sıvının ısı alarak gaza dönüşmesi (Suyun su buharı olması). Her sıcaklıkta gerçekleşir!
  - **Süblimleşme:** Katının sıvılaşmadan doğrudan gaza geçmesi (Naftalin, kuru buz).
  - **Kaynama:** Buharlaşmanın sıvının her yerinde kabarcıklar hâlinde en hızlı ve belirli bir sıcaklıkta gerçekleşmesidir.
• **2. Isı VEREREK Gerçekleşen Hâl Değişimleri (Tanecikler yavaşlar ve birbirine yaklaşır):**
  - **Donma:** Sıvının ısı vererek katıya dönüşmesi (Suyun buz olması).
  - **Yoğuşma (Yoğunlaşma):** Gazın ısı vererek sıvıya dönüşmesi (Soğuk havada camda su damlacıkları oluşması, yağmur oluşumu).
  - **Kırağılaşma:** Gazın sıvılaşmadan doğrudan katıya geçmesi (Soğuk kış sabahlarında çimlerde ve araba camlarında beyaz buz tabakası oluşması).
• **Ayırt Edici Özellikler:** Saf maddelerin erime, donma ve kaynama noktaları sabittir ve maddeyi tanımamızı sağlar (Örn: Saf su 0°C'de donar/erir, 100°C'de kaynar).
      
              `,
              keyConcepts: [
                "Erime",
                "Donma",
                "Buharlaşma",
                "Yoğuşma",
                "Süblimleşme",
                "Kırağılaşma",
                "Kaynama Noktası",
                "Kuru Buz"
              ],
              flashcards: [
                {
                  id: "fc_fen_u5_7",
                  front: "Süblimleşme ve Kırağılaşma nedir?",
                  back: "Süblimleşme: Katının ısı alıp sıvılaşmadan doğrudan gaza geçmesidir (Naftalin). Kırağılaşma: Gazın ısı verip sıvılaşmadan doğrudan katı kristale dönüşmesidir (Kış sabahı çimlerdeki beyaz buz örtüsü).",
                  tip: "Sıvı basamağını atlayıp direkt gaz veya katıya zıplarlar!",
                  example: "Kuru buz oda sıcaklığında ıslatmadan doğrudan buharlaşır (süblimleşir)."
                },
                {
                  id: "fc_fen_u5_8",
                  front: "Buharlaşma ile Kaynama arasındaki fark nedir?",
                  back: "Buharlaşma: Sadece sıvının yüzeyinde olur ve HER SICAKLIKTA gerçekleşir. Kaynama: Sıvının her yerinde kabarcıklarla olur ve BELİRLİ SABİT BİR SICAKLIKTA (suyun 100°C kaynaması gibi) gerçekleşir.",
                  tip: "Islak çamaşırlar kışın soğukta bile buharlaşarak kurur!",
                  example: "Kaynayan suda fokurdayan kabarcıklar su buharıdır."
                },
                {
                  id: "fc_fen_u5_9",
                  front: "Buz erirken ve su donarken çevreyle nasıl bir ısı alışverişi yapar?",
                  back: "Buz erirken çevreden ISI ALIR (çevreyi soğutur). Su donarken ise çevreye ISI VERİR (kar yağarken havanın ılıması bundandır).",
                  tip: "Testideki suyun serin kalması suyun buharlaşırken testiden ısı almasındandır.",
                  example: "Elimize kolonya döküldüğünde buharlaşırken elimizden ısı alır ve serinletir."
                }
              ],
              matching: [
                {
                  id: "m_f5_9",
                  left: "Erime",
                  right: "Katının ısı alarak sıvı hâle geçmesi"
                },
                {
                  id: "m_f5_10",
                  left: "Yoğuşma",
                  right: "Gazın ısı vererek sıvı hâle geçmesi"
                },
                {
                  id: "m_f5_11",
                  left: "Süblimleşme",
                  right: "Katının sıvılaşmadan doğrudan gaza geçmesi (Naftalin)"
                },
                {
                  id: "m_f5_12",
                  left: "Kırağılaşma",
                  right: "Gazın sıvılaşmadan doğrudan katıya dönüşmesi (Çimlerdeki beyaz buz)"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f5_9",
                  question: "Buharlaşma sadece 100°C kaynama noktasında gerçekleşir.",
                  answer: false,
                  explanation: "Buharlaşma HER SICAKLIKTA gerçekleşir; kaynama ise belirli bir sıcaklıkta gerçekleşir."
                },
                {
                  id: "tf_f5_10",
                  question: "Naftalinin doğrudan gaz hâline geçmesi süblimleşmeye örnektir.",
                  answer: true,
                  explanation: "Naftalin erimeden doğrudan gaz hâline süblimleşir."
                },
                {
                  id: "tf_f5_11",
                  question: "Kolonya dökülen elin serinlemesi, buharlaşan kolonyanın elimizden ısı almasındandır.",
                  answer: true,
                  explanation: "Buharlaşma ısı alan bir olaydır ve temas ettiği ortamı soğutur."
                },
                {
                  id: "tf_f5_12",
                  question: "Donma sırasında madde çevresine ısı verir.",
                  answer: true,
                  explanation: "Sıvı katılaşırken fazlalık enerjisini çevreye ısı olarak yayar."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f5_9",
                  sentence: "Katı bir maddenin sıvılaşmadan doğrudan gaz hâline geçmesine ___ denir.",
                  blank: "süblimleşme",
                  options: ["süblimleşme", "kırağılaşma", "erime", "kaynama"],
                  tip: "Naftalin olayı."
                },
                {
                  id: "fb_f5_10",
                  sentence: "Havada gaz hâlindeki su buharının soğuk gecelerde çimlerin üzerinde minik buz kristallerine dönüşmesine ___ denir.",
                  blank: "kırağılaşma",
                  options: ["kırağılaşma", "yoğuşma", "erime", "buharlaşma"],
                  tip: "Beyaz örtü."
                },
                {
                  id: "fb_f5_11",
                  sentence: "Kaynayan bir tencerenin kapağında su damlacıklarının toplanması ___ olayına örnektir.",
                  blank: "yoğuşma",
                  options: ["yoğuşma", "buharlaşma", "erime", "donma"],
                  tip: "Buharın suya dönmesi."
                },
                {
                  id: "fb_f5_12",
                  sentence: "Deniz seviyesinde saf su ___ °C'de kaynar.",
                  blank: "100",
                  options: ["100", "0", "50", "80"],
                  tip: "Kaynama noktası."
                }
              ],
              quiz: [
                {
                  id: "qz_f5_9",
                  question: "Dolaba konan güve kovucu katı naftalin tabletlerinin zamanla sıvılaşmadan küçülüp yok olduğunu gören Ayşe, hangi hâl değişimini gözlemlemiştir?",
                  options: ["Erime", "Süblimleşme", "Buharlaşma", "Kırağılaşma"],
                  answer: 1,
                  explanation: "Katı naftalin sıvı hâle geçmeden doğrudan gaz hâline süblimleşmiştir."
                },
                {
                  id: "qz_f5_10",
                  question: "Aşağıdakilerden hangisi buharlaşma ile kaynama arasındaki farklardan biri DEĞİLDİR?",
                  options: [
                    "Buharlaşma her sıcaklıkta olur, kaynama belirli bir sıcaklıkta olur",
                    "Buharlaşma sadece yüzeyde olur, kaynama sıvının her yerinde olur",
                    "Kaynama sırasında sıcaklık genellikle sabit kalır",
                    "Kaynama sadece ısı vererek gerçekleşir"
                  ],
                  answer: 3,
                  explanation: "Kaynama ısı vererek değil, sürekli ISI ALARAK gerçekleşir."
                },
                {
                  id: "qz_f5_11",
                  question: "Banyodan sonra soğuk aynanın üzerinde su damlacıkları oluşması ve camın buğulanması hangi hâl değişimidir?",
                  options: ["Erime", "Yoğuşma (Yoğunlaşma)", "Buharlaşma", "Süblimleşme"],
                  answer: 1,
                  explanation: "Sıcak su buharı soğuk ayna yüzeyine çarpıp ısısını vererek sıvı su damlacıklarına yoğuşur."
                },
                {
                  id: "qz_f5_12",
                  question: "Kış mevsiminde kar yağarken havanın aşırı ayazının kırılıp havanın yumuşamasının bilimsel sebebi nedir?",
                  options: [
                    "Kar tanelerinin Güneş ışığını yutması",
                    "Su damlacıklarının donup kar kristali olurken çevreye ısı vermesi",
                    "Havadaki rüzgârın durması",
                    "Kar tanelerinin sıcak olması"
                  ],
                  answer: 1,
                  explanation: "Donma olayı ısı veren bir olaydır; su donarken çevre havaya ısı verir ve hava bir miktar ılımanlaşır."
                }
              ]
            },
            {
              id: "fen_u5_t4",
              title: "Isı İletimi ve Isı Yalıtımı",
              kazanimCode: "FB.5.5.5",
              kazanimDesc: "Maddeleri ısı iletkenliklerine göre sınıflandırır; binalarda ısı yalıtımının önemini ve aile/ülke ekonomisine katkısını açıklar.",
              summary: `

• **Isı İletkeni Maddeler:**
  - Isıyı iyi ve hızlı ileten maddelerdir.
  - Genellikle metaller mükemmel ısı iletkenidir (Bakır, alüminyum, demir, gümüş, altın).
  - Tencerelerin altı, çaydanlıklar, kalorifer petekleri ısı iletkeni metallerden yapılır ki ısıyı çabucak suya/ortama aktarsın.
• **Isı Yalıtkanı Maddeler:**
  - Isıyı çok yavaş ve kötü ileten (ısı geçişini engelleyen) maddelerdir.
  - Örnekler: Strafor köpük, ahşap, plastik, cam yünü, taş yünü, hava, mantar, silikon yün, keçe.
  - Tencere kulpları, termoslar, fırın eldivenleri ve kışlık montlar ısı yalıtkanı malzemelerden yapılır.
• **Binalarda Isı Yalıtımı (Mantolama):**
  - Binaların dış cephesine strafor veya taş yünü kaplanması, pencerelere çift cam (arada durgun hava boşluğu) takılması, çatıya cam yünü serilmesidir.
• **Yalıtımın Faydaları:**
  1. Kışın evlerin sıcak kalmasını, yazın ise serin kalmasını sağlar.
  2. Doğal gaz ve elektrik faturalarını %50'ye kadar azaltır (aile bütçesine katkı).
  3. Daha az yakıt tüketildiği için hava kirliliğini ve sera gazlarını azaltır (çevre koruma).
      
              `,
              keyConcepts: [
                "Isı İletkeni",
                "Isı Yalıtkanı",
                "Strafor Köpük",
                "Çift Cam",
                "Mantolama",
                "Enerji Tasarrufu",
                "Hava Yalıtımı"
              ],
              flashcards: [
                {
                  id: "fc_fen_u5_10",
                  front: "Isı iletkeni ve ısı yalıtkanı maddelere 3'er örnek veriniz.",
                  back: "İletken: Bakır, demir, alüminyum (metaller). Yalıtkan: Strafor köpük, ahşap, plastik, cam yünü.",
                  tip: "Tencerenin gövdesi iletken metalden, kulpu yalıtkan plastikten yapılır.",
                  example: "Kışın giydiğimiz yün kazaklar lifleri arasındaki durgun hava sayesinde yalıtım sağlar."
                },
                {
                  id: "fc_fen_u5_11",
                  front: "Binalarda çift cam (ısıcam) kullanılmasının mantığı nedir?",
                  back: "İki cam tabakası arasında bulunan hareketsiz hava boşluğu mükemmel bir ısı yalıtkanı görevi görerek ısının dışarı kaçmasını engeller.",
                  tip: "Hareketsiz hava en iyi ve en ucuz yalıtım malzemelerindendir.",
                  example: "Kuşların kışın tüylerini kabartması da tüyler arasına hava hapsederek ısınma taktiğidir."
                },
                {
                  id: "fc_fen_u5_12",
                  front: "Evimize mantolama (ısı yalıtımı) yaptırmak neden çok önemlidir?",
                  back: "1. Yakıt faturasını %50 düşürür, 2. Kışın sıcak yazın serin tutar, 3. Çevre kirliliğini önler ve ülke ekonomisine katkı sağlar.",
                  tip: "Yalıtım sadece kışın soğuktan değil, yazın sıcaktan da korur.",
                  example: "Termoslar içindeki sıvıyı saatlerce hem sıcak hem de soğuk tutabilir."
                }
              ],
              matching: [
                {
                  id: "m_f5_13",
                  left: "Bakır & Alüminyum",
                  right: "Isıyı hızla ileten iyi ısı iletkenleri"
                },
                {
                  id: "m_f5_14",
                  left: "Strafor Köpük & Taş Yünü",
                  right: "Binalarda kullanılan etkili ısı yalıtım malzemeleri"
                },
                {
                  id: "m_f5_15",
                  left: "Tencere Kulpu",
                  right: "Elin yanmasını önlemek için plastikten yapılan yalıtkan kısım"
                },
                {
                  id: "m_f5_16",
                  left: "Durgun Hava",
                  right: "Çift cam arasında ısı geçişini engelleyen doğal yalıtkan"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f5_13",
                  question: "Metaller ısıyı plastik ve ahşaba göre çok daha hızlı iletir.",
                  answer: true,
                  explanation: "Metaller atomik yapıları gereği mükemmel ısı iletkenleridir."
                },
                {
                  id: "tf_f5_14",
                  question: "Isı yalıtımı sadece kışın üşümemek için yapılır, yazın hiçbir faydası yoktur.",
                  answer: false,
                  explanation: "Isı yalıtımı yazın dışarıdaki bunaltıcı sıcağın eve girmesini engelleyerek serin tutar."
                },
                {
                  id: "tf_f5_15",
                  question: "Kuşların kışın tüylerini kabartması ısı kaybını önlemeye yönelik bir davranıştır.",
                  answer: true,
                  explanation: "Kabaran tüylerin arasına dolan hava ısı yalıtımı sağlar."
                },
                {
                  id: "tf_f5_16",
                  question: "Çay kaşığının sıcak çay içinde bekleyince ısınması ısının iletildiğini gösterir.",
                  answer: true,
                  explanation: "Metal kaşık çayın ısısını kaşığın sapına kadar iletir."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f5_13",
                  sentence: "Isıyı iyi iletmeyen ve ısı akışını yavaşlatan maddelere ısı ___ denir.",
                  blank: "yalıtkanı",
                  options: ["yalıtkanı", "iletkeni", "kaynağı", "rezistansı"],
                  tip: "Örn: Strafor köpük."
                },
                {
                  id: "fb_f5_14",
                  sentence: "Yemek pişirilen tencerelerin gövdesi metal, tutma kulpları ise ___ malzemeden yapılır.",
                  blank: "yalıtkan",
                  options: ["yalıtkan", "iletken", "şeffaf", "ağır"],
                  tip: "El yakmasın diye."
                },
                {
                  id: "fb_f5_15",
                  sentence: "Pencerelerde iki cam arasına hava veya argon gazı konularak yapılan sisteme ___ cam denir.",
                  blank: "çift",
                  options: ["çift", "tek", "buzlu", "kırılmaz"],
                  tip: "Isıcam."
                },
                {
                  id: "fb_f5_16",
                  sentence: "Binalarda yapılan ısı yalıtımı sayesinde yakıt tüketimi azalarak çevre ___ önlenir.",
                  blank: "kirliliği",
                  options: ["kirliliği", "güzelliği", "gürültüsü", "akışı"],
                  tip: "Duman ve sera gazları."
                }
              ],
              quiz: [
                {
                  id: "qz_f5_13",
                  question: "Sıcak çorba karıştırılırken metal kaşık kullanıldığında elimiz hemen yanarken, tahta kaşık kullanıldığında elimiz yanmaz. Bu durumun sebebi nedir?",
                  options: [
                    "Metalin ısı iletkeni, tahtanın ise ısı yalıtkanı olması",
                    "Tahtanın metalden daha ağır olması",
                    "Metalin çorbanın tadını bozması",
                    "Tahtanın sıvıyı çekmesi"
                  ],
                  answer: 0,
                  explanation: "Metal çorbadaki ısıyı hızla elimize iletir; tahta ise yalıtkan olduğu için ısıyı iletmez ve elimizi korur."
                },
                {
                  id: "qz_f5_14",
                  question: "Aşağıdaki malzemelerden hangisi binalarda ısı yalıtımı amacıyla KULLANILMAZ?",
                  options: ["Strafor köpük", "Cam yünü", "Demir levha", "Taş yünü"],
                  answer: 2,
                  explanation: "Demir levha iyi bir ısı iletkenidir; dış cepheye kaplanırsa içerideki ısı hızla dışarı kaçar, yalıtım malzemesi olamaz."
                },
                {
                  id: "qz_f5_15",
                  question: "Bir termosun içi sıcak çorbayı saatlerce sıcak, soğuk limanatayı ise saatlerce soğuk tutabilmesinin sırrı nedir?",
                  options: [
                    "İçinde minik bir ısıtıcı ve soğutucu bulunması",
                    "Çift katmanlı cidarları arasındaki havanın boşaltılarak vakum (yalıtım) oluşturulması",
                    "Termosun metalinin çok parlak olması",
                    "Kapağının şeffaf olması"
                  ],
                  answer: 1,
                  explanation: "Termos çift duvarlıdır ve arasındaki boşluk (vakum) ısı iletimini engelleyerek içerideki sıcaklığın korunmasını sağlar."
                },
                {
                  id: "qz_f5_16",
                  question: "Aşağıdakilerden hangisi evlerde yapılan ısı yalıtımının sağladığı faydalardan biri DEĞİLDİR?",
                  options: [
                    "Kışın yakıt, yazın klima elektrik faturalarını düşürür",
                    "Fosil yakıt tüketimini azaltarak çevre temizliğine katkı sağlar",
                    "Binaların dayanıklılığını ve konforunu artırır",
                    "Güneş ışınlarının eve girmesini tamamen engeller"
                  ],
                  answer: 3,
                  explanation: "Isı yalıtımı Güneş ışığını engellemez; sadece evin duvarlarından ve pencerelerinden kontrolsüz ısı kaçışını engeller."
                }
              ]
            }
          ]
        },
        {
          id: "fen_u6",
          unitNumber: 6,
          title: "6. Ünite: Yaşamımızdaki Elektrik",
          description: "Devre elemanları, sembolik gösterimler, devre şemaları ve ampul parlaklığını etkileyen değişkenler",
          topics: [
            {
              id: "fen_u6_t1",
              title: "Basit Elektrik Devresi Elemanları ve Devre Şemaları",
              kazanimCode: "FB.5.6.1",
              kazanimDesc: "Basit bir elektrik devresini oluşturan elemanları tanır, sembolleriyle gösterir ve devre şemalarını çizer.",
              summary: `

• **Basit Elektrik Devresi Elemanları ve Görevleri:**
  1. **Pil (Üreteç):** Devrenin elektrik enerjisi kaynağıdır. Artı (+) ve eksi (-) olmak üzere iki kutbu vardır. Sembolü: Biri uzun (+) diğeri kısa ve kalın (-) iki paralel çizgidir: \`+ | ı -\`
  2. **Ampul:** Elektrik enerjisini ışık enerjisine (ve bir miktar ısıya) çeviren elemandır. İçinde akkor tungsten tel (flaman) bulunur. Sembolü: Daire içinde çarpı işareti: \`(X)\`
  3. **Bağlantı Kablosu (İletken Tel):** Elektrik enerjisinin devrede elemanlar arasında iletilmesini sağlar. Sembolü: Düz çizgi \`───\`
  4. **Anahtar:** Devreden elektrik akımının geçmesini kontrol eder (açıp kapatır).
     - **Açık Anahtar:** Akım geçmez, ampul **IŞIK VERMEZ** (kopuk köprü gibidir). Sembolü: \`──/ ──\`
     - **Kapalı Anahtar:** Akım geçer, devre tamamlanır, ampul **IŞIK VERİR**. Sembolü: \`──•─•──\`
  5. **Duy:** Ampulün takıldığı yuvadır (Özel bir sembolü yoktur).
  6. **Pil Yatağı:** Pillerin yerleştirildiği haznedir (Özel bir sembolü yoktur).
• **Neden Semboller Kullanılır?**
  - Devre elemanlarının resimlerini çizmek zordur ve zaman alır.
  - Bilimsel semboller tüm dünyada evrensel ve ortaktır; dili ne olursa olsun her bilim insanı veya elektrikçi şemayı kolayca anlar.
      
              `,
              keyConcepts: [
                "Pil",
                "Ampul",
                "Bağlantı Kablosu",
                "Anahtar",
                "Duy",
                "Pil Yatağı",
                "Devre Şeması",
                "Evrensel Semboller"
              ],
              flashcards: [
                {
                  id: "fc_fen_u6_1",
                  front: "Elektrik devrelerinde neden resim yerine semboller kullanılır?",
                  back: "1. Çizimi pratik ve kolaydır, zamandan tasarruf sağlar. 2. Bütün dünyada ortak ve evrensel bir bilim dili oluşturur.",
                  tip: "Japonya'daki bir mühendis de Türkiye'deki bir öğrenci de aynı şemayı okur.",
                  example: "Pil için uzun ve kısa iki çizgi çizmek gerçek pil resmi çizmekten çok daha kolaydır."
                },
                {
                  id: "fc_fen_u6_2",
                  front: "Anahtar 'açık' konumdayken ampul neden ışık vermez?",
                  back: "Çünkü anahtar açıkken iletken tel arasında boşluk kalır, devre tamamlanamaz ve elektrik akımı geçemez.",
                  tip: "Köprünün havaya kalkması gibidir; araba karşıya geçemez.",
                  example: "Duvardaki elektrik düğmesine basıp ışığı söndürdüğümüzde anahtarı 'açmış' oluruz."
                },
                {
                  id: "fc_fen_u6_3",
                  front: "Hangi devre elemanlarının bilimsel şemalarda özel bir sembolü yoktur?",
                  back: "DUY (ampul yuvası) ve PİL YATAĞI'nın özel bir sembolü yoktur. Şemada sadece ampul ve pil sembolü çizilir.",
                  tip: "Bunlar yardımcı tutucu araçlardır, olmasalar da kablo doğrudan bağlanabilir.",
                  example: "Kabloyu pilin kutbuna ve ampulün metaline doğrudan değdirerek de devre kurulabilir."
                }
              ],
              matching: [
                {
                  id: "m_f6_1",
                  left: "Daire içinde X",
                  right: "Ampul sembolü"
                },
                {
                  id: "m_f6_2",
                  left: "Uzun ve kısa paralel çizgi",
                  right: "Pil (üreteç) sembolü"
                },
                {
                  id: "m_f6_3",
                  left: "Havaya kalkmış çizgi",
                  right: "Açık anahtar (akım geçmez)"
                },
                {
                  id: "m_f6_4",
                  left: "Düz çizgi",
                  right: "Bağlantı kablosu (iletken tel)"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f6_1",
                  question: "Anahtar kapatıldığında ampul ışık verir.",
                  answer: true,
                  explanation: "Kapalı anahtar devreyi tamamlar ve elektrik akımının geçmesini sağlar."
                },
                {
                  id: "tf_f6_2",
                  question: "Duy ve pil yatağının uluslararası standart devre sembolleri vardır.",
                  answer: false,
                  explanation: "Duy ve pil yatağının özel devre sembolü yoktur; şemalarda ampul ve pil çizilir."
                },
                {
                  id: "tf_f6_3",
                  question: "Pil elektrik enerjisi üreten devre elemanıdır.",
                  answer: true,
                  explanation: "Pil devrenin güç kaynağıdır."
                },
                {
                  id: "tf_f6_4",
                  question: "Kablo koptuğunda veya gevşediğinde devre açık devre olur ve ampul yanmaz.",
                  answer: true,
                  explanation: "Akımın tamamlanması için kesintisiz kapalı bir devre hattı gerekir."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f6_1",
                  sentence: "Elektrik enerjisini ışık enerjisine dönüştüren devre elemanına ___ denir.",
                  blank: "ampul",
                  options: ["ampul", "pil", "anahtar", "kablo"],
                  tip: "Daire içinde X."
                },
                {
                  id: "fb_f6_2",
                  sentence: "Devredeki elektrik akımını açıp kapatmaya yarayan elemana ___ denir.",
                  blank: "anahtar",
                  options: ["anahtar", "duy", "pil yatağı", "direnç"],
                  tip: "Elektrik düğmesi."
                },
                {
                  id: "fb_f6_3",
                  sentence: "Pil sembolünde uzun çizgi ___ (+) kutbu, kısa kalın çizgi ise eksi (-) kutbu gösterir.",
                  blank: "artı",
                  options: ["artı", "nötr", "toprak", "ışık"],
                  tip: "Pozitif kutup."
                },
                {
                  id: "fb_f6_4",
                  sentence: "Devre elemanlarının çiziminde sembol kullanılmasının sebebi ortak bir bilim ___ oluşturmaktır.",
                  blank: "dili",
                  options: ["dili", "oyunu", "yarışı", "dersi"],
                  tip: "Evrensel standart."
                }
              ],
              quiz: [
                {
                  id: "qz_f6_1",
                  question: "Kurduğu bir devrede anahtarı kapatmasına rağmen ampulün yanmadığını gören Mehmet, devrede hangi sorunu yaşamış OLA BİLİR?",
                  options: [
                    "Pilin bitmiş veya ters bağlanmış olması",
                    "Ampulün flaman telinin kopuk (patlak) olması",
                    "Bağlantı kablolarından birinin kopuk olması",
                    "Yukarıdakilerin hepsi"
                  ],
                  answer: 3,
                  explanation: "Pilin bitmesi, kablonun kopuk olması veya ampulün patlak olması durumlarının hepsi ampulün yanmasını engeller."
                },
                {
                  id: "qz_f6_2",
                  question: "Aşağıdaki devre elemanlarından hangisinin standart bir devre şeması sembolü YOKTUR?",
                  options: ["Pil", "Ampul", "Duy", "Anahtar"],
                  answer: 2,
                  explanation: "Duy ve pil yatağının şematik sembolü yoktur."
                },
                {
                  id: "qz_f6_3",
                  question: "Bir devrede anahtarın 'açık' olması ne anlama gelir?",
                  options: [
                    "Ampulün en parlak yandığı anlamına gelir",
                    "Devrenin kesintiye uğradığı ve akımın geçemediği anlamına gelir",
                    "Pilin şarj olduğu anlamına gelir",
                    "Kabloların ısındığı anlamına gelir"
                  ],
                  answer: 1,
                  explanation: "Açık anahtar devreyi kesintiye uğratır; akım akamaz ve ampul yanmaz."
                },
                {
                  id: "qz_f6_4",
                  question: "Devre şeması çizilirken kullanılan sembollerle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
                  options: [
                    "Her ülke kendi isteğine göre farklı semboller kullanır",
                    "Semboller tüm dünyada geçerli ortak bilimsel gösterimlerdir",
                    "Ampul sembolü kare içine üçgen çizilerek gösterilir",
                    "Piller sadece yuvarlak sembolle çizilir"
                  ],
                  answer: 1,
                  explanation: "Devre sembolleri uluslararası standartlara sahiptir ve tüm dünyada aynı şekilde kullanılır."
                }
              ]
            },
            {
              id: "fen_u6_t2",
              title: "Devredeki Ampul Parlaklığını Etkileyen Değişkenler",
              kazanimCode: "FB.5.6.3",
              kazanimDesc: "Basit bir devrede pil sayısını veya ampul sayısını değiştirerek ampul parlaklığındaki değişimi deneyle test eder; bağımlı, bağımsız ve kontrol edilen değişkenleri açıklar.",
              interactiveLab: {
                type: "electric-circuit",
                title: "Devre ve Ampul Parlaklığı Labı"
              },
              summary: `

• **Ampul Parlaklığını Etkileyen İki Temel Faktör:**
  1. **Pil Sayısı (Enerji Miktarı):**
     - Bir devrede ampul sayısı sabit tutulup **PİL SAYISI ARTIRILIRSA** ➔ Ampulün parlaklığı **ARTAR**!
     - Piller biterse veya pil sayısı azaltılırsa ➔ Ampulün parlaklığı azalır.
  2. **Ampul Sayısı (Yük Miktarı):**
     - Bir devrede pil sayısı sabit tutulup **AMPUL SAYISI ARTIRILIRSA** ➔ Pilden çıkan enerji ampuller arasında paylaşılacağı için her bir ampulün parlaklığı **AZALIR**!
     - Ampul sayısı azaltılırsa ➔ Kalan ampul daha parlak yanar.
• **Bilimsel Deney Değişkenleri:**
  - **Bağımsız Değişken:** Bizim deneyde bilerek ve isteyerek değiştirdiğimiz şeydir (Örn: Pil sayısını artırmak).
  - **Bağımlı Değişken:** Bağımsız değişkene bağlı olarak değişen ve gözlemlediğimiz sonuçtur (Örn: Ampulün parlaklığı).
  - **Kontrol Edilen (Sabit Tutulan) Değişken:** Deney boyunca hiç değiştirilmeyen, aynı tutulan faktörlerdir (Örn: Ampul sayısı, kablo cinsi ve uzunluğu).
      
              `,
              keyConcepts: ["Ampul Parlaklığı", "Pil Sayısı", "Ampul Sayısı", "Bağımsız Değişken", "Bağımlı Değişken", "Kontrol Değişkeni"],
              flashcards: [
                {
                  id: "fc_fen_u6_4",
                  front: "Bir elektrik devresinde pil sayısı artırılırsa ampul parlaklığı nasıl değişir?",
                  back: "Ampul parlaklığı ARTAR. Çünkü devreye sağlanan elektrik enerjisi miktarı yükselir.",
                  tip: "Daha çok pil = Daha çok ışık!",
                  example: "1 pilli fener loş yanarken 3 pilli fener göz kamaştırır."
                },
                {
                  id: "fc_fen_u6_5",
                  front: "Pil sayısı sabitken seri bağlı ampul sayısı artırılırsa ampullerin parlaklığı nasıl değişir?",
                  back: "Ampullerin parlaklığı AZALIR. Çünkü pilden gelen enerji artan ampuller arasında paylaştırılır.",
                  tip: "Pastayı 2 kişi yerine 5 kişi paylaşırsa herkese daha az pasta düşer!",
                  example: "1 pilli devrede 1 ampul parlak yanarken 3 ampul sönük yanar."
                },
                {
                  id: "fc_fen_u6_6",
                  front: "Bağımsız, Bağımlı ve Kontrol edilen değişken nedir?",
                  back: "Bağımsız: Bizim bilerek değiştirdiğimiz faktör. Bağımlı: Bu değişimden etkilenen sonuç. Kontrol edilen: Sabit tutulan faktör.",
                  tip: "Bağımsız = Değiştirdiğim, Bağımlı = Ölçtüğüm sonuç.",
                  example: "Pil sayısını (bağımsız) değiştirip ampul parlaklığını (bağımlı) ölçerken ampul sayısını (kontrol) sabit tutarız."
                }
              ],
              matching: [
                {
                  id: "m_f6_5",
                  left: "Pil sayısını artırmak",
                  right: "Ampul parlaklığının artmasına yol açar"
                },
                {
                  id: "m_f6_6",
                  left: "Ampul sayısını artırmak",
                  right: "Ampul parlaklığının azalmasına yol açar"
                },
                {
                  id: "m_f6_7",
                  left: "Bağımsız Değişken",
                  right: "Araştırmacının deneyde kasten değiştirdiği etken"
                },
                {
                  id: "m_f6_8",
                  left: "Bağımlı Değişken",
                  right: "Yapılan değişiklik sonucu etkilenen ve ölçülen durum"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f6_5",
                  question: "Bir devrede pil sayısı artırıldığında ampulün parlaklığı azalır.",
                  answer: false,
                  explanation: "Pil sayısı artarsa enerji artar ve ampul daha PARLAK yanar."
                },
                {
                  id: "tf_f6_6",
                  question: "Ampul sayısı arttıkça pilden çekilen enerji paylaşıldığı için parlaklık azalır.",
                  answer: true,
                  explanation: "Seri bağlı ampul sayısı arttıkça her bir ampule düşen gerilim ve parlaklık azalır."
                },
                {
                  id: "tf_f6_7",
                  question: "Deneyde sabit tuttuğumuz değişkenlere bağımlı değişken denir.",
                  answer: false,
                  explanation: "Sabit tutulan değişkenlere 'kontrol edilen (sabit) değişken' denir."
                },
                {
                  id: "tf_f6_8",
                  question: "Pil sayısının parlaklığa etkisini araştırırken ampul sayısı sabit tutulmalıdır.",
                  answer: true,
                  explanation: "Doğru bir deney için test edilen değişken dışındakiler sabit tutulmalıdır."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f6_5",
                  sentence: "Bir devrede ampul sayısı sabitken pil sayısı artırılırsa ampul parlaklığı ___.",
                  blank: "artar",
                  options: ["artar", "azalır", "değişmez", "söner"],
                  tip: "Daha güçlü yanar."
                },
                {
                  id: "fb_f6_6",
                  sentence: "Bir devrede pil sayısı sabitken ampul sayısı artırılırsa her bir ampulün parlaklığı ___.",
                  blank: "azalır",
                  options: ["azalır", "artar", "patlar", "değişmez"],
                  tip: "Enerji bölüşülür."
                },
                {
                  id: "fb_f6_7",
                  sentence: "Deney yapan kişinin kendi isteğiyle değiştirdiği değişkene ___ değişken denir.",
                  blank: "bağımsız",
                  options: ["bağımsız", "bağımlı", "sabit", "sonuç"],
                  tip: "Özgürce seçilen."
                },
                {
                  id: "fb_f6_8",
                  sentence: "Bağımsız değişkenden etkilenen ve deney sonucunda gözlemlenen değişkene ___ değişken denir.",
                  blank: "bağımlı",
                  options: ["bağımlı", "bağımsız", "kontrollü", "tarafsız"],
                  tip: "Sonuç değişkeni."
                }
              ],
              quiz: [
                {
                  id: "qz_f6_5",
                  question: "Ahmet, 'Pil sayısı arttıkça ampul parlaklığı artar mı?' hipotezini test etmek için iki ayrı devre kuruyor. Ahmet bu deneyde hangi değişkeni SABİT (kontrol edilen) tutmalıdır?",
                  options: ["Pil sayısını", "Ampul sayısını", "Ampul parlaklığını", "Devrenin yanma süresini"],
                  answer: 1,
                  explanation: "Pil sayısının etkisini görmek için ampul sayısı iki devrede de kesinlikle eşit (sabit) tutulmalıdır."
                },
                {
                  id: "qz_f6_6",
                  question: `
1. Devre: 1 pil + 1 ampul
2. Devre: 1 pil + 3 ampul
Yukarıdaki devreler karşılaştırıldığında hangisi doğrudur?
                  `,
                  options: [
                    "2. devredeki ampuller daha parlak yanar",
                    "1. devredeki ampul daha parlak yanar",
                    "İki devrede de ampullerin parlaklığı aynıdır",
                    "2. devredeki ampuller hiç yanmaz"
                  ],
                  answer: 1,
                  explanation: "1 pilden gelen enerji tek ampulde toplanır; 2. devrede ise 3 ampul enerjiyi paylaştığı için daha sönük yanar."
                },
                {
                  id: "qz_f6_7",
                  question: "Aşağıdaki değişken eşleştirmelerinden hangisi 'Ampul sayısının parlaklığa etkisi' deneyi için DOĞRUDUR?",
                  options: [
                    "Bağımsız: Ampul sayısı, Bağımlı: Parlaklık, Kontrol: Pil sayısı",
                    "Bağımsız: Pil sayısı, Bağımlı: Ampul sayısı, Kontrol: Parlaklık",
                    "Bağımsız: Parlaklık, Bağımlı: Pil sayısı, Kontrol: Kablo",
                    "Bağımsız: Anahtar, Bağımlı: Pil sayısı, Kontrol: Duy"
                  ],
                  answer: 0,
                  explanation: "Ampul sayısı bilerek değiştirilen (bağımsız), parlaklık etkilenen sonuç (bağımlı), pil sayısı ise sabit tutulandır (kontrol)."
                },
                {
                  id: "qz_f6_8",
                  question: "Bir öğrenci odasındaki masa lambasının daha parlak ışık vermesini istiyor. Devreye aşağıdakilerden hangisini yaparsa amacına ulaşır?",
                  options: [
                    "Devreye aynı özelliklerde bir pil daha eklemek",
                    "Devreye bir ampul daha eklemek",
                    "Devredeki anahtarı açmak",
                    "Kabloları uzatmak"
                  ],
                  answer: 0,
                  explanation: "Devreye ek bir pil eklemek gerilimi ve akımı artırarak lambanın daha parlak yanmasını sağlar."
                }
              ]
            }
          ]
        },
        {
          id: "fen_u7",
          unitNumber: 7,
          title: "7. Ünite: Sürdürülebilir Yaşam ve Geri Dönüşüm",
          description: "Evsel atıklar, geri dönüşüm ve yeniden kullanım, kompost yapımı, su ve enerji tasarrufu ile çevre bilinci",
          topics: [
            {
              id: "fen_u7_t1",
              title: "Evsel Atıklar ve Geri Dönüşüm",
              kazanimCode: "FB.5.7.1",
              kazanimDesc: "Evsel katı ve sıvı atıkların geri dönüştürülme süreçlerini, kompost üretimini ve yeniden kullanımın çevresel faydalarını kavrar.",
              summary: `

• **Evsel Atık Nedir?** Evlerimizde günlük yaşam faaliyetleri sonucunda kullanım süresi dolmuş veya artık işimize yaramayan maddelere **evsel atık** denir (Çöp ile geri dönüştürülebilir atık aynı şey değildir!).
• **Geri Dönüştürülebilir Atıklar:**
  - **Kâğıt & Karton:** Kitap, defter, koli, gazete. 1 ton kâğıdın geri dönüştürülmesi yaklaşık 17 ağacın kesilmesini önler!
  - **Plastik:** Su şişeleri, deterjan kapları, poşetler. Doğada yüzlerce yıl yok olmazlar, geri dönüştürülmelidir.
  - **Cam:** Şişeler, kavanozlar. Sonsuz kez kalite kaybı olmadan eritilip yeniden kullanılabilir.
  - **Metal:** İçecek kutuları, konserve tenekeleri.
  - **Atık Yağlar:** Lavaboya dökülen 1 litre bitkisel atık yağ, 1 milyon litre içme suyunu kirletir! Toplanıp biyodizele dönüştürülmelidir.
  - **Atık Piller:** Ağır metaller (cıva, kurşun, kadmiyum) içerir; asla toprağa veya çöpe atılmamalı, atık pil toplama kutularına (TAP) atılmalıdır.
• **Geri Dönüşüm vs Yeniden Kullanım:**
  - **Geri Dönüşüm:** Atıkların fabrikalarda fiziksel veya kimyasal işlemlerden geçirilerek yeni bir hammaddeye dönüştürülmesidir (Cam şişelerin eritilip yeni şişe yapılması).
  - **Yeniden Kullanım:** Bir eşyanın hiçbir endüstriyel işlem görmeden temizlenerek veya tamir edilerek tekrar kullanılmasıdır (Salça kavanozuna baharat koymak, eski lastikten saksı yapmak).
• **Kompost:** Meyve, sebze kabukları, çay posaları gibi organik atıkların çürütülerek doğal gübreye dönüştürülmesidir.
      
              `,
              keyConcepts: [
                "Evsel Atık",
                "Geri Dönüşüm",
                "Yeniden Kullanım",
                "Kompost",
                "Atık Pil",
                "Bitkisel Atık Yağ",
                "Hammadde",
                "Sıfır Atık"
              ],
              flashcards: [
                {
                  id: "fc_fen_u7_1",
                  front: "Geri Dönüşüm ile Yeniden Kullanım arasındaki fark nedir?",
                  back: "Geri dönüşümde atık fabrikada eritilip hammaddeye dönüştürülür (camın eritilmesi). Yeniden kullanımda ise atık hiçbir işlem görmeden direkt başka amaçla kullanılır (kavanozun kalemlik yapılması).",
                  tip: "Yeniden kullanım enerji harcatmaz ve en tasarruflu yöntemdir.",
                  example: "Eski yoğurt kabına çiçek ekmek yeniden kullanımdır."
                },
                {
                  id: "fc_fen_u7_2",
                  front: "Kullanılmış kızartma yağları neden asla lavaboya dökülmemelidir?",
                  back: "1 litre atık yağ lavabodan kanalizasyona giderek tam 1 MİLYON LİTRE temiz içme suyunu zehirler ve boruları tıkar!",
                  tip: "Atık yağlar biriktirilip atık yağ toplama noktalarına verilmelidir.",
                  example: "Toplanan atık yağlar çevre dostu biyodizel yakıta dönüştürülür."
                },
                {
                  id: "fc_fen_u7_3",
                  front: "Kompost nedir ve nasıl elde edilir?",
                  back: "Elma kabuğu, çay posası, kuru yaprak gibi organik atıkların mikroorganizmalar tarafından çürütülerek besin değeri yüksek doğal gübreye dönüştürülmesidir.",
                  tip: "Toprağın en doğal besinidir.",
                  example: "Bahçedeki sebze atıklarını kompost kutusunda çürütüp gübre yapmak."
                }
              ],
              matching: [
                {
                  id: "m_f7_1",
                  left: "1 Ton Kâğıt Geri Dönüşümü",
                  right: "17 adet ağacın kesilmesini önler"
                },
                {
                  id: "m_f7_2",
                  left: "Bitkisel Atık Yağ",
                  right: "Lavaboya dökülmeyip biyodizele dönüştürülen sıvı"
                },
                {
                  id: "m_f7_3",
                  left: "Kompost",
                  right: "Meyve-sebze kabuklarından üretilen organik gübre"
                },
                {
                  id: "m_f7_4",
                  left: "Atık Pil",
                  right: "Ağır metal kirliliğini önlemek için özel kutuya atılması gereken atık"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f7_1",
                  question: "Cam malzemeler eritilerek defalarca kalitesini kaybetmeden geri dönüştürülebilir.",
                  answer: true,
                  explanation: "Cam sonsuz geri dönüşüm döngüsüne sahip çevre dostu bir malzemedir."
                },
                {
                  id: "tf_f7_2",
                  question: "Kızartma yağlarını sıcak suyla akıtarak lavaboya dökmek tamamen zararsızdır.",
                  answer: false,
                  explanation: "Asla dökülmemelidir! 1 litre yağ 1 milyon litre temiz içme suyunu kirletir."
                },
                {
                  id: "tf_f7_3",
                  question: "Eski bir konserve kutusunu boyayıp kalemlik yapmak 'yeniden kullanım' örneğidir.",
                  answer: true,
                  explanation: "Fabrikaya gitmeden doğrudan amaca uygun kullanıldığı için yeniden kullanımdır."
                },
                {
                  id: "tf_f7_4",
                  question: "Bütün evsel atıklar geri dönüştürülebilir.",
                  answer: false,
                  explanation: "Kirli mendil, bebek bezi gibi bazı atıklar hijyenik nedenlerle geri dönüştürülemez çöptür."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f7_1",
                  sentence: "Kullanılmış atıkların fabrikalarda işlenerek tekrar hammadde yapılmasına ___ dönüşüm denir.",
                  blank: "geri",
                  options: ["geri", "ileri", "hızlı", "ters"],
                  tip: "Döngü sembolü."
                },
                {
                  id: "fb_f7_2",
                  sentence: "Meyve kabukları ve organik mutfak atıklarından yapılan doğal gübreye ___ denir.",
                  blank: "kompost",
                  options: ["kompost", "plastik", "asit", "deterjan"],
                  tip: "Toprak vitamini."
                },
                {
                  id: "fb_f7_3",
                  sentence: "Biten piller toprağı kirletmemesi için özel atık pil ___ kutusuna atılmalıdır.",
                  blank: "toplama",
                  options: ["toplama", "çöp", "yakma", "gömme"],
                  tip: "TAP kutuları."
                },
                {
                  id: "fb_f7_4",
                  sentence: "Kâğıtların geri dönüştürülmesi ormanlardaki ___lerin kesilmesini engeller.",
                  blank: "ağaç",
                  options: ["ağaç", "çiçek", "ot", "çalı"],
                  tip: "Oksijen kaynağımız."
                }
              ],
              quiz: [
                {
                  id: "qz_f7_1",
                  question: "Aşağıdaki atıklardan hangisinin geri dönüştürülmesi ağaçların kesilmesini ve ormanların yok olmasını doğrudan ÖNLER?",
                  options: [
                    "Kullanılmış defter ve karton koli",
                    "Cam şişe",
                    "Alüminyum içecek kutusu",
                    "Plastik poşet"
                  ],
                  answer: 0,
                  explanation: "Kâğıt ve karton ağaç liflerinden (selüloz) yapıldığı için kâğıt geri dönüşümü doğrudan ağaçları kurtarır."
                },
                {
                  id: "qz_f7_2",
                  question: "Ebru, biten reçel kavanozunu çöpe atmak yerine yıkayıp içine düğmelerini koyuyor. Ebru'nun yaptığı bu davranış hangisine örnektir?",
                  options: ["Geri dönüşüm", "Yeniden kullanım", "Kompost üretimi", "İsraf"],
                  answer: 1,
                  explanation: "Atığı endüstriyel işlemden geçirmeden doğrudan farklı bir amaçla kullanmak 'yeniden kullanım'dır."
                },
                {
                  id: "qz_f7_3",
                  question: "Evdeki patates kabukları, elma çöpü ve demlenmiş çay posasını değerlendirmek isteyen bir çiftçi hangisini yapmalıdır?",
                  options: [
                    "Poşete koyup yakmalıdır",
                    "Dereye dökmelidir",
                    "Kompost yaparak bahçesinde doğal gübre olarak kullanmalıdır",
                    "Lavabodan akıtmalıdır"
                  ],
                  answer: 2,
                  explanation: "Organik atıklar kompost yapılarak toprağı zenginleştiren organik gübreye dönüştürülür."
                },
                {
                  id: "qz_f7_4",
                  question: "Kullanılmış pillerin normal evsel çöplerle birlikte doğaya atılması durumunda oluşacak EN BÜYÜK tehlike nedir?",
                  options: [
                    "Pillerin güzel kokması",
                    "İçerdikleri ağır metallerin yağmurla toprağa ve yeraltı sularına karışarak zehirlemesi",
                    "Pillerin rüzgârda uçması",
                    "Pillerin çöpleri dondurması"
                  ],
                  answer: 1,
                  explanation: "Pillerdeki kurşun, cıva ve kadmiyum toprağa ve yer altı sularına karışarak canlıları zehirler."
                }
              ]
            },
            {
              id: "fen_u7_t2",
              title: "Kaynakların Tasarruflu Kullanımı ve İsrafın Önlenmesi",
              kazanimCode: "FB.5.7.2",
              kazanimDesc: "Su, elektrik ve gıda kaynaklarının tasarruflu kullanımını değerlendirir; sürdürülebilir bir gelecek için bireysel sorumluluk geliştirir.",
              summary: `

• **Kaynaklarımız Sonsuz Değildir:** Dünya'daki temiz su, enerji kaynakları ve tarım arazileri sınırlıdır. Nüfus arttıkça kaynaklar hızla tükenmektedir.
• **1. Su Tasarrufu:**
  - Diş fırçalarken veya ellerimizi sabunlarken musluğu kapatmak (yılda tonlarca su tasarrufu sağlar).
  - Damlatan muslukları ve sifonları hemen tamir ettirmek.
  - Bulaşıkları elde değil, tam dolu bulaşık makinesinde yıkamak.
  - Duş süresini 5 dakikaya indirmek ve tasarruflu duş başlığı kullanmak.
• **2. Elektrik ve Enerji Tasarrufu:**
  - Boş odalarda açık bırakılan lambaları söndürmek.
  - Enerji tasarruflu LED ampuller kullanmak.
  - A+++ veya yüksek enerji verimliliğine sahip beyaz eşyalar seçmek.
  - Elektronik cihazları bekleme (stand-by) modunda bırakmayıp prizden çekmek.
• **3. Gıda Tasarrufu ve İsrafı Önleme:**
  - Alışverişe liste yaparak çıkmak, ihtiyacımız kadar almak.
  - Artan yemekleri uygun şekilde saklayarak değerlendirmek.
• **Gelecek Nesillere Miras (Sürdürülebilirlik):** Bugünkü ihtiyaçlarımızı karşılarken gelecek nesillerin yaşam kalitesini tehlikeye atmadan kaynakları bilinçli kullanmaya **sürdürülebilirlik** denir.
      
              `,
              keyConcepts: [
                "Tasarruf",
                "İsraf",
                "Sürdürülebilirlik",
                "Su Tasarrufu",
                "Enerji Verimliliği",
                "LED Ampul",
                "Gıda İsrafı"
              ],
              flashcards: [
                {
                  id: "fc_fen_u7_4",
                  front: "Evde su tasarrufu için yapabileceğimiz en pratik 3 davranış nedir?",
                  back: "1. Diş fırçalarken musluğu kapatmak, 2. Duş süresini kısaltmak, 3. Damlatan muslukları tamir ettirmek.",
                  tip: "Açık kalan bir musluk dakikada 12 litre su akıtır!",
                  example: "Bulaşıkları elde yıkamak makineden 4 kat fazla su harcatır."
                },
                {
                  id: "fc_fen_u7_5",
                  front: "Elektrik tasarrufu için akkor flamanlı ampul yerine neden LED ampul tercih edilmelidir?",
                  back: "Çünkü akkor ampuller enerjinin %90'ını ısıya harcar; LED ampuller ise çok az enerjiyle çok daha parlak ışık verir ve %80 enerji tasarrufu sağlar.",
                  tip: "LED ampullerin ömrü de çok daha uzundur.",
                  example: "10 Watt'lık bir LED ampul, 60 Watt'lık eski ampulle aynı ışığı verir."
                },
                {
                  id: "fc_fen_u7_6",
                  front: "Sürdürülebilirlik ne demektir?",
                  back: "Doğal kaynakları tüketmeden, çevreyi kirletmeden ve gelecek nesillerin haklarını koruyarak bilinçli ve dengeli yaşama felsefesidir.",
                  tip: "'Dünya bize atalarımızdan miras kalmadı, çocuklarımızdan ödünç aldık.'",
                  example: "Yenilenebilir rüzgâr ve güneş enerjisi kullanmak sürdürülebilirdir."
                }
              ],
              matching: [
                {
                  id: "m_f7_5",
                  left: "LED Ampul Kullanmak",
                  right: "Aydınlatmada %80 enerji tasarrufu sağlayan tercih"
                },
                {
                  id: "m_f7_6",
                  left: "Diş fırçalarken musluğu kapatmak",
                  right: "Her fırçalamada yaklaşık 10-15 litre suyu kurtaran davranış"
                },
                {
                  id: "m_f7_7",
                  left: "Stand-by (Bekleme) Modu",
                  right: "Kapatılmayıp fişte bırakılan aletlerin gizlice enerji tüketmesi"
                },
                {
                  id: "m_f7_8",
                  left: "Alışveriş Listesi Hazırlamak",
                  right: "Gereksiz alışverişi ve gıda israfını önleme yöntemi"
                }
              ],
              trueFalse: [
                {
                  id: "tf_f7_5",
                  question: "Televizyonu kumandadan kapatıp kırmızı ışığı yanar halde bırakmak hiç elektrik harcamaz.",
                  answer: false,
                  explanation: "Stand-by bekleme modunda cihazlar az da olsa sürekli elektrik harcamaya devam eder."
                },
                {
                  id: "tf_f7_6",
                  question: "Tasarruflu musluk başlıkları ve kısa duşlar su kaynaklarımızı korur.",
                  answer: true,
                  explanation: "Su tasarrufu gelecekteki kuraklığı önlemek için hayati önem taşır."
                },
                {
                  id: "tf_f7_7",
                  question: "Bulaşıkları elde tek tek yıkamak bulaşık makinesinden daha az su harcar.",
                  answer: false,
                  explanation: "Elde yıkama 80-100 litre su harcarken bulaşık makinesi sadece 10-12 litre su kullanır."
                },
                {
                  id: "tf_f7_8",
                  question: "Yenilenebilir enerji (güneş, rüzgâr) kaynakları sürdürülebilir kalkınmayı destekler.",
                  answer: true,
                  explanation: "Doğayı kirletmeyen tükenmez kaynaklardır."
                }
              ],
              fillBlank: [
                {
                  id: "fb_f7_5",
                  sentence: "Gereksiz yere açık bırakılan lambaları kapatmak ___ tasarrufu sağlar.",
                  blank: "elektrik",
                  options: ["elektrik", "su", "zaman", "hava"],
                  tip: "Enerji tasarrufu."
                },
                {
                  id: "fb_f7_6",
                  sentence: "Gelecek kuşakların kaynaklarını tüketmeden doğayla uyumlu yaşamaya ___ denir.",
                  blank: "sürdürülebilirlik",
                  options: ["sürdürülebilirlik", "tüketim", "hızlı sanayileşme", "üretim"],
                  tip: "Geleceğe miras."
                },
                {
                  id: "fb_f7_7",
                  sentence: "Bulaşıkları elde yıkamak yerine tam dolu bulaşık ___ yıkamak büyük su tasarrufu sağlar.",
                  blank: "makinesinde",
                  options: ["makinesinde", "leğeninde", "kovasında", "küvetinde"],
                  tip: "Verimli beyaz eşya."
                },
                {
                  id: "fb_f7_8",
                  sentence: "Enerji verimliliği en yüksek olan beyaz eşyalar ___ sınıfı etiket taşır.",
                  blank: "A",
                  options: ["A", "D", "E", "F"],
                  tip: "Yeşil renkli sınıf."
                }
              ],
              quiz: [
                {
                  id: "qz_f7_5",
                  question: "Aşağıdaki davranışlardan hangisi evde SU TASARRUFU sağlamaya yönelik DOĞRU bir uygulamadır?",
                  options: [
                    "Sebze ve meyveleri akan musluk altında saatlerce yıkamak",
                    "Diş fırçalarken musluğu sürekli açık bırakmak",
                    "Bozuk ve damlatan muslukları hemen tamir ettirmek",
                    "Balkonları hortumla dakikalarca yıkamak"
                  ],
                  answer: 2,
                  explanation: "Damlatan tek bir musluk günde onlarca litre temiz suyu boşa akıtır; tamir edilmesi tasarruf sağlar."
                },
                {
                  id: "qz_f7_6",
                  question: "Evinde elektrik faturasını düşürmek ve doğayı korumak isteyen bir aile hangisini yapmalıdır?",
                  options: [
                    "Evdeki eski akkor ampulleri enerji verimliliği yüksek LED ampullerle değiştirmelidir",
                    "Tüm odaların ışıklarını sürekli açık tutmalıdır",
                    "Buzdolabının kapağını uzun süre açık bırakmalıdır",
                    "Fırın çalışırken kapağını sık sık açıp bakmalıdır"
                  ],
                  answer: 0,
                  explanation: "LED ampuller akkor ampullere göre %80 daha az enerji tüketir ve faturaları düşürür."
                },
                {
                  id: "qz_f7_7",
                  question: "Aşağıdakilerden hangisi gıda israfını önlemeye yönelik bilinçli bir tüketici davranışıdır?",
                  options: [
                    "Markete gitmeden önce ihtiyaç listesi hazırlamak ve sadece gerekeni almak",
                    "İndirimde diye ihtiyacından çok fazla çürüyebilecek meyve almak",
                    "Tabağına yiyebileceğinden çok daha fazla yemek doldurup gerisini dökmek",
                    "Tarihi geçmeye yakın gıdaları hemen çöpe atmak"
                  ],
                  answer: 0,
                  explanation: "Liste yaparak alışveriş yapmak gereksiz harcamaları ve gıdaların bozulup çöpe gitmesini önler."
                },
                {
                  id: "qz_f7_8",
                  question: "Sürdürülebilir bir dünya için bireysel olarak yapabileceğimiz EN GÜZEL katkı aşağıdakilerden hangisidir?",
                  options: [
                    "Her gün tek kullanımlık plastik şişe ve bardak satın almak",
                    "Kaynakları tasarruflu kullanıp atıkları geri dönüşüm kutularına ayrıştırmak",
                    "Çöpleri ayrıştırmadan tek poşette doğaya bırakmak",
                    "Kısa mesafelere bile hep arabayla gitmek"
                  ],
                  answer: 1,
                  explanation: "Tasarruf etmek ve atıkları geri dönüştürmek doğal dengenin korunmasına doğrudan büyük katkı sağlar."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'turkce',
      name: 'Türkçe',
      shortName: 'Türkçe',
      icon: '📖',
      color: '#EC4899',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)',
      lightBg: '#FDF2F8',
      description: 'Sözcükte anlam, okuma anlama, atasözleri ve dil bilgisi',
      units: [
        {
          id: 'tur_u1',
          unitNumber: 1,
          title: 'Sözcükte Anlam Dünyası',
          description: 'Gerçek anlam, mecaz anlam, terim anlam ve sözcük ilişkileri',
          topics: [
            {
              id: 'tur_u1_t1',
              title: 'Gerçek, Mecaz ve Terim Anlam',
              kazanimCode: 'TÜR.5.1.1',
              kazanimDesc: 'Kelimelerin gerçek, mecaz ve terim anlamlarını ayırt eder ve uygun şekilde kullanır.',
              summary: `
• **Gerçek Anlam (Temel Anlam):** Bir sözcüğün akla gelen ilk anlamı ve sözlükteki birinci tanımıdır.
• **Mecaz Anlam:** Bir sözcüğün gerçek anlamından tamamen uzaklaşarak kazandığı yeni, soyut ve benzetmeli anlamdır.
• **Terim Anlam:** Bilim, sanat, spor veya meslek dalına özgü özel kavramları karşılayan sözcüklerdir (Örn: Nota, açı, korner, hücre).
              `,
              keyConcepts: ['Gerçek Anlam', 'Mecaz Anlam', 'Terim Anlam', 'Somut / Soyut'],
              flashcards: [
                {
                  id: 'fc_tur_1',
                  front: 'Gerçek anlam ne demektir?',
                  back: 'Sözcüğün söylendiğinde akla gelen İLK ve temel anlamıdır.',
                  tip: 'Örn: "Çorba çok sıcaktı." cümlesindeki "sıcak" ısı bildirdiği için gerçek anlamdır.',
                  example: 'Ateş, koku, taş gibi fiziksel algılanabilen temel haller.'
                },
                {
                  id: 'fc_tur_2',
                  front: 'Mecaz anlam nasıl anlaşılır?',
                  back: 'Sözcük gerçek manasından kopup duygusal veya soyut bir durumu anlattığında mecaz olur.',
                  tip: 'Örn: "Bize çok sıcak davrandı." (Burada sıcak ısı değil, samimi/içten demektir).',
                  example: '"Sözleriyle kalbimi kırdı." (Kalp fiziksel olarak parçalanmaz).'
                },
                {
                  id: 'fc_tur_3',
                  front: 'Terim anlam nedir?',
                  back: 'Belli bir bilim, spor, sanat veya mesleğe ait özel kavram sözcükleridir.',
                  tip: 'Hangi alana ait olduğunu sor kendine: Matematik mi, Müzik mi, Futbol mu?',
                  example: 'Üçgen, penaltı, porte, palet, mikroskop birer terimdir.'
                }
              ],
              matching: [
                { id: 'm_tur_1', left: 'Bize çok soğuk davrandı.', right: 'Mecaz Anlam' },
                { id: 'm_tur_2', left: 'Su kaynayınca tencere taştı.', right: 'Gerçek Anlam' },
                { id: 'm_tur_3', left: 'Hakem penaltı noktasını gösterdi.', right: 'Terim Anlam' },
                { id: 'm_tur_4', left: 'Ağır kutuyu tek başına taşıdı.', right: 'Gerçek Anlam' }
              ],
              trueFalse: [
                {
                  id: 'tf_tur_1',
                  text: '"Yalanları ortaya çıkınca gözümden düştü" cümlesinde "düşmek" mecaz anlamdadır.',
                  isTrue: true,
                  explanation: 'Doğru! Burada fiziksel bir düşme yoktur, değerini/güvenini kaybetmek anlamında mecazdır.'
                },
                {
                  id: 'tf_tur_2',
                  text: '"Öğretmenimiz tahtaya bir doğru parçası çizdi" cümlesindeki doğru sözcüğü terim anlamdır.',
                  isTrue: true,
                  explanation: 'Doğru! Matematik ve geometri bilimine ait özel bir kavram olduğu için terimdir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_tur_1',
                  sentence: 'Bir sözcüğün bilim, sanat ya da meslek dalıyla ilgili kazandığı özel anlama ___ anlam denir.',
                  options: ['terim', 'mecaz', 'gerçek', 'yan'],
                  correctWord: 'terim',
                  hint: 'Açı, perde, nota gibi sözcükler.'
                }
              ],
              quiz: [
                {
                  id: 'q_tur_1',
                  question: 'Aşağıdaki cümlelerin hangisinde "keskin" sözcüğü mecaz anlamda kullanılmıştır?',
                  options: [
                    'Keskin bir zekâsı olduğu hemen anlaşılıyordu.',
                    'Kasap, keskin bıçakla eti kolayca dilimledi.',
                    'Makas yeterince keskin değildi.',
                    'Keskin cam kırıkları yere saçıldı.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Zekânın fiziki olarak kesici bir kenarı olabilir mi?',
                  explanation: '"Keskin zekâ" ifadesinde mecazen çabuk kavrayan, parlak anlamında kullanılmıştır.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'sosyal',
      name: 'Sosyal Bilgiler',
      shortName: 'Sosyal Bilgiler',
      icon: '🌍',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      lightBg: '#FFFBEB',
      description: 'Tarihimiz, kültürümüz, haklarımız ve coğrafyamız',
      units: [
        {
          id: 'sos_u1',
          unitNumber: 1,
          title: 'Birlikte Yaşıyoruz',
          description: 'Toplumda rollerimiz, haklarımız, sorumluluklarımız ve kurallar',
          topics: [
            {
              id: 'sos_u1_t1',
              title: 'Haklarım, Sorumluluklarım ve Rollerim',
              kazanimCode: 'SOS.5.1.1',
              kazanimDesc: 'İçinde bulunduğu gruplar ve roller ile hak ve sorumlulukları arasındaki ilişkiyi açıklar.',
              summary: `
• **Rol:** Bir kimsenin içinde bulunduğu grup veya toplulukta üstlendiği görev ve konumdur (Örn: Ailede evlat, okulda öğrenci, takımda kaleci).
• Kişiler gün içinde aynı anda birden fazla role sahip olabilirler.
• **Hak:** Kanunların ve ahlaki değerlerin bize tanıdığı yetkilerdir (Eğitim hakkı, oyun oynama hakkı, sağlık hakkı).
• **Sorumluluk:** Üstlendiğimiz rollerin gerektirdiği ödevleri ve davranışları yerine getirmektir.
              `,
              keyConcepts: ['Rol', 'Hak', 'Sorumluluk', 'Grup', 'Sosyal Kulüpler'],
              flashcards: [
                {
                  id: 'fc_sos_1',
                  front: 'Rol nedir?',
                  back: 'Bireyin dahil olduğu grup ya da kurumlarda üstlendiği konum ve görevdir.',
                  tip: 'Aynı gün içinde hem kardeş, hem öğrenci, hem de müzik kulübü üyesi olabilirsin!',
                  example: 'Sınıfta "öğrenci", evde "çocuk" rolündeyiz.'
                },
                {
                  id: 'fc_sos_2',
                  front: 'Hak ile Sorumluluk arasındaki fark nedir?',
                  back: 'Hak bize tanınan koruma ve yetkidir; sorumluluk ise yapmamız gereken görevlerdir.',
                  tip: 'Okula gitmek hakkımız, dersi dinleyip ödevimizi yapmak sorumluluğumuzdur.',
                  example: 'Oyun oynamak bir çocuk hakkıdır, oyuncakları toplamak ise sorumluluktur.'
                }
              ],
              matching: [
                { id: 'm_sos_1', left: 'Eğitim Görmek', right: 'Temel bir Hak' },
                { id: 'm_sos_2', left: 'Odası Düzenli Tutmak', right: 'Bir Sorumluluk' },
                { id: 'm_sos_3', left: 'Basketbol Takımında Kaptan Olmak', right: 'Bir Rol' }
              ],
              trueFalse: [
                {
                  id: 'tf_sos_1',
                  text: 'Bir insan hayatı boyunca sadece tek bir role sahip olabilir.',
                  isTrue: false,
                  explanation: 'Yanlış! İnsanlar aynı anda evlat, abi, öğrenci, sporcu gibi birçok role sahip olabilir.'
                },
                {
                  id: 'tf_sos_2',
                  text: 'Haklarımız sınırsızdır, başkalarını rahatsız etse bile istediğimizi yapabiliriz.',
                  isTrue: false,
                  explanation: 'Yanlış! Haklarımız başkalarının haklarının başladığı yerde sınır bulur.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_sos_1',
                  sentence: 'Bir kişinin üstlendiği rolün gerektirdiği görevleri yerine getirmesine ___ denir.',
                  options: ['sorumluluk', 'hak', 'özgürlük', 'meslek'],
                  correctWord: 'sorumluluk',
                  hint: 'Ödevimizi yapmak bir...'
                }
              ],
              quiz: [
                {
                  id: 'q_sos_1',
                  question: 'Aşağıdakilerden hangisi 5. sınıf öğrencisi olan bir çocuğun evdeki sorumluluklarından biridir?',
                  options: [
                    'Odasını ve çalışma masasını düzenli tutmak',
                    'Ailesinin tüm faturalarını ödemek',
                    'Evin kira sözleşmesini imzalamak',
                    'İşe gidip para kazanmak'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Çocuğun kendi yaşına uygun görevini düşün.',
                  explanation: 'Odasını toplamak çocuğun aile içindeki yaş grubuna uygun temel sorumluluğudur.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'ingilizce',
      name: 'İngilizce',
      shortName: 'English',
      icon: '🇬🇧',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
      lightBg: '#F5F3FF',
      description: 'Hello, countries, daily routines, town and hobbies',
      units: [
        {
          id: 'eng_u1',
          unitNumber: 1,
          title: 'Hello! (Unit 1)',
          description: 'Greetings, meeting people, countries and nationalities',
          topics: [
            {
              id: 'eng_u1_t1',
              title: 'Greetings & Countries / Nationalities',
              kazanimCode: 'ENG.5.1.1',
              kazanimDesc: 'Students can introduce themselves and state their nationality and country.',
              summary: `
• **Greeting (Selamlaşma):** Hello, Hi, Good morning, Nice to meet you!
• **Asking Name:** "What is your name?" -> "My name is Can."
• **Asking Origin / Country:** "Where are you from?" -> "I am from Türkiye."
• **Asking Nationality:** "What nationality are you?" -> "I am Turkish."
• **Favorite School Subjects:** Maths, Science, Turkish, Social Studies, Art, P.E.
              `,
              keyConcepts: ['Country', 'Nationality', 'Where are you from?', 'Greetings'],
              flashcards: [
                {
                  id: 'fc_eng_1',
                  front: '"Where are you from?" sorusuna nasıl cevap verilir?',
                  back: '"I am from Türkiye." (Ülke ismi söylenir)',
                  tip: '"From" görüyorsan ülkeyi (Türkiye, England, Spain, Germany) seçmelisin!',
                  example: 'I am from Italy.'
                },
                {
                  id: 'fc_eng_2',
                  front: '"What nationality are you?" ne demektir?',
                  back: '"Hangi milliyettensin?" anlamına gelir ve milliyet ile cevap verilir.',
                  tip: 'Örn: "I am Turkish", "I am English", "I am Japanese".',
                  example: 'I am French.'
                }
              ],
              matching: [
                { id: 'm_eng_1', left: 'Türkiye', right: 'Turkish' },
                { id: 'm_eng_2', left: 'England', right: 'English' },
                { id: 'm_eng_3', left: 'Germany', right: 'German' },
                { id: 'm_eng_4', left: 'Japan', right: 'Japanese' }
              ],
              trueFalse: [
                {
                  id: 'tf_eng_1',
                  text: '"I am from Turkish" cümlesi dil bilgisi açısından tamamen doğrudur.',
                  isTrue: false,
                  explanation: 'Yanlış! "from" kelimesinden sonra ülke gelmelidir: "I am from Türkiye" doğrusudur.'
                },
                {
                  id: 'tf_eng_2',
                  text: '"Nice to meet you" ifadesi "Tanıştığımıza memnun oldum" anlamına gelir.',
                  isTrue: true,
                  explanation: 'Doğru! Biriyle ilk tanışmada nezaket ifadesi olarak söylenir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_eng_1',
                  sentence: '— Where are you from? — I am from ___ .',
                  options: ['Spain', 'Spanish', 'Japanese', 'German'],
                  correctWord: 'Spain',
                  hint: '"from" sözcüğünden sonra ülke ismi gelir.'
                }
              ],
              quiz: [
                {
                  id: 'q_eng_1',
                  question: '— What nationality are you? — I am ___ .',
                  options: ['Turkish', 'Türkiye', 'France', 'Italy'],
                  correctAnswerIndex: 0,
                  hint: 'Milliyet bildiren kelimeyi seçmelisin.',
                  explanation: '"Turkish" bir milliyettir (Türk). Diğer şıklar ülke isimleridir.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'din',
      name: 'Din Kültürü ve Ahlak Bilgisi',
      shortName: 'Din Kültürü',
      icon: '🌙',
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
      lightBg: '#ECFEFF',
      description: 'Allah inancı, ibadetler, ahlaki değerler ve peygamberler',
      units: [
        {
          id: 'din_u1',
          unitNumber: 1,
          title: 'Allah İnancı',
          description: 'Evrendeki mükemmel düzen, Allahın sıfatları ve İhlas Suresi',
          topics: [
            {
              id: 'din_u1_t1',
              title: 'Allah Vardır ve Birdir',
              kazanimCode: 'DİN.5.1.1',
              kazanimDesc: 'Evrendeki mükemmel düzen ile Allah\'ın varlığı ve birliği arasında bağ kurar.',
              summary: `
• Evrendeki gezegenlerin yörüngeleri, mevsimlerin ardı ardına gelmesi, gece ve gündüzün oluşumu kusursuz bir düzenin varlığını gösterir.
• Her sanat eseri bir ustayı, her düzen bir kurucuyu işaret ettiği gibi evrendeki bu nizam da **Yüce Allah'ın** eseridir.
• **Tevhid:** Allah'ın bir ve tek olduğuna, hiçbir ortağının bulunmadığına inanmaktır.
• İhlas Suresi, tevhid inancını en güzel şekilde özetleyen suredir.
              `,
              keyConcepts: ['Tevhid', 'Evrendeki Düzen', 'Yaratıcı', 'İhlas Suresi'],
              flashcards: [
                {
                  id: 'fc_din_1',
                  front: 'Tevhid inancı ne demektir?',
                  back: 'Allah\'ın tek ve bir olduğuna, eşi ve benzeri olmadığına inanmaktır.',
                  tip: 'İhlas suresindeki "Kul hüvallâhü ehad" (De ki: O Allah birdir) ayeti tevhiddir.',
                  example: '"Lâ ilâhe illallâh" demek tevhid kelimesidir.'
                }
              ],
              matching: [
                { id: 'm_din_1', left: 'Tevhid', right: 'Allahın bir ve tek olduğuna inanmak' },
                { id: 'm_din_2', left: 'Evrendeki Düzen', right: 'Mevsimlerin ve gece-gündüzün kusursuz oluşumu' },
                { id: 'm_din_3', left: 'İhlas Suresi', right: 'Allahın birliğini anlatan sure' }
              ],
              trueFalse: [
                {
                  id: 'tf_din_1',
                  text: 'Mevsimlerin birbirini takip etmesi evrendeki tesadüfün bir sonucudur.',
                  isTrue: false,
                  explanation: 'Yanlış! Bu ahenk, Yüce Yaratıcı\'nın koyduğu kusursuz ölçü ve düzenin göstergesidir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_din_1',
                  sentence: 'Allah\'ın var ve bir olduğunu, eşi ve benzeri olmadığını kabul etmeye ___ inancı denir.',
                  options: ['tevhid', 'amel', 'kader', 'hac'],
                  correctWord: 'tevhid',
                  hint: 'Birlemek anlamına gelir.'
                }
              ],
              quiz: [
                {
                  id: 'q_din_1',
                  question: 'Aşağıdakilerden hangisi evrendeki ölçü ve düzeni gösteren örneklerden biri DEĞİLDİR?',
                  options: [
                    'Trafikte kırmızı ışığa uymayan sürücünün kaza yapması',
                    'Gezegenlerin birbirine çarpmadan belirli bir yörüngede dönmesi',
                    'Dünya ile Güneş arasındaki mesafenin canlı yaşamına tam uygun olması',
                    'Gece ve gündüzün ardı ardına düzenli gelmesi'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Doğal evren kanunları ile insanların trafik ihlallerini ayırt etmelisin.',
                  explanation: 'Trafik kazası insanların kurallara uymamasından kaynaklanır; diğerleri ise evrenin yaratılışındaki ilahi düzendir.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'almanca',
      name: 'Almanca (Deutsch)',
      shortName: 'Almanca',
      icon: '🇩🇪',
      color: '#EA580C',
      gradient: 'linear-gradient(135deg, #F97316 0%, #C2410C 100%)',
      lightBg: '#FFF7ED',
      description: 'Çoklu Yabancı Dil: Begrüßung, sich vorstellen, das Alphabet ve konuşma kalıpları',
      units: [
        {
          id: 'de_u1',
          unitNumber: 1,
          title: 'Lektion 1: Ich und Du',
          description: 'Selamlaşma, kendini tanıtma, hal-hatır sorma ve Almanca alfabe',
          topics: [
            {
              id: 'de_u1_t1',
              title: 'Begrüßen und Verabschieden (Selamlaşma ve Vedalaşma)',
              kazanimCode: 'DE.5.1.W2.1',
              kazanimDesc: 'Almanca temel selamlaşma ve vedalaşma kalıplarını tanır, anlamına uygun kullanır ve sesli telaffuz eder.',
              summary: `
• **Begrüßen (Selamlaşma):**
  - **Hallo!:** Merhaba (Gün boyu samimi)
  - **Guten Morgen!:** Günaydın (Sabah saatlerinde)
  - **Guten Tag!:** İyi günler (Öğleden akşama kadar)
  - **Guten Abend!:** İyi akşamlar
• **Verabschieden (Vedalaşma):**
  - **Tschüss!:** Hoşça kal / Güle güle (Samimi ve en yaygın vedalaşma)
  - **Auf Wiedersehen!:** Görüşmek üzere / Tekrar görüşünceye dek (Resmî/Nezaket)
  - **Bis bald!:** Yakında görüşürüz
  - **Gute Nacht!:** İyi geceler (Yatarken söylenir, bu yüzden vedalaşma sayılır!)
• **İpucu:** Almancada "Gute Nacht" ifadesinde "Guten" değil **"Gute"** denir!
              `,
              keyConcepts: ['Hallo', 'Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht', 'Tschüss', 'Auf Wiedersehen', 'Bis bald'],
              pronunciationPhrases: [
                {
                  german: 'Hallo!',
                  turkish: 'Merhaba!',
                  phonetic: 'Halo',
                  category: 'Begrüßung'
                },
                {
                  german: 'Guten Morgen!',
                  turkish: 'Günaydın!',
                  phonetic: 'Guten Morgen',
                  category: 'Begrüßung'
                },
                {
                  german: 'Guten Tag!',
                  turkish: 'İyi günler!',
                  phonetic: 'Guten Tak',
                  category: 'Begrüßung'
                },
                {
                  german: 'Guten Abend!',
                  turkish: 'İyi akşamlar!',
                  phonetic: 'Guten Abınt',
                  category: 'Begrüßung'
                },
                {
                  german: 'Gute Nacht!',
                  turkish: 'İyi geceler!',
                  phonetic: 'Gute Naht',
                  category: 'Verabschiedung'
                },
                {
                  german: 'Tschüss!',
                  turkish: 'Hoşça kal! / Bay bay!',
                  phonetic: 'Çüüs',
                  category: 'Verabschiedung'
                },
                {
                  german: 'Auf Wiedersehen!',
                  turkish: 'Yeniden görüşmek üzere!',
                  phonetic: 'Auf Viidırzeeın',
                  category: 'Verabschiedung'
                },
                {
                  german: 'Bis bald!',
                  turkish: 'Yakında görüşürüz!',
                  phonetic: 'Bis balt',
                  category: 'Verabschiedung'
                }
              ],
              flashcards: [
                {
                  id: 'fc_de_1',
                  front: 'Hallo!',
                  back: 'Merhaba!',
                  tip: 'Arkadaşlarına ve günün her saatinde rahatlıkla söyleyebilirsin.',
                  example: 'Hallo, Ali! Wie geht\'s?'
                },
                {
                  id: 'fc_de_2',
                  front: 'Guten Morgen!',
                  back: 'Günaydın!',
                  tip: 'Sabah saatlerinde kullanılır. (Morgen = Sabah)',
                  example: 'Guten Morgen, Frau Müller!'
                },
                {
                  id: 'fc_de_3',
                  front: 'Tschüss!',
                  back: 'Hoşça kal! / Güle güle!',
                  tip: 'Günlük hayatta arkadaşlara vedalaşırken en çok kullanılan ifadedir.',
                  example: 'Tschüss, bis morgen!'
                },
                {
                  id: 'fc_de_4',
                  front: 'Auf Wiedersehen!',
                  back: 'Tekrar görüşmek üzere! (Resmî vedalaşma)',
                  tip: 'Wieder = tekrar, sehen = görmek. "Yeniden görüşene kadar" demektir.',
                  example: 'Auf Wiedersehen, Herr Schmidt!'
                },
                {
                  id: 'fc_de_5',
                  front: 'Neden "Guten Nacht" değil de "Gute Nacht" denir?',
                  back: 'Çünkü "Nacht" (gece) kelimesinin artikeli "die" olduğu için sonuna -en değil -e gelir: Gute Nacht!',
                  tip: 'Yatmadan önce iyi geceler dilerken her zaman "Gute Nacht" deriz.',
                  example: 'Gute Nacht, Mama!'
                }
              ],
              matching: [
                { id: 'm_de_1', left: 'Guten Morgen', right: 'Günaydın' },
                { id: 'm_de_2', left: 'Guten Tag', right: 'İyi günler' },
                { id: 'm_de_3', left: 'Auf Wiedersehen', right: 'Yeniden görüşmek üzere' },
                { id: 'm_de_4', left: 'Bis bald', right: 'Yakında görüşürüz' },
                { id: 'm_de_5', left: 'Tschüss', right: 'Hoşça kal' }
              ],
              trueFalse: [
                {
                  id: 'tf_de_1',
                  text: 'Almancada "Gute Nacht" sabah uyanıldığında günaydın anlamında kullanılır.',
                  isTrue: false,
                  explanation: 'Yanlış! "Gute Nacht" gece yatarken iyi geceler / hoşça kal anlamında söylenir. Sabah "Guten Morgen" denir.'
                },
                {
                  id: 'tf_de_2',
                  text: '"Tschüss!" ifadesi arkadaşlar arasında samimi bir vedalaşma sözüdür.',
                  isTrue: true,
                  explanation: 'Doğru! Türkçe karşılığı "Hoşça kal / bay bay" olup çok yaygın bir vedalaşmadır.'
                },
                {
                  id: 'tf_de_3',
                  text: '"Bis bald" ifadesi "Yakında görüşürüz" anlamına gelir.',
                  isTrue: true,
                  explanation: 'Doğru! "Bis" = kadar/dek, "bald" = yakında demektir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_de_1',
                  sentence: 'Sabah okula geldiğinde öğretmenine "Guten ___ !" dersin.',
                  options: ['Morgen', 'Nacht', 'Abend', 'Tschüss'],
                  correctWord: 'Morgen',
                  hint: 'Sabah anlamına gelen sözcüğü seç.'
                },
                {
                  id: 'fb_de_2',
                  sentence: 'Arkadaşından ayrılırken "Görüşürüz" demek için "Bis ___ !" diyebilirsin.',
                  options: ['bald', 'Guten', 'Hallo', 'Wer'],
                  correctWord: 'bald',
                  hint: '"Bis" sözcüğünden sonra "yakında" anlamına gelen sözcük gelir.'
                },
                {
                  id: 'fb_de_3',
                  sentence: 'Gece uyumadan önce ailemize "___ Nacht!" deriz.',
                  options: ['Gute', 'Guten', 'Bis', 'Hallo'],
                  correctWord: 'Gute',
                  hint: 'Nacht sözcüğü ile Guten değil Gute kullanılır.'
                }
              ],
              quiz: [
                {
                  id: 'q_de_1',
                  question: 'Akşam saat 19:00\'da karşılaştığın bir arkadaşına hangi Almanca selamı vermelisin?',
                  options: [
                    'Guten Abend!',
                    'Guten Morgen!',
                    'Gute Nacht!',
                    'Auf Wiedersehen!'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Abend = Akşam demektir.',
                  explanation: 'Akşam vakti selamlaşırken "Guten Abend!" (İyi akşamlar) denir.'
                },
                {
                  id: 'q_de_2',
                  question: 'Aşağıdakilerden hangisi bir SELAMLAŞMA (Begrüßung) DEĞİLDİR, vedalaşmadır?',
                  options: [
                    'Auf Wiedersehen!',
                    'Guten Morgen!',
                    'Hallo!',
                    'Guten Tag!'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Ayrılırken tekrar görüşmek üzere derken hangisi söylenir?',
                  explanation: '"Auf Wiedersehen!" vedalaşırken (ayrılırken) söylenir, diğerleri ise karşılaşınca selamlaşma ifadeleridir.'
                }
              ]
            },
            {
              id: 'de_u1_t2',
              title: 'Sich vorstellen & Nach dem Befinden fragen (Tanışma & Hal Hatır)',
              kazanimCode: 'DE.5.1.SP3.3',
              kazanimDesc: 'Kendini ve adını ifade eder, karşısındakine adını ve durumunu (hal-hatır) sorup uygun cevap verir.',
              summary: `
• **İsim Sorma ve Söyleme (Sich vorstellen):**
  - **Wie heißt du?:** Senin adın ne?
  - **Ich heiße Aylin.:** Benim adım Aylin.
  - **Wer bist du?:** Sen kimsin?
  - **Ich bin Can.:** Ben Can'ım.
  - **Mein Name ist Jonas.:** Benim adım Jonas.
• **Hal - Hatır Sorma (Nach dem Befinden fragen):**
  - **Wie geht's?** veya **Wie geht es dir?:** Nasılsın?
  - **Danke, gut!:** Teşekkürler, iyiyim!
  - **Sehr gut! / Prima! / Super!:** Çok iyi! / Harika!
  - **Es geht.:** Şöyle böyle / İdare eder.
  - **Nicht so gut.:** Pek iyi değil.
  - **Und dir?:** Ya sen? / Ya sana nasıl gidiyor?
• **Kalıp:** "Danke, gut! Und dir?" (Teşekkürler, iyiyim! Ya sen?)
              `,
              keyConcepts: ['Wie heißt du?', 'Ich heiße', 'Wer bist du?', 'Ich bin', 'Wie geht es dir?', 'Danke gut', 'Und dir?'],
              pronunciationPhrases: [
                {
                  german: 'Wie heißt du?',
                  turkish: 'Senin adın ne?',
                  phonetic: 'Vii hayst du?',
                  category: 'Frage'
                },
                {
                  german: 'Ich heiße Mehmet.',
                  turkish: 'Benim adım Mehmet.',
                  phonetic: 'İh hayse Mehmet.',
                  category: 'Antwort'
                },
                {
                  german: 'Wer bist du?',
                  turkish: 'Sen kimsin?',
                  phonetic: 'Ver bist du?',
                  category: 'Frage'
                },
                {
                  german: 'Ich bin Elif.',
                  turkish: 'Ben Elif.',
                  phonetic: 'İh bin Elif.',
                  category: 'Antwort'
                },
                {
                  german: 'Wie geht es dir?',
                  turkish: 'Nasılsın? (Nasıl gidiyor?)',
                  phonetic: 'Vii geet es diir?',
                  category: 'Befinden'
                },
                {
                  german: 'Danke, gut!',
                  turkish: 'Teşekkürler, iyiyim!',
                  phonetic: 'Danke, gut!',
                  category: 'Befinden'
                },
                {
                  german: 'Sehr gut!',
                  turkish: 'Çok iyi! / Harika!',
                  phonetic: 'Zeer gut!',
                  category: 'Befinden'
                },
                {
                  german: 'Es geht.',
                  turkish: 'Şöyle böyle / İdare eder.',
                  phonetic: 'Es geet.',
                  category: 'Befinden'
                },
                {
                  german: 'Und dir?',
                  turkish: 'Ya sen? (Sana nasıl?)',
                  phonetic: 'Unt diir?',
                  category: 'Frage'
                }
              ],
              flashcards: [
                {
                  id: 'fc_de_v1',
                  front: '"Wie heißt du?" sorusuna nasıl cevap verilir?',
                  back: '"Ich heiße ..." (Örn: Ich heiße Can.) veya "Ich bin Can."',
                  tip: 'Almancada "heißen" fiili adlandırılmak/adı olmak demektir.',
                  example: '— Wie heißt du? — Ich heiße Defne.'
                },
                {
                  id: 'fc_de_v2',
                  front: '"Wie geht es dir?" ne demektir?',
                  back: '"Nasılsın?" (Nasıl gidiyor?) demektir.',
                  tip: 'Kısaca arkadaşlarına "Wie geht\'s?" şeklinde de sorabilirsin.',
                  example: '— Wie geht\'s? — Danke, sehr gut!'
                },
                {
                  id: 'fc_de_v3',
                  front: 'Almancada "Ve sen? / Ya sen nasılsın?" nasıl denir?',
                  back: '"Und dir?" denir.',
                  tip: 'Biri sana "Danke gut!" dediğinde nezaketen "Und dir?" diye sorarsın.',
                  example: 'Danke, gut! Und dir?'
                },
                {
                  id: 'fc_de_v4',
                  front: '"Wer bist du?" ne demektir?',
                  back: '"Sen kimsin?" demektir.',
                  tip: 'Cevap: "Ich bin ..." (Ben ...\'yım)',
                  example: 'Ich bin Lukas.'
                }
              ],
              matching: [
                { id: 'm_de_v1', left: 'Wie heißt du?', right: 'Senin adın ne?' },
                { id: 'm_de_v2', left: 'Ich bin...', right: 'Ben ...\'yım' },
                { id: 'm_de_v3', left: 'Wie geht es dir?', right: 'Nasılsın?' },
                { id: 'm_de_v4', left: 'Danke, prima!', right: 'Teşekkürler, harika!' },
                { id: 'm_de_v5', left: 'Es geht', right: 'İdare eder / Şöyle böyle' }
              ],
              trueFalse: [
                {
                  id: 'tf_de_v1',
                  text: '"Ich heiße Emre" cümlesi "Ben Emre\'yim / Benim adım Emre" demektir.',
                  isTrue: true,
                  explanation: 'Doğru! "heißen" adı olmak demektir; "Ich heiße Emre" kendimizi tanıtırken kullanılır.'
                },
                {
                  id: 'tf_de_v2',
                  text: '"Wie geht es dir?" sorusuna "Ich bin zehn Jahre alt" şeklinde cevap verilir.',
                  isTrue: false,
                  explanation: 'Yanlış! "Wie geht es dir?" hal-hatır sorar (Nasılsın?). Yaş cevabı verilemez; "Danke, gut!" denmelidir.'
                },
                {
                  id: 'tf_de_v3',
                  text: 'Arkadaşımıza kısaca halini sormak için "Wie geht\'s?" diyebiliriz.',
                  isTrue: true,
                  explanation: 'Doğru! "Wie geht\'s?", "Wie geht es dir?" ifadesinin günlük dildeki pratik kısaltmasıdır.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_de_v1',
                  sentence: '— Wie heißt du? — ___ heiße Kerem.',
                  options: ['Ich', 'Du', 'Wer', 'Wie'],
                  correctWord: 'Ich',
                  hint: '"Ben" anlamına gelen Almanca zamir.'
                },
                {
                  id: 'fb_de_v2',
                  sentence: '— Wie geht es dir? — ___, gut! Und dir?',
                  options: ['Danke', 'Hallo', 'Tschüss', 'Morgen'],
                  correctWord: 'Danke',
                  hint: 'Nezaket bildiren "Teşekkürler" sözcüğü.'
                }
              ],
              quiz: [
                {
                  id: 'q_de_v1',
                  question: 'Biri sana "Wie geht es dir?" diye sorduğunda en uygun cevap hangisidir?',
                  options: [
                    'Danke, sehr gut! Und dir?',
                    'Ich heiße Markus.',
                    'Auf Wiedersehen!',
                    'Guten Morgen!'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Hal-hatır sorusuna durumunu belirterek cevap vermelisin.',
                  explanation: '"Wie geht es dir?" nasılsın demektir. "Danke, sehr gut! Und dir?" (Teşekkürler çok iyiyim, ya sen?) doğru cevaptır.'
                },
                {
                  id: 'q_de_v2',
                  question: '— Wer bist du? — ___ bin Mia.',
                  options: [
                    'Ich',
                    'Du',
                    'Er',
                    'Sie'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Ben Mia\'yım derken özne ne olmalıdır?',
                  explanation: '"bin" fiili "Ich" (Ben) öznesiyle çekimlenir: "Ich bin Mia."'
                }
              ]
            },
            {
              id: 'de_u1_t3',
              title: 'Das Alphabet und Buchstabieren (Almanca Alfabe & Harf Kodlama)',
              kazanimCode: 'DE.5.1.P3.1',
              kazanimDesc: 'Almanca alfabesindeki harfleri tanır, özel sesleri (ä, ö, ü, ß) telaffuz eder ve ismini harf harf kodlar (buchstabieren).',
              summary: `
• Almanca alfabesinde standart Latin harflerine ek olarak **4 özel harf** vardır:
  - **Ä / ä:** [e] sesine benzer (A-Umlaut) Örn: Äpfel
  - **Ö / ö:** [ö] sesi (O-Umlaut) Örn: Öl, schön
  - **Ü / ü:** [ü] sesi (U-Umlaut) Örn: Über, Schüler
  - **ß:** "Eszett" veya "Scharfes S" (Çift s / keskin s sesi) Örn: heißen, Fußball
• **Buchstabieren (Harf Harf Kodlama):**
  - "Wie schreibt man das?" = Bu nasıl yazılır?
  - "Kannst du das buchstabieren?" = Harf harf kodlar mısın?
• Bazı Harflerin Almanca Okunuşları:
  - **J:** [Yot] (Örn: Jonas -> [Yonas])
  - **V:** [Fau] (f sesi verir! Örn: Vater -> [Fater])
  - **W:** [Ve] (Örn: Wie -> [Vii])
  - **Z:** [Tset] (ts sesi verir! Örn: Zug -> [Tsuk])
  - **S:** Ünlü harften önce gelirse [Z] sesi verir! Örn: Sonne -> [Zonne]
              `,
              keyConcepts: ['Das Alphabet', 'Buchstabieren', 'Umlaut (ä, ö, ü)', 'Eszett (ß)', 'Wie schreibt man das?'],
              pronunciationPhrases: [
                {
                  german: 'Wie schreibt man das?',
                  turkish: 'Bu nasıl yazılır?',
                  phonetic: 'Vii şraypt man das?',
                  category: 'Buchstabieren'
                },
                {
                  german: 'Buchstabiere bitte!',
                  turkish: 'Lütfen harf harf kodla!',
                  phonetic: 'Buhştabiire bite!',
                  category: 'Buchstabieren'
                },
                {
                  german: 'Ä - A-Umlaut',
                  turkish: 'Ä harfi (e sesi verir)',
                  phonetic: 'E',
                  category: 'Alphabet'
                },
                {
                  german: 'Ö - O-Umlaut',
                  turkish: 'Ö harfi',
                  phonetic: 'Öö',
                  category: 'Alphabet'
                },
                {
                  german: 'Ü - U-Umlaut',
                  turkish: 'Ü harfi',
                  phonetic: 'Üü',
                  category: 'Alphabet'
                },
                {
                  german: 'ß - Eszett',
                  turkish: 'ß (Keskin çift s sesi)',
                  phonetic: 'Es-tset',
                  category: 'Alphabet'
                },
                {
                  german: 'J wie Jonas',
                  turkish: 'J harfi (Yot olarak okunur)',
                  phonetic: 'Yot',
                  category: 'Alphabet'
                },
                {
                  german: 'V wie Vater',
                  turkish: 'V harfi (Fau olarak okunur ve f sesi verir)',
                  phonetic: 'Fau',
                  category: 'Alphabet'
                }
              ],
              flashcards: [
                {
                  id: 'fc_de_a1',
                  front: 'Almancadaki "ß" harfine ne denir ve nasıl okunur?',
                  back: '"Eszett" (veya Scharfes S) denir. Keskin "s" sesi verir.',
                  tip: '"heißen" (adı olmak) veya "Fußball" (futbol) sözcüklerinde bulunur.',
                  example: 'Ich heiße...'
                },
                {
                  id: 'fc_de_a2',
                  front: 'Almancada "V" harfi kelime başında genellikle hangi sesi verir?',
                  back: '"F" sesi verir! (Adı "Fau" dur)',
                  tip: 'Örn: "Vater" (baba) kelimesi [Fater] diye okunur.',
                  example: 'Vier (dört) kelimesi [Fiir] okunur.'
                },
                {
                  id: 'fc_de_a3',
                  front: '"Wie schreibt man das?" sorusu ne anlama gelir?',
                  back: '"Bu nasıl yazılır?" anlamına gelir.',
                  tip: 'Bir kelimenin harflerini öğrenmek istediğinde bu soruyu sorarsın.',
                  example: 'Wie schreibt man das? — M-E-H-M-E-T'
                }
              ],
              matching: [
                { id: 'm_de_a1', left: 'ß', right: 'Eszett (Scharfes S)' },
                { id: 'm_de_a2', left: 'J harfi', right: 'Yot olarak okunur (Y sesi)' },
                { id: 'm_de_a3', left: 'V harfi', right: 'Fau olarak okunur (F sesi)' },
                { id: 'm_de_a4', left: 'W harfi', right: 'Ve olarak okunur' }
              ],
              trueFalse: [
                {
                  id: 'tf_de_a1',
                  text: 'Almancada Ä, Ö ve Ü harflerine "Umlaut" adı verilir.',
                  isTrue: true,
                  explanation: 'Doğru! Noktalı harflere Almancada "Umlaut" (ses değişimi) denir.'
                },
                {
                  id: 'tf_de_a2',
                  text: 'Almancada "J" harfi Türkçe "C" gibi okunur.',
                  isTrue: false,
                  explanation: 'Yanlış! Almancada "J" harfi "Yot" olarak adlandırılır ve Türkçedeki "Y" sesini verir (Jonas -> Yonas).'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_de_a1',
                  sentence: 'Almancada keskin çift s sesini veren "ß" harfinin adı ___ dir.',
                  options: ['Eszett', 'Umlaut', 'Yot', 'Fau'],
                  correctWord: 'Eszett',
                  hint: 'Scharfes S olarak da bilinir.'
                }
              ],
              quiz: [
                {
                  id: 'q_de_a1',
                  question: 'Almanca bir kelimenin nasıl yazıldığını veya harflerini sormak için hangisi söylenir?',
                  options: [
                    'Wie schreibt man das?',
                    'Wie alt bist du?',
                    'Woher kommst du?',
                    'Guten Abend!'
                  ],
                  correctAnswerIndex: 0,
                  hint: '"schreiben" yazmak fiilidir.',
                  explanation: '"Wie schreibt man das?" (Bu nasıl yazılır?) doğru sorudur.'
                }
              ]
            }
          ]
        },
        {
          id: 'de_u2',
          unitNumber: 2,
          title: 'Lektion 2: Das bin ich!',
          description: 'Yaş ve sayılar (0-20), ülkeler ve diller, memleket (Herkunft) ve yaşanılan şehir (Wohnort)',
          topics: [
            {
              id: 'de_u2_t1',
              title: 'Das Alter und Zahlen von 0 bis 20 (Yaş ve Sayılar)',
              kazanimCode: 'DE.5.2.W2.1',
              kazanimDesc: '0\'dan 20\'ye kadar sayıları tanır, yaşını söyler ve başkalarına yaşını sorar.',
              summary: `
• **0-12 Arası Temel Sayılar:**
  - 0: null, 1: eins, 2: zwei, 3: drei, 4: vier, 5: fünf
  - 6: sechs, 7: sieben, 8: acht, 9: neun, 10: zehn, 11: elf, 12: zwölf
• **13-19 Arası Sayılar (Kural: Sayı + zehn):**
  - 13: dreizehn, 14: vierzehn, 15: fünfzehn
  - 16: **sechzehn** (⚠️ DİKKAT: sechs'teki 's' harfi düşer!)
  - 17: **siebzehn** (⚠️ DİKKAT: sieben'deki '-en' eki düşer!)
  - 18: achtzehn, 19: neunzehn, 20: **zwanzig**
• **Yaş Sorma ve Söyleme (Das Alter):**
  - **Wie alt bist du?:** Kaç yaşındasın?
  - **Ich bin zehn Jahre alt.:** 10 yaşındayım.
  - **Ich bin elf Jahre alt.:** 11 yaşındayım.
  - Kısa cevap: *"Ich bin zehn."* veya *"Ich bin elf."*
  - Başkası için: *"Er ist zwölf Jahre alt."* (O erkek 12 yaşında), *"Sie ist zehn Jahre alt."* (O kız 10 yaşında).
              `,
              keyConcepts: ['Zahlen (0-20)', 'Wie alt bist du?', 'Ich bin ... Jahre alt', 'sechzehn', 'siebzehn', 'zwanzig'],
              pronunciationPhrases: [
                {
                  german: 'null, eins, zwei, drei',
                  turkish: '0, 1, 2, 3',
                  phonetic: 'nul, ayns, tsvay, dray',
                  category: 'Zahlen 0-3'
                },
                {
                  german: 'vier, fünf, sechs, sieben',
                  turkish: '4, 5, 6, 7',
                  phonetic: 'fiir, fünf, zeks, ziibın',
                  category: 'Zahlen 4-7'
                },
                {
                  german: 'acht, neun, zehn, elf, zwölf',
                  turkish: '8, 9, 10, 11, 12',
                  phonetic: 'aht, noyn, tseen, elf, tsvölf',
                  category: 'Zahlen 8-12'
                },
                {
                  german: 'dreizehn, vierzehn, fünfzehn',
                  turkish: '13, 14, 15',
                  phonetic: 'dray-tseen, fiir-tseen, fünf-tseen',
                  category: 'Zahlen 13-15'
                },
                {
                  german: 'sechzehn, siebzehn, zwanzig',
                  turkish: '16, 17, 20 (Özel kural)',
                  phonetic: 'zeh-tseen, ziip-tseen, tsvantsig',
                  category: 'Zahlen 16-20'
                },
                {
                  german: 'Wie alt bist du?',
                  turkish: 'Kaç yaşındasın?',
                  phonetic: 'Vii alt bist du?',
                  category: 'Frage'
                },
                {
                  german: 'Ich bin zehn Jahre alt.',
                  turkish: 'On yaşındayım.',
                  phonetic: 'İh bin tseen yaare alt.',
                  category: 'Antwort'
                },
                {
                  german: 'Ich bin elf Jahre alt.',
                  turkish: 'On bir yaşındayım.',
                  phonetic: 'İh bin elf yaare alt.',
                  category: 'Antwort'
                }
              ],
              flashcards: [
                {
                  id: 'fc_de2_1',
                  front: 'Almancada "Wie alt bist du?" ne demektir?',
                  back: '"Kaç yaşındasın?" demektir.',
                  tip: 'alt = yaşlı/yaşında demektir. Cevap: "Ich bin ... Jahre alt."',
                  example: '— Wie alt bist du? — Ich bin elf Jahre alt.'
                },
                {
                  id: 'fc_de2_2',
                  front: '16 ve 17 sayılarının yazılışındaki özel kural nedir?',
                  back: '16 için "sechs" kelimesindeki -s düşer: "sechzehn". 17 için "sieben" kelimesindeki -en düşer: "siebzehn" olur.',
                  tip: 'Asla "sechszehn" veya "siebenzehn" yazılmaz!',
                  example: '16 = sechzehn, 17 = siebzehn'
                },
                {
                  id: 'fc_de2_3',
                  front: '11 ve 12 sayılarının Almancası nedir?',
                  back: '11 = elf, 12 = zwölf',
                  tip: 'İngilizcedeki eleven ve twelve gibi kendine özel sözcüklerdir.',
                  example: 'Ich bin zwölf Jahre alt.'
                },
                {
                  id: 'fc_de2_4',
                  front: '20 sayısı Almancada nasıl yazılır ve telaffuz edilir?',
                  back: '"zwanzig" olarak yazılır, [tsvantsig] şeklinde okunur.',
                  tip: 'Sonundaki -ig eki genellikle yumuşak -ih / -ik gibi telaffuz edilir.',
                  example: 'zwanzig = 20'
                }
              ],
              matching: [
                { id: 'm_de2_1', left: 'eins, zwei, drei', right: '1, 2, 3' },
                { id: 'm_de2_2', left: 'elf, zwölf', right: '11, 12' },
                { id: 'm_de2_3', left: 'sechzehn', right: '16' },
                { id: 'm_de2_4', left: 'siebzehn', right: '17' },
                { id: 'm_de2_5', left: 'zwanzig', right: '20' }
              ],
              trueFalse: [
                {
                  id: 'tf_de2_1',
                  text: 'Almancada 16 sayısı "sechszehn" olarak yazılır.',
                  isTrue: false,
                  explanation: 'Yanlış! Sechs kelimesindeki "s" harfi düşer ve doğru yazılışı "sechzehn" dir.'
                },
                {
                  id: 'tf_de2_2',
                  text: '"Ich bin zehn Jahre alt" cümlesi "Ben 10 yaşındayım" demektir.',
                  isTrue: true,
                  explanation: 'Doğru! "zehn" 10 demektir ve "Jahre alt" yaşındayım ifadesidir.'
                },
                {
                  id: 'tf_de2_3',
                  text: '"zwölf" sayısı 11 anlamına gelir.',
                  isTrue: false,
                  explanation: 'Yanlış! 11 = elf, 12 = zwölf\'tir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_de2_1',
                  sentence: '— Wie alt bist du? — Ich ___ elf Jahre alt.',
                  options: ['bin', 'bist', 'ist', 'heiße'],
                  correctWord: 'bin',
                  hint: '"Ich" (Ben) öznesiyle sein fiilinin çekimi.'
                },
                {
                  id: 'fb_de2_2',
                  sentence: '14 sayısı Almancada "___" olarak yazılır.',
                  options: ['vierzehn', 'vierzig', 'fünfzehn', 'dreizehn'],
                  correctWord: 'vierzehn',
                  hint: 'vier (4) + zehn (10)'
                },
                {
                  id: 'fb_de2_3',
                  sentence: '— Wie ___ bist du? — Ich bin zehn Jahre alt.',
                  options: ['alt', 'heißt', 'woher', 'wer'],
                  correctWord: 'alt',
                  hint: 'Yaş sorarken kullanılan sözcük.'
                }
              ],
              quiz: [
                {
                  id: 'q_de2_1',
                  question: '17 sayısının doğru Almanca yazılışı aşağıdakilerden hangisidir?',
                  options: [
                    'siebzehn',
                    'siebenzehn',
                    'siebzig',
                    'sechzehn'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'sieben kelimesindeki -en eki düşer.',
                  explanation: '17 sayısı kural olarak "-en" ekini atar ve "siebzehn" olarak yazılır.'
                },
                {
                  id: 'q_de2_2',
                  question: 'Arkadaşının yaşını öğrenmek isteyen Selin hangi soruyu sormalıdır?',
                  options: [
                    'Wie alt bist du?',
                    'Wie heißt du?',
                    'Woher kommst du?',
                    'Wie geht es dir?'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Yaş sorma kalıbı.',
                  explanation: '"Wie alt bist du?" kaç yaşındasın demektir.'
                },
                {
                  id: 'q_de2_3',
                  question: 'Aşağıdaki sayı eşleştirmelerinden hangisi YANLIŞTIR?',
                  options: [
                    'zwölf = 11',
                    'vierzehn = 14',
                    'zwanzig = 20',
                    'acht = 8'
                  ],
                  correctAnswerIndex: 0,
                  hint: '12 sayısını hatırla.',
                  explanation: 'zwölf 12 demektir, 11 sayısı ise "elf" tir.'
                }
              ]
            },
            {
              id: 'de_u2_t2',
              title: 'Die Länder und die Sprachen (Ülkeler ve Diller)',
              kazanimCode: 'DE.5.2.SP3.3',
              kazanimDesc: 'Ülkeleri ve bu ülkelerde konuşulan dilleri tanır, hangi dilleri konuştuğunu ifade eder.',
              summary: `
• **Ülkeler (Länder):**
  - **Türkiye:** Türkiye
  - **Deutschland:** Almanya
  - **Österreich:** Avusturya (Başkenti Viyana - Almanca konuşulur!)
  - **die Schweiz:** İsviçre (⚠️ Artikeli "die" olan ülkedir!)
  - **England:** İngiltere
  - **Spanien:** İspanya
  - **Japan:** Japonya
  - **Aserbaidschan:** Azerbaycan
• **Diller (Sprachen):**
  - **Türkisch:** Türkçe
  - **Deutsch:** Almanca
  - **Englisch:** İngilizce
  - **Spanisch:** İspanyolca
  - **Japanisch:** Japonca
  - **Aserbaidschanisch:** Azerbaycan Türkçesi
• **Dil Konuşma Kalıbı:**
  - **Welche Sprachen sprichst du?:** Hangi dilleri konuşuyorsun?
  - **Ich spreche Türkisch.:** Türkçe konuşuyorum.
  - **Ich spreche Deutsch und Englisch.:** Almanca ve İngilizce konuşuyorum.
  - Fiil: **sprechen** (konuşmak) -> *Ich spreche, du sprichst, er/sie spricht*.
              `,
              keyConcepts: ['Länder', 'Sprachen', 'Deutschland', 'Österreich', 'die Schweiz', 'sprechen', 'Ich spreche'],
              pronunciationPhrases: [
                {
                  german: 'Deutschland - Deutsch',
                  turkish: 'Almanya - Almanca',
                  phonetic: 'Doyçlant - Doyç',
                  category: 'Land & Sprache'
                },
                {
                  german: 'Türkiye - Türkisch',
                  turkish: 'Türkiye - Türkçe',
                  phonetic: 'Türkaye - Türkiş',
                  category: 'Land & Sprache'
                },
                {
                  german: 'Österreich - Deutsch',
                  turkish: 'Avusturya - Almanca',
                  phonetic: 'Ööstırayh - Doyç',
                  category: 'Land & Sprache'
                },
                {
                  german: 'die Schweiz',
                  turkish: 'İsviçre',
                  phonetic: 'dii Şvayts',
                  category: 'Land'
                },
                {
                  german: 'England - Englisch',
                  turkish: 'İngiltere - İngilizce',
                  phonetic: 'Englant - Engliş',
                  category: 'Land & Sprache'
                },
                {
                  german: 'Spanien - Spanisch',
                  turkish: 'İspanya - İspanyolca',
                  phonetic: 'Şpaanyın - Şpaaniş',
                  category: 'Land & Sprache'
                },
                {
                  german: 'Welche Sprachen sprichst du?',
                  turkish: 'Hangi dilleri konuşuyorsun?',
                  phonetic: 'Velhe Şpraahın şprihst du?',
                  category: 'Frage'
                },
                {
                  german: 'Ich spreche Türkisch und Deutsch.',
                  turkish: 'Türkçe ve Almanca konuşuyorum.',
                  phonetic: 'İh şprehe Türkiş unt Doyç.',
                  category: 'Antwort'
                }
              ],
              flashcards: [
                {
                  id: 'fc_de_l1',
                  front: 'Almanya dışında hangi ülkelerde resmî dil olarak Almanca konuşulur?',
                  back: 'Österreich (Avusturya) ve die Schweiz (İsviçre).',
                  tip: 'Österreich\'ın başkenti Viyana\'da da anadil Almancadır.',
                  example: 'In Österreich spricht man Deutsch.'
                },
                {
                  id: 'fc_de_l2',
                  front: '"Ich spreche Deutsch" ne demektir?',
                  back: '"Ben Almanca konuşuyorum" demektir.',
                  tip: 'sprechen = konuşmak fiilidir (Ich spreche, du sprichst).',
                  example: 'Ich spreche Türkisch und Englisch.'
                },
                {
                  id: 'fc_de_l3',
                  front: '"Welche Sprachen sprichst du?" sorusu ne anlama gelir?',
                  back: '"Hangi dilleri konuşuyorsun?" anlamına gelir.',
                  tip: 'Sprache = Dil, Sprachen = Diller demektir.',
                  example: '— Welche Sprachen sprichst du? — Ich spreche Deutsch.'
                }
              ],
              matching: [
                { id: 'm_de_l1', left: 'Deutschland', right: 'Deutsch' },
                { id: 'm_de_l2', left: 'Türkiye', right: 'Türkisch' },
                { id: 'm_de_l3', left: 'England', right: 'Englisch' },
                { id: 'm_de_l4', left: 'Spanien', right: 'Spanisch' },
                { id: 'm_de_l5', left: 'Japan', right: 'Japanisch' }
              ],
              trueFalse: [
                {
                  id: 'tf_de_l1',
                  text: 'Avusturya\'da (Österreich) resmî dil olarak Almanca (Deutsch) konuşulur.',
                  isTrue: true,
                  explanation: 'Doğru! Avusturya ve İsviçre\'nin önemli bir kısmında Almanca konuşulur.'
                },
                {
                  id: 'tf_de_l2',
                  text: '"Ich sprechen Deutsch" ifadesi dil bilgisi açısından tamamen doğrudur.',
                  isTrue: false,
                  explanation: 'Yanlış! "Ich" öznesi için fiil "-e" alır: "Ich spreche Deutsch" olmalıdır.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_de_l1',
                  sentence: 'Ich komme aus Deutschland und ich spreche ___ .',
                  options: ['Deutsch', 'Türkisch', 'Spanisch', 'Japanisch'],
                  correctWord: 'Deutsch',
                  hint: 'Almanya\'da konuşulan dil.'
                },
                {
                  id: 'fb_de_l2',
                  sentence: '— Welche Sprachen ___ du? — Ich spreche Englisch.',
                  options: ['sprichst', 'spreche', 'bist', 'heißt'],
                  correctWord: 'sprichst',
                  hint: '"du" (sen) öznesi için sprechen fiilinin çekimi.'
                }
              ],
              quiz: [
                {
                  id: 'q_de_l1',
                  question: '— Welche Sprachen sprichst du? — Ich spreche ___ und ___ .',
                  options: [
                    'Türkisch / Deutsch',
                    'Türkiye / Deutschland',
                    'Spanien / England',
                    'Ankara / Berlin'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Cümleye ülke veya şehir değil, dil isimleri gelmelidir.',
                  explanation: 'Türkisch ve Deutsch dil isimleridir. Diğerleri ülke veya şehir isimleridir.'
                },
                {
                  id: 'q_de_l2',
                  question: 'Aşağıdaki ülke-dil eşleştirmelerinden hangisi DOĞRUDUR?',
                  options: [
                    'Spanien -> Spanisch',
                    'Deutschland -> Englisch',
                    'England -> Deutsch',
                    'Türkiye -> Japanisch'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'İspanya ve İspanyolca eşleşmesini incele.',
                  explanation: 'İspanya (Spanien) ülkesinde İspanyolca (Spanisch) konuşulur.'
                }
              ]
            },
            {
              id: 'de_u2_t3',
              title: 'Die Herkunft und der Wohnort (Memleket ve Yaşanılan Şehir)',
              kazanimCode: 'DE.5.2.G1.1',
              kazanimDesc: 'Nereli olduğunu (köken/memleket) ve nerede ikamet ettiğini (şehir) söyler, başkalarına sorar.',
              summary: `
• **Herkunft (Nereden geliyorsun? / Memleket):**
  - **Woher kommst du?:** Nereden geliyorsun? (Nerelisin?)
  - **Ich komme aus Türkiye.:** Türkiye'den geliyorum.
  - **Ich komme aus Deutschland.:** Almanya'dan geliyorum.
  - ⚠️ **Önemli İstisna:** İsviçre artikelli olduğu için *"Ich komme aus der Schweiz"* denir!
• **Wohnort (Nerede yaşıyorsun? / İkamet):**
  - **Wo wohnst du?:** Nerede oturuyorsun / yaşıyorsun?
  - **Ich wohne in Ankara.:** Ankara'da oturuyorum.
  - **Ich wohne in Berlin.:** Berlin'de oturuyorum.
  - Şehirlerden önce **"in"** edatı kullanılır!
• **Tekil Şahıs Zamirleri (Personalpronomen):**
  - **ich:** ben (Ich wohne...)
  - **du:** sen (Wo wohnst du?)
  - **er:** o (erkek) -> *Er kommt aus Deutschland und wohnt in Hamburg.*
  - **sie:** o (kız) -> *Sie kommt aus Türkiye und wohnt in Izmir.*
• **Özet Kendini Tanıtma (Steckbrief):**
  *"Hallo! Das bin ich! Ich heiße Can. Ich bin elf Jahre alt. Ich komme aus Türkiye und ich wohne in Ankara. Ich spreche Türkisch ve Englisch."*
              `,
              keyConcepts: ['Woher kommst du?', 'Ich komme aus', 'Wo wohnst du?', 'Ich wohne in', 'er / sie', 'Steckbrief'],
              pronunciationPhrases: [
                {
                  german: 'Woher kommst du?',
                  turkish: 'Nereden geliyorsun? (Nerelisin?)',
                  phonetic: 'Vo-heer komst du?',
                  category: 'Herkunft'
                },
                {
                  german: 'Ich komme aus Türkiye.',
                  turkish: 'Türkiye\'den geliyorum.',
                  phonetic: 'İh kome aus Türkaye.',
                  category: 'Herkunft'
                },
                {
                  german: 'Ich komme aus Deutschland.',
                  turkish: 'Almanya\'dan geliyorum.',
                  phonetic: 'İh kome aus Doyçlant.',
                  category: 'Herkunft'
                },
                {
                  german: 'Ich komme aus der Schweiz.',
                  turkish: 'İsviçre\'den geliyorum. (der Schweiz)',
                  phonetic: 'İh kome aus der Şvayts.',
                  category: 'Herkunft'
                },
                {
                  german: 'Wo wohnst du?',
                  turkish: 'Nerede yaşıyorsun / oturuyorsun?',
                  phonetic: 'Voo vonst du?',
                  category: 'Wohnort'
                },
                {
                  german: 'Ich wohne in Ankara.',
                  turkish: 'Ankara\'da oturuyorum.',
                  phonetic: 'İh voone in Ankara.',
                  category: 'Wohnort'
                },
                {
                  german: 'Ich wohne in Berlin.',
                  turkish: 'Berlin\'de oturuyorum.',
                  phonetic: 'İh voone in Berliin.',
                  category: 'Wohnort'
                },
                {
                  german: 'Das bin ich!',
                  turkish: 'İşte bu benim!',
                  phonetic: 'Das bin ih!',
                  category: 'Steckbrief'
                }
              ],
              flashcards: [
                {
                  id: 'fc_de_w1',
                  front: '"Woher kommst du?" ile "Wo wohnst du?" arasındaki fark nedir?',
                  back: '"Woher kommst du?" memleketini/ülkeni sorar (Ich komme aus...). "Wo wohnst du?" ise şu an yaşadığın şehri sorar (Ich wohne in...).',
                  tip: 'Woher = nereden (aus), Wo = nerede (in).',
                  example: 'Ich komme aus Deutschland, aber ich wohne in Istanbul.'
                },
                {
                  id: 'fc_de_w2',
                  front: 'Neden "aus Schweiz" değil de "aus der Schweiz" denir?',
                  back: 'Çünkü Schweiz (İsviçre) kelimesinin artikeli "die" dir ve "aus" edatından sonra "der" haline dönüşür.',
                  tip: 'Türkiye ve Deutschland artikelsiz kullanılırken, İsviçre için "aus der Schweiz" denir.',
                  example: 'Er kommt aus der Schweiz.'
                },
                {
                  id: 'fc_de_w3',
                  front: 'Almancada "O (erkek)" ve "O (kız)" zamirleri nelerdir?',
                  back: 'Er = O (erkek), Sie = O (kız/kadın)',
                  tip: 'Er kommt aus Berlin. Sie wohnt in Ankara.',
                  example: 'Er ist zehn Jahre alt. Sie ist elf Jahre alt.'
                }
              ],
              matching: [
                { id: 'm_de_w1', left: 'Woher kommst du?', right: 'Nereden geliyorsun?' },
                { id: 'm_de_w2', left: 'Ich komme aus...', right: '...den geliyorum' },
                { id: 'm_de_w3', left: 'Wo wohnst du?', right: 'Nerede oturuyorsun?' },
                { id: 'm_de_w4', left: 'Ich wohne in...', right: '...de oturuyorum' },
                { id: 'm_de_w5', left: 'Das bin ich!', right: 'Bu benim!' }
              ],
              trueFalse: [
                {
                  id: 'tf_de_w1',
                  text: '"Wo wohnst du?" sorusuna "Ich komme aus Deutschland" diye cevap verilmelidir.',
                  isTrue: false,
                  explanation: 'Yanlış! "Wo wohnst du?" nerede oturuyorsun demektir; "Ich wohne in..." şeklinde cevap verilmelidir.'
                },
                {
                  id: 'tf_de_w2',
                  text: 'Şehir isimlerinden önce "in" edatı kullanılır (Örn: in Ankara, in Berlin).',
                  isTrue: true,
                  explanation: 'Doğru! Şehirde ikamet belirtirken "in" kullanılır: "Ich wohne in Izmir."'
                },
                {
                  id: 'tf_de_w3',
                  text: 'Almancada "er" erkekler için "o", "sie" ise kızlar için "o" anlamına gelir.',
                  isTrue: true,
                  explanation: 'Doğru! Er = erkek (he), Sie = kız (she) zamiridir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_de_w1',
                  sentence: '— Woher kommst du? — Ich komme ___ Türkiye.',
                  options: ['aus', 'in', 'wo', 'und'],
                  correctWord: 'aus',
                  hint: '-den/-dan çıkma anlamı katan edat.'
                },
                {
                  id: 'fb_de_w2',
                  sentence: '— Wo wohnst du? — Ich wohne ___ Berlin.',
                  options: ['in', 'aus', 'nach', 'von'],
                  correctWord: 'in',
                  hint: 'Şehirde bulunma anlamı katan edat.'
                },
                {
                  id: 'fb_de_w3',
                  sentence: 'Lukas bir erkektir. Onun için "___ kommt aus Deutschland" deriz.',
                  options: ['Er', 'Sie', 'Ich', 'Du'],
                  correctWord: 'Er',
                  hint: 'Erkekler için kullanılan 3. tekil şahıs zamiri.'
                }
              ],
              quiz: [
                {
                  id: 'q_de_w1',
                  question: '— Woher kommst du? — ___ .',
                  options: [
                    'Ich komme aus Deutschland.',
                    'Ich wohne in Berlin.',
                    'Ich bin elf Jahre alt.',
                    'Ich heiße Jonas.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Woher (Nereden) sorusuna uygun cevabı seç.',
                  explanation: '"Woher kommst du?" sorusuna "Ich komme aus..." ile nereden gelindiği belirtilerek cevap verilir.'
                },
                {
                  id: 'q_de_w2',
                  question: 'Aşağıdaki kendini tanıtma (Steckbrief) cümlelerinden hangisi dil bilgisi açısından HATALIDIR?',
                  options: [
                    'Ich komme in Deutschland.',
                    'Ich heiße Aylin.',
                    'Ich bin zehn Jahre alt.',
                    'Ich wohne in Ankara.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'komme fiili "in" ile mi kullanılır, "aus" ile mi?',
                  explanation: '"Ich komme in Deutschland" hatalıdır. Doğrusu "Ich komme AUS Deutschland" olmalıdır.'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
