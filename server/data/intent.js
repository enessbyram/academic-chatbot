export const analyzeIntent = (message) => {
  const text = message.toLowerCase().trim();
  const words = text.split(/\s+/);

  // Selamlaşma
  if (words.some(w => ["selam", "merhaba", "hey", "sa", "naber"].includes(w)))
    return "greeting";

  // Nasılsın / ne haber
  if (
    text.includes("nasılsın") ||
    text.includes("ne haber") ||
    text.includes("naber") ||
    text.includes("nbr")
  ) {
    return "ask_wellbeing";
  }

  // Kötü hissetme
  if (words.some(w => ["kötüyüm", "berbat", "moralim", "bozuk", "yorgunum"].includes(w)))
    return "bad_feeling";

  // İyi hissetme
  if (words.some(w => ["iyiyim", "harikayım", "süper", "mükemmel", "keyfim", "yerinde"].includes(w)))
    return "good_feeling";

  // Teşekkür
  if (words.some(w => ["teşekkür", "teşekürler", "sağol"].includes(w)))
    return "thanks";

  // Vedalaşma
  if (words.some(w => ["görüşürüz","bay","bye","hoşça","kal","güle","güle"].includes(w)))
    return "bye";

  // Küfür
  if (words.some(w => ["mal","aptal","salak","idiot","lavuk","ahmak"].includes(w)))
    return "bad";

  return "unknown";
};


// -------------------------------------------------------
//  İnsanlaştırılmış intentResponses
// -------------------------------------------------------
export const intentResponses = {
  greeting: [
    "Selam kanka! 😎 N'apsın?",
    "Merhaba! Ne var ne yok?",
    "Hey, geldin mi yine? 😂",
  ],

  ask_wellbeing: [
    "İyiyim kankam, sen nasılsın? 😄",
    "Keyifler yerinde, sende ne var ne yok? 😎",
    "Bomba gibiyim, senin oralarda hava nasıl? 😂",
  ],

  good_feeling: [
    "Süpermiş o zaman! 💪🔥",
    "Harika kanka, böyle devam! 😎",
    "Ooo keyifler yerinde belli 😄",
  ],

  bad_feeling: [
    "Oyy geçmiş olsun kanka... Ne oldu anlat istersen. 😕",
    "Üzüldüm bak şimdi... Noldu ki? 😔",
    "Kötü hissetmene üzüldüm, istersen konuşalım biraz. 😕",
  ],

  thanks: [
    "Rica ederim knk, ne demek 😎",
    "Her zaman kanka! 🙌",
    "Eyvallah, yine beklerim 😄",
  ],

  bye: [
    "Görüşürüz kanka! 👋",
    "Kendine dikkat et bro 😎",
    "Bye bye, yine uğra! 😄",
  ],

  bad: [
    "Knk sakin ol bak 😅",
    "Oğlum niye sinirlendin şimdi 😂",
    "Küfür etmesen de anlıyorum bu arada 😄",
  ],

  unknown: [
    "Hmm bunu tam çıkaramadım kanka… Bir daha sor bakayım? 😅",
    "Valla anlamadım, biraz açar mısın? 😄",
    "Ne diyosun kanka anlamadım 😂",
  ],
};
