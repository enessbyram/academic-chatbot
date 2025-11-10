// utils/faq.js

export const faq = [

  // =========================
  // 📘 DERS KAYDI & DANIŞMANLIK
  // =========================
  {
    question: "Ders seçimi nasıl yapılır?",
    keywords: ["ders seçimi", "ders kaydı", "ders alma", "ders ekleme", "ders silme", "ders onayı"],
    answer:
      "Ders seçimi her dönem başında OBS üzerinden yapılır. Öğrenci derslerini seçtikten sonra akademik danışman onayladığında kayıt kesinleşir.",
  },
  {
    question: "Ders ekleme silme haftası ne zaman?",
    keywords: ["ders ekleme", "ders silme", "ekle sil", "ders değişikliği", "ders haftası"],
    answer:
      "Ders ekle-sil haftası genellikle derslerin başladığı ilk haftadır. Kesin tarih akademik takvimde belirtilir.",
  },
  {
    question: "Danışman kimdir?",
    keywords: ["danışman", "akademik danışman", "danışmanım kim", "hocam kim"],
    answer:
      "Akademik danışman, öğrencinin eğitim süreci boyunca rehberlik eden öğretim elemanıdır. Bilgilerini OBS > Öğrenci Bilgileri > Danışman kısmından görebilirsiniz.",
  },
  {
    question: "Danışman onayı nedir?",
    keywords: ["danışman onayı", "onaylama", "ders onayı", "danışman onay"],
    answer:
      "Danışman onayı, seçtiğiniz derslerin uygunluğunu kontrol etmek için alınan akademik onaydır. Danışman onaylamadan ders kaydınız geçerli sayılmaz.",
  },

  // =========================
  // 🧮 NOT SİSTEMİ & ORTALAMA
  // =========================
  {
    question: "Not ortalaması nasıl hesaplanır?",
    keywords: ["not ortalaması", "gano", "ano", "ortalama hesaplama", "puan ortalaması"],
    answer:
      "Her dersin kredisiyle aldığı not çarpılır, toplamı toplam krediye bölünür. Böylece ağırlıklı not ortalaması (GANO) bulunur.",
  },
  {
    question: "Ders tekrarı nasıl olur?",
    keywords: ["ders tekrarı", "ff dersi", "dersi tekrar", "kaldığım ders", "tekrar almak"],
    answer:
      "FF veya DZ aldığınız dersleri tekrar alabilirsiniz. Yeni notunuz ortalamaya yansır, eski not ortalamadan silinir.",
  },
  {
    question: "Başarı notu nasıl belirlenir?",
    keywords: ["başarı notu", "harf notu", "puan", "vize final oranı", "not hesaplama"],
    answer:
      "Başarı notu, vize ve final sınavlarının belirli oranlarda katkısıyla hesaplanır. Genel olarak %40 vize, %60 final etkili olur. Ancak oranlar bölüme göre değişebilir.",
  },
  {
    question: "Geçme notu kaçtır?",
    keywords: ["geçme notu", "geçme puanı", "en düşük not", "başarılı sayılma"],
    answer:
      "Genellikle CC ve üzeri notlar başarılı kabul edilir. Ancak bazı bölümlerde başarı kriterleri farklı olabilir.",
  },

  // =========================
  // 🧑‍🎓 SINAVLAR
  // =========================
  {
    question: "Bütünleme sınavı ne zaman?",
    keywords: ["bütünleme", "büt", "bütünleme sınavı", "büt haftası", "büt tarihi"],
    answer:
      "Bütünleme sınavları final haftasından sonraki hafta yapılır. Tarihler akademik takvimde duyurulur.",
  },
  {
    question: "Mazeret sınavı nedir?",
    keywords: ["mazeret sınavı", "mazeret", "mazeret vize", "mazeret hakkı"],
    answer:
      "Mazeret sınavı, geçerli bir mazeret nedeniyle sınava giremeyen öğrencilere tanınan telafi hakkıdır. Dilekçe ile başvuru yapılmalıdır.",
  },
  {
    question: "Sınav sonuçlarına nasıl itiraz edilir?",
    keywords: ["sınav itiraz", "not itiraz", "itiraz", "sınav sonucu"],
    answer:
      "Sınav sonuçlarına itiraz, sonuçların açıklanmasından itibaren genellikle 3 iş günü içinde yapılır. Dilekçeyle ilgili fakülte sekreterliğine başvurmanız gerekir.",
  },
  {
    question: "Final sınavına girmek için ne gerekir?",
    keywords: ["final şartı", "finale girmek", "devam şartı", "final sınavı"],
    answer:
      "Final sınavına girmek için derse devam zorunluluğunu yerine getirmiş olmanız gerekir. Devamsız sayılırsanız final hakkınız yanar.",
  },

  // =========================
  // 🎓 MEZUNİYET & TRANSKRİPT
  // =========================
  {
    question: "Transkript nedir?",
    keywords: ["transkript", "not dökümü", "not belgesi", "akademik transkript"],
    answer:
      "Transkript, öğrencinin aldığı dersleri, notlarını ve genel not ortalamasını gösteren resmi belgedir. OBS üzerinden alınabilir.",
  },
  {
    question: "Mezuniyet şartları nelerdir?",
    keywords: ["mezuniyet", "mezun olmak", "mezuniyet şartı", "mezuniyet kriteri"],
    answer:
      "Mezun olabilmek için tüm zorunlu dersleri başarmak, GANO'nun en az 2.00 olması ve toplam krediyi tamamlamak gerekir.",
  },
  {
    question: "Mezuniyet belgesi nasıl alınır?",
    keywords: ["mezuniyet belgesi", "geçici mezuniyet", "diploma", "mezun evrak"],
    answer:
      "Tüm notlar girildikten sonra öğrenci işleri tarafından geçici mezuniyet belgesi hazırlanır. Diploma daha sonra teslim edilir.",
  },

  // =========================
  // 🧾 BELGE & BAŞVURU İŞLEMLERİ
  // =========================
  {
    question: "Öğrenci belgesi nasıl alınır?",
    keywords: ["öğrenci belgesi", "öğrenci kimlik", "belge alma", "öğrenci evrak"],
    answer:
      "Öğrenci belgesi OBS üzerinden veya öğrenci işleri bürosundan alınabilir. E-Devlet üzerinden de temin edilebilir.",
  },
  {
    question: "Ders muafiyeti nasıl yapılır?",
    keywords: ["ders muafiyet", "muafiyet dilekçesi", "ders saydırma", "muafiyet"],
    answer:
      "Önceden alınmış dersler için muafiyet talebinde bulunabilirsiniz. İlgili belgelerle birlikte dilekçe verilir ve bölüm kurulu kararıyla değerlendirilir.",
  },
  {
    question: "ÇAP nedir?",
    keywords: ["çap", "çift anadal", "çift anadal programı", "çift diploma"],
    answer:
      "Çift Anadal Programı (ÇAP), öğrencinin aynı anda ikinci bir bölümde daha eğitim alarak iki diploma sahibi olmasını sağlar.",
  },
  {
    question: "Yandal nedir?",
    keywords: ["yandal", "yan dal", "yandal programı"],
    answer:
      "Yandal, öğrencinin kendi bölümü dışında belirli sayıda dersi alarak ek bir alanda bilgi sahibi olmasını sağlayan programdır.",
  },

  // =========================
  // 🏫 DİĞER AKADEMİK KONULAR
  // =========================
  {
    question: "Ders programı nereden öğrenilir?",
    keywords: ["ders programı", "ders saati", "ders günü", "ders çizelgesi"],
    answer:
      "Ders programları fakülte web sitesinde ve OBS üzerinde yayınlanır. Bölüm duyurularını da takip etmeniz önerilir.",
  },
  {
    question: "Devamsızlık sınırı nedir?",
    keywords: ["devamsızlık", "devam zorunluluğu", "yoklama", "ders devam"],
    answer:
      "Teorik derslerde %70, uygulamalı derslerde %80 devam zorunluluğu bulunur. Bu sınırı aşan öğrenciler devamsız sayılır.",
  },
  {
    question: "Staj zorunlu mu?",
    keywords: ["staj", "staj zorunlu mu", "staj süresi", "staj yeri"],
    answer:
      "Birçok bölümde staj zorunludur. Süresi ve koşulları bölümünüzün staj yönergesinde belirtilmiştir.",
  },
  {
    question: "Erasmus nedir?",
    keywords: ["erasmus", "değişim programı", "yurt dışı eğitim", "erasmus başvuru"],
    answer:
      "Erasmus, Avrupa'da öğrenci değişimi programıdır. Başvurular Uluslararası İlişkiler Ofisi tarafından duyurulur.",
  },
  {
    question: "Ders muafiyet sınavı nedir?",
    keywords: ["muafiyet sınavı", "hazırlık muafiyet", "ders muafiyet"],
    answer:
      "Muafiyet sınavı, önceden alınmış veya bilgi sahibi olunan derslerden muafiyet kazanmak için yapılan sınavdır.",
  },
];
