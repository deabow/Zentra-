"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function Portfolio() {

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0E0E0E] text-white flex flex-col relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 via-[#0E0E0E] to-[#8A84FF]/5 animate-gradient" />
          <div className="absolute top-40 left-1/3 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-[#8A84FF]/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="relative z-10">
          <Navbar />
          
          {/* Hero Section */}
          <section className="pt-32 pb-16 px-4 flex-grow">
            <div className="container mx-auto max-w-3xl text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">شغلنا</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-[#E0E0E0] mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                احنا بنشتغل على مشاريع مبهرة هنعرضها قريباً
              </motion.p>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a1a3a] to-[#1a1a2a] p-16 rounded-[3rem] border-2 backdrop-blur-xl overflow-hidden"
                  style={{
                    borderImage: "linear-gradient(45deg, #6C63FF, #8A84FF, #6C63FF) 1",
                    boxShadow: "0 30px 80px rgba(108, 99, 255, 0.4), inset 0 0 60px rgba(138, 132, 255, 0.1)"
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated Icon */}
                  <motion.div
                    className="text-8xl mb-8"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🚀
                  </motion.div>

                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="inline-block"
                      animate={{
                        textShadow: [
                          "0 0 20px rgba(108, 99, 255, 0.5)",
                          "0 0 40px rgba(138, 132, 255, 0.8)",
                          "0 0 20px rgba(108, 99, 255, 0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      مشاريعنا قريباً
                    </motion.span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-xl md:text-2xl text-[#E0E0E0] mb-12 leading-relaxed max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    احنا دلوقتي بنشتغل على مشاريع مبهرة هنعرضها قريباً. 
                    تابعنا على السوشيال ميديا عشان تشوف أحدث شغلنا!
                  </motion.p>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {['🎨', '💻', '🎬', '✨', '💡'].map((emoji, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-4xl"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${20 + (i % 2) * 40}%`
                        }}
                        animate={{
                          y: [0, -30, 0],
                          rotate: [0, 360],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      >
                        {emoji}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="relative inline-block mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/contact" className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#6C63FF] via-[#8A84FF] to-[#6C63FF] text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-2xl">
                        <motion.span
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          ✨
                        </motion.span>
                        <span>عاوز تشتغل معانا؟</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          💡
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>
          
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}