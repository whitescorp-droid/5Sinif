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
  "id": "sosyal",
  "name": "Sosyal Bilgiler",
  "shortName": "Sosyal Bilgiler",
  "icon": "🌍",
  "color": "#F59E0B",
  "gradient": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  "lightBg": "#FFFBEB",
  "description": "Birlikte yaşama kültürü, evimiz dünya, afet bilinci ve tarihimizin ortak mirası",
  "units": [
    {
      "id": "sos_u1",
      "unitNumber": 1,
      "title": "1. Öğrenme Alanı: Birlikte Yaşamak",
      "description": "Gruplar, rollerimiz, hak ve sorumluluklarımız, kültürel saygı ve toplumsal dayanışma",
      "topics": [
        {
          "id": "sos_u1_t1",
          "title": "Gruplar ve Rollerimiz",
          "kazanimCode": "SB.5.1.1",
          "kazanimDesc": "Dâhil olduğu gruplar ve bu gruplardaki rolleri arasındaki ilişkileri çözümler, hak ve sorumluluklarını fark eder.",
          "summary": "\n• **Grup Nedir?:** Ortak bir amaç için bir araya gelen, aralarında iş bölümü ve düzenli iletişim olan en az iki kişiden oluşan topluluktur (Aile, okul kulübü, futbol takımı).\n• **Rol:** Bir kimsenin içinde bulunduğu grupta üstlendiği görev, konum ve beklentilerdir.\n  - Bir birey aynı anda **birden fazla role** sahip olabilir: Evde evlat/abla, okulda öğrenci/sınıf başkanı, müzik korosunda solist.\n  - Roller zamanla değişebilir (İlkokul öğrencisiyken ortaokul öğrencisi olmak).\n• **Hak:** Kanunların ve ahlaki değerlerin bireylere tanıdığı meşru yetki ve korumalardır (Yaşama hakkı, eğitim hakkı, oyun oynama hakkı).\n• **Sorumluluk:** Bireyin üstlendiği rollerin gerektirdiği görevleri zamanında ve eksiksiz yerine getirmesidir.\n• **Önemli Kural:** Haklarımızı kullanırken başkalarının haklarına ve özgürlüklerine saygı duymak temel sorumluluğumuzdur!\n          ",
          "keyConcepts": [
            "Grup",
            "Rol",
            "Hak",
            "Sorumluluk",
            "İş Bölümü",
            "Sosyal Kulüp"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u1_1",
              "front": "Grup nedir?",
              "back": "Ortak bir amaç doğrultusunda bir araya gelen, aralarında düzenli iletişim ve iş birliği olan en az iki kişilik topluluktur.",
              "tip": "Aile, futbol takımı veya izci kulübü birer gruptur.",
              "example": "5-A sınıfı koro ekibi bir gruptur."
            },
            {
              "id": "fc_sos_u1_2",
              "front": "Rol nedir?",
              "back": "Bir bireyin dâhil olduğu grupta üstlendiği görev, konum ve sergilediği davranışlardır.",
              "tip": "Bir kişi gün içinde hem abi, hem öğrenci, hem de kaleci olabilir.",
              "example": "Sınıfta \"öğrenci\", evde \"çocuk\" rolündeyiz."
            },
            {
              "id": "fc_sos_u1_3",
              "front": "Hak ile Sorumluluk arasındaki fark nedir?",
              "back": "Hak, bize yasalarla tanınan meşru yetkilerdir; sorumluluk ise üstlendiğimiz rollerin gerektirdiği ödev ve görevlerdir.",
              "tip": "Okula gitmek hakkımız; dersi dinleyip ödevimizi yapmak sorumluluğumuzdur.",
              "example": "Oyun oynamak bir çocuk hakkıdır; oyuncakları toplamak sorumluluktur."
            },
            {
              "id": "fc_sos_u1_4",
              "front": "Bir insan aynı anda birden fazla role sahip olabilir mi?",
              "back": "Evet! İnsanlar dâhil oldukları farklı gruplarda eş zamanlı olarak farklı roller üstlenebilirler.",
              "tip": "Örn: Zeynep ailesinde çocuk, okulunda sınıf başkanı, satranç kulübünde üyedir.",
              "example": "Farklı ortamlarda farklı roller üstlenmek sosyal becerilerimizi geliştirir."
            },
            {
              "id": "fc_sos_u1_5",
              "front": "Çocuk Hakları Sözleşmesi neyi güvenceye alır?",
              "back": "18 yaşına kadar her çocuğun yaşama, eğitim, sağlık, korunma ve oyun oynama haklarını uluslararası düzeyde güvence altına alır.",
              "tip": "20 Kasım Dünya Çocuk Hakları Günü olarak kutlanır.",
              "example": "Hiçbir çocuk ağır işlerde çalıştırılamaz."
            },
            {
              "id": "fc_sos_u1_6",
              "front": "Sosyal kulüplerin öğrencilere katkısı nedir?",
              "back": "Öğrencilerin liderlik, iş birliği, sorumluluk alma, empati ve iletişim becerilerini güçlendirir.",
              "tip": "Kızılay kulübü, Yeşilay kulübü, Gezi kulübü.",
              "example": "Kütüphanecilik kulübü ile kitap sevgisi ve paylaşım gelişir."
            }
          ],
          "matching": [
            {
              "id": "m_sos_1_1",
              "left": "Eğitim Görmek",
              "right": "Temel bir Çocuk Hakkı"
            },
            {
              "id": "m_sos_1_2",
              "left": "Odasını Toplamak",
              "right": "Evdeki Temel Sorumluluk"
            },
            {
              "id": "m_sos_1_3",
              "left": "Sınıf Nöbetçisi Olmak",
              "right": "Okulda Üstlenilen bir Rol"
            },
            {
              "id": "m_sos_1_4",
              "left": "Ders Ziline Uymak",
              "right": "Okul Kuralı ve Görev"
            },
            {
              "id": "m_sos_1_5",
              "left": "Kızılay Kulübü",
              "right": "Okul Sosyal Kulübü"
            },
            {
              "id": "m_sos_1_6",
              "left": "20 Kasım",
              "right": "Dünya Çocuk Hakları Günü"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_1_1",
              "text": "Bir birey hayatı boyunca ve gün içinde yalnızca tek bir role sahip olabilir.",
              "isTrue": false,
              "explanation": "Yanlış! İnsanlar aynı gün içinde evlat, kardeş, öğrenci, sporcu gibi birçok farklı role sahip olabilir."
            },
            {
              "id": "tf_sos_1_2",
              "text": "Haklarımız sınırsız değildir; başkalarının haklarının başladığı yerde bizim haklarımız sınır bulur.",
              "isTrue": true,
              "explanation": "Doğru! Toplumda barış içinde yaşamak için başkalarının hak ve özgürlüklerine saygı duymalıyız."
            },
            {
              "id": "tf_sos_1_3",
              "text": "18 yaşına kadar her birey çocuk olarak kabul edilir ve uluslararası Çocuk Hakları Sözleşmesi ile korunur.",
              "isTrue": true,
              "explanation": "Doğru! BM Çocuk Hakları Sözleşmesi her çocuğun haklarını koruma altına alır."
            },
            {
              "id": "tf_sos_1_4",
              "text": "Okulda ödev yapmak öğretmenimizin sorumluluğudur, bizim sorumluluğumuz değildir.",
              "isTrue": false,
              "explanation": "Yanlış! Ödevleri zamanında ve düzenli yapmak öğrencinin kendi sorumluluğudur."
            },
            {
              "id": "tf_sos_1_5",
              "text": "Gruptaki her üyenin kendi rolünün gerektirdiği görevi yapması grup başarısını artırır.",
              "isTrue": true,
              "explanation": "Doğru! İş bölümü ve görev bilinci grubun hedefine ulaşmasını sağlar."
            },
            {
              "id": "tf_sos_1_6",
              "text": "Otobüs durağında sıraya girmeden öne geçmek temel bir insan hakkıdır.",
              "isTrue": false,
              "explanation": "Yanlış! Sıraya girmek bir nezaket ve toplum kuralıdır; sırayı bozmak başkalarının hakkını çiğnemektir."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_1_1",
              "sentence": "Bir kimsenin içinde bulunduğu grupta üstlendiği görev ve konuma ___ denir.",
              "options": [
                "rol",
                "hak",
                "afet",
                "ölçek"
              ],
              "correctWord": "rol",
              "hint": "Öğrenci, evlat, kaptan birer..."
            },
            {
              "id": "fb_sos_1_2",
              "sentence": "Kanunların bize tanıdığı yetki ve korumalara ___ denir.",
              "options": [
                "hak",
                "sorumluluk",
                "görev",
                "ceza"
              ],
              "correctWord": "hak",
              "hint": "Eğitim almak, sağlık hizmeti görmek temel bir..."
            },
            {
              "id": "fb_sos_1_3",
              "sentence": "Bireyin kendi davranışlarının sonuçlarını üstlenmesine ve ödevlerini yapmasına ___ denir.",
              "options": [
                "sorumluluk",
                "özgürlük",
                "hak",
                "grup"
              ],
              "correctWord": "sorumluluk",
              "hint": "Odasını toplamak bir..."
            },
            {
              "id": "fb_sos_1_4",
              "sentence": "Çocuk Hakları Sözleşmesi’ne göre her insan ___ yaşına kadar çocuk sayılır.",
              "options": [
                "18",
                "15",
                "12",
                "20"
              ],
              "correctWord": "18",
              "hint": "Reşit olma yaşıdır."
            },
            {
              "id": "fb_sos_1_5",
              "sentence": "Ortak bir hedef için bir araya gelen ve düzenli iletişim kuran insan topluluğuna ___ denir.",
              "options": [
                "grup",
                "kalabalık",
                "seyirci",
                "ziyaretçi"
              ],
              "correctWord": "grup",
              "hint": "Aile, sınıf ve takım birer..."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_1_1",
              "question": "Aşağıdakilerden hangisi 5. sınıf öğrencisi olan Kerem’in evdeki sorumluluklarından biridir?",
              "options": [
                "Kendi çalışma masasını ve odasını düzenli tutmak",
                "Evin elektrik ve su faturalarını maaşıyla ödemek",
                "Evin kira sözleşmesini imzalamak",
                "Haftalık mutfak alışverişinin tüm bütçesini karşılamak"
              ],
              "correctAnswerIndex": 0,
              "hint": "Çocuğun kendi yaşına ve rolüne uygun görevini düşün.",
              "explanation": "Odasını ve eşyalarını düzenli tutmak bir çocuğun yaşına uygun temel ev sorumluluğudur."
            },
            {
              "id": "q_sos_1_2",
              "question": "Aşağıdaki durumların hangisinde bir \"rol değişimi\" gerçekleşmiştir?",
              "options": [
                "Ayşe’nin ilkokulu bitirip ortaokul 5. sınıf öğrencisi olması",
                "Ali’nin her sabah aynı saatte uyanması",
                "Mehmet’in kırmızı kazağını giymesi",
                "Zeynep’in kitap okumayı çok sevmesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "Bireyin üstlendiği konum veya kademe değişikliğine bak.",
              "explanation": "İlkokul öğrenciliğinden ortaokul öğrenciliğine geçmek rol ve sorumluluklarda bir değişimdir."
            },
            {
              "id": "q_sos_1_3",
              "question": "Bir kişinin dahil olduğu grupta diğer üyelerle uyumlu çalışması, iş bölümüne sadık kalması hangi değerle doğrudan ilişkilidir?",
              "options": [
                "İş birliği ve Sorumluluk",
                "Bencillik ve İçe Kapanıklık",
                "Sabırsızlık ve Kayıtsızlık",
                "Tembellik ve Dikkatsizlik"
              ],
              "correctAnswerIndex": 0,
              "hint": "Birlikte başarıya ulaşmayı sağlayan temel erdem.",
              "explanation": "İş birliği ve sorumluluk bilinci grubun başarıya ulaşmasını ve bireylerin sosyalleşmesini sağlar."
            },
            {
              "id": "q_sos_1_4",
              "question": "Aşağıdakilerden hangisi Çocuk Hakları Sözleşmesi’nde yer alan haklardan biri DEĞİLDİR?",
              "options": [
                "Ağır ve tehlikeli sanayi kollarında tam gün çalıştırılma hakkı",
                "Temiz bir çevrede sağlıklı yaşama hakkı",
                "Düşüncelerini özgürce ifade etme hakkı",
                "Ücretsiz ve nitelikli temel eğitim alma hakkı"
              ],
              "correctAnswerIndex": 0,
              "hint": "Çocukların korunmasını engelleyen duruma bak.",
              "explanation": "Çocukların ağır işlerde çalıştırılması yasaktır; bu bir hak değil çocuk hakkı ihlalidir."
            },
            {
              "id": "q_sos_1_5",
              "question": "Kütüphanede ders çalışan Melis’in yan masadaki arkadaşlarıyla yüksek sesle konuşması hangi duruma aykırıdır?",
              "options": [
                "Başkalarının haklarına saygı gösterme sorumluluğuna",
                "Beslenme ve sağlık hakkına",
                "Seyahat etme özgürlüğüne",
                "Barınma ve konut hakkına"
              ],
              "correctAnswerIndex": 0,
              "hint": "Sessizlik kuralı başkalarının rahat çalışma hakkını korur.",
              "explanation": "Kütüphanede sessiz olmak, başkalarının sessiz ortamda çalışma hakkına saygının bir gereğidir."
            }
          ]
        },
        {
          "id": "sos_u1_t2",
          "title": "Kültürel Özelliklere Saygı ve Birlikte Yaşama Kültürü",
          "kazanimCode": "SB.5.1.2",
          "kazanimDesc": "Kültürel özelliklere saygı duymanın birlikte yaşamaya etkisini yorumlar; KKTC ve farklı kültürlerle ortak bağlarımızı kavrar.",
          "summary": "\n• **Milli Kültür:** Bir milleti diğer milletlerden ayıran, geçmişten günümüze aktarılan maddi ve manevi değerlerin bütünüdür.\n  - Dilimiz (Türkçe), halk oyunlarımız (Halay, Horon, Zeybek), geleneksel el sanatlarımız (Ebru, Çini, Halıcılık).\n  - Dini ve milli bayramlarımız, düğünlerimiz, misafirperverliğimiz ve Türk kahvesi geleneğimiz.\n• **Kültürel Çeşitlilik Bir Zenginliktir:**\n  - Farklı yörelerimizin yemekleri, türküleri ve giyim kuşamları ülkemizin kültürel mozaiğini oluşturur.\n  - Ege'de zeybek, Karadeniz'de horon, Doğu'da halay aynı vatanın zengin renkleridir.\n• **KKTC (Kuzey Kıbrıs Türk Cumhuriyeti):**\n  - Tarihi, kültürü, dili ve milli değerleriyle gönül bağımızın olduğu yavru vatanımızdır.\n• **Farklı Kültürlere Saygı:**\n  - İnsanların farklı geleneklere, inançlara ve yaşam tarzlarına sahip olması doğaldır. Saygı, barışın ve birlikte yaşamanın anahtarıdır.\n          ",
          "keyConcepts": [
            "Kültür",
            "Gelenek ve Görenek",
            "Kültürel Saygı",
            "KKTC",
            "Empati",
            "Hoşgörü"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u1_7",
              "front": "Milli kültür nedir?",
              "back": "Bir millete özgü olan, tarih boyunca kuşaktan kuşağa aktarılan maddi ve manevi değerlerin tamamıdır.",
              "tip": "Dil, bayramlar, yemekler, giysiler ve mimari.",
              "example": "Türk kahvesi ve lokum ikramı milli kültürümüzün bir parçasıdır."
            },
            {
              "id": "fc_sos_u1_8",
              "front": "Bölgelerimize ait halk oyunları nelerdir?",
              "back": "Ege Bölgesi: Zeybek, Karadeniz Bölgesi: Horon, Doğu ve Güneydoğu: Halay, Trakya: Karşılama, İç Anadolu: Kaşık Oyunu.",
              "tip": "Her oyun o yörenin coğrafi ve duygusal ritmini yansıtır.",
              "example": "Horon, Karadeniz’in hırçın dalgalarını ve hamsinin hareketliliğini simgeler."
            },
            {
              "id": "fc_sos_u1_9",
              "front": "KKTC ile kültürel bağlarımız nasıldır?",
              "back": "Kuzey Kıbrıs Türk Cumhuriyeti; aynı dili (Türkçe), tarihi, dini ve ortak milli değerleri paylaştığımız kardeş vatanımızdır.",
              "tip": "Gönül coğrafyamızın ayrılmaz bir parçasıdır.",
              "example": "Kıbrıs Türkleri de aynı bayramları ve gelenekleri coşkuyla kutlar."
            },
            {
              "id": "fc_sos_u1_10",
              "front": "Kültürel farklılıklara saygı duymak neden önemlidir?",
              "back": "Toplumsal barışı, huzuru, kardeşliği güçlendirir; ön yargıları yıkar ve birlikte yaşama kültürünü geliştirir.",
              "tip": "Farklılıklar ayrışma sebebi değil, birer zenginliktir.",
              "example": "Farklı mutfaklara veya geleneklere önyargısız yaklaşmak."
            },
            {
              "id": "fc_sos_u1_11",
              "front": "Milli bayramlarımız hangileridir?",
              "back": "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı, 19 Mayıs Atatürk’ü Anma Gençlik ve Spor Bayramı, 30 Ağustos Zafer Bayramı, 29 Ekim Cumhuriyet Bayramı, 15 Temmuz Demokrasi ve Milli Birlik Günü.",
              "tip": "Milletçe birlik ve beraberliğimizi pekiştirir.",
              "example": "29 Ekim’de tüm sokaklar Türk bayraklarıyla donatılır."
            },
            {
              "id": "fc_sos_u1_12",
              "front": "Somut Olmayan Kültürel Miras nedir?",
              "back": "Gözle görülen bir yapı olmayıp; kuşaktan kuşağa sözlü, sanatsal veya uygulamalı olarak aktarılan gelenek ve göreneklerdir.",
              "tip": "UNESCO listesinde yer alır.",
              "example": "Ebru sanatı, Kırkpınar yağlı güreşleri, Karagöz ve Hacivat gölge oyunu."
            }
          ],
          "matching": [
            {
              "id": "m_sos_1_7",
              "left": "Karadeniz Bölgesi",
              "right": "Horon ve Kemençe"
            },
            {
              "id": "m_sos_1_8",
              "left": "Ege Bölgesi",
              "right": "Zeybek ve Efeler"
            },
            {
              "id": "m_sos_1_9",
              "left": "Doğu ve Güneydoğu",
              "right": "Halay ve Davul-Zurna"
            },
            {
              "id": "m_sos_1_10",
              "left": "Konya / İç Anadolu",
              "right": "Mevlevi Sema Töreni"
            },
            {
              "id": "m_sos_1_11",
              "left": "Yavru Vatan",
              "right": "Kuzey Kıbrıs Türk Cumhuriyeti"
            },
            {
              "id": "m_sos_1_12",
              "left": "29 Ekim",
              "right": "Cumhuriyet Bayramı"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_1_7",
              "text": "Ülkemizin farklı bölgelerindeki halk oyunlarının farklı olması bir ayrışma değil, kültürel zenginliktir.",
              "isTrue": true,
              "explanation": "Doğru! Kültürel çeşitlilik ülkemizin tarihi ve coğrafi derinliğini gösterir."
            },
            {
              "id": "tf_sos_1_8",
              "text": "Bizden farklı kültür ve inançlara sahip insanlara saygı göstermek zorunda değiliz.",
              "isTrue": false,
              "explanation": "Yanlış! İnsan hakları ve toplumsal huzur gereği herkes birbirinin kültürüne saygı duymalıdır."
            },
            {
              "id": "tf_sos_1_9",
              "text": "Kuzey Kıbrıs Türk Cumhuriyeti ile dilimiz, tarihimiz ve geleneklerimiz ortaktır.",
              "isTrue": true,
              "explanation": "Doğru! KKTC ile Türkiye arasında köklü kardeşlik ve ortak kültürel bağlar vardır."
            },
            {
              "id": "tf_sos_1_10",
              "text": "Bayram ziyaretlerinde büyüklere el öpmek ve ikramda bulunmak geleneksel kültürümüzün bir parçasıdır.",
              "isTrue": true,
              "explanation": "Doğru! Saygı ve sevgi bağlarını güçlendiren en köklü geleneklerimizdendir."
            },
            {
              "id": "tf_sos_1_11",
              "text": "Gelenek ve görenekler hiçbir zaman değişmez ve toplumları birleştirmeye fayda sağlamaz.",
              "isTrue": false,
              "explanation": "Yanlış! Gelenekler toplumun birlik harcıdır ve çağın şartlarına göre yaşatılarak devam eder."
            },
            {
              "id": "tf_sos_1_12",
              "text": "UNESCO, tüm insanlığa ait tarihi ve kültürel mirasları koruyan uluslararası kuruluştur.",
              "isTrue": true,
              "explanation": "Doğru! UNESCO Dünya Mirası Listesi ile ortak değerleri korur."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_1_6",
              "sentence": "Karadeniz yöresinde kemençe eşliğinde hareketli adımlarla oynanan halk oyununa ___ denir.",
              "options": [
                "horon",
                "zeybek",
                "halay",
                "vals"
              ],
              "correctWord": "horon",
              "hint": "Hızlı ayak hareketleri ve kemençe."
            },
            {
              "id": "fb_sos_1_7",
              "sentence": "Bir milleti bir arada tutan maddi ve manevi değerler bütününe ___ denir.",
              "options": [
                "kültür",
                "konum",
                "ölçek",
                "iklim"
              ],
              "correctWord": "kültür",
              "hint": "Dil, gelenek, sanat ve tarih."
            },
            {
              "id": "fb_sos_1_8",
              "sentence": "Ege Bölgesi’nin cesareti ve yiğitliği simgeleyen ünlü halk oyununa ___ denir.",
              "options": [
                "zeybek",
                "horon",
                "kaşık oyunu",
                "bar"
              ],
              "correctWord": "zeybek",
              "hint": "Efeler diyarı."
            },
            {
              "id": "fb_sos_1_9",
              "sentence": "Türkiye ile aynı dili ve tarihi paylaşan \"Yavru Vatan\" olarak bilinen devlet ___ dir.",
              "options": [
                "KKTC",
                "Almanya",
                "Fransa",
                "Yunanistan"
              ],
              "correctWord": "KKTC",
              "hint": "Kuzey Kıbrıs Türk Cumhuriyeti."
            },
            {
              "id": "fb_sos_1_10",
              "sentence": "Su üzerine özel boyalar damlatılarak kağıda geçirilen geleneksel Türk süsleme sanatına ___ denir.",
              "options": [
                "ebru",
                "heykel",
                "mozaik",
                "çini"
              ],
              "correctWord": "ebru",
              "hint": "Kitre ve fırça ile su üzerinde sanat."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_1_6",
              "question": "Aşağıdakilerden hangisi milli kültürümüzü yansıtan unsurlardan biri DEĞİLDİR?",
              "options": [
                "Cadılar Bayramı kutlaması",
                "Kırkpınar yağlı güreşleri",
                "Misafire Türk kahvesi ve lokum ikramı",
                "Düğünlerde halay çekilmesi ve kına gecesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "Bizim tarihimizden ve geleneklerimizden gelmeyen unsuru bul.",
              "explanation": "Cadılar Bayramı Batı kültürüne aittir; Türk milli kültürünün parçası değildir."
            },
            {
              "id": "q_sos_1_7",
              "question": "Kuzey Kıbrıs Türk Cumhuriyeti (KKTC) ile Türkiye arasındaki bağlar aşağıdakilerden hangisiyle en iyi açıklanır?",
              "options": [
                "Ortak dil, tarih, kültür ve kardeşlik bağları",
                "Sadece ticari ortaklık",
                "Coğrafi olarak aynı kıtada yer almamaları",
                "Aralarında hiçbir tarihi bağ bulunmaması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Yavru vatan ile ana vatan ilişkisi.",
              "explanation": "KKTC ile Türkiye tek milletin fertleri olarak ortak dil, tarih ve kültürü paylaşır."
            },
            {
              "id": "q_sos_1_8",
              "question": "Farklı bir ilden veya ülkeden okulumuza yeni gelen bir öğrenciye karşı sergilememiz gereken en doğru tutum nedir?",
              "options": [
                "Kültürel farklılıklarına saygı gösterip okula uyumuna yardımcı olmak",
                "Farklı şivesiyle veya alışkanlıklarıyla alay etmek",
                "Onunla hiç konuşmayıp yalnız bırakmak",
                "Ondan uzak durmaları için diğer arkadaşları uyarmak"
              ],
              "correctAnswerIndex": 0,
              "hint": "Misafirperverlik ve empati erdemini düşün.",
              "explanation": "Farklılıklara saygı duymak ve yeni gelen arkadaşımıza sıcak davranmak milli değerlerimize uygundur."
            },
            {
              "id": "q_sos_1_9",
              "question": "Aşağıdaki halk oyunu ve bölge eşleştirmelerinden hangisi YANLIŞTIR?",
              "options": [
                "Horon — Akdeniz Bölgesi",
                "Zeybek — Ege Bölgesi",
                "Halay — Güneydoğu Anadolu Bölgesi",
                "Karşılama — Trakya Bölgesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "Horon kemençe ile Karadeniz kıyılarında oynanır.",
              "explanation": "Horon Akdeniz’e değil, Karadeniz Bölgesi’ne özgü bir halk oyunudur."
            },
            {
              "id": "q_sos_1_10",
              "question": "Milli bayramların milletimiz açısından en önemli işlevi aşağıdakilerden hangisidir?",
              "options": [
                "Birlik, beraberlik ve vatan sevgisi duygularını pekiştirmesi",
                "Okulların tatil olması sebebiyle dersleri unutturması",
                "Sadece törenlerde şiir okunmasını sağlaması",
                "İnsanların sadece televizyon izlemesine vesile olması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Milletçe bir araya gelmenin ruhunu düşün.",
              "explanation": "Milli bayramlar ortak zaferlerimizi ve egemenliğimizi hatırlatarak birlik duygumuzu pekiştirir."
            }
          ]
        },
        {
          "id": "sos_u1_t3",
          "title": "Yardımlaşma, Dayanışma ve Sosyal Sorumluluk",
          "kazanimCode": "SB.5.1.3",
          "kazanimDesc": "Toplumsal birliği sürdürmeye yönelik yardımlaşma ve dayanışma faaliyetlerine katkı sağlar, STK’lerin rolünü kavrar.",
          "summary": "\n• **Yardımlaşma ve Dayanışma:** Toplumu oluşturan bireylerin zor zamanlarda veya günlük hayatta birbirlerine destek olmasıdır.\n• **İmece Kültürü:** Köylerde ve mahallelerde tarlayı hasat etmek, ev yapmak veya kışlık hazırlığı için köylülerin el birliğiyle karşılıksız çalışmasıdır.\n• **Sadaka Taşı Geleneği:** Osmanlı döneminde cami avlularına konulan, varlıklı insanların gizlice para bıraktığı, ihtiyaç sahiplerinin de sadece ihtiyacı kadar aldığı onurlu yardımlaşma modelidir.\n• **Sivil Toplum Kuruluşları (STK):**\n  - Toplumsal sorunları çözmek için gönüllü insanların kurduğu resmi olmayan dernek ve vakıflardır.\n  - **Türk Kızılayı:** Afetlerde çadır, sıcak yemek, kan bağışı ve insani yardım sağlar.\n  - **Yeşilay:** Zararlı alışkanlıklarla (sigara, alkol, teknoloji bağımlılığı) mücadele eder.\n  - **AFAD:** Afet ve acil durumlarda arama-kurtarma ve kriz yönetimini yürütür (Devlet kurumu).\n  - **TEMA:** Toprak erozyonunu önlemek, ağaçlandırma yapmak ve doğayı korumak için çalışır.\n  - **Darüşşafaka:** Annesi veya babası vefat etmiş çocuklara kaliteli eğitim imkanı sunar.\n          ",
          "keyConcepts": [
            "Yardımlaşma",
            "Dayanışma",
            "İmece",
            "Sadaka Taşı",
            "STK",
            "Kızılay",
            "TEMA"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u1_13",
              "front": "İmece nedir?",
              "back": "Kırsal alanlarda ve mahallelerde köylülerin bir işi el birliğiyle, gönüllü ve karşılıksız olarak yapması geleneğidir.",
              "tip": "Tarlayı sürmek, fındık toplamak, yol yapmak.",
              "example": "Hasat zamanı komşuların birbirine yardım etmesi imecedir."
            },
            {
              "id": "fc_sos_u1_14",
              "front": "Sadaka Taşı nedir?",
              "back": "Osmanlı’da cami avlularında bulunan; zenginin gizlice para bıraktığı, fakirin rencide olmadan ihtiyacı kadar aldığı yardımlaşma taşıdır.",
              "tip": "Veren el ile alan el birbirini görmez.",
              "example": "İnsan onurunu koruyan eşsiz bir sosyal dayanışma örneğidir."
            },
            {
              "id": "fc_sos_u1_15",
              "front": "Türk Kızılayı ne iş yapar?",
              "back": "Deprem, sel gibi afetlerde barınma ve sıcak yemek temin eder; kan bağışı toplar ve yoksullara insani yardım ulaştırır.",
              "tip": "Kırmızı hilal simgesidir; 1868 yılında kurulmuştur.",
              "example": "Afet bölgesine ilk sıcak çorba ve çadırı Kızılay götürür."
            },
            {
              "id": "fc_sos_u1_16",
              "front": "TEMA Vakfı’nın amacı nedir?",
              "back": "Türkiye Erozyonla Mücadele, Ağaçlandırma ve Doğal Varlıkları Koruma Vakfı; erozyonu engellemek ve ormanları korumak için çalışır.",
              "tip": "Meşe palamudu ve fidan dikme kampanyaları düzenler.",
              "example": "\"Türkiye Çöl Olmasın\" sloganıyla bilinir."
            },
            {
              "id": "fc_sos_u1_17",
              "front": "Sivil Toplum Kuruluşları (STK) nasıl çalışır?",
              "back": "Devletten bağımsız olarak, gönüllü insanların bağış ve emekleriyle toplumsal sorunları çözmek için çalışırlar.",
              "tip": "Çalışanlar gönüllülük esasıyla destek verir.",
              "example": "Kızılay, TEMA, LÖSEV, Yeşilay birer STK örneğidir."
            },
            {
              "id": "fc_sos_u1_18",
              "front": "Toplumsal dayanışma bir ülkeye ne kazandırır?",
              "back": "Milli birliği pekiştirir, zor zamanlarda yaraların hızla sarılmasını sağlar ve insanlar arasındaki sevgi bağını güçlendirir.",
              "tip": "Deprem günlerinde tüm ülkenin tek yürek olması gibi.",
              "example": "Yardım kampanyalarıyla ihtiyaç sahiplerine umut olunur."
            }
          ],
          "matching": [
            {
              "id": "m_sos_1_13",
              "left": "Türk Kızılayı",
              "right": "Kan Bağışı, Sıcak Aş ve Çadır"
            },
            {
              "id": "m_sos_1_14",
              "left": "TEMA Vakfı",
              "right": "Erozyonla Mücadele ve Ağaçlandırma"
            },
            {
              "id": "m_sos_1_15",
              "left": "Yeşilay",
              "right": "Bağımlılıklarla Mücadele"
            },
            {
              "id": "m_sos_1_16",
              "left": "LÖSEV",
              "right": "Lösemili Çocuklara Sağlık ve Eğitim"
            },
            {
              "id": "m_sos_1_17",
              "left": "İmece",
              "right": "El Birliğiyle Karşılıksız Çalışma"
            },
            {
              "id": "m_sos_1_18",
              "left": "Sadaka Taşı",
              "right": "Osmanlı’da İncitmeden Yardımlaşma"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_1_13",
              "text": "Sivil toplum kuruluşlarında (STK) görev alan kişiler zorunlu olarak ve para karşılığı çalışırlar.",
              "isTrue": false,
              "explanation": "Yanlış! STK’lerde temel ilke gönüllülüktür; insanlar topluma fayda sağlamak için karşılıksız destek olur."
            },
            {
              "id": "tf_sos_1_14",
              "text": "İmece, atalarımızdan bize miras kalan çok değerli bir dayanışma ve yardımlaşma geleneğidir.",
              "isTrue": true,
              "explanation": "Doğru! İmece sayesinde en zor işler bile kolayca ve birlik içinde tamamlanır."
            },
            {
              "id": "tf_sos_1_15",
              "text": "Sadaka taşlarında amaç yardım alan insanı mahcup etmeden, gizlice desteklemektir.",
              "isTrue": true,
              "explanation": "Doğru! \"Sağ elin verdiğini sol el görmesin\" anlayışının zarif bir uygulamasıdır."
            },
            {
              "id": "tf_sos_1_16",
              "text": "Türk Kızılayı sadece Türkiye sınırları içinde yardım yapar, dünyadaki mazlumlara yardım götürmez.",
              "isTrue": false,
              "explanation": "Yanlış! Kızılay tüm dünyada afet ve savaş mağduru insanlara yardım ulaştıran küresel bir kuruluştur."
            },
            {
              "id": "tf_sos_1_17",
              "text": "Okulda ihtiyaç sahibi bir köy okulu için kitap toplama kampanyası düzenlemek sosyal sorumluluk örneğidir.",
              "isTrue": true,
              "explanation": "Doğru! Bu tür kampanyalar öğrencilerin paylaşma ve empati duygularını pekiştirir."
            },
            {
              "id": "tf_sos_1_18",
              "text": "Toplumda yardımlaşma azaldıkça insanlar arasındaki güven ve huzur artar.",
              "isTrue": false,
              "explanation": "Yanlış! Yardımlaşma azaldığında bencillik artar; dayanışma arttıkça huzur ve güven çoğalır."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_1_11",
              "sentence": "Kırsal bölgelerde işlerin köylüler tarafından el birliğiyle yapılmasına ___ usulü denir.",
              "options": [
                "imece",
                "ihale",
                "ticaret",
                "pazar"
              ],
              "correctWord": "imece",
              "hint": "Gönüllü dayanışma yöntemi."
            },
            {
              "id": "fb_sos_1_12",
              "sentence": "Kan bağışı, çadır ve afetlerde sıcak aş sağlayan en köklü yardım kuruluşumuz ___ dir.",
              "options": [
                "Türk Kızılayı",
                "TEMA",
                "Yeşilay",
                "TÜBİTAK"
              ],
              "correctWord": "Türk Kızılayı",
              "hint": "Kırmızı hilal sembolü."
            },
            {
              "id": "fb_sos_1_13",
              "sentence": "Erozyonla mücadele etmek ve ormanları korumak amacıyla kurulan vakıf ___ dır.",
              "options": [
                "TEMA",
                "Kızılay",
                "Yeşilay",
                "LÖSEV"
              ],
              "correctWord": "TEMA",
              "hint": "Meşe palamudu ve ağaçlandırma."
            },
            {
              "id": "fb_sos_1_14",
              "sentence": "Gönüllü insanların toplumsal fayda için bir araya gelerek oluşturduğu kurumlara ___ denir.",
              "options": [
                "STK",
                "şirket",
                "fabrika",
                "holding"
              ],
              "correctWord": "STK",
              "hint": "Sivil Toplum Kuruluşu kısaltması."
            },
            {
              "id": "fb_sos_1_15",
              "sentence": "Zararlı alışkanlıklarla ve bağımlılıkla mücadele eden cemiyet ___ dır.",
              "options": [
                "Yeşilay",
                "Kızılay",
                "TEMA",
                "AFAD"
              ],
              "correctWord": "Yeşilay",
              "hint": "Yeşil hilal sembolü."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_1_11",
              "question": "Osmanlı Devleti’nde cami avlularına yerleştirilen \"Sadaka Taşları\" uygulamasının en temel amacı nedir?",
              "options": [
                "İhtiyaç sahibini rencide etmeden ve gösteriş yapmadan gizlice yardım ulaştırmak",
                "Cami avlularını estetik heykellerle süslemek",
                "Camilerin güvenlik görevlilerini denetlemek",
                "Şehrin sınırlarını ve yönlerini belirlemek"
              ],
              "correctAnswerIndex": 0,
              "hint": "İnsan onurunu korumayı amaçlayan inceliği düşün.",
              "explanation": "Sadaka taşları, yardım edenin gururlanmasını ve yardım alanın utanmasını önleyen zarif bir ahlaki mirastır."
            },
            {
              "id": "q_sos_1_12",
              "question": "Aşağıdakilerden hangisi bir sivil toplum kuruluşunun (STK) özelliklerinden biri DEĞİLDİR?",
              "options": [
                "Yüksek kâr elde etmek amacıyla ürün ve hizmet satması",
                "Toplumsal sorunlara duyarlı gönüllü insanlardan oluşması",
                "Bağışlar ve üye aidatlarıyla faaliyetlerini yürütmesi",
                "Toplum yararını ve dayanışmayı gözetmesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "STK’lerin ticari bir şirket olmadığını hatırla.",
              "explanation": "Sivil toplum kuruluşları kâr amacı gütmezler; amaçları topluma ve çevreye karşılıksız fayda sağlamaktır."
            },
            {
              "id": "q_sos_1_13",
              "question": "Büyük bir sel felaketinin ardından afetzedelere giyecek, battaniye ve konserve toplayan 5-A sınıfı hangi alanda katkı sağlamıştır?",
              "options": [
                "Toplumsal yardımlaşma ve dayanışma",
                "Ticari pazarlama faaliyeti",
                "Bireysel kazanç sağlama",
                "Turistik gezi organizasyonu"
              ],
              "correctAnswerIndex": 0,
              "hint": "Afetzedelerin yaralarını sarmak için yapılan eylem.",
              "explanation": "Zor durumda olan insanlara yardım eli uzatmak toplumsal dayanışmanın en güzel örneğidir."
            },
            {
              "id": "q_sos_1_14",
              "question": "\"Ormanlarımızın yok olmasını engellemek, erozyon tehlikesine karşı milyonlarca fidan dikmek\" hangi vakfımızın temel görevidir?",
              "options": [
                "TEMA Vakfı",
                "Yeşilay",
                "Kızılay",
                "Darüşşafaka"
              ],
              "correctAnswerIndex": 0,
              "hint": "Toprak ve fidan dostu vakıf.",
              "explanation": "TEMA Vakfı erozyonla mücadele ve ağaçlandırma alanında öncü sivil toplum kuruluşudur."
            },
            {
              "id": "q_sos_1_15",
              "question": "Aşağıdakilerden hangisi \"imece\" usulüne uygun bir örnek oluşturur?",
              "options": [
                "Köy halkının fırtınada çatısı uçan okulun tamiratını hep birlikte el birliğiyle yapması",
                "Bir market sahibinin müşterisine fiş kesmesi",
                "Bir şirketin çalışanlarına maaş ödemesi",
                "Bir kişinin evinde tek başına televizyon izlemesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "El birliğiyle, para almadan ortak bir işi bitirme.",
              "explanation": "Ortaklaşa ve gönüllü olarak okulun çatısını tamir etmek tam bir imece örneğidir."
            }
          ]
        }
      ]
    },
    {
      "id": "sos_u2",
      "unitNumber": 2,
      "title": "2. Öğrenme Alanı: Evimiz Dünya",
      "description": "Konum, haritalar, doğal ve beşerî çevre, afet bilinci ve komşu devletlerimiz",
      "topics": [
        {
          "id": "sos_u2_t1",
          "title": "Yaşadığım İlin Göreceli Konumu ve Harita Bilgisi",
          "kazanimCode": "SB.5.2.1",
          "kazanimDesc": "Yaşadığı ilin göreceli konum özelliklerini algılar, fiziki haritaları okur ve lejantı yorumlar.",
          "interactiveLab": {
            "type": "sosyal-harita-lab",
            "title": "🗺️ Gerçek Türkiye Harita & Coğrafya Kaşifi",
            "initialTab": "map"
          },
          "summary": "\n• **Göreceli (Özel) Konum:** Bir yerin denizlere, komşu ülkelere, boğazlara, dağlara, ticaret yollarına ve önemli şehirlere göre bulunduğu konumdur.\n  - Örneğin: İstanbul iki kıtayı birbirine bağlayan boğazlara sahiptir. Rize Karadeniz kıyısındadır ve bol yağış alır.\n• **Harita Nedir?:** Yeryüzünün tamamının veya bir bölümünün kuş bakışı görünüşünün belli bir oranda küçültülerek (ölçek) düzleme aktarılmasıdır.\n• **Haritanın Unsurları:**\n  1. **Başlık:** Haritanın konusunu ve amacını belirtir.\n  2. **Kuş Bakışı Görünüş:** Tepeden dik açıyla bakıştır.\n  3. **Ölçek:** Küçültme oranıdır (Örn: 1/500.000).\n  4. **Yön Oku / Pusula:** Kuzeyi gösterir.\n  5. **Lejant (Harita Anahtarı):** Haritada kullanılan renk ve sembollerin ne anlama geldiğini gösteren tablodur.\n• **Fiziki Haritalarda Renklerin Anlamı (Yükselti Basamakları):**\n  - **Mavi:** Deniz, göl ve akarsular (Koyulaştıkça derinlik artar).\n  - **Yeşil:** 0 - 500 metre arası alçak ovalar ve kıyı düzlükleri (Orman demek DEĞİLDİR!).\n  - **Sarı:** 500 - 1000 metre arası platolar ve orta yükseltiler.\n  - **Kahverengi:** 1000 metre ve üzeri yüksek dağlar (Koyulaştıkça yükselti artar).\n          ",
          "keyConcepts": [
            "Göreceli Konum",
            "Harita",
            "Ölçek",
            "Lejant",
            "Kuş Bakışı",
            "Fiziki Harita",
            "Yükselti"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u2_1",
              "front": "Fiziki haritalarda renkler neyi gösterir?",
              "back": "Deniz seviyesine göre yükselti basamaklarını gösterir. Orman veya bitki örtüsünü göstermez!",
              "tip": "Yeşil = 0-500 m, Sarı = 500-1000 m, Kahverengi = 1000+ m.",
              "example": "Çukurova yeşil renkle, Ağrı Dağı koyu kahverengi ile gösterilir."
            },
            {
              "id": "fc_sos_u2_2",
              "front": "Lejant (Harita Anahtarı) nedir?",
              "back": "Haritanın köşesinde bulunan, harita üzerindeki işaretlerin, renklerin ve sembollerin ne anlama geldiğini açıklayan tablodur.",
              "tip": "Haritanın kullanım kılavuzudur.",
              "example": "Küçük bir uçak simgesinin havaalanını gösterdiğini lejanttan anlarız."
            },
            {
              "id": "fc_sos_u2_3",
              "front": "Göreceli konum nedir?",
              "back": "Bir yerin kıtalara, denizlere, boğazlara, komşulara ve ulaşım yollarına göre belirlenen özel konumudur.",
              "tip": "Türkiye’nin Asya ile Avrupa arasında köprü olması göreceli konumudur.",
              "example": "Antalya’nın Akdeniz kıyısında olması bir göreceli konum özelliğidir."
            },
            {
              "id": "fc_sos_u2_4",
              "front": "Ölçek nedir?",
              "back": "Yeryüzündeki gerçek uzunlukların haritaya aktarılırken kaç kat küçültüldüğünü gösteren orandır.",
              "tip": "Örn: 1/1.000.000 (Gerçekte 1 milyon kat daha büyüktür).",
              "example": "Ölçek olmasa haritalar devasa boyutlarda çizilmek zorunda kalırdı."
            },
            {
              "id": "fc_sos_u2_5",
              "front": "Kuş bakışı görünüş ne demektir?",
              "back": "Bir yere tam tepeden, dik bir açıyla (90 derece) bakılması durumudur.",
              "tip": "Uçaktan veya uydudan doğrudan aşağıya bakmak gibi.",
              "example": "Harita çizerken kuş bakışı bakış açısı zorunludur."
            },
            {
              "id": "fc_sos_u2_6",
              "front": "Plato ile Ova arasındaki fark nedir?",
              "back": "Ova çevresine göre alçakta kalan düzlüklerdir; plato ise akarsular tarafından derin vadilerle yarılmış yüksek düzlüklerdir.",
              "tip": "Konya Ovası vs Haymana Platosu.",
              "example": "Ovalar genellikle tarım için çok verimlidir."
            }
          ],
          "matching": [
            {
              "id": "m_sos_2_1",
              "left": "0 - 500 Metre",
              "right": "Yeşil Renk (Alçak Düzlükler)"
            },
            {
              "id": "m_sos_2_2",
              "left": "500 - 1000 Metre",
              "right": "Sarı Renk (Orta Yükselti)"
            },
            {
              "id": "m_sos_2_3",
              "left": "1000 Metre ve Üzeri",
              "right": "Kahverengi Renk (Yüksek Dağlar)"
            },
            {
              "id": "m_sos_2_4",
              "left": "Lejant",
              "right": "Harita İşaretler Tablosu"
            },
            {
              "id": "m_sos_2_5",
              "left": "Ölçek",
              "right": "Küçültme Oranı"
            },
            {
              "id": "m_sos_2_6",
              "left": "Kuş Bakışı",
              "right": "Tepeden Dik Açıyla Bakış"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_2_1",
              "text": "Fiziki haritalarda yeşil renkle gösterilen yerler gür ormanlık alanları ifade eder.",
              "isTrue": false,
              "explanation": "Yanlış! Yeşil renk bitki örtüsünü değil, deniz seviyesine yakın alçak yerleri (0-500 metre) gösterir."
            },
            {
              "id": "tf_sos_2_2",
              "text": "Haritaların bir köşesinde yer alan lejant, sembollerin ne anlama geldiğini açıklar.",
              "isTrue": true,
              "explanation": "Doğru! Lejant haritanın dilini ve işaretlerini çözmemizi sağlar."
            },
            {
              "id": "tf_sos_2_3",
              "text": "Bir çizimin harita olabilmesi için kuş bakışı çizilmesi ve bir ölçeğe sahip olması gerekir.",
              "isTrue": true,
              "explanation": "Doğru! Ölçek ve kuş bakışı görünüş haritanın vazgeçilmez iki şartıdır."
            },
            {
              "id": "tf_sos_2_4",
              "text": "Türkiye’de batıdan doğuya doğru gidildikçe yükselti artar ve kahverengi tonları yoğunlaşır.",
              "isTrue": true,
              "explanation": "Doğru! Ülkemizin en yüksek bölgesi Doğu Anadolu’dur ve haritada koyu kahverengidir."
            },
            {
              "id": "tf_sos_2_5",
              "text": "Denizler fiziki haritalarda daima sarı renkle çizilir.",
              "isTrue": false,
              "explanation": "Yanlış! Su kütleleri (deniz, göl, akarsu) mavi renkle gösterilir."
            },
            {
              "id": "tf_sos_2_6",
              "text": "İstanbul ve Çanakkale boğazlarına sahip olmak Türkiye’nin göreceli konum özelliğidir.",
              "isTrue": true,
              "explanation": "Doğru! Boğazlar jeopolitik ve ticari açıdan ülkemize büyük stratejik üstünlük sağlar."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_2_1",
              "sentence": "Haritada kullanılan işaretlerin ne anlama geldiğini gösteren tabloya ___ denir.",
              "options": [
                "lejant",
                "ölçek",
                "kroki",
                "koordinat"
              ],
              "correctWord": "lejant",
              "hint": "Harita anahtarı da denir."
            },
            {
              "id": "fb_sos_2_2",
              "sentence": "Fiziki haritalarda deniz seviyesine yakın yerler (0-500 m) ___ renkle gösterilir.",
              "options": [
                "yeşil",
                "kahverengi",
                "mor",
                "kırmızı"
              ],
              "correctWord": "yeşil",
              "hint": "Kıyı ovalarının rengidir."
            },
            {
              "id": "fb_sos_2_3",
              "sentence": "Yeryüzündeki uzunlukların küçültülme oranına ___ denir.",
              "options": [
                "ölçek",
                "pusula",
                "lejant",
                "enlem"
              ],
              "correctWord": "ölçek",
              "hint": "1/100.000 gibi pay ve paydalı oran."
            },
            {
              "id": "fb_sos_2_4",
              "sentence": "Fiziki haritada dağlar ve yüksek alanlar ___ renk tonlarıyla çizilir.",
              "options": [
                "kahverengi",
                "mavi",
                "yeşil",
                "pembe"
              ],
              "correctWord": "kahverengi",
              "hint": "Ağrı Dağı ve Toroslar bu renktedir."
            },
            {
              "id": "fb_sos_2_5",
              "sentence": "Bir yere tam tepeden dik bir açıyla bakılmasına ___ görünüş denir.",
              "options": [
                "kuş bakışı",
                "ufuk",
                "profil",
                "yan"
              ],
              "correctWord": "kuş bakışı",
              "hint": "Uçar gibi yukarıdan bakış."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_2_1",
              "question": "Fiziki haritayı inceleyen Ali, Çukurova’nın yeşil renkle, Erzurum-Kars Platosu’nun ise koyu kahverengi ile boyandığını görmüştür. Bu durumun temel sebebi nedir?",
              "options": [
                "Çukurova’nın deniz seviyesine yakın olması, Erzurum-Kars’ın ise çok yüksek olması",
                "Çukurova’da çok sık orman olması, Erzurum’da hiç ağaç olmaması",
                "Erzurum’da sadece kahve tarımı yapılması",
                "Çukurova’da yağmurun hiç yağmaması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Fiziki haritalardaki renklerin yükseltiyi gösterdiğini hatırla.",
              "explanation": "Yeşil alçak yükseltileri (0-500m), kahverengi ise yüksek alanları (1000m+) temsil eder."
            },
            {
              "id": "q_sos_2_2",
              "question": "Bir çizimin \"harita\" olarak kabul edilebilmesi için aşağıdakilerden hangisi ZORUNLUDUR?",
              "options": [
                "Belirli bir ölçek dahilinde kuş bakışı olarak düzleme çizilmiş olması",
                "Sadece sulu boya ile çizilmiş olması",
                "İçinde mutlaka resimlerin ve fotoğrafların yer alması",
                "Sadece dağlık alanları göstermesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "Kuş bakışı ve ölçek kuralını düşün.",
              "explanation": "Harita olmanın iki temel bilimsel şartı kuş bakışı çizim ve ölçek küçültmesidir."
            },
            {
              "id": "q_sos_2_3",
              "question": "Harita üzerindeki sembolleri (hastane, demir yolu, göl sınırı vb.) doğru anlamak isteyen bir turist haritanın hangi bölümüne bakmalıdır?",
              "options": [
                "Lejant (Harita Anahtarı)",
                "Yalnızca pusula ibresine",
                "Haritanın boş kenarlıklarına",
                "Haritanın arka kapağına"
              ],
              "correctAnswerIndex": 0,
              "hint": "Semboller ve işaretler tablosudur.",
              "explanation": "Lejant haritadaki sembol ve renklerin ne ifade ettiğini gösterir."
            },
            {
              "id": "q_sos_2_4",
              "question": "Aşağıdakilerden hangisi Türkiye’nin göreceli (özel) konumunun sağladığı faydalardan biridir?",
              "options": [
                "Asya ve Avrupa kıtalarını birbirine bağlayan önemli enerji ve ticaret yolları üzerinde olması",
                "Kış mevsiminde kar yağması",
                "Dünya’nın Güneş etrafında dönmesi",
                "Dört mevsimin birbirini takip etmesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "Ülkemizin bulunduğu özel coğrafi ve stratejik avantaja bak.",
              "explanation": "Kıtalar arası köprü konumu ve boğazlar Türkiye’nin dünya çapındaki özel konum zenginliğidir."
            },
            {
              "id": "q_sos_2_5",
              "question": "Akarsular tarafından derin yarılmış, çevresine göre yüksekte bulunan geniş düzlüklere ne ad verilir?",
              "options": [
                "Plato",
                "Ova",
                "Vadi",
                "Göl"
              ],
              "correctAnswerIndex": 0,
              "hint": "Haymana, Bozok, Cihanbeyli birer...",
              "explanation": "Yüksekteki geniş düzlüklere plato denir; ovalar ise alçaktaki düzlüklerdir."
            }
          ]
        },
        {
          "id": "sos_u2_t2",
          "title": "Doğal ve Beşerî Çevredeki Değişim",
          "kazanimCode": "SB.5.2.2",
          "kazanimDesc": "Yaşadığı ilde doğal ve beşerî çevredeki değişimi neden ve sonuçlarıyla yorumlar, çevre bilinci kazanır.",
          "summary": "\n• **Doğal Çevre:** İnsan eli değmeden, doğada kendiliğinden oluşmuş unsurlardır.\n  - Dağlar (Ağrı Dağı), göller (Van Gölü), akarsular (Kızılırmak), denizler, ormanlar ve mağaralar.\n• **Beşerî Çevre:** İnsanların ihtiyaçlarını karşılamak (barınma, ulaşım, enerji) amacıyla doğayı değiştirerek yaptığı unsurlardır.\n  - Binalar, köprüler (Çanakkale 1915 Köprüsü), barajlar (Atatürk Barajı), yollar, tüneller, fabrikalar ve parklar.\n• **İnsanın Doğaya Etkisi:**\n  - Nüfus artışı ve sanayileşme ile ormanlar azalmakta, betonlaşma artmaktadır.\n  - Hava, su ve toprak kirliliği canlıların yaşamını tehdit eder.\n• **Sürdürülebilirlik:** Doğal kaynakları tüketmeden, gelecek nesillerin de hakkını gözeterek doğayı koruyarak kalkınmaktır.\n          ",
          "keyConcepts": [
            "Doğal Çevre",
            "Beşerî Çevre",
            "Baraj",
            "Köprü",
            "Çevre Kirliliği",
            "Geri Dönüşüm",
            "Sürdürülebilirlik"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u2_7",
              "front": "Doğal unsur ile Beşerî unsur arasındaki fark nedir?",
              "back": "Doğal unsurlar doğada kendiliğinden var olan varlıklardır (dağ, nehir); beşerî unsurlar ise insan emeğiyle yapılan eserlerdir (köprü, baraj).",
              "tip": "\"Beşer\" Arapça insan demektir; beşerî = insana ait.",
              "example": "Manyas Gölü doğal; üzerindeki baraj beşerî unsurdur."
            },
            {
              "id": "fc_sos_u2_8",
              "front": "İnsanlar beşerî çevreyi neden inşa eder?",
              "back": "Barınma, beslenme, ulaşım, elektrik enerjisi üretme ve eğitim gibi temel ihtiyaçlarını karşılamak için inşa ederler.",
              "tip": "Evler barınmak, köprüler ulaşım sağlamak içindir.",
              "example": "Keban Barajı elektrik üretmek ve sulama yapmak için yapılmıştır."
            },
            {
              "id": "fc_sos_u2_9",
              "front": "Hızlı şehirleşmenin doğal çevreye olumsuz etkileri nelerdir?",
              "back": "Ormanlık ve tarım arazilerinin betonlaşması, hava kirliliği, su kaynaklarının kirlenmesi ve biyoçeşitliliğin azalmasıdır.",
              "tip": "Yeşil alanların korunması hayati önemdedir.",
              "example": "Sanayi atıklarının akarsulara dökülmesi balıkların ölümüne yol açar."
            },
            {
              "id": "fc_sos_u2_10",
              "front": "Geri dönüşüm çevreye nasıl katkı sağlar?",
              "back": "Ağaçların kesilmesini önler, enerji tasarrufu sağlar, çöp miktarını azaltır ve doğal kaynakları korur.",
              "tip": "1 ton kağıt geri dönüştürüldüğünde 17 ağaç kurtulur.",
              "example": "Plastik, cam ve pilleri ayrı kutulara atmak."
            },
            {
              "id": "fc_sos_u2_11",
              "front": "Doğal anıt nedir?",
              "back": "Doğa olayları sonucu kendiliğinden oluşmuş, büyüleyici güzellikteki eşsiz doğa harikalarıdır.",
              "tip": "İnsan eli değmemiştir.",
              "example": "Nevşehir Peri Bacaları, Denizli Pamukkale Travertenleri, Damlataş Mağarası."
            },
            {
              "id": "fc_sos_u2_12",
              "front": "Tarihi eser nedir?",
              "back": "Geçmişte yaşamış uygarlıkların yaptığı kale, cami, saray, köprü ve antik kent gibi insan yapımı eserlerdir.",
              "tip": "İnsan yapımıdır ve geçmişten günümüze kalmıştır.",
              "example": "Sümela Manastırı, Topkapı Sarayı, Efes Antik Kenti."
            }
          ],
          "matching": [
            {
              "id": "m_sos_2_7",
              "left": "Peri Bacaları (Nevşehir)",
              "right": "Doğal Anıt"
            },
            {
              "id": "m_sos_2_8",
              "left": "Pamukkale Travertenleri",
              "right": "Doğal Güzellik"
            },
            {
              "id": "m_sos_2_9",
              "left": "Topkapı Sarayı",
              "right": "Tarihi Eser (Beşerî Miras)"
            },
            {
              "id": "m_sos_2_10",
              "left": "Atatürk Barajı",
              "right": "Beşerî Unsur (Elektrik/Sulama)"
            },
            {
              "id": "m_sos_2_11",
              "left": "Van Gölü",
              "right": "Doğal Göl"
            },
            {
              "id": "m_sos_2_12",
              "left": "Çanakkale 1915 Köprüsü",
              "right": "Beşerî Ulaşım Yapısı"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_2_7",
              "text": "Barajlar, köprüler ve fabrikalar doğal unsurlara örnektir.",
              "isTrue": false,
              "explanation": "Yanlış! İnsanların kendi elleriyle inşa ettiği tüm yapılar beşerî unsurdur."
            },
            {
              "id": "tf_sos_2_8",
              "text": "Nevşehir’deki Peri Bacaları rüzgar ve sel sularının tüfleri aşındırmasıyla oluşmuş doğal anıtlardır.",
              "isTrue": true,
              "explanation": "Doğru! Doğa olaylarının milyonlarca yılda oluşturduğu eşsiz güzelliktir."
            },
            {
              "id": "tf_sos_2_9",
              "text": "İnsanların doğayı değiştirirken çevreye ve ormanlara zarar vermemesi gerekir.",
              "isTrue": true,
              "explanation": "Doğru! Doğayı korumak ve sürdürülebilir kalkınmayı gözetmek geleceğimiz için şarttır."
            },
            {
              "id": "tf_sos_2_10",
              "text": "Geri dönüşüm kutularına atılan plastikler ve kağıtlar doğal kaynakların tükenmesini hızlandırır.",
              "isTrue": false,
              "explanation": "Yanlış! Geri dönüşüm doğal kaynakları korur, enerji tasarrufu sağlar."
            },
            {
              "id": "tf_sos_2_11",
              "text": "Pamukkale Travertenleri kalsiyumlu termal suların bıraktığı tortularla oluşan doğal bir zenginliktir.",
              "isTrue": true,
              "explanation": "Doğru! UNESCO koruması altındaki benzersiz doğal mirasımızdır."
            },
            {
              "id": "tf_sos_2_12",
              "text": "Bir şehirde fabrika bacalarına filtre takılması hava kirliliğini artırır.",
              "isTrue": false,
              "explanation": "Yanlış! Filtreler zararlı duman ve gazları tutarak hava kirliliğini önler."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_2_6",
              "sentence": "İnsan etkisi olmadan doğada kendiliğinden oluşan dağ ve göllere ___ unsur denir.",
              "options": [
                "doğal",
                "beşerî",
                "tarihi",
                "teknolojik"
              ],
              "correctWord": "doğal",
              "hint": "İnsan eli değmemiştir."
            },
            {
              "id": "fb_sos_2_7",
              "sentence": "İnsanların elektrik üretmek ve tarlaları sulamak amacıyla nehirler üzerine kurduğu göletlere ___ denir.",
              "options": [
                "baraj",
                "vadi",
                "şelale",
                "kaynak"
              ],
              "correctWord": "baraj",
              "hint": "Atatürk, Keban gibi devasa su setleri."
            },
            {
              "id": "fb_sos_2_8",
              "sentence": "Rüzgâr ve su aşındırmasıyla oluşmuş Peri Bacaları bir ___ anıt örneğidir.",
              "options": [
                "doğal",
                "tarihi",
                "beşerî",
                "askeri"
              ],
              "correctWord": "doğal",
              "hint": "Doğanın kendi heykelleridir."
            },
            {
              "id": "fb_sos_2_9",
              "sentence": "Geçmiş uygarlıklardan günümüze ulaşan kale, cami ve saraylara ___ eser denir.",
              "options": [
                "tarihi",
                "doğal",
                "jeolojik",
                "modern"
              ],
              "correctWord": "tarihi",
              "hint": "İnsan eliyle yapılmış ortak miras."
            },
            {
              "id": "fb_sos_2_10",
              "sentence": "Atık kağıt, cam ve metallerin yeniden fabrikalarda işlenip kullanılmasına ___ denir.",
              "options": [
                "geri dönüşüm",
                "erozyon",
                "tüketim",
                "tasfiye"
              ],
              "correctWord": "geri dönüşüm",
              "hint": "Ağaçları kurtaran yeşil döngü."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_2_6",
              "question": "Aşağıda verilenlerden hangisi \"beşerî bir unsur\" örneğidir?",
              "options": [
                "Çanakkale Boğazı üzerindeki 1915 Çanakkale Köprüsü",
                "Antalya’daki Düden Şelalesi",
                "Bursa’daki Uludağ",
                "Denizli’deki Pamukkale Travertenleri"
              ],
              "correctAnswerIndex": 0,
              "hint": "İnsanların mühendislik ve emekle inşa ettiği eseri bul.",
              "explanation": "Köprüler insan yapımıdır ve beşerî unsurdur. Şelale, dağ ve travertenler ise doğaldır."
            },
            {
              "id": "q_sos_2_7",
              "question": "Doğal çevre ile ilgili aşağıda verilen bilgilerden hangisi DOĞRUDUR?",
              "options": [
                "Oluşumunda insanların hiçbir müdahalesi ve emeği yoktur",
                "Sadece tuğla ve çimentoyla inşa edilirler",
                "Hepsi geçmiş padişahlar tarafından yaptırılmıştır",
                "Sadece şehir merkezlerinde bulunurlar"
              ],
              "correctAnswerIndex": 0,
              "hint": "Doğallığın temel tanımını hatırla.",
              "explanation": "Doğal unsurlar doğa olayları ve zaman içerisinde kendiliğinden meydana gelir."
            },
            {
              "id": "q_sos_2_8",
              "question": "Bir bölgedeki ağaçların kesilerek yerine sanayi tesislerinin yapılması durumunda aşağıdakilerden hangisinin gerçekleşmesi BEKLENMEZ?",
              "options": [
                "Havadaki oksijen oranının ve temiz havanın artması",
                "Toprak erozyonu tehlikesinin büyümesi",
                "O bölgede yaşayan kuş ve canlı türlerinin azalması",
                "Hava ve su kirliliğinin artması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Ağaçlar kesilirse temiz hava artmaz, tam tersine azalır.",
              "explanation": "Ağaçlar oksijen üretir; ağaçlar kesildiğinde hava kirlenir, temiz hava asla artmaz."
            },
            {
              "id": "q_sos_2_9",
              "question": "Nevşehir Peri Bacaları ile Selimiye Camii arasındaki en temel fark aşağıdakilerden hangisidir?",
              "options": [
                "Peri Bacaları doğal anıt iken Selimiye Camii tarihi ve beşerî bir eserdir",
                "Her ikisi de insanlar tarafından aynı yılda yapılmıştır",
                "Her ikisi de su altında yer almaktadır",
                "İkisi de sadece kışın ortaya çıkmaktadır"
              ],
              "correctAnswerIndex": 0,
              "hint": "Biri doğa aşındırması, diğeri Mimar Sinan şaheseridir.",
              "explanation": "Peri Bacaları doğa eseridir; Selimiye Camii ise Mimar Sinan’ın inşa ettiği beşerî tarihi mirastır."
            },
            {
              "id": "q_sos_2_10",
              "question": "Aşağıdaki davranışlardan hangisi doğal çevreyi korumaya yönelik duyarlı bir harekettir?",
              "options": [
                "Pilleri ve plastik atıkları toprağa veya suya atmayıp geri dönüşüm kutusuna atmak",
                "Piknik yaptıktan sonra çöpleri ormanda bırakmak",
                "Evsel yağları lavaboya dökerek kanalizasyona karıştırmak",
                "Ağaç dallarını kırıp yakmak"
              ],
              "correctAnswerIndex": 0,
              "hint": "Toprağı ve suyu koruyan doğru alışkanlık.",
              "explanation": "Atık piller ve plastikler geri dönüştürülmeli; toprağa ve suya asla karışmamalıdır."
            }
          ]
        },
        {
          "id": "sos_u2_t3",
          "title": "Çevremizdeki Afetler ve Afet Bilinci",
          "kazanimCode": "SB.5.2.3",
          "kazanimDesc": "Meydana gelebilecek afetlerin etkilerini azaltmaya yönelik farkındalık kazanır, afet çantası ve önlemleri öğrenir.",
          "summary": "\n• **Doğal Afet:** Can ve mal kaybına neden olan, büyük ölçüde insanların kontrolü dışında gerçekleşen doğa olaylarıdır.\n  - **Deprem:** Yer kabuğundaki fay hatlarının kırılmasıyla oluşan yer sarsıntılarıdır. Türkiye aktif deprem kuşağındadır.\n  - **Heyelan (Toprak Kayması):** Eğimli yamaçlarda, aşırı yağış ve killi toprak nedeniyle toprağın aşağıya kaymasıdır. En çok **Karadeniz Bölgesi**nde görülür.\n  - **Sel ve Su Baskını:** Aşırı yağışlar ve eriyen karlar sonucu akarsuların taşmasıdır. Dere yataklarına ev yapılmamalıdır!\n  - **Erozyon:** Bitki örtüsünün tahrip olmasıyla verimli üst toprağın rüzgar ve sularla süpürülmesidir. Çözüm: **Ağaçlandırma (TEMA)**.\n  - **Çığ:** Dik dağ yamaçlarında biriken kar kütlesinin aşağı doğru kaymasıdır. En çok **Doğu Anadolu**da görülür.\n• **Deprem Öncesi, Anı ve Sonrası:**\n  - **Öncesi:** Evdeki ağır dolap ve eşyalar duvara sabitlenmeli, **Afet ve Acil Durum Çantası** hazırlanmalıdır.\n  - **Anı:** Asansör veya merdivenlere koşulmaz! **Çök - Kapan - Tutun** pozisyonu alınır.\n  - **Sonrası:** Gaz ve elektrik vanaları kapatılır, acil toplanma alanına gidilir.\n• **AFAD:** Afet ve Acil Durum Yönetimi Başkanlığı.\n          ",
          "keyConcepts": [
            "Doğal Afet",
            "Deprem",
            "Heyelan",
            "Sel",
            "Erozyon",
            "Çığ",
            "Afet Çantası",
            "Çök-Kapan-Tutun",
            "AFAD"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u2_13",
              "front": "Deprem anında ne yapılmalıdır?",
              "back": "Paniğe kapılmadan sağlam bir eşyanın (koltuk, baza) yanında ÇÖK - KAPAN - TUTUN pozisyonu alınmalıdır. Asansör ve balkonlardan uzak durulmalıdır.",
              "tip": "Pencerelerden ve camlardan uzak durulmalıdır.",
              "example": "Başımızı yastık veya kollarımızla korumalıyız."
            },
            {
              "id": "fc_sos_u2_14",
              "front": "Afet Çantası’nda neler bulunmalıdır?",
              "back": "Su, bozulmayan konserve gıdalar, ilk yardım çantası, düdük, el feneri, yedek piller, battaniye, radyo ve önemli evrak fotokopileri.",
              "tip": "Her an kolay ulaşılabilecek bir yerde tutulmalıdır.",
              "example": "Enkaz altında ses duyurmak için düdük hayati önem taşır."
            },
            {
              "id": "fc_sos_u2_15",
              "front": "Heyelan (Toprak Kayması) en çok hangi bölgemizde görülür?",
              "back": "Engebeli arazi yapısı, killi toprak ve bol yağış nedeniyle en çok Karadeniz Bölgesi’nde görülür.",
              "tip": "Aşırı yağış alan dik yamaçlara dikkat!",
              "example": "Rize ve Trabzon yaylalarında ilkbaharda sık yaşanır."
            },
            {
              "id": "fc_sos_u2_16",
              "front": "Erozyon nedir ve nasıl önlenir?",
              "back": "Verimli tarım toprağının rüzgâr ve sularla süpürülmesidir. Ağaçlandırma yaparak ve bitki örtüsünü koruyarak önlenir.",
              "tip": "Ağaç kökleri toprağı bir ağ gibi sımsıkı tutar.",
              "example": "TEMA Vakfı erozyona karşı milyonlarca fidan dikmektedir."
            },
            {
              "id": "fc_sos_u2_17",
              "front": "Çığ afeti nerelerde görülür?",
              "back": "Kar yağışının bol ve arazinin dik, dağlık olduğu yerlerde; özellikle Doğu Anadolu Bölgesi’nde görülür.",
              "tip": "Yüksek ses ve titreşim kar kütlesini harekete geçirebilir.",
              "example": "Hakkari ve Van’ın dağ yollarında kışın çığ riski yüksektir."
            },
            {
              "id": "fc_sos_u2_18",
              "front": "Sel felaketinin zararları nasıl azaltılır?",
              "back": "Dere yataklarına ev ve bina yapılmamalı, akarsu kenarlarına bentler kurulmalı ve ormanlık alanlar korunmalıdır.",
              "tip": "Su daima kendi yatağını arar.",
              "example": "Yağmur suyu drenaj kanallarının temiz tutulması."
            }
          ],
          "matching": [
            {
              "id": "m_sos_2_13",
              "left": "Karadeniz Bölgesi",
              "right": "Heyelan (Toprak Kayması)"
            },
            {
              "id": "m_sos_2_14",
              "left": "Doğu Anadolu Bölgesi",
              "right": "Çığ Afeti (Kar Kayması)"
            },
            {
              "id": "m_sos_2_15",
              "left": "Erozyonun Çözümü",
              "right": "Ağaçlandırma Yapmak (TEMA)"
            },
            {
              "id": "m_sos_2_16",
              "left": "Deprem Anı Kuralı",
              "right": "Çök - Kapan - Tutun"
            },
            {
              "id": "m_sos_2_17",
              "left": "Afet Çantası Parçası",
              "right": "Düdük, El Feneri ve Su"
            },
            {
              "id": "m_sos_2_18",
              "left": "AFAD",
              "right": "Afet ve Acil Durum Yönetimi"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_2_13",
              "text": "Deprem anında hızla asansöre binip binayı terk etmeye çalışmalıyız.",
              "isTrue": false,
              "explanation": "Yanlış! Deprem anında asansörler elektrik kesintisiyle düşebilir veya sıkışabilir; asla kullanılmaz!"
            },
            {
              "id": "tf_sos_2_14",
              "text": "Evdeki büyük dolap, vitrin ve kitaplıkların duvara sabitlenmesi depremde hayat kurtarır.",
              "isTrue": true,
              "explanation": "Doğru! Deprem yaralanmalarının çoğu devrilen eşyalardan kaynaklanır."
            },
            {
              "id": "tf_sos_2_15",
              "text": "Heyelan tehlikesi en çok düz ve kurak ovalarda görülür.",
              "isTrue": false,
              "explanation": "Yanlış! Heyelan eğimli yamaçlarda ve bol yağış alan yerlerde (Karadeniz) görülür."
            },
            {
              "id": "tf_sos_2_16",
              "text": "Ağaç dikmek ve ormanları çoğaltmak toprağın erozyonla yok olmasını engeller.",
              "isTrue": true,
              "explanation": "Doğru! Ağaç kökleri toprağı süpürülmekten koruyan en doğal kalkandır."
            },
            {
              "id": "tf_sos_2_17",
              "text": "Afet çantasını gardırobun en arkasındaki kilitli sandığa saklamalıyız.",
              "isTrue": false,
              "explanation": "Yanlış! Afet çantası çıkış kapısına yakın ve anında ulaşılabilecek bir yerde durmalıdır."
            },
            {
              "id": "tf_sos_2_18",
              "text": "Dere yataklarına binalar yapmak sel felaketinin can ve mal kaybını artırır.",
              "isTrue": true,
              "explanation": "Doğru! Dere yatakları asla yerleşime açılmamalıdır."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_2_11",
              "sentence": "Deprem anında sarsıntı geçene kadar uygulanması gereken temel pozisyon ___ dur.",
              "options": [
                "Çök-Kapan-Tutun",
                "Koş-Atla-Kaç",
                "Ayağa Kalk",
                "Pencereye Koş"
              ],
              "correctWord": "Çök-Kapan-Tutun",
              "hint": "Sağlam bir eşya yanında hedef küçültme."
            },
            {
              "id": "fb_sos_2_12",
              "sentence": "Bol yağış ve dik yamaçlar sebebiyle heyelan en fazla ___ Bölgesi’nde yaşanır.",
              "options": [
                "Karadeniz",
                "Güneydoğu",
                "İç Anadolu",
                "Ege"
              ],
              "correctWord": "Karadeniz",
              "hint": "Rize, Trabzon, Artvin kıyıları."
            },
            {
              "id": "fb_sos_2_13",
              "sentence": "Verimli toprakların rüzgâr ve su ile süpürülüp yok olmasına ___ denir.",
              "options": [
                "erozyon",
                "deprem",
                "çığ",
                "tsunami"
              ],
              "correctWord": "erozyon",
              "hint": "Toprak kaybı."
            },
            {
              "id": "fb_sos_2_14",
              "sentence": "Eğimli dağ yamaçlarında biriken büyük kar kütlelerinin kaymasına ___ denir.",
              "options": [
                "çığ",
                "sel",
                "hortum",
                "kuraklık"
              ],
              "correctWord": "çığ",
              "hint": "Kışın dik dağ yamaçlarında olur."
            },
            {
              "id": "fb_sos_2_15",
              "sentence": "Afet durumlarında arama, kurtarma ve çadır koordinasyonunu yöneten devlet kurumu ___ dır.",
              "options": [
                "AFAD",
                "TÜİK",
                "RTÜK",
                "MEB"
              ],
              "correctWord": "AFAD",
              "hint": "Afet ve Acil Durum Yönetimi Başkanlığı."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_2_11",
              "question": "Deprem anında sınıfta bulunan bir öğrencinin yapması gereken EN DOĞRU davranış nedir?",
              "options": [
                "Sıranın yanına çöküp başını koruyarak sağlam bir yere tutunmak (Çök-Kapan-Tutun)",
                "Hemen merdivenlere ve pencerelere doğru koşup çığlık atmak",
                "Asansöre doğru koşup binmeye çalışmak",
                "Sıranın üzerine çıkıp ayakta beklemek"
              ],
              "correctAnswerIndex": 0,
              "hint": "Hedef küçültüp başı koruma kuralı.",
              "explanation": "Sarsıntı bitene kadar sıranın yanında Çök-Kapan-Tutun pozisyonunda baş korunmalıdır."
            },
            {
              "id": "q_sos_2_12",
              "question": "Aşağıdakilerden hangisi bir \"Afet ve Acil Durum Çantası\"nda bulunması gereken temel malzemelerden biri DEĞİLDİR?",
              "options": [
                "Oyun konsolu ve tablet bilgisayar",
                "Düdük ve pilli el feneri",
                "Şişelenmiş temiz içme suyu ve konserve",
                "İlk yardım çantası ve acil ilaçlar"
              ],
              "correctAnswerIndex": 0,
              "hint": "Hayatta kalmak için zorunlu olmayan eşyayı bul.",
              "explanation": "Afet çantası hayatta kalma ve temel ihtiyaçlar içindir; oyun konsolu bulunmaz."
            },
            {
              "id": "q_sos_2_13",
              "question": "Karadeniz Bölgesi’nde heyelan (toprak kayması) olaylarının diğer bölgelerimize göre çok daha fazla görülmesinin TEMEL SEBEBİ nedir?",
              "options": [
                "Arazinin çok dik-engebeli olması, bol yağış alması ve toprağın killi olması",
                "Bölgede hiç ağaç bulunmaması",
                "Bölgenin deniz seviyesinin altında yer alması",
                "Bölgede hiç kar yağmaması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Eğim + Su + Killi Toprak formülünü hatırla.",
              "explanation": "Karadeniz’in dik yamaçları aşırı yağmur suyuyla ağırlaşınca killi toprakla birlikte kayar."
            },
            {
              "id": "q_sos_2_14",
              "question": "TEMA Vakfı’nın \"Türkiye Çöl Olmasın!\" sloganıyla ülke genelinde milyonlarca fidan dikmesinin temel amacı hangi afeti önlemektir?",
              "options": [
                "Toprak erozyonunu önlemek",
                "Depremin büyüklüğünü azaltmak",
                "Güneş tutulmasını engellemek",
                "Volkanik patlamaları durdurmak"
              ],
              "correctAnswerIndex": 0,
              "hint": "Toprağın rüzgarla süpürülmesini engeller.",
              "explanation": "Ağaçlandırma toprağı kökleriyle tutarak erozyonla sürüklenmesini önler."
            },
            {
              "id": "q_sos_2_15",
              "question": "Bir yerleşim yerinde sel felaketinin can ve mal kaybına yol açmasını önlemek için alınabilecek EN ETKİLİ önlem nedir?",
              "options": [
                "Evleri dere yataklarının içine değil, güvenli yüksek yamaçlara inşa etmek",
                "Akarsu kenarlarındaki tüm ağaçları kesmek",
                "Yağmur yağarken şemsiye açmamak",
                "Şehirdeki tüm yolları kapatmak"
              ],
              "correctAnswerIndex": 0,
              "hint": "Dere yataklarına yapılaşma yasağı.",
              "explanation": "Dere yatakları su taşkınlarının doğal yoludur; buralara bina yapılmazsa can kaybı önlenir."
            }
          ]
        },
        {
          "id": "sos_u2_t4",
          "title": "Komşu Devletlerimiz ve Sınır Kapılarımız",
          "kazanimCode": "SB.5.2.4",
          "kazanimDesc": "Ülkemize kara sınırı olan komşu devletler ve sınır kapıları hakkında bilgi toplar, ticari ve kültürel ilişkileri kavrar.",
          "summary": "\n• **Türkiye’nin Kara Komşuları (8 Ülke):**\n  1. **Yunanistan (Batı):** İpsala ve Pazarkule sınır kapıları.\n  2. **Bulgaristan (Kuzeybatı):** Kapıkule (Avrupa’ya açılan en işlek sınır kapımız) ve Hamzabeyli.\n  3. **Gürcistan (Kuzeydoğu):** Sarp Sınır Kapısı (Kimlikle geçiş yapılabilen kapımız).\n  4. **Ermenistan (Doğu):** Akyaka ve Alican sınır kapıları (Şu an kapalı).\n  5. **Azerbaycan / Nahçıvan (Doğu):** Dilucu Sınır Kapısı (**En kısa kara sınırımız**: ~18 km).\n  6. **İran (Doğu):** Gürbulak, Kapıköy ve Esendere sınır kapıları (**En eski sınırımız**: 1639 Kasr-ı Şirin Antlaşması ile çizilmiştir).\n  7. **Irak (Güneydoğu):** Habur Sınır Kapısı (Önemli petrol ve ticaret kapısı).\n  8. **Suriye (Güney):** Cilvegözü, Öncüpınar, Nusaybin (**En uzun kara sınırımız**: ~911 km).\n• **Sınır Kapılarının Önemi:** İhracat ve ithalatın yapıldığı, turizm ve dostluk köprüleridir.\n          ",
          "keyConcepts": [
            "Komşu Ülkeler",
            "Sınır Kapısı",
            "Kapıkule",
            "Sarp",
            "Habur",
            "Gürbulak",
            "Kasr-ı Şirin",
            "İhracat"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u2_19",
              "front": "Türkiye’nin en uzun ve en kısa kara sınırları hangi ülkelerledir?",
              "back": "En uzun kara sınırımız: Suriye (~911 km). En kısa kara sınırımız: Azerbaycan / Nahçıvan (~18 km).",
              "tip": "Suriye güneyde, Nahçıvan doğuda yer alır.",
              "example": "Dilucu Sınır Kapısı Nahçıvan ile olan kapımızdır."
            },
            {
              "id": "fc_sos_u2_20",
              "front": "Kapıkule Sınır Kapısı nerede ve neden önemlidir?",
              "back": "Edirne’de Bulgaristan sınırındadır. Türkiye’nin Avrupa’ya açılan en büyük ve en işlek sınır kapısıdır.",
              "tip": "TIR ticareti ve gurbetçilerin geliş rotasıdır.",
              "example": "Avrupa’ya giden ihracat mallarının çoğu Kapıkule’den geçer."
            },
            {
              "id": "fc_sos_u2_21",
              "front": "Türkiye’nin en eski kara sınırı hangi ülkeyledir?",
              "back": "İran sınırımızdır. 1639 Kasr-ı Şirin Antlaşması ile belirlenmiş ve asırlardır neredeyse hiç değişmemiştir.",
              "tip": "Zağros Dağları doğal sınır oluşturur.",
              "example": "Gürbulak sınır kapısı İran ile bağlantımızı sağlar."
            },
            {
              "id": "fc_sos_u2_22",
              "front": "Gürcistan ile olan sınır kapımız hangisidir?",
              "back": "Artvin Hopa’daki Sarp Sınır Kapısı’dır. Türk vatandaşları kimlik kartlarıyla Gürcistan’a geçebilmektedir.",
              "tip": "Karadeniz sahil yolunun ucundadır.",
              "example": "Kafkaslar ve Orta Asya ticaret yoludur."
            },
            {
              "id": "fc_sos_u2_23",
              "front": "Batıdaki sınır komşularımız hangileridir?",
              "back": "Yunanistan (İpsala kapısı) ve Bulgaristan (Kapıkule kapısı).",
              "tip": "Trakya sınırımızdadırlar.",
              "example": "Meriç Nehri Yunanistan ile doğal sınırımızın bir bölümünü çizer."
            },
            {
              "id": "fc_sos_u2_24",
              "front": "Habur Sınır Kapısı hangi komşumuzla bağlantı kurar?",
              "back": "Irak ile bağlantı kurar. Şırnak Silopi’de yer alır ve Ortadoğu ticaretinde çok büyük paya sahiptir.",
              "tip": "Petrol tankerleri ve ticaret kamyonları.",
              "example": "Güneydoğu Anadolu’nun en işlek kapısıdır."
            }
          ],
          "matching": [
            {
              "id": "m_sos_2_19",
              "left": "Bulgaristan",
              "right": "Kapıkule Sınır Kapısı"
            },
            {
              "id": "m_sos_2_20",
              "left": "Gürcistan",
              "right": "Sarp Sınır Kapısı"
            },
            {
              "id": "m_sos_2_21",
              "left": "Nahçıvan (Azerbaycan)",
              "right": "Dilucu Sınır Kapısı (En Kısa Sınır)"
            },
            {
              "id": "m_sos_2_22",
              "left": "İran",
              "right": "Gürbulak Kapısı (En Eski Sınır)"
            },
            {
              "id": "m_sos_2_23",
              "left": "Irak",
              "right": "Habur Sınır Kapısı"
            },
            {
              "id": "m_sos_2_24",
              "left": "Suriye",
              "right": "Cilvegözü Kapısı (En Uzun Sınır)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_2_19",
              "text": "Türkiye’nin en uzun kara sınırı Bulgaristan iledir.",
              "isTrue": false,
              "explanation": "Yanlış! En uzun kara sınırımız Suriye ile (911 km), Bulgaristan ile değildir."
            },
            {
              "id": "tf_sos_2_20",
              "text": "Kapıkule Sınır Kapısı, Türkiye’nin Avrupa kıtasına açılan en işlek kara kapısıdır.",
              "isTrue": true,
              "explanation": "Doğru! Edirne’de yer alan Kapıkule Avrupa karayolu ticaretinin kalbidir."
            },
            {
              "id": "tf_sos_2_21",
              "text": "Türkiye’nin İran ile olan sınırı 1639 Kasr-ı Şirin Antlaşması’ndan beri değişmeyen en eski sınırımızdır.",
              "isTrue": true,
              "explanation": "Doğru! Yüzyıllardır geçerliliğini koruyan tarihi bir sınırdır."
            },
            {
              "id": "tf_sos_2_22",
              "text": "Sarp Sınır Kapısı Gürcistan ile aramızdaki geçiş kapısıdır.",
              "isTrue": true,
              "explanation": "Doğru! Artvin’de yer alan Sarp kapısından Gürcistan’a geçilir."
            },
            {
              "id": "tf_sos_2_23",
              "text": "Türkiye’nin hiçbir komşusuyla kara sınırı yoktur, her tarafı okyanusla çevrilidir.",
              "isTrue": false,
              "explanation": "Yanlış! Türkiye’nin 8 farklı ülke ile kara sınırı bulunmaktadır."
            },
            {
              "id": "tf_sos_2_24",
              "text": "Sınır kapıları ülkeler arasındaki ticaretin, turizmin ve kültürel bağların gelişmesini sağlar.",
              "isTrue": true,
              "explanation": "Doğru! Malların ve yolcuların güvenli giriş çıkışını sağlar."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_2_16",
              "sentence": "Türkiye’nin en uzun kara sınırına sahip olduğu komşusu ___ dir.",
              "options": [
                "Suriye",
                "Yunanistan",
                "Gürcistan",
                "İran"
              ],
              "correctWord": "Suriye",
              "hint": "Yaklaşık 911 kilometre."
            },
            {
              "id": "fb_sos_2_17",
              "sentence": "Türkiye’nin Avrupa’ya açılan en büyük sınır kapısı Edirne’deki ___ Sınır Kapısı’dır.",
              "options": [
                "Kapıkule",
                "Sarp",
                "Habur",
                "Dilucu"
              ],
              "correctWord": "Kapıkule",
              "hint": "Bulgaristan sınır kapımız."
            },
            {
              "id": "fb_sos_2_18",
              "sentence": "Azerbaycan’a bağlı Nahçıvan Özerk Cumhuriyeti ile aramızdaki kapı ___ Sınır Kapısı’dır.",
              "options": [
                "Dilucu",
                "İpsala",
                "Kapıköy",
                "Hamzabeyli"
              ],
              "correctWord": "Dilucu",
              "hint": "En kısa sınırımız (18 km)."
            },
            {
              "id": "fb_sos_2_19",
              "sentence": "1639 Kasr-ı Şirin Antlaşması’ndan bu yana sınırımızın değişmediği en eski komşumuz ___ dır.",
              "options": [
                "İran",
                "Irak",
                "Yunanistan",
                "Ermenistan"
              ],
              "correctWord": "İran",
              "hint": "Doğu komşumuz."
            },
            {
              "id": "fb_sos_2_20",
              "sentence": "Artvin’de yer alan ve Gürcistan’a açılan sınır kapımız ___ dır.",
              "options": [
                "Sarp",
                "Habur",
                "Cilvegözü",
                "Pazarkule"
              ],
              "correctWord": "Sarp",
              "hint": "Doğu Karadeniz kapımız."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_2_16",
              "question": "Türkiye’nin kara sınırları ile ilgili aşağıda verilen bilgilerden hangisi DOĞRUDUR?",
              "options": [
                "En uzun kara sınırımız Suriye ile, en kısa kara sınırımız Nahçıvan (Azerbaycan) iledir",
                "En uzun sınırımız Yunanistan iledir",
                "Türkiye’nin kara sınırı olan hiçbir komşusu yoktur",
                "En eski sınırımız Bulgaristan ile çizilmiştir"
              ],
              "correctAnswerIndex": 0,
              "hint": "Suriye (911 km) ve Nahçıvan (18 km) bilgilerini hatırla.",
              "explanation": "Suriye en uzun (911 km), Nahçıvan ise en kısa (18 km) kara sınırımızdır."
            },
            {
              "id": "q_sos_2_17",
              "question": "Tır şoförü olan Ahmet Bey, İstanbul’dan yüklediği tekstil ürünlerini karayolu ile Almanya’ya götürecektir. Ahmet Bey’in Türkiye’den çıkış yapacağı en işlek sınır kapısı hangisidir?",
              "options": [
                "Kapıkule Sınır Kapısı (Bulgaristan)",
                "Habur Sınır Kapısı (Irak)",
                "Sarp Sınır Kapısı (Gürcistan)",
                "Gürbulak Sınır Kapısı (İran)"
              ],
              "correctAnswerIndex": 0,
              "hint": "Avrupa’ya açılan ana kapımız Edirne’dedir.",
              "explanation": "Avrupa yönüne giden karayolu taşımacılığı Edirne Kapıkule’den yapılır."
            },
            {
              "id": "q_sos_2_18",
              "question": "1639 Kasr-ı Şirin Antlaşması ile çizilen ve asırlardır hemen hemen hiç değişmeyen en eski sınırımız hangi devletledir?",
              "options": [
                "İran",
                "Yunanistan",
                "Gürcistan",
                "Bulgaristan"
              ],
              "correctAnswerIndex": 0,
              "hint": "Zağros dağları boyunca uzanan komşumuz.",
              "explanation": "İran sınırımız 1639 Kasr-ı Şirin Antlaşması ile belirlenmiş en köklü sınırımızdır."
            },
            {
              "id": "q_sos_2_19",
              "question": "Aşağıdaki komşu devlet ve sınır kapısı eşleştirmelerinden hangisi YANLIŞTIR?",
              "options": [
                "Gürcistan — Habur Sınır Kapısı",
                "Bulgaristan — Kapıkule Sınır Kapısı",
                "Nahçıvan — Dilucu Sınır Kapısı",
                "Yunanistan — İpsala Sınır Kapısı"
              ],
              "correctAnswerIndex": 0,
              "hint": "Habur Irak sınırındadır, Gürcistan sınırında Sarp vardır.",
              "explanation": "Habur Sınır Kapısı Irak iledir; Gürcistan ile olan kapımız Sarp Sınır Kapısı’dır."
            },
            {
              "id": "q_sos_2_20",
              "question": "Sınır kapılarımızın açık olması ve komşularımızla barışçıl ilişkiler kurulması ülkemize en çok hangi alanda doğrudan katkı sağlar?",
              "options": [
                "Uluslararası ticaret, turizm ve ekonomik kalkınma",
                "Hava sıcaklıklarının düşmesi",
                "Depremlerin tamamen son bulması",
                "Yağmur yağışlarının azalması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Komşularla ticaret ve ihracatın önemini düşün.",
              "explanation": "Sınır kapıları ihracat, ithalat, lojistik ve turizm açısından ekonomik can damarlarıdır."
            }
          ]
        }
      ]
    },
    {
      "id": "sos_u3",
      "unitNumber": 3,
      "title": "3. Öğrenme Alanı: Ortak Mirasımız",
      "description": "Somut ve somut olmayan kültürel miras, ilk yerleşimler ve medeniyetlerin insanlığa katkıları",
      "topics": [
        {
          "id": "sos_u3_t1",
          "title": "Somut ve Somut Olmayan Kültürel Mirasımız",
          "kazanimCode": "SB.5.3.1",
          "kazanimDesc": "Yaşadığı ildeki somut ve somut olmayan kültürel miras ögelerinden hareketle ortak mirasın önemini kavrar.",
          "summary": "\n• **Ortak Miras Nedir?:** İnsanlığın binlerce yıllık tarihi boyunca sonraki kuşaklara bıraktığı maddi ve manevi değerler bütünüdür.\n• **Somut Kültürel Miras:** Fiziksel olarak var olan, dokunulabilen ve gözle görülebilen mimari yapılar, sanat eserleri ve anıtlardır.\n  - Örnekler: Selimiye Camii (Edirne), Divriği Ulu Camii (Sivas), Nemrut Dağı Heykelleri (Adıyaman), Ani Ören Yeri (Kars), Diyarbakır Surları, Truva Antik Kenti (Çanakkale).\n• **Somut Olmayan Kültürel Miras:** Bireylerin veya toplulukların kültürel kimliklerinin bir parçası olarak gördükleri gelenekler, anlatımlar, bilgi ve becerilerdir.\n  - Örnekler: Meddahlık geleneği, Karagöz ve Hacivat gölge oyunu, Nevruz kutlamaları, Türk kahvesi kültürü, Ebru sanatı, Kırkpınar yağlı güreşleri, Dede Korkut hikâyeleri.\n• **UNESCO (Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü):** Dünyadaki ortak mirasları tescilleyip koruyan uluslararası kuruluştur.\n          ",
          "keyConcepts": [
            "Ortak Miras",
            "Somut Miras",
            "Somut Olmayan Miras",
            "UNESCO",
            "Selimiye Camii",
            "Ebru Sanatı"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u3_1",
              "front": "Somut Kültürel Miras nedir?",
              "back": "Geçmiş uygarlıklardan kalan cami, kale, köprü, saray ve antik kent gibi elle tutulup gözle görülebilen fiziksel eserlerdir.",
              "tip": "Binalar, heykeller, saraylar.",
              "example": "Edirne’deki Mimar Sinan eseri Selimiye Camii somut mirastır."
            },
            {
              "id": "fc_sos_u3_2",
              "front": "Somut Olmayan Kültürel Miras nedir?",
              "back": "Fiziksel bir bina olmayıp; gelenekler, sözlü anlatımlar, törenler, el sanatları ve gösteri sanatları gibi yaşayan değerlerdir.",
              "tip": "UNESCO İnsanlığın Somut Olmayan Kültürel Mirası Temsili Listesi.",
              "example": "Ebru sanatı, Türk kahvesi geleneği, Karagöz gölge oyunu."
            },
            {
              "id": "fc_sos_u3_3",
              "front": "UNESCO’nun görevi nedir?",
              "back": "Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü; insanlığın ortak mirası olan doğal ve kültürel varlıkları korur ve gelecek nesillere aktarır.",
              "tip": "Dünya Mirası Listesi hazırlar.",
              "example": "Kapadokya ve Pamukkale UNESCO Dünya Mirası Listesi’ndedir."
            },
            {
              "id": "fc_sos_u3_4",
              "front": "Divriği Ulu Camii ve Darüşşifası nerededir ve neden ünlüdür?",
              "back": "Sivas Divriği’dedir. 13. yüzyıldan kalan eşsiz taş işçiliği ve kapısındaki namaz kılan insan gölgesi silüetiyle UNESCO korumasındadır.",
              "tip": "Taşın dantel gibi işlendiği başyapıttır.",
              "example": "Anadolu Türk taş sanatının zirvesidir."
            },
            {
              "id": "fc_sos_u3_5",
              "front": "Nevruz Bayramı neyi simgeler?",
              "back": "Baharın gelişini, doğanın uyanışını, bereketi ve kardeşliği simgeleyen köklü bir somut olmayan kültürel mirastır.",
              "tip": "21 Mart’ta kutlanır.",
              "example": "Ateş üzerinden atlamak ve bahar tohumları ekmek adettendir."
            },
            {
              "id": "fc_sos_u3_6",
              "front": "Ortak mirası korumak neden vatandaşlık görevidir?",
              "back": "Çünkü bu eserler sadece bize değil, tüm insanlığa aittir; tahrip edilirse bir daha yerine konulamaz.",
              "tip": "Tarihi eserlere yazı yazmamak ve zarar vermemek gerekir.",
              "example": "Tarihi surlara sprey boyayla yazı yazmak ortak mirasa ihanettir."
            }
          ],
          "matching": [
            {
              "id": "m_sos_3_1",
              "left": "Selimiye Camii",
              "right": "Somut Kültürel Miras (Edirne)"
            },
            {
              "id": "m_sos_3_2",
              "left": "Ebru Sanatı",
              "right": "Somut Olmayan Kültürel Miras"
            },
            {
              "id": "m_sos_3_3",
              "left": "Nemrut Dağı Heykelleri",
              "right": "Somut Arkeolojik Miras (Adıyaman)"
            },
            {
              "id": "m_sos_3_4",
              "left": "Karagöz ve Hacivat",
              "right": "Geleneksel Gölge Oyunu Mirası"
            },
            {
              "id": "m_sos_3_5",
              "left": "UNESCO",
              "right": "Dünya Mirasını Koruyan Kuruluş"
            },
            {
              "id": "m_sos_3_6",
              "left": "Kırkpınar Yağlı Güreşleri",
              "right": "Geleneksel Spor Mirasımız"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_3_1",
              "text": "Camiler, kaleler ve antik şehirler somut kültürel miras örnekleridir.",
              "isTrue": true,
              "explanation": "Doğru! Elle tutulabilen ve gözle görülebilen fiziksel yapılardır."
            },
            {
              "id": "tf_sos_3_2",
              "text": "Türk kahvesi kültürü ve Ebru sanatı somut kültürel mirasa örnektir.",
              "isTrue": false,
              "explanation": "Yanlış! Kahve geleneği ve Ebru sanatı \"Somut Olmayan Kültürel Miras\" kapsamındadır."
            },
            {
              "id": "tf_sos_3_3",
              "text": "UNESCO, tüm dünyaya ait ortak miras eserlerini koruma altına alır.",
              "isTrue": true,
              "explanation": "Doğru! Birleşmiş Milletler’in kültür ve bilim örgütüdür."
            },
            {
              "id": "tf_sos_3_4",
              "text": "Tarihi eserleri korumak sadece müze müdürlerinin görevidir, çocukların sorumluluğu yoktur.",
              "isTrue": false,
              "explanation": "Yanlış! Ortak mirası korumak ve zarar vermemek her vatandaşın sorumluluğudur."
            },
            {
              "id": "tf_sos_3_5",
              "text": "Edirne’deki Selimiye Camii, Mimar Sinan’ın \"Ustalık Eserim\" dediği dünyaca ünlü şaheserdir.",
              "isTrue": true,
              "explanation": "Doğru! Mimar Sinan’ın mimarlık tarihindeki zirve eseridir."
            },
            {
              "id": "tf_sos_3_6",
              "text": "Somut olmayan miras ögeleri kuşaktan kuşağa sözlü ve uygulamalı olarak aktarılır.",
              "isTrue": true,
              "explanation": "Doğru! Yaşayan insan hazineleri ve ustalar vasıtasıyla nesilden nesile geçer."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_3_1",
              "sentence": "Fiziksel olarak var olan kale, saray ve camilere ___ kültürel miras denir.",
              "options": [
                "somut",
                "soyut",
                "geçici",
                "yapay"
              ],
              "correctWord": "somut",
              "hint": "Dokunulabilen ve görülebilen."
            },
            {
              "id": "fb_sos_3_2",
              "sentence": "Ebru, Karagöz oyunu ve meddahlık gibi değerler ___ kültürel miras kapsamındadır.",
              "options": [
                "somut olmayan",
                "askeri",
                "arkeolojik",
                "ticari"
              ],
              "correctWord": "somut olmayan",
              "hint": "Uygulamalı ve yaşayan gelenekler."
            },
            {
              "id": "fb_sos_3_3",
              "sentence": "Dünya genelindeki ortak mirasları belirleyip koruma altına alan BM kuruluşu ___ dur.",
              "options": [
                "UNESCO",
                "NATO",
                "WHO",
                "UNICEF"
              ],
              "correctWord": "UNESCO",
              "hint": "Dünya Miras Listesi’ni oluşturur."
            },
            {
              "id": "fb_sos_3_4",
              "sentence": "Mimar Sinan’ın \"Ustalık Eserim\" dediği ve Edirne’de bulunan cami ___ Camii’dir.",
              "options": [
                "Selimiye",
                "Sultanahmet",
                "Ayasofya",
                "Süleymaniye"
              ],
              "correctWord": "Selimiye",
              "hint": "Dört minareli Edirne şaheseri."
            },
            {
              "id": "fb_sos_3_5",
              "sentence": "Baharın gelişini ve doğanın uyanışını müjdeleyen 21 Mart bayramı ___ dur.",
              "options": [
                "Nevruz",
                "Hıdırellez",
                "Kabotaj",
                "Aşure"
              ],
              "correctWord": "Nevruz",
              "hint": "Bahar bayramı."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_3_1",
              "question": "Aşağıdakilerden hangisi \"Somut Olmayan Kültürel Miras\" örneklerinden biridir?",
              "options": [
                "Ebru sanatı ve Karagöz-Hacivat gölge oyunu",
                "Diyarbakır Surları ve Hevsel Bahçeleri",
                "Sivas Divriği Ulu Camii",
                "Çanakkale Truva Antik Kenti"
              ],
              "correctAnswerIndex": 0,
              "hint": "Fiziksel bir bina olmayan, sanat ve geleneği düşün.",
              "explanation": "Ebru ve Karagöz elle tutulur bir taş yapı değil; yaşayan sanatsal gelenektir (somut olmayan miras)."
            },
            {
              "id": "q_sos_3_2",
              "question": "Tarihi bir kaleyi gezen öğrencinin kale duvarına ismini kazıması nasıl bir davranıştır?",
              "options": [
                "Ortak mirasa zarar veren yanlış ve saygısızca bir davranış",
                "Tarihi esere katkı sağlayan sanatsal bir eylem",
                "Tarihçilere yardımcı olacak bilimsel bir keşif",
                "Kalenin değerini artıran faydalı bir hareket"
              ],
              "correctAnswerIndex": 0,
              "hint": "Eserleri koruma bilincini düşün.",
              "explanation": "Tarihi eserleri tahrip etmek ortak mirasa zarar verir ve yasal olarak suçtur."
            },
            {
              "id": "q_sos_3_3",
              "question": "UNESCO’nun \"Dünya Miras Listesi\" oluşturmasındaki temel hedefi nedir?",
              "options": [
                "Tüm insanlığa ait kültürel ve doğal zenginlikleri koruyup gelecek nesillere aktarmak",
                "Bu yerleri satıp para kazanmak",
                "Sadece zengin ülkelerin eserlerini sergilemek",
                "Tarihi eserlerin etrafına alışveriş merkezleri kurmak"
              ],
              "correctAnswerIndex": 0,
              "hint": "Ortak mirasın gelecek kuşaklara aktarılması.",
              "explanation": "UNESCO tüm insanlığın ortak hafızasını korumak için koruma programları yürütür."
            },
            {
              "id": "q_sos_3_4",
              "question": "Adıyaman sınırlarında bulunan, Kommagene Krallığı’ndan kalma devasa taş heykellerin ve güneşin doğuşunun izlendiği tarihi dağ hangisidir?",
              "options": [
                "Nemrut Dağı",
                "Ağrı Dağı",
                "Erciyes Dağı",
                "Uludağ"
              ],
              "correctAnswerIndex": 0,
              "hint": "Devasa kral ve tanrı heykelleriyle ünlü UNESCO mirası.",
              "explanation": "Adıyaman Nemrut Dağı dev heykelleriyle dünyaca ünlü bir somut arkeolojik mirastır."
            },
            {
              "id": "q_sos_3_5",
              "question": "Aşağıdakilerden hangisi kültürel miras ögelerimizin toplumumuza sağladığı en önemli faydadır?",
              "options": [
                "Tarih bilincimizi geliştirir, millet olma şuurunu ve aidiyet duygusunu güçlendirir",
                "Sınavlarda çok soru çıkmasını sağlar",
                "Şehirlerin daha kalabalık olmasına neden olur",
                "İnsanların sadece tatil yapmasını sağlar"
              ],
              "correctAnswerIndex": 0,
              "hint": "Köklerimizden aldığımız güç ve bilinç.",
              "explanation": "Kültürel miras geçmişimizle bağ kurmamızı, milli kimliğimizi korumamızı ve geleceğe güvenle bakmamızı sağlar."
            }
          ]
        },
        {
          "id": "sos_u3_t2",
          "title": "Anadolu’nun İlk Yerleşimleri: Göbeklitepe, Çatalhöyük, Çayönü",
          "kazanimCode": "SB.5.3.2",
          "kazanimDesc": "Anadolu’da ilk yerleşimleri kuran toplumların sosyal hayatlarına yönelik bakış açısı geliştirir.",
          "summary": "\n• **Tarihin Sıfır Noktası: Göbeklitepe (Şanlıurfa):**\n  - Günümüzden yaklaşık 12.000 yıl öncesine aittir.\n  - İnsanlık tarihinin bilinen **en eski anıtsal tapınak merkezidir**.\n  - T biçimli devasa taş sütunlar üzerinde tilki, aslan, yılan ve boğa gibi hayvan kabartmaları bulunur.\n  - İnsanların tarımdan önce de inançları doğrultusunda bir araya gelip tapınak inşa ettiklerini kanıtlamıştır!\n• **İlk Şehir Yerleşimi: Çatalhöyük (Konya):**\n  - İnsanlık tarihinin **ilk şehir ve kasaba yerleşimidir**.\n  - Evler birbirine bitişik nizamda yapılmıştır; sokak yoktur!\n  - İnsanlar evlerine **çatılardan merdivenle** girip çıkmışlardır (vahşi hayvanlardan ve baskınlardan korunmak için).\n  - Duvarlara av sahneleri ve leopar resimleri çizmişlerdir.\n• **İlk Tarım ve Köy Yerleşimi: Çayönü (Diyarbakır):**\n  - Avcı-toplayıcılıktan **tarıma ve yerleşik köy hayatına** geçişin en önemli kanıtıdır.\n  - İlk kez buğday evcilleştirilmiş, koyun ve keçi beslenmeye başlanmıştır.\n          ",
          "keyConcepts": [
            "Göbeklitepe",
            "Çatalhöyük",
            "Çayönü",
            "Avcı-Toplayıcı",
            "Yerleşik Hayat",
            "T biçimli Sütunlar",
            "Tarım"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u3_7",
              "front": "Göbeklitepe nerededir ve neden \"Tarihin Sıfır Noktası\" sayılır?",
              "back": "Şanlıurfa’dadır. Yaklaşık 12.000 yıllık geçmişiyle dünyanın bilinen EN ESKİ inanç ve tapınak merkezidir.",
              "tip": "Mısır piramitlerinden bile 7.500 yıl daha eskidir!",
              "example": "T biçimli dev kireçtaşı sütunlar ve hayvan kabartmaları vardır."
            },
            {
              "id": "fc_sos_u3_8",
              "front": "Çatalhöyük evlerinin ilginç mimari özelliği nedir?",
              "back": "Konya’da bulunan evler bitişik yapılmıştır, sokak yoktur. Giriş kapıları damda (çatıda) olup merdivenle girilmektedir.",
              "tip": "Vahşi hayvanlardan ve düşmanlardan korunmak için tasarlanmıştır.",
              "example": "Damlar aynı zamanda mahallenin sokakları olarak kullanılmıştır."
            },
            {
              "id": "fc_sos_u3_9",
              "front": "Diyarbakır Çayönü’nün tarihteki önemi nedir?",
              "back": "Anadolu’da tarımın yapıldığı ve yerleşik köy hayatına geçildiği ilk yerleşim yerlerinden biridir.",
              "tip": "Buğday ilk kez burada tarıma kazandırılmıştır.",
              "example": "Yabani koyun ve keçiler evcilleştirilmiştir."
            },
            {
              "id": "fc_sos_u3_10",
              "front": "Avcı-toplayıcı yaşam tarzı ne demektir?",
              "back": "İnsanların doğadaki hayvanları avlayarak ve yabani bitkileri toplayarak göçebe şekilde mağaralarda yaşadığı dönemdir.",
              "tip": "Tarımla birlikte yerleşik hayata geçilmiştir.",
              "example": "Mağara duvarlarına çizilen av sahneleri."
            },
            {
              "id": "fc_sos_u3_11",
              "front": "Göbeklitepe tarihteki hangi ezberi bozmuştur?",
              "back": "\"Önce tarım ve yerleşme, sonra din doğdu\" teorisini çürütmüş; insanların önce inançları için tapınak yapıp bir araya geldiğini göstermiştir.",
              "tip": "Arkeolog Klaus Schmidt tarafından ortaya çıkarılmıştır.",
              "example": "Avcı-toplayıcı insanların dev sütunları taşıyıp işlediği kanıtlanmıştır."
            },
            {
              "id": "fc_sos_u3_12",
              "front": "Tarih öncesi dönem ne ile biter, Tarih Çağları ne ile başlar?",
              "back": "YAZININ İCADI ile biter. Sümerlerin MÖ 3200 civarında çivi yazısını bulmasıyla Tarih Çağları başlamıştır.",
              "tip": "Söz uçar, yazı kalır!",
              "example": "Yazıdan önceki döneme Tarih Öncesi Çağlar denir."
            }
          ],
          "matching": [
            {
              "id": "m_sos_3_7",
              "left": "Göbeklitepe (Şanlıurfa)",
              "right": "Dünyanın En Eski Tapınak Merkezi"
            },
            {
              "id": "m_sos_3_8",
              "left": "Çatalhöyük (Konya)",
              "right": "İlk Şehir Yerleşimi (Çatıdan Giriş)"
            },
            {
              "id": "m_sos_3_9",
              "left": "Çayönü (Diyarbakır)",
              "right": "İlk Tarım ve Köy Hayatı (Buğday)"
            },
            {
              "id": "m_sos_3_10",
              "left": "T Biçimli Sütunlar",
              "right": "Göbeklitepe Hayvan Kabartmaları"
            },
            {
              "id": "m_sos_3_11",
              "left": "Yazının İcadı (MÖ 3200)",
              "right": "Tarih Çağlarının Başlangıcı"
            },
            {
              "id": "m_sos_3_12",
              "left": "Avcı ve Toplayıcı",
              "right": "Tarım Öncesi Göçebe Yaşam"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_3_7",
              "text": "Göbeklitepe, Şanlıurfa’da bulunan ve Mısır piramitlerinden bile daha eski olan ilk tapınaktır.",
              "isTrue": true,
              "explanation": "Doğru! Yaklaşık 12.000 yıllık tarihiyle arkeoloji dünyasını sarsmıştır."
            },
            {
              "id": "tf_sos_3_8",
              "text": "Çatalhöyük’te evlerin kapıları sokaktadır ve geniş caddeler bulunur.",
              "isTrue": false,
              "explanation": "Yanlış! Çatalhöyük’te sokak yoktur, evler bitişiktir ve girişler çatılardaki merdivenlerdendir."
            },
            {
              "id": "tf_sos_3_9",
              "text": "Diyarbakır Çayönü’nde insanlar ilk kez tarım yapmış ve yabani hayvanları evcilleştirmiştir.",
              "isTrue": true,
              "explanation": "Doğru! Anadolu’da üretime dayalı ilk köy yerleşimidir."
            },
            {
              "id": "tf_sos_3_10",
              "text": "Tarih çağları tekerleğin icadıyla başlamıştır.",
              "isTrue": false,
              "explanation": "Yanlış! Tarih çağları Sümerlerin yazıyı icat etmesiyle başlamıştır."
            },
            {
              "id": "tf_sos_3_11",
              "text": "Göbeklitepe’deki T biçimli sütunlar üzerinde aslan, tilki, yılan ve kuş kabartmaları vardır.",
              "isTrue": true,
              "explanation": "Doğru! Sütunlar dönemin hayvan ve inanç dünyasını yansıtır."
            },
            {
              "id": "tf_sos_3_12",
              "text": "Anadolu toprakları iklimi, su kaynakları ve verimli arazileriyle tarihin her döneminde yerleşim için cazip olmuştur.",
              "isTrue": true,
              "explanation": "Doğru! Bu yüzden Anadolu \"Medeniyetler Beşiği\" olarak adlandırılır."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_3_6",
              "sentence": "Şanlıurfa’da bulunan ve insanlık tarihinin ilk tapınağı sayılan yerleşim ___ dir.",
              "options": [
                "Göbeklitepe",
                "Çatalhöyük",
                "Efes",
                "Truva"
              ],
              "correctWord": "Göbeklitepe",
              "hint": "Tarihin sıfır noktası."
            },
            {
              "id": "fb_sos_3_7",
              "sentence": "Konya’da bulunan, evlerine çatılardan girilen ilk şehir yerleşimi ___ tür.",
              "options": [
                "Çatalhöyük",
                "Çayönü",
                "Gordion",
                "Sardes"
              ],
              "correctWord": "Çatalhöyük",
              "hint": "Bitişik nizam evler ve sokaksız şehir."
            },
            {
              "id": "fb_sos_3_8",
              "sentence": "Diyarbakır’da yer alan ve ilk tarımsal üretimin yapıldığı köy yerleşimi ___ dür.",
              "options": [
                "Çayönü",
                "Göbeklitepe",
                "Hattuşa",
                "Tuşpa"
              ],
              "correctWord": "Çayönü",
              "hint": "İlk buğday tarımı."
            },
            {
              "id": "fb_sos_3_9",
              "sentence": "İnsanlık tarihinde yazının icadı ile ___ Çağları başlamıştır.",
              "options": [
                "Tarih",
                "Taş",
                "Maden",
                "Buzul"
              ],
              "correctWord": "Tarih",
              "hint": "Kayıtlı dönemin başlangıcı."
            },
            {
              "id": "fb_sos_3_10",
              "sentence": "İnsanların yerleşik hayata geçmesindeki en önemli etken ___ yapmaya başlamalarıdır.",
              "options": [
                "tarım",
                "avcılık",
                "savaş",
                "seyahat"
              ],
              "correctWord": "tarım",
              "hint": "Toprağı ekip biçmek su kenarında kalmayı gerektirdi."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_3_6",
              "question": "Şanlıurfa yakınlarında keşfedilen ve \"Tarihin Sıfır Noktası\" kabul edilen Göbeklitepe’nin insanlık tarihi açısından EN ÖNEMLİ özelliği nedir?",
              "options": [
                "Bilinen en eski anıtsal tapınak ve ibadet merkezi olması",
                "Dünyanın ilk modern üniversitesine ev sahipliği yapması",
                "Matbaanın ilk kez burada icat edilmiş olması",
                "İlk buharlı tren hattının buradan geçmesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "12.000 yıllık devasa dikilitaşlar ve inanç merkezi.",
              "explanation": "Göbeklitepe 12.000 yıllık anıtsal tapınaklarıyla inancın yerleşik hayattan önce de var olduğunu kanıtlamıştır."
            },
            {
              "id": "q_sos_3_7",
              "question": "Konya Çatalhöyük’te evlerin birbirine bitişik inşa edilmesi ve kapılarının damda (çatıda) bulunmasının temel sebebi nedir?",
              "options": [
                "Vahşi hayvan saldırılarından ve düşman baskınlarından güvenli şekilde korunmak",
                "İnsanların merdivenle tırmanmayı bir spor olarak görmesi",
                "Evlerin kapısını yapacak ahşap malzemenin hiç bulunmaması",
                "Pencerelerden içeriye rüzgar girmesini engellemek"
              ],
              "correctAnswerIndex": 0,
              "hint": "Tarih öncesi dönemde güvenlik ve savunma ihtiyacı.",
              "explanation": "Sokaksız bitişik nizam ve çatıdan giriş sistemi dış tehlikelere ve vahşi hayvanlara karşı savunma amaçlıdır."
            },
            {
              "id": "q_sos_3_8",
              "question": "Diyarbakır Çayönü yerleşkesini kazan arkeologların buğday fosilleri, orak ve öğütme taşları bulması orada neyin yapıldığını KESİN olarak gösterir?",
              "options": [
                "Tarımsal üretim ve yerleşik hayat yapıldığını",
                "Otomobil fabrikası kurulduğunu",
                "Deniz ticaret filolarının bulunduğunu",
                "Buzulların hiç erimediğini"
              ],
              "correctAnswerIndex": 0,
              "hint": "Orak, buğday ve öğütme taşları tarımın kanıtıdır.",
              "explanation": "Buğday, orak ve tahıl öğütme taşları tarım yapıldığının ve yerleşik köy hayatının en somut kanıtıdır."
            },
            {
              "id": "q_sos_3_9",
              "question": "Tarih araştırmalarında \"Tarih Öncesi Dönemler\" ile \"Tarih Çağları\" arasındaki sınır çizgisi aşağıdakilerden hangisinin icadıyla çekilmiştir?",
              "options": [
                "Yazının icadı (MÖ 3200 Sümerler)",
                "Tekerleğin bulunması",
                "Ateşin kontrol altına alınması",
                "Demir madeninin eritilmesi"
              ],
              "correctAnswerIndex": 0,
              "hint": "Yazılı belgelerin başlaması.",
              "explanation": "Yazının bulunmasıyla olaylar kayıt altına alınmış ve Tarih Çağları başlamıştır."
            },
            {
              "id": "q_sos_3_10",
              "question": "Anadolu topraklarının tarihin ilk dönemlerinden itibaren sürekli yerleşim yeri seçilmesinin sebepleri arasında aşağıdakilerden hangisi YER ALMAZ?",
              "options": [
                "Bölgede sürekli şiddetli kutup buzul ikliminin yaşanması",
                "İkliminin ılıman ve tarıma elverişli olması",
                "Fırat, Dicle, Kızılırmak gibi zengin su kaynaklarına sahip olması",
                "Kıtalararası önemli göç ve ticaret yolları üzerinde bulunması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Anadolu bir kutup bölgesi değildir.",
              "explanation": "Anadolu ılıman iklimi, bereketli toprakları ve bol su kaynaklarıyla medeniyetlerin beşiği olmuştur."
            }
          ]
        },
        {
          "id": "sos_u3_t3",
          "title": "Mezopotamya ve Anadolu Medeniyetleri",
          "kazanimCode": "SB.5.3.3",
          "kazanimDesc": "Mezopotamya ve Anadolu medeniyetlerinin ortak mirasa katkılarını karşılaştırır, icat ve kanunlarını kavrar.",
          "interactiveLab": {
            "type": "sosyal-arkeoloji-lab",
            "title": "🏺 Arkeoloji Dedektifi: Medeniyet Sandığı",
            "initialTab": "detective"
          },
          "summary": "\n• **Mezopotamya Medeniyetleri (Fırat ile Dicle Arası):**\n  1. **Sümerler:**\n     - **Çivi yazısını** icat ettiler (Tarih çağları başladı).\n     - **Tekerleği** ve **ay yılı esaslı takvimi** buldular.\n     - **Ziggurat** adı verilen 7 katlı tapınaklar yaptılar (alt kat depo, orta kat okul/ibadet, en üst kat gözlemevi/rasathane).\n  2. **Babiller:**\n     - Başkentleri Babil'dir. Kral **Hammurabi** kendi adıyla anılan sert ceza kanunlarını (kısasa kısas) yaptı.\n     - Dünyanın Yedi Harikası'ndan biri olan **Babil'in Asma Bahçeleri**ni ve Babil Kulesi'ni inşa ettiler.\n  3. **Asurlar:**\n     - Başkentleri Ninova'dır. Dünyanın **ilk kütüphanesini** kurdular.\n     - Ticaretle uğraştılar; Kayseri Kültepe'ye (Kaniş Karumu) gelerek **çivi yazısını Anadolu'ya öğrettiler**.\n• **Anadolu Medeniyetleri:**\n  1. **Hititler (Çorum/Hattuşa):**\n     - Mısırlılarla tarihin ilk yazılı barış antlaşması olan **Kadeş Antlaşması**nı imzaladılar.\n     - **Pankuş** adı verilen danışma meclisleri ve yetkili kraliçeleri (**Tavananna**) vardı.\n     - Tanrılarına hesap vermek için **Anal (yıllık)** yazarak tarafsız tarih yazıcılığını başlattılar.\n  2. **Frigler (Ankara/Gordion):**\n     - Tarıma büyük önem verdiler; saban kıran veya öküz öldürene ölüm cezası verdiler.\n     - **Fibula** (tarihin ilk çengelli iğnesi) ve **Tapates** (halı/kilim) ürettiler. Efsanevi kralları Midas'tır.\n  3. **Lidyalılar (Manisa/Sardes):**\n     - Takas usulüne son verip **parayı icat ettiler**.\n     - Mezopotamya'ya kadar uzanan **Kral Yolu** üzerinde ticaret yaparak zenginleştiler.\n  4. **Urartular (Van/Tuşpa):**\n     - Taş işçiliği ve madencilikte ustalaştılar.\n     - Günümüzde hâlâ kullanılan **Şamran (Menua) su kanalını** ve Van Kalesi'ni yaptılar.\n          ",
          "keyConcepts": [
            "Sümerler",
            "Babiller",
            "Asurlar",
            "Hititler",
            "Frigler",
            "Lidyalılar",
            "Urartular",
            "Ziggurat",
            "Fibula",
            "Anal",
            "Kadeş"
          ],
          "flashcards": [
            {
              "id": "fc_sos_u3_13",
              "front": "Sümerlerin insanlık tarihine en büyük katkısı nedir?",
              "back": "MÖ 3200’de çivi yazısını icat ederek Tarih Çağlarını başlatmaları, tekerleği ve ay yılı takvimini bulmalarıdır.",
              "tip": "Yazı kil tabletler üzerine ucu sivri kamışlarla yazılırdı.",
              "example": "Zigguratların en üst katında gökyüzünü inceleyip takvimi oluşturdular."
            },
            {
              "id": "fc_sos_u3_14",
              "front": "Anadolu’ya yazıyı kim, nasıl getirmiştir?",
              "back": "Mezopotamya uygarlığı olan Asurlu tüccarlar, Kayseri Kültepe (Kaniş Karumu) pazar yerinde ticaret yaparken getirmiştir.",
              "tip": "Böylece Anadolu’da da Tarih Çağları başlamıştır.",
              "example": "Kültepe kil tabletleri Anadolu’nun ilk yazılı belgeleridir."
            },
            {
              "id": "fc_sos_u3_15",
              "front": "Hititlerin \"Anal\" (Yıllık) yazması neden önemlidir?",
              "back": "Tanrılarına hesap vermek amacıyla zaferleri kadar yenilgilerini de dürüstçe yazmışlar ve ilk tarafsız tarih yazıcılığını başlatmışlardır.",
              "tip": "Yalan yazmaktan korkmuşlardır.",
              "example": "Kadeş Antlaşması da Hititler ile Mısırlılar arasında imzalanmıştır."
            },
            {
              "id": "fc_sos_u3_16",
              "front": "Lidyalıların parayı icat etmesi neyi değiştirdi?",
              "back": "Zor ve hantal olan \"takas\" (mal takası) usulünü bitirmiş, ticareti kolaylaştırmış ve hızlandırmıştır.",
              "tip": "Başkentleri Sardes (Manisa) idi.",
              "example": "Kral Yolu üzerinden para ile ticaret yaptılar."
            },
            {
              "id": "fc_sos_u3_17",
              "front": "Friglerin hukuk kuralları neden tarıma odaklıydı?",
              "back": "Temel geçim kaynakları tarım ve hayvancılık olduğu için saban kıran veya öküz öldüren kişiye en ağır ceza (ölüm) verilirdi.",
              "tip": "Fibula (çengelli iğne) ve Tapates (kilim) Friglere aittir.",
              "example": "Kralları Midas efsaneleriyle tanınır."
            },
            {
              "id": "fc_sos_u3_18",
              "front": "Urartuların günümüze ulaşan en büyük mühendislik eseri nedir?",
              "back": "Başkentleri Tuşpa’da (Van) kayaları oyarak yaptıkları Şamran (Menua) sulama kanalı ve sağlam taş kalelerdir.",
              "tip": "Şamran kanalı yaklaşık 2800 yıldır hâlâ akmaktadır!",
              "example": "Taş işçiliği ve madencilikte rakipsizdiler."
            }
          ],
          "matching": [
            {
              "id": "m_sos_3_13",
              "left": "Sümerler",
              "right": "Çivi Yazısı, Ziggurat ve Tekerlek"
            },
            {
              "id": "m_sos_3_14",
              "left": "Babiller",
              "right": "Hammurabi Kanunları ve Asma Bahçeleri"
            },
            {
              "id": "m_sos_3_15",
              "left": "Asurlar",
              "right": "Anadolu’ya Yazıyı Getiren Tüccarlar"
            },
            {
              "id": "m_sos_3_16",
              "left": "Hititler",
              "right": "Kadeş Antlaşması ve Anal Yıllıkları"
            },
            {
              "id": "m_sos_3_17",
              "left": "Lidyalılar",
              "right": "Paranın İcadı ve Kral Yolu"
            },
            {
              "id": "m_sos_3_18",
              "left": "Frigler",
              "right": "Fibula (Çengelli İğne) ve Tarım Yasaları"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_sos_3_13",
              "text": "Sümerler çivi yazısını bularak insanlık tarihinde yazılı dönemi başlatmıştır.",
              "isTrue": true,
              "explanation": "Doğru! Çivi yazısı Sümerlerin tüm insanlığa en büyük hediyesidir."
            },
            {
              "id": "tf_sos_3_14",
              "text": "Madeni parayı icat ederek takas usulüne son veren uygarlık Lidyalılardır.",
              "isTrue": true,
              "explanation": "Doğru! Manisa Sardes merkezli Lidyalılar parayı bulmuştur."
            },
            {
              "id": "tf_sos_3_15",
              "text": "Hititlerin Anal yıllıklarında yenilgilerini saklayıp sadece zaferlerini yazdıkları görülür.",
              "isTrue": false,
              "explanation": "Yanlış! Tanrılarına hesap verdikleri için hem zaferleri hem yenilgileri tarafsızca yazmışlardır."
            },
            {
              "id": "tf_sos_3_16",
              "text": "Asurlar ticaret yaparken çivi yazısını Kayseri Kültepe’ye taşıyarak Anadolu’ya yazıyı öğretmiştir.",
              "isTrue": true,
              "explanation": "Doğru! Asurlu tüccarlar Anadolu’da tarihi çağları başlatmıştır."
            },
            {
              "id": "tf_sos_3_17",
              "text": "Zigguratlar Sümerlerde sadece piramit mezar olarak kullanılmıştır.",
              "isTrue": false,
              "explanation": "Yanlış! Zigguratlar depo, okul, ibadethane ve en üst katı rasathane (gözlemevi) olan çok amaçlı binalardır."
            },
            {
              "id": "tf_sos_3_18",
              "text": "Friglerin çengelli iğneye \"Fibula\", dokudukları kilimlere \"Tapates\" adı verdikleri bilinmektedir.",
              "isTrue": true,
              "explanation": "Doğru! Dokumacılık ve maden işlemede çok ileri gitmişlerdir."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_sos_3_11",
              "sentence": "Çivi yazısını icat ederek Tarih Çağlarını başlatan Mezopotamya uygarlığı ___ dir.",
              "options": [
                "Sümerler",
                "Babiller",
                "Hititler",
                "Lidyalılar"
              ],
              "correctWord": "Sümerler",
              "hint": "Ziggurat ve tekerleğin de mucidi."
            },
            {
              "id": "fb_sos_3_12",
              "sentence": "Ticarette takas usulüne son vererek madeni parayı icat eden Anadolu uygarlığı ___ dır.",
              "options": [
                "Lidyalılar",
                "Frigler",
                "Urartular",
                "Asurlar"
              ],
              "correctWord": "Lidyalılar",
              "hint": "Başkentleri Sardes (Manisa)."
            },
            {
              "id": "fb_sos_3_13",
              "sentence": "Hititlerin krallarının zafer ve yenilgilerini tarafsızca yazdıkları yıllıklara ___ adı verilir.",
              "options": [
                "Anal",
                "Ziggurat",
                "Fibula",
                "Pankuş"
              ],
              "correctWord": "Anal",
              "hint": "İlk tarafsız tarih günlüğü."
            },
            {
              "id": "fb_sos_3_14",
              "sentence": "Ticareti Anadolu’ya kadar taşıyarak çivi yazısını Kayseri Kültepe’ye getiren uygarlık ___ dır.",
              "options": [
                "Asurlar",
                "Sümerler",
                "Mısırlılar",
                "İyonlar"
              ],
              "correctWord": "Asurlar",
              "hint": "Başkenti Ninova olan kütüphaneci tüccarlar."
            },
            {
              "id": "fb_sos_3_15",
              "sentence": "Friglerin icat ettiği ve günümüzdeki çengelli iğnenin atası sayılan buluşa ___ denir.",
              "options": [
                "fibula",
                "tapates",
                "anal",
                "para"
              ],
              "correctWord": "fibula",
              "hint": "Tarihin ilk çengelli iğnesi."
            }
          ],
          "quiz": [
            {
              "id": "q_sos_3_11",
              "question": "Sümerlerin inşa ettiği 7 katlı Zigguratların en üst katını rasathane (gözlemevi) olarak kullanmaları onların hangi bilim dalında ilerlemesini sağlamıştır?",
              "options": [
                "Astronomi (Gök bilimi) ve Takvim hazırlama",
                "Denizaltı mühendisliği",
                "Nükleer tıp ve eczacılık",
                "Uçak tasarımı ve havacılık"
              ],
              "correctAnswerIndex": 0,
              "hint": "Gece gökyüzünü, ayı ve yıldızları izlemek.",
              "explanation": "Gök cisimlerini gözlemleyen Sümerler astronomide ilerleyerek Ay yılı takvimini icat etmişlerdir."
            },
            {
              "id": "q_sos_3_12",
              "question": "Kayseri Kültepe’de yapılan kazılarda Asurlu tüccarlara ait çivi yazılı kil tabletler bulunmuştur. Bu durum Anadolu tarihi açısından neyi ifade eder?",
              "options": [
                "Yazının ticaret yoluyla Anadolu’ya girdiğini ve Anadolu’da Tarih Çağlarının başladığını",
                "Asurluların Anadolu’da hiç ticaret yapmadığını",
                "Anadolu’da paranın icat edildiğini",
                "Kayseri’de sadece tarım yapıldığını"
              ],
              "correctAnswerIndex": 0,
              "hint": "Yazının yayılmasında ticaretin köprü rolü.",
              "explanation": "Asurlu tüccarlar Kaniş Karumu’nda ticaret yaparken yazıyı öğretmiş ve Anadolu’da yazılı tarihi başlatmıştır."
            },
            {
              "id": "q_sos_3_13",
              "question": "Lidyalıların parayı icat etmelerinin dünya ticaretine sağladığı EN BÜYÜK kolaylık nedir?",
              "options": [
                "Malların zor ve zahmetli takas (değiş-tokuş) edilmesi usulünü sona erdirmesi",
                "Bütün savaşları tamamen durdurması",
                "Dünyadaki tüm sınırların kalkması",
                "Herkesin eşit miktarda paraya sahip olması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Buğday verip koyun alma zorluğunu hatırla.",
              "explanation": "Para mal değişiminde ortak bir değer ölçüsü olmuş, takasın yarattığı zorlukları bitirmiştir."
            },
            {
              "id": "q_sos_3_14",
              "question": "Friglerde saban kıran veya öküz öldüren kişiye idam cezası verilmesi, Friglerin hangi alana hayati derecede önem verdiğini gösterir?",
              "options": [
                "Tarım ve hayvancılığı korumaya",
                "Deniz ticaret filolarını büyütmeye",
                "Piramit inşaatlarını hızlandırmaya",
                "Uzay araştırmalarına kaynak aktarmaya"
              ],
              "correctAnswerIndex": 0,
              "hint": "Öküz ve saban tarımın temel araçlarıdır.",
              "explanation": "Friglerin en büyük geçim kaynağı tarım olduğundan, tarım araçlarına zarar vermek en ağır suç sayılmıştır."
            },
            {
              "id": "q_sos_3_15",
              "question": "MÖ 1280’de Hititler ile Mısırlılar arasında imzalanan ve tarihteki ilk yazılı barış antlaşması kabul edilen metin hangisidir?",
              "options": [
                "Kadeş Antlaşması",
                "Kasr-ı Şirin Antlaşması",
                "Lozan Antlaşması",
                "Ankara Antlaşması"
              ],
              "correctAnswerIndex": 0,
              "hint": "Hitit Kralı ile Mısır Firavunu II. Ramses arasında imzalandı.",
              "explanation": "Kadeş Antlaşması dünya tarihindeki ilk yazılı barış antlaşmasıdır."
            }
          ]
        }
      ]
    }
  ]
},
        {
      id: 'ingilizce',
      name: 'İngilizce (English)',
      shortName: 'İngilizce',
      icon: '🇬🇧',
      color: '#2563EB',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      lightBg: '#EFF6FF',
      description: 'Çoklu Yabancı Dil: School Life, Classroom Life, Personal Life, Family Life ve dinleme/konuşma etkinlikleri',
      units: [
        {
          id: 'eng_u1',
          unitNumber: 1,
          title: 'Theme 1: School Life (Okul Yaşamı)',
          description: 'Okulda tanışma, selamlaşma, okulun bölümleri, yer-yön tarifleri, kurallar ve kulüpler',
          topics: [
            {
              id: 'eng_u1_t1',
              title: 'Meeting People & Greetings at School (Tanışma & Selamlaşma)',
              kazanimCode: 'ENG.5.1.W1.1',
              kazanimDesc: 'Öğrenci okul ortamında temel selamlaşma ve tanışma ifadelerini kavrar, adını ve nereli olduğunu söyler, telaffuz eder.',
              interactiveLab: {
                type: 'english-school-lab',
                title: 'İngilizce Okul & Diyalog Stüdyosu'
              },
              summary: `
• **Greetings (Selamlaşma İfadeleri):**
  - **Hello! / Hi!:** Merhaba! (Her zaman ve her ortamda samimi karşılama)
  - **Good morning!:** Günaydın! (Sabah saat 12:00'ye kadar)
  - **Good afternoon!:** Tünaydın! / İyi günler! (Öğleden sonra saat 12:00 - 17:00 arası)
  - **Good evening!:** İyi akşamlar! (Saat 17:00'den sonra)
• **Meeting People (Tanışma Kalıpları):**
  - **What is your name?:** Senin adın ne? ➔ **My name is Deniz.** (Benim adım Deniz.)
  - **Nice to meet you!:** Tanıştığımıza memnun oldum! ➔ **Nice to meet you, too!:** Ben de memnun oldum!
  - **How are you?:** Nasılsın? ➔ **I am fine, thank you. And you?:** İyiyim, teşekkürler. Ya sen?
• **Countries & Nationalities (Ülke ve Milliyet Belirtme):**
  - **Where are you from?:** Nerelisin? ➔ **I am from Türkiye.** (Ben Türkiye'denim / Türkiyeliyim.)
  - **What nationality are you?:** Hangi milliyettensin? ➔ **I am Turkish.** (Ben Türküm.)
  - **Önemli Kural:** Ülke söylerken "from" kullanılır (**from Spain**), milliyet söylerken "from" kullanılmaz (**I am Spanish**).
              `,
              keyConcepts: ['Hello', 'Good morning', 'What is your name?', 'Nice to meet you', 'Where are you from?', 'Country', 'Nationality'],
              pronunciationPhrases: [
                {
                  english: 'Hello, what is your name?',
                  turkish: 'Merhaba, senin adın ne?',
                  phonetic: 'he-lo, vat iz yor neym',
                  category: 'Meeting'
                },
                {
                  english: 'My name is Deniz.',
                  turkish: 'Benim adım Deniz.',
                  phonetic: 'may neym iz deniz',
                  category: 'Meeting'
                },
                {
                  english: 'Nice to meet you!',
                  turkish: 'Tanıştığımıza çok memnun oldum!',
                  phonetic: 'nays tu miit yu',
                  category: 'Meeting'
                },
                {
                  english: 'Nice to meet you, too!',
                  turkish: 'Ben de tanıştığımıza çok memnun oldum!',
                  phonetic: 'nays tu miit yu tuu',
                  category: 'Meeting'
                },
                {
                  english: 'Where are you from?',
                  turkish: 'Nerelisin? (Hangi ülkedensin?)',
                  phonetic: 'ver ar yu from',
                  category: 'Country'
                },
                {
                  english: 'I am from Türkiye.',
                  turkish: 'Ben Türkiye\'denim.',
                  phonetic: 'ay em from tür-ki-ye',
                  category: 'Country'
                },
                {
                  english: 'I am Turkish.',
                  turkish: 'Ben Türküm.',
                  phonetic: 'ay em tör-kiş',
                  category: 'Nationality'
                },
                {
                  english: 'How are you today?',
                  turkish: 'Bugün nasılsın?',
                  phonetic: 'hav ar yu tu-dey',
                  category: 'Greeting'
                },
                {
                  english: 'I am great, thank you!',
                  turkish: 'Harikayım, teşekkür ederim!',
                  phonetic: 'ay em greyt, tenk yu',
                  category: 'Greeting'
                },
                {
                  english: 'Have a great day at school!',
                  turkish: 'Okulda harika bir gün geçir!',
                  phonetic: 'hev e greyt dey et skuul',
                  category: 'Farewell'
                }
              ],
              flashcards: [
                {
                  id: 'fc_eng_1',
                  front: '"Where are you from?" sorusuna hangi kalıpla cevap verilir?',
                  back: '"I am from [Ülke İsmi]." (Örn: I am from Türkiye.)',
                  tip: '"from" edatından sonra mutlaka ülke ismi gelmelidir, milliyet gelmez!',
                  example: '— Where are you from? — I am from Italy.'
                },
                {
                  id: 'fc_eng_2',
                  front: '"What nationality are you?" ne anlama gelir?',
                  back: '"Hangi milliyettensin / Uyruğun nedir?" anlamına gelir. Cevap: "I am Turkish / Spanish / German."',
                  tip: 'Milliyet söylerken "from" kullanılmaz: "I am Turkish" denir.',
                  example: 'I am from Japan, so I am Japanese.'
                },
                {
                  id: 'fc_eng_3',
                  front: '"Nice to meet you!" ifadesine karşılık olarak ne denir?',
                  back: '"Nice to meet you, too!" (Ben de tanıştığımıza memnun oldum!)',
                  tip: 'Cümlenin sonundaki "too" eki "-de, -da" (ben de) anlamına gelir.',
                  example: '— Nice to meet you! — Nice to meet you, too!'
                },
                {
                  id: 'fc_eng_4',
                  front: 'Sabah okula vardığında arkadaşına veya öğretmenine hangi selamı verirsin?',
                  back: '"Good morning!" (Günaydın!)',
                  tip: 'Öğle saatine kadar (12:00) her zaman Good morning denir.',
                  example: 'Good morning, Mr. Brown!'
                },
                {
                  id: 'fc_eng_5',
                  front: '"How are you?" sorusuna teşekkür ederek nasıl cevap verilir?',
                  back: '"I am fine, thank you. And you?" (İyiyim, teşekkürler. Ya sen?)',
                  tip: 'Nezaket için karşı tarafa her zaman "And you?" sorulur.',
                  example: '— How are you? — I am very well, thanks!'
                },
                {
                  id: 'fc_eng_6',
                  front: '"See you tomorrow!" vedalaşırken ne anlama gelir?',
                  back: '"Yarın görüşürüz!" demektir.',
                  tip: 'Tomorrow = Yarın. Okul çıkışında arkadaşlarına söyleyebilirsin.',
                  example: 'Goodbye, see you tomorrow!'
                }
              ],
              matching: [
                { id: 'm_e1_1', left: 'Where are you from?', right: 'Nerelisin?' },
                { id: 'm_e1_2', left: 'Nice to meet you', right: 'Tanıştığımıza memnun oldum' },
                { id: 'm_e1_3', left: 'Good morning', right: 'Günaydın' },
                { id: 'm_e1_4', left: 'I am Turkish', right: 'Ben Türküm (Milliyet)' },
                { id: 'm_e1_5', left: 'See you tomorrow', right: 'Yarın görüşürüz' }
              ],
              trueFalse: [
                {
                  id: 'tf_e1_1',
                  text: '"I am from Turkish" cümlesi dil bilgisi açısından tamamen DOĞRUDUR.',
                  isTrue: false,
                  explanation: 'Yanlış! "from" sözcüğünden sonra ülke adı gelmelidir: "I am from Türkiye" doğrusudur.'
                },
                {
                  id: 'tf_e1_2',
                  text: 'Biriyle ilk kez tanıştığımızda nezaket ifadesi olarak "Nice to meet you" deriz.',
                  isTrue: true,
                  explanation: 'Doğru! Karşılığında "Nice to meet you, too" (Ben de memnun oldum) yanıtı verilir.'
                },
                {
                  id: 'tf_e1_3',
                  text: 'Öğleden sonra saat 14:00\'te selamlaşırken "Good afternoon" denir.',
                  isTrue: true,
                  explanation: 'Doğru! 12:00 - 17:00 saatleri arasında Good afternoon kullanılır.'
                },
                {
                  id: 'tf_e1_4',
                  text: '"How are you?" sorusuna yaşımızı söyleyerek cevap veririz.',
                  isTrue: false,
                  explanation: 'Yanlış! "How are you?" hal-hatır sorar ("Nasılsın?"). Yaş için "How old are you?" sorulur.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_e1_1',
                  sentence: '— Where are you from? — I am from ___ .',
                  options: ['Spain', 'Spanish', 'Turkish', 'English'],
                  correctWord: 'Spain',
                  hint: '"from" sözcüğünden sonra milliyet değil, ÜLKE adı gelir.'
                },
                {
                  id: 'fb_e1_2',
                  sentence: '— Nice to meet you! — Nice to meet you, ___ !',
                  options: ['too', 'two', 'to', 'from'],
                  correctWord: 'too',
                  hint: 'Cümle sonunda "ben de" anlamı katan sözcüğü seç.'
                },
                {
                  id: 'fb_e1_3',
                  sentence: '— What is your name? — ___ name is Aylin.',
                  options: ['My', 'Your', 'His', 'Her'],
                  correctWord: 'My',
                  hint: '"Benim" anlamına gelen iyelik sıfatı.'
                },
                {
                  id: 'fb_e1_4',
                  sentence: 'Sabah saat 08:30\'da okula girdiğimizde "Good ___ !" deriz.',
                  options: ['morning', 'night', 'evening', 'afternoon'],
                  correctWord: 'morning',
                  hint: 'Sabah vaktinde söylenen selamlama.'
                }
              ],
              quiz: [
                {
                  id: 'q_e1_1',
                  question: '— What nationality are you?\n— I am ___ .',
                  options: ['Turkish', 'Türkiye', 'England', 'Germany'],
                  correctAnswerIndex: 0,
                  hint: 'Milliyet bildiren sözcüğü seçmelisin.',
                  explanation: '"Turkish" bir milliyettir. "Türkiye, England, Germany" ise ülke isimleridir.'
                },
                {
                  id: 'q_e1_2',
                  question: 'Yeni nakil gelen bir öğrenciye nereli olduğunu sormak isteyen Can hangi soruyu sormalıdır?',
                  options: [
                    'Where are you from?',
                    'How old are you?',
                    'What time is it?',
                    'May I come in?'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Ülke/memleket sorma kalıbı.',
                  explanation: '"Where are you from?" nerelisin anlamına gelir.'
                },
                {
                  id: 'q_e1_3',
                  question: '— How are you today, Leo?\n— ___ , thank you. And you?',
                  options: ['I am fine', 'I am from France', 'My name is Leo', 'I have got a pen'],
                  correctAnswerIndex: 0,
                  hint: 'Hal-hatır sorusuna uygun karşılık.',
                  explanation: '"How are you today?" sorusuna durumumuzu belirterek "I am fine" ile cevap veririz.'
                },
                {
                  id: 'q_e1_4',
                  question: 'Aşağıdaki eşleştirmelerden hangisi ÜLKE - MİLLİYET bakımından DOĞRUDUR?',
                  options: [
                    'France — French',
                    'Germany — Spain',
                    'Italy — England',
                    'Japan — Turkish'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Fransa ülkesinin milliyet karşılığı.',
                  explanation: 'France (Fransa) ➔ French (Fransız). Diğer şıklarda iki farklı ülke karıştırılmıştır.'
                }
              ]
            },
            {
              id: 'eng_u1_t2',
              title: 'Places at School & Directions (Okulun Bölümleri & Yönler)',
              kazanimCode: 'ENG.5.1.W2.2',
              kazanimDesc: 'Okulun bölümlerini (Library, Canteen, Science Lab, Gym vb.) tanır ve nerede olduğunu sorup yönlendirir.',
              summary: `
• **Places at School (Okulun Bölümleri):**
  - **Library (Kütüphane):** We read books and study quietly. (Sessizce kitap okuyup çalıştığımız yer)
  - **Science Lab (Fen Laboratuvarı):** We do experiments with our teacher. (Deney yaptığımız laboratuvar)
  - **Canteen (Kantin):** We buy snacks and drinks at break time. (Teneffüste atıştırmalık aldığımız yer)
  - **Gym (Spor Salonu):** We play basketball, volleyball and exercise. (Beden eğitimi ve spor alanı)
  - **Music Room (Müzik Odası):** We play instruments and sing songs. (Enstrüman çaldığımız oda)
  - **Art Room (Görsel Sanatlar Odası):** We paint and draw pictures. (Resim yaptığımız atölye)
  - **Playground (Okul Bahçesi):** We run, play and meet friends. (Bahçe ve oyun alanı)
• **Asking & Giving Directions (Yer Sorma ve Yön Tarifi):**
  - **Where is the library?:** Kütüphane nerede?
  - **It is on the first floor.:** Birinci kattadır.
  - **It is next to the science lab.:** Fen laboratuvarının yanındadır.
  - **Go straight ahead and turn left.:** Düz git ve sola dön.
              `,
              keyConcepts: ['Library', 'Canteen', 'Science Lab', 'Gym', 'Art Room', 'Where is the...?', 'Next to', 'Opposite'],
              pronunciationPhrases: [
                {
                  english: 'Where is the school library?',
                  turkish: 'Okul kütüphanesi nerede?',
                  phonetic: 'ver iz dı skuul laybrıri',
                  category: 'Directions'
                },
                {
                  english: 'It is next to the science lab.',
                  turkish: 'Fen laboratuvarının bitişiğindedir.',
                  phonetic: 'it iz nekst tu dı sayıns läb',
                  category: 'Location'
                },
                {
                  english: 'The canteen is on the ground floor.',
                  turkish: 'Kantin zemin kattadır.',
                  phonetic: 'dı kentiiyn iz on dı gravnd floor',
                  category: 'Location'
                },
                {
                  english: 'We have P.E. in the gym.',
                  turkish: 'Beden eğitimi dersimiz spor salonunda.',
                  phonetic: 'vii hev pi-ii in dı cim',
                  category: 'School Subject'
                },
                {
                  english: 'Turn right at the corridor.',
                  turkish: 'Koridordan sağa dön.',
                  phonetic: 'törn rayt et dı koridor',
                  category: 'Directions'
                },
                {
                  english: 'Go straight ahead.',
                  turkish: 'Düz git / dosdoğru ilerle.',
                  phonetic: 'go streyt ehed',
                  category: 'Directions'
                },
                {
                  english: 'Quiet, please! Students are reading.',
                  turkish: 'Sessiz olun lütfen! Öğrenciler okuyor.',
                  phonetic: 'kvayıt pliiz, stüdınts ar riiding',
                  category: 'Rules'
                },
                {
                  english: 'Let\'s meet at the playground!',
                  turkish: 'Okul bahçesinde buluşalım!',
                  phonetic: 'lets miit et dı pley-gravnd',
                  category: 'Activity'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e1_p1',
                  front: 'Deneylerin yapıldığı okul bölümü hangisidir?',
                  back: 'Science Lab (Fen Laboratuvarı)',
                  tip: 'Science = Fen/Bilim, Lab = Laboratuvar.',
                  example: 'We are in the science lab today.'
                },
                {
                  id: 'fc_e1_p2',
                  front: '"Next to" yer edatı ne anlama gelir?',
                  back: '"Bitişiğinde / Hemen yanında" demektir.',
                  tip: 'Örn: The library is next to the teachers\' room.',
                  example: 'My desk is next to the window.'
                },
                {
                  id: 'fc_e1_p3',
                  front: 'Teneffüste tost ve meyve suyu alabildiğimiz yer neresidir?',
                  back: 'Canteen (Okul Kantini)',
                  tip: 'At lunch, students go to the canteen.',
                  example: 'I buy a sandwich from the canteen.'
                },
                {
                  id: 'fc_e1_p4',
                  front: '"Turn left" ve "Turn right" ifadeleri ne demektir?',
                  back: '"Turn left" = Sola dön, "Turn right" = Sağa dön.',
                  tip: 'Left = Sol, Right = Sağ.',
                  example: 'Go straight ahead and turn right.'
                },
                {
                  id: 'fc_e1_p5',
                  front: 'Basketbol ve voleybol oynanan kapalı spor alanı hangisidir?',
                  back: 'Gym / Gymnasium (Spor Salonu)',
                  tip: 'P.E. (Physical Education) dersleri gym\'de işlenir.',
                  example: 'We play basketball in the gym.'
                },
                {
                  id: 'fc_e1_p6',
                  front: '"Opposite" konumu tarif ederken ne anlama gelir?',
                  back: '"Karşısında / Tam karşısında" demektir.',
                  tip: 'Örn: The art room is opposite the music room.',
                  example: 'The library is opposite the headmaster\'s office.'
                }
              ],
              matching: [
                { id: 'm_p1_1', left: 'Library', right: 'Kütüphane' },
                { id: 'm_p1_2', left: 'Science Lab', right: 'Fen Laboratuvarı' },
                { id: 'm_p1_3', left: 'Canteen', right: 'Kantin' },
                { id: 'm_p1_4', left: 'Gym', right: 'Spor Salonu' },
                { id: 'm_p1_5', left: 'Next to', right: 'Bitişiğinde / Yanında' }
              ],
              trueFalse: [
                {
                  id: 'tf_p1_1',
                  text: 'Öğrenciler resim ve boyama etkinliklerini "Art Room" içinde yaparlar.',
                  isTrue: true,
                  explanation: 'Doğru! Art room = Resim/Sanat atölyesi demektir.'
                },
                {
                  id: 'tf_p1_2',
                  text: '"Science Lab" içinde yüksek sesle müzik dinlenip top oynanır.',
                  isTrue: false,
                  explanation: 'Yanlış! Fen laboratuvarında deneyler yapılır ve dikkatli olunmalıdır. Top bahçede veya spor salonunda oynanır.'
                },
                {
                  id: 'tf_p1_3',
                  text: '"Turn left" sağa dönmek anlamına gelir.',
                  isTrue: false,
                  explanation: 'Yanlış! Left = Sol demektir. "Turn left" sola dön demektir.'
                },
                {
                  id: 'tf_p1_4',
                  text: 'Kütüphanede (Library) sessizce kitap okumak esastır.',
                  isTrue: true,
                  explanation: 'Doğru! "Be quiet in the library" temel bir kütüphane kuralıdır.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_p1_1',
                  sentence: 'We read storybooks and study in the school ___ .',
                  options: ['library', 'gym', 'canteen', 'playground'],
                  correctWord: 'library',
                  hint: 'Kitap okunan ve araştırma yapılan sessiz yer.'
                },
                {
                  id: 'fb_p1_2',
                  sentence: 'The art room is ___ to the music room.',
                  options: ['next', 'under', 'on', 'in'],
                  correctWord: 'next',
                  hint: '"___ to" kalıbıyla yanında/bitişiğinde anlamına gelen edat.'
                },
                {
                  id: 'fb_p1_3',
                  sentence: 'Students buy lunch and water from the ___ .',
                  options: ['canteen', 'library', 'lab', 'gym'],
                  correctWord: 'canteen',
                  hint: 'Yiyecek ve içecek temin edilen yer.'
                },
                {
                  id: 'fb_p1_4',
                  sentence: 'To find the gym, go straight ahead and turn ___ (sağa).',
                  options: ['right', 'left', 'up', 'down'],
                  correctWord: 'right',
                  hint: 'Sağ yönü bildiren İngilizce sözcük.'
                }
              ],
              quiz: [
                {
                  id: 'q_p1_1',
                  question: '— Where can we do a science experiment with a microscope?\n— In the ___ .',
                  options: ['science lab', 'school canteen', 'counseling room', 'playground'],
                  correctAnswerIndex: 0,
                  hint: 'Deney ve mikroskop hangi odadadır?',
                  explanation: 'Deneyler ve mikroskop çalışmaları "Science Lab" (Fen Laboratuvarı) içinde yapılır.'
                },
                {
                  id: 'q_p1_2',
                  question: '— Excuse me, where is the music room?\n— It is ___ the first floor, opposite the library.',
                  options: ['on', 'at', 'under', 'from'],
                  correctAnswerIndex: 0,
                  hint: 'Kat bildiren (first floor) ifadelerin başında hangi edat kullanılır?',
                  explanation: 'Kat bildiren ifadelerde her zaman "on the first/second floor" kullanılır.'
                },
                {
                  id: 'q_p1_3',
                  question: 'Aşağıdaki tabelalardan hangisi "Okul Kütüphanesi" kapısında bulunmalıdır?',
                  options: [
                    'Silence, please! 🤫',
                    'Do not run with the ball! ⚽',
                    'Wear safety goggles! 🥽',
                    'Wash the dishes! 🍽️'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Kütüphane kuralı nedir?',
                  explanation: 'Kütüphanede sessizlik esastır: "Silence, please!" tabelası asılır.'
                },
                {
                  id: 'q_p1_4',
                  question: '"The gym is between the canteen and the art room." cümlesine göre spor salonu nerededir?',
                  options: [
                    'Kantin ile resim odasının arasındadır.',
                    'Kantinin tam arkasındadır.',
                    'Resim odasının üzerindedir.',
                    'Okul bahçesinin dışındadır.'
                  ],
                  correctAnswerIndex: 0,
                  hint: '"between ... and ..." iki şeyin arası demektir.',
                  explanation: '"Between A and B", A ile B\'nin arasında anlamına gelir.'
                }
              ]
            },
            {
              id: 'eng_u1_t3',
              title: 'School Rules & After-School Clubs (Okul Kuralları & Kulüpler)',
              kazanimCode: 'ENG.5.1.W3.3',
              kazanimDesc: 'Okul kurallarını (Must / Mustn\'t, Can / Can\'t) kavrar ve ilgi alanlarına göre okul kulüplerini ifade eder.',
              summary: `
• **School Rules with Must / Mustn't (Zorunluluk ve Yasaklar):**
  - **Must (Yapmalısın - Zorunluluk/Kural):**
    - You **must listen** to your teacher. (Öğretmenini dinlemelisin.)
    - You **must arrive** at school on time. (Okula zamanında gelmelisin.)
    - You **must keep** the classroom clean. (Sınıfı temiz tutmalısın.)
  - **Mustn't (Yapmamalısın - Yasak/Kural ihlali):**
    - You **mustn't run** in the corridors. (Koridorlarda koşmamalısın.)
    - You **mustn't make** noise during the lesson. (Ders sırasında gürültü yapmamalısın.)
    - You **mustn't drop** litter on the floor. (Yere çöp atmamalısın.)
• **After-School Clubs (Okul Kulüpleri):**
  - **Chess Club (Satranç Kulübü):** I like thinking and playing chess.
  - **Drama Club (Tiyatro Kulübü):** We act out plays and sketches.
  - **Music Club (Müzik Kulübü):** We sing and play the guitar.
  - **Art Club (Resim Kulübü):** We paint canvases and do crafts.
  - **Robotics & Coding Club (Robotik & Kodlama):** We build robots and write code!
              `,
              keyConcepts: ['Must', 'Mustn\'t', 'School Rules', 'Chess Club', 'Drama Club', 'Robotics Club', 'On time'],
              pronunciationPhrases: [
                {
                  english: 'You must listen to your teacher.',
                  turkish: 'Öğretmenini dikkatle dinlemelisin.',
                  phonetic: 'yu mast lisın tu yor tiiçır',
                  category: 'Rule'
                },
                {
                  english: 'You mustn\'t run in the corridor.',
                  turkish: 'Koridorda koşmamalısın!',
                  phonetic: 'yu masınt ran in dı koridor',
                  category: 'Rule'
                },
                {
                  english: 'We must keep our classroom clean.',
                  turkish: 'Sınıfımızı temiz tutmalıyız.',
                  phonetic: 'vii mast kiip avır klaas-ruum kliin',
                  category: 'Rule'
                },
                {
                  english: 'I want to join the Chess Club.',
                  turkish: 'Satranç Kulübüne katılmak istiyorum.',
                  phonetic: 'ay vant tu coyn dı çes klab',
                  category: 'Club'
                },
                {
                  english: 'She loves the Drama Club.',
                  turkish: 'O tiyatro kulübünü çok seviyor.',
                  phonetic: 'şii lavz dı drama klab',
                  category: 'Club'
                },
                {
                  english: 'Robotics and Coding is very exciting!',
                  turkish: 'Robotik ve kodlama çok heyecan verici!',
                  phonetic: 'ro-botiks end kooding iz veri iksayting',
                  category: 'Club'
                },
                {
                  english: 'Always be on time for the lessons.',
                  turkish: 'Derslere her zaman vaktinde yetiş.',
                  phonetic: 'olveys bii on taym for dı lesınz',
                  category: 'Rule'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e1_r1',
                  front: '"You mustn\'t run in the corridor." ne anlama gelir?',
                  back: '"Koridorda koşmamalısın (yasaktır)." anlamına gelir.',
                  tip: 'Mustn\'t = Yapılması yasak olan veya zarar verecek durumlar için kullanılır.',
                  example: 'You mustn\'t shout in class.'
                },
                {
                  id: 'fc_e1_r2',
                  front: '"Must" ile "Mustn\'t" arasındaki temel fark nedir?',
                  back: '"Must" zorunlu yapılması gereken kuraldır; "Mustn\'t" ise kesinlikle yapılmaması gereken yasaktır.',
                  tip: 'Must = Yapmalısın, Mustn\'t = Yapmamalısın!',
                  example: 'You must study, you mustn\'t cheat.'
                },
                {
                  id: 'fc_e1_r3',
                  front: 'Sahneye çıkıp rol yapmayı ve canlandırmayı seven öğrenci hangi kulübü seçmelidir?',
                  back: 'Drama Club (Tiyatro Kulübü)',
                  tip: 'Drama = Tiyatro ve sahne sanatları.',
                  example: 'I joined the Drama Club this year.'
                },
                {
                  id: 'fc_e1_r4',
                  front: 'Strateji ve zeka oyunlarını seven bir öğrenci hangi kulübe katılmalıdır?',
                  back: 'Chess Club (Satranç Kulübü)',
                  tip: 'Chess = Satranç.',
                  example: 'We play chess tournaments every Friday.'
                },
                {
                  id: 'fc_e1_r5',
                  front: '"Be on time!" kuralı ne demektir?',
                  back: '"Zamanında ol! / Vaktinde gel!" demektir.',
                  tip: 'Ders zilinden önce sınıfta olmak için bu kurala uyarız.',
                  example: 'You must be on time for school.'
                },
                {
                  id: 'fc_e1_r6',
                  front: 'Bilgisayar, devreler ve yazılım tasarlanan kulüp hangisidir?',
                  back: 'Robotics and Coding Club (Robotik & Kodlama Kulübü)',
                  tip: 'TYMM yenilikçi beceriler kapsamındadır.',
                  example: 'We code smart games in our robotics club.'
                }
              ],
              matching: [
                { id: 'm_r1_1', left: 'Must listen', right: 'Dinlemelisin (Kural)' },
                { id: 'm_r1_2', left: 'Mustn\'t run', right: 'Koşmamalısın (Yasak)' },
                { id: 'm_r1_3', left: 'Chess Club', right: 'Satranç Kulübü' },
                { id: 'm_r1_4', left: 'Drama Club', right: 'Tiyatro Kulübü' },
                { id: 'm_r1_5', left: 'Keep clean', right: 'Temiz tutmak' }
              ],
              trueFalse: [
                {
                  id: 'tf_r1_1',
                  text: 'Okul kurallarına göre koridorlarda hızla koşmak serbesttir.',
                  isTrue: false,
                  explanation: 'Yanlış! Güvenlik için koridorda koşmak yasaktır: "You mustn\'t run in the corridor."'
                },
                {
                  id: 'tf_r1_2',
                  text: '"You must raise your hand to speak" kuralı "Konuşmak için el kaldırmalısın" demektir.',
                  isTrue: true,
                  explanation: 'Doğru! Söz hakkı almak için parmak kaldırılır: "Raise your hand."'
                },
                {
                  id: 'tf_r1_3',
                  text: 'Resim yapmayı ve el sanatlarını seven bir öğrenci "Music Club"a gitmelidir.',
                  isTrue: false,
                  explanation: 'Yanlış! Resim ve el işi için "Art Club" seçilmelidir; müzik kulübü enstrüman ve şarkı içindir.'
                },
                {
                  id: 'tf_r1_4',
                  text: 'Ders zili çaldığında sınıfta olmak "on time" (zamanında olmak) kuralıdır.',
                  isTrue: true,
                  explanation: 'Doğru! Okula ve derse vaktinde gelmek temel bir sorumluluktur.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_r1_1',
                  sentence: 'You ___ listen carefully when your teacher explains.',
                  options: ['must', 'mustn\'t', 'can\'t', 'not'],
                  correctWord: 'must',
                  hint: 'Yapılması zorunlu ve olumlu kural (dinlemelisin).'
                },
                {
                  id: 'fb_r1_2',
                  sentence: 'You ___ drop trash or litter on the classroom floor.',
                  options: ['mustn\'t', 'must', 'always', 'can'],
                  correctWord: 'mustn\'t',
                  hint: 'Yere çöp atmak yasaktır (yapmamalısın).'
                },
                {
                  id: 'fb_r1_3',
                  sentence: 'Emre plays the guitar and sings, so he joins the ___ Club.',
                  options: ['Music', 'Chess', 'Science', 'Football'],
                  correctWord: 'Music',
                  hint: 'Gitar ve şarkı söyleme ile ilgili kulüp.'
                },
                {
                  id: 'fb_r1_4',
                  sentence: 'Students must be on ___ for their morning classes.',
                  options: ['time', 'clock', 'hour', 'day'],
                  correctWord: 'time',
                  hint: '"on ___" vaktinde/zamanında anlamına gelir.'
                }
              ],
              quiz: [
                {
                  id: 'q_r1_1',
                  question: 'Sınıfta arkadaşlarına saygılı bir öğrenci aşağıdaki davranışlardan hangisini YAPMALIDIR (must)?',
                  options: [
                    'Raise your hand before speaking',
                    'Shout loudly in the lesson',
                    'Eat potato chips during class',
                    'Throw paper on the floor'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Söz isteme kuralı.',
                  explanation: '"Raise your hand before speaking" (Konuşmadan önce elini kaldır) doğru sınıf kuralıdır.'
                },
                {
                  id: 'q_r1_2',
                  question: '"You ___ chew gum in the classroom." Boşluğa kural gereği hangisi gelmelidir?',
                  options: ['mustn\'t', 'must', 'always', 'good'],
                  correctAnswerIndex: 0,
                  hint: 'Derste sakız çiğnemek yasaktır.',
                  explanation: 'Derste sakız çiğnenmez: "You mustn\'t chew gum in class."'
                },
                {
                  id: 'q_r1_3',
                  question: 'Hakan satranç tahtasında strateji kurmayı çok seviyor. Hakan\'a hangi okul kulübünü önerirsin?',
                  options: ['Chess Club', 'Drama Club', 'Dance Club', 'Swimming Club'],
                  correctAnswerIndex: 0,
                  hint: 'Satranç kulübü.',
                  explanation: 'Satranç = Chess. Hakan Chess Club\'a katılmalıdır.'
                },
                {
                  id: 'q_r1_4',
                  question: 'Aşağıdaki okul kurallarından hangisi "MUSTN\'T" (Yasak) ile ifade edilir?',
                  options: [
                    'Damage school property and desks',
                    'Keep the classroom clean',
                    'Help your classmates',
                    'Do your homework'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Okul eşyalarına ve sıralara zarar vermek.',
                  explanation: 'Okul eşyalarına zarar verilmemelidir: "You mustn\'t damage school property."'
                }
              ]
            }
          ]
        },
        {
          id: 'eng_u2',
          unitNumber: 2,
          title: 'Theme 2: Classroom Life (Sınıf Yaşamı)',
          description: 'Sınıf eşyaları, kırtasiye gereçleri, dersler, haftalık ders programı ve sınıf içi yönergeler',
          topics: [
            {
              id: 'eng_u2_t1',
              title: 'Classroom Objects, Stationery & Numbers (Sınıf Eşyaları & Sayılar)',
              kazanimCode: 'ENG.5.2.W1.1',
              kazanimDesc: 'Sınıftaki araç-gereçleri, kırtasiye malzemelerini ve nesne sayılarını (There is / There are, How many?) ifade eder.',
              interactiveLab: {
                type: 'english-classroom-lab',
                title: 'Sınıf Nesneleri & Cümle Kurucu Lab'
              },
              summary: `
• **Classroom Objects & Stationery (Araç-Gereçler):**
  - **Pen:** Tükenmez kalem | **Pencil:** Kurşun kalem | **Eraser / Rubber:** Silgi
  - **Pencil case:** Kalem kutusu | **Ruler:** Cetvel | **Sharpener:** Kalemtıraş
  - **School bag / Backpack:** Okul çantası | **Notebook:** Defter | **Coursebook:** Ders kitabı
  - **Desk:** Öğrenci sırası | **Chair:** Sandalye | **Whiteboard:** Yazı tahtası
• **There is / There are (Var / Bulunuyor):**
  - **There is a / an:** Tekil nesneler için (1 tane):
    - *There is a notebook on the desk.* (Sırada bir defter var.)
    - *There is an eraser in my bag.* (Çantamda bir silgi var.)
  - **There are:** Çoğul nesneler için (Birden fazla):
    - *There are three pencils in the pencil case.* (Kalemlikte 3 kurşun kalem var.)
• **Asking Quantity (Miktar Sorma):**
  - **How many pens are there?:** Kaç tane tükenmez kalem var?
  - ➔ *There are four pens.* (4 tane var.)
• **Numbers 1 - 100:**
  - 10: ten, 20: twenty, 30: thirty, 40: forty, 50: fifty, 100: one hundred.
              `,
              keyConcepts: ['Pencil', 'Eraser', 'Ruler', 'School bag', 'There is', 'There are', 'How many?', 'Numbers'],
              pronunciationPhrases: [
                {
                  english: 'What is this? It is a pencil case.',
                  turkish: 'Bu nedir? Bu bir kalem kutusudur.',
                  phonetic: 'vat iz dis, it iz e pensıl keys',
                  category: 'Stationery'
                },
                {
                  english: 'There is a ruler on the desk.',
                  turkish: 'Sıranın üzerinde bir cetvel var.',
                  phonetic: 'der iz e ruulır on dı desk',
                  category: 'Grammar'
                },
                {
                  english: 'There are five notebooks in my school bag.',
                  turkish: 'Okul çantamda beş defter var.',
                  phonetic: 'der ar fayv nootbuks in may skuul bäg',
                  category: 'Grammar'
                },
                {
                  english: 'How many students are there in the classroom?',
                  turkish: 'Sınıfta kaç öğrenci var?',
                  phonetic: 'hav meni stüdınts ar der in dı klaas-ruum',
                  category: 'Question'
                },
                {
                  english: 'There are twenty-four students.',
                  turkish: 'Yirmi dört öğrenci var.',
                  phonetic: 'der ar tventi foor stüdınts',
                  category: 'Number'
                },
                {
                  english: 'Put your books into your backpack.',
                  turkish: 'Kitaplarını sırt çantana koy.',
                  phonetic: 'put yor buks intu yor bäk-päk',
                  category: 'Instruction'
                },
                {
                  english: 'I need a sharpener and an eraser.',
                  turkish: 'Bir kalemtıraş ve bir silgiye ihtiyacım var.',
                  phonetic: 'ay niid e şarpınır end en ireysır',
                  category: 'Need'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e2_o1',
                  front: 'Tekil nesneler için (1 adet) "var" derken ne kullanılır?',
                  back: '"There is" kullanılır (Örn: There is a book).',
                  tip: 'Tekil ve sayılamayan nesnelerle There is, çoğul nesnelerle There are kullanılır.',
                  example: 'There is an apple on the table.'
                },
                {
                  id: 'fc_e2_o2',
                  front: 'Çoğul nesneler için (2 veya daha fazla) "var" nasıl denir?',
                  back: '"There are" kullanılır (Örn: There are ten pencils).',
                  tip: 'Kelimenin sonundaki -s çoğul ekine dikkat et!',
                  example: 'There are three notebooks in my bag.'
                },
                {
                  id: 'fc_e2_o3',
                  front: '"How many...?" sorusu neyi sormak için kullanılır?',
                  back: '"Kaç tane?" anlamına gelir ve sayılabilen nesnelerin miktarını sorar.',
                  tip: 'How many sorusundan sonraki isim her zaman çoğul olur: How many pens...?',
                  example: 'How many rulers have you got?'
                },
                {
                  id: 'fc_e2_o4',
                  front: '"40" sayısının doğru İngilizce yazılışı nedir?',
                  back: '"Forty" olarak yazılır (Fourty değil, u harfi düşer!).',
                  tip: 'Four (4), Fourteen (14) ama FORTY (40).',
                  example: 'There are forty pages in this booklet.'
                },
                {
                  id: 'fc_e2_o5',
                  front: 'Kurşun kalemimizin ucu kırıldığında ne kullanırız?',
                  back: 'Pencil sharpener (Kalemtıraş)',
                  tip: 'Sharp = keskin, Sharpener = keskinleştiren/açan alet.',
                  example: 'Can I use your sharpener?'
                },
                {
                  id: 'fc_e2_o6',
                  front: 'Sıranın üzerinde bir cetvel olduğunu nasıl söylersin?',
                  back: '"There is a ruler on the desk."',
                  tip: 'On = Üzerinde, Desk = Öğrenci sırası.',
                  example: 'The ruler is thirty centimeters long.'
                }
              ],
              matching: [
                { id: 'm_e2_1', left: 'Pencil sharpener', right: 'Kalemtıraş' },
                { id: 'm_e2_2', left: 'Eraser', right: 'Silgi' },
                { id: 'm_e2_3', left: 'Ruler', right: 'Cetvel' },
                { id: 'm_e2_4', left: 'There is', right: 'Vardır (Tekil)' },
                { id: 'm_e2_5', left: 'There are', right: 'Vardır (Çoğul)' }
              ],
              trueFalse: [
                {
                  id: 'tf_e2_1',
                  text: '"There is five pencils on the desk" cümlesi dil bilgisi açısından DOĞRUDUR.',
                  isTrue: false,
                  explanation: 'Yanlış! Beş kalem çoğul olduğu için "There are five pencils" olmalıdır.'
                },
                {
                  id: 'tf_e2_2',
                  text: '"How many notebooks are there?" sorusu sınıftaki defterlerin sayısını öğrenmek için sorulur.',
                  isTrue: true,
                  explanation: 'Doğru! "How many" kaç tane miktarını sorar.'
                },
                {
                  id: 'tf_e2_3',
                  text: 'İngilizcede "40" sayısı "fourty" şeklinde yazılır.',
                  isTrue: false,
                  explanation: 'Yanlış! Doğru yazılışı "forty"dir (u harfi bulunmaz).'
                },
                {
                  id: 'tf_e2_4',
                  text: 'Silgi kelimesinin İngilizce karşılığı hem "eraser" hem de "rubber" olabilir.',
                  isTrue: true,
                  explanation: 'Doğru! Amerikan İngilizcesinde eraser, İngiliz İngilizcesinde rubber yaygındır.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_e2_1',
                  sentence: '___ is a whiteboard on the classroom wall.',
                  options: ['There', 'They', 'These', 'This'],
                  correctWord: 'There',
                  hint: '"___ is a ..." (vardır) kalıbı.'
                },
                {
                  id: 'fb_e2_2',
                  sentence: 'There ___ three rulers in my pencil case.',
                  options: ['are', 'is', 'am', 'be'],
                  correctWord: 'are',
                  hint: 'Üç cetvel çoğul olduğu için uygun yardımcı fiil.'
                },
                {
                  id: 'fb_e2_3',
                  sentence: '— ___ many chairs are there in the room? — There are twenty.',
                  options: ['How', 'What', 'Where', 'Who'],
                  correctWord: 'How',
                  hint: '"Kaç tane?" soru kalıbının ilk sözcüğü.'
                },
                {
                  id: 'fb_e2_4',
                  sentence: 'I put my pens and eraser into my ___ .',
                  options: ['pencil case', 'window', 'board', 'door'],
                  correctWord: 'pencil case',
                  hint: 'Kalem ve silgilerin konulduğu fermuarlı kutu.'
                }
              ],
              quiz: [
                {
                  id: 'q_e2_1',
                  question: 'Masada TEK BİR sözlük olduğunu söylemek için hangi cümle kurulmalıdır?',
                  options: [
                    'There is a dictionary on the desk.',
                    'There are two dictionaries on the desk.',
                    'There are a dictionary on the desk.',
                    'There is many dictionaries on the desk.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Tekil nesnelerle There is a...',
                  explanation: 'Tekil bir nesne için "There is a dictionary" doğru kalıptır.'
                },
                {
                  id: 'q_e2_2',
                  question: '— How many students are there in 5-A?\n— There ___ 25 students.',
                  options: ['are', 'is', 'am', 'was'],
                  correctAnswerIndex: 0,
                  hint: '25 öğrenci çoğuldur.',
                  explanation: '25 öğrenci çoğul olduğu için "There are" kullanılır.'
                },
                {
                  id: 'q_e2_3',
                  question: '30, 40 ve 50 sayılarının İngilizce sıralaması hangisinde DOĞRUDUR?',
                  options: [
                    'thirty, forty, fifty',
                    'thirteen, fourteen, fifteen',
                    'three, four, five',
                    'thirty, fourty, fifty'
                  ],
                  correctAnswerIndex: 0,
                  hint: '-ty ile biten onluk sayılar.',
                  explanation: '30 = thirty, 40 = forty, 50 = fifty.'
                },
                {
                  id: 'q_e2_4',
                  question: 'Öğretmen: "Look at the ___ and read the sentence." cümlesinde öğrencilerin nereye bakmasını ister?',
                  options: ['whiteboard', 'pencil case', 'sharpener', 'chair'],
                  correctAnswerIndex: 0,
                  hint: 'Yazı yazılan ve okunan sınıf tahtası.',
                  explanation: 'Öğretmenler cümleleri yazı tahtasına (whiteboard) yazarlar.'
                }
              ]
            },
            {
              id: 'eng_u2_t2',
              title: 'School Subjects & Timetables (Dersler, Günler & Ders Programı)',
              kazanimCode: 'ENG.5.2.W2.2',
              kazanimDesc: 'Ders isimlerini (Maths, Science, English, Art, P.E.), haftanın günlerini ve ders programı saatlerini söyler.',
              summary: `
• **School Subjects (Okul Dersleri):**
  - **Maths (Matematik):** Numbers, shapes and calculations.
  - **Science (Fen Bilimleri):** Nature, space, animals and experiments.
  - **English (İngilizce):** Speaking, vocabulary, reading and listening.
  - **Turkish (Türkçe):** Reading comprehension, poems and grammar.
  - **Social Studies (Sosyal Bilgiler):** History, geography and culture.
  - **Information Technology / I.T. (Bilişim Teknolojileri):** Computers and coding.
  - **Physical Education / P.E. (Beden Eğitimi):** Sports and movement.
  - **Music (Müzik):** Songs and instruments.
  - **Art (Görsel Sanatlar):** Drawing, painting and sculpturing.
• **Days of the Week (Haftanın Günleri):**
  - **Monday:** Pazartesi | **Tuesday:** Salı | **Wednesday:** Çarşamba
  - **Thursday:** Perşembe | **Friday:** Cuma | **Saturday:** Cumartesi | **Sunday:** Pazar
• **Expressing Likes / Dislikes:**
  - *I like Science because it is fun.* (Feni severim çünkü eğlenceli.)
  - *My favourite subject is English.* (En sevdiğim ders İngilizcedir.)
• **Talking About Timetables:**
  - *When is English?* ➔ *It is on Wednesday and Friday.* (Günlerin önünde **"on"** kullanılır!)
              `,
              keyConcepts: ['Maths', 'Science', 'English', 'P.E.', 'Days of the week', 'Favourite subject', 'When is...?'],
              pronunciationPhrases: [
                {
                  english: 'What is your favourite school subject?',
                  turkish: 'En sevdiğin ders hangisidir?',
                  phonetic: 'vat iz yor feyvırıt skuul sabcekt',
                  category: 'Question'
                },
                {
                  english: 'My favourite subject is Science.',
                  turkish: 'Benim en sevdiğim ders Fendir.',
                  phonetic: 'may feyvırıt sabcekt iz sayıns',
                  category: 'Subject'
                },
                {
                  english: 'We have English on Monday and Thursday.',
                  turkish: 'Pazartesi ve Perşembe günleri İngilizce dersimiz var.',
                  phonetic: 'vii hev ingliş on mandey end törzdey',
                  category: 'Timetable'
                },
                {
                  english: 'I love P.E. because I like playing basketball.',
                  turkish: 'Beden eğitimini çok severim çünkü basketbol oynamayı seviyorum.',
                  phonetic: 'ay lav pi-ii bikoz ay layk pleying basket-bool',
                  category: 'Preference'
                },
                {
                  english: 'When is the Maths exam?',
                  turkish: 'Matematik sınavı ne zaman?',
                  phonetic: 'ven iz dı mets igzem',
                  category: 'Timetable'
                },
                {
                  english: 'It is on Tuesday morning.',
                  turkish: 'Salı sabahı.',
                  phonetic: 'it iz on tüüzdey morning',
                  category: 'Timetable'
                },
                {
                  english: 'Today is Friday, the weekend is coming!',
                  turkish: 'Bugün Cuma, hafta sonu geliyor!',
                  phonetic: 'tudey iz fraydey, dı viikend iz kaming',
                  category: 'Days'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e2_s1',
                  front: 'Haftanın günlerinden önce hangi edat kullanılır?',
                  back: '"on" edatı kullanılır (Örn: on Monday, on Friday).',
                  tip: 'Günlerle on, aylarla in, saatlerle at kullanılır.',
                  example: 'We have Art on Friday afternoon.'
                },
                {
                  id: 'fc_e2_s2',
                  front: '"P.E." hangi dersin kısaltmasıdır?',
                  back: 'Physical Education (Beden Eğitimi ve Spor)',
                  tip: 'Physical = Fiziksel/Beden, Education = Eğitim.',
                  example: 'Wear your sports shoes for P.E. class.'
                },
                {
                  id: 'fc_e2_s3',
                  front: '"What is your favourite subject?" ne demektir?',
                  back: '"En sevdiğin ders hangisidir?" demektir.',
                  tip: 'Cevap: "My favourite subject is ..."',
                  example: 'My favourite subject is Information Technology.'
                },
                {
                  id: 'fc_e2_s4',
                  front: 'Hafta içi günleri hangileridir?',
                  back: 'Monday, Tuesday, Wednesday, Thursday, Friday (Weekdays)',
                  tip: 'Saturday ve Sunday ise hafta sonudur (Weekend).',
                  example: 'School is open on weekdays.'
                },
                {
                  id: 'fc_e2_s5',
                  front: '"Social Studies" dersinde neler öğrenilir?',
                  back: 'Tarih, coğrafya, toplum ve kültür (Sosyal Bilgiler).',
                  tip: 'Social = Sosyal, Studies = Çalışmalar/Dersler.',
                  example: 'We study maps in Social Studies.'
                },
                {
                  id: 'fc_e2_s6',
                  front: '"When do you have English?" sorusu neyi sorar?',
                  back: '"İngilizce dersiniz ne zaman?" anlamındadır.',
                  tip: 'When = Ne zaman?',
                  example: '— When do you have English? — On Wednesday.'
                }
              ],
              matching: [
                { id: 'm_s1_1', left: 'Maths', right: 'Matematik' },
                { id: 'm_s1_2', left: 'Science', right: 'Fen Bilimleri' },
                { id: 'm_s1_3', left: 'Wednesday', right: 'Çarşamba' },
                { id: 'm_s1_4', left: 'Thursday', right: 'Perşembe' },
                { id: 'm_s1_5', left: 'Weekend', right: 'Hafta sonu' }
              ],
              trueFalse: [
                {
                  id: 'tf_s1_1',
                  text: 'Günlerin önünde "at Monday" şeklinde "at" edatı kullanılır.',
                  isTrue: false,
                  explanation: 'Yanlış! Günlerin önünde daima "on" kullanılır: "on Monday" doğrusudur.'
                },
                {
                  id: 'tf_s1_2',
                  text: 'Haftanın üçüncü iş günü "Wednesday" (Çarşamba) günüdür.',
                  isTrue: true,
                  explanation: 'Doğru! Monday (1), Tuesday (2), Wednesday (3).'
                },
                {
                  id: 'tf_s1_3',
                  text: '"I like Maths because numbers are easy for me" cümlesi matematiği sevdiğini ifade eder.',
                  isTrue: true,
                  explanation: 'Doğru! "I like Maths" matematiği severim demektir.'
                },
                {
                  id: 'tf_s1_4',
                  text: '"Saturday" ve "Sunday" günleri okulun açık olduğu hafta içi günleridir.',
                  isTrue: false,
                  explanation: 'Yanlış! Cumartesi ve Pazar günleri hafta sonudur (weekend).'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_s1_1',
                  sentence: 'We have a science quiz ___ Friday.',
                  options: ['on', 'in', 'at', 'to'],
                  correctWord: 'on',
                  hint: 'Günlerin önüne gelen doğru edat.'
                },
                {
                  id: 'fb_s1_2',
                  sentence: 'Ali plays basketball and runs fast in ___ class.',
                  options: ['P.E.', 'Maths', 'History', 'Music'],
                  correctWord: 'P.E.',
                  hint: 'Spor ve hareket dersi.'
                },
                {
                  id: 'fb_s1_3',
                  sentence: 'What is your ___ school subject? I love English!',
                  options: ['favourite', 'bad', 'heavy', 'cold'],
                  correctWord: 'favourite',
                  hint: '"En sevilen / favori" anlamına gelen sözcük.'
                },
                {
                  id: 'fb_s1_4',
                  sentence: 'The day between Tuesday and Thursday is ___ .',
                  options: ['Wednesday', 'Monday', 'Friday', 'Sunday'],
                  correctWord: 'Wednesday',
                  hint: 'Salı ile Perşembe arasındaki gün (Çarşamba).'
                }
              ],
              quiz: [
                {
                  id: 'q_s1_1',
                  question: '— When is our Turkish lesson?\n— It is ___ Monday morning at 09:00.',
                  options: ['on', 'in', 'at', 'of'],
                  correctAnswerIndex: 0,
                  hint: 'Monday gününden önce hangi edat gelir?',
                  explanation: 'Günlerden önce her zaman "on" edatı kullanılır: "on Monday".'
                },
                {
                  id: 'q_s1_2',
                  question: 'Resim yapmayı, boyaları ve heykelleri çok seven Zeynep\'in en sevdiği ders hangisidir?',
                  options: ['Art', 'Maths', 'Geography', 'Science'],
                  correctAnswerIndex: 0,
                  hint: 'Görsel sanatlar dersi.',
                  explanation: 'Resim ve sanat etkinlikleri "Art" dersindedir.'
                },
                {
                  id: 'q_s1_3',
                  question: 'Hangi seçenekteki gün "HAFTA SONU"na (weekend) aittir?',
                  options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
                  correctAnswerIndex: 0,
                  hint: 'Pazar günü.',
                  explanation: 'Sunday (Pazar) hafta sonu günüdür. Diğerleri hafta içidir.'
                },
                {
                  id: 'q_s1_4',
                  question: '— Do you like Maths?\n— No, I don\'t. Because it is ___ for me.',
                  options: ['difficult', 'great', 'fun', 'easy'],
                  correctAnswerIndex: 0,
                  hint: 'Sevmediği için olumsuz bir neden belirtmeli.',
                  explanation: '"Difficult" (zor) olumsuz nedendir: "Sevmiyorum çünkü benim için zor."'
                }
              ]
            },
            {
              id: 'eng_u2_t3',
              title: 'Classroom Instructions & Asking for Permission (Yönergeler & İzin İsteme)',
              kazanimCode: 'ENG.5.2.W3.3',
              kazanimDesc: 'Öğretmen yönergelerini (Imperatives) anlar; "May I...?", "Can I borrow...?" kalıplarıyla nezaketle izin ister.',
              summary: `
• **Teacher's Instructions (Sınıf İçi Emir ve Yönergeler):**
  - **Open your books:** Kitaplarınızı açın.
  - **Close the door, please:** Kapıyı kapatın lütfen.
  - **Listen carefully:** Dikkatle dinleyin.
  - **Raise your hand:** Parmak kaldırın / Elinizi kaldırın.
  - **Clean the board:** Tahtayı silin.
  - **Sit down / Stand up:** Oturun / Ayağa kalkın.
  - **Be quiet, please:** Lütfen sessiz olun.
• **Asking for Permission (Kibarca İzin İsteme):**
  - **May I come in?:** İçeri girebilir miyim? (Çok kibar)
    - ➔ *Yes, you may. / Please come in.* (Evet, girebilirsin.)
    - ➔ *I am sorry, not right now.* (Üzgünüm, şu an değil.)
  - **May I drink water?:** Su içebilir miyim?
  - **May I go to the restroom / toilet?:** Lavaboya gidebilir miyim?
• **Borrowing Things (Ödünç İsteme):**
  - **Can I borrow your pencil, please?:** Kalemini ödünç alabilir miyim lütfen?
  - ➔ *Sure, here you are.* (Tabii ki, buyur al.)
  - ➔ *Thank you! — You are welcome.* (Teşekkürler! — Rica ederim.)
              `,
              keyConcepts: ['May I come in?', 'Can I borrow...?', 'Here you are', 'Raise your hand', 'Listen carefully', 'Be quiet'],
              pronunciationPhrases: [
                {
                  english: 'May I come in, teacher?',
                  turkish: 'İçeri girebilir miyim öğretmenim?',
                  phonetic: 'mey ay kam in, tiiçır',
                  category: 'Permission'
                },
                {
                  english: 'Yes, of course! Please come in.',
                  turkish: 'Evet tabii ki! Lütfen içeri gel.',
                  phonetic: 'yes, ov koors! pliiz kam in',
                  category: 'Permission'
                },
                {
                  english: 'May I drink some water, please?',
                  turkish: 'Biraz su içebilir miyim lütfen?',
                  phonetic: 'mey ay drink sam vaatır, pliiz',
                  category: 'Permission'
                },
                {
                  english: 'Can I borrow your ruler, please?',
                  turkish: 'Cetvelini ödünç alabilir miyim lütfen?',
                  phonetic: 'ken ay barov yor ruulır, pliiz',
                  category: 'Request'
                },
                {
                  english: 'Sure, here you are!',
                  turkish: 'Tabii ki, buyur al!',
                  phonetic: 'şuur, hiir yu ar',
                  category: 'Response'
                },
                {
                  english: 'Open your books at page forty.',
                  turkish: 'Kitaplarınızı sayfa kırkta açın.',
                  phonetic: 'oopın yor buks et peyc forti',
                  category: 'Instruction'
                },
                {
                  english: 'Raise your hand before speaking.',
                  turkish: 'Konuşmadan önce elinizi kaldırın.',
                  phonetic: 'reyz yor hend bifoor spiiking',
                  category: 'Instruction'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e2_i1',
                  front: 'Sınıfa geç kaldığında kapıyı çalıp içeri girmek için ne dersin?',
                  back: '"May I come in, please?" (İçeri girebilir miyim lütfen?)',
                  tip: '"May I...?" en kibar izin isteme kalıbıdır.',
                  example: 'Excuse me teacher, may I come in?'
                },
                {
                  id: 'fc_e2_i2',
                  front: 'Arkadaşın sana bir eşyasını uzatırken "Buyur al" anlamında ne der?',
                  back: '"Here you are!" (Buyur, al!)',
                  tip: 'Karşılığında "Thank you" demeyi unutma!',
                  example: '— Can I borrow your rubber? — Here you are!'
                },
                {
                  id: 'fc_e2_i3',
                  front: '"Can I borrow your pencil?" cümlesindeki "borrow" ne demektir?',
                  back: '"Ödünç almak" demektir.',
                  tip: 'Geri vermek üzere geçici olarak istemektir.',
                  example: 'You can borrow my book for two days.'
                },
                {
                  id: 'fc_e2_i4',
                  front: '"Clean the board, please" yönergesi ne anlama gelir?',
                  back: '"Lütfen tahtayı sil" demektir.',
                  tip: 'Board = Yazı tahtası, Clean = Temizlemek/silmek.',
                  example: 'Can you clean the board before the lesson?'
                },
                {
                  id: 'fc_e2_i5',
                  front: 'Biri sana "Thank you" dediğinde "Rica ederim" nasıl denir?',
                  back: '"You are welcome!" (Rica ederim!)',
                  tip: 'Nezaket kurallarının en önemli yanıtıdır.',
                  example: '— Thanks for the pen! — You are welcome!'
                },
                {
                  id: 'fc_e2_i6',
                  front: '"Raise your hand" ne demektir?',
                  back: '"Elinizi / parmağınızı kaldırın" demektir.',
                  tip: 'Derste söz almak için kullanılır.',
                  example: 'Raise your hand if you know the answer.'
                }
              ],
              matching: [
                { id: 'm_i1_1', left: 'May I come in?', right: 'İçeri girebilir miyim?' },
                { id: 'm_i1_2', left: 'Here you are', right: 'Buyur al' },
                { id: 'm_i1_3', left: 'Borrow', right: 'Ödünç almak' },
                { id: 'm_i1_4', left: 'You are welcome', right: 'Rica ederim' },
                { id: 'm_i1_5', left: 'Open your books', right: 'Kitaplarınızı açın' }
              ],
              trueFalse: [
                {
                  id: 'tf_i1_1',
                  text: '"May I go out?" sınıftan dışarı çıkmak için izin isteme cümlesidir.',
                  isTrue: true,
                  explanation: 'Doğru! "Go out" dışarı çıkmak demektir.'
                },
                {
                  id: 'tf_i1_2',
                  text: 'Arkadaşımıza bir eşya uzatırken "Here you are" deriz.',
                  isTrue: true,
                  explanation: 'Doğru! Türkçe karşılığı "Buyur / buyrun alın" demektir.'
                },
                {
                  id: 'tf_i1_3',
                  text: '"Sit down" yönergesi ayağa kalkmak anlamına gelir.',
                  isTrue: false,
                  explanation: 'Yanlış! "Sit down" oturmak, "Stand up" ayağa kalkmak demektir.'
                },
                {
                  id: 'tf_i1_4',
                  text: 'Biri "Thank you" dediğinde cevap olarak "Goodbye" denir.',
                  isTrue: false,
                  explanation: 'Yanlış! Teşekkür edildiğinde "You are welcome" (Rica ederim) denir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_i1_1',
                  sentence: '— May I come in? — Yes, of course. Please ___ in.',
                  options: ['come', 'go', 'clean', 'sit'],
                  correctWord: 'come',
                  hint: '"İçeri gel" fiili.'
                },
                {
                  id: 'fb_i1_2',
                  sentence: 'Can I ___ your pencil sharpener, please?',
                  options: ['borrow', 'write', 'draw', 'listen'],
                  correctWord: 'borrow',
                  hint: 'Ödünç almak anlamına gelen fiil.'
                },
                {
                  id: 'fb_i1_3',
                  sentence: '— Thank you for helping me! — You are ___ !',
                  options: ['welcome', 'hello', 'good', 'fine'],
                  correctWord: 'welcome',
                  hint: '"Rica ederim" kalıbının ikinci sözcüğü.'
                },
                {
                  id: 'fb_i1_4',
                  sentence: 'Please ___ your hand before answering the question.',
                  options: ['raise', 'drop', 'look', 'close'],
                  correctWord: 'raise',
                  hint: 'El kaldırmak fiili.'
                }
              ],
              quiz: [
                {
                  id: 'q_i1_1',
                  question: 'Derste su içmek isteyen bir öğrenci öğretmeninden en kibar şekilde nasıl izin ister?',
                  options: [
                    'May I drink water, please?',
                    'Give me some water now!',
                    'I don\'t like water.',
                    'Where is the water?'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'May I... ile izin isteme.',
                  explanation: '"May I drink water, please?" en kibar ve kurallara uygun izin isteme cümlesidir.'
                },
                {
                  id: 'q_i1_2',
                  question: '— Can I borrow your eraser?\n— Sure, ___ !',
                  options: ['here you are', 'you are welcome', 'good morning', 'I am sorry'],
                  correctAnswerIndex: 0,
                  hint: 'Eşyayı uzatırken söylenen söz.',
                  explanation: '"Sure, here you are!" (Tabii ki, buyur al!) doğru yanıttır.'
                },
                {
                  id: 'q_i1_3',
                  question: 'Öğretmen: "Listen to the recording carefully and write the words." Bu yönergeye göre öğrenci ne yapmalıdır?',
                  options: [
                    'Kaydı dikkatle dinleyip kelimeleri yazmalıdır.',
                    'Kitabın kapağını kapatıp uyumalıdır.',
                    'Sınıf tahtasını temizlemelidir.',
                    'Bahçeye çıkıp koşmalıdır.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Listen = Dinlemek, write = yazmak.',
                  explanation: 'Listen carefully = Dikkatle dinle, write = yaz demektir.'
                },
                {
                  id: 'q_i1_4',
                  question: 'Aşağıdaki ifadelerden hangisi bir "İZİN İSTEME" (Permission) cümlesidir?',
                  options: [
                    'May I open the window, please?',
                    'Open the window right now!',
                    'The window is very dirty.',
                    'There are two windows in the room.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'May I... kalıbı.',
                  explanation: '"May I open the window, please?" pencereyi açmak için izin isteme cümlesidir.'
                }
              ]
            }
          ]
        },
        {
          id: 'eng_u3',
          unitNumber: 3,
          title: 'Theme 3: Personal Life (Kişisel Yaşam)',
          description: 'Dış görünüş, boy/kilo, saç/göz renkleri, kişilik özellikleri, duygular ve günlük alışkanlıklar',
          topics: [
            {
              id: 'eng_u3_t1',
              title: 'Physical Appearance & Personality (Dış Görünüş & Kişilik)',
              kazanimCode: 'ENG.5.3.W1.1',
              kazanimDesc: 'Kişilerin boy, saç/göz rengi gibi fiziksel özelliklerini ve dost canlısı, çalışkan vb. kişilik sıfatlarını tanımlar.',
              summary: `
• **Describing Physical Appearance (Fiziksel Özellikler):**
  - **Height & Weight (Boy ve Kilo):**
    - **tall:** uzun boylu | **short:** kısa boylu | **medium height:** orta boylu
    - **slim:** zayıf / ince | **plump:** balık etli / hafif tombul | **well-built:** yapılı
  - **Hair & Eyes (Saç ve Gözler - have got / has got ile):**
    - *She has got long curly brown hair.* (Uzun kıvırcık kahverengi saçları var.)
    - *He has got short straight blonde hair.* (Kısa düz sarı saçları var.)
    - *I have got green eyes.* (Yeşil gözlerim var.)
• **Personality Adjectives (Kişilik Sıfatları):**
  - **friendly:** arkadaş canlısı, cana yakın
  - **hardworking:** çalışkan, gayretli
  - **helpful:** yardımsever, destek olan
  - **funny:** komik, eğlenceli
  - **honest:** dürüst, doğru sözlü
  - **polite:** kibar, nazik
• **Asking Questions:**
  - *What does she look like?* ➔ Dış görünüşü nasıldır? (She is tall and slim.)
  - *What is he like?* ➔ Karakteri nasıldır? (He is hardworking and friendly.)
              `,
              keyConcepts: ['Tall', 'Short', 'Slim', 'Curly hair', 'Friendly', 'Hardworking', 'What does he look like?'],
              pronunciationPhrases: [
                {
                  english: 'What does your best friend look like?',
                  turkish: 'En yakın arkadaşının dış görünüşü nasıldır?',
                  phonetic: 'vat daz yor best frend luk layk',
                  category: 'Question'
                },
                {
                  english: 'She is tall and slim with long brown hair.',
                  turkish: 'O uzun boylu, zayıf ve uzun kahverengi saçlıdır.',
                  phonetic: 'şii iz tool end slim vit long bravn heer',
                  category: 'Appearance'
                },
                {
                  english: 'He has got blue eyes and curly hair.',
                  turkish: 'Onun mavi gözleri ve kıvırcık saçları var.',
                  phonetic: 'hii hez got bluu ayz end körli heer',
                  category: 'Appearance'
                },
                {
                  english: 'What is your teacher like?',
                  turkish: 'Öğretmeninin karakteri / kişiliği nasıldır?',
                  phonetic: 'vat iz yor tiiçır layk',
                  category: 'Question'
                },
                {
                  english: 'He is very polite and hardworking.',
                  turkish: 'O çok kibar ve çalışkandır.',
                  phonetic: 'hii iz veri polayt end hardvörking',
                  category: 'Personality'
                },
                {
                  english: 'Merve is very helpful to her classmates.',
                  turkish: 'Merve sınıf arkadaşlarına karşı çok yardımseverdir.',
                  phonetic: 'merve iz veri helpful tu hör klaas-meyts',
                  category: 'Personality'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e3_a1',
                  front: '"What does she look like?" sorusu neyi öğrenmek için sorulur?',
                  back: 'Kişinin DIŞ GÖRÜNÜŞÜNÜ (boy, kilo, saç, göz) sormak için.',
                  tip: '"Look like" görünüme odaklanır.',
                  example: 'She is of medium height with hazel eyes.'
                },
                {
                  id: 'fc_e3_a2',
                  front: '"What is he like?" sorusu neyi öğrenmek için sorulur?',
                  back: 'Kişinin KARAKTERİNİ / KİŞİLİĞİNİ sormak için.',
                  tip: '"Look" kelimesi yoksa kişilik soruluyordur: He is honest and kind.',
                  example: 'He is very funny and friendly.'
                },
                {
                  id: 'fc_e3_a3',
                  front: '"Curly" ve "Straight" saç modelleri ne demektir?',
                  back: '"Curly" = Kıvırcık saç, "Straight" = Düz saç.',
                  tip: 'Wavy ise dalgalı saç demektir.',
                  example: 'I have curly hair, but my sister has straight hair.'
                },
                {
                  id: 'fc_e3_a4',
                  front: 'Derslerine düzenli çalışan ve ödevlerini aksatmayan birine ne denir?',
                  back: 'Hardworking (Çalışkan)',
                  tip: 'Hard = Sıkı/Çok, Working = Çalışan.',
                  example: 'Mehmet is a hardworking student.'
                },
                {
                  id: 'fc_e3_a5',
                  front: 'İnsanlara yardım etmeyi çok seven birini hangi sıfat tanımlar?',
                  back: 'Helpful (Yardımsever)',
                  tip: 'Help = Yardım, Helpful = Yardımsever.',
                  example: 'Ayşe is very helpful; she carries my books.'
                },
                {
                  id: 'fc_e3_a6',
                  front: '"Polite" kişilik sıfatının Türkçe karşılığı nedir?',
                  back: 'Kibar / Nazik',
                  tip: 'Zıt anlamlısı: Rude (Kaba).',
                  example: 'Always be polite to everyone.'
                }
              ],
              matching: [
                { id: 'm_a1_1', left: 'Curly hair', right: 'Kıvırcık saç' },
                { id: 'm_a1_2', left: 'Slim', right: 'Zayıf / İnce yapılı' },
                { id: 'm_a1_3', left: 'Hardworking', right: 'Çalışkan' },
                { id: 'm_a1_4', left: 'Polite', right: 'Kibar / Nazik' },
                { id: 'm_a1_5', left: 'Helpful', right: 'Yardımsever' }
              ],
              trueFalse: [
                {
                  id: 'tf_a1_1',
                  text: '"What is she like?" sorusuna "She is tall and has blonde hair" şeklinde cevap verilir.',
                  isTrue: false,
                  explanation: 'Yanlış! "What is she like?" karakteri sorar (She is kind/friendly). Dış görünüş için "What does she look like?" sorulur.'
                },
                {
                  id: 'tf_a1_2',
                  text: '"Hardworking" sıfatı çalışkan ve gayretli anlamına gelir.',
                  isTrue: true,
                  explanation: 'Doğru! Düzenli çalışan ve sorumluluk sahibi kişileri tanımlar.'
                },
                {
                  id: 'tf_a1_3',
                  text: '"Short" sıfatı hem kısa boylu hem de kısa saçlı anlamında kullanılabilir.',
                  isTrue: true,
                  explanation: 'Doğru! He is short (kısa boylu), he has got short hair (kısa saçlı).'
                },
                {
                  id: 'tf_a1_4',
                  text: '"Polite" sözcüğünün Türkçe anlamı "kaba ve sabırsız" demektir.',
                  isTrue: false,
                  explanation: 'Yanlış! Polite = Nazik ve kibar demektir. Kaba = Rude.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_a1_1',
                  sentence: 'Gizem always helps her friends. She is very ___ .',
                  options: ['helpful', 'selfish', 'lazy', 'rude'],
                  correctWord: 'helpful',
                  hint: 'Arkadaşlarına her zaman yardım eden kişi.'
                },
                {
                  id: 'fb_a1_2',
                  sentence: 'Barış is 1.85 meters. He is very ___ .',
                  options: ['tall', 'short', 'small', 'low'],
                  correctWord: 'tall',
                  hint: 'Uzun boylu anlamındaki sıfat.'
                },
                {
                  id: 'fb_a1_3',
                  sentence: 'What does your brother ___ like? He has curly brown hair.',
                  options: ['look', 'make', 'do', 'see'],
                  correctWord: 'look',
                  hint: 'Dış görünüş sorma kalıbı ("look like").'
                },
                {
                  id: 'fb_a1_4',
                  sentence: 'Defne makes everyone laugh. She is very ___ .',
                  options: ['funny', 'sad', 'angry', 'quiet'],
                  correctWord: 'funny',
                  hint: 'Herkesi güldüren, eğlenceli ve komik.'
                }
              ],
              quiz: [
                {
                  id: 'q_a1_1',
                  question: '— What is your best friend like?\n— He is ___ . He always shares and smiles.',
                  options: ['friendly and generous', 'tall and slim', 'short and plump', 'green eyed'],
                  correctAnswerIndex: 0,
                  hint: 'Karakter ve kişilik belirten sıfatları seç.',
                  explanation: '"What is he like?" karakter sorar. "Friendly and generous" (cana yakın ve cömert) karakter özelliğidir.'
                },
                {
                  id: 'q_a1_2',
                  question: '"She has got long wavy dark hair and brown eyes." Bu cümlede bahsedilen kişinin hangi özelliği anlatılmaktadır?',
                  options: [
                    'Physical appearance (Dış görünüş)',
                    'School timetable (Ders programı)',
                    'Favourite food (Sevdiği yemek)',
                    'Nationality (Milliyet)'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Saç ve göz rengi.',
                  explanation: 'Saç ve göz tarifleri fiziksel dış görünüş (physical appearance) kapsamındadır.'
                },
                {
                  id: 'q_a1_3',
                  question: 'Sürekli ders çalışan ve ödevlerini vaktinde teslim eden bir öğrenciyi anlatan en uygun sıfat hangisidir?',
                  options: ['Hardworking', 'Lazy', 'Rude', 'Shy'],
                  correctAnswerIndex: 0,
                  hint: 'Çalışkan.',
                  explanation: 'Hardworking = Çalışkan. Lazy = Tembel, Rude = Kaba, Shy = Utangaç.'
                },
                {
                  id: 'q_a1_4',
                  question: 'Aşağıdaki zıt anlamlı sıfat eşleştirmelerinden hangisi DOĞRUDUR?',
                  options: [
                    'Tall ⟷ Short',
                    'Slim ⟷ Friendly',
                    'Polite ⟷ Beautiful',
                    'Curly ⟷ Honest'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Uzun boylu - Kısa boylu.',
                  explanation: 'Tall (Uzun) ile Short (Kısa) birbirinin zıttıdır.'
                }
              ]
            },
            {
              id: 'eng_u3_t2',
              title: 'Feelings, Emotions & Weather (Duygular & Hava Durumu)',
              kazanimCode: 'ENG.5.3.W2.2',
              kazanimDesc: 'Duygusal durumları (Happy, tired, excited) ve hava durumunu (Sunny, rainy, cold) uygun sıfatlarla ifade eder.',
              summary: `
• **Feelings & Emotions (Duygular ve Ruh Halleri):**
  - **happy:** mutlu | **sad:** üzgün | **cheerful:** neşeli
  - **tired:** yorgun | **sleepy:** uykulu | **energetic:** enerjik
  - **excited:** heyecanlı | **surprised:** şaşırmış | **scared:** korkmuş
  - **bored:** sıkılmış | **hungry:** aç | **thirsty:** susamış
• **How do you feel today?:** Bugün nasıl hissediyorsun?
  - *I feel happy and energetic!* (Mutlu ve enerjik hissediyorum!)
  - *I am tired because I played football.* (Yorgunum çünkü futbol oynadım.)
• **Weather Conditions (Hava Durumu):**
  - **sunny:** güneşli | **rainy:** yağmurlu | **cloudy:** bulutlu
  - **windy:** rüzgarlı | **snowy:** karlı | **foggy:** sisli
  - **hot:** sıcak | **warm:** ılık | **cold:** soğuk | **freezing:** dondurucu
• **What is the weather like?:** Hava nasıl?
  - *It is sunny and warm today.* (Bugün hava güneşli ve ılık.)
              `,
              keyConcepts: ['Happy', 'Sad', 'Tired', 'Excited', 'Sunny', 'Rainy', 'Cold', 'How do you feel?'],
              pronunciationPhrases: [
                {
                  english: 'How do you feel today?',
                  turkish: 'Bugün kendini nasıl hissediyorsun?',
                  phonetic: 'hav du yu fiil tu-dey',
                  category: 'Question'
                },
                {
                  english: 'I feel very happy and energetic!',
                  turkish: 'Çok mutlu ve enerjik hissediyorum!',
                  phonetic: 'ay fiil veri hepi end enır-cetik',
                  category: 'Feeling'
                },
                {
                  english: 'I am so tired after school.',
                  turkish: 'Okuldan sonra çok yorgunum.',
                  phonetic: 'ay em so tayırd aftır skuul',
                  category: 'Feeling'
                },
                {
                  english: 'What is the weather like in Ankara?',
                  turkish: 'Ankara\'da hava nasıl?',
                  phonetic: 'vat iz dı vedır layk in ankara',
                  category: 'Weather'
                },
                {
                  english: 'It is rainy and cold today. Take your umbrella!',
                  turkish: 'Bugün yağmurlu ve soğuk. Şemsiyeni al!',
                  phonetic: 'it iz reyni end koold tu-dey, teyk yor ambrela',
                  category: 'Weather'
                },
                {
                  english: 'It is snowy! Let\'s make a snowman!',
                  turkish: 'Hava karlı! Haydi kardan adam yapalım!',
                  phonetic: 'it iz snowi! lets meyk e snow-men',
                  category: 'Weather'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e3_w1',
                  front: '"How do you feel?" sorusuna nasıl cevap verilir?',
                  back: '"I feel happy / tired / excited..." kalıbıyla duygumuzu belirtiriz.',
                  tip: 'Feel = Hissetmek.',
                  example: 'I feel great today!'
                },
                {
                  id: 'fc_e3_w2',
                  front: 'Havanın güneşli ve sıcak olduğunu nasıl söylersin?',
                  back: '"It is sunny and hot."',
                  tip: 'Sunny = Güneşli, Hot = Sıcak.',
                  example: 'Put on your sunglasses; it is sunny.'
                },
                {
                  id: 'fc_e3_w3',
                  front: '"Tired" ve "Thirsty" ne anlama gelir?',
                  back: '"Tired" = Yorgun, "Thirsty" = Susamış.',
                  tip: 'Hungry ise acıkmış demektir.',
                  example: 'I ran two kilometers; I am tired and thirsty.'
                },
                {
                  id: 'fc_e3_w4',
                  front: 'Yağmurlu bir günde dışarı çıkarken yanımıza ne almalıyız?',
                  back: 'An umbrella (Şemsiye) and a raincoat (Yağmurluk).',
                  tip: 'Rainy = Yağmurlu.',
                  example: 'Take your umbrella, it is raining.'
                },
                {
                  id: 'fc_e3_w5',
                  front: '"Excited" duygusu ne zaman hissedilir?',
                  back: 'Çok sevinçli, heyecanlı ve coşkulu bir olay öncesinde.',
                  tip: 'Örn: Doğum günü partisi veya gezi öncesi excited hissederiz.',
                  example: 'We are excited about the school trip.'
                },
                {
                  id: 'fc_e3_w6',
                  front: '"Windy" hava durumunda hangi etkinlik yapılır?',
                  back: 'Kite flying (Uçurtma uçurma).',
                  tip: 'Wind = Rüzgar, Windy = Rüzgarlı.',
                  example: 'It is windy today, let\'s fly our kites!'
                }
              ],
              matching: [
                { id: 'm_w1_1', left: 'Sunny', right: 'Güneşli' },
                { id: 'm_w1_2', left: 'Rainy', right: 'Yağmurlu' },
                { id: 'm_w1_3', left: 'Snowy', right: 'Karlı' },
                { id: 'm_w1_4', left: 'Tired', right: 'Yorgun' },
                { id: 'm_w1_5', left: 'Excited', right: 'Heyecanlı' }
              ],
              trueFalse: [
                {
                  id: 'tf_w1_1',
                  text: 'Hava "snowy" olduğunda dışarıda tişört ve şortla dolaşırız.',
                  isTrue: false,
                  explanation: 'Yanlış! Snowy karlı ve çok soğuk demektir; mont, bere ve eldiven giyilmelidir.'
                },
                {
                  id: 'tf_w1_2',
                  text: '"I am thirsty" diyen bir kişi su içmek istemektedir.',
                  isTrue: true,
                  explanation: 'Doğru! Thirsty susamış demektir.'
                },
                {
                  id: 'tf_w1_3',
                  text: '"What is the weather like?" hava durumunu sormak için kullanılır.',
                  isTrue: true,
                  explanation: 'Doğru! "Hava nasıl?" anlamına gelir.'
                },
                {
                  id: 'tf_w1_4',
                  text: '"Cloudy" gökyüzünün tamamen masmavi ve bulutsuz olduğunu ifade eder.',
                  isTrue: false,
                  explanation: 'Yanlış! Cloudy bulutlu demektir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_w1_1',
                  sentence: 'It is very hot and ___ today. Let\'s go to the beach!',
                  options: ['sunny', 'snowy', 'foggy', 'cold'],
                  correctWord: 'sunny',
                  hint: 'Sıcak günlerde gökyüzünde parlayan hava durumu.'
                },
                {
                  id: 'fb_w1_2',
                  sentence: 'I didn\'t sleep well last night, so I feel ___ today.',
                  options: ['tired', 'happy', 'strong', 'hungry'],
                  correctWord: 'tired',
                  hint: 'Uykusuz kalındığında hissedilen durum (yorgun).'
                },
                {
                  id: 'fb_w1_3',
                  sentence: 'What is the ___ like in London? It is foggy.',
                  options: ['weather', 'food', 'lesson', 'name'],
                  correctWord: 'weather',
                  hint: 'Hava durumu sorusu ("What is the ___ like?").'
                },
                {
                  id: 'fb_w1_4',
                  sentence: 'It is raining outside. Take your ___ with you.',
                  options: ['umbrella', 'sunglasses', 'swimsuit', 'shorts'],
                  correctWord: 'umbrella',
                  hint: 'Yağmurda ıslanmamak için kullanılan eşya.'
                }
              ],
              quiz: [
                {
                  id: 'q_w1_1',
                  question: '— How do you feel before tomorrow\'s football final?\n— I am very ___ ! I can\'t wait to play!',
                  options: ['excited', 'bored', 'sad', 'sleepy'],
                  correctAnswerIndex: 0,
                  hint: 'Sabırsızlıkla bekleyen, coşkulu duygu.',
                  explanation: '"Excited" heyecanlı ve coşkulu anlamına gelir.'
                },
                {
                  id: 'q_w1_2',
                  question: '"It is snowy and freezing outside. Don\'t forget your coat and gloves." Bu hava durumunda dışarısı nasıldır?',
                  options: [
                    'Karlı ve dondurucu soğuk',
                    'Güneşli ve çok sıcak',
                    'Rüzgarlı ve ılık',
                    'Sıcak ve nemli'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Snowy = Karlı, Freezing = Dondurucu soğuk.',
                  explanation: 'Snowy karlı, freezing dondurucu demektir.'
                },
                {
                  id: 'q_w1_3',
                  question: 'Uzun bir koşudan sonra çok susayan Selin ne söylemelidir?',
                  options: [
                    'I am thirsty. Can I have some water?',
                    'I am cold. Can I close the window?',
                    'I am bored. Let\'s play chess.',
                    'I am happy. Let\'s sing.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Susamış olmak.',
                  explanation: '"I am thirsty" susadım demektir.'
                },
                {
                  id: 'q_w1_4',
                  question: 'Aşağıdaki hava durumu - eşya eşleştirmelerinden hangisi UYGUNDUR?',
                  options: [
                    'Rainy ➔ Umbrella',
                    'Snowy ➔ Sunglasses',
                    'Hot ➔ Heavy coat',
                    'Sunny ➔ Winter boots'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Yağmurlu havada şemsiye.',
                  explanation: 'Yağmurlu havada şemsiye (umbrella) taşınır.'
                }
              ]
            },
            {
              id: 'eng_u3_t3',
              title: 'Daily Habits, Routines & Hobbies (Rutinler & Hobiler)',
              kazanimCode: 'ENG.5.3.W3.3',
              kazanimDesc: 'Geniş zaman (Simple Present) ve sıklık zarflarını (Always, usually, sometimes, never) kullanarak rutinlerini anlatır.',
              summary: `
• **Daily Routines (Günlük Yaşam Rutinleri):**
  - **wake up / get up:** uyanmak / yataktan kalkmak
  - **wash face & brush teeth:** yüzünü yıkamak & dişlerini fırçalamak
  - **have breakfast:** kahvaltı yapmak
  - **get dressed:** giyinmek
  - **go to school:** okula gitmek
  - **have lunch:** öğle yemeği yemek
  - **come back home:** eve dönmek
  - **do homework:** ödev yapmak
  - **go to bed / sleep:** uyumaya gitmek
• **Adverbs of Frequency (Sıklık Zarfları):**
  - **always (%100):** her zaman, daima
  - **usually (%80):** genellikle
  - **often (%60):** sık sık
  - **sometimes (%40):** bazen, ara sıra
  - **never (%0):** asla, hiçbir zaman
• **Grammar Rule (Kural):** Sıklık zarfları ana fiilden ÖNCE gelir:
  - *I **always** brush my teeth before bed.* (Yatmadan önce daima dişlerimi fırçalarım.)
  - *He **usually** plays football after school.* (Okuldan sonra genellikle futbol oynar.)
              `,
              keyConcepts: ['Wake up', 'Brush teeth', 'Have breakfast', 'Do homework', 'Always', 'Usually', 'Sometimes', 'Never'],
              pronunciationPhrases: [
                {
                  english: 'I always wake up at seven o\'clock in the morning.',
                  turkish: 'Sabahları her zaman saat yedide uyanırım.',
                  phonetic: 'ay olveys veyk ap et sevın o-klok in dı morning',
                  category: 'Routine'
                },
                {
                  english: 'I brush my teeth twice a day.',
                  turkish: 'Günde iki kez dişlerimi fırçalarım.',
                  phonetic: 'ay braş may tiit tvays e dey',
                  category: 'Routine'
                },
                {
                  english: 'We usually have lunch at the school canteen.',
                  turkish: 'Öğle yemeğini genellikle okul kantininde yeriz.',
                  phonetic: 'vii yujuli hev lanç et dı skuul kentiiyn',
                  category: 'Routine'
                },
                {
                  english: 'I sometimes ride my bicycle at the weekend.',
                  turkish: 'Hafta sonları bazen bisikletime binerim.',
                  phonetic: 'ay samtaymz rayd may baysıkıl et dı viikend',
                  category: 'Hobby'
                },
                {
                  english: 'He never skips his homework.',
                  turkish: 'O ödevlerini asla aksatmaz.',
                  phonetic: 'hii nevır skips hiz hoomvörk',
                  category: 'Habit'
                },
                {
                  english: 'What do you do in your free time?',
                  turkish: 'Boş zamanlarında ne yaparsın?',
                  phonetic: 'vat du yu du in yor frii taym',
                  category: 'Question'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e3_r1',
                  front: 'Sıklık zarflarının kullanım sırası (çoktan aza) nasıldır?',
                  back: 'Always (%100) ➔ Usually (%80) ➔ Often (%60) ➔ Sometimes (%40) ➔ Never (%0).',
                  tip: 'Always her zaman, Never asla demektir.',
                  example: 'I always do my homework; I never forget it.'
                },
                {
                  id: 'fc_e3_r2',
                  front: 'Sıklık zarfları cümlede nereye yerleştirilir?',
                  back: 'Özne ile ana fiilin arasına gelir (Örn: I ALWAYS brush my teeth).',
                  tip: '"be" fiilinden (am/is/are) sonra gelir: He is always happy.',
                  example: 'She usually reads books before sleeping.'
                },
                {
                  id: 'fc_e3_r3',
                  front: '"Wake up" ile "Get up" arasındaki ince fark nedir?',
                  back: '"Wake up" uyanmak/gözlerini açmaktır; "Get up" yataktan fiziksel olarak kalkmaktır.',
                  tip: 'İkisi de sabah rutini için kullanılır.',
                  example: 'I wake up at 07:00 and get up at 07:15.'
                },
                {
                  id: 'fc_e3_r4',
                  front: '"Do homework" ifadesi ne demektir?',
                  back: '"Ödev yapmak" demektir.',
                  tip: 'Make homework denmez, DO homework denir!',
                  example: 'I do my homework in the afternoon.'
                },
                {
                  id: 'fc_e3_r5',
                  front: '"What do you do in your free time?" sorusu ne anlama gelir?',
                  back: '"Boş zamanlarında ne yaparsın?" demektir (Hobiler sorulur).',
                  tip: 'Cevap: I draw pictures, I play chess, I read books...',
                  example: 'In my free time, I play basketball.'
                },
                {
                  id: 'fc_e3_r6',
                  front: '"Never" kelimesi cümlenin anlamını nasıl etkiler?',
                  back: 'Cümleye olumsuzluk anlamı katar ("Hiçbir zaman / Asla").',
                  tip: 'Cümlede not kullanılmaz, never tek başına olumsuzluk yapar.',
                  example: 'I never drink fizzy drinks.'
                }
              ],
              matching: [
                { id: 'm_r2_1', left: 'Always', right: 'Her zaman / Daima (%100)' },
                { id: 'm_r2_2', left: 'Sometimes', right: 'Bazen / Ara sıra (%40)' },
                { id: 'm_r2_3', left: 'Never', right: 'Asla / Hiçbir zaman (%0)' },
                { id: 'm_r2_4', left: 'Brush teeth', right: 'Diş fırçalamak' },
                { id: 'm_r2_5', left: 'Have breakfast', right: 'Kahvaltı yapmak' }
              ],
              trueFalse: [
                {
                  id: 'tf_r2_1',
                  text: '"Never" sıklık zarfı "her zaman ve kesinlikle" anlamına gelir.',
                  isTrue: false,
                  explanation: 'Yanlış! Never = Asla, hiçbir zaman demektir. Her zaman anlamına gelen Always\'dir.'
                },
                {
                  id: 'tf_r2_2',
                  text: 'Sabahları güne enerjik başlamak için "have breakfast" (kahvaltı yapmak) sağlıklı bir rutindir.',
                  isTrue: true,
                  explanation: 'Doğru! Kahvaltı temel bir sabah rutinidir.'
                },
                {
                  id: 'tf_r2_3',
                  text: '"I play always football" cümlesinde sıklık zarfının yeri DOĞRUDUR.',
                  isTrue: false,
                  explanation: 'Yanlış! Sıklık zarfı fiilden önce gelmelidir: "I always play football" olmalıdır.'
                },
                {
                  id: 'tf_r2_4',
                  text: '"Get dressed" giysilerini giyinmek demektir.',
                  isTrue: true,
                  explanation: 'Doğru! Sabah hazırlanırken yapılan giyinme eylemidir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_r2_1',
                  sentence: 'I ___ wash my hands before eating meals. (Her zaman)',
                  options: ['always', 'never', 'sometimes', 'rarely'],
                  correctWord: 'always',
                  hint: '%100 sıklık bildiren zarf.'
                },
                {
                  id: 'fb_r2_2',
                  sentence: 'Kerem ___ his homework every day after school.',
                  options: ['does', 'makes', 'drinks', 'sleeps'],
                  correctWord: 'does',
                  hint: 'Homework ile kullanılan doğru fiil ("do/does homework").'
                },
                {
                  id: 'fb_r2_3',
                  sentence: 'I go to bed early because I ___ up at 06:30.',
                  options: ['get', 'put', 'wear', 'read'],
                  correctWord: 'get',
                  hint: '"___ up" yataktan kalkmak fiili.'
                },
                {
                  id: 'fb_r2_4',
                  sentence: 'Vegetarians ___ eat meat. (Asla yemezler)',
                  options: ['never', 'always', 'usually', 'often'],
                  correctWord: 'never',
                  hint: '%0 sıklık bildiren (asla) sözcüğü.'
                }
              ],
              quiz: [
                {
                  id: 'q_r2_1',
                  question: 'Selin düzenli bir öğrencidir. Her gün yatmadan önce mutlaka dişlerini fırçalar. Selin\'i anlatan doğru cümle hangisidir?',
                  options: [
                    'Selin always brushes her teeth before going to bed.',
                    'Selin never brushes her teeth.',
                    'Selin sometimes brushes her teeth.',
                    'Selin doesn\'t like brushing teeth.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Her zaman = Always.',
                  explanation: 'Her gün aksatmadan yaptığı için "always" kullanılmalıdır.'
                },
                {
                  id: 'q_r2_2',
                  question: 'Aşağıdaki sıklık zarflarından hangisi EN YÜKSEK sıklığı ifade eder?',
                  options: ['Always (%100)', 'Usually (%80)', 'Sometimes (%40)', 'Never (%0)'],
                  correctAnswerIndex: 0,
                  hint: 'Daima / her zaman.',
                  explanation: 'Always daima (%100) en yüksek sıklıktır.'
                },
                {
                  id: 'q_r2_3',
                  question: '— What do you do after school?\n— I come home, have a snack and ___ my homework.',
                  options: ['do', 'make', 'draw', 'play'],
                  correctAnswerIndex: 0,
                  hint: 'Ödev yapmak kalıbı.',
                  explanation: '"Do homework" ödev yapmak demektir.'
                },
                {
                  id: 'q_r2_4',
                  question: 'Bir kişinin sabah sırasıyla yaptığı rutinlerin DOĞRU sıralaması hangisidir?',
                  options: [
                    'Wake up ➔ Wash face ➔ Have breakfast ➔ Go to school',
                    'Go to school ➔ Wake up ➔ Sleep ➔ Have breakfast',
                    'Have breakfast ➔ Sleep ➔ Go to school ➔ Wake up',
                    'Wash face ➔ Go to school ➔ Wake up ➔ Get dressed'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Mantıksal sabah akışı.',
                  explanation: 'Önce uyanılır (wake up), yüz yıkanır (wash face), kahvaltı yapılır (have breakfast) ve okula gidilir (go to school).'
                }
              ]
            }
          ]
        },
        {
          id: 'eng_u4',
          unitNumber: 4,
          title: 'Theme 4: Family Life (Aile Yaşamı)',
          description: 'Aile üyeleri, akrabalar, evin odaları, ev eşyaları ve günlük ev sorumlulukları',
          topics: [
            {
              id: 'eng_u4_t1',
              title: 'Family Members & Have/Has Got (Aile Bireyleri & Sahiplik)',
              kazanimCode: 'ENG.5.4.W1.1',
              kazanimDesc: 'Aile üyelerini tanıtır ve "have got / has got" kalıbıyla akrabalık bağlarını ve sahip olunan şeyleri belirtir.',
              summary: `
• **Family Members & Relatives (Aile Bireyleri ve Akrabalar):**
  - **parents:** anne-baba | **mother / mum:** anne | **father / dad:** baba
  - **brother:** erkek kardeş | **sister:** kız kardeş
  - **grandparents:** büyükanne ve büyükbaba
  - **grandmother / grandma:** büyükanne / nine
  - **grandfather / grandpa:** büyükbaba / dede
  - **uncle:** amca / dayı / enişte
  - **aunt:** teyze / hala / yenge
  - **cousin:** kuzen (kız veya erkek)
• **Have Got / Has Got (Sahip olmak):**
  - **I / You / We / They ➔ HAVE GOT:**
    - *I have got two brothers and one sister.* (İki erkek, bir kız kardeşim var.)
    - *We have got a big friendly family.* (Büyük ve samimi bir ailemiz var.)
  - **He / She / It ➔ HAS GOT:**
    - *She has got a cousin in İzmir.* (İzmir'de bir kuzeni var.)
    - *He has got a cute pet dog.* (Sevimli bir evcil köpeği var.)
• **Negative & Question:**
  - *I haven't got a brother.* (Erkek kardeşim yok.)
  - *Have you got any sisters?* (Hiç kız kardeşin var mı?)
              `,
              keyConcepts: ['Parents', 'Brother', 'Sister', 'Uncle', 'Aunt', 'Cousin', 'Have got', 'Has got'],
              pronunciationPhrases: [
                {
                  english: 'This is my family.',
                  turkish: 'Bu benim ailem.',
                  phonetic: 'dis iz may femıli',
                  category: 'Family'
                },
                {
                  english: 'I have got a younger brother and an older sister.',
                  turkish: 'Bir küçük erkek kardeşim ve bir ablam var.',
                  phonetic: 'ay hev got e yangır bradır end en ooldır sistır',
                  category: 'Possession'
                },
                {
                  english: 'My uncle and aunt live in Antalya.',
                  turkish: 'Amcam ve teyzem Antalya\'da yaşıyor.',
                  phonetic: 'may ankıl end aant liv in antalya',
                  category: 'Relatives'
                },
                {
                  english: 'She has got five cousins.',
                  turkish: 'Onun beş kuzeni var.',
                  phonetic: 'şii hez got fayv kazınz',
                  category: 'Relatives'
                },
                {
                  english: 'Have you got any pets at home?',
                  turkish: 'Evde hiç evcil hayvanınız var mı?',
                  phonetic: 'hev yu got eni pets et hoom',
                  category: 'Question'
                },
                {
                  english: 'Yes, we have got a lovely cat named Pamuk.',
                  turkish: 'Evet, Pamuk adında sevimli bir kedimiz var.',
                  phonetic: 'yes, vii hev got e lavli ket neymd pamuk',
                  category: 'Answer'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e4_f1',
                  front: '"Parents" kelimesi kimleri kapsar?',
                  back: 'Anne ve baba (Mother and Father).',
                  tip: 'Grandparents ise büyükanne ve büyükbabadır.',
                  example: 'My parents are both teachers.'
                },
                {
                  id: 'fc_e4_f2',
                  front: '"He / She" özneleriyle "sahip olmak" derken ne kullanılır?',
                  back: '"has got" kullanılır (Örn: She has got a brother).',
                  tip: 'I, you, we, they ile "have got" kullanılır.',
                  example: 'He has got two aunts.'
                },
                {
                  id: 'fc_e4_f3',
                  front: 'Babanın veya annenin erkek kardeşine ne denir?',
                  back: 'Uncle (Amca veya Dayı)',
                  tip: 'Kız kardeşine ise Aunt (Hala/Teyze) denir.',
                  example: 'My uncle plays guitar very well.'
                },
                {
                  id: 'fc_e4_f4',
                  front: 'Teyzenin, amcanın veya dayının çocuklarına ne denir?',
                  back: 'Cousin (Kuzen)',
                  tip: 'Hem kız hem erkek için "cousin" sözcüğü kullanılır.',
                  example: 'I play video games with my cousin.'
                },
                {
                  id: 'fc_e4_f5',
                  front: '"Have you got a pet?" sorusu ne anlama gelir?',
                  back: '"Evcil hayvanın var mı?" demektir.',
                  tip: 'Pet = Kedi, köpek, kuş gibi evde beslenen hayvan.',
                  example: 'Yes, I have got a parrot.'
                },
                {
                  id: 'fc_e4_f6',
                  front: '"I haven\'t got a sister." cümlesi ne bildirir?',
                  back: '"Kız kardeşim yok" şeklinde olumsuz sahiplik bildirir.',
                  tip: 'Have got olumsuzda "haven\'t got" olur.',
                  example: 'I haven\'t got any brothers or sisters; I am an only child.'
                }
              ],
              matching: [
                { id: 'm_f1_1', left: 'Parents', right: 'Anne ve baba' },
                { id: 'm_f1_2', left: 'Uncle', right: 'Amca / Dayı' },
                { id: 'm_f1_3', left: 'Aunt', right: 'Teyze / Hala' },
                { id: 'm_f1_4', left: 'Cousin', right: 'Kuzen' },
                { id: 'm_f1_5', left: 'Has got', right: 'Sahiptir (He/She)' }
              ],
              trueFalse: [
                {
                  id: 'tf_f1_1',
                  text: '"She have got three sisters" cümlesi gramer açısından DOĞRUDUR.',
                  isTrue: false,
                  explanation: 'Yanlış! "She" öznesiyle "has got" kullanılmalıdır: "She has got three sisters."'
                },
                {
                  id: 'tf_f1_2',
                  text: '"Uncle" kelimesi hem amca hem de dayı anlamına gelir.',
                  isTrue: true,
                  explanation: 'Doğru! İngilizcede baba ve anne tarafındaki erkek kardeşler için ortak olarak uncle denir.'
                },
                {
                  id: 'tf_f1_3',
                  text: '"Grandparents" sadece anne ve babayı ifade eder.',
                  isTrue: false,
                  explanation: 'Yanlış! Grandparents dede ve nineyi (büyükanne ve büyükbaba) ifade eder.'
                },
                {
                  id: 'tf_f1_4',
                  text: '"I have got a pet dog" evde bir köpek sahibi olunduğunu belirtir.',
                  isTrue: true,
                  explanation: 'Doğru! Have got sahip olmak demektir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_f1_1',
                  sentence: 'My father\'s brother is my ___ .',
                  options: ['uncle', 'aunt', 'sister', 'grandmother'],
                  correctWord: 'uncle',
                  hint: 'Babanın erkek kardeşi (amca).'
                },
                {
                  id: 'fb_f1_2',
                  sentence: 'Emre ___ got two cousins in İzmir.',
                  options: ['has', 'have', 'is', 'are'],
                  correctWord: 'has',
                  hint: 'Emre (he) öznesiyle kullanılan sahiplik fiili.'
                },
                {
                  id: 'fb_f1_3',
                  sentence: 'My mother and my father are my ___ .',
                  options: ['parents', 'cousins', 'uncles', 'friends'],
                  correctWord: 'parents',
                  hint: 'Anne ve babayı birlikte tanımlayan sözcük ebeveyn.'
                },
                {
                  id: 'fb_f1_4',
                  sentence: '— ___ you got a sister? — Yes, I have.',
                  options: ['Have', 'Has', 'Are', 'Is'],
                  correctWord: 'Have',
                  hint: '"You" öznesi ile soru sorarken başa gelen yardımcı fiil.'
                }
              ],
              quiz: [
                {
                  id: 'q_f1_1',
                  question: '— Have you got any brothers or sisters?\n— No, I haven\'t. I am an ___ child.',
                  options: ['only', 'one', 'alone', 'first'],
                  correctAnswerIndex: 0,
                  hint: 'Tek çocuk (kardeşi olmayan).',
                  explanation: '"An only child" tek çocuk anlamına gelen kalıptır.'
                },
                {
                  id: 'q_f1_2',
                  question: 'Fatma\'nın annesinin kız kardeşi Fatma\'nın nesidir?',
                  options: ['Aunt (Teyze)', 'Uncle (Dayı)', 'Cousin (Kuzen)', 'Grandmother (Büyükanne)'],
                  correctAnswerIndex: 0,
                  hint: 'Annenin kız kardeşi teyzedir.',
                  explanation: 'Annenin veya babanın kız kardeşine "Aunt" denir.'
                },
                {
                  id: 'q_f1_3',
                  question: '"He ___ got a cute rabbit, but he ___ got a bird." Cümlesini tamamlayan doğru ikili hangisidir?',
                  options: ['has / hasn\'t', 'have / haven\'t', 'is / isn\'t', 'has / haven\'t'],
                  correctAnswerIndex: 0,
                  hint: '"He" öznesi ile has / hasn\'t.',
                  explanation: '"He" öznesiyle olumlu "has got", olumsuz "hasn\'t got" kullanılır.'
                },
                {
                  id: 'q_f1_4',
                  question: 'Aşağıdakilerden hangisi bir aile bireyi DEĞİLDİR?',
                  options: ['Whiteboard', 'Grandfather', 'Cousin', 'Brother'],
                  correctAnswerIndex: 0,
                  hint: 'Sınıf eşyası.',
                  explanation: 'Whiteboard (yazı tahtası) sınıf eşyasıdır, aile bireyi değildir.'
                }
              ]
            },
            {
              id: 'eng_u4_t2',
              title: 'Rooms of the House & Prepositions (Evin Odaları & Yer Edatları)',
              kazanimCode: 'ENG.5.4.W2.2',
              kazanimDesc: 'Evin bölümlerini (Living room, bedroom, kitchen, bathroom) ve eşyaların yerlerini (in, on, under, next to, behind) söyler.',
              summary: `
• **Rooms in the House (Evin Odaları ve Bölümleri):**
  - **Living room (Oturma Odası):** We sit on the sofa and watch TV.
  - **Kitchen (Mutfak):** We cook meals and eat at the table.
  - **Bedroom (Yatak Odası):** We sleep in our beds and keep clothes in the wardrobe.
  - **Bathroom (Banyo):** We take a shower and wash our hands.
  - **Garden / Balcony (Bahçe / Balkon):** We water flowers and get fresh air.
• **Prepositions of Place (Yer Edatları):**
  - **in:** içinde (The cat is in the box.)
  - **on:** üzerinde (The book is on the table.)
  - **under:** altında (The ball is under the bed.)
  - **next to:** bitişiğinde / yanında (The lamp is next to the sofa.)
  - **behind:** arkasında (The bag is behind the door.)
  - **in front of:** önünde (The car is in front of the house.)
  - **between:** arasında (The table is between two armchairs.)
• **Where is ...? (Nerede?):**
  - *Where is your father?* ➔ *He is in the kitchen.*
  - *Where are the keys?* ➔ *They are on the coffee table.*
              `,
              keyConcepts: ['Living room', 'Kitchen', 'Bedroom', 'Bathroom', 'In', 'On', 'Under', 'Behind', 'In front of'],
              pronunciationPhrases: [
                {
                  english: 'Where is your mother? She is in the kitchen.',
                  turkish: 'Annen nerede? O mutfakta.',
                  phonetic: 'ver iz yor madır, şii iz in dı kiçın',
                  category: 'Location'
                },
                {
                  english: 'The cat is sleeping under the bed.',
                  turkish: 'Kedi yatağın altında uyuyor.',
                  phonetic: 'dı ket iz sliiping andır dı bed',
                  category: 'Preposition'
                },
                {
                  english: 'There is a big comfortable sofa in the living room.',
                  turkish: 'Oturma odasında büyük, rahat bir koltuk var.',
                  phonetic: 'der iz e big kamfırtıbıl sofa in dı living ruum',
                  category: 'Furniture'
                },
                {
                  english: 'The books are on the bookshelf.',
                  turkish: 'Kitaplar kitaplığın üzerindedir.',
                  phonetic: 'dı buks ar on dı buk-şelf',
                  category: 'Preposition'
                },
                {
                  english: 'My school bag is behind the door.',
                  turkish: 'Okul çantam kapının arkasında.',
                  phonetic: 'may skuul bäg iz bihaynd dı door',
                  category: 'Preposition'
                },
                {
                  english: 'We have dinner together in the dining area.',
                  turkish: 'Akşam yemeğini yemek alanında birlikte yeriz.',
                  phonetic: 'vii hev dinır tugedır in dı dayning eriya',
                  category: 'Family'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e4_r1',
                  front: 'Yemek pişirilen ve buzdolabının bulunduğu oda neresidir?',
                  back: 'Kitchen (Mutfak)',
                  tip: 'Cook in the kitchen.',
                  example: 'My mother is making a cake in the kitchen.'
                },
                {
                  id: 'fc_e4_r2',
                  front: '"Under" edatı ne anlama gelir?',
                  back: '"Altında" demektir.',
                  tip: 'Örn: The shoes are under the bed.',
                  example: 'The dog is sleeping under the table.'
                },
                {
                  id: 'fc_e4_r3',
                  front: '"Behind" ile "In front of" arasındaki fark nedir?',
                  back: '"Behind" = Arkasında, "In front of" = Önünde demektir.',
                  tip: 'İkisi birbirinin tam zıt yönüdür.',
                  example: 'The garden is behind the house.'
                },
                {
                  id: 'fc_e4_r4',
                  front: 'Uyumak için çekildiğimiz oda hangisidir?',
                  back: 'Bedroom (Yatak Odası)',
                  tip: 'Bed = Yatak, Room = Oda.',
                  example: 'I have a desk in my bedroom.'
                },
                {
                  id: 'fc_e4_r5',
                  front: 'Televizyon izlediğimiz ve ailecek oturduğumuz oda hangisidir?',
                  back: 'Living room (Oturma Odası / Salon)',
                  tip: 'Living = Yaşam.',
                  example: 'We watch movies in the living room.'
                },
                {
                  id: 'fc_e4_r6',
                  front: '"On the table" ifadesi ne demektir?',
                  back: '"Masanın üzerinde" demektir.',
                  tip: 'Yüzeyle temas eden üst durumlar için "on" kullanılır.',
                  example: 'There are fresh apples on the table.'
                }
              ],
              matching: [
                { id: 'm_ro_1', left: 'Kitchen', right: 'Mutfak' },
                { id: 'm_ro_2', left: 'Bedroom', right: 'Yatak Odası' },
                { id: 'm_ro_3', left: 'Living room', right: 'Oturma Odası' },
                { id: 'm_ro_4', left: 'Under', right: 'Altında' },
                { id: 'm_ro_5', left: 'Behind', right: 'Arkasında' }
              ],
              trueFalse: [
                {
                  id: 'tf_ro_1',
                  text: 'Yemek hazırlamak ve bulaşık yıkamak için "bedroom"a gidilir.',
                  isTrue: false,
                  explanation: 'Yanlış! Yemek hazırlama yeri "Kitchen" (mutfak) dır.'
                },
                {
                  id: 'tf_ro_2',
                  text: '"The ball is under the bed" cümlesi topun yatağın altında olduğunu belirtir.',
                  isTrue: true,
                  explanation: 'Doğru! Under = Altında demektir.'
                },
                {
                  id: 'tf_ro_3',
                  text: '"Behind" edatı bir nesnenin önünde olduğunu ifade eder.',
                  isTrue: false,
                  explanation: 'Yanlış! Behind arkasında demektir. Önünde için "in front of" kullanılır.'
                },
                {
                  id: 'tf_ro_4',
                  text: 'Banyoda ellerimizi yıkayıp dişlerimizi fırçalarız ("bathroom").',
                  isTrue: true,
                  explanation: 'Doğru! Bathroom banyo demektir.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_ro_1',
                  sentence: 'Dad is cooking pasta in the ___ .',
                  options: ['kitchen', 'bathroom', 'garage', 'balcony'],
                  correctWord: 'kitchen',
                  hint: 'Yemek pişirilen oda.'
                },
                {
                  id: 'fb_ro_2',
                  sentence: 'The remote control is ___ the coffee table.',
                  options: ['on', 'between', 'underneath', 'into'],
                  correctWord: 'on',
                  hint: 'Masanın üzerinde.'
                },
                {
                  id: 'fb_ro_3',
                  sentence: 'Where is the cat? It is hiding ___ the door.',
                  options: ['behind', 'in', 'on', 'at'],
                  correctWord: 'behind',
                  hint: 'Kapının arkasında.'
                },
                {
                  id: 'fb_ro_4',
                  sentence: 'I sleep and do my homework in my ___ .',
                  options: ['bedroom', 'kitchen', 'hall', 'garden'],
                  correctWord: 'bedroom',
                  hint: 'Yatağın ve çalışma masasının olduğu kişisel oda.'
                }
              ],
              quiz: [
                {
                  id: 'q_ro_1',
                  question: '— Where are my keys?\n— Look, they are ___ the sofa, on the floor!',
                  options: ['under', 'in', 'above', 'at'],
                  correctAnswerIndex: 0,
                  hint: 'Koltuk ile zemin arasında (altında).',
                  explanation: '"Under" altında demektir: Koltuğun altında.'
                },
                {
                  id: 'q_ro_2',
                  question: '"The TV is between the bookcase and the window." Cümlesine göre televizyon nerededir?',
                  options: [
                    'Kitaplık ile pencerenin arasındadır.',
                    'Pencerenin arkasındadır.',
                    'Kitaplığın üzerindedir.',
                    'Yatağın altındadır.'
                  ],
                  correctAnswerIndex: 0,
                  hint: '"between ... and ..." iki nesnenin arasıdır.',
                  explanation: 'Between = Arasında demektir.'
                },
                {
                  id: 'q_ro_3',
                  question: 'Ailecek toplanıp sohbet ettiğimiz ve televizyon izlediğimiz oda hangisidir?',
                  options: ['Living room', 'Bathroom', 'Attic', 'Cellar'],
                  correctAnswerIndex: 0,
                  hint: 'Oturma odası.',
                  explanation: 'Living room oturma odasıdır.'
                },
                {
                  id: 'q_ro_4',
                  question: 'Resimde kedi kutunun İÇİNDE oturuyorsa bunu anlatan cümle hangisidir?',
                  options: [
                    'The cat is in the box.',
                    'The cat is on the box.',
                    'The cat is under the box.',
                    'The cat is behind the box.'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'İçinde edatı.',
                  explanation: '"In" içinde anlamına gelir.'
                }
              ]
            },
            {
              id: 'eng_u4_t3',
              title: 'Household Chores & Daily Life (Ev İşleri & Birlikte Yaşam)',
              kazanimCode: 'ENG.5.4.W3.3',
              kazanimDesc: 'Evde aileye yardım etme ve günlük ev işlerini (Make the bed, set the table, feed the pet) ifade eder.',
              summary: `
• **Helping at Home & Household Chores (Ev İçi Sorumluluklar):**
  - **make the bed:** yatağı toplamak / düzeltmek
  - **tidy up the room:** odayı toplamak / düzenlemek
  - **set the table:** masayı kurmak / sofrayı hazırlamak
  - **clear the table:** masayı / sofrayı toplamak
  - **feed the pet:** evcil hayvanı beslemek
  - **water the plants / flowers:** çiçekleri sulamak
  - **take out the rubbish / trash:** çöpü dışarı çıkarmak
  - **walk the dog:** köpeği gezdirmek / yürüyüşe çıkarmak
• **Expressing Responsibility (Sorumluluk Bildirme):**
  - *I always make my bed in the morning.* (Sabahları daima yatağımı toplarım.)
  - *Can you help me set the table, please?* (Lütfen masayı kurmama yardım eder misin?)
  - *It is my duty to feed the cat.* (Kediyi beslemek benim görevimdir.)
• **Sharing Duties (Görev Paylaşımı):**
  - Helping parents makes family life happy and peaceful!
              `,
              keyConcepts: ['Make the bed', 'Tidy up', 'Set the table', 'Feed the pet', 'Water the plants', 'Take out the rubbish'],
              pronunciationPhrases: [
                {
                  english: 'I always make my bed before going to school.',
                  turkish: 'Okula gitmeden önce daima yatağımı toplarım.',
                  phonetic: 'ay olveys meyk may bed bifoor go-ing tu skuul',
                  category: 'Chore'
                },
                {
                  english: 'Can you please help me set the table for dinner?',
                  turkish: 'Akşam yemeği için masayı hazırlamama yardım eder misin?',
                  phonetic: 'ken yu pliiz help mi set dı teybıl for dinır',
                  category: 'Request'
                },
                {
                  english: 'Don\'t forget to water the flowers on the balcony.',
                  turkish: 'Balkondaki çiçekleri sulamayı unutma.',
                  phonetic: 'doont forget tu vaatır dı flavırz on dı balkoni',
                  category: 'Chore'
                },
                {
                  english: 'I feed our pet cat every morning.',
                  turkish: 'Evcil kedimizi her sabah ben beslerim.',
                  phonetic: 'ay fiid avır pet ket evri morning',
                  category: 'Duty'
                },
                {
                  english: 'We tidy up our room every Saturday.',
                  turkish: 'Her cumartesi odamızı derleyip toplarız.',
                  phonetic: 'vii taydi ap avır ruum evri setırdey',
                  category: 'Chore'
                },
                {
                  english: 'Thank you for taking out the rubbish!',
                  turkish: 'Çöpü dışarı çıkardığın için teşekkürler!',
                  phonetic: 'tenk yu for teyking avt dı rabiş',
                  category: 'Gratitude'
                }
              ],
              flashcards: [
                {
                  id: 'fc_e4_c1',
                  front: 'Sabah uyandıktan sonra yatağımızı düzeltmeye ne denir?',
                  back: 'Make the bed (Yatağı toplamak)',
                  tip: 'Make = yapmak/hazırlamak, Bed = yatak.',
                  example: 'I make my bed every morning.'
                },
                {
                  id: 'fc_e4_c2',
                  front: 'Yemekten önce tabak, çatal ve bardakları masaya dizmeye ne denir?',
                  back: 'Set the table (Masayı kurmak / hazırlamak)',
                  tip: 'Yemek bittikten sonra toplamak ise "clear the table"dır.',
                  example: 'Can you help me set the table?'
                },
                {
                  id: 'fc_e4_c3',
                  front: 'Evcil hayvanımıza mama ve su verme görevine ne denir?',
                  back: 'Feed the pet (Evcil hayvanı beslemek)',
                  tip: 'Feed = Beslemek, yemek vermek.',
                  example: 'I feed the dog twice a day.'
                },
                {
                  id: 'fc_e4_c4',
                  front: 'Dağınık olan odayı düzenli hale getirmeye ne denir?',
                  back: 'Tidy up the room (Odayı toplamak)',
                  tip: 'Tidy = Düzenli, derli toplu.',
                  example: 'Please tidy up your room before playing.'
                },
                {
                  id: 'fc_e4_c5',
                  front: '"Water the plants" ne anlama gelir?',
                  back: '"Bitkileri / çiçekleri sulamak" demektir.',
                  tip: 'Water hem "su" hem de "sulamak" fiili olarak kullanılır.',
                  example: 'We water the plants in the garden.'
                },
                {
                  id: 'fc_e4_c6',
                  front: 'Dolu çöp torbasını dışarıdaki konteynere götürmeye ne denir?',
                  back: 'Take out the rubbish / trash (Çöpü dışarı çıkarmak)',
                  tip: 'Rubbish (İngiliz), Trash (Amerikan) = Çöp.',
                  example: 'Dad takes out the rubbish every evening.'
                }
              ],
              matching: [
                { id: 'm_c1_1', left: 'Make the bed', right: 'Yatağı toplamak' },
                { id: 'm_c1_2', left: 'Set the table', right: 'Masayı hazırlamak' },
                { id: 'm_c1_3', left: 'Feed the pet', right: 'Evcil hayvanı beslemek' },
                { id: 'm_c1_4', left: 'Tidy up', right: 'Odayı toplamak' },
                { id: 'm_c1_5', left: 'Water flowers', right: 'Çiçekleri sulamak' }
              ],
              trueFalse: [
                {
                  id: 'tf_c1_1',
                  text: '"Set the table" masadaki yemekleri çöpe atmak anlamına gelir.',
                  isTrue: false,
                  explanation: 'Yanlış! Set the table masayı yemek için kurmak, servis açmak demektir.'
                },
                {
                  id: 'tf_c1_2',
                  text: 'Evcil köpeğe mama vermek "Feed the dog" ifadesiyle anlatılır.',
                  isTrue: true,
                  explanation: 'Doğru! Feed beslemek demektir.'
                },
                {
                  id: 'tf_c1_3',
                  text: 'Evdeki sorumlulukları paylaşmak aile bireylerinin işini kolaylaştırır.',
                  isTrue: true,
                  explanation: 'Doğru! Maarif modelinde aile içi dayanışma ve sorumluluk bilinci desteklenir.'
                },
                {
                  id: 'tf_c1_4',
                  text: '"Make the bed" yatak satın almak demektir.',
                  isTrue: false,
                  explanation: 'Yanlış! "Make the bed" sabah yataktan kalktıktan sonra yatağı düzeltmek / toplamaktır.'
                }
              ],
              fillBlank: [
                {
                  id: 'fb_c1_1',
                  sentence: 'Dinner is ready! Can you please ___ the table?',
                  options: ['set', 'break', 'wash', 'sleep'],
                  correctWord: 'set',
                  hint: '"___ the table" masayı hazırlamak kalıbı.'
                },
                {
                  id: 'fb_c1_2',
                  sentence: 'Don\'t forget to ___ the cat. It is very hungry.',
                  options: ['feed', 'clean', 'drive', 'cook'],
                  correctWord: 'feed',
                  hint: 'Aç olan kediye mama vermek (beslemek).'
                },
                {
                  id: 'fb_c1_3',
                  sentence: 'I always ___ my bed after I wake up.',
                  options: ['make', 'do', 'play', 'ride'],
                  correctWord: 'make',
                  hint: '"___ the bed" yatağı toplamak fiili.'
                },
                {
                  id: 'fb_c1_4',
                  sentence: 'The balcony flowers are dry. Please ___ them with some water.',
                  options: ['water', 'cut', 'drop', 'take'],
                  correctWord: 'water',
                  hint: 'Çiçekleri sulamak fiili.'
                }
              ],
              quiz: [
                {
                  id: 'q_c1_1',
                  question: 'Akşam yemeği hazır olduğunda annesine yardım etmek isteyen Can hangi görevi yapabilir?',
                  options: [
                    'Set the table with plates and forks',
                    'Go to sleep immediately',
                    'Leave his toys on the floor',
                    'Turn off all the lights'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Masa hazırlığı.',
                  explanation: '"Set the table with plates and forks" masaya tabak ve çatalları koyarak masayı kurmaktır.'
                },
                {
                  id: 'q_c1_2',
                  question: '"My room is very messy. I must ___ ." Cümlesini hangi ifade tamamlar?',
                  options: [
                    'tidy it up',
                    'break the window',
                    'play drums loudly',
                    'drop trash'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Oda dağınık (messy) ise ne yapılır?',
                  explanation: 'Oda dağınık olunca "tidy it up" (toplamak / düzenlemek) gerekir.'
                },
                {
                  id: 'q_c1_3',
                  question: 'Aşağıdaki ev işlerinden hangisi "HAYVAN BAKIMI" ile doğrudan ilgilidir?',
                  options: [
                    'Feed the pet and walk the dog',
                    'Make the bed and open the window',
                    'Wash the dishes and dry plates',
                    'Water the roses in the garden'
                  ],
                  correctAnswerIndex: 0,
                  hint: 'Evcil hayvan.',
                  explanation: 'Kediyi/köpeği beslemek ve gezdirmek evcil hayvan bakımıdır.'
                },
                {
                  id: 'q_c1_4',
                  question: '— Who takes out the rubbish in your house?\n— My brother ___ it every night.',
                  options: ['does', 'takes', 'makes', 'drinks'],
                  correctAnswerIndex: 1,
                  hint: '"take out the rubbish" kalıbı.',
                  explanation: '"take out" kalıbı 3. tekil şahısta "takes" olur.'
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
