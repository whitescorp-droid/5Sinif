// 5. Sınıf Yabancı Diller (İngilizce & Almanca & Oxford Word Skills) Zenginleştirilmiş Müfredat
import { OXFORD_DATA } from './oxfordCurriculum';

export const LANGUAGES_DATA = {
  "oxford": OXFORD_DATA,
  "english": {
    "id": "ingilizce",
    "name": "İngilizce (English)",
    "shortName": "İngilizce",
    "icon": "🇬🇧",
    "color": "#2563EB",
    "gradient": "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    "lightBg": "#EFF6FF",
    "description": "Çoklu Yabancı Dil: School Life, Classroom Life, Personal Life, Family Life ve dinleme/konuşma etkinlikleri",
    "units": [
      {
        "id": "eng_u1",
        "unitNumber": 1,
        "title": "Theme 1: School Life (Okul Yaşamı)",
        "description": "Okulda tanışma, selamlaşma, okulun bölümleri, yer-yön tarifleri, kurallar ve kulüpler",
        "topics": [
          {
            "id": "eng_u1_t1",
            "title": "Meeting People & Greetings at School (Tanışma & Selamlaşma)",
            "kazanimCode": "ENG.5.1.W1.1",
            "kazanimDesc": "Öğrenci okul ortamında temel selamlaşma ve tanışma ifadelerini kavrar, adını ve nereli olduğunu söyler, telaffuz eder.",
            "interactiveLab": {
              "type": "english-school-lab",
              "title": "İngilizce Okul & Diyalog Stüdyosu"
            },
            "summary": "\n• **Greetings (Selamlaşma İfadeleri):**\n  - **Hello! / Hi!:** Merhaba! (Her zaman ve her ortamda samimi karşılama)\n  - **Good morning!:** Günaydın! (Sabah saat 12:00'ye kadar)\n  - **Good afternoon!:** Tünaydın! / İyi günler! (Öğleden sonra saat 12:00 - 17:00 arası)\n  - **Good evening!:** İyi akşamlar! (Saat 17:00'den sonra)\n• **Meeting People (Tanışma Kalıpları):**\n  - **What is your name?:** Senin adın ne? ➔ **My name is Deniz.** (Benim adım Deniz.)\n  - **Nice to meet you!:** Tanıştığımıza memnun oldum! ➔ **Nice to meet you, too!:** Ben de memnun oldum!\n  - **How are you?:** Nasılsın? ➔ **I am fine, thank you. And you?:** İyiyim, teşekkürler. Ya sen?\n• **Countries & Nationalities (Ülke ve Milliyet Belirtme):**\n  - **Where are you from?:** Nerelisin? ➔ **I am from Türkiye.** (Ben Türkiye'denim / Türkiyeliyim.)\n  - **What nationality are you?:** Hangi milliyettensin? ➔ **I am Turkish.** (Ben Türküm.)\n  - **Önemli Kural:** Ülke söylerken \"from\" kullanılır (**from Spain**), milliyet söylerken \"from\" kullanılmaz (**I am Spanish**).\n              ",
            "keyConcepts": [
              "Hello",
              "Good morning",
              "What is your name?",
              "Nice to meet you",
              "Where are you from?",
              "Country",
              "Nationality"
            ],
            "pronunciationPhrases": [
              {
                "english": "Hello, what is your name?",
                "turkish": "Merhaba, senin adın ne?",
                "phonetic": "he-lo, vat iz yor neym",
                "category": "Meeting"
              },
              {
                "english": "My name is Deniz.",
                "turkish": "Benim adım Deniz.",
                "phonetic": "may neym iz deniz",
                "category": "Meeting"
              },
              {
                "english": "Nice to meet you!",
                "turkish": "Tanıştığımıza çok memnun oldum!",
                "phonetic": "nays tu miit yu",
                "category": "Meeting"
              },
              {
                "english": "Nice to meet you, too!",
                "turkish": "Ben de tanıştığımıza çok memnun oldum!",
                "phonetic": "nays tu miit yu tuu",
                "category": "Meeting"
              },
              {
                "english": "Where are you from?",
                "turkish": "Nerelisin? (Hangi ülkedensin?)",
                "phonetic": "ver ar yu from",
                "category": "Country"
              },
              {
                "english": "I am from Türkiye.",
                "turkish": "Ben Türkiye'denim.",
                "phonetic": "ay em from tür-ki-ye",
                "category": "Country"
              },
              {
                "english": "I am Turkish.",
                "turkish": "Ben Türküm.",
                "phonetic": "ay em tör-kiş",
                "category": "Nationality"
              },
              {
                "english": "How are you today?",
                "turkish": "Bugün nasılsın?",
                "phonetic": "hav ar yu tu-dey",
                "category": "Greeting"
              },
              {
                "english": "I am great, thank you!",
                "turkish": "Harikayım, teşekkür ederim!",
                "phonetic": "ay em greyt, tenk yu",
                "category": "Greeting"
              },
              {
                "english": "Have a great day at school!",
                "turkish": "Okulda harika bir gün geçir!",
                "phonetic": "hev e greyt dey et skuul",
                "category": "Farewell"
              }
            ],
            "flashcards": [
              {
                "id": "fc_eng_1",
                "front": "\"Where are you from?\" sorusuna hangi kalıpla cevap verilir?",
                "back": "\"I am from [Ülke İsmi].\" (Örn: I am from Türkiye.)",
                "tip": "\"from\" edatından sonra mutlaka ülke ismi gelmelidir, milliyet gelmez!",
                "example": "— Where are you from? — I am from Italy."
              },
              {
                "id": "fc_eng_2",
                "front": "\"What nationality are you?\" ne anlama gelir?",
                "back": "\"Hangi milliyettensin / Uyruğun nedir?\" anlamına gelir. Cevap: \"I am Turkish / Spanish / German.\"",
                "tip": "Milliyet söylerken \"from\" kullanılmaz: \"I am Turkish\" denir.",
                "example": "I am from Japan, so I am Japanese."
              },
              {
                "id": "fc_eng_3",
                "front": "\"Nice to meet you!\" ifadesine karşılık olarak ne denir?",
                "back": "\"Nice to meet you, too!\" (Ben de tanıştığımıza memnun oldum!)",
                "tip": "Cümlenin sonundaki \"too\" eki \"-de, -da\" (ben de) anlamına gelir.",
                "example": "— Nice to meet you! — Nice to meet you, too!"
              },
              {
                "id": "fc_eng_4",
                "front": "Sabah okula vardığında arkadaşına veya öğretmenine hangi selamı verirsin?",
                "back": "\"Good morning!\" (Günaydın!)",
                "tip": "Öğle saatine kadar (12:00) her zaman Good morning denir.",
                "example": "Good morning, Mr. Brown!"
              },
              {
                "id": "fc_eng_5",
                "front": "\"How are you?\" sorusuna teşekkür ederek nasıl cevap verilir?",
                "back": "\"I am fine, thank you. And you?\" (İyiyim, teşekkürler. Ya sen?)",
                "tip": "Nezaket için karşı tarafa her zaman \"And you?\" sorulur.",
                "example": "— How are you? — I am very well, thanks!"
              },
              {
                "id": "fc_eng_6",
                "front": "\"See you tomorrow!\" vedalaşırken ne anlama gelir?",
                "back": "\"Yarın görüşürüz!\" demektir.",
                "tip": "Tomorrow = Yarın. Okul çıkışında arkadaşlarına söyleyebilirsin.",
                "example": "Goodbye, see you tomorrow!"
              }
            ],
            "matching": [
              {
                "id": "m_e1_1",
                "left": "Where are you from?",
                "right": "Nerelisin?"
              },
              {
                "id": "m_e1_2",
                "left": "Nice to meet you",
                "right": "Tanıştığımıza memnun oldum"
              },
              {
                "id": "m_e1_3",
                "left": "Good morning",
                "right": "Günaydın"
              },
              {
                "id": "m_e1_4",
                "left": "I am Turkish",
                "right": "Ben Türküm (Milliyet)"
              },
              {
                "id": "m_e1_5",
                "left": "See you tomorrow",
                "right": "Yarın görüşürüz"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_e1_1",
                "text": "\"I am from Turkish\" cümlesi dil bilgisi açısından tamamen DOĞRUDUR.",
                "isTrue": false,
                "explanation": "Yanlış! \"from\" sözcüğünden sonra ülke adı gelmelidir: \"I am from Türkiye\" doğrusudur."
              },
              {
                "id": "tf_e1_2",
                "text": "Biriyle ilk kez tanıştığımızda nezaket ifadesi olarak \"Nice to meet you\" deriz.",
                "isTrue": true,
                "explanation": "Doğru! Karşılığında \"Nice to meet you, too\" (Ben de memnun oldum) yanıtı verilir."
              },
              {
                "id": "tf_e1_3",
                "text": "Öğleden sonra saat 14:00'te selamlaşırken \"Good afternoon\" denir.",
                "isTrue": true,
                "explanation": "Doğru! 12:00 - 17:00 saatleri arasında Good afternoon kullanılır."
              },
              {
                "id": "tf_e1_4",
                "text": "\"How are you?\" sorusuna yaşımızı söyleyerek cevap veririz.",
                "isTrue": false,
                "explanation": "Yanlış! \"How are you?\" hal-hatır sorar (\"Nasılsın?\"). Yaş için \"How old are you?\" sorulur."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_e1_1",
                "sentence": "— Where are you from? — I am from ___ .",
                "options": [
                  "Spain",
                  "Spanish",
                  "Turkish",
                  "English"
                ],
                "correctWord": "Spain",
                "hint": "\"from\" sözcüğünden sonra milliyet değil, ÜLKE adı gelir."
              },
              {
                "id": "fb_e1_2",
                "sentence": "— Nice to meet you! — Nice to meet you, ___ !",
                "options": [
                  "too",
                  "two",
                  "to",
                  "from"
                ],
                "correctWord": "too",
                "hint": "Cümle sonunda \"ben de\" anlamı katan sözcüğü seç."
              },
              {
                "id": "fb_e1_3",
                "sentence": "— What is your name? — ___ name is Aylin.",
                "options": [
                  "My",
                  "Your",
                  "His",
                  "Her"
                ],
                "correctWord": "My",
                "hint": "\"Benim\" anlamına gelen iyelik sıfatı."
              },
              {
                "id": "fb_e1_4",
                "sentence": "Sabah saat 08:30'da okula girdiğimizde \"Good ___ !\" deriz.",
                "options": [
                  "morning",
                  "night",
                  "evening",
                  "afternoon"
                ],
                "correctWord": "morning",
                "hint": "Sabah vaktinde söylenen selamlama."
              }
            ],
            "quiz": [
              {
                "id": "q_e1_1",
                "question": "— What nationality are you?\n— I am ___ .",
                "options": [
                  "Turkish",
                  "Türkiye",
                  "England",
                  "Germany"
                ],
                "correctAnswerIndex": 0,
                "hint": "Milliyet bildiren sözcüğü seçmelisin.",
                "explanation": "\"Turkish\" bir milliyettir. \"Türkiye, England, Germany\" ise ülke isimleridir."
              },
              {
                "id": "q_e1_2",
                "question": "Yeni nakil gelen bir öğrenciye nereli olduğunu sormak isteyen Can hangi soruyu sormalıdır?",
                "options": [
                  "Where are you from?",
                  "How old are you?",
                  "What time is it?",
                  "May I come in?"
                ],
                "correctAnswerIndex": 0,
                "hint": "Ülke/memleket sorma kalıbı.",
                "explanation": "\"Where are you from?\" nerelisin anlamına gelir."
              },
              {
                "id": "q_e1_3",
                "question": "— How are you today, Leo?\n— ___ , thank you. And you?",
                "options": [
                  "I am fine",
                  "I am from France",
                  "My name is Leo",
                  "I have got a pen"
                ],
                "correctAnswerIndex": 0,
                "hint": "Hal-hatır sorusuna uygun karşılık.",
                "explanation": "\"How are you today?\" sorusuna durumumuzu belirterek \"I am fine\" ile cevap veririz."
              },
              {
                "id": "q_e1_4",
                "question": "Aşağıdaki eşleştirmelerden hangisi ÜLKE - MİLLİYET bakımından DOĞRUDUR?",
                "options": [
                  "France — French",
                  "Germany — Spain",
                  "Italy — England",
                  "Japan — Turkish"
                ],
                "correctAnswerIndex": 0,
                "hint": "Fransa ülkesinin milliyet karşılığı.",
                "explanation": "France (Fransa) ➔ French (Fransız). Diğer şıklarda iki farklı ülke karıştırılmıştır."
              }
            ]
          },
          {
            "id": "eng_u1_t2",
            "title": "Places at School & Directions (Okulun Bölümleri & Yönler)",
            "kazanimCode": "ENG.5.1.W2.2",
            "kazanimDesc": "Okulun bölümlerini (Library, Canteen, Science Lab, Gym vb.) tanır ve nerede olduğunu sorup yönlendirir.",
            "summary": "\n• **Places at School (Okulun Bölümleri):**\n  - **Library (Kütüphane):** We read books and study quietly. (Sessizce kitap okuyup çalıştığımız yer)\n  - **Science Lab (Fen Laboratuvarı):** We do experiments with our teacher. (Deney yaptığımız laboratuvar)\n  - **Canteen (Kantin):** We buy snacks and drinks at break time. (Teneffüste atıştırmalık aldığımız yer)\n  - **Gym (Spor Salonu):** We play basketball, volleyball and exercise. (Beden eğitimi ve spor alanı)\n  - **Music Room (Müzik Odası):** We play instruments and sing songs. (Enstrüman çaldığımız oda)\n  - **Art Room (Görsel Sanatlar Odası):** We paint and draw pictures. (Resim yaptığımız atölye)\n  - **Playground (Okul Bahçesi):** We run, play and meet friends. (Bahçe ve oyun alanı)\n• **Asking & Giving Directions (Yer Sorma ve Yön Tarifi):**\n  - **Where is the library?:** Kütüphane nerede?\n  - **It is on the first floor.:** Birinci kattadır.\n  - **It is next to the science lab.:** Fen laboratuvarının yanındadır.\n  - **Go straight ahead and turn left.:** Düz git ve sola dön.\n              ",
            "keyConcepts": [
              "Library",
              "Canteen",
              "Science Lab",
              "Gym",
              "Art Room",
              "Where is the...?",
              "Next to",
              "Opposite"
            ],
            "pronunciationPhrases": [
              {
                "english": "Where is the school library?",
                "turkish": "Okul kütüphanesi nerede?",
                "phonetic": "ver iz dı skuul laybrıri",
                "category": "Directions"
              },
              {
                "english": "It is next to the science lab.",
                "turkish": "Fen laboratuvarının bitişiğindedir.",
                "phonetic": "it iz nekst tu dı sayıns läb",
                "category": "Location"
              },
              {
                "english": "The canteen is on the ground floor.",
                "turkish": "Kantin zemin kattadır.",
                "phonetic": "dı kentiiyn iz on dı gravnd floor",
                "category": "Location"
              },
              {
                "english": "We have P.E. in the gym.",
                "turkish": "Beden eğitimi dersimiz spor salonunda.",
                "phonetic": "vii hev pi-ii in dı cim",
                "category": "School Subject"
              },
              {
                "english": "Turn right at the corridor.",
                "turkish": "Koridordan sağa dön.",
                "phonetic": "törn rayt et dı koridor",
                "category": "Directions"
              },
              {
                "english": "Go straight ahead.",
                "turkish": "Düz git / dosdoğru ilerle.",
                "phonetic": "go streyt ehed",
                "category": "Directions"
              },
              {
                "english": "Quiet, please! Students are reading.",
                "turkish": "Sessiz olun lütfen! Öğrenciler okuyor.",
                "phonetic": "kvayıt pliiz, stüdınts ar riiding",
                "category": "Rules"
              },
              {
                "english": "Let's meet at the playground!",
                "turkish": "Okul bahçesinde buluşalım!",
                "phonetic": "lets miit et dı pley-gravnd",
                "category": "Activity"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e1_p1",
                "front": "Deneylerin yapıldığı okul bölümü hangisidir?",
                "back": "Science Lab (Fen Laboratuvarı)",
                "tip": "Science = Fen/Bilim, Lab = Laboratuvar.",
                "example": "We are in the science lab today."
              },
              {
                "id": "fc_e1_p2",
                "front": "\"Next to\" yer edatı ne anlama gelir?",
                "back": "\"Bitişiğinde / Hemen yanında\" demektir.",
                "tip": "Örn: The library is next to the teachers' room.",
                "example": "My desk is next to the window."
              },
              {
                "id": "fc_e1_p3",
                "front": "Teneffüste tost ve meyve suyu alabildiğimiz yer neresidir?",
                "back": "Canteen (Okul Kantini)",
                "tip": "At lunch, students go to the canteen.",
                "example": "I buy a sandwich from the canteen."
              },
              {
                "id": "fc_e1_p4",
                "front": "\"Turn left\" ve \"Turn right\" ifadeleri ne demektir?",
                "back": "\"Turn left\" = Sola dön, \"Turn right\" = Sağa dön.",
                "tip": "Left = Sol, Right = Sağ.",
                "example": "Go straight ahead and turn right."
              },
              {
                "id": "fc_e1_p5",
                "front": "Basketbol ve voleybol oynanan kapalı spor alanı hangisidir?",
                "back": "Gym / Gymnasium (Spor Salonu)",
                "tip": "P.E. (Physical Education) dersleri gym'de işlenir.",
                "example": "We play basketball in the gym."
              },
              {
                "id": "fc_e1_p6",
                "front": "\"Opposite\" konumu tarif ederken ne anlama gelir?",
                "back": "\"Karşısında / Tam karşısında\" demektir.",
                "tip": "Örn: The art room is opposite the music room.",
                "example": "The library is opposite the headmaster's office."
              }
            ],
            "matching": [
              {
                "id": "m_p1_1",
                "left": "Library",
                "right": "Kütüphane"
              },
              {
                "id": "m_p1_2",
                "left": "Science Lab",
                "right": "Fen Laboratuvarı"
              },
              {
                "id": "m_p1_3",
                "left": "Canteen",
                "right": "Kantin"
              },
              {
                "id": "m_p1_4",
                "left": "Gym",
                "right": "Spor Salonu"
              },
              {
                "id": "m_p1_5",
                "left": "Next to",
                "right": "Bitişiğinde / Yanında"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_p1_1",
                "text": "Öğrenciler resim ve boyama etkinliklerini \"Art Room\" içinde yaparlar.",
                "isTrue": true,
                "explanation": "Doğru! Art room = Resim/Sanat atölyesi demektir."
              },
              {
                "id": "tf_p1_2",
                "text": "\"Science Lab\" içinde yüksek sesle müzik dinlenip top oynanır.",
                "isTrue": false,
                "explanation": "Yanlış! Fen laboratuvarında deneyler yapılır ve dikkatli olunmalıdır. Top bahçede veya spor salonunda oynanır."
              },
              {
                "id": "tf_p1_3",
                "text": "\"Turn left\" sağa dönmek anlamına gelir.",
                "isTrue": false,
                "explanation": "Yanlış! Left = Sol demektir. \"Turn left\" sola dön demektir."
              },
              {
                "id": "tf_p1_4",
                "text": "Kütüphanede (Library) sessizce kitap okumak esastır.",
                "isTrue": true,
                "explanation": "Doğru! \"Be quiet in the library\" temel bir kütüphane kuralıdır."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_p1_1",
                "sentence": "We read storybooks and study in the school ___ .",
                "options": [
                  "library",
                  "gym",
                  "canteen",
                  "playground"
                ],
                "correctWord": "library",
                "hint": "Kitap okunan ve araştırma yapılan sessiz yer."
              },
              {
                "id": "fb_p1_2",
                "sentence": "The art room is ___ to the music room.",
                "options": [
                  "next",
                  "under",
                  "on",
                  "in"
                ],
                "correctWord": "next",
                "hint": "\"___ to\" kalıbıyla yanında/bitişiğinde anlamına gelen edat."
              },
              {
                "id": "fb_p1_3",
                "sentence": "Students buy lunch and water from the ___ .",
                "options": [
                  "canteen",
                  "library",
                  "lab",
                  "gym"
                ],
                "correctWord": "canteen",
                "hint": "Yiyecek ve içecek temin edilen yer."
              },
              {
                "id": "fb_p1_4",
                "sentence": "To find the gym, go straight ahead and turn ___ (sağa).",
                "options": [
                  "right",
                  "left",
                  "up",
                  "down"
                ],
                "correctWord": "right",
                "hint": "Sağ yönü bildiren İngilizce sözcük."
              }
            ],
            "quiz": [
              {
                "id": "q_p1_1",
                "question": "— Where can we do a science experiment with a microscope?\n— In the ___ .",
                "options": [
                  "science lab",
                  "school canteen",
                  "counseling room",
                  "playground"
                ],
                "correctAnswerIndex": 0,
                "hint": "Deney ve mikroskop hangi odadadır?",
                "explanation": "Deneyler ve mikroskop çalışmaları \"Science Lab\" (Fen Laboratuvarı) içinde yapılır."
              },
              {
                "id": "q_p1_2",
                "question": "— Excuse me, where is the music room?\n— It is ___ the first floor, opposite the library.",
                "options": [
                  "on",
                  "at",
                  "under",
                  "from"
                ],
                "correctAnswerIndex": 0,
                "hint": "Kat bildiren (first floor) ifadelerin başında hangi edat kullanılır?",
                "explanation": "Kat bildiren ifadelerde her zaman \"on the first/second floor\" kullanılır."
              },
              {
                "id": "q_p1_3",
                "question": "Aşağıdaki tabelalardan hangisi \"Okul Kütüphanesi\" kapısında bulunmalıdır?",
                "options": [
                  "Silence, please! 🤫",
                  "Do not run with the ball! ⚽",
                  "Wear safety goggles! 🥽",
                  "Wash the dishes! 🍽️"
                ],
                "correctAnswerIndex": 0,
                "hint": "Kütüphane kuralı nedir?",
                "explanation": "Kütüphanede sessizlik esastır: \"Silence, please!\" tabelası asılır."
              },
              {
                "id": "q_p1_4",
                "question": "\"The gym is between the canteen and the art room.\" cümlesine göre spor salonu nerededir?",
                "options": [
                  "Kantin ile resim odasının arasındadır.",
                  "Kantinin tam arkasındadır.",
                  "Resim odasının üzerindedir.",
                  "Okul bahçesinin dışındadır."
                ],
                "correctAnswerIndex": 0,
                "hint": "\"between ... and ...\" iki şeyin arası demektir.",
                "explanation": "\"Between A and B\", A ile B'nin arasında anlamına gelir."
              }
            ]
          },
          {
            "id": "eng_u1_t3",
            "title": "School Rules & After-School Clubs (Okul Kuralları & Kulüpler)",
            "kazanimCode": "ENG.5.1.W3.3",
            "kazanimDesc": "Okul kurallarını (Must / Mustn't, Can / Can't) kavrar ve ilgi alanlarına göre okul kulüplerini ifade eder.",
            "summary": "\n• **School Rules with Must / Mustn't (Zorunluluk ve Yasaklar):**\n  - **Must (Yapmalısın - Zorunluluk/Kural):**\n    - You **must listen** to your teacher. (Öğretmenini dinlemelisin.)\n    - You **must arrive** at school on time. (Okula zamanında gelmelisin.)\n    - You **must keep** the classroom clean. (Sınıfı temiz tutmalısın.)\n  - **Mustn't (Yapmamalısın - Yasak/Kural ihlali):**\n    - You **mustn't run** in the corridors. (Koridorlarda koşmamalısın.)\n    - You **mustn't make** noise during the lesson. (Ders sırasında gürültü yapmamalısın.)\n    - You **mustn't drop** litter on the floor. (Yere çöp atmamalısın.)\n• **After-School Clubs (Okul Kulüpleri):**\n  - **Chess Club (Satranç Kulübü):** I like thinking and playing chess.\n  - **Drama Club (Tiyatro Kulübü):** We act out plays and sketches.\n  - **Music Club (Müzik Kulübü):** We sing and play the guitar.\n  - **Art Club (Resim Kulübü):** We paint canvases and do crafts.\n  - **Robotics & Coding Club (Robotik & Kodlama):** We build robots and write code!\n              ",
            "keyConcepts": [
              "Must",
              "Mustn't",
              "School Rules",
              "Chess Club",
              "Drama Club",
              "Robotics Club",
              "On time"
            ],
            "pronunciationPhrases": [
              {
                "english": "You must listen to your teacher.",
                "turkish": "Öğretmenini dikkatle dinlemelisin.",
                "phonetic": "yu mast lisın tu yor tiiçır",
                "category": "Rule"
              },
              {
                "english": "You mustn't run in the corridor.",
                "turkish": "Koridorda koşmamalısın!",
                "phonetic": "yu masınt ran in dı koridor",
                "category": "Rule"
              },
              {
                "english": "We must keep our classroom clean.",
                "turkish": "Sınıfımızı temiz tutmalıyız.",
                "phonetic": "vii mast kiip avır klaas-ruum kliin",
                "category": "Rule"
              },
              {
                "english": "I want to join the Chess Club.",
                "turkish": "Satranç Kulübüne katılmak istiyorum.",
                "phonetic": "ay vant tu coyn dı çes klab",
                "category": "Club"
              },
              {
                "english": "She loves the Drama Club.",
                "turkish": "O tiyatro kulübünü çok seviyor.",
                "phonetic": "şii lavz dı drama klab",
                "category": "Club"
              },
              {
                "english": "Robotics and Coding is very exciting!",
                "turkish": "Robotik ve kodlama çok heyecan verici!",
                "phonetic": "ro-botiks end kooding iz veri iksayting",
                "category": "Club"
              },
              {
                "english": "Always be on time for the lessons.",
                "turkish": "Derslere her zaman vaktinde yetiş.",
                "phonetic": "olveys bii on taym for dı lesınz",
                "category": "Rule"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e1_r1",
                "front": "\"You mustn't run in the corridor.\" ne anlama gelir?",
                "back": "\"Koridorda koşmamalısın (yasaktır).\" anlamına gelir.",
                "tip": "Mustn't = Yapılması yasak olan veya zarar verecek durumlar için kullanılır.",
                "example": "You mustn't shout in class."
              },
              {
                "id": "fc_e1_r2",
                "front": "\"Must\" ile \"Mustn't\" arasındaki temel fark nedir?",
                "back": "\"Must\" zorunlu yapılması gereken kuraldır; \"Mustn't\" ise kesinlikle yapılmaması gereken yasaktır.",
                "tip": "Must = Yapmalısın, Mustn't = Yapmamalısın!",
                "example": "You must study, you mustn't cheat."
              },
              {
                "id": "fc_e1_r3",
                "front": "Sahneye çıkıp rol yapmayı ve canlandırmayı seven öğrenci hangi kulübü seçmelidir?",
                "back": "Drama Club (Tiyatro Kulübü)",
                "tip": "Drama = Tiyatro ve sahne sanatları.",
                "example": "I joined the Drama Club this year."
              },
              {
                "id": "fc_e1_r4",
                "front": "Strateji ve zeka oyunlarını seven bir öğrenci hangi kulübe katılmalıdır?",
                "back": "Chess Club (Satranç Kulübü)",
                "tip": "Chess = Satranç.",
                "example": "We play chess tournaments every Friday."
              },
              {
                "id": "fc_e1_r5",
                "front": "\"Be on time!\" kuralı ne demektir?",
                "back": "\"Zamanında ol! / Vaktinde gel!\" demektir.",
                "tip": "Ders zilinden önce sınıfta olmak için bu kurala uyarız.",
                "example": "You must be on time for school."
              },
              {
                "id": "fc_e1_r6",
                "front": "Bilgisayar, devreler ve yazılım tasarlanan kulüp hangisidir?",
                "back": "Robotics and Coding Club (Robotik & Kodlama Kulübü)",
                "tip": "TYMM yenilikçi beceriler kapsamındadır.",
                "example": "We code smart games in our robotics club."
              }
            ],
            "matching": [
              {
                "id": "m_r1_1",
                "left": "Must listen",
                "right": "Dinlemelisin (Kural)"
              },
              {
                "id": "m_r1_2",
                "left": "Mustn't run",
                "right": "Koşmamalısın (Yasak)"
              },
              {
                "id": "m_r1_3",
                "left": "Chess Club",
                "right": "Satranç Kulübü"
              },
              {
                "id": "m_r1_4",
                "left": "Drama Club",
                "right": "Tiyatro Kulübü"
              },
              {
                "id": "m_r1_5",
                "left": "Keep clean",
                "right": "Temiz tutmak"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_r1_1",
                "text": "Okul kurallarına göre koridorlarda hızla koşmak serbesttir.",
                "isTrue": false,
                "explanation": "Yanlış! Güvenlik için koridorda koşmak yasaktır: \"You mustn't run in the corridor.\""
              },
              {
                "id": "tf_r1_2",
                "text": "\"You must raise your hand to speak\" kuralı \"Konuşmak için el kaldırmalısın\" demektir.",
                "isTrue": true,
                "explanation": "Doğru! Söz hakkı almak için parmak kaldırılır: \"Raise your hand.\""
              },
              {
                "id": "tf_r1_3",
                "text": "Resim yapmayı ve el sanatlarını seven bir öğrenci \"Music Club\"a gitmelidir.",
                "isTrue": false,
                "explanation": "Yanlış! Resim ve el işi için \"Art Club\" seçilmelidir; müzik kulübü enstrüman ve şarkı içindir."
              },
              {
                "id": "tf_r1_4",
                "text": "Ders zili çaldığında sınıfta olmak \"on time\" (zamanında olmak) kuralıdır.",
                "isTrue": true,
                "explanation": "Doğru! Okula ve derse vaktinde gelmek temel bir sorumluluktur."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_r1_1",
                "sentence": "You ___ listen carefully when your teacher explains.",
                "options": [
                  "must",
                  "mustn't",
                  "can't",
                  "not"
                ],
                "correctWord": "must",
                "hint": "Yapılması zorunlu ve olumlu kural (dinlemelisin)."
              },
              {
                "id": "fb_r1_2",
                "sentence": "You ___ drop trash or litter on the classroom floor.",
                "options": [
                  "mustn't",
                  "must",
                  "always",
                  "can"
                ],
                "correctWord": "mustn't",
                "hint": "Yere çöp atmak yasaktır (yapmamalısın)."
              },
              {
                "id": "fb_r1_3",
                "sentence": "Emre plays the guitar and sings, so he joins the ___ Club.",
                "options": [
                  "Music",
                  "Chess",
                  "Science",
                  "Football"
                ],
                "correctWord": "Music",
                "hint": "Gitar ve şarkı söyleme ile ilgili kulüp."
              },
              {
                "id": "fb_r1_4",
                "sentence": "Students must be on ___ for their morning classes.",
                "options": [
                  "time",
                  "clock",
                  "hour",
                  "day"
                ],
                "correctWord": "time",
                "hint": "\"on ___\" vaktinde/zamanında anlamına gelir."
              }
            ],
            "quiz": [
              {
                "id": "q_r1_1",
                "question": "Sınıfta arkadaşlarına saygılı bir öğrenci aşağıdaki davranışlardan hangisini YAPMALIDIR (must)?",
                "options": [
                  "Raise your hand before speaking",
                  "Shout loudly in the lesson",
                  "Eat potato chips during class",
                  "Throw paper on the floor"
                ],
                "correctAnswerIndex": 0,
                "hint": "Söz isteme kuralı.",
                "explanation": "\"Raise your hand before speaking\" (Konuşmadan önce elini kaldır) doğru sınıf kuralıdır."
              },
              {
                "id": "q_r1_2",
                "question": "\"You ___ chew gum in the classroom.\" Boşluğa kural gereği hangisi gelmelidir?",
                "options": [
                  "mustn't",
                  "must",
                  "always",
                  "good"
                ],
                "correctAnswerIndex": 0,
                "hint": "Derste sakız çiğnemek yasaktır.",
                "explanation": "Derste sakız çiğnenmez: \"You mustn't chew gum in class.\""
              },
              {
                "id": "q_r1_3",
                "question": "Hakan satranç tahtasında strateji kurmayı çok seviyor. Hakan'a hangi okul kulübünü önerirsin?",
                "options": [
                  "Chess Club",
                  "Drama Club",
                  "Dance Club",
                  "Swimming Club"
                ],
                "correctAnswerIndex": 0,
                "hint": "Satranç kulübü.",
                "explanation": "Satranç = Chess. Hakan Chess Club'a katılmalıdır."
              },
              {
                "id": "q_r1_4",
                "question": "Aşağıdaki okul kurallarından hangisi \"MUSTN'T\" (Yasak) ile ifade edilir?",
                "options": [
                  "Damage school property and desks",
                  "Keep the classroom clean",
                  "Help your classmates",
                  "Do your homework"
                ],
                "correctAnswerIndex": 0,
                "hint": "Okul eşyalarına ve sıralara zarar vermek.",
                "explanation": "Okul eşyalarına zarar verilmemelidir: \"You mustn't damage school property.\""
              }
            ]
          }
        ]
      },
      {
        "id": "eng_u2",
        "unitNumber": 2,
        "title": "Theme 2: Classroom Life (Sınıf Yaşamı)",
        "description": "Sınıf eşyaları, kırtasiye gereçleri, dersler, haftalık ders programı ve sınıf içi yönergeler",
        "topics": [
          {
            "id": "eng_u2_t1",
            "title": "Classroom Objects, Stationery & Numbers (Sınıf Eşyaları & Sayılar)",
            "kazanimCode": "ENG.5.2.W1.1",
            "kazanimDesc": "Sınıftaki araç-gereçleri, kırtasiye malzemelerini ve nesne sayılarını (There is / There are, How many?) ifade eder.",
            "interactiveLab": {
              "type": "english-classroom-lab",
              "title": "Sınıf Nesneleri & Cümle Kurucu Lab"
            },
            "summary": "\n• **Classroom Objects & Stationery (Araç-Gereçler):**\n  - **Pen:** Tükenmez kalem | **Pencil:** Kurşun kalem | **Eraser / Rubber:** Silgi\n  - **Pencil case:** Kalem kutusu | **Ruler:** Cetvel | **Sharpener:** Kalemtıraş\n  - **School bag / Backpack:** Okul çantası | **Notebook:** Defter | **Coursebook:** Ders kitabı\n  - **Desk:** Öğrenci sırası | **Chair:** Sandalye | **Whiteboard:** Yazı tahtası\n• **There is / There are (Var / Bulunuyor):**\n  - **There is a / an:** Tekil nesneler için (1 tane):\n    - *There is a notebook on the desk.* (Sırada bir defter var.)\n    - *There is an eraser in my bag.* (Çantamda bir silgi var.)\n  - **There are:** Çoğul nesneler için (Birden fazla):\n    - *There are three pencils in the pencil case.* (Kalemlikte 3 kurşun kalem var.)\n• **Asking Quantity (Miktar Sorma):**\n  - **How many pens are there?:** Kaç tane tükenmez kalem var?\n  - ➔ *There are four pens.* (4 tane var.)\n• **Numbers 1 - 100:**\n  - 10: ten, 20: twenty, 30: thirty, 40: forty, 50: fifty, 100: one hundred.\n              ",
            "keyConcepts": [
              "Pencil",
              "Eraser",
              "Ruler",
              "School bag",
              "There is",
              "There are",
              "How many?",
              "Numbers"
            ],
            "pronunciationPhrases": [
              {
                "english": "What is this? It is a pencil case.",
                "turkish": "Bu nedir? Bu bir kalem kutusudur.",
                "phonetic": "vat iz dis, it iz e pensıl keys",
                "category": "Stationery"
              },
              {
                "english": "There is a ruler on the desk.",
                "turkish": "Sıranın üzerinde bir cetvel var.",
                "phonetic": "der iz e ruulır on dı desk",
                "category": "Grammar"
              },
              {
                "english": "There are five notebooks in my school bag.",
                "turkish": "Okul çantamda beş defter var.",
                "phonetic": "der ar fayv nootbuks in may skuul bäg",
                "category": "Grammar"
              },
              {
                "english": "How many students are there in the classroom?",
                "turkish": "Sınıfta kaç öğrenci var?",
                "phonetic": "hav meni stüdınts ar der in dı klaas-ruum",
                "category": "Question"
              },
              {
                "english": "There are twenty-four students.",
                "turkish": "Yirmi dört öğrenci var.",
                "phonetic": "der ar tventi foor stüdınts",
                "category": "Number"
              },
              {
                "english": "Put your books into your backpack.",
                "turkish": "Kitaplarını sırt çantana koy.",
                "phonetic": "put yor buks intu yor bäk-päk",
                "category": "Instruction"
              },
              {
                "english": "I need a sharpener and an eraser.",
                "turkish": "Bir kalemtıraş ve bir silgiye ihtiyacım var.",
                "phonetic": "ay niid e şarpınır end en ireysır",
                "category": "Need"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e2_o1",
                "front": "Tekil nesneler için (1 adet) \"var\" derken ne kullanılır?",
                "back": "\"There is\" kullanılır (Örn: There is a book).",
                "tip": "Tekil ve sayılamayan nesnelerle There is, çoğul nesnelerle There are kullanılır.",
                "example": "There is an apple on the table."
              },
              {
                "id": "fc_e2_o2",
                "front": "Çoğul nesneler için (2 veya daha fazla) \"var\" nasıl denir?",
                "back": "\"There are\" kullanılır (Örn: There are ten pencils).",
                "tip": "Kelimenin sonundaki -s çoğul ekine dikkat et!",
                "example": "There are three notebooks in my bag."
              },
              {
                "id": "fc_e2_o3",
                "front": "\"How many...?\" sorusu neyi sormak için kullanılır?",
                "back": "\"Kaç tane?\" anlamına gelir ve sayılabilen nesnelerin miktarını sorar.",
                "tip": "How many sorusundan sonraki isim her zaman çoğul olur: How many pens...?",
                "example": "How many rulers have you got?"
              },
              {
                "id": "fc_e2_o4",
                "front": "\"40\" sayısının doğru İngilizce yazılışı nedir?",
                "back": "\"Forty\" olarak yazılır (Fourty değil, u harfi düşer!).",
                "tip": "Four (4), Fourteen (14) ama FORTY (40).",
                "example": "There are forty pages in this booklet."
              },
              {
                "id": "fc_e2_o5",
                "front": "Kurşun kalemimizin ucu kırıldığında ne kullanırız?",
                "back": "Pencil sharpener (Kalemtıraş)",
                "tip": "Sharp = keskin, Sharpener = keskinleştiren/açan alet.",
                "example": "Can I use your sharpener?"
              },
              {
                "id": "fc_e2_o6",
                "front": "Sıranın üzerinde bir cetvel olduğunu nasıl söylersin?",
                "back": "\"There is a ruler on the desk.\"",
                "tip": "On = Üzerinde, Desk = Öğrenci sırası.",
                "example": "The ruler is thirty centimeters long."
              }
            ],
            "matching": [
              {
                "id": "m_e2_1",
                "left": "Pencil sharpener",
                "right": "Kalemtıraş"
              },
              {
                "id": "m_e2_2",
                "left": "Eraser",
                "right": "Silgi"
              },
              {
                "id": "m_e2_3",
                "left": "Ruler",
                "right": "Cetvel"
              },
              {
                "id": "m_e2_4",
                "left": "There is",
                "right": "Vardır (Tekil)"
              },
              {
                "id": "m_e2_5",
                "left": "There are",
                "right": "Vardır (Çoğul)"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_e2_1",
                "text": "\"There is five pencils on the desk\" cümlesi dil bilgisi açısından DOĞRUDUR.",
                "isTrue": false,
                "explanation": "Yanlış! Beş kalem çoğul olduğu için \"There are five pencils\" olmalıdır."
              },
              {
                "id": "tf_e2_2",
                "text": "\"How many notebooks are there?\" sorusu sınıftaki defterlerin sayısını öğrenmek için sorulur.",
                "isTrue": true,
                "explanation": "Doğru! \"How many\" kaç tane miktarını sorar."
              },
              {
                "id": "tf_e2_3",
                "text": "İngilizcede \"40\" sayısı \"fourty\" şeklinde yazılır.",
                "isTrue": false,
                "explanation": "Yanlış! Doğru yazılışı \"forty\"dir (u harfi bulunmaz)."
              },
              {
                "id": "tf_e2_4",
                "text": "Silgi kelimesinin İngilizce karşılığı hem \"eraser\" hem de \"rubber\" olabilir.",
                "isTrue": true,
                "explanation": "Doğru! Amerikan İngilizcesinde eraser, İngiliz İngilizcesinde rubber yaygındır."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_e2_1",
                "sentence": "___ is a whiteboard on the classroom wall.",
                "options": [
                  "There",
                  "They",
                  "These",
                  "This"
                ],
                "correctWord": "There",
                "hint": "\"___ is a ...\" (vardır) kalıbı."
              },
              {
                "id": "fb_e2_2",
                "sentence": "There ___ three rulers in my pencil case.",
                "options": [
                  "are",
                  "is",
                  "am",
                  "be"
                ],
                "correctWord": "are",
                "hint": "Üç cetvel çoğul olduğu için uygun yardımcı fiil."
              },
              {
                "id": "fb_e2_3",
                "sentence": "— ___ many chairs are there in the room? — There are twenty.",
                "options": [
                  "How",
                  "What",
                  "Where",
                  "Who"
                ],
                "correctWord": "How",
                "hint": "\"Kaç tane?\" soru kalıbının ilk sözcüğü."
              },
              {
                "id": "fb_e2_4",
                "sentence": "I put my pens and eraser into my ___ .",
                "options": [
                  "pencil case",
                  "window",
                  "board",
                  "door"
                ],
                "correctWord": "pencil case",
                "hint": "Kalem ve silgilerin konulduğu fermuarlı kutu."
              }
            ],
            "quiz": [
              {
                "id": "q_e2_1",
                "question": "Masada TEK BİR sözlük olduğunu söylemek için hangi cümle kurulmalıdır?",
                "options": [
                  "There is a dictionary on the desk.",
                  "There are two dictionaries on the desk.",
                  "There are a dictionary on the desk.",
                  "There is many dictionaries on the desk."
                ],
                "correctAnswerIndex": 0,
                "hint": "Tekil nesnelerle There is a...",
                "explanation": "Tekil bir nesne için \"There is a dictionary\" doğru kalıptır."
              },
              {
                "id": "q_e2_2",
                "question": "— How many students are there in 5-A?\n— There ___ 25 students.",
                "options": [
                  "are",
                  "is",
                  "am",
                  "was"
                ],
                "correctAnswerIndex": 0,
                "hint": "25 öğrenci çoğuldur.",
                "explanation": "25 öğrenci çoğul olduğu için \"There are\" kullanılır."
              },
              {
                "id": "q_e2_3",
                "question": "30, 40 ve 50 sayılarının İngilizce sıralaması hangisinde DOĞRUDUR?",
                "options": [
                  "thirty, forty, fifty",
                  "thirteen, fourteen, fifteen",
                  "three, four, five",
                  "thirty, fourty, fifty"
                ],
                "correctAnswerIndex": 0,
                "hint": "-ty ile biten onluk sayılar.",
                "explanation": "30 = thirty, 40 = forty, 50 = fifty."
              },
              {
                "id": "q_e2_4",
                "question": "Öğretmen: \"Look at the ___ and read the sentence.\" cümlesinde öğrencilerin nereye bakmasını ister?",
                "options": [
                  "whiteboard",
                  "pencil case",
                  "sharpener",
                  "chair"
                ],
                "correctAnswerIndex": 0,
                "hint": "Yazı yazılan ve okunan sınıf tahtası.",
                "explanation": "Öğretmenler cümleleri yazı tahtasına (whiteboard) yazarlar."
              }
            ]
          },
          {
            "id": "eng_u2_t2",
            "title": "School Subjects & Timetables (Dersler, Günler & Ders Programı)",
            "kazanimCode": "ENG.5.2.W2.2",
            "kazanimDesc": "Ders isimlerini (Maths, Science, English, Art, P.E.), haftanın günlerini ve ders programı saatlerini söyler.",
            "summary": "\n• **School Subjects (Okul Dersleri):**\n  - **Maths (Matematik):** Numbers, shapes and calculations.\n  - **Science (Fen Bilimleri):** Nature, space, animals and experiments.\n  - **English (İngilizce):** Speaking, vocabulary, reading and listening.\n  - **Turkish (Türkçe):** Reading comprehension, poems and grammar.\n  - **Social Studies (Sosyal Bilgiler):** History, geography and culture.\n  - **Information Technology / I.T. (Bilişim Teknolojileri):** Computers and coding.\n  - **Physical Education / P.E. (Beden Eğitimi):** Sports and movement.\n  - **Music (Müzik):** Songs and instruments.\n  - **Art (Görsel Sanatlar):** Drawing, painting and sculpturing.\n• **Days of the Week (Haftanın Günleri):**\n  - **Monday:** Pazartesi | **Tuesday:** Salı | **Wednesday:** Çarşamba\n  - **Thursday:** Perşembe | **Friday:** Cuma | **Saturday:** Cumartesi | **Sunday:** Pazar\n• **Expressing Likes / Dislikes:**\n  - *I like Science because it is fun.* (Feni severim çünkü eğlenceli.)\n  - *My favourite subject is English.* (En sevdiğim ders İngilizcedir.)\n• **Talking About Timetables:**\n  - *When is English?* ➔ *It is on Wednesday and Friday.* (Günlerin önünde **\"on\"** kullanılır!)\n              ",
            "keyConcepts": [
              "Maths",
              "Science",
              "English",
              "P.E.",
              "Days of the week",
              "Favourite subject",
              "When is...?"
            ],
            "pronunciationPhrases": [
              {
                "english": "What is your favourite school subject?",
                "turkish": "En sevdiğin ders hangisidir?",
                "phonetic": "vat iz yor feyvırıt skuul sabcekt",
                "category": "Question"
              },
              {
                "english": "My favourite subject is Science.",
                "turkish": "Benim en sevdiğim ders Fendir.",
                "phonetic": "may feyvırıt sabcekt iz sayıns",
                "category": "Subject"
              },
              {
                "english": "We have English on Monday and Thursday.",
                "turkish": "Pazartesi ve Perşembe günleri İngilizce dersimiz var.",
                "phonetic": "vii hev ingliş on mandey end törzdey",
                "category": "Timetable"
              },
              {
                "english": "I love P.E. because I like playing basketball.",
                "turkish": "Beden eğitimini çok severim çünkü basketbol oynamayı seviyorum.",
                "phonetic": "ay lav pi-ii bikoz ay layk pleying basket-bool",
                "category": "Preference"
              },
              {
                "english": "When is the Maths exam?",
                "turkish": "Matematik sınavı ne zaman?",
                "phonetic": "ven iz dı mets igzem",
                "category": "Timetable"
              },
              {
                "english": "It is on Tuesday morning.",
                "turkish": "Salı sabahı.",
                "phonetic": "it iz on tüüzdey morning",
                "category": "Timetable"
              },
              {
                "english": "Today is Friday, the weekend is coming!",
                "turkish": "Bugün Cuma, hafta sonu geliyor!",
                "phonetic": "tudey iz fraydey, dı viikend iz kaming",
                "category": "Days"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e2_s1",
                "front": "Haftanın günlerinden önce hangi edat kullanılır?",
                "back": "\"on\" edatı kullanılır (Örn: on Monday, on Friday).",
                "tip": "Günlerle on, aylarla in, saatlerle at kullanılır.",
                "example": "We have Art on Friday afternoon."
              },
              {
                "id": "fc_e2_s2",
                "front": "\"P.E.\" hangi dersin kısaltmasıdır?",
                "back": "Physical Education (Beden Eğitimi ve Spor)",
                "tip": "Physical = Fiziksel/Beden, Education = Eğitim.",
                "example": "Wear your sports shoes for P.E. class."
              },
              {
                "id": "fc_e2_s3",
                "front": "\"What is your favourite subject?\" ne demektir?",
                "back": "\"En sevdiğin ders hangisidir?\" demektir.",
                "tip": "Cevap: \"My favourite subject is ...\"",
                "example": "My favourite subject is Information Technology."
              },
              {
                "id": "fc_e2_s4",
                "front": "Hafta içi günleri hangileridir?",
                "back": "Monday, Tuesday, Wednesday, Thursday, Friday (Weekdays)",
                "tip": "Saturday ve Sunday ise hafta sonudur (Weekend).",
                "example": "School is open on weekdays."
              },
              {
                "id": "fc_e2_s5",
                "front": "\"Social Studies\" dersinde neler öğrenilir?",
                "back": "Tarih, coğrafya, toplum ve kültür (Sosyal Bilgiler).",
                "tip": "Social = Sosyal, Studies = Çalışmalar/Dersler.",
                "example": "We study maps in Social Studies."
              },
              {
                "id": "fc_e2_s6",
                "front": "\"When do you have English?\" sorusu neyi sorar?",
                "back": "\"İngilizce dersiniz ne zaman?\" anlamındadır.",
                "tip": "When = Ne zaman?",
                "example": "— When do you have English? — On Wednesday."
              }
            ],
            "matching": [
              {
                "id": "m_s1_1",
                "left": "Maths",
                "right": "Matematik"
              },
              {
                "id": "m_s1_2",
                "left": "Science",
                "right": "Fen Bilimleri"
              },
              {
                "id": "m_s1_3",
                "left": "Wednesday",
                "right": "Çarşamba"
              },
              {
                "id": "m_s1_4",
                "left": "Thursday",
                "right": "Perşembe"
              },
              {
                "id": "m_s1_5",
                "left": "Weekend",
                "right": "Hafta sonu"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_s1_1",
                "text": "Günlerin önünde \"at Monday\" şeklinde \"at\" edatı kullanılır.",
                "isTrue": false,
                "explanation": "Yanlış! Günlerin önünde daima \"on\" kullanılır: \"on Monday\" doğrusudur."
              },
              {
                "id": "tf_s1_2",
                "text": "Haftanın üçüncü iş günü \"Wednesday\" (Çarşamba) günüdür.",
                "isTrue": true,
                "explanation": "Doğru! Monday (1), Tuesday (2), Wednesday (3)."
              },
              {
                "id": "tf_s1_3",
                "text": "\"I like Maths because numbers are easy for me\" cümlesi matematiği sevdiğini ifade eder.",
                "isTrue": true,
                "explanation": "Doğru! \"I like Maths\" matematiği severim demektir."
              },
              {
                "id": "tf_s1_4",
                "text": "\"Saturday\" ve \"Sunday\" günleri okulun açık olduğu hafta içi günleridir.",
                "isTrue": false,
                "explanation": "Yanlış! Cumartesi ve Pazar günleri hafta sonudur (weekend)."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_s1_1",
                "sentence": "We have a science quiz ___ Friday.",
                "options": [
                  "on",
                  "in",
                  "at",
                  "to"
                ],
                "correctWord": "on",
                "hint": "Günlerin önüne gelen doğru edat."
              },
              {
                "id": "fb_s1_2",
                "sentence": "Ali plays basketball and runs fast in ___ class.",
                "options": [
                  "P.E.",
                  "Maths",
                  "History",
                  "Music"
                ],
                "correctWord": "P.E.",
                "hint": "Spor ve hareket dersi."
              },
              {
                "id": "fb_s1_3",
                "sentence": "What is your ___ school subject? I love English!",
                "options": [
                  "favourite",
                  "bad",
                  "heavy",
                  "cold"
                ],
                "correctWord": "favourite",
                "hint": "\"En sevilen / favori\" anlamına gelen sözcük."
              },
              {
                "id": "fb_s1_4",
                "sentence": "The day between Tuesday and Thursday is ___ .",
                "options": [
                  "Wednesday",
                  "Monday",
                  "Friday",
                  "Sunday"
                ],
                "correctWord": "Wednesday",
                "hint": "Salı ile Perşembe arasındaki gün (Çarşamba)."
              }
            ],
            "quiz": [
              {
                "id": "q_s1_1",
                "question": "— When is our Turkish lesson?\n— It is ___ Monday morning at 09:00.",
                "options": [
                  "on",
                  "in",
                  "at",
                  "of"
                ],
                "correctAnswerIndex": 0,
                "hint": "Monday gününden önce hangi edat gelir?",
                "explanation": "Günlerden önce her zaman \"on\" edatı kullanılır: \"on Monday\"."
              },
              {
                "id": "q_s1_2",
                "question": "Resim yapmayı, boyaları ve heykelleri çok seven Zeynep'in en sevdiği ders hangisidir?",
                "options": [
                  "Art",
                  "Maths",
                  "Geography",
                  "Science"
                ],
                "correctAnswerIndex": 0,
                "hint": "Görsel sanatlar dersi.",
                "explanation": "Resim ve sanat etkinlikleri \"Art\" dersindedir."
              },
              {
                "id": "q_s1_3",
                "question": "Hangi seçenekteki gün \"HAFTA SONU\"na (weekend) aittir?",
                "options": [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday"
                ],
                "correctAnswerIndex": 0,
                "hint": "Pazar günü.",
                "explanation": "Sunday (Pazar) hafta sonu günüdür. Diğerleri hafta içidir."
              },
              {
                "id": "q_s1_4",
                "question": "— Do you like Maths?\n— No, I don't. Because it is ___ for me.",
                "options": [
                  "difficult",
                  "great",
                  "fun",
                  "easy"
                ],
                "correctAnswerIndex": 0,
                "hint": "Sevmediği için olumsuz bir neden belirtmeli.",
                "explanation": "\"Difficult\" (zor) olumsuz nedendir: \"Sevmiyorum çünkü benim için zor.\""
              }
            ]
          },
          {
            "id": "eng_u2_t3",
            "title": "Classroom Instructions & Asking for Permission (Yönergeler & İzin İsteme)",
            "kazanimCode": "ENG.5.2.W3.3",
            "kazanimDesc": "Öğretmen yönergelerini (Imperatives) anlar; \"May I...?\", \"Can I borrow...?\" kalıplarıyla nezaketle izin ister.",
            "summary": "\n• **Teacher's Instructions (Sınıf İçi Emir ve Yönergeler):**\n  - **Open your books:** Kitaplarınızı açın.\n  - **Close the door, please:** Kapıyı kapatın lütfen.\n  - **Listen carefully:** Dikkatle dinleyin.\n  - **Raise your hand:** Parmak kaldırın / Elinizi kaldırın.\n  - **Clean the board:** Tahtayı silin.\n  - **Sit down / Stand up:** Oturun / Ayağa kalkın.\n  - **Be quiet, please:** Lütfen sessiz olun.\n• **Asking for Permission (Kibarca İzin İsteme):**\n  - **May I come in?:** İçeri girebilir miyim? (Çok kibar)\n    - ➔ *Yes, you may. / Please come in.* (Evet, girebilirsin.)\n    - ➔ *I am sorry, not right now.* (Üzgünüm, şu an değil.)\n  - **May I drink water?:** Su içebilir miyim?\n  - **May I go to the restroom / toilet?:** Lavaboya gidebilir miyim?\n• **Borrowing Things (Ödünç İsteme):**\n  - **Can I borrow your pencil, please?:** Kalemini ödünç alabilir miyim lütfen?\n  - ➔ *Sure, here you are.* (Tabii ki, buyur al.)\n  - ➔ *Thank you! — You are welcome.* (Teşekkürler! — Rica ederim.)\n              ",
            "keyConcepts": [
              "May I come in?",
              "Can I borrow...?",
              "Here you are",
              "Raise your hand",
              "Listen carefully",
              "Be quiet"
            ],
            "pronunciationPhrases": [
              {
                "english": "May I come in, teacher?",
                "turkish": "İçeri girebilir miyim öğretmenim?",
                "phonetic": "mey ay kam in, tiiçır",
                "category": "Permission"
              },
              {
                "english": "Yes, of course! Please come in.",
                "turkish": "Evet tabii ki! Lütfen içeri gel.",
                "phonetic": "yes, ov koors! pliiz kam in",
                "category": "Permission"
              },
              {
                "english": "May I drink some water, please?",
                "turkish": "Biraz su içebilir miyim lütfen?",
                "phonetic": "mey ay drink sam vaatır, pliiz",
                "category": "Permission"
              },
              {
                "english": "Can I borrow your ruler, please?",
                "turkish": "Cetvelini ödünç alabilir miyim lütfen?",
                "phonetic": "ken ay barov yor ruulır, pliiz",
                "category": "Request"
              },
              {
                "english": "Sure, here you are!",
                "turkish": "Tabii ki, buyur al!",
                "phonetic": "şuur, hiir yu ar",
                "category": "Response"
              },
              {
                "english": "Open your books at page forty.",
                "turkish": "Kitaplarınızı sayfa kırkta açın.",
                "phonetic": "oopın yor buks et peyc forti",
                "category": "Instruction"
              },
              {
                "english": "Raise your hand before speaking.",
                "turkish": "Konuşmadan önce elinizi kaldırın.",
                "phonetic": "reyz yor hend bifoor spiiking",
                "category": "Instruction"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e2_i1",
                "front": "Sınıfa geç kaldığında kapıyı çalıp içeri girmek için ne dersin?",
                "back": "\"May I come in, please?\" (İçeri girebilir miyim lütfen?)",
                "tip": "\"May I...?\" en kibar izin isteme kalıbıdır.",
                "example": "Excuse me teacher, may I come in?"
              },
              {
                "id": "fc_e2_i2",
                "front": "Arkadaşın sana bir eşyasını uzatırken \"Buyur al\" anlamında ne der?",
                "back": "\"Here you are!\" (Buyur, al!)",
                "tip": "Karşılığında \"Thank you\" demeyi unutma!",
                "example": "— Can I borrow your rubber? — Here you are!"
              },
              {
                "id": "fc_e2_i3",
                "front": "\"Can I borrow your pencil?\" cümlesindeki \"borrow\" ne demektir?",
                "back": "\"Ödünç almak\" demektir.",
                "tip": "Geri vermek üzere geçici olarak istemektir.",
                "example": "You can borrow my book for two days."
              },
              {
                "id": "fc_e2_i4",
                "front": "\"Clean the board, please\" yönergesi ne anlama gelir?",
                "back": "\"Lütfen tahtayı sil\" demektir.",
                "tip": "Board = Yazı tahtası, Clean = Temizlemek/silmek.",
                "example": "Can you clean the board before the lesson?"
              },
              {
                "id": "fc_e2_i5",
                "front": "Biri sana \"Thank you\" dediğinde \"Rica ederim\" nasıl denir?",
                "back": "\"You are welcome!\" (Rica ederim!)",
                "tip": "Nezaket kurallarının en önemli yanıtıdır.",
                "example": "— Thanks for the pen! — You are welcome!"
              },
              {
                "id": "fc_e2_i6",
                "front": "\"Raise your hand\" ne demektir?",
                "back": "\"Elinizi / parmağınızı kaldırın\" demektir.",
                "tip": "Derste söz almak için kullanılır.",
                "example": "Raise your hand if you know the answer."
              }
            ],
            "matching": [
              {
                "id": "m_i1_1",
                "left": "May I come in?",
                "right": "İçeri girebilir miyim?"
              },
              {
                "id": "m_i1_2",
                "left": "Here you are",
                "right": "Buyur al"
              },
              {
                "id": "m_i1_3",
                "left": "Borrow",
                "right": "Ödünç almak"
              },
              {
                "id": "m_i1_4",
                "left": "You are welcome",
                "right": "Rica ederim"
              },
              {
                "id": "m_i1_5",
                "left": "Open your books",
                "right": "Kitaplarınızı açın"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_i1_1",
                "text": "\"May I go out?\" sınıftan dışarı çıkmak için izin isteme cümlesidir.",
                "isTrue": true,
                "explanation": "Doğru! \"Go out\" dışarı çıkmak demektir."
              },
              {
                "id": "tf_i1_2",
                "text": "Arkadaşımıza bir eşya uzatırken \"Here you are\" deriz.",
                "isTrue": true,
                "explanation": "Doğru! Türkçe karşılığı \"Buyur / buyrun alın\" demektir."
              },
              {
                "id": "tf_i1_3",
                "text": "\"Sit down\" yönergesi ayağa kalkmak anlamına gelir.",
                "isTrue": false,
                "explanation": "Yanlış! \"Sit down\" oturmak, \"Stand up\" ayağa kalkmak demektir."
              },
              {
                "id": "tf_i1_4",
                "text": "Biri \"Thank you\" dediğinde cevap olarak \"Goodbye\" denir.",
                "isTrue": false,
                "explanation": "Yanlış! Teşekkür edildiğinde \"You are welcome\" (Rica ederim) denir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_i1_1",
                "sentence": "— May I come in? — Yes, of course. Please ___ in.",
                "options": [
                  "come",
                  "go",
                  "clean",
                  "sit"
                ],
                "correctWord": "come",
                "hint": "\"İçeri gel\" fiili."
              },
              {
                "id": "fb_i1_2",
                "sentence": "Can I ___ your pencil sharpener, please?",
                "options": [
                  "borrow",
                  "write",
                  "draw",
                  "listen"
                ],
                "correctWord": "borrow",
                "hint": "Ödünç almak anlamına gelen fiil."
              },
              {
                "id": "fb_i1_3",
                "sentence": "— Thank you for helping me! — You are ___ !",
                "options": [
                  "welcome",
                  "hello",
                  "good",
                  "fine"
                ],
                "correctWord": "welcome",
                "hint": "\"Rica ederim\" kalıbının ikinci sözcüğü."
              },
              {
                "id": "fb_i1_4",
                "sentence": "Please ___ your hand before answering the question.",
                "options": [
                  "raise",
                  "drop",
                  "look",
                  "close"
                ],
                "correctWord": "raise",
                "hint": "El kaldırmak fiili."
              }
            ],
            "quiz": [
              {
                "id": "q_i1_1",
                "question": "Derste su içmek isteyen bir öğrenci öğretmeninden en kibar şekilde nasıl izin ister?",
                "options": [
                  "May I drink water, please?",
                  "Give me some water now!",
                  "I don't like water.",
                  "Where is the water?"
                ],
                "correctAnswerIndex": 0,
                "hint": "May I... ile izin isteme.",
                "explanation": "\"May I drink water, please?\" en kibar ve kurallara uygun izin isteme cümlesidir."
              },
              {
                "id": "q_i1_2",
                "question": "— Can I borrow your eraser?\n— Sure, ___ !",
                "options": [
                  "here you are",
                  "you are welcome",
                  "good morning",
                  "I am sorry"
                ],
                "correctAnswerIndex": 0,
                "hint": "Eşyayı uzatırken söylenen söz.",
                "explanation": "\"Sure, here you are!\" (Tabii ki, buyur al!) doğru yanıttır."
              },
              {
                "id": "q_i1_3",
                "question": "Öğretmen: \"Listen to the recording carefully and write the words.\" Bu yönergeye göre öğrenci ne yapmalıdır?",
                "options": [
                  "Kaydı dikkatle dinleyip kelimeleri yazmalıdır.",
                  "Kitabın kapağını kapatıp uyumalıdır.",
                  "Sınıf tahtasını temizlemelidir.",
                  "Bahçeye çıkıp koşmalıdır."
                ],
                "correctAnswerIndex": 0,
                "hint": "Listen = Dinlemek, write = yazmak.",
                "explanation": "Listen carefully = Dikkatle dinle, write = yaz demektir."
              },
              {
                "id": "q_i1_4",
                "question": "Aşağıdaki ifadelerden hangisi bir \"İZİN İSTEME\" (Permission) cümlesidir?",
                "options": [
                  "May I open the window, please?",
                  "Open the window right now!",
                  "The window is very dirty.",
                  "There are two windows in the room."
                ],
                "correctAnswerIndex": 0,
                "hint": "May I... kalıbı.",
                "explanation": "\"May I open the window, please?\" pencereyi açmak için izin isteme cümlesidir."
              }
            ]
          }
        ]
      },
      {
        "id": "eng_u3",
        "unitNumber": 3,
        "title": "Theme 3: Personal Life (Kişisel Yaşam)",
        "description": "Dış görünüş, boy/kilo, saç/göz renkleri, kişilik özellikleri, duygular ve günlük alışkanlıklar",
        "topics": [
          {
            "id": "eng_u3_t1",
            "title": "Physical Appearance & Personality (Dış Görünüş & Kişilik)",
            "kazanimCode": "ENG.5.3.W1.1",
            "kazanimDesc": "Kişilerin boy, saç/göz rengi gibi fiziksel özelliklerini ve dost canlısı, çalışkan vb. kişilik sıfatlarını tanımlar.",
            "summary": "\n• **Describing Physical Appearance (Fiziksel Özellikler):**\n  - **Height & Weight (Boy ve Kilo):**\n    - **tall:** uzun boylu | **short:** kısa boylu | **medium height:** orta boylu\n    - **slim:** zayıf / ince | **plump:** balık etli / hafif tombul | **well-built:** yapılı\n  - **Hair & Eyes (Saç ve Gözler - have got / has got ile):**\n    - *She has got long curly brown hair.* (Uzun kıvırcık kahverengi saçları var.)\n    - *He has got short straight blonde hair.* (Kısa düz sarı saçları var.)\n    - *I have got green eyes.* (Yeşil gözlerim var.)\n• **Personality Adjectives (Kişilik Sıfatları):**\n  - **friendly:** arkadaş canlısı, cana yakın\n  - **hardworking:** çalışkan, gayretli\n  - **helpful:** yardımsever, destek olan\n  - **funny:** komik, eğlenceli\n  - **honest:** dürüst, doğru sözlü\n  - **polite:** kibar, nazik\n• **Asking Questions:**\n  - *What does she look like?* ➔ Dış görünüşü nasıldır? (She is tall and slim.)\n  - *What is he like?* ➔ Karakteri nasıldır? (He is hardworking and friendly.)\n              ",
            "keyConcepts": [
              "Tall",
              "Short",
              "Slim",
              "Curly hair",
              "Friendly",
              "Hardworking",
              "What does he look like?"
            ],
            "pronunciationPhrases": [
              {
                "english": "What does your best friend look like?",
                "turkish": "En yakın arkadaşının dış görünüşü nasıldır?",
                "phonetic": "vat daz yor best frend luk layk",
                "category": "Question"
              },
              {
                "english": "She is tall and slim with long brown hair.",
                "turkish": "O uzun boylu, zayıf ve uzun kahverengi saçlıdır.",
                "phonetic": "şii iz tool end slim vit long bravn heer",
                "category": "Appearance"
              },
              {
                "english": "He has got blue eyes and curly hair.",
                "turkish": "Onun mavi gözleri ve kıvırcık saçları var.",
                "phonetic": "hii hez got bluu ayz end körli heer",
                "category": "Appearance"
              },
              {
                "english": "What is your teacher like?",
                "turkish": "Öğretmeninin karakteri / kişiliği nasıldır?",
                "phonetic": "vat iz yor tiiçır layk",
                "category": "Question"
              },
              {
                "english": "He is very polite and hardworking.",
                "turkish": "O çok kibar ve çalışkandır.",
                "phonetic": "hii iz veri polayt end hardvörking",
                "category": "Personality"
              },
              {
                "english": "Merve is very helpful to her classmates.",
                "turkish": "Merve sınıf arkadaşlarına karşı çok yardımseverdir.",
                "phonetic": "merve iz veri helpful tu hör klaas-meyts",
                "category": "Personality"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e3_a1",
                "front": "\"What does she look like?\" sorusu neyi öğrenmek için sorulur?",
                "back": "Kişinin DIŞ GÖRÜNÜŞÜNÜ (boy, kilo, saç, göz) sormak için.",
                "tip": "\"Look like\" görünüme odaklanır.",
                "example": "She is of medium height with hazel eyes."
              },
              {
                "id": "fc_e3_a2",
                "front": "\"What is he like?\" sorusu neyi öğrenmek için sorulur?",
                "back": "Kişinin KARAKTERİNİ / KİŞİLİĞİNİ sormak için.",
                "tip": "\"Look\" kelimesi yoksa kişilik soruluyordur: He is honest and kind.",
                "example": "He is very funny and friendly."
              },
              {
                "id": "fc_e3_a3",
                "front": "\"Curly\" ve \"Straight\" saç modelleri ne demektir?",
                "back": "\"Curly\" = Kıvırcık saç, \"Straight\" = Düz saç.",
                "tip": "Wavy ise dalgalı saç demektir.",
                "example": "I have curly hair, but my sister has straight hair."
              },
              {
                "id": "fc_e3_a4",
                "front": "Derslerine düzenli çalışan ve ödevlerini aksatmayan birine ne denir?",
                "back": "Hardworking (Çalışkan)",
                "tip": "Hard = Sıkı/Çok, Working = Çalışan.",
                "example": "Mehmet is a hardworking student."
              },
              {
                "id": "fc_e3_a5",
                "front": "İnsanlara yardım etmeyi çok seven birini hangi sıfat tanımlar?",
                "back": "Helpful (Yardımsever)",
                "tip": "Help = Yardım, Helpful = Yardımsever.",
                "example": "Ayşe is very helpful; she carries my books."
              },
              {
                "id": "fc_e3_a6",
                "front": "\"Polite\" kişilik sıfatının Türkçe karşılığı nedir?",
                "back": "Kibar / Nazik",
                "tip": "Zıt anlamlısı: Rude (Kaba).",
                "example": "Always be polite to everyone."
              }
            ],
            "matching": [
              {
                "id": "m_a1_1",
                "left": "Curly hair",
                "right": "Kıvırcık saç"
              },
              {
                "id": "m_a1_2",
                "left": "Slim",
                "right": "Zayıf / İnce yapılı"
              },
              {
                "id": "m_a1_3",
                "left": "Hardworking",
                "right": "Çalışkan"
              },
              {
                "id": "m_a1_4",
                "left": "Polite",
                "right": "Kibar / Nazik"
              },
              {
                "id": "m_a1_5",
                "left": "Helpful",
                "right": "Yardımsever"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_a1_1",
                "text": "\"What is she like?\" sorusuna \"She is tall and has blonde hair\" şeklinde cevap verilir.",
                "isTrue": false,
                "explanation": "Yanlış! \"What is she like?\" karakteri sorar (She is kind/friendly). Dış görünüş için \"What does she look like?\" sorulur."
              },
              {
                "id": "tf_a1_2",
                "text": "\"Hardworking\" sıfatı çalışkan ve gayretli anlamına gelir.",
                "isTrue": true,
                "explanation": "Doğru! Düzenli çalışan ve sorumluluk sahibi kişileri tanımlar."
              },
              {
                "id": "tf_a1_3",
                "text": "\"Short\" sıfatı hem kısa boylu hem de kısa saçlı anlamında kullanılabilir.",
                "isTrue": true,
                "explanation": "Doğru! He is short (kısa boylu), he has got short hair (kısa saçlı)."
              },
              {
                "id": "tf_a1_4",
                "text": "\"Polite\" sözcüğünün Türkçe anlamı \"kaba ve sabırsız\" demektir.",
                "isTrue": false,
                "explanation": "Yanlış! Polite = Nazik ve kibar demektir. Kaba = Rude."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_a1_1",
                "sentence": "Gizem always helps her friends. She is very ___ .",
                "options": [
                  "helpful",
                  "selfish",
                  "lazy",
                  "rude"
                ],
                "correctWord": "helpful",
                "hint": "Arkadaşlarına her zaman yardım eden kişi."
              },
              {
                "id": "fb_a1_2",
                "sentence": "Barış is 1.85 meters. He is very ___ .",
                "options": [
                  "tall",
                  "short",
                  "small",
                  "low"
                ],
                "correctWord": "tall",
                "hint": "Uzun boylu anlamındaki sıfat."
              },
              {
                "id": "fb_a1_3",
                "sentence": "What does your brother ___ like? He has curly brown hair.",
                "options": [
                  "look",
                  "make",
                  "do",
                  "see"
                ],
                "correctWord": "look",
                "hint": "Dış görünüş sorma kalıbı (\"look like\")."
              },
              {
                "id": "fb_a1_4",
                "sentence": "Defne makes everyone laugh. She is very ___ .",
                "options": [
                  "funny",
                  "sad",
                  "angry",
                  "quiet"
                ],
                "correctWord": "funny",
                "hint": "Herkesi güldüren, eğlenceli ve komik."
              }
            ],
            "quiz": [
              {
                "id": "q_a1_1",
                "question": "— What is your best friend like?\n— He is ___ . He always shares and smiles.",
                "options": [
                  "friendly and generous",
                  "tall and slim",
                  "short and plump",
                  "green eyed"
                ],
                "correctAnswerIndex": 0,
                "hint": "Karakter ve kişilik belirten sıfatları seç.",
                "explanation": "\"What is he like?\" karakter sorar. \"Friendly and generous\" (cana yakın ve cömert) karakter özelliğidir."
              },
              {
                "id": "q_a1_2",
                "question": "\"She has got long wavy dark hair and brown eyes.\" Bu cümlede bahsedilen kişinin hangi özelliği anlatılmaktadır?",
                "options": [
                  "Physical appearance (Dış görünüş)",
                  "School timetable (Ders programı)",
                  "Favourite food (Sevdiği yemek)",
                  "Nationality (Milliyet)"
                ],
                "correctAnswerIndex": 0,
                "hint": "Saç ve göz rengi.",
                "explanation": "Saç ve göz tarifleri fiziksel dış görünüş (physical appearance) kapsamındadır."
              },
              {
                "id": "q_a1_3",
                "question": "Sürekli ders çalışan ve ödevlerini vaktinde teslim eden bir öğrenciyi anlatan en uygun sıfat hangisidir?",
                "options": [
                  "Hardworking",
                  "Lazy",
                  "Rude",
                  "Shy"
                ],
                "correctAnswerIndex": 0,
                "hint": "Çalışkan.",
                "explanation": "Hardworking = Çalışkan. Lazy = Tembel, Rude = Kaba, Shy = Utangaç."
              },
              {
                "id": "q_a1_4",
                "question": "Aşağıdaki zıt anlamlı sıfat eşleştirmelerinden hangisi DOĞRUDUR?",
                "options": [
                  "Tall ⟷ Short",
                  "Slim ⟷ Friendly",
                  "Polite ⟷ Beautiful",
                  "Curly ⟷ Honest"
                ],
                "correctAnswerIndex": 0,
                "hint": "Uzun boylu - Kısa boylu.",
                "explanation": "Tall (Uzun) ile Short (Kısa) birbirinin zıttıdır."
              }
            ]
          },
          {
            "id": "eng_u3_t2",
            "title": "Feelings, Emotions & Weather (Duygular & Hava Durumu)",
            "kazanimCode": "ENG.5.3.W2.2",
            "kazanimDesc": "Duygusal durumları (Happy, tired, excited) ve hava durumunu (Sunny, rainy, cold) uygun sıfatlarla ifade eder.",
            "summary": "\n• **Feelings & Emotions (Duygular ve Ruh Halleri):**\n  - **happy:** mutlu | **sad:** üzgün | **cheerful:** neşeli\n  - **tired:** yorgun | **sleepy:** uykulu | **energetic:** enerjik\n  - **excited:** heyecanlı | **surprised:** şaşırmış | **scared:** korkmuş\n  - **bored:** sıkılmış | **hungry:** aç | **thirsty:** susamış\n• **How do you feel today?:** Bugün nasıl hissediyorsun?\n  - *I feel happy and energetic!* (Mutlu ve enerjik hissediyorum!)\n  - *I am tired because I played football.* (Yorgunum çünkü futbol oynadım.)\n• **Weather Conditions (Hava Durumu):**\n  - **sunny:** güneşli | **rainy:** yağmurlu | **cloudy:** bulutlu\n  - **windy:** rüzgarlı | **snowy:** karlı | **foggy:** sisli\n  - **hot:** sıcak | **warm:** ılık | **cold:** soğuk | **freezing:** dondurucu\n• **What is the weather like?:** Hava nasıl?\n  - *It is sunny and warm today.* (Bugün hava güneşli ve ılık.)\n              ",
            "keyConcepts": [
              "Happy",
              "Sad",
              "Tired",
              "Excited",
              "Sunny",
              "Rainy",
              "Cold",
              "How do you feel?"
            ],
            "pronunciationPhrases": [
              {
                "english": "How do you feel today?",
                "turkish": "Bugün kendini nasıl hissediyorsun?",
                "phonetic": "hav du yu fiil tu-dey",
                "category": "Question"
              },
              {
                "english": "I feel very happy and energetic!",
                "turkish": "Çok mutlu ve enerjik hissediyorum!",
                "phonetic": "ay fiil veri hepi end enır-cetik",
                "category": "Feeling"
              },
              {
                "english": "I am so tired after school.",
                "turkish": "Okuldan sonra çok yorgunum.",
                "phonetic": "ay em so tayırd aftır skuul",
                "category": "Feeling"
              },
              {
                "english": "What is the weather like in Ankara?",
                "turkish": "Ankara'da hava nasıl?",
                "phonetic": "vat iz dı vedır layk in ankara",
                "category": "Weather"
              },
              {
                "english": "It is rainy and cold today. Take your umbrella!",
                "turkish": "Bugün yağmurlu ve soğuk. Şemsiyeni al!",
                "phonetic": "it iz reyni end koold tu-dey, teyk yor ambrela",
                "category": "Weather"
              },
              {
                "english": "It is snowy! Let's make a snowman!",
                "turkish": "Hava karlı! Haydi kardan adam yapalım!",
                "phonetic": "it iz snowi! lets meyk e snow-men",
                "category": "Weather"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e3_w1",
                "front": "\"How do you feel?\" sorusuna nasıl cevap verilir?",
                "back": "\"I feel happy / tired / excited...\" kalıbıyla duygumuzu belirtiriz.",
                "tip": "Feel = Hissetmek.",
                "example": "I feel great today!"
              },
              {
                "id": "fc_e3_w2",
                "front": "Havanın güneşli ve sıcak olduğunu nasıl söylersin?",
                "back": "\"It is sunny and hot.\"",
                "tip": "Sunny = Güneşli, Hot = Sıcak.",
                "example": "Put on your sunglasses; it is sunny."
              },
              {
                "id": "fc_e3_w3",
                "front": "\"Tired\" ve \"Thirsty\" ne anlama gelir?",
                "back": "\"Tired\" = Yorgun, \"Thirsty\" = Susamış.",
                "tip": "Hungry ise acıkmış demektir.",
                "example": "I ran two kilometers; I am tired and thirsty."
              },
              {
                "id": "fc_e3_w4",
                "front": "Yağmurlu bir günde dışarı çıkarken yanımıza ne almalıyız?",
                "back": "An umbrella (Şemsiye) and a raincoat (Yağmurluk).",
                "tip": "Rainy = Yağmurlu.",
                "example": "Take your umbrella, it is raining."
              },
              {
                "id": "fc_e3_w5",
                "front": "\"Excited\" duygusu ne zaman hissedilir?",
                "back": "Çok sevinçli, heyecanlı ve coşkulu bir olay öncesinde.",
                "tip": "Örn: Doğum günü partisi veya gezi öncesi excited hissederiz.",
                "example": "We are excited about the school trip."
              },
              {
                "id": "fc_e3_w6",
                "front": "\"Windy\" hava durumunda hangi etkinlik yapılır?",
                "back": "Kite flying (Uçurtma uçurma).",
                "tip": "Wind = Rüzgar, Windy = Rüzgarlı.",
                "example": "It is windy today, let's fly our kites!"
              }
            ],
            "matching": [
              {
                "id": "m_w1_1",
                "left": "Sunny",
                "right": "Güneşli"
              },
              {
                "id": "m_w1_2",
                "left": "Rainy",
                "right": "Yağmurlu"
              },
              {
                "id": "m_w1_3",
                "left": "Snowy",
                "right": "Karlı"
              },
              {
                "id": "m_w1_4",
                "left": "Tired",
                "right": "Yorgun"
              },
              {
                "id": "m_w1_5",
                "left": "Excited",
                "right": "Heyecanlı"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_w1_1",
                "text": "Hava \"snowy\" olduğunda dışarıda tişört ve şortla dolaşırız.",
                "isTrue": false,
                "explanation": "Yanlış! Snowy karlı ve çok soğuk demektir; mont, bere ve eldiven giyilmelidir."
              },
              {
                "id": "tf_w1_2",
                "text": "\"I am thirsty\" diyen bir kişi su içmek istemektedir.",
                "isTrue": true,
                "explanation": "Doğru! Thirsty susamış demektir."
              },
              {
                "id": "tf_w1_3",
                "text": "\"What is the weather like?\" hava durumunu sormak için kullanılır.",
                "isTrue": true,
                "explanation": "Doğru! \"Hava nasıl?\" anlamına gelir."
              },
              {
                "id": "tf_w1_4",
                "text": "\"Cloudy\" gökyüzünün tamamen masmavi ve bulutsuz olduğunu ifade eder.",
                "isTrue": false,
                "explanation": "Yanlış! Cloudy bulutlu demektir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_w1_1",
                "sentence": "It is very hot and ___ today. Let's go to the beach!",
                "options": [
                  "sunny",
                  "snowy",
                  "foggy",
                  "cold"
                ],
                "correctWord": "sunny",
                "hint": "Sıcak günlerde gökyüzünde parlayan hava durumu."
              },
              {
                "id": "fb_w1_2",
                "sentence": "I didn't sleep well last night, so I feel ___ today.",
                "options": [
                  "tired",
                  "happy",
                  "strong",
                  "hungry"
                ],
                "correctWord": "tired",
                "hint": "Uykusuz kalındığında hissedilen durum (yorgun)."
              },
              {
                "id": "fb_w1_3",
                "sentence": "What is the ___ like in London? It is foggy.",
                "options": [
                  "weather",
                  "food",
                  "lesson",
                  "name"
                ],
                "correctWord": "weather",
                "hint": "Hava durumu sorusu (\"What is the ___ like?\")."
              },
              {
                "id": "fb_w1_4",
                "sentence": "It is raining outside. Take your ___ with you.",
                "options": [
                  "umbrella",
                  "sunglasses",
                  "swimsuit",
                  "shorts"
                ],
                "correctWord": "umbrella",
                "hint": "Yağmurda ıslanmamak için kullanılan eşya."
              }
            ],
            "quiz": [
              {
                "id": "q_w1_1",
                "question": "— How do you feel before tomorrow's football final?\n— I am very ___ ! I can't wait to play!",
                "options": [
                  "excited",
                  "bored",
                  "sad",
                  "sleepy"
                ],
                "correctAnswerIndex": 0,
                "hint": "Sabırsızlıkla bekleyen, coşkulu duygu.",
                "explanation": "\"Excited\" heyecanlı ve coşkulu anlamına gelir."
              },
              {
                "id": "q_w1_2",
                "question": "\"It is snowy and freezing outside. Don't forget your coat and gloves.\" Bu hava durumunda dışarısı nasıldır?",
                "options": [
                  "Karlı ve dondurucu soğuk",
                  "Güneşli ve çok sıcak",
                  "Rüzgarlı ve ılık",
                  "Sıcak ve nemli"
                ],
                "correctAnswerIndex": 0,
                "hint": "Snowy = Karlı, Freezing = Dondurucu soğuk.",
                "explanation": "Snowy karlı, freezing dondurucu demektir."
              },
              {
                "id": "q_w1_3",
                "question": "Uzun bir koşudan sonra çok susayan Selin ne söylemelidir?",
                "options": [
                  "I am thirsty. Can I have some water?",
                  "I am cold. Can I close the window?",
                  "I am bored. Let's play chess.",
                  "I am happy. Let's sing."
                ],
                "correctAnswerIndex": 0,
                "hint": "Susamış olmak.",
                "explanation": "\"I am thirsty\" susadım demektir."
              },
              {
                "id": "q_w1_4",
                "question": "Aşağıdaki hava durumu - eşya eşleştirmelerinden hangisi UYGUNDUR?",
                "options": [
                  "Rainy ➔ Umbrella",
                  "Snowy ➔ Sunglasses",
                  "Hot ➔ Heavy coat",
                  "Sunny ➔ Winter boots"
                ],
                "correctAnswerIndex": 0,
                "hint": "Yağmurlu havada şemsiye.",
                "explanation": "Yağmurlu havada şemsiye (umbrella) taşınır."
              }
            ]
          },
          {
            "id": "eng_u3_t3",
            "title": "Daily Habits, Routines & Hobbies (Rutinler & Hobiler)",
            "kazanimCode": "ENG.5.3.W3.3",
            "kazanimDesc": "Geniş zaman (Simple Present) ve sıklık zarflarını (Always, usually, sometimes, never) kullanarak rutinlerini anlatır.",
            "summary": "\n• **Daily Routines (Günlük Yaşam Rutinleri):**\n  - **wake up / get up:** uyanmak / yataktan kalkmak\n  - **wash face & brush teeth:** yüzünü yıkamak & dişlerini fırçalamak\n  - **have breakfast:** kahvaltı yapmak\n  - **get dressed:** giyinmek\n  - **go to school:** okula gitmek\n  - **have lunch:** öğle yemeği yemek\n  - **come back home:** eve dönmek\n  - **do homework:** ödev yapmak\n  - **go to bed / sleep:** uyumaya gitmek\n• **Adverbs of Frequency (Sıklık Zarfları):**\n  - **always (%100):** her zaman, daima\n  - **usually (%80):** genellikle\n  - **often (%60):** sık sık\n  - **sometimes (%40):** bazen, ara sıra\n  - **never (%0):** asla, hiçbir zaman\n• **Grammar Rule (Kural):** Sıklık zarfları ana fiilden ÖNCE gelir:\n  - *I **always** brush my teeth before bed.* (Yatmadan önce daima dişlerimi fırçalarım.)\n  - *He **usually** plays football after school.* (Okuldan sonra genellikle futbol oynar.)\n              ",
            "keyConcepts": [
              "Wake up",
              "Brush teeth",
              "Have breakfast",
              "Do homework",
              "Always",
              "Usually",
              "Sometimes",
              "Never"
            ],
            "pronunciationPhrases": [
              {
                "english": "I always wake up at seven o'clock in the morning.",
                "turkish": "Sabahları her zaman saat yedide uyanırım.",
                "phonetic": "ay olveys veyk ap et sevın o-klok in dı morning",
                "category": "Routine"
              },
              {
                "english": "I brush my teeth twice a day.",
                "turkish": "Günde iki kez dişlerimi fırçalarım.",
                "phonetic": "ay braş may tiit tvays e dey",
                "category": "Routine"
              },
              {
                "english": "We usually have lunch at the school canteen.",
                "turkish": "Öğle yemeğini genellikle okul kantininde yeriz.",
                "phonetic": "vii yujuli hev lanç et dı skuul kentiiyn",
                "category": "Routine"
              },
              {
                "english": "I sometimes ride my bicycle at the weekend.",
                "turkish": "Hafta sonları bazen bisikletime binerim.",
                "phonetic": "ay samtaymz rayd may baysıkıl et dı viikend",
                "category": "Hobby"
              },
              {
                "english": "He never skips his homework.",
                "turkish": "O ödevlerini asla aksatmaz.",
                "phonetic": "hii nevır skips hiz hoomvörk",
                "category": "Habit"
              },
              {
                "english": "What do you do in your free time?",
                "turkish": "Boş zamanlarında ne yaparsın?",
                "phonetic": "vat du yu du in yor frii taym",
                "category": "Question"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e3_r1",
                "front": "Sıklık zarflarının kullanım sırası (çoktan aza) nasıldır?",
                "back": "Always (%100) ➔ Usually (%80) ➔ Often (%60) ➔ Sometimes (%40) ➔ Never (%0).",
                "tip": "Always her zaman, Never asla demektir.",
                "example": "I always do my homework; I never forget it."
              },
              {
                "id": "fc_e3_r2",
                "front": "Sıklık zarfları cümlede nereye yerleştirilir?",
                "back": "Özne ile ana fiilin arasına gelir (Örn: I ALWAYS brush my teeth).",
                "tip": "\"be\" fiilinden (am/is/are) sonra gelir: He is always happy.",
                "example": "She usually reads books before sleeping."
              },
              {
                "id": "fc_e3_r3",
                "front": "\"Wake up\" ile \"Get up\" arasındaki ince fark nedir?",
                "back": "\"Wake up\" uyanmak/gözlerini açmaktır; \"Get up\" yataktan fiziksel olarak kalkmaktır.",
                "tip": "İkisi de sabah rutini için kullanılır.",
                "example": "I wake up at 07:00 and get up at 07:15."
              },
              {
                "id": "fc_e3_r4",
                "front": "\"Do homework\" ifadesi ne demektir?",
                "back": "\"Ödev yapmak\" demektir.",
                "tip": "Make homework denmez, DO homework denir!",
                "example": "I do my homework in the afternoon."
              },
              {
                "id": "fc_e3_r5",
                "front": "\"What do you do in your free time?\" sorusu ne anlama gelir?",
                "back": "\"Boş zamanlarında ne yaparsın?\" demektir (Hobiler sorulur).",
                "tip": "Cevap: I draw pictures, I play chess, I read books...",
                "example": "In my free time, I play basketball."
              },
              {
                "id": "fc_e3_r6",
                "front": "\"Never\" kelimesi cümlenin anlamını nasıl etkiler?",
                "back": "Cümleye olumsuzluk anlamı katar (\"Hiçbir zaman / Asla\").",
                "tip": "Cümlede not kullanılmaz, never tek başına olumsuzluk yapar.",
                "example": "I never drink fizzy drinks."
              }
            ],
            "matching": [
              {
                "id": "m_r2_1",
                "left": "Always",
                "right": "Her zaman / Daima (%100)"
              },
              {
                "id": "m_r2_2",
                "left": "Sometimes",
                "right": "Bazen / Ara sıra (%40)"
              },
              {
                "id": "m_r2_3",
                "left": "Never",
                "right": "Asla / Hiçbir zaman (%0)"
              },
              {
                "id": "m_r2_4",
                "left": "Brush teeth",
                "right": "Diş fırçalamak"
              },
              {
                "id": "m_r2_5",
                "left": "Have breakfast",
                "right": "Kahvaltı yapmak"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_r2_1",
                "text": "\"Never\" sıklık zarfı \"her zaman ve kesinlikle\" anlamına gelir.",
                "isTrue": false,
                "explanation": "Yanlış! Never = Asla, hiçbir zaman demektir. Her zaman anlamına gelen Always'dir."
              },
              {
                "id": "tf_r2_2",
                "text": "Sabahları güne enerjik başlamak için \"have breakfast\" (kahvaltı yapmak) sağlıklı bir rutindir.",
                "isTrue": true,
                "explanation": "Doğru! Kahvaltı temel bir sabah rutinidir."
              },
              {
                "id": "tf_r2_3",
                "text": "\"I play always football\" cümlesinde sıklık zarfının yeri DOĞRUDUR.",
                "isTrue": false,
                "explanation": "Yanlış! Sıklık zarfı fiilden önce gelmelidir: \"I always play football\" olmalıdır."
              },
              {
                "id": "tf_r2_4",
                "text": "\"Get dressed\" giysilerini giyinmek demektir.",
                "isTrue": true,
                "explanation": "Doğru! Sabah hazırlanırken yapılan giyinme eylemidir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_r2_1",
                "sentence": "I ___ wash my hands before eating meals. (Her zaman)",
                "options": [
                  "always",
                  "never",
                  "sometimes",
                  "rarely"
                ],
                "correctWord": "always",
                "hint": "%100 sıklık bildiren zarf."
              },
              {
                "id": "fb_r2_2",
                "sentence": "Kerem ___ his homework every day after school.",
                "options": [
                  "does",
                  "makes",
                  "drinks",
                  "sleeps"
                ],
                "correctWord": "does",
                "hint": "Homework ile kullanılan doğru fiil (\"do/does homework\")."
              },
              {
                "id": "fb_r2_3",
                "sentence": "I go to bed early because I ___ up at 06:30.",
                "options": [
                  "get",
                  "put",
                  "wear",
                  "read"
                ],
                "correctWord": "get",
                "hint": "\"___ up\" yataktan kalkmak fiili."
              },
              {
                "id": "fb_r2_4",
                "sentence": "Vegetarians ___ eat meat. (Asla yemezler)",
                "options": [
                  "never",
                  "always",
                  "usually",
                  "often"
                ],
                "correctWord": "never",
                "hint": "%0 sıklık bildiren (asla) sözcüğü."
              }
            ],
            "quiz": [
              {
                "id": "q_r2_1",
                "question": "Selin düzenli bir öğrencidir. Her gün yatmadan önce mutlaka dişlerini fırçalar. Selin'i anlatan doğru cümle hangisidir?",
                "options": [
                  "Selin always brushes her teeth before going to bed.",
                  "Selin never brushes her teeth.",
                  "Selin sometimes brushes her teeth.",
                  "Selin doesn't like brushing teeth."
                ],
                "correctAnswerIndex": 0,
                "hint": "Her zaman = Always.",
                "explanation": "Her gün aksatmadan yaptığı için \"always\" kullanılmalıdır."
              },
              {
                "id": "q_r2_2",
                "question": "Aşağıdaki sıklık zarflarından hangisi EN YÜKSEK sıklığı ifade eder?",
                "options": [
                  "Always (%100)",
                  "Usually (%80)",
                  "Sometimes (%40)",
                  "Never (%0)"
                ],
                "correctAnswerIndex": 0,
                "hint": "Daima / her zaman.",
                "explanation": "Always daima (%100) en yüksek sıklıktır."
              },
              {
                "id": "q_r2_3",
                "question": "— What do you do after school?\n— I come home, have a snack and ___ my homework.",
                "options": [
                  "do",
                  "make",
                  "draw",
                  "play"
                ],
                "correctAnswerIndex": 0,
                "hint": "Ödev yapmak kalıbı.",
                "explanation": "\"Do homework\" ödev yapmak demektir."
              },
              {
                "id": "q_r2_4",
                "question": "Bir kişinin sabah sırasıyla yaptığı rutinlerin DOĞRU sıralaması hangisidir?",
                "options": [
                  "Wake up ➔ Wash face ➔ Have breakfast ➔ Go to school",
                  "Go to school ➔ Wake up ➔ Sleep ➔ Have breakfast",
                  "Have breakfast ➔ Sleep ➔ Go to school ➔ Wake up",
                  "Wash face ➔ Go to school ➔ Wake up ➔ Get dressed"
                ],
                "correctAnswerIndex": 0,
                "hint": "Mantıksal sabah akışı.",
                "explanation": "Önce uyanılır (wake up), yüz yıkanır (wash face), kahvaltı yapılır (have breakfast) ve okula gidilir (go to school)."
              }
            ]
          }
        ]
      },
      {
        "id": "eng_u4",
        "unitNumber": 4,
        "title": "Theme 4: Family Life (Aile Yaşamı)",
        "description": "Aile üyeleri, akrabalar, evin odaları, ev eşyaları ve günlük ev sorumlulukları",
        "topics": [
          {
            "id": "eng_u4_t1",
            "title": "Family Members & Have/Has Got (Aile Bireyleri & Sahiplik)",
            "kazanimCode": "ENG.5.4.W1.1",
            "kazanimDesc": "Aile üyelerini tanıtır ve \"have got / has got\" kalıbıyla akrabalık bağlarını ve sahip olunan şeyleri belirtir.",
            "summary": "\n• **Family Members & Relatives (Aile Bireyleri ve Akrabalar):**\n  - **parents:** anne-baba | **mother / mum:** anne | **father / dad:** baba\n  - **brother:** erkek kardeş | **sister:** kız kardeş\n  - **grandparents:** büyükanne ve büyükbaba\n  - **grandmother / grandma:** büyükanne / nine\n  - **grandfather / grandpa:** büyükbaba / dede\n  - **uncle:** amca / dayı / enişte\n  - **aunt:** teyze / hala / yenge\n  - **cousin:** kuzen (kız veya erkek)\n• **Have Got / Has Got (Sahip olmak):**\n  - **I / You / We / They ➔ HAVE GOT:**\n    - *I have got two brothers and one sister.* (İki erkek, bir kız kardeşim var.)\n    - *We have got a big friendly family.* (Büyük ve samimi bir ailemiz var.)\n  - **He / She / It ➔ HAS GOT:**\n    - *She has got a cousin in İzmir.* (İzmir'de bir kuzeni var.)\n    - *He has got a cute pet dog.* (Sevimli bir evcil köpeği var.)\n• **Negative & Question:**\n  - *I haven't got a brother.* (Erkek kardeşim yok.)\n  - *Have you got any sisters?* (Hiç kız kardeşin var mı?)\n              ",
            "keyConcepts": [
              "Parents",
              "Brother",
              "Sister",
              "Uncle",
              "Aunt",
              "Cousin",
              "Have got",
              "Has got"
            ],
            "pronunciationPhrases": [
              {
                "english": "This is my family.",
                "turkish": "Bu benim ailem.",
                "phonetic": "dis iz may femıli",
                "category": "Family"
              },
              {
                "english": "I have got a younger brother and an older sister.",
                "turkish": "Bir küçük erkek kardeşim ve bir ablam var.",
                "phonetic": "ay hev got e yangır bradır end en ooldır sistır",
                "category": "Possession"
              },
              {
                "english": "My uncle and aunt live in Antalya.",
                "turkish": "Amcam ve teyzem Antalya'da yaşıyor.",
                "phonetic": "may ankıl end aant liv in antalya",
                "category": "Relatives"
              },
              {
                "english": "She has got five cousins.",
                "turkish": "Onun beş kuzeni var.",
                "phonetic": "şii hez got fayv kazınz",
                "category": "Relatives"
              },
              {
                "english": "Have you got any pets at home?",
                "turkish": "Evde hiç evcil hayvanınız var mı?",
                "phonetic": "hev yu got eni pets et hoom",
                "category": "Question"
              },
              {
                "english": "Yes, we have got a lovely cat named Pamuk.",
                "turkish": "Evet, Pamuk adında sevimli bir kedimiz var.",
                "phonetic": "yes, vii hev got e lavli ket neymd pamuk",
                "category": "Answer"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e4_f1",
                "front": "\"Parents\" kelimesi kimleri kapsar?",
                "back": "Anne ve baba (Mother and Father).",
                "tip": "Grandparents ise büyükanne ve büyükbabadır.",
                "example": "My parents are both teachers."
              },
              {
                "id": "fc_e4_f2",
                "front": "\"He / She\" özneleriyle \"sahip olmak\" derken ne kullanılır?",
                "back": "\"has got\" kullanılır (Örn: She has got a brother).",
                "tip": "I, you, we, they ile \"have got\" kullanılır.",
                "example": "He has got two aunts."
              },
              {
                "id": "fc_e4_f3",
                "front": "Babanın veya annenin erkek kardeşine ne denir?",
                "back": "Uncle (Amca veya Dayı)",
                "tip": "Kız kardeşine ise Aunt (Hala/Teyze) denir.",
                "example": "My uncle plays guitar very well."
              },
              {
                "id": "fc_e4_f4",
                "front": "Teyzenin, amcanın veya dayının çocuklarına ne denir?",
                "back": "Cousin (Kuzen)",
                "tip": "Hem kız hem erkek için \"cousin\" sözcüğü kullanılır.",
                "example": "I play video games with my cousin."
              },
              {
                "id": "fc_e4_f5",
                "front": "\"Have you got a pet?\" sorusu ne anlama gelir?",
                "back": "\"Evcil hayvanın var mı?\" demektir.",
                "tip": "Pet = Kedi, köpek, kuş gibi evde beslenen hayvan.",
                "example": "Yes, I have got a parrot."
              },
              {
                "id": "fc_e4_f6",
                "front": "\"I haven't got a sister.\" cümlesi ne bildirir?",
                "back": "\"Kız kardeşim yok\" şeklinde olumsuz sahiplik bildirir.",
                "tip": "Have got olumsuzda \"haven't got\" olur.",
                "example": "I haven't got any brothers or sisters; I am an only child."
              }
            ],
            "matching": [
              {
                "id": "m_f1_1",
                "left": "Parents",
                "right": "Anne ve baba"
              },
              {
                "id": "m_f1_2",
                "left": "Uncle",
                "right": "Amca / Dayı"
              },
              {
                "id": "m_f1_3",
                "left": "Aunt",
                "right": "Teyze / Hala"
              },
              {
                "id": "m_f1_4",
                "left": "Cousin",
                "right": "Kuzen"
              },
              {
                "id": "m_f1_5",
                "left": "Has got",
                "right": "Sahiptir (He/She)"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_f1_1",
                "text": "\"She have got three sisters\" cümlesi gramer açısından DOĞRUDUR.",
                "isTrue": false,
                "explanation": "Yanlış! \"She\" öznesiyle \"has got\" kullanılmalıdır: \"She has got three sisters.\""
              },
              {
                "id": "tf_f1_2",
                "text": "\"Uncle\" kelimesi hem amca hem de dayı anlamına gelir.",
                "isTrue": true,
                "explanation": "Doğru! İngilizcede baba ve anne tarafındaki erkek kardeşler için ortak olarak uncle denir."
              },
              {
                "id": "tf_f1_3",
                "text": "\"Grandparents\" sadece anne ve babayı ifade eder.",
                "isTrue": false,
                "explanation": "Yanlış! Grandparents dede ve nineyi (büyükanne ve büyükbaba) ifade eder."
              },
              {
                "id": "tf_f1_4",
                "text": "\"I have got a pet dog\" evde bir köpek sahibi olunduğunu belirtir.",
                "isTrue": true,
                "explanation": "Doğru! Have got sahip olmak demektir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_f1_1",
                "sentence": "My father's brother is my ___ .",
                "options": [
                  "uncle",
                  "aunt",
                  "sister",
                  "grandmother"
                ],
                "correctWord": "uncle",
                "hint": "Babanın erkek kardeşi (amca)."
              },
              {
                "id": "fb_f1_2",
                "sentence": "Emre ___ got two cousins in İzmir.",
                "options": [
                  "has",
                  "have",
                  "is",
                  "are"
                ],
                "correctWord": "has",
                "hint": "Emre (he) öznesiyle kullanılan sahiplik fiili."
              },
              {
                "id": "fb_f1_3",
                "sentence": "My mother and my father are my ___ .",
                "options": [
                  "parents",
                  "cousins",
                  "uncles",
                  "friends"
                ],
                "correctWord": "parents",
                "hint": "Anne ve babayı birlikte tanımlayan sözcük ebeveyn."
              },
              {
                "id": "fb_f1_4",
                "sentence": "— ___ you got a sister? — Yes, I have.",
                "options": [
                  "Have",
                  "Has",
                  "Are",
                  "Is"
                ],
                "correctWord": "Have",
                "hint": "\"You\" öznesi ile soru sorarken başa gelen yardımcı fiil."
              }
            ],
            "quiz": [
              {
                "id": "q_f1_1",
                "question": "— Have you got any brothers or sisters?\n— No, I haven't. I am an ___ child.",
                "options": [
                  "only",
                  "one",
                  "alone",
                  "first"
                ],
                "correctAnswerIndex": 0,
                "hint": "Tek çocuk (kardeşi olmayan).",
                "explanation": "\"An only child\" tek çocuk anlamına gelen kalıptır."
              },
              {
                "id": "q_f1_2",
                "question": "Fatma'nın annesinin kız kardeşi Fatma'nın nesidir?",
                "options": [
                  "Aunt (Teyze)",
                  "Uncle (Dayı)",
                  "Cousin (Kuzen)",
                  "Grandmother (Büyükanne)"
                ],
                "correctAnswerIndex": 0,
                "hint": "Annenin kız kardeşi teyzedir.",
                "explanation": "Annenin veya babanın kız kardeşine \"Aunt\" denir."
              },
              {
                "id": "q_f1_3",
                "question": "\"He ___ got a cute rabbit, but he ___ got a bird.\" Cümlesini tamamlayan doğru ikili hangisidir?",
                "options": [
                  "has / hasn't",
                  "have / haven't",
                  "is / isn't",
                  "has / haven't"
                ],
                "correctAnswerIndex": 0,
                "hint": "\"He\" öznesi ile has / hasn't.",
                "explanation": "\"He\" öznesiyle olumlu \"has got\", olumsuz \"hasn't got\" kullanılır."
              },
              {
                "id": "q_f1_4",
                "question": "Aşağıdakilerden hangisi bir aile bireyi DEĞİLDİR?",
                "options": [
                  "Whiteboard",
                  "Grandfather",
                  "Cousin",
                  "Brother"
                ],
                "correctAnswerIndex": 0,
                "hint": "Sınıf eşyası.",
                "explanation": "Whiteboard (yazı tahtası) sınıf eşyasıdır, aile bireyi değildir."
              }
            ]
          },
          {
            "id": "eng_u4_t2",
            "title": "Rooms of the House & Prepositions (Evin Odaları & Yer Edatları)",
            "kazanimCode": "ENG.5.4.W2.2",
            "kazanimDesc": "Evin bölümlerini (Living room, bedroom, kitchen, bathroom) ve eşyaların yerlerini (in, on, under, next to, behind) söyler.",
            "summary": "\n• **Rooms in the House (Evin Odaları ve Bölümleri):**\n  - **Living room (Oturma Odası):** We sit on the sofa and watch TV.\n  - **Kitchen (Mutfak):** We cook meals and eat at the table.\n  - **Bedroom (Yatak Odası):** We sleep in our beds and keep clothes in the wardrobe.\n  - **Bathroom (Banyo):** We take a shower and wash our hands.\n  - **Garden / Balcony (Bahçe / Balkon):** We water flowers and get fresh air.\n• **Prepositions of Place (Yer Edatları):**\n  - **in:** içinde (The cat is in the box.)\n  - **on:** üzerinde (The book is on the table.)\n  - **under:** altında (The ball is under the bed.)\n  - **next to:** bitişiğinde / yanında (The lamp is next to the sofa.)\n  - **behind:** arkasında (The bag is behind the door.)\n  - **in front of:** önünde (The car is in front of the house.)\n  - **between:** arasında (The table is between two armchairs.)\n• **Where is ...? (Nerede?):**\n  - *Where is your father?* ➔ *He is in the kitchen.*\n  - *Where are the keys?* ➔ *They are on the coffee table.*\n              ",
            "keyConcepts": [
              "Living room",
              "Kitchen",
              "Bedroom",
              "Bathroom",
              "In",
              "On",
              "Under",
              "Behind",
              "In front of"
            ],
            "pronunciationPhrases": [
              {
                "english": "Where is your mother? She is in the kitchen.",
                "turkish": "Annen nerede? O mutfakta.",
                "phonetic": "ver iz yor madır, şii iz in dı kiçın",
                "category": "Location"
              },
              {
                "english": "The cat is sleeping under the bed.",
                "turkish": "Kedi yatağın altında uyuyor.",
                "phonetic": "dı ket iz sliiping andır dı bed",
                "category": "Preposition"
              },
              {
                "english": "There is a big comfortable sofa in the living room.",
                "turkish": "Oturma odasında büyük, rahat bir koltuk var.",
                "phonetic": "der iz e big kamfırtıbıl sofa in dı living ruum",
                "category": "Furniture"
              },
              {
                "english": "The books are on the bookshelf.",
                "turkish": "Kitaplar kitaplığın üzerindedir.",
                "phonetic": "dı buks ar on dı buk-şelf",
                "category": "Preposition"
              },
              {
                "english": "My school bag is behind the door.",
                "turkish": "Okul çantam kapının arkasında.",
                "phonetic": "may skuul bäg iz bihaynd dı door",
                "category": "Preposition"
              },
              {
                "english": "We have dinner together in the dining area.",
                "turkish": "Akşam yemeğini yemek alanında birlikte yeriz.",
                "phonetic": "vii hev dinır tugedır in dı dayning eriya",
                "category": "Family"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e4_r1",
                "front": "Yemek pişirilen ve buzdolabının bulunduğu oda neresidir?",
                "back": "Kitchen (Mutfak)",
                "tip": "Cook in the kitchen.",
                "example": "My mother is making a cake in the kitchen."
              },
              {
                "id": "fc_e4_r2",
                "front": "\"Under\" edatı ne anlama gelir?",
                "back": "\"Altında\" demektir.",
                "tip": "Örn: The shoes are under the bed.",
                "example": "The dog is sleeping under the table."
              },
              {
                "id": "fc_e4_r3",
                "front": "\"Behind\" ile \"In front of\" arasındaki fark nedir?",
                "back": "\"Behind\" = Arkasında, \"In front of\" = Önünde demektir.",
                "tip": "İkisi birbirinin tam zıt yönüdür.",
                "example": "The garden is behind the house."
              },
              {
                "id": "fc_e4_r4",
                "front": "Uyumak için çekildiğimiz oda hangisidir?",
                "back": "Bedroom (Yatak Odası)",
                "tip": "Bed = Yatak, Room = Oda.",
                "example": "I have a desk in my bedroom."
              },
              {
                "id": "fc_e4_r5",
                "front": "Televizyon izlediğimiz ve ailecek oturduğumuz oda hangisidir?",
                "back": "Living room (Oturma Odası / Salon)",
                "tip": "Living = Yaşam.",
                "example": "We watch movies in the living room."
              },
              {
                "id": "fc_e4_r6",
                "front": "\"On the table\" ifadesi ne demektir?",
                "back": "\"Masanın üzerinde\" demektir.",
                "tip": "Yüzeyle temas eden üst durumlar için \"on\" kullanılır.",
                "example": "There are fresh apples on the table."
              }
            ],
            "matching": [
              {
                "id": "m_ro_1",
                "left": "Kitchen",
                "right": "Mutfak"
              },
              {
                "id": "m_ro_2",
                "left": "Bedroom",
                "right": "Yatak Odası"
              },
              {
                "id": "m_ro_3",
                "left": "Living room",
                "right": "Oturma Odası"
              },
              {
                "id": "m_ro_4",
                "left": "Under",
                "right": "Altında"
              },
              {
                "id": "m_ro_5",
                "left": "Behind",
                "right": "Arkasında"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_ro_1",
                "text": "Yemek hazırlamak ve bulaşık yıkamak için \"bedroom\"a gidilir.",
                "isTrue": false,
                "explanation": "Yanlış! Yemek hazırlama yeri \"Kitchen\" (mutfak) dır."
              },
              {
                "id": "tf_ro_2",
                "text": "\"The ball is under the bed\" cümlesi topun yatağın altında olduğunu belirtir.",
                "isTrue": true,
                "explanation": "Doğru! Under = Altında demektir."
              },
              {
                "id": "tf_ro_3",
                "text": "\"Behind\" edatı bir nesnenin önünde olduğunu ifade eder.",
                "isTrue": false,
                "explanation": "Yanlış! Behind arkasında demektir. Önünde için \"in front of\" kullanılır."
              },
              {
                "id": "tf_ro_4",
                "text": "Banyoda ellerimizi yıkayıp dişlerimizi fırçalarız (\"bathroom\").",
                "isTrue": true,
                "explanation": "Doğru! Bathroom banyo demektir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_ro_1",
                "sentence": "Dad is cooking pasta in the ___ .",
                "options": [
                  "kitchen",
                  "bathroom",
                  "garage",
                  "balcony"
                ],
                "correctWord": "kitchen",
                "hint": "Yemek pişirilen oda."
              },
              {
                "id": "fb_ro_2",
                "sentence": "The remote control is ___ the coffee table.",
                "options": [
                  "on",
                  "between",
                  "underneath",
                  "into"
                ],
                "correctWord": "on",
                "hint": "Masanın üzerinde."
              },
              {
                "id": "fb_ro_3",
                "sentence": "Where is the cat? It is hiding ___ the door.",
                "options": [
                  "behind",
                  "in",
                  "on",
                  "at"
                ],
                "correctWord": "behind",
                "hint": "Kapının arkasında."
              },
              {
                "id": "fb_ro_4",
                "sentence": "I sleep and do my homework in my ___ .",
                "options": [
                  "bedroom",
                  "kitchen",
                  "hall",
                  "garden"
                ],
                "correctWord": "bedroom",
                "hint": "Yatağın ve çalışma masasının olduğu kişisel oda."
              }
            ],
            "quiz": [
              {
                "id": "q_ro_1",
                "question": "— Where are my keys?\n— Look, they are ___ the sofa, on the floor!",
                "options": [
                  "under",
                  "in",
                  "above",
                  "at"
                ],
                "correctAnswerIndex": 0,
                "hint": "Koltuk ile zemin arasında (altında).",
                "explanation": "\"Under\" altında demektir: Koltuğun altında."
              },
              {
                "id": "q_ro_2",
                "question": "\"The TV is between the bookcase and the window.\" Cümlesine göre televizyon nerededir?",
                "options": [
                  "Kitaplık ile pencerenin arasındadır.",
                  "Pencerenin arkasındadır.",
                  "Kitaplığın üzerindedir.",
                  "Yatağın altındadır."
                ],
                "correctAnswerIndex": 0,
                "hint": "\"between ... and ...\" iki nesnenin arasıdır.",
                "explanation": "Between = Arasında demektir."
              },
              {
                "id": "q_ro_3",
                "question": "Ailecek toplanıp sohbet ettiğimiz ve televizyon izlediğimiz oda hangisidir?",
                "options": [
                  "Living room",
                  "Bathroom",
                  "Attic",
                  "Cellar"
                ],
                "correctAnswerIndex": 0,
                "hint": "Oturma odası.",
                "explanation": "Living room oturma odasıdır."
              },
              {
                "id": "q_ro_4",
                "question": "Resimde kedi kutunun İÇİNDE oturuyorsa bunu anlatan cümle hangisidir?",
                "options": [
                  "The cat is in the box.",
                  "The cat is on the box.",
                  "The cat is under the box.",
                  "The cat is behind the box."
                ],
                "correctAnswerIndex": 0,
                "hint": "İçinde edatı.",
                "explanation": "\"In\" içinde anlamına gelir."
              }
            ]
          },
          {
            "id": "eng_u4_t3",
            "title": "Household Chores & Daily Life (Ev İşleri & Birlikte Yaşam)",
            "kazanimCode": "ENG.5.4.W3.3",
            "kazanimDesc": "Evde aileye yardım etme ve günlük ev işlerini (Make the bed, set the table, feed the pet) ifade eder.",
            "summary": "\n• **Helping at Home & Household Chores (Ev İçi Sorumluluklar):**\n  - **make the bed:** yatağı toplamak / düzeltmek\n  - **tidy up the room:** odayı toplamak / düzenlemek\n  - **set the table:** masayı kurmak / sofrayı hazırlamak\n  - **clear the table:** masayı / sofrayı toplamak\n  - **feed the pet:** evcil hayvanı beslemek\n  - **water the plants / flowers:** çiçekleri sulamak\n  - **take out the rubbish / trash:** çöpü dışarı çıkarmak\n  - **walk the dog:** köpeği gezdirmek / yürüyüşe çıkarmak\n• **Expressing Responsibility (Sorumluluk Bildirme):**\n  - *I always make my bed in the morning.* (Sabahları daima yatağımı toplarım.)\n  - *Can you help me set the table, please?* (Lütfen masayı kurmama yardım eder misin?)\n  - *It is my duty to feed the cat.* (Kediyi beslemek benim görevimdir.)\n• **Sharing Duties (Görev Paylaşımı):**\n  - Helping parents makes family life happy and peaceful!\n              ",
            "keyConcepts": [
              "Make the bed",
              "Tidy up",
              "Set the table",
              "Feed the pet",
              "Water the plants",
              "Take out the rubbish"
            ],
            "pronunciationPhrases": [
              {
                "english": "I always make my bed before going to school.",
                "turkish": "Okula gitmeden önce daima yatağımı toplarım.",
                "phonetic": "ay olveys meyk may bed bifoor go-ing tu skuul",
                "category": "Chore"
              },
              {
                "english": "Can you please help me set the table for dinner?",
                "turkish": "Akşam yemeği için masayı hazırlamama yardım eder misin?",
                "phonetic": "ken yu pliiz help mi set dı teybıl for dinır",
                "category": "Request"
              },
              {
                "english": "Don't forget to water the flowers on the balcony.",
                "turkish": "Balkondaki çiçekleri sulamayı unutma.",
                "phonetic": "doont forget tu vaatır dı flavırz on dı balkoni",
                "category": "Chore"
              },
              {
                "english": "I feed our pet cat every morning.",
                "turkish": "Evcil kedimizi her sabah ben beslerim.",
                "phonetic": "ay fiid avır pet ket evri morning",
                "category": "Duty"
              },
              {
                "english": "We tidy up our room every Saturday.",
                "turkish": "Her cumartesi odamızı derleyip toplarız.",
                "phonetic": "vii taydi ap avır ruum evri setırdey",
                "category": "Chore"
              },
              {
                "english": "Thank you for taking out the rubbish!",
                "turkish": "Çöpü dışarı çıkardığın için teşekkürler!",
                "phonetic": "tenk yu for teyking avt dı rabiş",
                "category": "Gratitude"
              }
            ],
            "flashcards": [
              {
                "id": "fc_e4_c1",
                "front": "Sabah uyandıktan sonra yatağımızı düzeltmeye ne denir?",
                "back": "Make the bed (Yatağı toplamak)",
                "tip": "Make = yapmak/hazırlamak, Bed = yatak.",
                "example": "I make my bed every morning."
              },
              {
                "id": "fc_e4_c2",
                "front": "Yemekten önce tabak, çatal ve bardakları masaya dizmeye ne denir?",
                "back": "Set the table (Masayı kurmak / hazırlamak)",
                "tip": "Yemek bittikten sonra toplamak ise \"clear the table\"dır.",
                "example": "Can you help me set the table?"
              },
              {
                "id": "fc_e4_c3",
                "front": "Evcil hayvanımıza mama ve su verme görevine ne denir?",
                "back": "Feed the pet (Evcil hayvanı beslemek)",
                "tip": "Feed = Beslemek, yemek vermek.",
                "example": "I feed the dog twice a day."
              },
              {
                "id": "fc_e4_c4",
                "front": "Dağınık olan odayı düzenli hale getirmeye ne denir?",
                "back": "Tidy up the room (Odayı toplamak)",
                "tip": "Tidy = Düzenli, derli toplu.",
                "example": "Please tidy up your room before playing."
              },
              {
                "id": "fc_e4_c5",
                "front": "\"Water the plants\" ne anlama gelir?",
                "back": "\"Bitkileri / çiçekleri sulamak\" demektir.",
                "tip": "Water hem \"su\" hem de \"sulamak\" fiili olarak kullanılır.",
                "example": "We water the plants in the garden."
              },
              {
                "id": "fc_e4_c6",
                "front": "Dolu çöp torbasını dışarıdaki konteynere götürmeye ne denir?",
                "back": "Take out the rubbish / trash (Çöpü dışarı çıkarmak)",
                "tip": "Rubbish (İngiliz), Trash (Amerikan) = Çöp.",
                "example": "Dad takes out the rubbish every evening."
              }
            ],
            "matching": [
              {
                "id": "m_c1_1",
                "left": "Make the bed",
                "right": "Yatağı toplamak"
              },
              {
                "id": "m_c1_2",
                "left": "Set the table",
                "right": "Masayı hazırlamak"
              },
              {
                "id": "m_c1_3",
                "left": "Feed the pet",
                "right": "Evcil hayvanı beslemek"
              },
              {
                "id": "m_c1_4",
                "left": "Tidy up",
                "right": "Odayı toplamak"
              },
              {
                "id": "m_c1_5",
                "left": "Water flowers",
                "right": "Çiçekleri sulamak"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_c1_1",
                "text": "\"Set the table\" masadaki yemekleri çöpe atmak anlamına gelir.",
                "isTrue": false,
                "explanation": "Yanlış! Set the table masayı yemek için kurmak, servis açmak demektir."
              },
              {
                "id": "tf_c1_2",
                "text": "Evcil köpeğe mama vermek \"Feed the dog\" ifadesiyle anlatılır.",
                "isTrue": true,
                "explanation": "Doğru! Feed beslemek demektir."
              },
              {
                "id": "tf_c1_3",
                "text": "Evdeki sorumlulukları paylaşmak aile bireylerinin işini kolaylaştırır.",
                "isTrue": true,
                "explanation": "Doğru! Maarif modelinde aile içi dayanışma ve sorumluluk bilinci desteklenir."
              },
              {
                "id": "tf_c1_4",
                "text": "\"Make the bed\" yatak satın almak demektir.",
                "isTrue": false,
                "explanation": "Yanlış! \"Make the bed\" sabah yataktan kalktıktan sonra yatağı düzeltmek / toplamaktır."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_c1_1",
                "sentence": "Dinner is ready! Can you please ___ the table?",
                "options": [
                  "set",
                  "break",
                  "wash",
                  "sleep"
                ],
                "correctWord": "set",
                "hint": "\"___ the table\" masayı hazırlamak kalıbı."
              },
              {
                "id": "fb_c1_2",
                "sentence": "Don't forget to ___ the cat. It is very hungry.",
                "options": [
                  "feed",
                  "clean",
                  "drive",
                  "cook"
                ],
                "correctWord": "feed",
                "hint": "Aç olan kediye mama vermek (beslemek)."
              },
              {
                "id": "fb_c1_3",
                "sentence": "I always ___ my bed after I wake up.",
                "options": [
                  "make",
                  "do",
                  "play",
                  "ride"
                ],
                "correctWord": "make",
                "hint": "\"___ the bed\" yatağı toplamak fiili."
              },
              {
                "id": "fb_c1_4",
                "sentence": "The balcony flowers are dry. Please ___ them with some water.",
                "options": [
                  "water",
                  "cut",
                  "drop",
                  "take"
                ],
                "correctWord": "water",
                "hint": "Çiçekleri sulamak fiili."
              }
            ],
            "quiz": [
              {
                "id": "q_c1_1",
                "question": "Akşam yemeği hazır olduğunda annesine yardım etmek isteyen Can hangi görevi yapabilir?",
                "options": [
                  "Set the table with plates and forks",
                  "Go to sleep immediately",
                  "Leave his toys on the floor",
                  "Turn off all the lights"
                ],
                "correctAnswerIndex": 0,
                "hint": "Masa hazırlığı.",
                "explanation": "\"Set the table with plates and forks\" masaya tabak ve çatalları koyarak masayı kurmaktır."
              },
              {
                "id": "q_c1_2",
                "question": "\"My room is very messy. I must ___ .\" Cümlesini hangi ifade tamamlar?",
                "options": [
                  "tidy it up",
                  "break the window",
                  "play drums loudly",
                  "drop trash"
                ],
                "correctAnswerIndex": 0,
                "hint": "Oda dağınık (messy) ise ne yapılır?",
                "explanation": "Oda dağınık olunca \"tidy it up\" (toplamak / düzenlemek) gerekir."
              },
              {
                "id": "q_c1_3",
                "question": "Aşağıdaki ev işlerinden hangisi \"HAYVAN BAKIMI\" ile doğrudan ilgilidir?",
                "options": [
                  "Feed the pet and walk the dog",
                  "Make the bed and open the window",
                  "Wash the dishes and dry plates",
                  "Water the roses in the garden"
                ],
                "correctAnswerIndex": 0,
                "hint": "Evcil hayvan.",
                "explanation": "Kediyi/köpeği beslemek ve gezdirmek evcil hayvan bakımıdır."
              },
              {
                "id": "q_c1_4",
                "question": "— Who takes out the rubbish in your house?\n— My brother ___ it every night.",
                "options": [
                  "does",
                  "takes",
                  "makes",
                  "drinks"
                ],
                "correctAnswerIndex": 1,
                "hint": "\"take out the rubbish\" kalıbı.",
                "explanation": "\"take out\" kalıbı 3. tekil şahısta \"takes\" olur."
              }
            ]
          }
        ]
      }
    ]
  },
  "german": {
    "id": "almanca",
    "name": "Almanca (Deutsch)",
    "shortName": "Almanca",
    "icon": "🇩🇪",
    "color": "#EA580C",
    "gradient": "linear-gradient(135deg, #EA580C 0%, #C2410C 100%)",
    "lightBg": "#FFF7ED",
    "description": "Almanca tanışma, okul yaşamı, sayılar, aile, günlük rutinler ve hobiler",
    "units": [
      {
        "id": "de_u1",
        "unitNumber": 1,
        "title": "Lektion 1: Ich und Du (Tanışma & Selamlaşma)",
        "description": "Almanca selamlaşma, vedalaşma, kendini tanıtma, hal hatır sorma ve alfabe.",
        "topics": [
          {
            "id": "de_u1_t1",
            "title": "Begrüßen und Verabschieden (Selamlaşma ve Vedalaşma)",
            "kazanimCode": "ALM.5.1.1",
            "kazanimDesc": "Günün farklı saatlerinde uygun selamlaşma ve vedalaşma kalıplarını kullanır.",
            "summary": "• **Guten Morgen:** Günaydın\\n• **Guten Tag:** İyi günler\\n• **Guten Abend:** İyi akşamlar\\n• **Gute Nacht:** İyi geceler\\n• **Tschüss:** Hoşça kal (Samimi)\\n• **Auf Wiedersehen:** Görüşmek üzere (Resmi)",
            "pronunciationPhrases": [
              {
                "german": "Hallo!",
                "turkish": "Merhaba!",
                "phonetic": "Ha-lo!",
                "category": "Begrüßung"
              },
              {
                "german": "Guten Morgen!",
                "turkish": "Günaydın!",
                "phonetic": "Guutın mor-gın!",
                "category": "Begrüßung"
              },
              {
                "german": "Guten Tag!",
                "turkish": "İyi günler!",
                "phonetic": "Guutın taak!",
                "category": "Begrüßung"
              },
              {
                "german": "Guten Abend!",
                "turkish": "İyi akşamlar!",
                "phonetic": "Guutın aabınt!",
                "category": "Begrüßung"
              },
              {
                "german": "Gute Nacht!",
                "turkish": "İyi geceler!",
                "phonetic": "Guutı naht!",
                "category": "Verabschiedung"
              },
              {
                "german": "Tschüss!",
                "turkish": "Hoşça kal! / Bay bay!",
                "phonetic": "Çüüs!",
                "category": "Verabschiedung"
              },
              {
                "german": "Auf Wiedersehen!",
                "turkish": "Görüşmek üzere!",
                "phonetic": "Auf vii-dır-zee-ın!",
                "category": "Verabschiedung"
              },
              {
                "german": "Bis bald!",
                "turkish": "Yakında görüşürüz!",
                "phonetic": "Bis balt!",
                "category": "Verabschiedung"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u1_1",
                "front": "Arkadaşına samimi bir şekilde 'Hoşça kal' derken ne kullanırsın?",
                "back": "Tschüss! (Çüüs) denir. Öğretmene veya resmi ortamda ise 'Auf Wiedersehen' denir.",
                "tip": "Tschüss samimi, Auf Wiedersehen resmi vedalaşmadır.",
                "example": "Tschüss, Aylin! - Bis morgen!"
              },
              {
                "id": "fc_de_u1_2",
                "front": "Neden 'Guten Morgen' denirken gece 'Gute Nacht' denir?",
                "back": "Morgen kelimesinin artikeli der (Guten Morgen), Nacht kelimesinin artikeli die (Gute Nacht) olduğu içindir.",
                "tip": "Uyumadan önce Gute Nacht denir.",
                "example": "Gute Nacht, Mama!"
              }
            ],
            "matching": [
              {
                "id": "m_de_1",
                "left": "Guten Morgen",
                "right": "Günaydın"
              },
              {
                "id": "m_de_2",
                "left": "Guten Tag",
                "right": "İyi günler"
              },
              {
                "id": "m_de_3",
                "left": "Gute Nacht",
                "right": "İyi geceler"
              },
              {
                "id": "m_de_4",
                "left": "Tschüss",
                "right": "Hoşça kal"
              },
              {
                "id": "m_de_5",
                "left": "Auf Wiedersehen",
                "right": "Görüşmek üzere"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_1",
                "text": "Uyumaya giderken birisine 'Guten Morgen' denir.",
                "isTrue": false,
                "explanation": "Yanlış! Uyumaya giderken 'Gute Nacht' denir."
              },
              {
                "id": "tf_de_2",
                "text": "'Tschüss' ifadesi arkadaşlar arasında samimi bir vedalaşmadır.",
                "isTrue": true,
                "explanation": "Doğru! Arkadaşlarımıza vedalaşırken 'Tschüss!' diyebiliriz."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_1",
                "sentence": "Sabah okula geldiğinde öğretmenine: 'Guten ___!' dersin.",
                "options": [
                  "Morgen",
                  "Nacht",
                  "Tschüss",
                  "Hallo"
                ],
                "correctWord": "Morgen",
                "hint": "Sabah vakti söylenen selamlama."
              }
            ],
            "quiz": [
              {
                "id": "q_de_1",
                "question": "Aşağıdakilerden hangisi gün ortasında (öğlen vakti) kullanılan selamlaşmadır?",
                "options": [
                  "Guten Tag",
                  "Gute Nacht",
                  "Guten Morgen",
                  "Tschüss"
                ],
                "correctAnswerIndex": 0,
                "hint": "İyi günler anlamına gelen ifade.",
                "explanation": "'Guten Tag' gün ortasında 'İyi günler' anlamında kullanılır."
              }
            ]
          },
          {
            "id": "de_u1_t2",
            "title": "Sich vorstellen & Nach dem Befinden fragen (Tanışma & Hal Hatır)",
            "kazanimCode": "ALM.5.1.2",
            "kazanimDesc": "Adını söyler, karşısındakinin adını ve nasıl olduğunu sorar.",
            "summary": "• **Wie heißt du?** (Adın ne?) -> **Ich heiße...**\\n• **Wie geht's?** (Nasılsın?) -> **Danke, gut!** (İyiyim!)\\n• **Und dir?** (Ya sen?)",
            "pronunciationPhrases": [
              {
                "german": "Wie heißt du?",
                "turkish": "Senin adın ne?",
                "phonetic": "Vii hayst du?",
                "category": "Vorstellen"
              },
              {
                "german": "Ich heiße Jonas.",
                "turkish": "Benim adım Jonas.",
                "phonetic": "İh hay-sı Yonas.",
                "category": "Vorstellen"
              },
              {
                "german": "Wie geht es dir?",
                "turkish": "Nasılsın?",
                "phonetic": "Vii geet es diir?",
                "category": "Befinden"
              },
              {
                "german": "Danke, sehr gut!",
                "turkish": "Teşekkürler, çok iyiyim!",
                "phonetic": "Dankı, zeer guut!",
                "category": "Befinden"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u1_3",
                "front": "'Wie heißt du?' sorusuna nasıl yanıt verilir?",
                "back": "'Ich heiße [İsim]' şeklinde yanıt verilir.",
                "tip": "Heißen fiilinde Ich ile heiße olur.",
                "example": "Ich heiße Mert."
              }
            ],
            "matching": [
              {
                "id": "m_de_6",
                "left": "Wie heißt du?",
                "right": "Adın ne?"
              },
              {
                "id": "m_de_7",
                "left": "Ich heiße...",
                "right": "Benim adım..."
              },
              {
                "id": "m_de_8",
                "left": "Wie geht es dir?",
                "right": "Nasılsın?"
              },
              {
                "id": "m_de_9",
                "left": "Danke, gut!",
                "right": "Teşekkürler, iyiyim!"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_3",
                "text": "'Wie heißt du?' sorusuna 'Danke, gut!' diye cevap verilir.",
                "isTrue": false,
                "explanation": "Yanlış! İsim söylenmelidir ('Ich heiße...')."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_3",
                "sentence": "— Wie heißt du? — ___ heiße Can.",
                "options": [
                  "Ich",
                  "Du",
                  "Er",
                  "Sie"
                ],
                "correctWord": "Ich",
                "hint": "Ben zamiri."
              }
            ],
            "quiz": [
              {
                "id": "q_de_2",
                "question": "'Wie geht es dir?' sorusuna en uygun cevap hangisidir?",
                "options": [
                  "Danke, sehr gut!",
                  "Ich heiße Lukas.",
                  "Auf Wiedersehen.",
                  "Gute Nacht."
                ],
                "correctAnswerIndex": 0,
                "hint": "Hal hatır sorusu.",
                "explanation": "'Danke, sehr gut!' (Teşekkürler, çok iyi) doğru cevaptır."
              }
            ]
          },
          {
            "id": "de_u1_t3",
            "title": "Das Alphabet und Buchstabieren (Almanca Alfabe & Harf Kodlama)",
            "kazanimCode": "ALM.5.1.3",
            "kazanimDesc": "Almanca alfabesindeki sesleri ve özel harfleri (ä, ö, ü, ß) telaffuz eder.",
            "summary": "• **Umlaute:** Ä/ä, Ö/ö, Ü/ü\\n• **Eszett (ß):** Çift s sesini verir (heißen)\\n• **W:** 'V' gibi okunur.",
            "pronunciationPhrases": [
              {
                "german": "das Alphabet",
                "turkish": "Alfabe",
                "phonetic": "das al-fa-beet",
                "category": "Alphabet"
              },
              {
                "german": "buchstabieren",
                "turkish": "harf harf kodlamak",
                "phonetic": "buh-şta-biirın",
                "category": "Alphabet"
              },
              {
                "german": "ä, ö, ü, ß",
                "turkish": "Almanca Özel Harfler",
                "phonetic": "E, Ö, Ü, Es-tset",
                "category": "Alphabet"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u1_5",
                "front": "Almancada 'ß' harfi hangi sesi verir?",
                "back": "Keskin çift 's' sesini verir (Örn: heißen).",
                "tip": "Kelime başında asla bulunmaz.",
                "example": "Ich heiße Max."
              }
            ],
            "matching": [
              {
                "id": "m_de_11",
                "left": "das Alphabet",
                "right": "Alfabe"
              },
              {
                "id": "m_de_12",
                "left": "buchstabieren",
                "right": "Harf harf kodlamak"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_4",
                "text": "Almancada W harfi Türkçe V sesi gibi okunur.",
                "isTrue": true,
                "explanation": "Doğru! Wie kelimesi vii diye okunur."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_4",
                "sentence": "'heißen' kelimesindeki 'ß' harfine Almancada ___ denir.",
                "options": [
                  "Eszett",
                  "Umlaut",
                  "Vokal",
                  "Konsonant"
                ],
                "correctWord": "Eszett",
                "hint": "Özel harfin adı."
              }
            ],
            "quiz": [
              {
                "id": "q_de_3",
                "question": "W harfi Almancada hangi sesle okunur?",
                "options": [
                  "V sesi",
                  "Dabılyu sesi",
                  "K sesi",
                  "H sesi"
                ],
                "correctAnswerIndex": 0,
                "hint": "Wie kelimesini hatırla.",
                "explanation": "W harfi Almancada V sesiyle okunur."
              }
            ]
          }
        ]
      },
      {
        "id": "de_u2",
        "unitNumber": 2,
        "title": "Lektion 2: Meine Schule & Zahlen (Okul ve Sayılar)",
        "description": "Sınıf eşyaları, renkler, 0-50 arası sayılar, dersler ve haftanın günleri.",
        "topics": [
          {
            "id": "de_u2_t1",
            "title": "Schulsachen & Farben (Sınıf Eşyaları ve Renkler)",
            "kazanimCode": "ALM.5.2.1",
            "kazanimDesc": "Sınıf eşyalarını artikelleriyle söyler ve renklerini belirtir.",
            "summary": "• **der:** der Bleistift (kurşun kalem)\\n• **das:** das Buch (kitap), das Heft (defter)\\n• **die:** die Schultasche (çanta)\\n• **Farben:** rot (kırmızı), blau (mavi), gelb (sarı), grün (yeşil)",
            "pronunciationPhrases": [
              {
                "german": "das Buch",
                "turkish": "kitap",
                "phonetic": "das buuh",
                "category": "Schulsachen"
              },
              {
                "german": "das Heft",
                "turkish": "defter",
                "phonetic": "das heft",
                "category": "Schulsachen"
              },
              {
                "german": "der Bleistift",
                "turkish": "kurşun kalem",
                "phonetic": "der blay-ştift",
                "category": "Schulsachen"
              },
              {
                "german": "die Schultasche",
                "turkish": "okul çantası",
                "phonetic": "dii şuul-taşe",
                "category": "Schulsachen"
              },
              {
                "german": "rot und blau",
                "turkish": "kırmızı ve mavi",
                "phonetic": "root unt blau",
                "category": "Farben"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u2_1",
                "front": "'das Buch' ile 'das Heft' farkı nedir?",
                "back": "Buch = kitap, Heft = defterdir.",
                "tip": "Her iki kelimenin artikeli de das'tır.",
                "example": "Das Buch ist blau."
              }
            ],
            "matching": [
              {
                "id": "m_de_14",
                "left": "das Buch",
                "right": "kitap"
              },
              {
                "id": "m_de_15",
                "left": "das Heft",
                "right": "defter"
              },
              {
                "id": "m_de_16",
                "left": "der Bleistift",
                "right": "kurşun kalem"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_5",
                "text": "'Bleistift' kelimesi silgi demektir.",
                "isTrue": false,
                "explanation": "Yanlış! Bleistift kurşun kalemdir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_5",
                "sentence": "Yazı yazdığım defter: 'das ___ '",
                "options": [
                  "Heft",
                  "Buch",
                  "Tisch",
                  "Stuhl"
                ],
                "correctWord": "Heft",
                "hint": "Defter kelimesi."
              }
            ],
            "quiz": [
              {
                "id": "q_de_4",
                "question": "'kurşun kalem' kelimesinin Almancası nedir?",
                "options": [
                  "der Bleistift",
                  "das Buch",
                  "die Schere",
                  "das Heft"
                ],
                "correctAnswerIndex": 0,
                "hint": "Stift kelimesi.",
                "explanation": "'der Bleistift' kurşun kalemdir."
              }
            ]
          },
          {
            "id": "de_u2_t2",
            "title": "Zahlen von 0 bis 50 & Alter (Sayılar ve Yaş)",
            "kazanimCode": "ALM.5.2.2",
            "kazanimDesc": "Sayıları ve yaşını söyler.",
            "summary": "• eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf...\\n• 'Wie alt bist du?' -> 'Ich bin zehn Jahre alt.'",
            "pronunciationPhrases": [
              {
                "german": "eins, zwei, drei",
                "turkish": "1, 2, 3",
                "phonetic": "ayns, tsvay, dray",
                "category": "Zahlen"
              },
              {
                "german": "vier, fünf, sechs",
                "turkish": "4, 5, 6",
                "phonetic": "fiir, fünf, zeks",
                "category": "Zahlen"
              },
              {
                "german": "zehn, elf, zwölf",
                "turkish": "10, 11, 12",
                "phonetic": "tseen, elf, tsvölf",
                "category": "Zahlen"
              },
              {
                "german": "Ich bin zehn Jahre alt.",
                "turkish": "Ben 10 yaşındayım.",
                "phonetic": "İh bin tseen yaare alt.",
                "category": "Alter"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u2_3",
                "front": "'Wie alt bist du?' sorusuna 5. sınıf öğrencisi ne der?",
                "back": "'Ich bin zehn (veya elf) Jahre alt.' der.",
                "tip": "Zehn = 10, elf = 11.",
                "example": "Ich bin zehn Jahre alt."
              }
            ],
            "matching": [
              {
                "id": "m_de_19",
                "left": "eins, zwei, drei",
                "right": "1, 2, 3"
              },
              {
                "id": "m_de_21",
                "left": "zehn",
                "right": "10"
              },
              {
                "id": "m_de_22",
                "left": "zwanzig",
                "right": "20"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_7",
                "text": "'zehn' sayısı 10 anlamına gelir.",
                "isTrue": true,
                "explanation": "Doğru! Zehn = 10'dur."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_6",
                "sentence": "On yaşındayım: 'Ich bin ___ Jahre alt.'",
                "options": [
                  "zehn",
                  "zwei",
                  "acht",
                  "vier"
                ],
                "correctWord": "zehn",
                "hint": "10 sayısı."
              }
            ],
            "quiz": [
              {
                "id": "q_de_5",
                "question": "'Wie alt bist du?' sorusu ne anlama gelir?",
                "options": [
                  "Kaç yaşındasın?",
                  "Adın ne?",
                  "Nerelisin?",
                  "Nasılsın?"
                ],
                "correctAnswerIndex": 0,
                "hint": "alt = yaş",
                "explanation": "'Wie alt bist du?' kaç yaşındasın demektir."
              }
            ]
          },
          {
            "id": "de_u2_t3",
            "title": "Schulfächer & Wochentage (Dersler ve Günler)",
            "kazanimCode": "ALM.5.2.3",
            "kazanimDesc": "Haftanın günlerini ve okul derslerini söyler.",
            "summary": "• Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag\\n• 'Mein Lieblingsfach ist Mathe / Deutsch / Englisch.'",
            "pronunciationPhrases": [
              {
                "german": "Montag und Dienstag",
                "turkish": "Pazartesi ve Salı",
                "phonetic": "Mon-taak unt Diins-taak",
                "category": "Wochentage"
              },
              {
                "german": "Samstag und Sonntag",
                "turkish": "Cumartesi ve Pazar",
                "phonetic": "Zams-taak unt Zon-taak",
                "category": "Wochentage"
              },
              {
                "german": "Mein Lieblingsfach ist Musik.",
                "turkish": "En sevdiğim ders Müziktir.",
                "phonetic": "Mayn liib-lings-fah ist Mu-ziik.",
                "category": "Schulfächer"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u2_4",
                "front": "'Mein Lieblingsfach ist...' ne demektir?",
                "back": "'En sevdiğim ders ...' anlamına gelir.",
                "tip": "Lieblingsfach = favori ders.",
                "example": "Mein Lieblingsfach ist Sport."
              }
            ],
            "matching": [
              {
                "id": "m_de_24",
                "left": "Montag",
                "right": "Pazartesi"
              },
              {
                "id": "m_de_25",
                "left": "Freitag",
                "right": "Cuma"
              },
              {
                "id": "m_de_26",
                "left": "Sonntag",
                "right": "Pazar"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_8",
                "text": "'Montag' Pazartesi günüdür.",
                "isTrue": true,
                "explanation": "Doğru! Montag haftanın ilk günüdür."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_7",
                "sentence": "En sevdiğim ders: 'Mein ___ ist Englisch.'",
                "options": [
                  "Lieblingsfach",
                  "Schule",
                  "Name",
                  "Tag"
                ],
                "correctWord": "Lieblingsfach",
                "hint": "Favori ders kelimesi."
              }
            ],
            "quiz": [
              {
                "id": "q_de_6",
                "question": "'Mein Lieblingsfach ist Mathe' cümlesinin anlamı nedir?",
                "options": [
                  "En sevdiğim ders Matematik.",
                  "Matematik zordur.",
                  "Bugün günlerden Pazartesi.",
                  "Ben 10 yaşındayım."
                ],
                "correctAnswerIndex": 0,
                "hint": "Mathe = Matematik",
                "explanation": "'En sevdiğim ders Matematik' doğru çeviridir."
              }
            ]
          }
        ]
      },
      {
        "id": "de_u3",
        "unitNumber": 3,
        "title": "Lektion 3: Meine Familie & Freunde (Ailem ve Arkadaşlarım)",
        "description": "Aile bireyleri, fiziksel özellikler, duygular ve hobiler.",
        "topics": [
          {
            "id": "de_u3_t1",
            "title": "Familienmitglieder (Aile Bireyleri)",
            "kazanimCode": "ALM.5.3.1",
            "kazanimDesc": "Aile üyelerini tanıtır (mein Vater, meine Mutter).",
            "summary": "• mein Vater (babam), mein Bruder (erkek kardeşim)\\n• meine Mutter (annem), meine Schwester (kız kardeşim)\\n• mein Opa (dedem), meine Oma (büyükanne)",
            "pronunciationPhrases": [
              {
                "german": "Wer ist das?",
                "turkish": "Bu kim?",
                "phonetic": "Veer ist das?",
                "category": "Familie"
              },
              {
                "german": "Das ist mein Vater.",
                "turkish": "Bu benim babam.",
                "phonetic": "Das ist mayn faa-tır.",
                "category": "Familie"
              },
              {
                "german": "Das ist meine Mutter.",
                "turkish": "Bu benim annem.",
                "phonetic": "Das ist may-nı mu-tır.",
                "category": "Familie"
              },
              {
                "german": "mein Bruder und meine Schwester",
                "turkish": "erkek kardeşim ve kız kardeşim",
                "phonetic": "mayn bruu-dır unt may-nı şves-tır",
                "category": "Familie"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u3_1",
                "front": "Babam ve annem derken sahiplik farkı nedir?",
                "back": "Erkeklerde mein (mein Vater), kadınlarda meine (meine Mutter) denir.",
                "tip": "Sonuna -e eklenir.",
                "example": "mein Bruder / meine Schwester"
              }
            ],
            "matching": [
              {
                "id": "m_de_28",
                "left": "der Vater",
                "right": "baba"
              },
              {
                "id": "m_de_29",
                "left": "die Mutter",
                "right": "anne"
              },
              {
                "id": "m_de_30",
                "left": "der Bruder",
                "right": "erkek kardeş"
              },
              {
                "id": "m_de_31",
                "left": "die Schwester",
                "right": "kız kardeş"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_9",
                "text": "'Oma' dede demektir.",
                "isTrue": false,
                "explanation": "Yanlış! Oma büyükanne, Opa dededir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_8",
                "sentence": "Kız kardeşi tanıtırken: 'Das ist ___ Schwester.'",
                "options": [
                  "meine",
                  "mein",
                  "dein",
                  "er"
                ],
                "correctWord": "meine",
                "hint": "Kadın sahiplik eki."
              }
            ],
            "quiz": [
              {
                "id": "q_de_7",
                "question": "'Wer ist das?' ne demektir?",
                "options": [
                  "Bu kim?",
                  "Nasılsın?",
                  "Kaç yaşındasın?",
                  "Adın ne?"
                ],
                "correctAnswerIndex": 0,
                "hint": "Wer = kim",
                "explanation": "'Wer ist das?' (Bu kim?) demektir."
              }
            ]
          },
          {
            "id": "de_u3_t2",
            "title": "Aussehen & Gefühle (Dış Görünüş ve Duygular)",
            "kazanimCode": "ALM.5.3.2",
            "kazanimDesc": "Dış görünüş ve duyguları belirtir (groß, klein, glücklich, müde).",
            "summary": "• groß (uzun/büyük), klein (kısa/küçük)\\n• glücklich (mutlu), traurig (üzgün), müde (yorgun)\\n• blaue/braune Augen (mavi/kahverengi gözler)",
            "pronunciationPhrases": [
              {
                "german": "Er ist groß.",
                "turkish": "O (erkek) uzundur.",
                "phonetic": "Er ist groos.",
                "category": "Aussehen"
              },
              {
                "german": "Sie ist klein.",
                "turkish": "O (kız) kısadır.",
                "phonetic": "Zii ist klayn.",
                "category": "Aussehen"
              },
              {
                "german": "Ich bin glücklich!",
                "turkish": "Mutluyum!",
                "phonetic": "İh bin glük-lih!",
                "category": "Gefühle"
              },
              {
                "german": "Ich bin müde.",
                "turkish": "Yorgunum.",
                "phonetic": "İh bin müü-dı.",
                "category": "Gefühle"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u3_2",
                "front": "'glücklich' ve 'traurig' anlamları nedir?",
                "back": "glücklich = mutlu, traurig = üzgün demektir.",
                "tip": "Birbirinin zıttıdır.",
                "example": "Ich bin sehr glücklich!"
              }
            ],
            "matching": [
              {
                "id": "m_de_33",
                "left": "groß",
                "right": "uzun / büyük"
              },
              {
                "id": "m_de_34",
                "left": "klein",
                "right": "kısa / küçük"
              },
              {
                "id": "m_de_35",
                "left": "glücklich",
                "right": "mutlu"
              },
              {
                "id": "m_de_36",
                "left": "müde",
                "right": "yorgun"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_10",
                "text": "'müde' kelimesi enerjik ve neşeli demektir.",
                "isTrue": false,
                "explanation": "Yanlış! Müde 'yorgun' demektir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_9",
                "sentence": "Çok mutluyum: 'Ich bin ___!'",
                "options": [
                  "glücklich",
                  "traurig",
                  "klein",
                  "rot"
                ],
                "correctWord": "glücklich",
                "hint": "Mutlu kelimesi."
              }
            ],
            "quiz": [
              {
                "id": "q_de_8",
                "question": "'Er ist groß' ne anlama gelir?",
                "options": [
                  "O (erkek) uzundur.",
                  "O kızdır.",
                  "O yorgundur.",
                  "Ben mutluyum."
                ],
                "correctAnswerIndex": 0,
                "hint": "groß = uzun/büyük",
                "explanation": "'Er ist groß' O uzundur demektir."
              }
            ]
          },
          {
            "id": "de_u3_t3",
            "title": "Hobbys & Freizeit (Hobiler ve Boş Zaman)",
            "kazanimCode": "ALM.5.3.3",
            "kazanimDesc": "Hobilerini ve severek yaptıklarını (gern) ifade eder.",
            "summary": "• Fußball spielen (futbol oynamak)\\n• Musik hören (müzik dinlemek)\\n• Bücher lesen (kitap okumak)\\n• 'Ich spiele gern Fußball.' (Severek futbol oynarım.)",
            "pronunciationPhrases": [
              {
                "german": "Was ist dein Hobby?",
                "turkish": "Senin hobin nedir?",
                "phonetic": "Vas ist dayn ho-bi?",
                "category": "Hobbys"
              },
              {
                "german": "Mein Hobby ist Fußball.",
                "turkish": "Benim hobim futboldur.",
                "phonetic": "Mayn ho-bi ist fuus-bal.",
                "category": "Hobbys"
              },
              {
                "german": "Ich höre gern Musik.",
                "turkish": "Severek müzik dinlerim.",
                "phonetic": "İh höö-rı gern mu-ziik.",
                "category": "Hobbys"
              },
              {
                "german": "schwimmen und lesen",
                "turkish": "yüzmek ve okumak",
                "phonetic": "şvim-mın unt lee-zın",
                "category": "Freizeit"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u3_3",
                "front": "Almancada severek yaptığın bir şeyi nasıl söylersin?",
                "back": "Fiilden sonra 'gern' eklenir: 'Ich schwimme gern.'",
                "tip": "gern = severek / hoşlanarak.",
                "example": "Ich spiele gern Gitarre."
              }
            ],
            "matching": [
              {
                "id": "m_de_37",
                "left": "Fußball spielen",
                "right": "futbol oynamak"
              },
              {
                "id": "m_de_38",
                "left": "Musik hören",
                "right": "müzik dinlemek"
              },
              {
                "id": "m_de_39",
                "left": "schwimmen",
                "right": "yüzmek"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_11",
                "text": "'schwimmen' yüzmek demektir.",
                "isTrue": true,
                "explanation": "Doğru! Schwimmen yüzmektir."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_10",
                "sentence": "Severek müzik dinlerim: 'Ich ___ gern Musik.'",
                "options": [
                  "höre",
                  "spiele",
                  "gehe",
                  "bin"
                ],
                "correctWord": "höre",
                "hint": "Dinlemek fiili."
              }
            ],
            "quiz": [
              {
                "id": "q_de_9",
                "question": "'Ich spiele gern Fußball' ne demektir?",
                "options": [
                  "Severek futbol oynarım.",
                  "Futbolu sevmem.",
                  "Topum mavidir.",
                  "Okula gidiyorum."
                ],
                "correctAnswerIndex": 0,
                "hint": "Fußball = futbol",
                "explanation": "'Severek futbol oynarım' doğru çeviridir."
              }
            ]
          }
        ]
      },
      {
        "id": "de_u4",
        "unitNumber": 4,
        "title": "Lektion 4: Mein Alltag & Essen (Günlük Yaşam ve Beslenme)",
        "description": "Yiyecek ve içecekler, rutinler, saatler, ülkeler ve diller.",
        "topics": [
          {
            "id": "de_u4_t1",
            "title": "Essen und Trinken (Yiyecekler ve İçecekler)",
            "kazanimCode": "ALM.5.4.1",
            "kazanimDesc": "Temel yiyecek ve içecekleri söyler; sevdiği şeyleri belirtir.",
            "summary": "• der Apfel (elma), die Banane (muz), das Brot (ekmek), der Käse (peynir)\\n• das Wasser (su), die Milch (süt), der Tee (çay)\\n• 'Ich habe Hunger.' (Açım) / 'Ich habe Durst.' (Susadım)",
            "pronunciationPhrases": [
              {
                "german": "Guten Appetit!",
                "turkish": "Afiyet olsun!",
                "phonetic": "Guutın a-pe-tiit!",
                "category": "Essen"
              },
              {
                "german": "Ich habe Hunger.",
                "turkish": "Açım / Karnım aç.",
                "phonetic": "İh haa-bı hung-ır.",
                "category": "Essen"
              },
              {
                "german": "Ich habe Durst.",
                "turkish": "Susadım.",
                "phonetic": "İh haa-bı durst.",
                "category": "Trinken"
              },
              {
                "german": "das Brot und das Wasser",
                "turkish": "ekmek ve su",
                "phonetic": "das broot unt das va-sır",
                "category": "Essen"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u4_1",
                "front": "'Hunger' ile 'Durst' farkı nedir?",
                "back": "Hunger = açlık (yemek istenir), Durst = susuzluk (su istenir).",
                "tip": "Ich habe Hunger / Ich habe Durst.",
                "example": "Ich habe Durst, ich trinke Wasser."
              }
            ],
            "matching": [
              {
                "id": "m_de_41",
                "left": "das Brot",
                "right": "ekmek"
              },
              {
                "id": "m_de_42",
                "left": "das Wasser",
                "right": "su"
              },
              {
                "id": "m_de_43",
                "left": "der Apfel",
                "right": "elma"
              },
              {
                "id": "m_de_45",
                "left": "Guten Appetit",
                "right": "Afiyet olsun"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_12",
                "text": "'Wasser' çay demektir.",
                "isTrue": false,
                "explanation": "Yanlış! Wasser su, Tee çaydır."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_11",
                "sentence": "Yemekte: '___ Appetit!' (Afiyet olsun).",
                "options": [
                  "Guten",
                  "Gute",
                  "Danke",
                  "Hallo"
                ],
                "correctWord": "Guten",
                "hint": "Afiyet olsun ifadesi."
              }
            ],
            "quiz": [
              {
                "id": "q_de_10",
                "question": "Susayan biri ne der?",
                "options": [
                  "Ich habe Durst.",
                  "Ich habe Hunger.",
                  "Ich heiße Wasser.",
                  "Guten Morgen."
                ],
                "correctAnswerIndex": 0,
                "hint": "Durst = susuzluk",
                "explanation": "'Ich habe Durst' susadım demektir."
              }
            ]
          },
          {
            "id": "de_u4_t2",
            "title": "Tagesablauf & Uhrzeiten (Günlük Rutinler ve Saatler)",
            "kazanimCode": "ALM.5.4.2",
            "kazanimDesc": "Saatleri ve günlük rutin eylemleri söyler.",
            "summary": "• aufstehen (kalkmak), frühstücken (kahvaltı), zur Schule gehen (okula gitmek)\\n• 'Wie spät ist es?' -> 'Es ist acht Uhr.'",
            "pronunciationPhrases": [
              {
                "german": "Wie spät ist es?",
                "turkish": "Saat kaç?",
                "phonetic": "Vii şpeet ist es?",
                "category": "Uhrzeit"
              },
              {
                "german": "Es ist acht Uhr.",
                "turkish": "Saat sekiz.",
                "phonetic": "Es ist aht uur.",
                "category": "Uhrzeit"
              },
              {
                "german": "Ich gehe zur Schule.",
                "turkish": "Okula gidiyorum.",
                "phonetic": "İh gee-ı tsur şuulı.",
                "category": "Tagesablauf"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u4_2",
                "front": "'Wie spät ist es?' ne anlama gelir?",
                "back": "'Saat kaç?' anlamına gelir. 'Es ist ... Uhr' ile cevap verilir.",
                "tip": "Uhr = saat.",
                "example": "Es ist neun Uhr."
              }
            ],
            "matching": [
              {
                "id": "m_de_46",
                "left": "Wie spät ist es?",
                "right": "Saat kaç?"
              },
              {
                "id": "m_de_47",
                "left": "Es ist acht Uhr",
                "right": "Saat sekiz"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_13",
                "text": "'Uhr' kelimesi saat anlamına gelir.",
                "isTrue": true,
                "explanation": "Doğru! Es ist zehn Uhr = Saat 10'dur."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_12",
                "sentence": "Saat kaç? -> 'Wie ___ ist es?'",
                "options": [
                  "spät",
                  "alt",
                  "gut",
                  "neu"
                ],
                "correctWord": "spät",
                "hint": "Saat sorma kalıbı."
              }
            ],
            "quiz": [
              {
                "id": "q_de_11",
                "question": "Saat 9 olduğunu belirtmek için ne denir?",
                "options": [
                  "Es ist neun Uhr.",
                  "Ich bin neun.",
                  "Mein Name ist neun.",
                  "Gute Nacht."
                ],
                "correctAnswerIndex": 0,
                "hint": "neun = 9, Uhr = saat",
                "explanation": "'Es ist neun Uhr' saat 9 demektir."
              }
            ]
          },
          {
            "id": "de_u4_t3",
            "title": "Länder, Sprachen & Wohnort (Ülkeler, Diller ve Şehirler)",
            "kazanimCode": "ALM.5.4.3",
            "kazanimDesc": "Nereli olduğunu ve hangi dilleri konuştuğunu anlatır.",
            "summary": "• 'Woher kommst du?' -> 'Ich komme aus Türkiye / Deutschland.'\\n• 'Wo wohnst du?' -> 'Ich wohne in Ankara / Berlin.'\\n• 'Ich spreche Deutsch ve Türkisch.'",
            "pronunciationPhrases": [
              {
                "german": "Woher kommst du?",
                "turkish": "Nerelisin?",
                "phonetic": "Vo-heer komst du?",
                "category": "Herkunft"
              },
              {
                "german": "Ich komme aus Türkiye.",
                "turkish": "Türkiye'den geliyorum.",
                "phonetic": "İh ko-mı aus Türkaye.",
                "category": "Herkunft"
              },
              {
                "german": "Wo wohnst du?",
                "turkish": "Nerede yaşıyorsun?",
                "phonetic": "Voo vonst du?",
                "category": "Wohnort"
              },
              {
                "german": "Ich wohne in Ankara.",
                "turkish": "Ankara'da oturuyorum.",
                "phonetic": "İh voo-nı in Ankara.",
                "category": "Wohnort"
              },
              {
                "german": "Ich spreche Deutsch.",
                "turkish": "Almanca konuşuyorum.",
                "phonetic": "İh şpre-hı Doyç.",
                "category": "Sprachen"
              }
            ],
            "flashcards": [
              {
                "id": "fc_de_u4_3",
                "front": "'Woher kommst du?' ile 'Wo wohnst du?' farkı nedir?",
                "back": "Woher kommst du = Ülke/memleket sorar (aus). Wo wohnst du = Yaşanılan şehri sorar (in).",
                "tip": "aus Türkiye, in Berlin.",
                "example": "Ich komme aus Türkiye, ich wohne in Ankara."
              }
            ],
            "matching": [
              {
                "id": "m_de_50",
                "left": "Woher kommst du?",
                "right": "Nereden geliyorsun?"
              },
              {
                "id": "m_de_51",
                "left": "Ich komme aus...",
                "right": "...den geliyorum"
              },
              {
                "id": "m_de_52",
                "left": "Wo wohnst du?",
                "right": "Nerede oturuyorsun?"
              }
            ],
            "trueFalse": [
              {
                "id": "tf_de_14",
                "text": "Şehir söylerken 'in' edatı kullanılır (in Ankara).",
                "isTrue": true,
                "explanation": "Doğru! Şehirlerde in kullanılır."
              }
            ],
            "fillBlank": [
              {
                "id": "fb_de_13",
                "sentence": "Türkiye'den geliyorum: 'Ich komme ___ Türkiye.'",
                "options": [
                  "aus",
                  "in",
                  "von",
                  "nach"
                ],
                "correctWord": "aus",
                "hint": "-den anlamı katan edat."
              }
            ],
            "quiz": [
              {
                "id": "q_de_12",
                "question": "'Almanca konuşuyorum' diyen biri ne söyler?",
                "options": [
                  "Ich spreche Deutsch.",
                  "Ich trinke Deutsch.",
                  "Ich bin Deutsch.",
                  "Guten Tag."
                ],
                "correctAnswerIndex": 0,
                "hint": "sprechen = konuşmak",
                "explanation": "'Ich spreche Deutsch' Almanca konuşuyorum demektir."
              }
            ]
          }
        ]
      }
    ]
  }
};
