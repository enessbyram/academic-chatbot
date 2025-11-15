import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Merhaba! Size nasıl yardımcı olabilirim?" },
  ]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null); // scroll için ref

  // --------------------
  // Otomatik scroll
  // --------------------
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput(""); // input kutusunu hemen temizle

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { from: "bot", text: data.reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Şu an cevap verilemiyor 😅" }
      ]);
    }
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
