// utils/intent.js

export const analyzeIntent = (message) => {
  const text = message.toLowerCase();

  // Selamlaşma
  if (text.includes("selam") || text.includes("merhaba") || text.includes("hey") || text.includes("sa")) {
    return "greeting";
  }

  // Teşekkür
  if (text.includes("teşekkür") || text.includes("sağ ol") || text.includes("sağol")) {
    return "thanks";
  }

  // Vedalaşma
  if (text.includes("görüşürüz") || text.includes("bay") || text.includes("bye")) {
    return "bye";
  }

  // Küfür / saçma
  if (text.match(/(mal|aptal|salak|idiot|lavuk)/)) {
    return "bad";
  }

  return "unknown";
};
