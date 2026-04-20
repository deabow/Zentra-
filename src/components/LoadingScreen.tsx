"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0E0E0E]"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/20 via-[#0E0E0E] to-[#8A84FF]/20" />
            
            {/* Rotating rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-64 h-64 border-4 border-[#6C63FF]/30 rounded-full" />
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-48 h-48 border-4 border-[#8A84FF]/30 rounded-full" />
            </motion.div>
          </div>

          {/* Logo and Text */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-4"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(108, 99, 255, 0.5)",
                    "0 0 40px rgba(138, 132, 255, 0.8)",
                    "0 0 20px rgba(108, 99, 255, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#8A84FF] to-[#6C63FF]">
                  ZENTRA
                </span>
              </motion.h1>
            </motion.div>

            {/* Loading dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>

            <motion.p
              className="text-[#8A84FF] mt-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              جاري التحميل...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
