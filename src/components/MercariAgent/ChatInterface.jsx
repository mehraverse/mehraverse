import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "I am ready to navigate the Japanese markets for you. What piece are you seeking?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages, isLoading]);

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
            setMessages(prev => [...prev, { role: 'assistant', content: "Connection lost. Please ensure the neural link (server) is active." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full font-serif text-gray-900">

            {/* Header Area */}
            <div className="pt-8 pb-4 px-8 border-b border-gray-100/50">
                <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans">System Online</span>
                </div>
                <h2 className="text-2xl font-light italic">Mercari Agent</h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 scrollbar-hide" ref={scrollRef}>
                <AnimatePresence initial={false}>
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}
                        >
                            <span className="text-[9px] uppercase tracking-widest text-gray-300 mb-1.5 font-sans ml-1 mr-1">
                                {msg.role === 'user' ? 'You' : 'Agent'}
                            </span>
                            <div className={cn(
                                "max-w-[90%] text-sm font-light tracking-wide prose prose-sm prose-p:leading-relaxed prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-strong:font-medium",
                                msg.role === 'user'
                                    ? "bg-gray-50 text-gray-900 border border-gray-100 px-5 py-3 rounded-none"
                                    : "text-gray-600 bg-transparent px-0 py-0"
                            )}>
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" />
                                    }}
                                >
                                    {msg.role === 'assistant'
                                        ? msg.content
                                            .replace(/(Price:)/g, '\n\n**Price:**')
                                            .replace(/(URL:)/g, '\n\n**URL:**')
                                            .replace(/(Reason:)/g, '\n\n**Reason:** ')
                                            .replace(/(\d+\.\s)/g, '\n\n---\n\n### $1')
                                        : msg.content
                                    }
                                </ReactMarkdown>
                            </div>
                        </motion.div>
                    ))}

                    {/* Loading State - Minimalist Pulse */}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-start"
                        >
                            <span className="text-[9px] uppercase tracking-widest text-gray-300 mb-1.5 font-sans ml-1">Agent</span>
                            <div className="flex items-center gap-1.5 h-7 px-1">
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 bg-gray-300 rounded-full" />
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1 h-1 bg-gray-300 rounded-full" />
                                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1 h-1 bg-gray-300 rounded-full" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="p-8 pb-10 bg-gradient-to-t from-white via-white to-transparent">
                <div className="relative group">
                    <input
                        className="w-full bg-transparent border-b border-gray-200 py-3 pr-12 text-base outline-none text-gray-900 placeholder:text-gray-300 font-light transition-colors focus:border-gray-800"
                        placeholder="Ask me to find anything..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        disabled={isLoading}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-900 transition-colors disabled:opacity-30"
                    >
                        <Send size={16} strokeWidth={1} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
