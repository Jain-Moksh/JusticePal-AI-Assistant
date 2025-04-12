// src/components/Chatbot.jsx
import { useState, useRef } from "react";
import { Menu, ArrowUp } from "lucide-react";
import Sidebar from "./Sidebar";
import { languages } from "./languages";
import jsPDF from "jspdf";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! How can I help you?",
      time: new Date().toLocaleTimeString(),
    },
    {
      from: "user",
      text: "I need help with my billing.",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("en");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const chatRef = useRef(null);

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = {
      from: "user",
      text: input,
      time: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    scrollToBottom();

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text, language }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      const botMsg = {
        from: "bot",
        text: data.reply,
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botMsg]);
      scrollToBottom();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const saveTxt = () => {
    const text = messages.map((m) => `[${m.time}] ${m.text}`).join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "chat_history.txt";
    link.click();
  };

  const savePdf = () => {
    const doc = new jsPDF();
    const text = messages.map((m) => `[${m.time}] ${m.text}`).join("\n");
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 10, 10);
    doc.save("chat_history.pdf");
  };

  const clearChat = () => {
    if (confirm("Are you sure you want to clear the chat?")) setMessages([]);
  };

  const animatedButtonClass =
    "relative inline-block overflow-hidden px-4 py-1.5 sm:px-6 sm:py-2 font-semibold border border-white text-white group";
  const animatedSpanBefore =
    "absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full";
  const animatedSpanText = "relative z-10 group-hover:text-[#6F4E37]";

  return (
    <div className="relative flex flex-col h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <div className="p-4 bg-[#1c1c1c] border-b-2 border-[#6F4E37] flex items-center">
        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6 text-white" />
        </button>
        <h1 className="ml-4 text-xl font-bold text-white ">
          JusticePal AI Assistant
        </h1>
      </div>

      {/* Actions */}
      <div className="p-3 bg-[#1c1c1c] border-b-2 border-[#6F4E37] flex flex-wrap justify-center gap-2 text-sm sm:text-base">
        <select
          className="bg-[#6F4E37] text-white px-3 py-1.5 sm:px-3 sm:py-2 rounded"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
        {[
          { label: "Save as TXT", action: saveTxt },
          { label: "Save as PDF", action: savePdf },
          { label: "Save Chat History", action: () => console.log(messages) },
          { label: "Clear Chat", action: clearChat },
        ].map(({ label, action }) => (
          <button key={label} onClick={action} className={animatedButtonClass}>
            <span className={animatedSpanBefore}></span>
            <span className={animatedSpanText}>{label}</span>
          </button>
        ))}
      </div>

      {/* Chat messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-5 bg-[#121212] space-y-4"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.from === "bot" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[85%] md:max-w-[70%] p-4 rounded-lg relative text-sm md:text-base ${
                msg.from === "bot"
                  ? "bg-[#6F4E37] text-white rounded-bl-none"
                  : "bg-[#333] text-white rounded-br-none"
              }`}
            >
              <div>{msg.text}</div>
              <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <div className="p-4 bg-[#1c1c1c] border-t-2 border-[#6F4E37] flex gap-3 items-center">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 rounded bg-[#333] text-white placeholder:text-gray-400"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="absolute inset-y-0 right-0 flex items-center pr-3 sm:hidden"
          >
            <ArrowUp className="w-5 h-5 text-[#6F4E37]" />
          </button>
        </div>
        <button
          onClick={handleSend}
          className="hidden sm:inline-block relative px-6 py-2 font-semibold border border-white text-white overflow-hidden group"
        >
          <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          <span className="relative z-10 group-hover:text-[#6F4E37]">Send</span>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
