import express from "express";
import cors from "cors";
import fs from "fs";

import { faq } from "./data/faq.js";
import { analyzeIntent, intentResponses } from "./data/intent.js";
import { advisor } from "./data/advisor.js";

const app = express();
app.use(cors());
app.use(express.json());

const missedFile = "missed_questions.json";

// ❗ Kaç kere üst üste bilemediğini tutan sayaç
let unknownCount = 0;

// missed_questions dosyası yoksa oluştur
if (!fs.existsSync(missedFile)) {
  fs.writeFileSync(missedFile, JSON.stringify([], null, 2));
}

// Basit benzerlik hesaplama
const calculateSimilarity = (text, keywords) => {
  const normalizedText = text.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    if (normalizedText.includes(kw.toLowerCase())) score++;
  }
  return score;
};

app.post("/chat", (req, res) => {
  const userText = req.body.message.toLowerCase().trim();

  // 1️⃣ Intent analizi
  const intent = analyzeIntent(userText);
  let replyOptions = intentResponses[intent] || intentResponses["unknown"];
  let reply = replyOptions[Math.floor(Math.random() * replyOptions.length)];

  // 2️⃣ Intent biliniyorsa sayacı sıfırla
  if (intent !== "unknown") {
    unknownCount = 0;
  }

  // 3️⃣ FAQ analizi (her durumda dene)
  let bestFaq = null;
  let maxScore = 0;

  for (const f of faq) {
    const score = calculateSimilarity(userText, f.keywords);
    if (score > maxScore) {
      maxScore = score;
      bestFaq = f;
    }
  }

  // 4️⃣ FAQ eşleşmesi bulunduysa cevap ver, sayaç sıfırla
  if (bestFaq) {
    reply = bestFaq.answer;
    unknownCount = 0;
  } 
  else if (intent === "unknown") {
    // ❗ FAQ DA BULAMADI —> bilinmeyen soru!

    unknownCount++; // Sayaç artır

    // 5️⃣ Eğer üst üste 2 defa bilemediyse danışmana yönlendir
    if (unknownCount >= 2) {
      reply = `Bu konuda sana net bir bilgi veremiyorum gibi 😕  
Lütfen akademik danışmanınla iletişime geç:

➡️ **${advisor.name}**  
📧 **${advisor.email}**

İstersen önce soru detayını ona iletebilirim.`;

      unknownCount = 0; // sıfırla
    } else {
      // 6️⃣ İlk kez bilemiyorsa hafif "bilemedim" modu
      reply =
        "Şu an tam olarak anlayamadım 😅 Biraz daha detay verebilir misin?";
    }

    // bilinmeyen soruyu kaydet
    const missed = JSON.parse(fs.readFileSync(missedFile));
    missed.push({ text: userText, timestamp: new Date().toISOString() });
    fs.writeFileSync(missedFile, JSON.stringify(missed, null, 2));
  }

  return res.json({ reply });
});

app.listen(3000, () => console.log("Server running on port 3000"));
