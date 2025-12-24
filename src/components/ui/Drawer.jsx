
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from "@/lib/utils";

export const Drawer = ({ isOpen, onClose, children, className }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-all duration-500"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
                        className={cn(
                            "fixed inset-y-0 right-0 z-50 w-full sm:w-[500px] md:w-[600px] bg-white/80 backdrop-blur-xl border-l border-white/20 shadow-2xl overflow-hidden",
                            className
                        )}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors z-10 text-gray-400 hover:text-gray-900"
                        >
                            <X size={20} strokeWidth={1.5} />
                        </button>

                        <div className="h-full flex flex-col">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
