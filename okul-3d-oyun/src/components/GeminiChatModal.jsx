import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Volume2, Key, Sparkles, User, RefreshCw } from 'lucide-react';
import { speakEnglish } from '../utils/speechUtils';

export default function GeminiChatModal({ onClose }) {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('GEMINI_API_KEY') || '');
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [tempKey, setTempKey] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hello! I am your AI English Coach powered by Gemini. You can practice English with me, ask for directions, or learn school rules! How can I help you today?",
      turkish: "Merhaba! Ben Gemini destekli yapay zeka İngilizce koçunum. Benimle İngilizce pratik yapabilir, yer-yön sorabilir veya okul kurallarını öğrenebilirsin!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickPrompts = [
    "Hello! What is your name?",
    "Where is the school library?",
    "Can I have an orange juice, please?",
    "What are the school rules?",
    "Tell me a fun English riddle!"
  ];

  const handleSaveKey = () => {
    localStorage.setItem('GEMINI_API_KEY', tempKey.trim());
    setApiKey(tempKey.trim());
    setShowKeyInput(false);
  };

  const handleSendMessage = async (textToSend = inputText) => {
    const text = textToSend.trim();
    if (!text) return;

    const userMsg = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    if (apiKey) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: {
              parts: [{
                text: "You are a warm, encouraging English teacher for 5th grade students (A1-A2 level). Keep responses simple, friendly, concise (1-2 sentences), and grammatically correct. At the end of each message, give a very short Turkish hint in parentheses."
              }]
            },
            contents: [
              ...messages.map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
              })),
              { role: 'user', parts: [{ text }] }
            ]
          })
        });

        const data = await response.json();
        const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Great effort! Keep practicing your English!";
        setMessages(prev => [...prev, { role: 'ai', text: replyText }]);
        speakEnglish(replyText);
      } catch (err) {
        console.error("Gemini API Error:", err);
        fallbackResponse(text);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Friendly Built-in Intelligent Simulator (No API key needed)
      setTimeout(() => {
        fallbackResponse(text);
        setIsLoading(false);
      }, 700);
    }
  };

  const fallbackResponse = (prompt) => {
    const p = prompt.toLowerCase();
    let reply = "Well done! Keep speaking English. You can explore the classroom and talk to Mr. Clark!";
    let tr = "(Aferin! İngilizce konuşmaya devam et. Sınıfı keşfedip Mr. Clark ile konuşabilirsin!)";

    if (p.includes('name') || p.includes('who are you')) {
      reply = "My name is Gemini Tutor! Nice to meet you. You are doing great in 5th grade!";
      tr = "(Benim adım Gemini Öğretmen! Tanıştığıma memnun oldum. 5. sınıfta harika gidiyorsun!)";
    } else if (p.includes('library') || p.includes('kütüphane')) {
      reply = "The library is on the right side of the main corridor. We read books quietly there!";
      tr = "(Kütüphane ana koridorun sağ tarafındadır. Orada sessizce kitap okuruz!)";
    } else if (p.includes('canteen') || p.includes('kantin') || p.includes('juice') || p.includes('sandwich')) {
      reply = "The canteen is next to the entrance on the right. You can ask Chef Bob: 'Can I have an apple juice, please?'";
      tr = "(Kantin girişin sağındadır. Chef Bob'a 'Can I have an apple juice, please?' diyebilirsin.)";
    } else if (p.includes('rule') || p.includes('kural') || p.includes('must')) {
      reply = "Remember: You MUST listen to your teacher, and you MUSTN'T run in the corridor!";
      tr = "(Unutma: Öğretmenini dinlemelisin ve koridorda koşmamalısın!)";
    } else if (p.includes('riddle') || p.includes('joke')) {
      reply = "Riddle: I have a spine, but no bones. I have leaves, but no branches. What am I? Answer: A book!";
      tr = "(Bilmece: Sırtım var ama kemiğim yok. Yapraklarım var ama dalım yok. Ben neyim? Cevap: Kitap!)";
    }

    setMessages(prev => [...prev, { role: 'ai', text: reply, turkish: tr }]);
    speakEnglish(reply);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-card max-w-xl flex flex-col h-[560px]">
        {/* Header */}
        <div className="modal-header">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <Bot className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">Gemini AI English Coach</h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {apiKey ? 'API Aktif' : 'Simülatör Modu'}
                </span>
              </div>
              <span className="text-xs text-blue-300">5. Sınıf Akıllı Konuşma & Soru-Cevap Koçu</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="key-setting-btn"
              onClick={() => setShowKeyInput(!showKeyInput)}
              title="Google AI Studio / Gemini API Key Ekle"
            >
              <Key className="w-4 h-4 text-yellow-300" />
            </button>
            <button className="close-btn" onClick={onClose}>
              <X className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>

        {/* API Key Drawer */}
        {showKeyInput && (
          <div className="api-key-drawer">
            <p className="text-xs text-gray-200 mb-2">
              <b>Google AI Studio API Key:</b> İsteğe bağlıdır. API anahtarınız varsa canlı Gemini modeliyle konuşursunuz, yoksa yerleşik akıllı koç modu çalışır.
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="AIzaSy..."
                value={tempKey}
                onChange={(e) => setTempKey(e.target.value)}
                className="key-input"
              />
              <button className="save-key-btn" onClick={handleSaveKey}>
                Kaydet
              </button>
            </div>
          </div>
        )}

        {/* Chat Message Scroll Area */}
        <div className="chat-messages-container flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'ai' && (
                <div className="chat-avatar ai">
                  <Bot className="w-4 h-4 text-emerald-300" />
                </div>
              )}

              <div className={`chat-bubble ${m.role === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium leading-relaxed">{m.text}</p>
                  {m.role === 'ai' && (
                    <button
                      className="audio-btn-sm"
                      onClick={() => speakEnglish(m.text)}
                      title="Seslendir"
                    >
                      <Volume2 className="w-4 h-4 text-blue-300 hover:text-white" />
                    </button>
                  )}
                </div>

                {m.turkish && (
                  <p className="text-xs text-yellow-200/90 mt-1.5 italic border-t border-white/10 pt-1">
                    {m.turkish}
                  </p>
                )}
              </div>

              {m.role === 'user' && (
                <div className="chat-avatar user">
                  <User className="w-4 h-4 text-blue-300" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-blue-300 italic py-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Gemini düşünüyor ve İngilizce cevap hazırlıyor...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="quick-prompts-bar">
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              className="quick-prompt-chip"
              onClick={() => handleSendMessage(q)}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar">
          <input
            type="text"
            placeholder="İngilizce bir cümle veya soru yazın..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="chat-text-input"
          />
          <button
            className="send-msg-btn"
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() || isLoading}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
