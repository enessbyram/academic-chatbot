import { faq } from "../../utils/faq";
import advisor from "../../utils/advisor";
import { analyzeIntent } from "../../utils/intent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Merhaba! Size nasıl yardımcı olabilirim?" },
  ]);
  const [input, setInput] = useState("");

  const chatBoxRef = useRef(null); // <-- scroll için ref

  // --------------------
  // Otomatik scroll
  // --------------------
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const lowerInput = input.toLowerCase();

    // --------------------
    // 1️⃣ Intent analizi
    // --------------------
    const intent = analyzeIntent(input);

    let botResponse;

    if (intent === "greeting") {
      botResponse = { from: "bot", text: "Merhaba! Size akademik konularda yardımcı olabilirim." };
    } else if (intent === "thanks") {
      botResponse = { from: "bot", text: "Rica ederim, her zaman buradayım!" };
    } else if (intent === "bye") {
      botResponse = { from: "bot", text: "Görüşmek üzere! İyi çalışmalar." };
    } else if (intent === "bad") {
      botResponse = { from: "bot", text: "Lütfen nazik olun 🙂" };
    } else {
      // --------------------
      // 2️⃣ FAQ kontrolü
      // --------------------
      let found = null;
      for (const item of faq) {
        if (item.keywords.some((key) => lowerInput.includes(key))) {
          found = item;
          break;
        }
      }

      if (found) {
        botResponse = { from: "bot", text: found.answer };
      } else {
        botResponse = {
          from: "bot",
          text: `Bu konuda emin değilim. Akademik danışmanınıza ulaşmak için ${advisor.name} (${advisor.email}) ile iletişime geçebilirsiniz.`,
        };
      }
    }

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="border rounded-lg shadow-lg border-white/10 bg-gray-600 w-300 min-h-160 h-auto">
      <div className="font-bold text-4xl w-full flex justify-center border-b border-white/50 h-16 items-center text-white/80">
        Akademik Chatbot
      </div>

      <div
        ref={chatBoxRef}
        className="chatbox flex flex-col text-white/80 p-4 gap-4 h-134 overflow-y-auto"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`border border-white/20 rounded-lg p-3 max-w-[80%] ${
              msg.from === "bot"
                ? "bg-gray-700 w-fit"
                : "bg-gray-500 w-fit self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          className="border border-white/50 h-10 rounded-bl-lg rounded-br-lg w-full px-4 text-md text-white bg-gray-700 placeholder:text-white/50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Mesajınızı yazın..."
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="absolute right-4 bottom-3 text-white/80 cursor-pointer"
          onClick={handleSend}
        />
      </div>
    </div>
  );
}

export default Chatbot;
