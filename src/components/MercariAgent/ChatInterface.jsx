
import React, { useState, useRef, useEffect } from 'react';
import { Send, ShoppingBag, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hello! I'm your Mercari Japan shopping assistant. I can help you find items, compare prices, and check shipping options. What are you looking for today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            // Connect to backend (Env var > Hardcoded Live > Localhost)
            const API_URL = import.meta.env.VITE_MERCARI_API_URL || 'http://localhost:8000';

            const response = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg.content }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to the backend. Make sure the Python server is running." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[600px] w-full max-w-2xl bg-white rounded-lg overflow-hidden font-sans border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-3">
                <div className="bg-red-500 rounded-full p-2 text-white">
                    <ShoppingBag size={18} />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900 leading-tight">Mercari Assistant</h3>
                    <p className="text-xs text-gray-500">Live Connection • Japan</p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white" ref={scrollRef}>
                {messages.map((msg, i) => (
                    <div key={i} className={cn("flex w-full", msg.role === 'user' ? "justify-end" : "justify-start")}>
                        <div className={cn(
                            "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                            msg.role === 'user'
                                ? "bg-gray-900 text-white rounded-tr-sm"
                                : "bg-gray-100 text-gray-800 rounded-tl-sm"
                        )}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start w-full">
                        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex gap-2 items-center bg-gray-50 px-3 py-2 rounded-full border border-gray-200 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 transition-all">
                    <input
                        className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
                        placeholder="Type a message... (e.g., Find me a vintage camera)"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        disabled={isLoading}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={isLoading || !input.trim()}
                        className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send size={14} />
                    </button>
                </div>
                <p className="text-[10px] text-center text-gray-400 mt-2">
                    Powered by Mercari Japan & OpenAI
                </p>
            </div>
        </div>
    );
};

export default ChatInterface;
