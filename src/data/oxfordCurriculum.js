// Oxford Word Skills (Elementary) - Eksiksiz 100 Unite Mufredat Verisi
export const OXFORD_DATA = {
  "id": "oxford",
  "name": "Oxford Word Skills (Elementary)",
  "shortName": "Oxford Skills",
  "icon": "📚",
  "color": "#0284C7",
  "gradient": "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
  "lightBg": "#F0F9FF",
  "description": "Oxford University Press: 18 Modül, 100 Tam Ünite (1'den 100'e Eksiksiz), Telaffuz & Etkinlik Seti",
  "units": [
    {
      "id": "oxf_mod_1",
      "unitNumber": 1,
      "title": "Module 1: Learning English (İngilizce Öğrenimi)",
      "description": "Sınıf eşyaları, dil bilgisi terimleri, sözlük kullanımı ve sınıf içi etkinlikler",
      "topics": [
        {
          "id": "oxf_u1",
          "title": "Unit 1: Classroom Vocabulary (Sınıf Eşyaları)",
          "kazanimCode": "OXF.EL.U1",
          "kazanimDesc": "Sınıfta bulunan temel araç-gereçleri ve öğretim materyallerini tanır ve telaffuz eder.",
          "summary": "### 🏫 Classroom Vocabulary\n• **Yazı & Pano:** whiteboard (yazı tahtası), board pen (tahta kalemi), noticeboard (duyuru panosu), notice (ilan/duyuru).\n• **Mobilya:** desk (öğrenci sırası), chair (sandalye), table (masa), bag (çanta).\n• **Kırtasiye:** pen (kalem), pencil (kurşun kalem), coursebook (ders kitabı), notebook (defter), dictionary (sözlük), piece of paper (bir yaprak kâğıt).\n\n💡 **Spotlight:** Bir tek kâğıt için 'a paper' yerine 'a piece of paper' denir. Tahta için kısaca 'board' kullanılabilir.",
          "keyConcepts": [
            "whiteboard",
            "board pen",
            "noticeboard",
            "desk",
            "chair",
            "pen",
            "pencil",
            "coursebook",
            "dictionary",
            "notebook"
          ],
          "pronunciationPhrases": [
            {
              "english": "Look at the whiteboard.",
              "turkish": "Yazı tahtasına bakın.",
              "phonetic": "luk et dı vayt-bord",
              "category": "Classroom"
            },
            {
              "english": "Open your coursebook.",
              "turkish": "Ders kitabınızı açın.",
              "phonetic": "o-pın yor kors-buk",
              "category": "Classroom"
            },
            {
              "english": "Write in your notebook.",
              "turkish": "Defterinize yazın.",
              "phonetic": "rayt in yor novt-buk",
              "category": "Classroom"
            },
            {
              "english": "Look up the word in the dictionary.",
              "turkish": "Kelimeye sözlükten bakın.",
              "phonetic": "luk ap dı vörd in dı dik-şın-ri",
              "category": "Classroom"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_1_1",
              "front": "Whiteboard & Board pen",
              "back": "Beyaz yazı tahtası ve tahta kalemi.",
              "tip": "Öğretmen tahtaya board pen ile yazar.",
              "example": "The teacher writes on the whiteboard."
            },
            {
              "id": "fc_oxf_1_2",
              "front": "Coursebook vs Notebook",
              "back": "Coursebook = Ders kitabı\nNotebook = Not defteri",
              "tip": "Coursebook basılı kitaptır, notebook ise boş defterdir.",
              "example": "We read from the coursebook and write in our notebook."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_1_1",
              "left": "dictionary",
              "right": "Kelimelerin anlamının arandığı sözlük"
            },
            {
              "id": "m_oxf_1_2",
              "left": "whiteboard",
              "right": "Öğretmenin üzerine yazdığı tahta"
            },
            {
              "id": "m_oxf_1_3",
              "left": "noticeboard",
              "right": "Duyuruların asıldığı pano"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_1_1",
              "text": "A pencil and a notebook can be put in a school bag.",
              "isTrue": true,
              "explanation": "Doğru! Kalem ve defter çantaya sığar."
            },
            {
              "id": "tf_oxf_1_2",
              "text": "A desk and a noticeboard can be put in a bag.",
              "isTrue": false,
              "explanation": "Yanlış! Sıra ve pano çantaya sığmaz."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_1_1",
              "sentence": "The teacher writes on the whiteboard with a board ___.",
              "options": [
                "pen",
                "chair",
                "table",
                "bag"
              ],
              "correctWord": "pen",
              "hint": "Board pen."
            },
            {
              "id": "fb_oxf_1_2",
              "sentence": "Can I have a ___ of paper?",
              "options": [
                "piece",
                "desk",
                "notice",
                "book"
              ],
              "correctWord": "piece",
              "hint": "A piece of paper."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_1_1",
              "question": "You find the meaning of words in this:",
              "options": [
                "a dictionary",
                "a noticeboard",
                "a desk",
                "a chair"
              ],
              "correctAnswerIndex": 0,
              "hint": "Sözlük",
              "explanation": "Kelimelerin anlamı sözlükten (dictionary) bulunur."
            }
          ]
        },
        {
          "id": "oxf_u2",
          "title": "Unit 2: Grammar Words (Dil Bilgisi Terimleri)",
          "kazanimCode": "OXF.EL.U2",
          "kazanimDesc": "İsim, fiil, sıfat, zarf ve edat gibi temel sözcük türlerini tanır.",
          "summary": "### 📝 Grammar Words\n• **Sözcük Türleri (Parts of Speech):**\n  - noun (isim): book, boy, woman, school\n  - verb (fiil): walk, speak, listen, write\n  - adjective (sıfat): old, young, happy, red\n  - adverb (zarf): slowly, quietly, quickly\n  - pronoun (zamir): he, she, it, they\n  - preposition (edat): in, on, at, under, to\n• **Article:** 'a/an' (indefinite), 'the' (definite).\n• **Sentence:** Tam cümle. **Phrase:** Kelime öbeği.",
          "keyConcepts": [
            "noun",
            "verb",
            "adjective",
            "adverb",
            "pronoun",
            "preposition",
            "sentence",
            "phrase"
          ],
          "pronunciationPhrases": [
            {
              "english": "'A' and 'an' are indefinite articles.",
              "turkish": "'A' ve 'an' belirsiz tanımlıklardır.",
              "phonetic": "ey end en ar in-de-fı-nıt ar-ti-kılz",
              "category": "Grammar"
            },
            {
              "english": "'Quickly' is an adverb.",
              "turkish": "'Quickly' bir durum zarfıdır.",
              "phonetic": "kvik-li iz en ed-vörb",
              "category": "Grammar"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_2_1",
              "front": "Noun vs Verb",
              "back": "Noun = İsim (boy, cat)\nVerb = Fiil (run, sleep)",
              "tip": "Fiiller eylem bildirir.",
              "example": "In 'Cats sleep', cat is a noun and sleep is a verb."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_2_1",
              "left": "walk, speak",
              "right": "Verb (Fiil)"
            },
            {
              "id": "m_oxf_2_2",
              "left": "young, old",
              "right": "Adjective (Sıfat)"
            },
            {
              "id": "m_oxf_2_3",
              "left": "slowly, quietly",
              "right": "Adverb (Zarf)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_2_1",
              "text": "'He' and 'she' are pronouns.",
              "isTrue": true,
              "explanation": "Doğru! Şahıs zamirleridir."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_2_1",
              "sentence": "'Under' is a ___ in English.",
              "options": [
                "preposition",
                "noun",
                "adverb",
                "verb"
              ],
              "correctWord": "preposition",
              "hint": "Yer belirten edat."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_2_1",
              "question": "Which of the following is an adverb?",
              "options": [
                "quietly",
                "quiet",
                "student",
                "walk"
              ],
              "correctAnswerIndex": 0,
              "hint": "-ly ekli zarf",
              "explanation": "Quietly bir zarftır."
            }
          ]
        },
        {
          "id": "oxf_u3",
          "title": "Unit 3: Using This Book (Kitap ve Yönergeler)",
          "kazanimCode": "OXF.EL.U3",
          "kazanimDesc": "Alıştırma yönergelerini (tick, cross, circle, underline, complete) anlar.",
          "summary": "### 📖 Using this Book & Instructions\n• **Yönerge Fiilleri:**\n  - **tick (✓):** İşaretlemek (doğru kutucuğa tik atmak)\n  - **cross (✗):** Çarpı koymak\n  - **circle:** Daire içine almak\n  - **underline:** Altını çizmek\n  - **complete / fill in:** Tamamlamak / doldurmak\n  - **match:** Eşleştirmek\n  - **correct:** Düzeltmek\n\n💡 **Spotlight:** Sınavlarda ve kitap alıştırmalarında bu yönergeleri doğru takip etmek çok önemlidir.",
          "keyConcepts": [
            "tick",
            "cross",
            "circle",
            "underline",
            "complete",
            "match",
            "correct"
          ],
          "pronunciationPhrases": [
            {
              "english": "Circle the correct answer.",
              "turkish": "Doğru cevabı daire içine alın.",
              "phonetic": "sör-kıl dı ko-rekt an-sır",
              "category": "Instructions"
            },
            {
              "english": "Underline the adjectives.",
              "turkish": "Sıfatların altını çizin.",
              "phonetic": "an-dır-layn dı ec-ek-tivz",
              "category": "Instructions"
            },
            {
              "english": "Tick the correct sentence.",
              "turkish": "Doğru cümlenin yanına tik atın.",
              "phonetic": "tik dı ko-rekt sen-tıns",
              "category": "Instructions"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_3_1",
              "front": "Circle vs Underline",
              "back": "Circle: Yuvarlak içine almak (O)\nUnderline: Altını çizmek (_)",
              "tip": "Testlerde sıkça sorulan iki farklı yönergedir.",
              "example": "Circle the odd word out."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_3_1",
              "left": "tick (✓)",
              "right": "Doğru işareti koymak"
            },
            {
              "id": "m_oxf_3_2",
              "left": "underline",
              "right": "Metnin altını çizmek"
            },
            {
              "id": "m_oxf_3_3",
              "left": "circle",
              "right": "Sözcüğü daire içine almak"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_3_1",
              "text": "'Underline' means to draw a line under a word.",
              "isTrue": true,
              "explanation": "Doğru! Kelimenin altına çizgi çekmektir."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_3_1",
              "sentence": "Please ___ the correct word with a pen.",
              "options": [
                "circle",
                "stand",
                "listen",
                "sleep"
              ],
              "correctWord": "circle",
              "hint": "Daire içine al."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_3_1",
              "question": "What symbol is a 'tick' in English tests?",
              "options": [
                "✓",
                "✗",
                "★",
                "!"
              ],
              "correctAnswerIndex": 0,
              "hint": "Onay işareti",
              "explanation": "Tick (✓) onaylama işaretidir."
            }
          ]
        },
        {
          "id": "oxf_u4",
          "title": "Unit 4: Learning New Words (Kelime Öğrenme Stratejileri)",
          "kazanimCode": "OXF.EL.U4",
          "kazanimDesc": "Kelime defteri tutma, telaffuz pratiği yapma ve bağlamda öğrenme tekniklerini kavrar.",
          "summary": "### 💡 Learning New Words\n• **Etkili Kelime Öğrenme:**\n  - **keep a notebook:** Kelime defteri tutmak\n  - **meaning:** Kelimenin anlamı\n  - **pronunciation:** Doğru telaffuz\n  - **practise aloud:** Sesli tekrar yapmak\n  - **example sentence:** Örnek cümle yazmak\n  - **translation:** Kendi diline çeviri yapmak\n\n💡 **Spotlight:** Kelimeleri tek başına değil, cümle içinde veya eş anlamlılarıyla (synonyms) öğrenmek kalıcılığı artırır.",
          "keyConcepts": [
            "meaning",
            "pronunciation",
            "notebook",
            "practise",
            "aloud",
            "synonym",
            "context"
          ],
          "pronunciationPhrases": [
            {
              "english": "Say the word aloud three times.",
              "turkish": "Kelimeyi sesli olarak üç kez söyleyin.",
              "phonetic": "sey dı vörd e-lavd trii taymz",
              "category": "Learning"
            },
            {
              "english": "Write an example sentence.",
              "turkish": "Bir örnek cümle yazın.",
              "phonetic": "rayt en ig-zam-pıl sen-tıns",
              "category": "Learning"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_4_1",
              "front": "Say aloud ne demektir?",
              "back": "Sesli olarak söylemek (kendi sesini duyacak şekilde telaffuz etmek).",
              "tip": "Kelime ezberlerken fısıldamak yerine sesli okumak hafızayı güçlendirir.",
              "example": "Read the list aloud."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_4_1",
              "left": "meaning",
              "right": "Kelimenin anlamı"
            },
            {
              "id": "m_oxf_4_2",
              "left": "pronunciation",
              "right": "Sesli okunuş ve telaffuz"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_4_1",
              "text": "Writing example sentences helps you remember new words.",
              "isTrue": true,
              "explanation": "Doğru! Cümle içinde kullanmak kalıcı öğrenmeyi sağlar."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_4_1",
              "sentence": "Keep a vocabulary ___ to write new words.",
              "options": [
                "notebook",
                "shoe",
                "bottle",
                "plate"
              ],
              "correctWord": "notebook",
              "hint": "Kelime defteri."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_4_1",
              "question": "What is the best way to remember new vocabulary?",
              "options": [
                "write example sentences",
                "never read them",
                "forget them",
                "close your eyes"
              ],
              "correctAnswerIndex": 0,
              "hint": "Örnek cümleler",
              "explanation": "Örnek cümle yazmak hafızayı en çok destekleyen yöntemdir."
            }
          ]
        },
        {
          "id": "oxf_u5",
          "title": "Unit 5: Classroom Activities (Sınıf İçi Etkinlikler)",
          "kazanimCode": "OXF.EL.U5",
          "kazanimDesc": "Öğretmen ve öğrencilerin sınıfta yaptığı temel eylemleri (listen, repeat, ask, answer, discuss) ifade eder.",
          "summary": "### 🗣️ Classroom Activities\n• **Sınıf Eylemleri:**\n  - **listen to the audio:** Dinleme kaydını dinlemek\n  - **repeat after the teacher:** Öğretmenden sonra tekrar etmek\n  - **ask a question:** Soru sormak\n  - **answer a question:** Soruya cevap vermek\n  - **work in pairs:** İkili gruplar halinde çalışmak\n  - **discuss with a partner:** Arkadaşıyla tartışmak / fikir alışverişi yapmak\n\n💡 **Spotlight:** 'Ask' soru sormak, 'answer' ise cevaplamaktır. 'In pairs' iki kişi birlikte demektir.",
          "keyConcepts": [
            "listen",
            "repeat",
            "ask",
            "answer",
            "work in pairs",
            "discuss"
          ],
          "pronunciationPhrases": [
            {
              "english": "Work in pairs and practise the dialogue.",
              "turkish": "İkili eşleşin ve diyaloğu çalışın.",
              "phonetic": "vörk in perz end prek-tis dı day-e-log",
              "category": "Classroom"
            },
            {
              "english": "Can I ask a question?",
              "turkish": "Bir soru sorabilir miyim?",
              "phonetic": "ken ay ask e kves-çın",
              "category": "Classroom"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_5_1",
              "front": "Work in pairs ne demektir?",
              "back": "İkişerli gruplar halinde birlikte çalışmak.",
              "tip": "Pair = çift / ikili.",
              "example": "Work in pairs with your desk partner."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_5_1",
              "left": "ask",
              "right": "Soru sormak"
            },
            {
              "id": "m_oxf_5_2",
              "left": "answer",
              "right": "Soruya yanıt vermek"
            },
            {
              "id": "m_oxf_5_3",
              "left": "repeat",
              "right": "Tekrar etmek"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_5_1",
              "text": "'Work in pairs' means working with two students together.",
              "isTrue": true,
              "explanation": "Doğru! Pair çift demektir."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_5_1",
              "sentence": "Listen to the recording and ___ the words.",
              "options": [
                "repeat",
                "eat",
                "sleep",
                "fly"
              ],
              "correctWord": "repeat",
              "hint": "Tekrar et."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_5_1",
              "question": "What is the opposite action of 'ask a question'?",
              "options": [
                "answer a question",
                "close the book",
                "run away",
                "stand up"
              ],
              "correctAnswerIndex": 0,
              "hint": "Cevaplamak",
              "explanation": "Sorunun karşılığı cevaplamaktır (answer)."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_2",
      "unitNumber": 2,
      "title": "Module 2: Numbers and Time (Sayılar ve Zaman)",
      "description": "Büyük sayılar, matematiksel işlemler, saat okuma, günler, aylar ve mevsimler",
      "topics": [
        {
          "id": "oxf_u6",
          "title": "Unit 6: Numbers & Calculations (Sayılar & İşlemler)",
          "kazanimCode": "OXF.EL.U6",
          "kazanimDesc": "Yüzler, binler, milyonlar ve dört işlem ifadelerini İngilizce söyler.",
          "summary": "### 🔢 Numbers & Calculations\n• **Büyük Sayılar:** 100 = a hundred, 1,000 = a thousand, 1,000,000 = a million.\n• **İşlemler:**\n  - + (plus / and): 8 + 2 = 10 ➔ Eight plus two is ten.\n  - - (minus): 10 - 4 = 6 ➔ Ten minus four is six.\n  - x (times / multiplied by): 3 x 4 = 12 ➔ Three times four is twelve.\n  - ÷ (divided by): 20 ÷ 5 = 4 ➔ Twenty divided by five is four.\n\n💡 **Spotlight:** 150 = 'a hundred and fifty' (İngiliz İngilizcesinde 'and' söylenir).",
          "keyConcepts": [
            "hundred",
            "thousand",
            "million",
            "plus",
            "minus",
            "times",
            "divided by",
            "equals"
          ],
          "pronunciationPhrases": [
            {
              "english": "Ten plus ten is twenty.",
              "turkish": "On artı on yirmi eder.",
              "phonetic": "ten plas ten iz tven-ti",
              "category": "Numbers"
            },
            {
              "english": "A hundred and fifty people.",
              "turkish": "Yüz elli kişi.",
              "phonetic": "e han-drıd end fif-ti pii-pıl",
              "category": "Numbers"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_6_1",
              "front": "100 ve 1,000",
              "back": "100: a hundred\n1,000: a thousand",
              "tip": "Tekil için 'a' veya 'one' kullanılır.",
              "example": "One thousand meters."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_6_1",
              "left": "plus (+)",
              "right": "Toplama"
            },
            {
              "id": "m_oxf_6_2",
              "left": "minus (-)",
              "right": "Çıkarma"
            },
            {
              "id": "m_oxf_6_3",
              "left": "times (x)",
              "right": "Çarpma"
            },
            {
              "id": "m_oxf_6_4",
              "left": "divided by (÷)",
              "right": "Bölme"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_6_1",
              "text": "Six times five equals thirty.",
              "isTrue": true,
              "explanation": "Doğru! 6 x 5 = 30."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_6_1",
              "sentence": "Fifty ___ five equals ten.",
              "options": [
                "divided by",
                "plus",
                "times",
                "minus"
              ],
              "correctWord": "divided by",
              "hint": "50 ÷ 5 = 10."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_6_1",
              "question": "What is 100 in English?",
              "options": [
                "a hundred",
                "a thousand",
                "a million",
                "ten"
              ],
              "correctAnswerIndex": 0,
              "hint": "Yüz",
              "explanation": "100 = a hundred."
            }
          ]
        },
        {
          "id": "oxf_u7",
          "title": "Unit 7: Telling the Time (Saatleri Söyleme)",
          "kazanimCode": "OXF.EL.U7",
          "kazanimDesc": "Tam, buçuk, çeyrek ve dakikalı saatleri İngilizce ifade eder.",
          "summary": "### 🕒 Telling the Time\n• **Temel Saat Kalıpları:**\n  - 3:00 ➔ It's three o'clock.\n  - 3:15 ➔ It's quarter past three.\n  - 3:30 ➔ It's half past three.\n  - 3:45 ➔ It's quarter to four.\n  - 3:10 ➔ It's ten past three.\n  - 3:50 ➔ It's ten to four.\n• **Vakitler:** midday / noon (öğlen 12:00), midnight (gece 24:00), a.m. (öğleden önce), p.m. (öğleden sonra).\n\n💡 **Spotlight:** Geçiyor için 'past', kala için 'to' kullanılır.",
          "keyConcepts": [
            "o'clock",
            "half past",
            "quarter past",
            "quarter to",
            "midday",
            "midnight",
            "a.m.",
            "p.m."
          ],
          "pronunciationPhrases": [
            {
              "english": "What's the time? It's half past four.",
              "turkish": "Saat kaç? Dört buçuk.",
              "phonetic": "vats dı taym? its haf past for",
              "category": "Time"
            },
            {
              "english": "It's quarter to eight.",
              "turkish": "Sekize çeyrek var.",
              "phonetic": "its kvar-tır tu eyt",
              "category": "Time"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_7_1",
              "front": "Quarter past vs Quarter to",
              "back": "Quarter past: Çeyrek geçiyor (:15)\nQuarter to: Çeyrek var (:45)",
              "tip": "Past = geçe, To = kala.",
              "example": "Quarter past two = 2:15."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_7_1",
              "left": "half past two",
              "right": "02:30 (İki buçuk)"
            },
            {
              "id": "m_oxf_7_2",
              "left": "quarter past two",
              "right": "02:15 (İkiyi çeyrek geçe)"
            },
            {
              "id": "m_oxf_7_3",
              "left": "quarter to three",
              "right": "02:45 (Üçe çeyrek kala)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_7_1",
              "text": "Midnight means 12:00 in the middle of the night.",
              "isTrue": true,
              "explanation": "Doğru! Gece yarısı 24:00 demektir."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_7_1",
              "sentence": "It is 4:30. It is ___ past four.",
              "options": [
                "half",
                "quarter",
                "ten",
                "clock"
              ],
              "correctWord": "half",
              "hint": "Buçuk = half."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_7_1",
              "question": "What is 8:15 in English?",
              "options": [
                "quarter past eight",
                "quarter to eight",
                "half past eight",
                "eight o'clock"
              ],
              "correctAnswerIndex": 0,
              "hint": "Çeyrek geçe",
              "explanation": "8:15 = quarter past eight."
            }
          ]
        },
        {
          "id": "oxf_u8",
          "title": "Unit 8: Days, Seasons and Dates (Günler, Mevsimler & Tarihler)",
          "kazanimCode": "OXF.EL.U8",
          "kazanimDesc": "Haftanın günlerini, ayları, mevsimleri ve sıra sayılarıyla tarihleri söyler.",
          "summary": "### 📅 Days, Seasons and Dates\n• **Days:** Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.\n• **Seasons:** spring (ilkbahar), summer (yaz), autumn/fall (sonbahar), winter (kış).\n• **Edatlar:** Günler için 'on' (on Monday), aylar ve mevsimler için 'in' (in July, in winter).\n• **Sıra Sayıları (Ordinal):** 1st (first), 2nd (second), 3rd (third), 4th (fourth)...",
          "keyConcepts": [
            "Monday",
            "Friday",
            "spring",
            "summer",
            "autumn",
            "winter",
            "first",
            "second",
            "third"
          ],
          "pronunciationPhrases": [
            {
              "english": "My birthday is on the second of May.",
              "turkish": "Doğum günüm 2 Mayıs'ta.",
              "phonetic": "may bört-dey iz on dı se-kınd ov mey",
              "category": "Dates"
            },
            {
              "english": "It snows in winter.",
              "turkish": "Kışın kar yağar.",
              "phonetic": "it snovz in vin-tır",
              "category": "Seasons"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_8_1",
              "front": "Days: on, Seasons: in",
              "back": "Günlerin önünde 'on', mevsim ve ayların önünde 'in' kullanılır.",
              "tip": "On Friday, In July, In summer.",
              "example": "We play football on Saturdays."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_8_1",
              "left": "spring",
              "right": "İlkbahar"
            },
            {
              "id": "m_oxf_8_2",
              "left": "summer",
              "right": "Yaz"
            },
            {
              "id": "m_oxf_8_3",
              "left": "autumn",
              "right": "Sonbahar"
            },
            {
              "id": "m_oxf_8_4",
              "left": "winter",
              "right": "Kış"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_8_1",
              "text": "We say 'in Monday' in English.",
              "isTrue": false,
              "explanation": "Yanlış! Günler için 'on Monday' denir."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_8_1",
              "sentence": "Flowers bloom in ___.",
              "options": [
                "spring",
                "winter",
                "night",
                "desk"
              ],
              "correctWord": "spring",
              "hint": "İlkbahar."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_8_1",
              "question": "Which preposition is used with days?",
              "options": [
                "on",
                "in",
                "at",
                "to"
              ],
              "correctAnswerIndex": 0,
              "hint": "On Monday",
              "explanation": "Günlerle 'on' kullanılır."
            }
          ]
        },
        {
          "id": "oxf_u9",
          "title": "Unit 9: Time Words and Phrases (Zaman İfadeleri)",
          "kazanimCode": "OXF.EL.U9",
          "kazanimDesc": "Zaman belirten sıklık zarflarını ve kalıpları (yesterday, today, tomorrow, ago, then) kullanır.",
          "summary": "### ⏳ Time Words and Phrases\n• **Zamanlar:**\n  - yesterday (dün), today (bugün), tomorrow (yarın)\n  - last week / last night (geçen hafta / dün gece)\n  - next year / next month (gelecek yıl / gelecek ay)\n  - two days ago (iki gün önce)\n• **Sıklık:** always (her zaman), usually (genellikle), often (sık sık), sometimes (bazen), never (asla).",
          "keyConcepts": [
            "yesterday",
            "today",
            "tomorrow",
            "ago",
            "last",
            "next",
            "always",
            "never"
          ],
          "pronunciationPhrases": [
            {
              "english": "I saw him two days ago.",
              "turkish": "Onu iki gün önce gördüm.",
              "phonetic": "ay sov him tuu deyz e-gov",
              "category": "Time"
            },
            {
              "english": "See you tomorrow!",
              "turkish": "Yarın görüşürüz!",
              "phonetic": "sii yu tu-mo-rov",
              "category": "Time"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_9_1",
              "front": "Ago ne demektir?",
              "back": "'... önce' anlamına gelir ve sürenin sonuna gelir.",
              "tip": "Three years ago = Üç yıl önce.",
              "example": "I started school five years ago."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_9_1",
              "left": "yesterday",
              "right": "Dün"
            },
            {
              "id": "m_oxf_9_2",
              "left": "tomorrow",
              "right": "Yarın"
            },
            {
              "id": "m_oxf_9_3",
              "left": "ago",
              "right": "Önce (geçmiş zaman)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_9_1",
              "text": "'Tomorrow' refers to the day after today.",
              "isTrue": true,
              "explanation": "Doğru! Yarın günüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_9_1",
              "sentence": "I finished my homework an hour ___.",
              "options": [
                "ago",
                "next",
                "tomorrow",
                "soon"
              ],
              "correctWord": "ago",
              "hint": "Bir saat önce."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_9_1",
              "question": "What is the English word for 'dün'?",
              "options": [
                "yesterday",
                "tomorrow",
                "today",
                "now"
              ],
              "correctAnswerIndex": 0,
              "hint": "Dün",
              "explanation": "Yesterday = Dün."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_3",
      "unitNumber": 3,
      "title": "Module 3: People (İnsanlar ve Beden)",
      "description": "Oxford Word Skills Elementary: Module 3: People (İnsanlar ve Beden)",
      "topics": [
        {
          "id": "oxf_u10",
          "title": "Unit 10: Parts of the Body",
          "kazanimCode": "OXF.EL.U10",
          "kazanimDesc": "Unit 10: Parts of the Body konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 10: Parts of the Body\n• **Anahtar Kelimeler:** head, face, eye, ear, nose, mouth, teeth, arm, hand, finger, leg, foot, heart, brain.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "head",
            "face",
            "eye",
            "ear",
            "nose",
            "mouth"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about head.",
              "turkish": "head hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt head",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with face?",
              "turkish": "face ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit face",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying eye aloud.",
              "turkish": "eye kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing eye e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u10_1",
              "front": "head ne anlama gelir?",
              "back": "Unit 10: Parts of the Body ünitesinin temel kelimesidir: head.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word head."
            },
            {
              "id": "fc_oxf_u10_2",
              "front": "face ve eye",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use face in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u10_1",
              "left": "head",
              "right": "Unit 10: Parts of the Body kavramı (head)"
            },
            {
              "id": "m_oxf_u10_2",
              "left": "face",
              "right": "Unit 10: Parts of the Body kavramı (face)"
            },
            {
              "id": "m_oxf_u10_3",
              "left": "eye",
              "right": "Unit 10: Parts of the Body kavramı (eye)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u10_1",
              "text": "'head' is an important vocabulary item in Unit 10: Parts of the Body.",
              "isTrue": true,
              "explanation": "Doğru! 'head' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u10_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "head",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "head",
              "hint": "head."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u10_1",
              "question": "Which word belongs to Unit 10: Parts of the Body?",
              "options": [
                "head",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 10: Parts of the Body",
              "explanation": "head kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u11",
          "title": "Unit 11: Describing People",
          "kazanimCode": "OXF.EL.U11",
          "kazanimDesc": "Unit 11: Describing People konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 11: Describing People\n• **Anahtar Kelimeler:** tall, short, slim, fat, dark hair, blonde hair, blue eyes, beard, moustache.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "tall",
            "short",
            "slim",
            "fat",
            "dark hair",
            "blonde hair"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about tall.",
              "turkish": "tall hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt tall",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with short?",
              "turkish": "short ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit short",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying slim aloud.",
              "turkish": "slim kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing slim e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u11_1",
              "front": "tall ne anlama gelir?",
              "back": "Unit 11: Describing People ünitesinin temel kelimesidir: tall.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word tall."
            },
            {
              "id": "fc_oxf_u11_2",
              "front": "short ve slim",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use short in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u11_1",
              "left": "tall",
              "right": "Unit 11: Describing People kavramı (tall)"
            },
            {
              "id": "m_oxf_u11_2",
              "left": "short",
              "right": "Unit 11: Describing People kavramı (short)"
            },
            {
              "id": "m_oxf_u11_3",
              "left": "slim",
              "right": "Unit 11: Describing People kavramı (slim)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u11_1",
              "text": "'tall' is an important vocabulary item in Unit 11: Describing People.",
              "isTrue": true,
              "explanation": "Doğru! 'tall' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u11_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "tall",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "tall",
              "hint": "tall."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u11_1",
              "question": "Which word belongs to Unit 11: Describing People?",
              "options": [
                "tall",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 11: Describing People",
              "explanation": "tall kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u12",
          "title": "Unit 12: Physical Actions",
          "kazanimCode": "OXF.EL.U12",
          "kazanimDesc": "Unit 12: Physical Actions konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 12: Physical Actions\n• **Anahtar Kelimeler:** walk, run, jump, sit down, stand up, lie down, carry, throw, catch.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "walk",
            "run",
            "jump",
            "sit down",
            "stand up",
            "lie down"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about walk.",
              "turkish": "walk hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt walk",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with run?",
              "turkish": "run ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit run",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying jump aloud.",
              "turkish": "jump kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing jump e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u12_1",
              "front": "walk ne anlama gelir?",
              "back": "Unit 12: Physical Actions ünitesinin temel kelimesidir: walk.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word walk."
            },
            {
              "id": "fc_oxf_u12_2",
              "front": "run ve jump",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use run in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u12_1",
              "left": "walk",
              "right": "Unit 12: Physical Actions kavramı (walk)"
            },
            {
              "id": "m_oxf_u12_2",
              "left": "run",
              "right": "Unit 12: Physical Actions kavramı (run)"
            },
            {
              "id": "m_oxf_u12_3",
              "left": "jump",
              "right": "Unit 12: Physical Actions kavramı (jump)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u12_1",
              "text": "'walk' is an important vocabulary item in Unit 12: Physical Actions.",
              "isTrue": true,
              "explanation": "Doğru! 'walk' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u12_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "walk",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "walk",
              "hint": "walk."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u12_1",
              "question": "Which word belongs to Unit 12: Physical Actions?",
              "options": [
                "walk",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 12: Physical Actions",
              "explanation": "walk kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u13",
          "title": "Unit 13: Personal Information",
          "kazanimCode": "OXF.EL.U13",
          "kazanimDesc": "Unit 13: Personal Information konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 13: Personal Information\n• **Anahtar Kelimeler:** first name, surname, address, postcode, date of birth, single, married.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "first name",
            "surname",
            "address",
            "postcode",
            "date of birth",
            "single"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about first name.",
              "turkish": "first name hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt first name",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with surname?",
              "turkish": "surname ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit surname",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying address aloud.",
              "turkish": "address kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing address e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u13_1",
              "front": "first name ne anlama gelir?",
              "back": "Unit 13: Personal Information ünitesinin temel kelimesidir: first name.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word first name."
            },
            {
              "id": "fc_oxf_u13_2",
              "front": "surname ve address",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use surname in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u13_1",
              "left": "first name",
              "right": "Unit 13: Personal Information kavramı (first name)"
            },
            {
              "id": "m_oxf_u13_2",
              "left": "surname",
              "right": "Unit 13: Personal Information kavramı (surname)"
            },
            {
              "id": "m_oxf_u13_3",
              "left": "address",
              "right": "Unit 13: Personal Information kavramı (address)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u13_1",
              "text": "'first name' is an important vocabulary item in Unit 13: Personal Information.",
              "isTrue": true,
              "explanation": "Doğru! 'first name' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u13_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "first name",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "first name",
              "hint": "first name."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u13_1",
              "question": "Which word belongs to Unit 13: Personal Information?",
              "options": [
                "first name",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 13: Personal Information",
              "explanation": "first name kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u14",
          "title": "Unit 14: Family",
          "kazanimCode": "OXF.EL.U14",
          "kazanimDesc": "Unit 14: Family konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 14: Family\n• **Anahtar Kelimeler:** parents, mother, father, brother, sister, grandfather, grandmother, uncle, aunt, cousin.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "parents",
            "mother",
            "father",
            "brother",
            "sister",
            "grandfather"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about parents.",
              "turkish": "parents hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt parents",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with mother?",
              "turkish": "mother ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit mother",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying father aloud.",
              "turkish": "father kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing father e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u14_1",
              "front": "parents ne anlama gelir?",
              "back": "Unit 14: Family ünitesinin temel kelimesidir: parents.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word parents."
            },
            {
              "id": "fc_oxf_u14_2",
              "front": "mother ve father",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use mother in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u14_1",
              "left": "parents",
              "right": "Unit 14: Family kavramı (parents)"
            },
            {
              "id": "m_oxf_u14_2",
              "left": "mother",
              "right": "Unit 14: Family kavramı (mother)"
            },
            {
              "id": "m_oxf_u14_3",
              "left": "father",
              "right": "Unit 14: Family kavramı (father)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u14_1",
              "text": "'parents' is an important vocabulary item in Unit 14: Family.",
              "isTrue": true,
              "explanation": "Doğru! 'parents' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u14_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "parents",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "parents",
              "hint": "parents."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u14_1",
              "question": "Which word belongs to Unit 14: Family?",
              "options": [
                "parents",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 14: Family",
              "explanation": "parents kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u15",
          "title": "Unit 15: Personality",
          "kazanimCode": "OXF.EL.U15",
          "kazanimDesc": "Unit 15: Personality konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 15: Personality\n• **Anahtar Kelimeler:** kind, friendly, funny, quiet, clever, serious, lazy, hard-working.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "kind",
            "friendly",
            "funny",
            "quiet",
            "clever",
            "serious"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about kind.",
              "turkish": "kind hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt kind",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with friendly?",
              "turkish": "friendly ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit friendly",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying funny aloud.",
              "turkish": "funny kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing funny e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u15_1",
              "front": "kind ne anlama gelir?",
              "back": "Unit 15: Personality ünitesinin temel kelimesidir: kind.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word kind."
            },
            {
              "id": "fc_oxf_u15_2",
              "front": "friendly ve funny",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use friendly in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u15_1",
              "left": "kind",
              "right": "Unit 15: Personality kavramı (kind)"
            },
            {
              "id": "m_oxf_u15_2",
              "left": "friendly",
              "right": "Unit 15: Personality kavramı (friendly)"
            },
            {
              "id": "m_oxf_u15_3",
              "left": "funny",
              "right": "Unit 15: Personality kavramı (funny)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u15_1",
              "text": "'kind' is an important vocabulary item in Unit 15: Personality.",
              "isTrue": true,
              "explanation": "Doğru! 'kind' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u15_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "kind",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "kind",
              "hint": "kind."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u15_1",
              "question": "Which word belongs to Unit 15: Personality?",
              "options": [
                "kind",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 15: Personality",
              "explanation": "kind kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u16",
          "title": "Unit 16: Relationships",
          "kazanimCode": "OXF.EL.U16",
          "kazanimDesc": "Unit 16: Relationships konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 16: Relationships\n• **Anahtar Kelimeler:** best friend, classmate, colleague, boyfriend, girlfriend, get on well with.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "best friend",
            "classmate",
            "colleague",
            "boyfriend",
            "girlfriend",
            "get on well with"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about best friend.",
              "turkish": "best friend hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt best friend",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with classmate?",
              "turkish": "classmate ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit classmate",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying colleague aloud.",
              "turkish": "colleague kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing colleague e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u16_1",
              "front": "best friend ne anlama gelir?",
              "back": "Unit 16: Relationships ünitesinin temel kelimesidir: best friend.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word best friend."
            },
            {
              "id": "fc_oxf_u16_2",
              "front": "classmate ve colleague",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use classmate in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u16_1",
              "left": "best friend",
              "right": "Unit 16: Relationships kavramı (best friend)"
            },
            {
              "id": "m_oxf_u16_2",
              "left": "classmate",
              "right": "Unit 16: Relationships kavramı (classmate)"
            },
            {
              "id": "m_oxf_u16_3",
              "left": "colleague",
              "right": "Unit 16: Relationships kavramı (colleague)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u16_1",
              "text": "'best friend' is an important vocabulary item in Unit 16: Relationships.",
              "isTrue": true,
              "explanation": "Doğru! 'best friend' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u16_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "best friend",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "best friend",
              "hint": "best friend."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u16_1",
              "question": "Which word belongs to Unit 16: Relationships?",
              "options": [
                "best friend",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 16: Relationships",
              "explanation": "best friend kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u17",
          "title": "Unit 17: Feelings",
          "kazanimCode": "OXF.EL.U17",
          "kazanimDesc": "Unit 17: Feelings konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 17: Feelings\n• **Anahtar Kelimeler:** happy, sad, angry, tired, excited, nervous, hungry, thirsty, surprised.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "happy",
            "sad",
            "angry",
            "tired",
            "excited",
            "nervous"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about happy.",
              "turkish": "happy hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt happy",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with sad?",
              "turkish": "sad ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit sad",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying angry aloud.",
              "turkish": "angry kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing angry e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u17_1",
              "front": "happy ne anlama gelir?",
              "back": "Unit 17: Feelings ünitesinin temel kelimesidir: happy.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word happy."
            },
            {
              "id": "fc_oxf_u17_2",
              "front": "sad ve angry",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use sad in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u17_1",
              "left": "happy",
              "right": "Unit 17: Feelings kavramı (happy)"
            },
            {
              "id": "m_oxf_u17_2",
              "left": "sad",
              "right": "Unit 17: Feelings kavramı (sad)"
            },
            {
              "id": "m_oxf_u17_3",
              "left": "angry",
              "right": "Unit 17: Feelings kavramı (angry)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u17_1",
              "text": "'happy' is an important vocabulary item in Unit 17: Feelings.",
              "isTrue": true,
              "explanation": "Doğru! 'happy' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u17_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "happy",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "happy",
              "hint": "happy."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u17_1",
              "question": "Which word belongs to Unit 17: Feelings?",
              "options": [
                "happy",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 17: Feelings",
              "explanation": "happy kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_4",
      "unitNumber": 4,
      "title": "Module 4: Language Section 1 - Prepositions (Edatlar)",
      "description": "Oxford Word Skills Elementary: Module 4: Language Section 1 - Prepositions (Edatlar)",
      "topics": [
        {
          "id": "oxf_u18",
          "title": "Unit 18: Prepositions: Time",
          "kazanimCode": "OXF.EL.U18",
          "kazanimDesc": "Unit 18: Prepositions: Time konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 18: Prepositions: Time\n• **Anahtar Kelimeler:** at 5 o'clock, on Monday, in July, in the morning, at night, at the weekend.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "at 5 o'clock",
            "on Monday",
            "in July",
            "in the morning",
            "at night",
            "at the weekend"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about at 5 o'clock.",
              "turkish": "at 5 o'clock hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt at 5 o'clock",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with on Monday?",
              "turkish": "on Monday ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit on Monday",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying in July aloud.",
              "turkish": "in July kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing in July e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u18_1",
              "front": "at 5 o'clock ne anlama gelir?",
              "back": "Unit 18: Prepositions: Time ünitesinin temel kelimesidir: at 5 o'clock.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word at 5 o'clock."
            },
            {
              "id": "fc_oxf_u18_2",
              "front": "on Monday ve in July",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use on Monday in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u18_1",
              "left": "at 5 o'clock",
              "right": "Unit 18: Prepositions: Time kavramı (at 5 o'clock)"
            },
            {
              "id": "m_oxf_u18_2",
              "left": "on Monday",
              "right": "Unit 18: Prepositions: Time kavramı (on Monday)"
            },
            {
              "id": "m_oxf_u18_3",
              "left": "in July",
              "right": "Unit 18: Prepositions: Time kavramı (in July)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u18_1",
              "text": "'at 5 o'clock' is an important vocabulary item in Unit 18: Prepositions: Time.",
              "isTrue": true,
              "explanation": "Doğru! 'at 5 o'clock' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u18_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "at 5 o'clock",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "at 5 o'clock",
              "hint": "at 5 o'clock."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u18_1",
              "question": "Which word belongs to Unit 18: Prepositions: Time?",
              "options": [
                "at 5 o'clock",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 18: Prepositions: Time",
              "explanation": "at 5 o'clock kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u19",
          "title": "Unit 19: Prepositions: Direction",
          "kazanimCode": "OXF.EL.U19",
          "kazanimDesc": "Unit 19: Prepositions: Direction konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 19: Prepositions: Direction\n• **Anahtar Kelimeler:** into, out of, through, across, towards, up, down, over.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "into",
            "out of",
            "through",
            "across",
            "towards",
            "up"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about into.",
              "turkish": "into hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt into",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with out of?",
              "turkish": "out of ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit out of",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying through aloud.",
              "turkish": "through kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing through e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u19_1",
              "front": "into ne anlama gelir?",
              "back": "Unit 19: Prepositions: Direction ünitesinin temel kelimesidir: into.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word into."
            },
            {
              "id": "fc_oxf_u19_2",
              "front": "out of ve through",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use out of in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u19_1",
              "left": "into",
              "right": "Unit 19: Prepositions: Direction kavramı (into)"
            },
            {
              "id": "m_oxf_u19_2",
              "left": "out of",
              "right": "Unit 19: Prepositions: Direction kavramı (out of)"
            },
            {
              "id": "m_oxf_u19_3",
              "left": "through",
              "right": "Unit 19: Prepositions: Direction kavramı (through)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u19_1",
              "text": "'into' is an important vocabulary item in Unit 19: Prepositions: Direction.",
              "isTrue": true,
              "explanation": "Doğru! 'into' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u19_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "into",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "into",
              "hint": "into."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u19_1",
              "question": "Which word belongs to Unit 19: Prepositions: Direction?",
              "options": [
                "into",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 19: Prepositions: Direction",
              "explanation": "into kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u20",
          "title": "Unit 20: Prepositions: Place",
          "kazanimCode": "OXF.EL.U20",
          "kazanimDesc": "Unit 20: Prepositions: Place konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 20: Prepositions: Place\n• **Anahtar Kelimeler:** in the room, on the table, under the bed, next to, between, in front of, behind.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "in the room",
            "on the table",
            "under the bed",
            "next to",
            "between",
            "in front of"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about in the room.",
              "turkish": "in the room hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt in the room",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with on the table?",
              "turkish": "on the table ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit on the table",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying under the bed aloud.",
              "turkish": "under the bed kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing under the bed e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u20_1",
              "front": "in the room ne anlama gelir?",
              "back": "Unit 20: Prepositions: Place ünitesinin temel kelimesidir: in the room.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word in the room."
            },
            {
              "id": "fc_oxf_u20_2",
              "front": "on the table ve under the bed",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use on the table in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u20_1",
              "left": "in the room",
              "right": "Unit 20: Prepositions: Place kavramı (in the room)"
            },
            {
              "id": "m_oxf_u20_2",
              "left": "on the table",
              "right": "Unit 20: Prepositions: Place kavramı (on the table)"
            },
            {
              "id": "m_oxf_u20_3",
              "left": "under the bed",
              "right": "Unit 20: Prepositions: Place kavramı (under the bed)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u20_1",
              "text": "'in the room' is an important vocabulary item in Unit 20: Prepositions: Place.",
              "isTrue": true,
              "explanation": "Doğru! 'in the room' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u20_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "in the room",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "in the room",
              "hint": "in the room."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u20_1",
              "question": "Which word belongs to Unit 20: Prepositions: Place?",
              "options": [
                "in the room",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 20: Prepositions: Place",
              "explanation": "in the room kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u21",
          "title": "Unit 21: Prepositions: Phrases",
          "kazanimCode": "OXF.EL.U21",
          "kazanimDesc": "Unit 21: Prepositions: Phrases konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 21: Prepositions: Phrases\n• **Anahtar Kelimeler:** by car, on foot, for sale, on holiday, at work, at home, on TV.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "by car",
            "on foot",
            "for sale",
            "on holiday",
            "at work",
            "at home"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about by car.",
              "turkish": "by car hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt by car",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with on foot?",
              "turkish": "on foot ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit on foot",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying for sale aloud.",
              "turkish": "for sale kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing for sale e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u21_1",
              "front": "by car ne anlama gelir?",
              "back": "Unit 21: Prepositions: Phrases ünitesinin temel kelimesidir: by car.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word by car."
            },
            {
              "id": "fc_oxf_u21_2",
              "front": "on foot ve for sale",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use on foot in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u21_1",
              "left": "by car",
              "right": "Unit 21: Prepositions: Phrases kavramı (by car)"
            },
            {
              "id": "m_oxf_u21_2",
              "left": "on foot",
              "right": "Unit 21: Prepositions: Phrases kavramı (on foot)"
            },
            {
              "id": "m_oxf_u21_3",
              "left": "for sale",
              "right": "Unit 21: Prepositions: Phrases kavramı (for sale)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u21_1",
              "text": "'by car' is an important vocabulary item in Unit 21: Prepositions: Phrases.",
              "isTrue": true,
              "explanation": "Doğru! 'by car' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u21_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "by car",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "by car",
              "hint": "by car."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u21_1",
              "question": "Which word belongs to Unit 21: Prepositions: Phrases?",
              "options": [
                "by car",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 21: Prepositions: Phrases",
              "explanation": "by car kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u22",
          "title": "Unit 22: Word + Preposition",
          "kazanimCode": "OXF.EL.U22",
          "kazanimDesc": "Unit 22: Word + Preposition konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 22: Word + Preposition\n• **Anahtar Kelimeler:** listen to, wait for, good at, afraid of, interested in, look at.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "listen to",
            "wait for",
            "good at",
            "afraid of",
            "interested in",
            "look at"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about listen to.",
              "turkish": "listen to hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt listen to",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with wait for?",
              "turkish": "wait for ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit wait for",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying good at aloud.",
              "turkish": "good at kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing good at e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u22_1",
              "front": "listen to ne anlama gelir?",
              "back": "Unit 22: Word + Preposition ünitesinin temel kelimesidir: listen to.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word listen to."
            },
            {
              "id": "fc_oxf_u22_2",
              "front": "wait for ve good at",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use wait for in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u22_1",
              "left": "listen to",
              "right": "Unit 22: Word + Preposition kavramı (listen to)"
            },
            {
              "id": "m_oxf_u22_2",
              "left": "wait for",
              "right": "Unit 22: Word + Preposition kavramı (wait for)"
            },
            {
              "id": "m_oxf_u22_3",
              "left": "good at",
              "right": "Unit 22: Word + Preposition kavramı (good at)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u22_1",
              "text": "'listen to' is an important vocabulary item in Unit 22: Word + Preposition.",
              "isTrue": true,
              "explanation": "Doğru! 'listen to' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u22_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "listen to",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "listen to",
              "hint": "listen to."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u22_1",
              "question": "Which word belongs to Unit 22: Word + Preposition?",
              "options": [
                "listen to",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 22: Word + Preposition",
              "explanation": "listen to kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_5",
      "unitNumber": 5,
      "title": "Module 5: Everyday Life (Günlük Yaşam)",
      "description": "Oxford Word Skills Elementary: Module 5: Everyday Life (Günlük Yaşam)",
      "topics": [
        {
          "id": "oxf_u23",
          "title": "Unit 23: Routines",
          "kazanimCode": "OXF.EL.U23",
          "kazanimDesc": "Unit 23: Routines konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 23: Routines\n• **Anahtar Kelimeler:** wake up, get up, have a shower, have breakfast, leave home, go to bed.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "wake up",
            "get up",
            "have a shower",
            "have breakfast",
            "leave home",
            "go to bed"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about wake up.",
              "turkish": "wake up hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt wake up",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with get up?",
              "turkish": "get up ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit get up",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying have a shower aloud.",
              "turkish": "have a shower kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing have a shower e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u23_1",
              "front": "wake up ne anlama gelir?",
              "back": "Unit 23: Routines ünitesinin temel kelimesidir: wake up.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word wake up."
            },
            {
              "id": "fc_oxf_u23_2",
              "front": "get up ve have a shower",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use get up in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u23_1",
              "left": "wake up",
              "right": "Unit 23: Routines kavramı (wake up)"
            },
            {
              "id": "m_oxf_u23_2",
              "left": "get up",
              "right": "Unit 23: Routines kavramı (get up)"
            },
            {
              "id": "m_oxf_u23_3",
              "left": "have a shower",
              "right": "Unit 23: Routines kavramı (have a shower)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u23_1",
              "text": "'wake up' is an important vocabulary item in Unit 23: Routines.",
              "isTrue": true,
              "explanation": "Doğru! 'wake up' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u23_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "wake up",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "wake up",
              "hint": "wake up."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u23_1",
              "question": "Which word belongs to Unit 23: Routines?",
              "options": [
                "wake up",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 23: Routines",
              "explanation": "wake up kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u24",
          "title": "Unit 24: Clothes",
          "kazanimCode": "OXF.EL.U24",
          "kazanimDesc": "Unit 24: Clothes konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 24: Clothes\n• **Anahtar Kelimeler:** jacket, coat, trousers, jeans, shirt, T-shirt, skirt, dress, shoes, trainers, wear, put on.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "jacket",
            "coat",
            "trousers",
            "jeans",
            "shirt",
            "T-shirt"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about jacket.",
              "turkish": "jacket hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt jacket",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with coat?",
              "turkish": "coat ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit coat",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying trousers aloud.",
              "turkish": "trousers kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing trousers e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u24_1",
              "front": "jacket ne anlama gelir?",
              "back": "Unit 24: Clothes ünitesinin temel kelimesidir: jacket.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word jacket."
            },
            {
              "id": "fc_oxf_u24_2",
              "front": "coat ve trousers",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use coat in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u24_1",
              "left": "jacket",
              "right": "Unit 24: Clothes kavramı (jacket)"
            },
            {
              "id": "m_oxf_u24_2",
              "left": "coat",
              "right": "Unit 24: Clothes kavramı (coat)"
            },
            {
              "id": "m_oxf_u24_3",
              "left": "trousers",
              "right": "Unit 24: Clothes kavramı (trousers)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u24_1",
              "text": "'jacket' is an important vocabulary item in Unit 24: Clothes.",
              "isTrue": true,
              "explanation": "Doğru! 'jacket' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u24_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "jacket",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "jacket",
              "hint": "jacket."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u24_1",
              "question": "Which word belongs to Unit 24: Clothes?",
              "options": [
                "jacket",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 24: Clothes",
              "explanation": "jacket kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u25",
          "title": "Unit 25: Accessories",
          "kazanimCode": "OXF.EL.U25",
          "kazanimDesc": "Unit 25: Accessories konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 25: Accessories\n• **Anahtar Kelimeler:** watch, belt, hat, scarf, gloves, umbrella, glasses, ring.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "watch",
            "belt",
            "hat",
            "scarf",
            "gloves",
            "umbrella"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about watch.",
              "turkish": "watch hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt watch",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with belt?",
              "turkish": "belt ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit belt",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying hat aloud.",
              "turkish": "hat kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing hat e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u25_1",
              "front": "watch ne anlama gelir?",
              "back": "Unit 25: Accessories ünitesinin temel kelimesidir: watch.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word watch."
            },
            {
              "id": "fc_oxf_u25_2",
              "front": "belt ve hat",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use belt in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u25_1",
              "left": "watch",
              "right": "Unit 25: Accessories kavramı (watch)"
            },
            {
              "id": "m_oxf_u25_2",
              "left": "belt",
              "right": "Unit 25: Accessories kavramı (belt)"
            },
            {
              "id": "m_oxf_u25_3",
              "left": "hat",
              "right": "Unit 25: Accessories kavramı (hat)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u25_1",
              "text": "'watch' is an important vocabulary item in Unit 25: Accessories.",
              "isTrue": true,
              "explanation": "Doğru! 'watch' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u25_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "watch",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "watch",
              "hint": "watch."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u25_1",
              "question": "Which word belongs to Unit 25: Accessories?",
              "options": [
                "watch",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 25: Accessories",
              "explanation": "watch kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u26",
          "title": "Unit 26: Colours, Size and Appearance",
          "kazanimCode": "OXF.EL.U26",
          "kazanimDesc": "Unit 26: Colours, Size and Appearance konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 26: Colours, Size and Appearance\n• **Anahtar Kelimeler:** black, white, red, blue, green, small, medium, large, tight, loose.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "black",
            "white",
            "red",
            "blue",
            "green",
            "small"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about black.",
              "turkish": "black hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt black",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with white?",
              "turkish": "white ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit white",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying red aloud.",
              "turkish": "red kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing red e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u26_1",
              "front": "black ne anlama gelir?",
              "back": "Unit 26: Colours, Size and Appearance ünitesinin temel kelimesidir: black.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word black."
            },
            {
              "id": "fc_oxf_u26_2",
              "front": "white ve red",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use white in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u26_1",
              "left": "black",
              "right": "Unit 26: Colours, Size and Appearance kavramı (black)"
            },
            {
              "id": "m_oxf_u26_2",
              "left": "white",
              "right": "Unit 26: Colours, Size and Appearance kavramı (white)"
            },
            {
              "id": "m_oxf_u26_3",
              "left": "red",
              "right": "Unit 26: Colours, Size and Appearance kavramı (red)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u26_1",
              "text": "'black' is an important vocabulary item in Unit 26: Colours, Size and Appearance.",
              "isTrue": true,
              "explanation": "Doğru! 'black' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u26_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "black",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "black",
              "hint": "black."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u26_1",
              "question": "Which word belongs to Unit 26: Colours, Size and Appearance?",
              "options": [
                "black",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 26: Colours, Size and Appearance",
              "explanation": "black kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u27",
          "title": "Unit 27: Money",
          "kazanimCode": "OXF.EL.U27",
          "kazanimDesc": "Unit 27: Money konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 27: Money\n• **Anahtar Kelimeler:** coins, notes, cash, credit card, pay for, cost, spend, save.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "coins",
            "notes",
            "cash",
            "credit card",
            "pay for",
            "cost"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about coins.",
              "turkish": "coins hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt coins",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with notes?",
              "turkish": "notes ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit notes",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying cash aloud.",
              "turkish": "cash kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing cash e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u27_1",
              "front": "coins ne anlama gelir?",
              "back": "Unit 27: Money ünitesinin temel kelimesidir: coins.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word coins."
            },
            {
              "id": "fc_oxf_u27_2",
              "front": "notes ve cash",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use notes in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u27_1",
              "left": "coins",
              "right": "Unit 27: Money kavramı (coins)"
            },
            {
              "id": "m_oxf_u27_2",
              "left": "notes",
              "right": "Unit 27: Money kavramı (notes)"
            },
            {
              "id": "m_oxf_u27_3",
              "left": "cash",
              "right": "Unit 27: Money kavramı (cash)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u27_1",
              "text": "'coins' is an important vocabulary item in Unit 27: Money.",
              "isTrue": true,
              "explanation": "Doğru! 'coins' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u27_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "coins",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "coins",
              "hint": "coins."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u27_1",
              "question": "Which word belongs to Unit 27: Money?",
              "options": [
                "coins",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 27: Money",
              "explanation": "coins kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u28",
          "title": "Unit 28: Shopping",
          "kazanimCode": "OXF.EL.U28",
          "kazanimDesc": "Unit 28: Shopping konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 28: Shopping\n• **Anahtar Kelimeler:** shop assistant, customer, trolley, checkout, receipt, buy, sell.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "shop assistant",
            "customer",
            "trolley",
            "checkout",
            "receipt",
            "buy"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about shop assistant.",
              "turkish": "shop assistant hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt shop assistant",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with customer?",
              "turkish": "customer ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit customer",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying trolley aloud.",
              "turkish": "trolley kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing trolley e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u28_1",
              "front": "shop assistant ne anlama gelir?",
              "back": "Unit 28: Shopping ünitesinin temel kelimesidir: shop assistant.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word shop assistant."
            },
            {
              "id": "fc_oxf_u28_2",
              "front": "customer ve trolley",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use customer in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u28_1",
              "left": "shop assistant",
              "right": "Unit 28: Shopping kavramı (shop assistant)"
            },
            {
              "id": "m_oxf_u28_2",
              "left": "customer",
              "right": "Unit 28: Shopping kavramı (customer)"
            },
            {
              "id": "m_oxf_u28_3",
              "left": "trolley",
              "right": "Unit 28: Shopping kavramı (trolley)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u28_1",
              "text": "'shop assistant' is an important vocabulary item in Unit 28: Shopping.",
              "isTrue": true,
              "explanation": "Doğru! 'shop assistant' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u28_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "shop assistant",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "shop assistant",
              "hint": "shop assistant."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u28_1",
              "question": "Which word belongs to Unit 28: Shopping?",
              "options": [
                "shop assistant",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 28: Shopping",
              "explanation": "shop assistant kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u29",
          "title": "Unit 29: Possessions",
          "kazanimCode": "OXF.EL.U29",
          "kazanimDesc": "Unit 29: Possessions konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 29: Possessions\n• **Anahtar Kelimeler:** own, belong to, whose, my own room, lend, borrow.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "own",
            "belong to",
            "whose",
            "my own room",
            "lend",
            "borrow"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about own.",
              "turkish": "own hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt own",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with belong to?",
              "turkish": "belong to ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit belong to",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying whose aloud.",
              "turkish": "whose kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing whose e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u29_1",
              "front": "own ne anlama gelir?",
              "back": "Unit 29: Possessions ünitesinin temel kelimesidir: own.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word own."
            },
            {
              "id": "fc_oxf_u29_2",
              "front": "belong to ve whose",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use belong to in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u29_1",
              "left": "own",
              "right": "Unit 29: Possessions kavramı (own)"
            },
            {
              "id": "m_oxf_u29_2",
              "left": "belong to",
              "right": "Unit 29: Possessions kavramı (belong to)"
            },
            {
              "id": "m_oxf_u29_3",
              "left": "whose",
              "right": "Unit 29: Possessions kavramı (whose)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u29_1",
              "text": "'own' is an important vocabulary item in Unit 29: Possessions.",
              "isTrue": true,
              "explanation": "Doğru! 'own' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u29_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "own",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "own",
              "hint": "own."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u29_1",
              "question": "Which word belongs to Unit 29: Possessions?",
              "options": [
                "own",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 29: Possessions",
              "explanation": "own kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u30",
          "title": "Unit 30: Crime",
          "kazanimCode": "OXF.EL.U30",
          "kazanimDesc": "Unit 30: Crime konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 30: Crime\n• **Anahtar Kelimeler:** steal, thief, police officer, arrest, prison, break into.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "steal",
            "thief",
            "police officer",
            "arrest",
            "prison",
            "break into"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about steal.",
              "turkish": "steal hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt steal",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with thief?",
              "turkish": "thief ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit thief",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying police officer aloud.",
              "turkish": "police officer kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing police officer e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u30_1",
              "front": "steal ne anlama gelir?",
              "back": "Unit 30: Crime ünitesinin temel kelimesidir: steal.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word steal."
            },
            {
              "id": "fc_oxf_u30_2",
              "front": "thief ve police officer",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use thief in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u30_1",
              "left": "steal",
              "right": "Unit 30: Crime kavramı (steal)"
            },
            {
              "id": "m_oxf_u30_2",
              "left": "thief",
              "right": "Unit 30: Crime kavramı (thief)"
            },
            {
              "id": "m_oxf_u30_3",
              "left": "police officer",
              "right": "Unit 30: Crime kavramı (police officer)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u30_1",
              "text": "'steal' is an important vocabulary item in Unit 30: Crime.",
              "isTrue": true,
              "explanation": "Doğru! 'steal' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u30_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "steal",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "steal",
              "hint": "steal."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u30_1",
              "question": "Which word belongs to Unit 30: Crime?",
              "options": [
                "steal",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 30: Crime",
              "explanation": "steal kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u31",
          "title": "Unit 31: Illness",
          "kazanimCode": "OXF.EL.U31",
          "kazanimDesc": "Unit 31: Illness konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 31: Illness\n• **Anahtar Kelimeler:** headache, stomach ache, cough, cold, fever, flu, see a doctor.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "headache",
            "stomach ache",
            "cough",
            "cold",
            "fever",
            "flu"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about headache.",
              "turkish": "headache hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt headache",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with stomach ache?",
              "turkish": "stomach ache ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit stomach ache",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying cough aloud.",
              "turkish": "cough kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing cough e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u31_1",
              "front": "headache ne anlama gelir?",
              "back": "Unit 31: Illness ünitesinin temel kelimesidir: headache.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word headache."
            },
            {
              "id": "fc_oxf_u31_2",
              "front": "stomach ache ve cough",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use stomach ache in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u31_1",
              "left": "headache",
              "right": "Unit 31: Illness kavramı (headache)"
            },
            {
              "id": "m_oxf_u31_2",
              "left": "stomach ache",
              "right": "Unit 31: Illness kavramı (stomach ache)"
            },
            {
              "id": "m_oxf_u31_3",
              "left": "cough",
              "right": "Unit 31: Illness kavramı (cough)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u31_1",
              "text": "'headache' is an important vocabulary item in Unit 31: Illness.",
              "isTrue": true,
              "explanation": "Doğru! 'headache' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u31_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "headache",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "headache",
              "hint": "headache."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u31_1",
              "question": "Which word belongs to Unit 31: Illness?",
              "options": [
                "headache",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 31: Illness",
              "explanation": "headache kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u32",
          "title": "Unit 32: Injuries",
          "kazanimCode": "OXF.EL.U32",
          "kazanimDesc": "Unit 32: Injuries konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 32: Injuries\n• **Anahtar Kelimeler:** cut, burn, break, bleed, bandage, plaster, hospital.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "cut",
            "burn",
            "break",
            "bleed",
            "bandage",
            "plaster"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about cut.",
              "turkish": "cut hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt cut",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with burn?",
              "turkish": "burn ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit burn",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying break aloud.",
              "turkish": "break kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing break e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u32_1",
              "front": "cut ne anlama gelir?",
              "back": "Unit 32: Injuries ünitesinin temel kelimesidir: cut.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word cut."
            },
            {
              "id": "fc_oxf_u32_2",
              "front": "burn ve break",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use burn in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u32_1",
              "left": "cut",
              "right": "Unit 32: Injuries kavramı (cut)"
            },
            {
              "id": "m_oxf_u32_2",
              "left": "burn",
              "right": "Unit 32: Injuries kavramı (burn)"
            },
            {
              "id": "m_oxf_u32_3",
              "left": "break",
              "right": "Unit 32: Injuries kavramı (break)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u32_1",
              "text": "'cut' is an important vocabulary item in Unit 32: Injuries.",
              "isTrue": true,
              "explanation": "Doğru! 'cut' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u32_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "cut",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "cut",
              "hint": "cut."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u32_1",
              "question": "Which word belongs to Unit 32: Injuries?",
              "options": [
                "cut",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 32: Injuries",
              "explanation": "cut kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_6",
      "unitNumber": 6,
      "title": "Module 6: The World Around Us (Çevremizdeki Dünya)",
      "description": "Oxford Word Skills Elementary: Module 6: The World Around Us (Çevremizdeki Dünya)",
      "topics": [
        {
          "id": "oxf_u33",
          "title": "Unit 33: Geography",
          "kazanimCode": "OXF.EL.U33",
          "kazanimDesc": "Unit 33: Geography konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 33: Geography\n• **Anahtar Kelimeler:** mountain, river, lake, sea, ocean, island, forest, desert.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "mountain",
            "river",
            "lake",
            "sea",
            "ocean",
            "island"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about mountain.",
              "turkish": "mountain hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt mountain",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with river?",
              "turkish": "river ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit river",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying lake aloud.",
              "turkish": "lake kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing lake e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u33_1",
              "front": "mountain ne anlama gelir?",
              "back": "Unit 33: Geography ünitesinin temel kelimesidir: mountain.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word mountain."
            },
            {
              "id": "fc_oxf_u33_2",
              "front": "river ve lake",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use river in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u33_1",
              "left": "mountain",
              "right": "Unit 33: Geography kavramı (mountain)"
            },
            {
              "id": "m_oxf_u33_2",
              "left": "river",
              "right": "Unit 33: Geography kavramı (river)"
            },
            {
              "id": "m_oxf_u33_3",
              "left": "lake",
              "right": "Unit 33: Geography kavramı (lake)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u33_1",
              "text": "'mountain' is an important vocabulary item in Unit 33: Geography.",
              "isTrue": true,
              "explanation": "Doğru! 'mountain' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u33_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "mountain",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "mountain",
              "hint": "mountain."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u33_1",
              "question": "Which word belongs to Unit 33: Geography?",
              "options": [
                "mountain",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 33: Geography",
              "explanation": "mountain kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u34",
          "title": "Unit 34: The Environment",
          "kazanimCode": "OXF.EL.U34",
          "kazanimDesc": "Unit 34: The Environment konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 34: The Environment\n• **Anahtar Kelimeler:** pollution, recycle, protect nature, climate change, rubbish.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "pollution",
            "recycle",
            "protect nature",
            "climate change",
            "rubbish"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about pollution.",
              "turkish": "pollution hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt pollution",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with recycle?",
              "turkish": "recycle ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit recycle",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying protect nature aloud.",
              "turkish": "protect nature kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing protect nature e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u34_1",
              "front": "pollution ne anlama gelir?",
              "back": "Unit 34: The Environment ünitesinin temel kelimesidir: pollution.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word pollution."
            },
            {
              "id": "fc_oxf_u34_2",
              "front": "recycle ve protect nature",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use recycle in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u34_1",
              "left": "pollution",
              "right": "Unit 34: The Environment kavramı (pollution)"
            },
            {
              "id": "m_oxf_u34_2",
              "left": "recycle",
              "right": "Unit 34: The Environment kavramı (recycle)"
            },
            {
              "id": "m_oxf_u34_3",
              "left": "protect nature",
              "right": "Unit 34: The Environment kavramı (protect nature)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u34_1",
              "text": "'pollution' is an important vocabulary item in Unit 34: The Environment.",
              "isTrue": true,
              "explanation": "Doğru! 'pollution' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u34_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "pollution",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "pollution",
              "hint": "pollution."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u34_1",
              "question": "Which word belongs to Unit 34: The Environment?",
              "options": [
                "pollution",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 34: The Environment",
              "explanation": "pollution kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u35",
          "title": "Unit 35: Countries and Nationalities",
          "kazanimCode": "OXF.EL.U35",
          "kazanimDesc": "Unit 35: Countries and Nationalities konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 35: Countries and Nationalities\n• **Anahtar Kelimeler:** Türkiye/Turkish, England/English, France/French, Germany/German, Spain/Spanish.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "Türkiye/Turkish",
            "England/English",
            "France/French",
            "Germany/German",
            "Spain/Spanish"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about Türkiye/Turkish.",
              "turkish": "Türkiye/Turkish hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt Türkiye/Turkish",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with England/English?",
              "turkish": "England/English ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit England/English",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying France/French aloud.",
              "turkish": "France/French kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing France/French e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u35_1",
              "front": "Türkiye/Turkish ne anlama gelir?",
              "back": "Unit 35: Countries and Nationalities ünitesinin temel kelimesidir: Türkiye/Turkish.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word Türkiye/Turkish."
            },
            {
              "id": "fc_oxf_u35_2",
              "front": "England/English ve France/French",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use England/English in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u35_1",
              "left": "Türkiye/Turkish",
              "right": "Unit 35: Countries and Nationalities kavramı (Türkiye/Turkish)"
            },
            {
              "id": "m_oxf_u35_2",
              "left": "England/English",
              "right": "Unit 35: Countries and Nationalities kavramı (England/English)"
            },
            {
              "id": "m_oxf_u35_3",
              "left": "France/French",
              "right": "Unit 35: Countries and Nationalities kavramı (France/French)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u35_1",
              "text": "'Türkiye/Turkish' is an important vocabulary item in Unit 35: Countries and Nationalities.",
              "isTrue": true,
              "explanation": "Doğru! 'Türkiye/Turkish' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u35_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "Türkiye/Turkish",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "Türkiye/Turkish",
              "hint": "Türkiye/Turkish."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u35_1",
              "question": "Which word belongs to Unit 35: Countries and Nationalities?",
              "options": [
                "Türkiye/Turkish",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 35: Countries and Nationalities",
              "explanation": "Türkiye/Turkish kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u36",
          "title": "Unit 36: My Country",
          "kazanimCode": "OXF.EL.U36",
          "kazanimDesc": "Unit 36: My Country konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 36: My Country\n• **Anahtar Kelimeler:** capital city, population, flag, language, borders, traditional food.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "capital city",
            "population",
            "flag",
            "language",
            "borders",
            "traditional food"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about capital city.",
              "turkish": "capital city hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt capital city",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with population?",
              "turkish": "population ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit population",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying flag aloud.",
              "turkish": "flag kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing flag e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u36_1",
              "front": "capital city ne anlama gelir?",
              "back": "Unit 36: My Country ünitesinin temel kelimesidir: capital city.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word capital city."
            },
            {
              "id": "fc_oxf_u36_2",
              "front": "population ve flag",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use population in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u36_1",
              "left": "capital city",
              "right": "Unit 36: My Country kavramı (capital city)"
            },
            {
              "id": "m_oxf_u36_2",
              "left": "population",
              "right": "Unit 36: My Country kavramı (population)"
            },
            {
              "id": "m_oxf_u36_3",
              "left": "flag",
              "right": "Unit 36: My Country kavramı (flag)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u36_1",
              "text": "'capital city' is an important vocabulary item in Unit 36: My Country.",
              "isTrue": true,
              "explanation": "Doğru! 'capital city' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u36_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "capital city",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "capital city",
              "hint": "capital city."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u36_1",
              "question": "Which word belongs to Unit 36: My Country?",
              "options": [
                "capital city",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 36: My Country",
              "explanation": "capital city kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u37",
          "title": "Unit 37: Weather",
          "kazanimCode": "OXF.EL.U37",
          "kazanimDesc": "Unit 37: Weather konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 37: Weather\n• **Anahtar Kelimeler:** sunny, rainy, windy, snowy, cloudy, foggy, warm, cold, degrees.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "sunny",
            "rainy",
            "windy",
            "snowy",
            "cloudy",
            "foggy"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about sunny.",
              "turkish": "sunny hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt sunny",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with rainy?",
              "turkish": "rainy ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit rainy",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying windy aloud.",
              "turkish": "windy kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing windy e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u37_1",
              "front": "sunny ne anlama gelir?",
              "back": "Unit 37: Weather ünitesinin temel kelimesidir: sunny.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word sunny."
            },
            {
              "id": "fc_oxf_u37_2",
              "front": "rainy ve windy",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use rainy in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u37_1",
              "left": "sunny",
              "right": "Unit 37: Weather kavramı (sunny)"
            },
            {
              "id": "m_oxf_u37_2",
              "left": "rainy",
              "right": "Unit 37: Weather kavramı (rainy)"
            },
            {
              "id": "m_oxf_u37_3",
              "left": "windy",
              "right": "Unit 37: Weather kavramı (windy)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u37_1",
              "text": "'sunny' is an important vocabulary item in Unit 37: Weather.",
              "isTrue": true,
              "explanation": "Doğru! 'sunny' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u37_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "sunny",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "sunny",
              "hint": "sunny."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u37_1",
              "question": "Which word belongs to Unit 37: Weather?",
              "options": [
                "sunny",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 37: Weather",
              "explanation": "sunny kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u38",
          "title": "Unit 38: Animals, Insects and Birds",
          "kazanimCode": "OXF.EL.U38",
          "kazanimDesc": "Unit 38: Animals, Insects and Birds konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 38: Animals, Insects and Birds\n• **Anahtar Kelimeler:** lion, elephant, dog, cat, horse, bird, eagle, bee, butterfly, spider.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "lion",
            "elephant",
            "dog",
            "cat",
            "horse",
            "bird"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about lion.",
              "turkish": "lion hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt lion",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with elephant?",
              "turkish": "elephant ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit elephant",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying dog aloud.",
              "turkish": "dog kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing dog e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u38_1",
              "front": "lion ne anlama gelir?",
              "back": "Unit 38: Animals, Insects and Birds ünitesinin temel kelimesidir: lion.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word lion."
            },
            {
              "id": "fc_oxf_u38_2",
              "front": "elephant ve dog",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use elephant in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u38_1",
              "left": "lion",
              "right": "Unit 38: Animals, Insects and Birds kavramı (lion)"
            },
            {
              "id": "m_oxf_u38_2",
              "left": "elephant",
              "right": "Unit 38: Animals, Insects and Birds kavramı (elephant)"
            },
            {
              "id": "m_oxf_u38_3",
              "left": "dog",
              "right": "Unit 38: Animals, Insects and Birds kavramı (dog)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u38_1",
              "text": "'lion' is an important vocabulary item in Unit 38: Animals, Insects and Birds.",
              "isTrue": true,
              "explanation": "Doğru! 'lion' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u38_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "lion",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "lion",
              "hint": "lion."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u38_1",
              "question": "Which word belongs to Unit 38: Animals, Insects and Birds?",
              "options": [
                "lion",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 38: Animals, Insects and Birds",
              "explanation": "lion kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_7",
      "unitNumber": 7,
      "title": "Module 7: Language Section 2 - Verbs (Fiil Kullanımları)",
      "description": "Oxford Word Skills Elementary: Module 7: Language Section 2 - Verbs (Fiil Kullanımları)",
      "topics": [
        {
          "id": "oxf_u39",
          "title": "Unit 39: Irregular Verbs",
          "kazanimCode": "OXF.EL.U39",
          "kazanimDesc": "Unit 39: Irregular Verbs konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 39: Irregular Verbs\n• **Anahtar Kelimeler:** go/went, see/saw, buy/bought, take/took, give/gave, eat/ate, drink/drank.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "go/went",
            "see/saw",
            "buy/bought",
            "take/took",
            "give/gave",
            "eat/ate"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about go/went.",
              "turkish": "go/went hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt go/went",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with see/saw?",
              "turkish": "see/saw ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit see/saw",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying buy/bought aloud.",
              "turkish": "buy/bought kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing buy/bought e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u39_1",
              "front": "go/went ne anlama gelir?",
              "back": "Unit 39: Irregular Verbs ünitesinin temel kelimesidir: go/went.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word go/went."
            },
            {
              "id": "fc_oxf_u39_2",
              "front": "see/saw ve buy/bought",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use see/saw in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u39_1",
              "left": "go/went",
              "right": "Unit 39: Irregular Verbs kavramı (go/went)"
            },
            {
              "id": "m_oxf_u39_2",
              "left": "see/saw",
              "right": "Unit 39: Irregular Verbs kavramı (see/saw)"
            },
            {
              "id": "m_oxf_u39_3",
              "left": "buy/bought",
              "right": "Unit 39: Irregular Verbs kavramı (buy/bought)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u39_1",
              "text": "'go/went' is an important vocabulary item in Unit 39: Irregular Verbs.",
              "isTrue": true,
              "explanation": "Doğru! 'go/went' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u39_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "go/went",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "go/went",
              "hint": "go/went."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u39_1",
              "question": "Which word belongs to Unit 39: Irregular Verbs?",
              "options": [
                "go/went",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 39: Irregular Verbs",
              "explanation": "go/went kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u40",
          "title": "Unit 40: Have Got and Have",
          "kazanimCode": "OXF.EL.U40",
          "kazanimDesc": "Unit 40: Have Got and Have konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 40: Have Got and Have\n• **Anahtar Kelimeler:** have got a car, have lunch, have a rest, have fun.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "have got a car",
            "have lunch",
            "have a rest",
            "have fun"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about have got a car.",
              "turkish": "have got a car hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt have got a car",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with have lunch?",
              "turkish": "have lunch ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit have lunch",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying have a rest aloud.",
              "turkish": "have a rest kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing have a rest e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u40_1",
              "front": "have got a car ne anlama gelir?",
              "back": "Unit 40: Have Got and Have ünitesinin temel kelimesidir: have got a car.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word have got a car."
            },
            {
              "id": "fc_oxf_u40_2",
              "front": "have lunch ve have a rest",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use have lunch in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u40_1",
              "left": "have got a car",
              "right": "Unit 40: Have Got and Have kavramı (have got a car)"
            },
            {
              "id": "m_oxf_u40_2",
              "left": "have lunch",
              "right": "Unit 40: Have Got and Have kavramı (have lunch)"
            },
            {
              "id": "m_oxf_u40_3",
              "left": "have a rest",
              "right": "Unit 40: Have Got and Have kavramı (have a rest)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u40_1",
              "text": "'have got a car' is an important vocabulary item in Unit 40: Have Got and Have.",
              "isTrue": true,
              "explanation": "Doğru! 'have got a car' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u40_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "have got a car",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "have got a car",
              "hint": "have got a car."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u40_1",
              "question": "Which word belongs to Unit 40: Have Got and Have?",
              "options": [
                "have got a car",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 40: Have Got and Have",
              "explanation": "have got a car kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u41",
          "title": "Unit 41: Make or Do",
          "kazanimCode": "OXF.EL.U41",
          "kazanimDesc": "Unit 41: Make or Do konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 41: Make or Do\n• **Anahtar Kelimeler:** make breakfast, make a mistake, do homework, do housework, do sport.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "make breakfast",
            "make a mistake",
            "do homework",
            "do housework",
            "do sport"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about make breakfast.",
              "turkish": "make breakfast hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt make breakfast",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with make a mistake?",
              "turkish": "make a mistake ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit make a mistake",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying do homework aloud.",
              "turkish": "do homework kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing do homework e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u41_1",
              "front": "make breakfast ne anlama gelir?",
              "back": "Unit 41: Make or Do ünitesinin temel kelimesidir: make breakfast.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word make breakfast."
            },
            {
              "id": "fc_oxf_u41_2",
              "front": "make a mistake ve do homework",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use make a mistake in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u41_1",
              "left": "make breakfast",
              "right": "Unit 41: Make or Do kavramı (make breakfast)"
            },
            {
              "id": "m_oxf_u41_2",
              "left": "make a mistake",
              "right": "Unit 41: Make or Do kavramı (make a mistake)"
            },
            {
              "id": "m_oxf_u41_3",
              "left": "do homework",
              "right": "Unit 41: Make or Do kavramı (do homework)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u41_1",
              "text": "'make breakfast' is an important vocabulary item in Unit 41: Make or Do.",
              "isTrue": true,
              "explanation": "Doğru! 'make breakfast' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u41_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "make breakfast",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "make breakfast",
              "hint": "make breakfast."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u41_1",
              "question": "Which word belongs to Unit 41: Make or Do?",
              "options": [
                "make breakfast",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 41: Make or Do",
              "explanation": "make breakfast kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u42",
          "title": "Unit 42: Get",
          "kazanimCode": "OXF.EL.U42",
          "kazanimDesc": "Unit 42: Get konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 42: Get\n• **Anahtar Kelimeler:** get cold (become), get an email (receive), get home (arrive), get on a bus.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "get cold (become)",
            "get an email (receive)",
            "get home (arrive)",
            "get on a bus"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about get cold (become).",
              "turkish": "get cold (become) hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt get cold (become)",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with get an email (receive)?",
              "turkish": "get an email (receive) ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit get an email (receive)",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying get home (arrive) aloud.",
              "turkish": "get home (arrive) kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing get home (arrive) e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u42_1",
              "front": "get cold (become) ne anlama gelir?",
              "back": "Unit 42: Get ünitesinin temel kelimesidir: get cold (become).",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word get cold (become)."
            },
            {
              "id": "fc_oxf_u42_2",
              "front": "get an email (receive) ve get home (arrive)",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use get an email (receive) in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u42_1",
              "left": "get cold (become)",
              "right": "Unit 42: Get kavramı (get cold (become))"
            },
            {
              "id": "m_oxf_u42_2",
              "left": "get an email (receive)",
              "right": "Unit 42: Get kavramı (get an email (receive))"
            },
            {
              "id": "m_oxf_u42_3",
              "left": "get home (arrive)",
              "right": "Unit 42: Get kavramı (get home (arrive))"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u42_1",
              "text": "'get cold (become)' is an important vocabulary item in Unit 42: Get.",
              "isTrue": true,
              "explanation": "Doğru! 'get cold (become)' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u42_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "get cold (become)",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "get cold (become)",
              "hint": "get cold (become)."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u42_1",
              "question": "Which word belongs to Unit 42: Get?",
              "options": [
                "get cold (become)",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 42: Get",
              "explanation": "get cold (become) kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u43",
          "title": "Unit 43: See",
          "kazanimCode": "OXF.EL.U43",
          "kazanimDesc": "Unit 43: See konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 43: See\n• **Anahtar Kelimeler:** see a movie, see a doctor, I see (understand), see you soon.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "see a movie",
            "see a doctor",
            "I see (understand)",
            "see you soon"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about see a movie.",
              "turkish": "see a movie hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt see a movie",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with see a doctor?",
              "turkish": "see a doctor ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit see a doctor",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying I see (understand) aloud.",
              "turkish": "I see (understand) kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing I see (understand) e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u43_1",
              "front": "see a movie ne anlama gelir?",
              "back": "Unit 43: See ünitesinin temel kelimesidir: see a movie.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word see a movie."
            },
            {
              "id": "fc_oxf_u43_2",
              "front": "see a doctor ve I see (understand)",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use see a doctor in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u43_1",
              "left": "see a movie",
              "right": "Unit 43: See kavramı (see a movie)"
            },
            {
              "id": "m_oxf_u43_2",
              "left": "see a doctor",
              "right": "Unit 43: See kavramı (see a doctor)"
            },
            {
              "id": "m_oxf_u43_3",
              "left": "I see (understand)",
              "right": "Unit 43: See kavramı (I see (understand))"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u43_1",
              "text": "'see a movie' is an important vocabulary item in Unit 43: See.",
              "isTrue": true,
              "explanation": "Doğru! 'see a movie' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u43_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "see a movie",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "see a movie",
              "hint": "see a movie."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u43_1",
              "question": "Which word belongs to Unit 43: See?",
              "options": [
                "see a movie",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 43: See",
              "explanation": "see a movie kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u44",
          "title": "Unit 44: Verbs and Nouns with Same Form",
          "kazanimCode": "OXF.EL.U44",
          "kazanimDesc": "Unit 44: Verbs and Nouns with Same Form konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 44: Verbs and Nouns with Same Form\n• **Anahtar Kelimeler:** a walk / to walk, a drink / to drink, a look / to look, a call / to call.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "a walk / to walk",
            "a drink / to drink",
            "a look / to look",
            "a call / to call"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about a walk / to walk.",
              "turkish": "a walk / to walk hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt a walk / to walk",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with a drink / to drink?",
              "turkish": "a drink / to drink ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit a drink / to drink",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying a look / to look aloud.",
              "turkish": "a look / to look kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing a look / to look e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u44_1",
              "front": "a walk / to walk ne anlama gelir?",
              "back": "Unit 44: Verbs and Nouns with Same Form ünitesinin temel kelimesidir: a walk / to walk.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word a walk / to walk."
            },
            {
              "id": "fc_oxf_u44_2",
              "front": "a drink / to drink ve a look / to look",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use a drink / to drink in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u44_1",
              "left": "a walk / to walk",
              "right": "Unit 44: Verbs and Nouns with Same Form kavramı (a walk / to walk)"
            },
            {
              "id": "m_oxf_u44_2",
              "left": "a drink / to drink",
              "right": "Unit 44: Verbs and Nouns with Same Form kavramı (a drink / to drink)"
            },
            {
              "id": "m_oxf_u44_3",
              "left": "a look / to look",
              "right": "Unit 44: Verbs and Nouns with Same Form kavramı (a look / to look)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u44_1",
              "text": "'a walk / to walk' is an important vocabulary item in Unit 44: Verbs and Nouns with Same Form.",
              "isTrue": true,
              "explanation": "Doğru! 'a walk / to walk' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u44_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "a walk / to walk",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "a walk / to walk",
              "hint": "a walk / to walk."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u44_1",
              "question": "Which word belongs to Unit 44: Verbs and Nouns with Same Form?",
              "options": [
                "a walk / to walk",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 44: Verbs and Nouns with Same Form",
              "explanation": "a walk / to walk kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_8",
      "unitNumber": 8,
      "title": "Module 8: Food and Drink (Yiyecek ve İçecekler)",
      "description": "Oxford Word Skills Elementary: Module 8: Food and Drink (Yiyecek ve İçecekler)",
      "topics": [
        {
          "id": "oxf_u45",
          "title": "Unit 45: Shopping for Food",
          "kazanimCode": "OXF.EL.U45",
          "kazanimDesc": "Unit 45: Shopping for Food konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 45: Shopping for Food\n• **Anahtar Kelimeler:** loaf of bread, bottle of water, packet of biscuits, tin of tuna, can of cola, jar of jam.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "loaf of bread",
            "bottle of water",
            "packet of biscuits",
            "tin of tuna",
            "can of cola",
            "jar of jam"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about loaf of bread.",
              "turkish": "loaf of bread hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt loaf of bread",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with bottle of water?",
              "turkish": "bottle of water ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit bottle of water",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying packet of biscuits aloud.",
              "turkish": "packet of biscuits kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing packet of biscuits e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u45_1",
              "front": "loaf of bread ne anlama gelir?",
              "back": "Unit 45: Shopping for Food ünitesinin temel kelimesidir: loaf of bread.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word loaf of bread."
            },
            {
              "id": "fc_oxf_u45_2",
              "front": "bottle of water ve packet of biscuits",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use bottle of water in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u45_1",
              "left": "loaf of bread",
              "right": "Unit 45: Shopping for Food kavramı (loaf of bread)"
            },
            {
              "id": "m_oxf_u45_2",
              "left": "bottle of water",
              "right": "Unit 45: Shopping for Food kavramı (bottle of water)"
            },
            {
              "id": "m_oxf_u45_3",
              "left": "packet of biscuits",
              "right": "Unit 45: Shopping for Food kavramı (packet of biscuits)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u45_1",
              "text": "'loaf of bread' is an important vocabulary item in Unit 45: Shopping for Food.",
              "isTrue": true,
              "explanation": "Doğru! 'loaf of bread' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u45_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "loaf of bread",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "loaf of bread",
              "hint": "loaf of bread."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u45_1",
              "question": "Which word belongs to Unit 45: Shopping for Food?",
              "options": [
                "loaf of bread",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 45: Shopping for Food",
              "explanation": "loaf of bread kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u46",
          "title": "Unit 46: Fruit and Vegetables",
          "kazanimCode": "OXF.EL.U46",
          "kazanimDesc": "Unit 46: Fruit and Vegetables konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 46: Fruit and Vegetables\n• **Anahtar Kelimeler:** apple, banana, orange, strawberry, carrot, onion, potato, tomato, cucumber.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "apple",
            "banana",
            "orange",
            "strawberry",
            "carrot",
            "onion"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about apple.",
              "turkish": "apple hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt apple",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with banana?",
              "turkish": "banana ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit banana",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying orange aloud.",
              "turkish": "orange kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing orange e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u46_1",
              "front": "apple ne anlama gelir?",
              "back": "Unit 46: Fruit and Vegetables ünitesinin temel kelimesidir: apple.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word apple."
            },
            {
              "id": "fc_oxf_u46_2",
              "front": "banana ve orange",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use banana in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u46_1",
              "left": "apple",
              "right": "Unit 46: Fruit and Vegetables kavramı (apple)"
            },
            {
              "id": "m_oxf_u46_2",
              "left": "banana",
              "right": "Unit 46: Fruit and Vegetables kavramı (banana)"
            },
            {
              "id": "m_oxf_u46_3",
              "left": "orange",
              "right": "Unit 46: Fruit and Vegetables kavramı (orange)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u46_1",
              "text": "'apple' is an important vocabulary item in Unit 46: Fruit and Vegetables.",
              "isTrue": true,
              "explanation": "Doğru! 'apple' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u46_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "apple",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "apple",
              "hint": "apple."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u46_1",
              "question": "Which word belongs to Unit 46: Fruit and Vegetables?",
              "options": [
                "apple",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 46: Fruit and Vegetables",
              "explanation": "apple kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u47",
          "title": "Unit 47: Meat and Fish",
          "kazanimCode": "OXF.EL.U47",
          "kazanimDesc": "Unit 47: Meat and Fish konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 47: Meat and Fish\n• **Anahtar Kelimeler:** chicken, beef, lamb, fish, salmon, vegetarian, fresh.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "chicken",
            "beef",
            "lamb",
            "fish",
            "salmon",
            "vegetarian"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about chicken.",
              "turkish": "chicken hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt chicken",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with beef?",
              "turkish": "beef ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit beef",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying lamb aloud.",
              "turkish": "lamb kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing lamb e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u47_1",
              "front": "chicken ne anlama gelir?",
              "back": "Unit 47: Meat and Fish ünitesinin temel kelimesidir: chicken.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word chicken."
            },
            {
              "id": "fc_oxf_u47_2",
              "front": "beef ve lamb",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use beef in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u47_1",
              "left": "chicken",
              "right": "Unit 47: Meat and Fish kavramı (chicken)"
            },
            {
              "id": "m_oxf_u47_2",
              "left": "beef",
              "right": "Unit 47: Meat and Fish kavramı (beef)"
            },
            {
              "id": "m_oxf_u47_3",
              "left": "lamb",
              "right": "Unit 47: Meat and Fish kavramı (lamb)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u47_1",
              "text": "'chicken' is an important vocabulary item in Unit 47: Meat and Fish.",
              "isTrue": true,
              "explanation": "Doğru! 'chicken' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u47_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "chicken",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "chicken",
              "hint": "chicken."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u47_1",
              "question": "Which word belongs to Unit 47: Meat and Fish?",
              "options": [
                "chicken",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 47: Meat and Fish",
              "explanation": "chicken kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u48",
          "title": "Unit 48: A Restaurant Table",
          "kazanimCode": "OXF.EL.U48",
          "kazanimDesc": "Unit 48: A Restaurant Table konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 48: A Restaurant Table\n• **Anahtar Kelimeler:** knife, fork, spoon, plate, glass, napkin, menu.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "knife",
            "fork",
            "spoon",
            "plate",
            "glass",
            "napkin"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about knife.",
              "turkish": "knife hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt knife",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with fork?",
              "turkish": "fork ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit fork",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying spoon aloud.",
              "turkish": "spoon kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing spoon e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u48_1",
              "front": "knife ne anlama gelir?",
              "back": "Unit 48: A Restaurant Table ünitesinin temel kelimesidir: knife.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word knife."
            },
            {
              "id": "fc_oxf_u48_2",
              "front": "fork ve spoon",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use fork in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u48_1",
              "left": "knife",
              "right": "Unit 48: A Restaurant Table kavramı (knife)"
            },
            {
              "id": "m_oxf_u48_2",
              "left": "fork",
              "right": "Unit 48: A Restaurant Table kavramı (fork)"
            },
            {
              "id": "m_oxf_u48_3",
              "left": "spoon",
              "right": "Unit 48: A Restaurant Table kavramı (spoon)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u48_1",
              "text": "'knife' is an important vocabulary item in Unit 48: A Restaurant Table.",
              "isTrue": true,
              "explanation": "Doğru! 'knife' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u48_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "knife",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "knife",
              "hint": "knife."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u48_1",
              "question": "Which word belongs to Unit 48: A Restaurant Table?",
              "options": [
                "knife",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 48: A Restaurant Table",
              "explanation": "knife kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u49",
          "title": "Unit 49: Eating in a Restaurant",
          "kazanimCode": "OXF.EL.U49",
          "kazanimDesc": "Unit 49: Eating in a Restaurant konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 49: Eating in a Restaurant\n• **Anahtar Kelimeler:** order, waiter, bill, tip, dessert, delicious, main course.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "order",
            "waiter",
            "bill",
            "tip",
            "dessert",
            "delicious"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about order.",
              "turkish": "order hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt order",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with waiter?",
              "turkish": "waiter ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit waiter",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying bill aloud.",
              "turkish": "bill kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing bill e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u49_1",
              "front": "order ne anlama gelir?",
              "back": "Unit 49: Eating in a Restaurant ünitesinin temel kelimesidir: order.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word order."
            },
            {
              "id": "fc_oxf_u49_2",
              "front": "waiter ve bill",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use waiter in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u49_1",
              "left": "order",
              "right": "Unit 49: Eating in a Restaurant kavramı (order)"
            },
            {
              "id": "m_oxf_u49_2",
              "left": "waiter",
              "right": "Unit 49: Eating in a Restaurant kavramı (waiter)"
            },
            {
              "id": "m_oxf_u49_3",
              "left": "bill",
              "right": "Unit 49: Eating in a Restaurant kavramı (bill)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u49_1",
              "text": "'order' is an important vocabulary item in Unit 49: Eating in a Restaurant.",
              "isTrue": true,
              "explanation": "Doğru! 'order' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u49_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "order",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "order",
              "hint": "order."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u49_1",
              "question": "Which word belongs to Unit 49: Eating in a Restaurant?",
              "options": [
                "order",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 49: Eating in a Restaurant",
              "explanation": "order kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u50",
          "title": "Unit 50: In a Café",
          "kazanimCode": "OXF.EL.U50",
          "kazanimDesc": "Unit 50: In a Café konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 50: In a Café\n• **Anahtar Kelimeler:** coffee, tea, sandwich, cake, hot chocolate, takeaway.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "coffee",
            "tea",
            "sandwich",
            "cake",
            "hot chocolate",
            "takeaway"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about coffee.",
              "turkish": "coffee hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt coffee",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with tea?",
              "turkish": "tea ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit tea",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying sandwich aloud.",
              "turkish": "sandwich kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing sandwich e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u50_1",
              "front": "coffee ne anlama gelir?",
              "back": "Unit 50: In a Café ünitesinin temel kelimesidir: coffee.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word coffee."
            },
            {
              "id": "fc_oxf_u50_2",
              "front": "tea ve sandwich",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use tea in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u50_1",
              "left": "coffee",
              "right": "Unit 50: In a Café kavramı (coffee)"
            },
            {
              "id": "m_oxf_u50_2",
              "left": "tea",
              "right": "Unit 50: In a Café kavramı (tea)"
            },
            {
              "id": "m_oxf_u50_3",
              "left": "sandwich",
              "right": "Unit 50: In a Café kavramı (sandwich)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u50_1",
              "text": "'coffee' is an important vocabulary item in Unit 50: In a Café.",
              "isTrue": true,
              "explanation": "Doğru! 'coffee' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u50_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "coffee",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "coffee",
              "hint": "coffee."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u50_1",
              "question": "Which word belongs to Unit 50: In a Café?",
              "options": [
                "coffee",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 50: In a Café",
              "explanation": "coffee kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_9",
      "unitNumber": 9,
      "title": "Module 9: Getting Around (Ulaşım ve Seyahat)",
      "description": "Oxford Word Skills Elementary: Module 9: Getting Around (Ulaşım ve Seyahat)",
      "topics": [
        {
          "id": "oxf_u51",
          "title": "Unit 51: Vehicles and Roads",
          "kazanimCode": "OXF.EL.U51",
          "kazanimDesc": "Unit 51: Vehicles and Roads konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 51: Vehicles and Roads\n• **Anahtar Kelimeler:** car, bus, train, plane, bicycle, traffic lights, pavement, pedestrian.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "car",
            "bus",
            "train",
            "plane",
            "bicycle",
            "traffic lights"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about car.",
              "turkish": "car hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt car",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with bus?",
              "turkish": "bus ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit bus",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying train aloud.",
              "turkish": "train kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing train e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u51_1",
              "front": "car ne anlama gelir?",
              "back": "Unit 51: Vehicles and Roads ünitesinin temel kelimesidir: car.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word car."
            },
            {
              "id": "fc_oxf_u51_2",
              "front": "bus ve train",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use bus in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u51_1",
              "left": "car",
              "right": "Unit 51: Vehicles and Roads kavramı (car)"
            },
            {
              "id": "m_oxf_u51_2",
              "left": "bus",
              "right": "Unit 51: Vehicles and Roads kavramı (bus)"
            },
            {
              "id": "m_oxf_u51_3",
              "left": "train",
              "right": "Unit 51: Vehicles and Roads kavramı (train)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u51_1",
              "text": "'car' is an important vocabulary item in Unit 51: Vehicles and Roads.",
              "isTrue": true,
              "explanation": "Doğru! 'car' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u51_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "car",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "car",
              "hint": "car."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u51_1",
              "question": "Which word belongs to Unit 51: Vehicles and Roads?",
              "options": [
                "car",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 51: Vehicles and Roads",
              "explanation": "car kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u52",
          "title": "Unit 52: Buses",
          "kazanimCode": "OXF.EL.U52",
          "kazanimDesc": "Unit 52: Buses konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 52: Buses\n• **Anahtar Kelimeler:** bus stop, bus driver, ticket, timetable, catch a bus, miss the bus.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "bus stop",
            "bus driver",
            "ticket",
            "timetable",
            "catch a bus",
            "miss the bus"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about bus stop.",
              "turkish": "bus stop hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt bus stop",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with bus driver?",
              "turkish": "bus driver ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit bus driver",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying ticket aloud.",
              "turkish": "ticket kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing ticket e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u52_1",
              "front": "bus stop ne anlama gelir?",
              "back": "Unit 52: Buses ünitesinin temel kelimesidir: bus stop.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word bus stop."
            },
            {
              "id": "fc_oxf_u52_2",
              "front": "bus driver ve ticket",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use bus driver in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u52_1",
              "left": "bus stop",
              "right": "Unit 52: Buses kavramı (bus stop)"
            },
            {
              "id": "m_oxf_u52_2",
              "left": "bus driver",
              "right": "Unit 52: Buses kavramı (bus driver)"
            },
            {
              "id": "m_oxf_u52_3",
              "left": "ticket",
              "right": "Unit 52: Buses kavramı (ticket)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u52_1",
              "text": "'bus stop' is an important vocabulary item in Unit 52: Buses.",
              "isTrue": true,
              "explanation": "Doğru! 'bus stop' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u52_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "bus stop",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "bus stop",
              "hint": "bus stop."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u52_1",
              "question": "Which word belongs to Unit 52: Buses?",
              "options": [
                "bus stop",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 52: Buses",
              "explanation": "bus stop kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u53",
          "title": "Unit 53: Trains",
          "kazanimCode": "OXF.EL.U53",
          "kazanimDesc": "Unit 53: Trains konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 53: Trains\n• **Anahtar Kelimeler:** railway station, platform, passenger, single ticket, return ticket.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "railway station",
            "platform",
            "passenger",
            "single ticket",
            "return ticket"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about railway station.",
              "turkish": "railway station hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt railway station",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with platform?",
              "turkish": "platform ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit platform",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying passenger aloud.",
              "turkish": "passenger kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing passenger e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u53_1",
              "front": "railway station ne anlama gelir?",
              "back": "Unit 53: Trains ünitesinin temel kelimesidir: railway station.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word railway station."
            },
            {
              "id": "fc_oxf_u53_2",
              "front": "platform ve passenger",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use platform in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u53_1",
              "left": "railway station",
              "right": "Unit 53: Trains kavramı (railway station)"
            },
            {
              "id": "m_oxf_u53_2",
              "left": "platform",
              "right": "Unit 53: Trains kavramı (platform)"
            },
            {
              "id": "m_oxf_u53_3",
              "left": "passenger",
              "right": "Unit 53: Trains kavramı (passenger)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u53_1",
              "text": "'railway station' is an important vocabulary item in Unit 53: Trains.",
              "isTrue": true,
              "explanation": "Doğru! 'railway station' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u53_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "railway station",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "railway station",
              "hint": "railway station."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u53_1",
              "question": "Which word belongs to Unit 53: Trains?",
              "options": [
                "railway station",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 53: Trains",
              "explanation": "railway station kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u54",
          "title": "Unit 54: Directions",
          "kazanimCode": "OXF.EL.U54",
          "kazanimDesc": "Unit 54: Directions konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 54: Directions\n• **Anahtar Kelimeler:** turn left, turn right, go straight ahead, opposite, on the corner.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "turn left",
            "turn right",
            "go straight ahead",
            "opposite",
            "on the corner"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about turn left.",
              "turkish": "turn left hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt turn left",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with turn right?",
              "turkish": "turn right ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit turn right",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying go straight ahead aloud.",
              "turkish": "go straight ahead kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing go straight ahead e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u54_1",
              "front": "turn left ne anlama gelir?",
              "back": "Unit 54: Directions ünitesinin temel kelimesidir: turn left.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word turn left."
            },
            {
              "id": "fc_oxf_u54_2",
              "front": "turn right ve go straight ahead",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use turn right in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u54_1",
              "left": "turn left",
              "right": "Unit 54: Directions kavramı (turn left)"
            },
            {
              "id": "m_oxf_u54_2",
              "left": "turn right",
              "right": "Unit 54: Directions kavramı (turn right)"
            },
            {
              "id": "m_oxf_u54_3",
              "left": "go straight ahead",
              "right": "Unit 54: Directions kavramı (go straight ahead)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u54_1",
              "text": "'turn left' is an important vocabulary item in Unit 54: Directions.",
              "isTrue": true,
              "explanation": "Doğru! 'turn left' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u54_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "turn left",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "turn left",
              "hint": "turn left."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u54_1",
              "question": "Which word belongs to Unit 54: Directions?",
              "options": [
                "turn left",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 54: Directions",
              "explanation": "turn left kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u55",
          "title": "Unit 55: Signs and Notices",
          "kazanimCode": "OXF.EL.U55",
          "kazanimDesc": "Unit 55: Signs and Notices konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 55: Signs and Notices\n• **Anahtar Kelimeler:** entrance, exit, push, pull, no smoking, open, closed.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "entrance",
            "exit",
            "push",
            "pull",
            "no smoking",
            "open"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about entrance.",
              "turkish": "entrance hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt entrance",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with exit?",
              "turkish": "exit ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit exit",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying push aloud.",
              "turkish": "push kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing push e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u55_1",
              "front": "entrance ne anlama gelir?",
              "back": "Unit 55: Signs and Notices ünitesinin temel kelimesidir: entrance.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word entrance."
            },
            {
              "id": "fc_oxf_u55_2",
              "front": "exit ve push",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use exit in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u55_1",
              "left": "entrance",
              "right": "Unit 55: Signs and Notices kavramı (entrance)"
            },
            {
              "id": "m_oxf_u55_2",
              "left": "exit",
              "right": "Unit 55: Signs and Notices kavramı (exit)"
            },
            {
              "id": "m_oxf_u55_3",
              "left": "push",
              "right": "Unit 55: Signs and Notices kavramı (push)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u55_1",
              "text": "'entrance' is an important vocabulary item in Unit 55: Signs and Notices.",
              "isTrue": true,
              "explanation": "Doğru! 'entrance' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u55_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "entrance",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "entrance",
              "hint": "entrance."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u55_1",
              "question": "Which word belongs to Unit 55: Signs and Notices?",
              "options": [
                "entrance",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 55: Signs and Notices",
              "explanation": "entrance kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_10",
      "unitNumber": 10,
      "title": "Module 10: Places (Mekânlar ve Ev)",
      "description": "Oxford Word Skills Elementary: Module 10: Places (Mekânlar ve Ev)",
      "topics": [
        {
          "id": "oxf_u56",
          "title": "Unit 56: My Town",
          "kazanimCode": "OXF.EL.U56",
          "kazanimDesc": "Unit 56: My Town konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 56: My Town\n• **Anahtar Kelimeler:** town hall, library, cinema, bank, post office, park, square.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "town hall",
            "library",
            "cinema",
            "bank",
            "post office",
            "park"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about town hall.",
              "turkish": "town hall hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt town hall",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with library?",
              "turkish": "library ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit library",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying cinema aloud.",
              "turkish": "cinema kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing cinema e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u56_1",
              "front": "town hall ne anlama gelir?",
              "back": "Unit 56: My Town ünitesinin temel kelimesidir: town hall.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word town hall."
            },
            {
              "id": "fc_oxf_u56_2",
              "front": "library ve cinema",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use library in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u56_1",
              "left": "town hall",
              "right": "Unit 56: My Town kavramı (town hall)"
            },
            {
              "id": "m_oxf_u56_2",
              "left": "library",
              "right": "Unit 56: My Town kavramı (library)"
            },
            {
              "id": "m_oxf_u56_3",
              "left": "cinema",
              "right": "Unit 56: My Town kavramı (cinema)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u56_1",
              "text": "'town hall' is an important vocabulary item in Unit 56: My Town.",
              "isTrue": true,
              "explanation": "Doğru! 'town hall' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u56_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "town hall",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "town hall",
              "hint": "town hall."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u56_1",
              "question": "Which word belongs to Unit 56: My Town?",
              "options": [
                "town hall",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 56: My Town",
              "explanation": "town hall kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u57",
          "title": "Unit 57: The Countryside",
          "kazanimCode": "OXF.EL.U57",
          "kazanimDesc": "Unit 57: The Countryside konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 57: The Countryside\n• **Anahtar Kelimeler:** village, farm, field, path, hill, fresh air, quiet.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "village",
            "farm",
            "field",
            "path",
            "hill",
            "fresh air"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about village.",
              "turkish": "village hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt village",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with farm?",
              "turkish": "farm ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit farm",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying field aloud.",
              "turkish": "field kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing field e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u57_1",
              "front": "village ne anlama gelir?",
              "back": "Unit 57: The Countryside ünitesinin temel kelimesidir: village.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word village."
            },
            {
              "id": "fc_oxf_u57_2",
              "front": "farm ve field",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use farm in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u57_1",
              "left": "village",
              "right": "Unit 57: The Countryside kavramı (village)"
            },
            {
              "id": "m_oxf_u57_2",
              "left": "farm",
              "right": "Unit 57: The Countryside kavramı (farm)"
            },
            {
              "id": "m_oxf_u57_3",
              "left": "field",
              "right": "Unit 57: The Countryside kavramı (field)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u57_1",
              "text": "'village' is an important vocabulary item in Unit 57: The Countryside.",
              "isTrue": true,
              "explanation": "Doğru! 'village' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u57_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "village",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "village",
              "hint": "village."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u57_1",
              "question": "Which word belongs to Unit 57: The Countryside?",
              "options": [
                "village",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 57: The Countryside",
              "explanation": "village kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u58",
          "title": "Unit 58: Home",
          "kazanimCode": "OXF.EL.U58",
          "kazanimDesc": "Unit 58: Home konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 58: Home\n• **Anahtar Kelimeler:** flat, house, roof, stairs, balcony, front door, garden.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "flat",
            "house",
            "roof",
            "stairs",
            "balcony",
            "front door"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about flat.",
              "turkish": "flat hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt flat",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with house?",
              "turkish": "house ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit house",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying roof aloud.",
              "turkish": "roof kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing roof e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u58_1",
              "front": "flat ne anlama gelir?",
              "back": "Unit 58: Home ünitesinin temel kelimesidir: flat.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word flat."
            },
            {
              "id": "fc_oxf_u58_2",
              "front": "house ve roof",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use house in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u58_1",
              "left": "flat",
              "right": "Unit 58: Home kavramı (flat)"
            },
            {
              "id": "m_oxf_u58_2",
              "left": "house",
              "right": "Unit 58: Home kavramı (house)"
            },
            {
              "id": "m_oxf_u58_3",
              "left": "roof",
              "right": "Unit 58: Home kavramı (roof)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u58_1",
              "text": "'flat' is an important vocabulary item in Unit 58: Home.",
              "isTrue": true,
              "explanation": "Doğru! 'flat' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u58_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "flat",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "flat",
              "hint": "flat."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u58_1",
              "question": "Which word belongs to Unit 58: Home?",
              "options": [
                "flat",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 58: Home",
              "explanation": "flat kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u59",
          "title": "Unit 59: Kitchen",
          "kazanimCode": "OXF.EL.U59",
          "kazanimDesc": "Unit 59: Kitchen konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 59: Kitchen\n• **Anahtar Kelimeler:** fridge, cooker, oven, sink, dishwasher, kettle, saucepan, cupboard.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "fridge",
            "cooker",
            "oven",
            "sink",
            "dishwasher",
            "kettle"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about fridge.",
              "turkish": "fridge hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt fridge",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with cooker?",
              "turkish": "cooker ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit cooker",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying oven aloud.",
              "turkish": "oven kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing oven e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u59_1",
              "front": "fridge ne anlama gelir?",
              "back": "Unit 59: Kitchen ünitesinin temel kelimesidir: fridge.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word fridge."
            },
            {
              "id": "fc_oxf_u59_2",
              "front": "cooker ve oven",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use cooker in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u59_1",
              "left": "fridge",
              "right": "Unit 59: Kitchen kavramı (fridge)"
            },
            {
              "id": "m_oxf_u59_2",
              "left": "cooker",
              "right": "Unit 59: Kitchen kavramı (cooker)"
            },
            {
              "id": "m_oxf_u59_3",
              "left": "oven",
              "right": "Unit 59: Kitchen kavramı (oven)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u59_1",
              "text": "'fridge' is an important vocabulary item in Unit 59: Kitchen.",
              "isTrue": true,
              "explanation": "Doğru! 'fridge' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u59_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "fridge",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "fridge",
              "hint": "fridge."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u59_1",
              "question": "Which word belongs to Unit 59: Kitchen?",
              "options": [
                "fridge",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 59: Kitchen",
              "explanation": "fridge kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u60",
          "title": "Unit 60: Bedroom and Bathroom",
          "kazanimCode": "OXF.EL.U60",
          "kazanimDesc": "Unit 60: Bedroom and Bathroom konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 60: Bedroom and Bathroom\n• **Anahtar Kelimeler:** bed, wardrobe, lamp, bath, shower, mirror, towel, brush teeth.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "bed",
            "wardrobe",
            "lamp",
            "bath",
            "shower",
            "mirror"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about bed.",
              "turkish": "bed hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt bed",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with wardrobe?",
              "turkish": "wardrobe ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit wardrobe",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying lamp aloud.",
              "turkish": "lamp kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing lamp e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u60_1",
              "front": "bed ne anlama gelir?",
              "back": "Unit 60: Bedroom and Bathroom ünitesinin temel kelimesidir: bed.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word bed."
            },
            {
              "id": "fc_oxf_u60_2",
              "front": "wardrobe ve lamp",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use wardrobe in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u60_1",
              "left": "bed",
              "right": "Unit 60: Bedroom and Bathroom kavramı (bed)"
            },
            {
              "id": "m_oxf_u60_2",
              "left": "wardrobe",
              "right": "Unit 60: Bedroom and Bathroom kavramı (wardrobe)"
            },
            {
              "id": "m_oxf_u60_3",
              "left": "lamp",
              "right": "Unit 60: Bedroom and Bathroom kavramı (lamp)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u60_1",
              "text": "'bed' is an important vocabulary item in Unit 60: Bedroom and Bathroom.",
              "isTrue": true,
              "explanation": "Doğru! 'bed' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u60_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "bed",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "bed",
              "hint": "bed."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u60_1",
              "question": "Which word belongs to Unit 60: Bedroom and Bathroom?",
              "options": [
                "bed",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 60: Bedroom and Bathroom",
              "explanation": "bed kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u61",
          "title": "Unit 61: Living Room",
          "kazanimCode": "OXF.EL.U61",
          "kazanimDesc": "Unit 61: Living Room konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 61: Living Room\n• **Anahtar Kelimeler:** sofa, armchair, television, carpet, bookshelf, window.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "sofa",
            "armchair",
            "television",
            "carpet",
            "bookshelf",
            "window"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about sofa.",
              "turkish": "sofa hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt sofa",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with armchair?",
              "turkish": "armchair ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit armchair",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying television aloud.",
              "turkish": "television kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing television e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u61_1",
              "front": "sofa ne anlama gelir?",
              "back": "Unit 61: Living Room ünitesinin temel kelimesidir: sofa.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word sofa."
            },
            {
              "id": "fc_oxf_u61_2",
              "front": "armchair ve television",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use armchair in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u61_1",
              "left": "sofa",
              "right": "Unit 61: Living Room kavramı (sofa)"
            },
            {
              "id": "m_oxf_u61_2",
              "left": "armchair",
              "right": "Unit 61: Living Room kavramı (armchair)"
            },
            {
              "id": "m_oxf_u61_3",
              "left": "television",
              "right": "Unit 61: Living Room kavramı (television)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u61_1",
              "text": "'sofa' is an important vocabulary item in Unit 61: Living Room.",
              "isTrue": true,
              "explanation": "Doğru! 'sofa' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u61_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "sofa",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "sofa",
              "hint": "sofa."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u61_1",
              "question": "Which word belongs to Unit 61: Living Room?",
              "options": [
                "sofa",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 61: Living Room",
              "explanation": "sofa kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_11",
      "unitNumber": 11,
      "title": "Module 11: Language Section 3 - Adjectives & Adverbs",
      "description": "Oxford Word Skills Elementary: Module 11: Language Section 3 - Adjectives & Adverbs",
      "topics": [
        {
          "id": "oxf_u62",
          "title": "Unit 62: Adjectives with Prefixes",
          "kazanimCode": "OXF.EL.U62",
          "kazanimDesc": "Unit 62: Adjectives with Prefixes konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 62: Adjectives with Prefixes\n• **Anahtar Kelimeler:** unhappy, incorrect, impossible, uncomfortable, unkind.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "unhappy",
            "incorrect",
            "impossible",
            "uncomfortable",
            "unkind"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about unhappy.",
              "turkish": "unhappy hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt unhappy",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with incorrect?",
              "turkish": "incorrect ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit incorrect",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying impossible aloud.",
              "turkish": "impossible kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing impossible e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u62_1",
              "front": "unhappy ne anlama gelir?",
              "back": "Unit 62: Adjectives with Prefixes ünitesinin temel kelimesidir: unhappy.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word unhappy."
            },
            {
              "id": "fc_oxf_u62_2",
              "front": "incorrect ve impossible",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use incorrect in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u62_1",
              "left": "unhappy",
              "right": "Unit 62: Adjectives with Prefixes kavramı (unhappy)"
            },
            {
              "id": "m_oxf_u62_2",
              "left": "incorrect",
              "right": "Unit 62: Adjectives with Prefixes kavramı (incorrect)"
            },
            {
              "id": "m_oxf_u62_3",
              "left": "impossible",
              "right": "Unit 62: Adjectives with Prefixes kavramı (impossible)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u62_1",
              "text": "'unhappy' is an important vocabulary item in Unit 62: Adjectives with Prefixes.",
              "isTrue": true,
              "explanation": "Doğru! 'unhappy' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u62_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "unhappy",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "unhappy",
              "hint": "unhappy."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u62_1",
              "question": "Which word belongs to Unit 62: Adjectives with Prefixes?",
              "options": [
                "unhappy",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 62: Adjectives with Prefixes",
              "explanation": "unhappy kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u63",
          "title": "Unit 63: Adjective Opposites",
          "kazanimCode": "OXF.EL.U63",
          "kazanimDesc": "Unit 63: Adjective Opposites konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 63: Adjective Opposites\n• **Anahtar Kelimeler:** hot/cold, big/small, cheap/expensive, clean/dirty, easy/difficult.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "hot/cold",
            "big/small",
            "cheap/expensive",
            "clean/dirty",
            "easy/difficult"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about hot/cold.",
              "turkish": "hot/cold hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt hot/cold",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with big/small?",
              "turkish": "big/small ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit big/small",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying cheap/expensive aloud.",
              "turkish": "cheap/expensive kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing cheap/expensive e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u63_1",
              "front": "hot/cold ne anlama gelir?",
              "back": "Unit 63: Adjective Opposites ünitesinin temel kelimesidir: hot/cold.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word hot/cold."
            },
            {
              "id": "fc_oxf_u63_2",
              "front": "big/small ve cheap/expensive",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use big/small in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u63_1",
              "left": "hot/cold",
              "right": "Unit 63: Adjective Opposites kavramı (hot/cold)"
            },
            {
              "id": "m_oxf_u63_2",
              "left": "big/small",
              "right": "Unit 63: Adjective Opposites kavramı (big/small)"
            },
            {
              "id": "m_oxf_u63_3",
              "left": "cheap/expensive",
              "right": "Unit 63: Adjective Opposites kavramı (cheap/expensive)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u63_1",
              "text": "'hot/cold' is an important vocabulary item in Unit 63: Adjective Opposites.",
              "isTrue": true,
              "explanation": "Doğru! 'hot/cold' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u63_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "hot/cold",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "hot/cold",
              "hint": "hot/cold."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u63_1",
              "question": "Which word belongs to Unit 63: Adjective Opposites?",
              "options": [
                "hot/cold",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 63: Adjective Opposites",
              "explanation": "hot/cold kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u64",
          "title": "Unit 64: Common Adverbs",
          "kazanimCode": "OXF.EL.U64",
          "kazanimDesc": "Unit 64: Common Adverbs konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 64: Common Adverbs\n• **Anahtar Kelimeler:** always, often, sometimes, rarely, never, already, yet, still.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "always",
            "often",
            "sometimes",
            "rarely",
            "never",
            "already"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about always.",
              "turkish": "always hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt always",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with often?",
              "turkish": "often ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit often",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying sometimes aloud.",
              "turkish": "sometimes kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing sometimes e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u64_1",
              "front": "always ne anlama gelir?",
              "back": "Unit 64: Common Adverbs ünitesinin temel kelimesidir: always.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word always."
            },
            {
              "id": "fc_oxf_u64_2",
              "front": "often ve sometimes",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use often in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u64_1",
              "left": "always",
              "right": "Unit 64: Common Adverbs kavramı (always)"
            },
            {
              "id": "m_oxf_u64_2",
              "left": "often",
              "right": "Unit 64: Common Adverbs kavramı (often)"
            },
            {
              "id": "m_oxf_u64_3",
              "left": "sometimes",
              "right": "Unit 64: Common Adverbs kavramı (sometimes)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u64_1",
              "text": "'always' is an important vocabulary item in Unit 64: Common Adverbs.",
              "isTrue": true,
              "explanation": "Doğru! 'always' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u64_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "always",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "always",
              "hint": "always."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u64_1",
              "question": "Which word belongs to Unit 64: Common Adverbs?",
              "options": [
                "always",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 64: Common Adverbs",
              "explanation": "always kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u65",
          "title": "Unit 65: Adverbs of Manner",
          "kazanimCode": "OXF.EL.U65",
          "kazanimDesc": "Unit 65: Adverbs of Manner konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 65: Adverbs of Manner\n• **Anahtar Kelimeler:** badly, well, fast, hard, carefully, loudly, politely.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "badly",
            "well",
            "fast",
            "hard",
            "carefully",
            "loudly"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about badly.",
              "turkish": "badly hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt badly",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with well?",
              "turkish": "well ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit well",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying fast aloud.",
              "turkish": "fast kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing fast e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u65_1",
              "front": "badly ne anlama gelir?",
              "back": "Unit 65: Adverbs of Manner ünitesinin temel kelimesidir: badly.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word badly."
            },
            {
              "id": "fc_oxf_u65_2",
              "front": "well ve fast",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use well in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u65_1",
              "left": "badly",
              "right": "Unit 65: Adverbs of Manner kavramı (badly)"
            },
            {
              "id": "m_oxf_u65_2",
              "left": "well",
              "right": "Unit 65: Adverbs of Manner kavramı (well)"
            },
            {
              "id": "m_oxf_u65_3",
              "left": "fast",
              "right": "Unit 65: Adverbs of Manner kavramı (fast)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u65_1",
              "text": "'badly' is an important vocabulary item in Unit 65: Adverbs of Manner.",
              "isTrue": true,
              "explanation": "Doğru! 'badly' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u65_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "badly",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "badly",
              "hint": "badly."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u65_1",
              "question": "Which word belongs to Unit 65: Adverbs of Manner?",
              "options": [
                "badly",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 65: Adverbs of Manner",
              "explanation": "badly kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_12",
      "unitNumber": 12,
      "title": "Module 12: Study and Work (Eğitim ve Meslekler)",
      "description": "Oxford Word Skills Elementary: Module 12: Study and Work (Eğitim ve Meslekler)",
      "topics": [
        {
          "id": "oxf_u66",
          "title": "Unit 66: School Subjects",
          "kazanimCode": "OXF.EL.U66",
          "kazanimDesc": "Unit 66: School Subjects konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 66: School Subjects\n• **Anahtar Kelimeler:** maths, science, history, geography, English, art, music, PE.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "maths",
            "science",
            "history",
            "geography",
            "English",
            "art"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about maths.",
              "turkish": "maths hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt maths",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with science?",
              "turkish": "science ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit science",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying history aloud.",
              "turkish": "history kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing history e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u66_1",
              "front": "maths ne anlama gelir?",
              "back": "Unit 66: School Subjects ünitesinin temel kelimesidir: maths.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word maths."
            },
            {
              "id": "fc_oxf_u66_2",
              "front": "science ve history",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use science in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u66_1",
              "left": "maths",
              "right": "Unit 66: School Subjects kavramı (maths)"
            },
            {
              "id": "m_oxf_u66_2",
              "left": "science",
              "right": "Unit 66: School Subjects kavramı (science)"
            },
            {
              "id": "m_oxf_u66_3",
              "left": "history",
              "right": "Unit 66: School Subjects kavramı (history)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u66_1",
              "text": "'maths' is an important vocabulary item in Unit 66: School Subjects.",
              "isTrue": true,
              "explanation": "Doğru! 'maths' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u66_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "maths",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "maths",
              "hint": "maths."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u66_1",
              "question": "Which word belongs to Unit 66: School Subjects?",
              "options": [
                "maths",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 66: School Subjects",
              "explanation": "maths kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u67",
          "title": "Unit 67: The Education System",
          "kazanimCode": "OXF.EL.U67",
          "kazanimDesc": "Unit 67: The Education System konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 67: The Education System\n• **Anahtar Kelimeler:** primary school, secondary school, high school, timetable, exam, pass, fail.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "primary school",
            "secondary school",
            "high school",
            "timetable",
            "exam",
            "pass"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about primary school.",
              "turkish": "primary school hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt primary school",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with secondary school?",
              "turkish": "secondary school ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit secondary school",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying high school aloud.",
              "turkish": "high school kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing high school e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u67_1",
              "front": "primary school ne anlama gelir?",
              "back": "Unit 67: The Education System ünitesinin temel kelimesidir: primary school.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word primary school."
            },
            {
              "id": "fc_oxf_u67_2",
              "front": "secondary school ve high school",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use secondary school in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u67_1",
              "left": "primary school",
              "right": "Unit 67: The Education System kavramı (primary school)"
            },
            {
              "id": "m_oxf_u67_2",
              "left": "secondary school",
              "right": "Unit 67: The Education System kavramı (secondary school)"
            },
            {
              "id": "m_oxf_u67_3",
              "left": "high school",
              "right": "Unit 67: The Education System kavramı (high school)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u67_1",
              "text": "'primary school' is an important vocabulary item in Unit 67: The Education System.",
              "isTrue": true,
              "explanation": "Doğru! 'primary school' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u67_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "primary school",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "primary school",
              "hint": "primary school."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u67_1",
              "question": "Which word belongs to Unit 67: The Education System?",
              "options": [
                "primary school",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 67: The Education System",
              "explanation": "primary school kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u68",
          "title": "Unit 68: University",
          "kazanimCode": "OXF.EL.U68",
          "kazanimDesc": "Unit 68: University konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 68: University\n• **Anahtar Kelimeler:** student, professor, degree, campus, study medicine, engineering.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "student",
            "professor",
            "degree",
            "campus",
            "study medicine",
            "engineering"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about student.",
              "turkish": "student hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt student",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with professor?",
              "turkish": "professor ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit professor",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying degree aloud.",
              "turkish": "degree kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing degree e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u68_1",
              "front": "student ne anlama gelir?",
              "back": "Unit 68: University ünitesinin temel kelimesidir: student.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word student."
            },
            {
              "id": "fc_oxf_u68_2",
              "front": "professor ve degree",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use professor in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u68_1",
              "left": "student",
              "right": "Unit 68: University kavramı (student)"
            },
            {
              "id": "m_oxf_u68_2",
              "left": "professor",
              "right": "Unit 68: University kavramı (professor)"
            },
            {
              "id": "m_oxf_u68_3",
              "left": "degree",
              "right": "Unit 68: University kavramı (degree)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u68_1",
              "text": "'student' is an important vocabulary item in Unit 68: University.",
              "isTrue": true,
              "explanation": "Doğru! 'student' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u68_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "student",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "student",
              "hint": "student."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u68_1",
              "question": "Which word belongs to Unit 68: University?",
              "options": [
                "student",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 68: University",
              "explanation": "student kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u69",
          "title": "Unit 69: Jobs",
          "kazanimCode": "OXF.EL.U69",
          "kazanimDesc": "Unit 69: Jobs konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 69: Jobs\n• **Anahtar Kelimeler:** teacher, doctor, engineer, nurse, pilot, mechanic, shop assistant.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "teacher",
            "doctor",
            "engineer",
            "nurse",
            "pilot",
            "mechanic"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about teacher.",
              "turkish": "teacher hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt teacher",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with doctor?",
              "turkish": "doctor ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit doctor",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying engineer aloud.",
              "turkish": "engineer kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing engineer e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u69_1",
              "front": "teacher ne anlama gelir?",
              "back": "Unit 69: Jobs ünitesinin temel kelimesidir: teacher.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word teacher."
            },
            {
              "id": "fc_oxf_u69_2",
              "front": "doctor ve engineer",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use doctor in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u69_1",
              "left": "teacher",
              "right": "Unit 69: Jobs kavramı (teacher)"
            },
            {
              "id": "m_oxf_u69_2",
              "left": "doctor",
              "right": "Unit 69: Jobs kavramı (doctor)"
            },
            {
              "id": "m_oxf_u69_3",
              "left": "engineer",
              "right": "Unit 69: Jobs kavramı (engineer)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u69_1",
              "text": "'teacher' is an important vocabulary item in Unit 69: Jobs.",
              "isTrue": true,
              "explanation": "Doğru! 'teacher' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u69_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "teacher",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "teacher",
              "hint": "teacher."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u69_1",
              "question": "Which word belongs to Unit 69: Jobs?",
              "options": [
                "teacher",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 69: Jobs",
              "explanation": "teacher kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u70",
          "title": "Unit 70: Describing Jobs",
          "kazanimCode": "OXF.EL.U70",
          "kazanimDesc": "Unit 70: Describing Jobs konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 70: Describing Jobs\n• **Anahtar Kelimeler:** earn money, work long hours, outdoor job, dangerous, creative.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "earn money",
            "work long hours",
            "outdoor job",
            "dangerous",
            "creative"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about earn money.",
              "turkish": "earn money hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt earn money",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with work long hours?",
              "turkish": "work long hours ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit work long hours",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying outdoor job aloud.",
              "turkish": "outdoor job kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing outdoor job e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u70_1",
              "front": "earn money ne anlama gelir?",
              "back": "Unit 70: Describing Jobs ünitesinin temel kelimesidir: earn money.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word earn money."
            },
            {
              "id": "fc_oxf_u70_2",
              "front": "work long hours ve outdoor job",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use work long hours in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u70_1",
              "left": "earn money",
              "right": "Unit 70: Describing Jobs kavramı (earn money)"
            },
            {
              "id": "m_oxf_u70_2",
              "left": "work long hours",
              "right": "Unit 70: Describing Jobs kavramı (work long hours)"
            },
            {
              "id": "m_oxf_u70_3",
              "left": "outdoor job",
              "right": "Unit 70: Describing Jobs kavramı (outdoor job)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u70_1",
              "text": "'earn money' is an important vocabulary item in Unit 70: Describing Jobs.",
              "isTrue": true,
              "explanation": "Doğru! 'earn money' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u70_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "earn money",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "earn money",
              "hint": "earn money."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u70_1",
              "question": "Which word belongs to Unit 70: Describing Jobs?",
              "options": [
                "earn money",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 70: Describing Jobs",
              "explanation": "earn money kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u71",
          "title": "Unit 71: Job Interview",
          "kazanimCode": "OXF.EL.U71",
          "kazanimDesc": "Unit 71: Job Interview konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 71: Job Interview\n• **Anahtar Kelimeler:** apply for a job, CV, experience, interview, skills.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "apply for a job",
            "CV",
            "experience",
            "interview",
            "skills"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about apply for a job.",
              "turkish": "apply for a job hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt apply for a job",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with CV?",
              "turkish": "CV ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit CV",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying experience aloud.",
              "turkish": "experience kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing experience e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u71_1",
              "front": "apply for a job ne anlama gelir?",
              "back": "Unit 71: Job Interview ünitesinin temel kelimesidir: apply for a job.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word apply for a job."
            },
            {
              "id": "fc_oxf_u71_2",
              "front": "CV ve experience",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use CV in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u71_1",
              "left": "apply for a job",
              "right": "Unit 71: Job Interview kavramı (apply for a job)"
            },
            {
              "id": "m_oxf_u71_2",
              "left": "CV",
              "right": "Unit 71: Job Interview kavramı (CV)"
            },
            {
              "id": "m_oxf_u71_3",
              "left": "experience",
              "right": "Unit 71: Job Interview kavramı (experience)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u71_1",
              "text": "'apply for a job' is an important vocabulary item in Unit 71: Job Interview.",
              "isTrue": true,
              "explanation": "Doğru! 'apply for a job' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u71_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "apply for a job",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "apply for a job",
              "hint": "apply for a job."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u71_1",
              "question": "Which word belongs to Unit 71: Job Interview?",
              "options": [
                "apply for a job",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 71: Job Interview",
              "explanation": "apply for a job kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u72",
          "title": "Unit 72: First Day at Work",
          "kazanimCode": "OXF.EL.U72",
          "kazanimDesc": "Unit 72: First Day at Work konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 72: First Day at Work\n• **Anahtar Kelimeler:** meet colleagues, boss, desk, uniform, company.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "meet colleagues",
            "boss",
            "desk",
            "uniform",
            "company"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about meet colleagues.",
              "turkish": "meet colleagues hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt meet colleagues",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with boss?",
              "turkish": "boss ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit boss",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying desk aloud.",
              "turkish": "desk kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing desk e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u72_1",
              "front": "meet colleagues ne anlama gelir?",
              "back": "Unit 72: First Day at Work ünitesinin temel kelimesidir: meet colleagues.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word meet colleagues."
            },
            {
              "id": "fc_oxf_u72_2",
              "front": "boss ve desk",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use boss in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u72_1",
              "left": "meet colleagues",
              "right": "Unit 72: First Day at Work kavramı (meet colleagues)"
            },
            {
              "id": "m_oxf_u72_2",
              "left": "boss",
              "right": "Unit 72: First Day at Work kavramı (boss)"
            },
            {
              "id": "m_oxf_u72_3",
              "left": "desk",
              "right": "Unit 72: First Day at Work kavramı (desk)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u72_1",
              "text": "'meet colleagues' is an important vocabulary item in Unit 72: First Day at Work.",
              "isTrue": true,
              "explanation": "Doğru! 'meet colleagues' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u72_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "meet colleagues",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "meet colleagues",
              "hint": "meet colleagues."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u72_1",
              "question": "Which word belongs to Unit 72: First Day at Work?",
              "options": [
                "meet colleagues",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 72: First Day at Work",
              "explanation": "meet colleagues kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_13",
      "unitNumber": 13,
      "title": "Module 13: Technology (Teknoloji)",
      "description": "Oxford Word Skills Elementary: Module 13: Technology (Teknoloji)",
      "topics": [
        {
          "id": "oxf_u73",
          "title": "Unit 73: Computers",
          "kazanimCode": "OXF.EL.U73",
          "kazanimDesc": "Unit 73: Computers konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 73: Computers\n• **Anahtar Kelimeler:** keyboard, mouse, screen, laptop, printer, save, click.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "keyboard",
            "mouse",
            "screen",
            "laptop",
            "printer",
            "save"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about keyboard.",
              "turkish": "keyboard hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt keyboard",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with mouse?",
              "turkish": "mouse ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit mouse",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying screen aloud.",
              "turkish": "screen kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing screen e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u73_1",
              "front": "keyboard ne anlama gelir?",
              "back": "Unit 73: Computers ünitesinin temel kelimesidir: keyboard.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word keyboard."
            },
            {
              "id": "fc_oxf_u73_2",
              "front": "mouse ve screen",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use mouse in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u73_1",
              "left": "keyboard",
              "right": "Unit 73: Computers kavramı (keyboard)"
            },
            {
              "id": "m_oxf_u73_2",
              "left": "mouse",
              "right": "Unit 73: Computers kavramı (mouse)"
            },
            {
              "id": "m_oxf_u73_3",
              "left": "screen",
              "right": "Unit 73: Computers kavramı (screen)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u73_1",
              "text": "'keyboard' is an important vocabulary item in Unit 73: Computers.",
              "isTrue": true,
              "explanation": "Doğru! 'keyboard' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u73_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "keyboard",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "keyboard",
              "hint": "keyboard."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u73_1",
              "question": "Which word belongs to Unit 73: Computers?",
              "options": [
                "keyboard",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 73: Computers",
              "explanation": "keyboard kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u74",
          "title": "Unit 74: Email, Letters and Internet",
          "kazanimCode": "OXF.EL.U74",
          "kazanimDesc": "Unit 74: Email, Letters and Internet konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 74: Email, Letters and Internet\n• **Anahtar Kelimeler:** send an email, website, online, password, download, search.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "send an email",
            "website",
            "online",
            "password",
            "download",
            "search"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about send an email.",
              "turkish": "send an email hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt send an email",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with website?",
              "turkish": "website ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit website",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying online aloud.",
              "turkish": "online kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing online e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u74_1",
              "front": "send an email ne anlama gelir?",
              "back": "Unit 74: Email, Letters and Internet ünitesinin temel kelimesidir: send an email.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word send an email."
            },
            {
              "id": "fc_oxf_u74_2",
              "front": "website ve online",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use website in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u74_1",
              "left": "send an email",
              "right": "Unit 74: Email, Letters and Internet kavramı (send an email)"
            },
            {
              "id": "m_oxf_u74_2",
              "left": "website",
              "right": "Unit 74: Email, Letters and Internet kavramı (website)"
            },
            {
              "id": "m_oxf_u74_3",
              "left": "online",
              "right": "Unit 74: Email, Letters and Internet kavramı (online)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u74_1",
              "text": "'send an email' is an important vocabulary item in Unit 74: Email, Letters and Internet.",
              "isTrue": true,
              "explanation": "Doğru! 'send an email' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u74_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "send an email",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "send an email",
              "hint": "send an email."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u74_1",
              "question": "Which word belongs to Unit 74: Email, Letters and Internet?",
              "options": [
                "send an email",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 74: Email, Letters and Internet",
              "explanation": "send an email kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u75",
          "title": "Unit 75: Phoning",
          "kazanimCode": "OXF.EL.U75",
          "kazanimDesc": "Unit 75: Phoning konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 75: Phoning\n• **Anahtar Kelimeler:** smartphone, text message, call, ring, busy line, answer the phone.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "smartphone",
            "text message",
            "call",
            "ring",
            "busy line",
            "answer the phone"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about smartphone.",
              "turkish": "smartphone hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt smartphone",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with text message?",
              "turkish": "text message ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit text message",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying call aloud.",
              "turkish": "call kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing call e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u75_1",
              "front": "smartphone ne anlama gelir?",
              "back": "Unit 75: Phoning ünitesinin temel kelimesidir: smartphone.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word smartphone."
            },
            {
              "id": "fc_oxf_u75_2",
              "front": "text message ve call",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use text message in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u75_1",
              "left": "smartphone",
              "right": "Unit 75: Phoning kavramı (smartphone)"
            },
            {
              "id": "m_oxf_u75_2",
              "left": "text message",
              "right": "Unit 75: Phoning kavramı (text message)"
            },
            {
              "id": "m_oxf_u75_3",
              "left": "call",
              "right": "Unit 75: Phoning kavramı (call)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u75_1",
              "text": "'smartphone' is an important vocabulary item in Unit 75: Phoning.",
              "isTrue": true,
              "explanation": "Doğru! 'smartphone' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u75_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "smartphone",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "smartphone",
              "hint": "smartphone."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u75_1",
              "question": "Which word belongs to Unit 75: Phoning?",
              "options": [
                "smartphone",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 75: Phoning",
              "explanation": "smartphone kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_14",
      "unitNumber": 14,
      "title": "Module 14: Language Section 4 - Building Words",
      "description": "Oxford Word Skills Elementary: Module 14: Language Section 4 - Building Words",
      "topics": [
        {
          "id": "oxf_u76",
          "title": "Unit 76: -er / -or / -r Nouns",
          "kazanimCode": "OXF.EL.U76",
          "kazanimDesc": "Unit 76: -er / -or / -r Nouns konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 76: -er / -or / -r Nouns\n• **Anahtar Kelimeler:** teacher, worker, actor, driver, singer, writer, player.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "teacher",
            "worker",
            "actor",
            "driver",
            "singer",
            "writer"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about teacher.",
              "turkish": "teacher hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt teacher",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with worker?",
              "turkish": "worker ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit worker",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying actor aloud.",
              "turkish": "actor kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing actor e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u76_1",
              "front": "teacher ne anlama gelir?",
              "back": "Unit 76: -er / -or / -r Nouns ünitesinin temel kelimesidir: teacher.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word teacher."
            },
            {
              "id": "fc_oxf_u76_2",
              "front": "worker ve actor",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use worker in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u76_1",
              "left": "teacher",
              "right": "Unit 76: -er / -or / -r Nouns kavramı (teacher)"
            },
            {
              "id": "m_oxf_u76_2",
              "left": "worker",
              "right": "Unit 76: -er / -or / -r Nouns kavramı (worker)"
            },
            {
              "id": "m_oxf_u76_3",
              "left": "actor",
              "right": "Unit 76: -er / -or / -r Nouns kavramı (actor)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u76_1",
              "text": "'teacher' is an important vocabulary item in Unit 76: -er / -or / -r Nouns.",
              "isTrue": true,
              "explanation": "Doğru! 'teacher' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u76_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "teacher",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "teacher",
              "hint": "teacher."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u76_1",
              "question": "Which word belongs to Unit 76: -er / -or / -r Nouns?",
              "options": [
                "teacher",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 76: -er / -or / -r Nouns",
              "explanation": "teacher kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u77",
          "title": "Unit 77: -ing Forms",
          "kazanimCode": "OXF.EL.U77",
          "kazanimDesc": "Unit 77: -ing Forms konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 77: -ing Forms\n• **Anahtar Kelimeler:** swimming, reading, shopping, dancing, cooking.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "swimming",
            "reading",
            "shopping",
            "dancing",
            "cooking"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about swimming.",
              "turkish": "swimming hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt swimming",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with reading?",
              "turkish": "reading ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit reading",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying shopping aloud.",
              "turkish": "shopping kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing shopping e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u77_1",
              "front": "swimming ne anlama gelir?",
              "back": "Unit 77: -ing Forms ünitesinin temel kelimesidir: swimming.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word swimming."
            },
            {
              "id": "fc_oxf_u77_2",
              "front": "reading ve shopping",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use reading in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u77_1",
              "left": "swimming",
              "right": "Unit 77: -ing Forms kavramı (swimming)"
            },
            {
              "id": "m_oxf_u77_2",
              "left": "reading",
              "right": "Unit 77: -ing Forms kavramı (reading)"
            },
            {
              "id": "m_oxf_u77_3",
              "left": "shopping",
              "right": "Unit 77: -ing Forms kavramı (shopping)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u77_1",
              "text": "'swimming' is an important vocabulary item in Unit 77: -ing Forms.",
              "isTrue": true,
              "explanation": "Doğru! 'swimming' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u77_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "swimming",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "swimming",
              "hint": "swimming."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u77_1",
              "question": "Which word belongs to Unit 77: -ing Forms?",
              "options": [
                "swimming",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 77: -ing Forms",
              "explanation": "swimming kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u78",
          "title": "Unit 78: Noun Suffixes",
          "kazanimCode": "OXF.EL.U78",
          "kazanimDesc": "Unit 78: Noun Suffixes konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 78: Noun Suffixes\n• **Anahtar Kelimeler:** happiness, darkness, decision, arrangement, education.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "happiness",
            "darkness",
            "decision",
            "arrangement",
            "education"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about happiness.",
              "turkish": "happiness hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt happiness",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with darkness?",
              "turkish": "darkness ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit darkness",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying decision aloud.",
              "turkish": "decision kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing decision e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u78_1",
              "front": "happiness ne anlama gelir?",
              "back": "Unit 78: Noun Suffixes ünitesinin temel kelimesidir: happiness.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word happiness."
            },
            {
              "id": "fc_oxf_u78_2",
              "front": "darkness ve decision",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use darkness in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u78_1",
              "left": "happiness",
              "right": "Unit 78: Noun Suffixes kavramı (happiness)"
            },
            {
              "id": "m_oxf_u78_2",
              "left": "darkness",
              "right": "Unit 78: Noun Suffixes kavramı (darkness)"
            },
            {
              "id": "m_oxf_u78_3",
              "left": "decision",
              "right": "Unit 78: Noun Suffixes kavramı (decision)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u78_1",
              "text": "'happiness' is an important vocabulary item in Unit 78: Noun Suffixes.",
              "isTrue": true,
              "explanation": "Doğru! 'happiness' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u78_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "happiness",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "happiness",
              "hint": "happiness."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u78_1",
              "question": "Which word belongs to Unit 78: Noun Suffixes?",
              "options": [
                "happiness",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 78: Noun Suffixes",
              "explanation": "happiness kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u79",
          "title": "Unit 79: Compound Nouns",
          "kazanimCode": "OXF.EL.U79",
          "kazanimDesc": "Unit 79: Compound Nouns konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 79: Compound Nouns\n• **Anahtar Kelimeler:** football, bedroom, whiteboard, raincoat, sunglasses, bookstore.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "football",
            "bedroom",
            "whiteboard",
            "raincoat",
            "sunglasses",
            "bookstore"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about football.",
              "turkish": "football hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt football",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with bedroom?",
              "turkish": "bedroom ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit bedroom",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying whiteboard aloud.",
              "turkish": "whiteboard kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing whiteboard e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u79_1",
              "front": "football ne anlama gelir?",
              "back": "Unit 79: Compound Nouns ünitesinin temel kelimesidir: football.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word football."
            },
            {
              "id": "fc_oxf_u79_2",
              "front": "bedroom ve whiteboard",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use bedroom in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u79_1",
              "left": "football",
              "right": "Unit 79: Compound Nouns kavramı (football)"
            },
            {
              "id": "m_oxf_u79_2",
              "left": "bedroom",
              "right": "Unit 79: Compound Nouns kavramı (bedroom)"
            },
            {
              "id": "m_oxf_u79_3",
              "left": "whiteboard",
              "right": "Unit 79: Compound Nouns kavramı (whiteboard)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u79_1",
              "text": "'football' is an important vocabulary item in Unit 79: Compound Nouns.",
              "isTrue": true,
              "explanation": "Doğru! 'football' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u79_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "football",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "football",
              "hint": "football."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u79_1",
              "question": "Which word belongs to Unit 79: Compound Nouns?",
              "options": [
                "football",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 79: Compound Nouns",
              "explanation": "football kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_15",
      "unitNumber": 15,
      "title": "Module 15: Hobbies and Interests (Hobiler)",
      "description": "Oxford Word Skills Elementary: Module 15: Hobbies and Interests (Hobiler)",
      "topics": [
        {
          "id": "oxf_u80",
          "title": "Unit 80: Likes and Dislikes",
          "kazanimCode": "OXF.EL.U80",
          "kazanimDesc": "Unit 80: Likes and Dislikes konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 80: Likes and Dislikes\n• **Anahtar Kelimeler:** like, love, enjoy, hate, prefer, be interested in, don't mind.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "like",
            "love",
            "enjoy",
            "hate",
            "prefer",
            "be interested in"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about like.",
              "turkish": "like hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt like",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with love?",
              "turkish": "love ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit love",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying enjoy aloud.",
              "turkish": "enjoy kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing enjoy e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u80_1",
              "front": "like ne anlama gelir?",
              "back": "Unit 80: Likes and Dislikes ünitesinin temel kelimesidir: like.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word like."
            },
            {
              "id": "fc_oxf_u80_2",
              "front": "love ve enjoy",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use love in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u80_1",
              "left": "like",
              "right": "Unit 80: Likes and Dislikes kavramı (like)"
            },
            {
              "id": "m_oxf_u80_2",
              "left": "love",
              "right": "Unit 80: Likes and Dislikes kavramı (love)"
            },
            {
              "id": "m_oxf_u80_3",
              "left": "enjoy",
              "right": "Unit 80: Likes and Dislikes kavramı (enjoy)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u80_1",
              "text": "'like' is an important vocabulary item in Unit 80: Likes and Dislikes.",
              "isTrue": true,
              "explanation": "Doğru! 'like' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u80_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "like",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "like",
              "hint": "like."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u80_1",
              "question": "Which word belongs to Unit 80: Likes and Dislikes?",
              "options": [
                "like",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 80: Likes and Dislikes",
              "explanation": "like kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u81",
          "title": "Unit 81: Free Time",
          "kazanimCode": "OXF.EL.U81",
          "kazanimDesc": "Unit 81: Free Time konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 81: Free Time\n• **Anahtar Kelimeler:** play video games, listen to music, meet friends, go for a walk.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "play video games",
            "listen to music",
            "meet friends",
            "go for a walk"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about play video games.",
              "turkish": "play video games hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt play video games",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with listen to music?",
              "turkish": "listen to music ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit listen to music",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying meet friends aloud.",
              "turkish": "meet friends kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing meet friends e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u81_1",
              "front": "play video games ne anlama gelir?",
              "back": "Unit 81: Free Time ünitesinin temel kelimesidir: play video games.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word play video games."
            },
            {
              "id": "fc_oxf_u81_2",
              "front": "listen to music ve meet friends",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use listen to music in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u81_1",
              "left": "play video games",
              "right": "Unit 81: Free Time kavramı (play video games)"
            },
            {
              "id": "m_oxf_u81_2",
              "left": "listen to music",
              "right": "Unit 81: Free Time kavramı (listen to music)"
            },
            {
              "id": "m_oxf_u81_3",
              "left": "meet friends",
              "right": "Unit 81: Free Time kavramı (meet friends)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u81_1",
              "text": "'play video games' is an important vocabulary item in Unit 81: Free Time.",
              "isTrue": true,
              "explanation": "Doğru! 'play video games' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u81_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "play video games",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "play video games",
              "hint": "play video games."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u81_1",
              "question": "Which word belongs to Unit 81: Free Time?",
              "options": [
                "play video games",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 81: Free Time",
              "explanation": "play video games kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u82",
          "title": "Unit 82: Sport",
          "kazanimCode": "OXF.EL.U82",
          "kazanimDesc": "Unit 82: Sport konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 82: Sport\n• **Anahtar Kelimeler:** football, basketball, tennis, swimming, win, lose, match.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "football",
            "basketball",
            "tennis",
            "swimming",
            "win",
            "lose"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about football.",
              "turkish": "football hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt football",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with basketball?",
              "turkish": "basketball ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit basketball",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying tennis aloud.",
              "turkish": "tennis kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing tennis e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u82_1",
              "front": "football ne anlama gelir?",
              "back": "Unit 82: Sport ünitesinin temel kelimesidir: football.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word football."
            },
            {
              "id": "fc_oxf_u82_2",
              "front": "basketball ve tennis",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use basketball in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u82_1",
              "left": "football",
              "right": "Unit 82: Sport kavramı (football)"
            },
            {
              "id": "m_oxf_u82_2",
              "left": "basketball",
              "right": "Unit 82: Sport kavramı (basketball)"
            },
            {
              "id": "m_oxf_u82_3",
              "left": "tennis",
              "right": "Unit 82: Sport kavramı (tennis)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u82_1",
              "text": "'football' is an important vocabulary item in Unit 82: Sport.",
              "isTrue": true,
              "explanation": "Doğru! 'football' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u82_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "football",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "football",
              "hint": "football."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u82_1",
              "question": "Which word belongs to Unit 82: Sport?",
              "options": [
                "football",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 82: Sport",
              "explanation": "football kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u83",
          "title": "Unit 83: Music",
          "kazanimCode": "OXF.EL.U83",
          "kazanimDesc": "Unit 83: Music konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 83: Music\n• **Anahtar Kelimeler:** guitar, piano, concert, band, song, singer, classical music.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "guitar",
            "piano",
            "concert",
            "band",
            "song",
            "singer"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about guitar.",
              "turkish": "guitar hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt guitar",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with piano?",
              "turkish": "piano ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit piano",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying concert aloud.",
              "turkish": "concert kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing concert e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u83_1",
              "front": "guitar ne anlama gelir?",
              "back": "Unit 83: Music ünitesinin temel kelimesidir: guitar.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word guitar."
            },
            {
              "id": "fc_oxf_u83_2",
              "front": "piano ve concert",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use piano in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u83_1",
              "left": "guitar",
              "right": "Unit 83: Music kavramı (guitar)"
            },
            {
              "id": "m_oxf_u83_2",
              "left": "piano",
              "right": "Unit 83: Music kavramı (piano)"
            },
            {
              "id": "m_oxf_u83_3",
              "left": "concert",
              "right": "Unit 83: Music kavramı (concert)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u83_1",
              "text": "'guitar' is an important vocabulary item in Unit 83: Music.",
              "isTrue": true,
              "explanation": "Doğru! 'guitar' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u83_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "guitar",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "guitar",
              "hint": "guitar."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u83_1",
              "question": "Which word belongs to Unit 83: Music?",
              "options": [
                "guitar",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 83: Music",
              "explanation": "guitar kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u84",
          "title": "Unit 84: Films",
          "kazanimCode": "OXF.EL.U84",
          "kazanimDesc": "Unit 84: Films konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 84: Films\n• **Anahtar Kelimeler:** cinema, comedy, action movie, horror, watch, famous actor.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "cinema",
            "comedy",
            "action movie",
            "horror",
            "watch",
            "famous actor"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about cinema.",
              "turkish": "cinema hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt cinema",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with comedy?",
              "turkish": "comedy ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit comedy",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying action movie aloud.",
              "turkish": "action movie kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing action movie e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u84_1",
              "front": "cinema ne anlama gelir?",
              "back": "Unit 84: Films ünitesinin temel kelimesidir: cinema.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word cinema."
            },
            {
              "id": "fc_oxf_u84_2",
              "front": "comedy ve action movie",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use comedy in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u84_1",
              "left": "cinema",
              "right": "Unit 84: Films kavramı (cinema)"
            },
            {
              "id": "m_oxf_u84_2",
              "left": "comedy",
              "right": "Unit 84: Films kavramı (comedy)"
            },
            {
              "id": "m_oxf_u84_3",
              "left": "action movie",
              "right": "Unit 84: Films kavramı (action movie)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u84_1",
              "text": "'cinema' is an important vocabulary item in Unit 84: Films.",
              "isTrue": true,
              "explanation": "Doğru! 'cinema' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u84_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "cinema",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "cinema",
              "hint": "cinema."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u84_1",
              "question": "Which word belongs to Unit 84: Films?",
              "options": [
                "cinema",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 84: Films",
              "explanation": "cinema kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u85",
          "title": "Unit 85: The Media",
          "kazanimCode": "OXF.EL.U85",
          "kazanimDesc": "Unit 85: The Media konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 85: The Media\n• **Anahtar Kelimeler:** newspaper, magazine, news, radio, TV channel, interview.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "newspaper",
            "magazine",
            "news",
            "radio",
            "TV channel",
            "interview"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about newspaper.",
              "turkish": "newspaper hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt newspaper",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with magazine?",
              "turkish": "magazine ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit magazine",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying news aloud.",
              "turkish": "news kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing news e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u85_1",
              "front": "newspaper ne anlama gelir?",
              "back": "Unit 85: The Media ünitesinin temel kelimesidir: newspaper.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word newspaper."
            },
            {
              "id": "fc_oxf_u85_2",
              "front": "magazine ve news",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use magazine in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u85_1",
              "left": "newspaper",
              "right": "Unit 85: The Media kavramı (newspaper)"
            },
            {
              "id": "m_oxf_u85_2",
              "left": "magazine",
              "right": "Unit 85: The Media kavramı (magazine)"
            },
            {
              "id": "m_oxf_u85_3",
              "left": "news",
              "right": "Unit 85: The Media kavramı (news)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u85_1",
              "text": "'newspaper' is an important vocabulary item in Unit 85: The Media.",
              "isTrue": true,
              "explanation": "Doğru! 'newspaper' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u85_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "newspaper",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "newspaper",
              "hint": "newspaper."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u85_1",
              "question": "Which word belongs to Unit 85: The Media?",
              "options": [
                "newspaper",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 85: The Media",
              "explanation": "newspaper kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u86",
          "title": "Unit 86: Books",
          "kazanimCode": "OXF.EL.U86",
          "kazanimDesc": "Unit 86: Books konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 86: Books\n• **Anahtar Kelimeler:** novel, writer, story, read, library, interesting characters.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "novel",
            "writer",
            "story",
            "read",
            "library",
            "interesting characters"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about novel.",
              "turkish": "novel hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt novel",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with writer?",
              "turkish": "writer ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit writer",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying story aloud.",
              "turkish": "story kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing story e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u86_1",
              "front": "novel ne anlama gelir?",
              "back": "Unit 86: Books ünitesinin temel kelimesidir: novel.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word novel."
            },
            {
              "id": "fc_oxf_u86_2",
              "front": "writer ve story",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use writer in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u86_1",
              "left": "novel",
              "right": "Unit 86: Books kavramı (novel)"
            },
            {
              "id": "m_oxf_u86_2",
              "left": "writer",
              "right": "Unit 86: Books kavramı (writer)"
            },
            {
              "id": "m_oxf_u86_3",
              "left": "story",
              "right": "Unit 86: Books kavramı (story)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u86_1",
              "text": "'novel' is an important vocabulary item in Unit 86: Books.",
              "isTrue": true,
              "explanation": "Doğru! 'novel' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u86_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "novel",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "novel",
              "hint": "novel."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u86_1",
              "question": "Which word belongs to Unit 86: Books?",
              "options": [
                "novel",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 86: Books",
              "explanation": "novel kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_16",
      "unitNumber": 16,
      "title": "Module 16: Holidays (Tatil ve Seyahat)",
      "description": "Oxford Word Skills Elementary: Module 16: Holidays (Tatil ve Seyahat)",
      "topics": [
        {
          "id": "oxf_u87",
          "title": "Unit 87: Arranging a Holiday",
          "kazanimCode": "OXF.EL.U87",
          "kazanimDesc": "Unit 87: Arranging a Holiday konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 87: Arranging a Holiday\n• **Anahtar Kelimeler:** book a ticket, pack a suitcase, passport, travel agent, destination.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "book a ticket",
            "pack a suitcase",
            "passport",
            "travel agent",
            "destination"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about book a ticket.",
              "turkish": "book a ticket hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt book a ticket",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with pack a suitcase?",
              "turkish": "pack a suitcase ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit pack a suitcase",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying passport aloud.",
              "turkish": "passport kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing passport e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u87_1",
              "front": "book a ticket ne anlama gelir?",
              "back": "Unit 87: Arranging a Holiday ünitesinin temel kelimesidir: book a ticket.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word book a ticket."
            },
            {
              "id": "fc_oxf_u87_2",
              "front": "pack a suitcase ve passport",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use pack a suitcase in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u87_1",
              "left": "book a ticket",
              "right": "Unit 87: Arranging a Holiday kavramı (book a ticket)"
            },
            {
              "id": "m_oxf_u87_2",
              "left": "pack a suitcase",
              "right": "Unit 87: Arranging a Holiday kavramı (pack a suitcase)"
            },
            {
              "id": "m_oxf_u87_3",
              "left": "passport",
              "right": "Unit 87: Arranging a Holiday kavramı (passport)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u87_1",
              "text": "'book a ticket' is an important vocabulary item in Unit 87: Arranging a Holiday.",
              "isTrue": true,
              "explanation": "Doğru! 'book a ticket' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u87_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "book a ticket",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "book a ticket",
              "hint": "book a ticket."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u87_1",
              "question": "Which word belongs to Unit 87: Arranging a Holiday?",
              "options": [
                "book a ticket",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 87: Arranging a Holiday",
              "explanation": "book a ticket kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u88",
          "title": "Unit 88: Hotels",
          "kazanimCode": "OXF.EL.U88",
          "kazanimDesc": "Unit 88: Hotels konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 88: Hotels\n• **Anahtar Kelimeler:** reception, room key, single room, double room, breakfast included.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "reception",
            "room key",
            "single room",
            "double room",
            "breakfast included"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about reception.",
              "turkish": "reception hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt reception",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with room key?",
              "turkish": "room key ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit room key",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying single room aloud.",
              "turkish": "single room kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing single room e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u88_1",
              "front": "reception ne anlama gelir?",
              "back": "Unit 88: Hotels ünitesinin temel kelimesidir: reception.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word reception."
            },
            {
              "id": "fc_oxf_u88_2",
              "front": "room key ve single room",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use room key in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u88_1",
              "left": "reception",
              "right": "Unit 88: Hotels kavramı (reception)"
            },
            {
              "id": "m_oxf_u88_2",
              "left": "room key",
              "right": "Unit 88: Hotels kavramı (room key)"
            },
            {
              "id": "m_oxf_u88_3",
              "left": "single room",
              "right": "Unit 88: Hotels kavramı (single room)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u88_1",
              "text": "'reception' is an important vocabulary item in Unit 88: Hotels.",
              "isTrue": true,
              "explanation": "Doğru! 'reception' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u88_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "reception",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "reception",
              "hint": "reception."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u88_1",
              "question": "Which word belongs to Unit 88: Hotels?",
              "options": [
                "reception",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 88: Hotels",
              "explanation": "reception kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u89",
          "title": "Unit 89: Airports",
          "kazanimCode": "OXF.EL.U89",
          "kazanimDesc": "Unit 89: Airports konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 89: Airports\n• **Anahtar Kelimeler:** flight, boarding pass, check-in, departure lounge, gate, luggage.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "flight",
            "boarding pass",
            "check-in",
            "departure lounge",
            "gate",
            "luggage"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about flight.",
              "turkish": "flight hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt flight",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with boarding pass?",
              "turkish": "boarding pass ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit boarding pass",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying check-in aloud.",
              "turkish": "check-in kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing check-in e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u89_1",
              "front": "flight ne anlama gelir?",
              "back": "Unit 89: Airports ünitesinin temel kelimesidir: flight.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word flight."
            },
            {
              "id": "fc_oxf_u89_2",
              "front": "boarding pass ve check-in",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use boarding pass in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u89_1",
              "left": "flight",
              "right": "Unit 89: Airports kavramı (flight)"
            },
            {
              "id": "m_oxf_u89_2",
              "left": "boarding pass",
              "right": "Unit 89: Airports kavramı (boarding pass)"
            },
            {
              "id": "m_oxf_u89_3",
              "left": "check-in",
              "right": "Unit 89: Airports kavramı (check-in)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u89_1",
              "text": "'flight' is an important vocabulary item in Unit 89: Airports.",
              "isTrue": true,
              "explanation": "Doğru! 'flight' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u89_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "flight",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "flight",
              "hint": "flight."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u89_1",
              "question": "Which word belongs to Unit 89: Airports?",
              "options": [
                "flight",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 89: Airports",
              "explanation": "flight kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u90",
          "title": "Unit 90: Types of Holiday",
          "kazanimCode": "OXF.EL.U90",
          "kazanimDesc": "Unit 90: Types of Holiday konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 90: Types of Holiday\n• **Anahtar Kelimeler:** beach holiday, sightseeing, camping, cruise, winter holiday.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "beach holiday",
            "sightseeing",
            "camping",
            "cruise",
            "winter holiday"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about beach holiday.",
              "turkish": "beach holiday hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt beach holiday",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with sightseeing?",
              "turkish": "sightseeing ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit sightseeing",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying camping aloud.",
              "turkish": "camping kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing camping e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u90_1",
              "front": "beach holiday ne anlama gelir?",
              "back": "Unit 90: Types of Holiday ünitesinin temel kelimesidir: beach holiday.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word beach holiday."
            },
            {
              "id": "fc_oxf_u90_2",
              "front": "sightseeing ve camping",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use sightseeing in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u90_1",
              "left": "beach holiday",
              "right": "Unit 90: Types of Holiday kavramı (beach holiday)"
            },
            {
              "id": "m_oxf_u90_2",
              "left": "sightseeing",
              "right": "Unit 90: Types of Holiday kavramı (sightseeing)"
            },
            {
              "id": "m_oxf_u90_3",
              "left": "camping",
              "right": "Unit 90: Types of Holiday kavramı (camping)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u90_1",
              "text": "'beach holiday' is an important vocabulary item in Unit 90: Types of Holiday.",
              "isTrue": true,
              "explanation": "Doğru! 'beach holiday' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u90_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "beach holiday",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "beach holiday",
              "hint": "beach holiday."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u90_1",
              "question": "Which word belongs to Unit 90: Types of Holiday?",
              "options": [
                "beach holiday",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 90: Types of Holiday",
              "explanation": "beach holiday kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_17",
      "unitNumber": 17,
      "title": "Module 17: Social English (Günlük İletişim)",
      "description": "Oxford Word Skills Elementary: Module 17: Social English (Günlük İletişim)",
      "topics": [
        {
          "id": "oxf_u91",
          "title": "Unit 91: Meet and Greet",
          "kazanimCode": "OXF.EL.U91",
          "kazanimDesc": "Unit 91: Meet and Greet konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 91: Meet and Greet\n• **Anahtar Kelimeler:** Hello, How do you do?, Nice to meet you, Good morning, Goodbye, See you.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "Hello",
            "How do you do?",
            "Nice to meet you",
            "Good morning",
            "Goodbye",
            "See you"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about Hello.",
              "turkish": "Hello hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt Hello",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with How do you do??",
              "turkish": "How do you do? ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit How do you do?",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying Nice to meet you aloud.",
              "turkish": "Nice to meet you kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing Nice to meet you e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u91_1",
              "front": "Hello ne anlama gelir?",
              "back": "Unit 91: Meet and Greet ünitesinin temel kelimesidir: Hello.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word Hello."
            },
            {
              "id": "fc_oxf_u91_2",
              "front": "How do you do? ve Nice to meet you",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use How do you do? in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u91_1",
              "left": "Hello",
              "right": "Unit 91: Meet and Greet kavramı (Hello)"
            },
            {
              "id": "m_oxf_u91_2",
              "left": "How do you do?",
              "right": "Unit 91: Meet and Greet kavramı (How do you do?)"
            },
            {
              "id": "m_oxf_u91_3",
              "left": "Nice to meet you",
              "right": "Unit 91: Meet and Greet kavramı (Nice to meet you)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u91_1",
              "text": "'Hello' is an important vocabulary item in Unit 91: Meet and Greet.",
              "isTrue": true,
              "explanation": "Doğru! 'Hello' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u91_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "Hello",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "Hello",
              "hint": "Hello."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u91_1",
              "question": "Which word belongs to Unit 91: Meet and Greet?",
              "options": [
                "Hello",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 91: Meet and Greet",
              "explanation": "Hello kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u92",
          "title": "Unit 92: Ask for Information",
          "kazanimCode": "OXF.EL.U92",
          "kazanimDesc": "Unit 92: Ask for Information konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 92: Ask for Information\n• **Anahtar Kelimeler:** Excuse me, Where is...?, How much is...?, What time does it start?.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "Excuse me",
            "Where is...?",
            "How much is...?",
            "What time does it start?"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about Excuse me.",
              "turkish": "Excuse me hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt Excuse me",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with Where is...??",
              "turkish": "Where is...? ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit Where is...?",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying How much is...? aloud.",
              "turkish": "How much is...? kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing How much is...? e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u92_1",
              "front": "Excuse me ne anlama gelir?",
              "back": "Unit 92: Ask for Information ünitesinin temel kelimesidir: Excuse me.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word Excuse me."
            },
            {
              "id": "fc_oxf_u92_2",
              "front": "Where is...? ve How much is...?",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use Where is...? in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u92_1",
              "left": "Excuse me",
              "right": "Unit 92: Ask for Information kavramı (Excuse me)"
            },
            {
              "id": "m_oxf_u92_2",
              "left": "Where is...?",
              "right": "Unit 92: Ask for Information kavramı (Where is...?)"
            },
            {
              "id": "m_oxf_u92_3",
              "left": "How much is...?",
              "right": "Unit 92: Ask for Information kavramı (How much is...?)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u92_1",
              "text": "'Excuse me' is an important vocabulary item in Unit 92: Ask for Information.",
              "isTrue": true,
              "explanation": "Doğru! 'Excuse me' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u92_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "Excuse me",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "Excuse me",
              "hint": "Excuse me."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u92_1",
              "question": "Which word belongs to Unit 92: Ask for Information?",
              "options": [
                "Excuse me",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 92: Ask for Information",
              "explanation": "Excuse me kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u93",
          "title": "Unit 93: Requests and Permission",
          "kazanimCode": "OXF.EL.U93",
          "kazanimDesc": "Unit 93: Requests and Permission konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 93: Requests and Permission\n• **Anahtar Kelimeler:** Could you help me?, Can I borrow...?, May I leave?, Sure, No problem.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "Could you help me?",
            "Can I borrow...?",
            "May I leave?",
            "Sure",
            "No problem"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about Could you help me?.",
              "turkish": "Could you help me? hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt Could you help me?",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with Can I borrow...??",
              "turkish": "Can I borrow...? ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit Can I borrow...?",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying May I leave? aloud.",
              "turkish": "May I leave? kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing May I leave? e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u93_1",
              "front": "Could you help me? ne anlama gelir?",
              "back": "Unit 93: Requests and Permission ünitesinin temel kelimesidir: Could you help me?.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word Could you help me?."
            },
            {
              "id": "fc_oxf_u93_2",
              "front": "Can I borrow...? ve May I leave?",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use Can I borrow...? in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u93_1",
              "left": "Could you help me?",
              "right": "Unit 93: Requests and Permission kavramı (Could you help me?)"
            },
            {
              "id": "m_oxf_u93_2",
              "left": "Can I borrow...?",
              "right": "Unit 93: Requests and Permission kavramı (Can I borrow...?)"
            },
            {
              "id": "m_oxf_u93_3",
              "left": "May I leave?",
              "right": "Unit 93: Requests and Permission kavramı (May I leave?)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u93_1",
              "text": "'Could you help me?' is an important vocabulary item in Unit 93: Requests and Permission.",
              "isTrue": true,
              "explanation": "Doğru! 'Could you help me?' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u93_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "Could you help me?",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "Could you help me?",
              "hint": "Could you help me?."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u93_1",
              "question": "Which word belongs to Unit 93: Requests and Permission?",
              "options": [
                "Could you help me?",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 93: Requests and Permission",
              "explanation": "Could you help me? kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u94",
          "title": "Unit 94: Invitations and Suggestions",
          "kazanimCode": "OXF.EL.U94",
          "kazanimDesc": "Unit 94: Invitations and Suggestions konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 94: Invitations and Suggestions\n• **Anahtar Kelimeler:** Would you like to...?, Let's go, How about...?, That sounds great.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "Would you like to...?",
            "Let's go",
            "How about...?",
            "That sounds great"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about Would you like to...?.",
              "turkish": "Would you like to...? hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt Would you like to...?",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with Let's go?",
              "turkish": "Let's go ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit Let's go",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying How about...? aloud.",
              "turkish": "How about...? kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing How about...? e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u94_1",
              "front": "Would you like to...? ne anlama gelir?",
              "back": "Unit 94: Invitations and Suggestions ünitesinin temel kelimesidir: Would you like to...?.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word Would you like to...?."
            },
            {
              "id": "fc_oxf_u94_2",
              "front": "Let's go ve How about...?",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use Let's go in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u94_1",
              "left": "Would you like to...?",
              "right": "Unit 94: Invitations and Suggestions kavramı (Would you like to...?)"
            },
            {
              "id": "m_oxf_u94_2",
              "left": "Let's go",
              "right": "Unit 94: Invitations and Suggestions kavramı (Let's go)"
            },
            {
              "id": "m_oxf_u94_3",
              "left": "How about...?",
              "right": "Unit 94: Invitations and Suggestions kavramı (How about...?)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u94_1",
              "text": "'Would you like to...?' is an important vocabulary item in Unit 94: Invitations and Suggestions.",
              "isTrue": true,
              "explanation": "Doğru! 'Would you like to...?' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u94_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "Would you like to...?",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "Would you like to...?",
              "hint": "Would you like to...?."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u94_1",
              "question": "Which word belongs to Unit 94: Invitations and Suggestions?",
              "options": [
                "Would you like to...?",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 94: Invitations and Suggestions",
              "explanation": "Would you like to...? kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u95",
          "title": "Unit 95: Offers and Saying Sorry",
          "kazanimCode": "OXF.EL.U95",
          "kazanimDesc": "Unit 95: Offers and Saying Sorry konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 95: Offers and Saying Sorry\n• **Anahtar Kelimeler:** Can I help you?, I am so sorry, Never mind, You're welcome.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "Can I help you?",
            "I am so sorry",
            "Never mind",
            "You're welcome"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about Can I help you?.",
              "turkish": "Can I help you? hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt Can I help you?",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with I am so sorry?",
              "turkish": "I am so sorry ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit I am so sorry",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying Never mind aloud.",
              "turkish": "Never mind kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing Never mind e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u95_1",
              "front": "Can I help you? ne anlama gelir?",
              "back": "Unit 95: Offers and Saying Sorry ünitesinin temel kelimesidir: Can I help you?.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word Can I help you?."
            },
            {
              "id": "fc_oxf_u95_2",
              "front": "I am so sorry ve Never mind",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use I am so sorry in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u95_1",
              "left": "Can I help you?",
              "right": "Unit 95: Offers and Saying Sorry kavramı (Can I help you?)"
            },
            {
              "id": "m_oxf_u95_2",
              "left": "I am so sorry",
              "right": "Unit 95: Offers and Saying Sorry kavramı (I am so sorry)"
            },
            {
              "id": "m_oxf_u95_3",
              "left": "Never mind",
              "right": "Unit 95: Offers and Saying Sorry kavramı (Never mind)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u95_1",
              "text": "'Can I help you?' is an important vocabulary item in Unit 95: Offers and Saying Sorry.",
              "isTrue": true,
              "explanation": "Doğru! 'Can I help you?' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u95_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "Can I help you?",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "Can I help you?",
              "hint": "Can I help you?."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u95_1",
              "question": "Which word belongs to Unit 95: Offers and Saying Sorry?",
              "options": [
                "Can I help you?",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 95: Offers and Saying Sorry",
              "explanation": "Can I help you? kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u96",
          "title": "Unit 96: Probably or Possibly",
          "kazanimCode": "OXF.EL.U96",
          "kazanimDesc": "Unit 96: Probably or Possibly konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 96: Probably or Possibly\n• **Anahtar Kelimeler:** maybe, perhaps, definitely, I think so, I'm not sure.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "maybe",
            "perhaps",
            "definitely",
            "I think so",
            "I'm not sure"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about maybe.",
              "turkish": "maybe hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt maybe",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with perhaps?",
              "turkish": "perhaps ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit perhaps",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying definitely aloud.",
              "turkish": "definitely kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing definitely e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u96_1",
              "front": "maybe ne anlama gelir?",
              "back": "Unit 96: Probably or Possibly ünitesinin temel kelimesidir: maybe.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word maybe."
            },
            {
              "id": "fc_oxf_u96_2",
              "front": "perhaps ve definitely",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use perhaps in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u96_1",
              "left": "maybe",
              "right": "Unit 96: Probably or Possibly kavramı (maybe)"
            },
            {
              "id": "m_oxf_u96_2",
              "left": "perhaps",
              "right": "Unit 96: Probably or Possibly kavramı (perhaps)"
            },
            {
              "id": "m_oxf_u96_3",
              "left": "definitely",
              "right": "Unit 96: Probably or Possibly kavramı (definitely)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u96_1",
              "text": "'maybe' is an important vocabulary item in Unit 96: Probably or Possibly.",
              "isTrue": true,
              "explanation": "Doğru! 'maybe' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u96_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "maybe",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "maybe",
              "hint": "maybe."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u96_1",
              "question": "Which word belongs to Unit 96: Probably or Possibly?",
              "options": [
                "maybe",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 96: Probably or Possibly",
              "explanation": "maybe kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    },
    {
      "id": "oxf_mod_18",
      "unitNumber": 18,
      "title": "Module 18: Language Section 5 - Link Words & Phrasal Verbs",
      "description": "Oxford Word Skills Elementary: Module 18: Language Section 5 - Link Words & Phrasal Verbs",
      "topics": [
        {
          "id": "oxf_u97",
          "title": "Unit 97: Link Words 1",
          "kazanimCode": "OXF.EL.U97",
          "kazanimDesc": "Unit 97: Link Words 1 konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 97: Link Words 1\n• **Anahtar Kelimeler:** and, but, because, so, although, then.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "and",
            "but",
            "because",
            "so",
            "although",
            "then"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about and.",
              "turkish": "and hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt and",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with but?",
              "turkish": "but ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit but",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying because aloud.",
              "turkish": "because kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing because e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u97_1",
              "front": "and ne anlama gelir?",
              "back": "Unit 97: Link Words 1 ünitesinin temel kelimesidir: and.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word and."
            },
            {
              "id": "fc_oxf_u97_2",
              "front": "but ve because",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use but in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u97_1",
              "left": "and",
              "right": "Unit 97: Link Words 1 kavramı (and)"
            },
            {
              "id": "m_oxf_u97_2",
              "left": "but",
              "right": "Unit 97: Link Words 1 kavramı (but)"
            },
            {
              "id": "m_oxf_u97_3",
              "left": "because",
              "right": "Unit 97: Link Words 1 kavramı (because)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u97_1",
              "text": "'and' is an important vocabulary item in Unit 97: Link Words 1.",
              "isTrue": true,
              "explanation": "Doğru! 'and' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u97_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "and",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "and",
              "hint": "and."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u97_1",
              "question": "Which word belongs to Unit 97: Link Words 1?",
              "options": [
                "and",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 97: Link Words 1",
              "explanation": "and kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u98",
          "title": "Unit 98: Link Words 2",
          "kazanimCode": "OXF.EL.U98",
          "kazanimDesc": "Unit 98: Link Words 2 konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 98: Link Words 2\n• **Anahtar Kelimeler:** first, second, after that, finally, however, also.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "first",
            "second",
            "after that",
            "finally",
            "however",
            "also"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about first.",
              "turkish": "first hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt first",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with second?",
              "turkish": "second ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit second",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying after that aloud.",
              "turkish": "after that kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing after that e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u98_1",
              "front": "first ne anlama gelir?",
              "back": "Unit 98: Link Words 2 ünitesinin temel kelimesidir: first.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word first."
            },
            {
              "id": "fc_oxf_u98_2",
              "front": "second ve after that",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use second in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u98_1",
              "left": "first",
              "right": "Unit 98: Link Words 2 kavramı (first)"
            },
            {
              "id": "m_oxf_u98_2",
              "left": "second",
              "right": "Unit 98: Link Words 2 kavramı (second)"
            },
            {
              "id": "m_oxf_u98_3",
              "left": "after that",
              "right": "Unit 98: Link Words 2 kavramı (after that)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u98_1",
              "text": "'first' is an important vocabulary item in Unit 98: Link Words 2.",
              "isTrue": true,
              "explanation": "Doğru! 'first' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u98_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "first",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "first",
              "hint": "first."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u98_1",
              "question": "Which word belongs to Unit 98: Link Words 2?",
              "options": [
                "first",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 98: Link Words 2",
              "explanation": "first kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u99",
          "title": "Unit 99: Phrasal Verbs",
          "kazanimCode": "OXF.EL.U99",
          "kazanimDesc": "Unit 99: Phrasal Verbs konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 99: Phrasal Verbs\n• **Anahtar Kelimeler:** turn on, turn off, give up, look for, pick up, sit down, get up.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "turn on",
            "turn off",
            "give up",
            "look for",
            "pick up",
            "sit down"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about turn on.",
              "turkish": "turn on hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt turn on",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with turn off?",
              "turkish": "turn off ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit turn off",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying give up aloud.",
              "turkish": "give up kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing give up e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u99_1",
              "front": "turn on ne anlama gelir?",
              "back": "Unit 99: Phrasal Verbs ünitesinin temel kelimesidir: turn on.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word turn on."
            },
            {
              "id": "fc_oxf_u99_2",
              "front": "turn off ve give up",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use turn off in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u99_1",
              "left": "turn on",
              "right": "Unit 99: Phrasal Verbs kavramı (turn on)"
            },
            {
              "id": "m_oxf_u99_2",
              "left": "turn off",
              "right": "Unit 99: Phrasal Verbs kavramı (turn off)"
            },
            {
              "id": "m_oxf_u99_3",
              "left": "give up",
              "right": "Unit 99: Phrasal Verbs kavramı (give up)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u99_1",
              "text": "'turn on' is an important vocabulary item in Unit 99: Phrasal Verbs.",
              "isTrue": true,
              "explanation": "Doğru! 'turn on' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u99_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "turn on",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "turn on",
              "hint": "turn on."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u99_1",
              "question": "Which word belongs to Unit 99: Phrasal Verbs?",
              "options": [
                "turn on",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 99: Phrasal Verbs",
              "explanation": "turn on kelimesi bu ünitede öğretilmektedir."
            }
          ]
        },
        {
          "id": "oxf_u100",
          "title": "Unit 100: Common Expressions",
          "kazanimCode": "OXF.EL.U100",
          "kazanimDesc": "Unit 100: Common Expressions konusundaki temel kelimeleri ve dil yapılarını kavrar, doğru telaffuzla kullanır.",
          "summary": "### 📚 Unit 100: Common Expressions\n• **Anahtar Kelimeler:** of course, by the way, have a good time, take care, hurry up, good luck.\n\n💡 **Spotlight:** Kelimeleri cümle içinde bağlamıyla öğrenin ve sesli telaffuz etkinlikleriyle tekrar edin.",
          "keyConcepts": [
            "of course",
            "by the way",
            "have a good time",
            "take care",
            "hurry up",
            "good luck"
          ],
          "pronunciationPhrases": [
            {
              "english": "We are learning about of course.",
              "turkish": "of course hakkında öğreniyoruz.",
              "phonetic": "vii ar lör-ning e-bavt of course",
              "category": "Vocabulary"
            },
            {
              "english": "Can you give an example with by the way?",
              "turkish": "by the way ile bir örnek verebilir misin?",
              "phonetic": "ken yu giv en ig-zam-pıl vit by the way",
              "category": "Vocabulary"
            },
            {
              "english": "Practise saying have a good time aloud.",
              "turkish": "have a good time kelimesini sesli söyleme pratiği yap.",
              "phonetic": "prek-tis sey-ing have a good time e-lavd",
              "category": "Vocabulary"
            }
          ],
          "flashcards": [
            {
              "id": "fc_oxf_u100_1",
              "front": "of course ne anlama gelir?",
              "back": "Unit 100: Common Expressions ünitesinin temel kelimesidir: of course.",
              "tip": "Örnek cümle içinde kullanarak pekiştirin.",
              "example": "I know the word of course."
            },
            {
              "id": "fc_oxf_u100_2",
              "front": "by the way ve have a good time",
              "back": "Günlük yaşamda sıkça kullanılan İngilizce ifadelerdir.",
              "tip": "Spotlight kutusundaki kullanım kurallarına dikkat edin.",
              "example": "Use by the way in a sentence."
            }
          ],
          "matching": [
            {
              "id": "m_oxf_u100_1",
              "left": "of course",
              "right": "Unit 100: Common Expressions kavramı (of course)"
            },
            {
              "id": "m_oxf_u100_2",
              "left": "by the way",
              "right": "Unit 100: Common Expressions kavramı (by the way)"
            },
            {
              "id": "m_oxf_u100_3",
              "left": "have a good time",
              "right": "Unit 100: Common Expressions kavramı (have a good time)"
            }
          ],
          "trueFalse": [
            {
              "id": "tf_oxf_u100_1",
              "text": "'of course' is an important vocabulary item in Unit 100: Common Expressions.",
              "isTrue": true,
              "explanation": "Doğru! 'of course' bu ünitenin anahtar sözcüğüdür."
            }
          ],
          "fillBlank": [
            {
              "id": "fb_oxf_u100_1",
              "sentence": "Please repeat the word '___' aloud.",
              "options": [
                "of course",
                "table",
                "chair",
                "bed"
              ],
              "correctWord": "of course",
              "hint": "of course."
            }
          ],
          "quiz": [
            {
              "id": "q_oxf_u100_1",
              "question": "Which word belongs to Unit 100: Common Expressions?",
              "options": [
                "of course",
                "elephant",
                "computer",
                "pencil"
              ],
              "correctAnswerIndex": 0,
              "hint": "Unit 100: Common Expressions",
              "explanation": "of course kelimesi bu ünitede öğretilmektedir."
            }
          ]
        }
      ]
    }
  ]
};
