"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "أهلاً! أنا مساعد زنترا الذكي. ازاي أقدر أساعدك النهاردة؟",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const responses = {
    "الخدمات": "احنا بنقدم خدمات متكاملة زي:\n• الهوية البصرية\n• التسويق عبر السوشيال ميديا\n• إنتاج الفيديو\n• كتابة المحتوى\n• تطوير المواقع\n• تحسين محركات البحث\n\nعايز تعرف أكتر عن خدمة معينة؟",
    "الأسعار": "أسعارنا بتختلف حسب نوع المشروع. بنقدم:\n• استشارة مجانية\n• عروض أسعار مخصصة\n• باقات متنوعة\n\nتقدر تتواصل معانا وتاخد عرض سعر مناسب ليك.",
    "التواصل": "تقدر تتواصل معانا عبر:\n📧 diabm4930@gmail.com\n📞 01015916082\n📍 السادات، المنوفية - مول سايلو الدور الثالث\n\nأو تقدر تملأ فورم التواصل على الموقع.",
    "الوقت": "المشاريع عادة بتاخد:\n• الهوية البصرية: 1-2 أسبوع\n• تطوير موقع: 2-4 أسابيع\n• حملة تسويقية: 1-3 شهور\n• إنتاج فيديو: 1-2 أسبوع\n\nالوقت بيعتمد على تعقيد المشروع ومتطلباته."
  };

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("خدمات") || message.includes("خدمة")) {
      return responses["الخدمات"];
    } else if (message.includes("سعر") || message.includes("تكلفة") || message.includes("ثمن")) {
      return responses["الأسعار"];
    } else if (message.includes("تواصل") || message.includes("اتصال") || message.includes("رقم")) {
      return responses["التواصل"];
    } else if (message.includes("وقت") || message.includes("مدة") || message.includes("كم")) {
      return responses["الوقت"];
    } else {
      return "شكراً على سؤالك! أقدر أساعدك في:\n• معرفة خدماتنا\n• معلومات الأسعار\n• طرق التواصل\n• مدة المشاريع\n\nعايز تعرف إيه بالضبط؟";
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] rounded-full shadow-2xl shadow-[#6C63FF]/50 flex items-center justify-center text-white text-2xl hover:shadow-[#6C63FF]/70 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "إغلاق الدردشة" : "فتح الدردشة"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              ✕
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              💬
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-[#0E0E0E] rounded-2xl shadow-2xl border border-[#6C63FF]/20 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold">مساعد زنترا</h3>
                  <p className="text-xs opacity-90">متصل الآن</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 h-64">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? "bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] text-white"
                        : "bg-[#1a1a1a] text-[#E0E0E0] border border-[#6C63FF]/20"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString("ar-EG", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#1a1a1a] border border-[#6C63FF]/20 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-[#6C63FF] rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#6C63FF] rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#6C63FF] rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#6C63FF]/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="اكتب رسالتك هنا..."
                  className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-[#6C63FF]/30 rounded-full text-white text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                  aria-label="اكتب رسالتك"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] text-white rounded-full text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: inputValue.trim() ? 1.05 : 1 }}
                  whileTap={{ scale: inputValue.trim() ? 0.95 : 1 }}
                >
                  إرسال
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

