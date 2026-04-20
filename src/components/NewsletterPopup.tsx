"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user already subscribed or dismissed
    const hasSeenPopup = localStorage.getItem("newsletter-popup-seen");
    const hasSubscribed = localStorage.getItem("newsletter-subscribed");

    if (!hasSeenPopup && !hasSubscribed) {
      // Show popup after 30 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 30000);

      // Show on exit intent
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setIsOpen(true);
        }
      };

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter-popup-seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send to your newsletter service
    console.log("Newsletter subscription:", email);
    
    setIsSubmitted(true);
    localStorage.setItem("newsletter-subscribed", "true");
    
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9997]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9998] w-[90%] max-w-md"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a1a3a] to-[#1a1a2a] p-8 rounded-3xl border-2 border-[#6C63FF]/30 shadow-2xl">
              {/* Close button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {!isSubmitted ? (
                <>
                  {/* Icon */}
                  <motion.div
                    className="text-6xl text-center mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📧
                  </motion.div>

                  <h3 className="text-2xl font-bold text-center mb-2 text-white">
                    اشترك في النشرة البريدية
                  </h3>
                  
                  <p className="text-[#E0E0E0] text-center mb-6">
                    احصل على آخر الأخبار والعروض الحصرية مباشرة في بريدك
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="بريدك الإلكتروني"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 border-[#6C63FF]/30 text-white focus:outline-none focus:border-[#6C63FF] transition-colors"
                    />
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      اشترك الآن ✨
                    </motion.button>
                  </form>

                  <p className="text-xs text-[#B0B0B0] text-center mt-4">
                    نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-6xl mb-4"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    شكراً لك!
                  </h3>
                  <p className="text-[#E0E0E0]">
                    تم الاشتراك بنجاح. ترقب رسائلنا!
                  </p>
                </div>
              )}

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#6C63FF]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[#8A84FF]/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
