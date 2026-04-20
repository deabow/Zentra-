"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TypingText from "@/components/TypingText";
import Counter from "@/components/Counter";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white flex flex-col overflow-hidden">
      {/* Animated Background - Optimized for Mobile */}
      <div className="fixed inset-0 z-0">
        {/* Static gradient on mobile, animated on desktop */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 via-[#0E0E0E] to-[#8A84FF]/5 md:animate-gradient" />
        
        {/* Morphing Blobs - Desktop only */}
        <div className="hidden lg:block absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-morphing" />
        <div className="hidden lg:block absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-liquid" />
        <div className="hidden lg:block absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-500/15 via-orange-500/15 to-yellow-500/15 rounded-full blur-3xl animate-float" style={{ transform: 'translate(-50%, -50%)' }} />
        
        {/* Simple static blobs for mobile */}
        <div className="lg:hidden absolute top-20 left-10 w-[250px] h-[250px] bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="lg:hidden absolute bottom-20 right-10 w-[250px] h-[250px] bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-full blur-3xl" />
        
        {/* Rotating Rings - Desktop only */}
        <div className="hidden lg:block absolute top-40 right-40 w-64 h-64 border-4 border-[#6C63FF]/20 rounded-full animate-rotate" />
        <div className="hidden lg:block absolute bottom-40 left-40 w-80 h-80 border-4 border-[#8A84FF]/20 rounded-full animate-rotate" style={{ animationDirection: 'reverse' }} />
        
        {/* Grid Pattern - Desktop only */}
        <div className="hidden lg:block absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(108, 99, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108, 99, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-16 px-4 flex-grow min-h-screen flex items-center">
          <motion.div 
            className="container mx-auto text-center max-w-4xl"
            style={{ opacity, scale, y }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <motion.span
                className="inline-block text-sm md:text-base font-medium px-6 py-3 rounded-full bg-gradient-to-r from-[#6C63FF]/20 via-[#8A84FF]/20 to-[#6C63FF]/20 border-2 border-[#6C63FF]/40 text-[#8A84FF] mb-8 relative overflow-hidden"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(108, 99, 255, 0.3)",
                    "0 0 60px rgba(138, 132, 255, 0.6)",
                    "0 0 20px rgba(108, 99, 255, 0.3)"
                  ],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.1, rotate: [0, -2, 2, -2, 0] }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">✨ أهلاً بيك في مستقبل الإبداع ✨</span>
              </motion.span>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Logo above text */}
              <motion.div
                className="relative mb-4 md:mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.img
                  src="/zentra-logo.svg"
                  alt="Zentra Logo"
                  width={60}
                  height={60}
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                {/* Blur effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/70 to-[#A78BFA]/70 rounded-full blur-3xl -z-10 scale-150" />
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2"
              >
                نخلي كل براند يلمع —{" "}
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Simpler version for mobile */}
                  <span className="md:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">
                    زنترا
                  </span>
                  
                  {/* Animated version for desktop */}
                  <motion.span
                    className="hidden md:inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#8A84FF] to-[#6C63FF]"
                    animate={{ 
                      backgroundPosition: ["0%", "100%", "0%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ 
                      backgroundSize: "200% 100%"
                    }}
                  >
                    زنترا
                  </motion.span>
                  
                  {/* Glow effect - desktop only */}
                  <motion.div
                    className="hidden md:block absolute -inset-2 bg-gradient-to-r from-[#6C63FF]/20 to-[#8A84FF]/20 rounded-lg blur-xl -z-10"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.span>
              <br />
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.3)",
                    "0 0 20px rgba(255, 255, 255, 0.5)",
                    "0 0 10px rgba(255, 255, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                شريكك في التسويق الإبداعي
              </motion.span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-[#E0E0E0] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              احنا في زنترا بنقدم حلول تسويقية مبتكرة لكل أنواع البيزنس — من <TypingText texts={["المنصات التعليمية", "المطاعم", "المتاجر", "البراندات الشخصية"]} />.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glowing animated border - Desktop only */}
                <motion.div
                  className="hidden md:block absolute -inset-1 bg-gradient-to-r from-[#6C63FF] via-[#8A84FF] to-[#6C63FF] rounded-full blur opacity-75 group-hover:opacity-100"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 100%" }}
                />
                <Link href="/contact" className="relative block bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] hover:from-[#8A84FF] hover:to-[#6C63FF] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all text-center shadow-2xl shadow-[#6C63FF]/50 w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    {/* Remove rotating emoji on mobile */}
                    <span className="hidden md:inline">
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        ✨
                      </motion.span>
                    </span>
                    <span className="md:hidden">✨</span>
                    ابدأ مشروعك دلوقتي
                    <span className="hidden md:inline">
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚀
                      </motion.span>
                    </span>
                    <span className="md:hidden">🚀</span>
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Rotating border - Desktop only */}
                <motion.div
                  className="hidden md:block absolute -inset-1 bg-gradient-to-r from-[#8A84FF] to-[#6C63FF] rounded-full blur opacity-50 group-hover:opacity-75"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <Link href="/services" className="relative block border-3 border-[#6C63FF] bg-[#0E0E0E] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all hover:bg-[#6C63FF]/20 text-center backdrop-blur-sm w-full sm:w-auto">
                  <span className="flex items-center justify-center gap-2">
                    🎯
                    اعرف خدماتنا
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Reduce particles on mobile - only show on desktop */}
              <div className="hidden md:block">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: Math.random() * 8 + 2 + 'px',
                      height: Math.random() * 8 + 2 + 'px',
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background: `radial-gradient(circle, ${[
                        'rgba(108, 99, 255, 0.8)',
                        'rgba(138, 132, 255, 0.8)',
                        'rgba(255, 105, 180, 0.8)',
                        'rgba(147, 51, 234, 0.8)'
                      ][Math.floor(Math.random() * 4)]}, transparent)`,
                      filter: 'blur(1px)'
                    }}
                    animate={{
                      y: [0, -100 - Math.random() * 200, -300 - Math.random() * 200],
                      x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Mobile - only 10 particles */}
              <div className="md:hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`mobile-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: '4px',
                      height: '4px',
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background: 'rgba(108, 99, 255, 0.6)',
                    }}
                    animate={{
                      y: [0, -150],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Large floating orbs - desktop only */}
              <div className="hidden lg:block">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`orb-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: 100 + Math.random() * 100 + 'px',
                      height: 100 + Math.random() * 100 + 'px',
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      background: `radial-gradient(circle, rgba(108, 99, 255, 0.2), transparent)`,
                      filter: 'blur(40px)'
                    }}
                    animate={{
                      y: [0, -50, 0],
                      x: [0, 30, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 8 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4 relative">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                خدماتنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">الرئيسية</span>
              </h2>
              <p className="text-[#E0E0E0] text-lg">بنقدملك كل حاجة لازمة عشان براندك يلمع</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
              {[
                { 
                  title: "الهوية البصرية", 
                  description: "بنصمملك هوية بصرية مميزة تخلي جمهورك يعرفك من أول نظرة.",
                  icon: "🎨",
                  gradient: "from-purple-500/10 to-pink-500/10"
                },
                { 
                  title: "التسويق عبر السوشيال ميديا", 
                  description: "حملات تسويقية ذكية تخليك دايماً في بال عملائك.",
                  icon: "📱",
                  gradient: "from-blue-500/10 to-purple-500/10"
                },
                { 
                  title: "إنتاج الفيديو", 
                  description: "محتوى فيديو احترافي يحكي قصة براندك بطريقة مبهرة.",
                  icon: "🎬",
                  gradient: "from-pink-500/10 to-orange-500/10"
                },
                { 
                  title: "كتابة المحتوى", 
                  description: "محتوى جذاب وقوي يخلي عملائك يتفاعلوا معاك.",
                  icon: "✍️",
                  gradient: "from-green-500/10 to-blue-500/10"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -20,
                    rotateY: 10,
                    rotateX: 10,
                    z: 50
                  }}
                  className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-[#6C63FF]/20 hover:border-[#6C63FF]/60 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  />
                  
                  {/* Glowing orb effect */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6C63FF]/30 to-transparent rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl mb-6 filter drop-shadow-lg"
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: [0, -10, 10, -10, 0],
                        y: -10
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#8A84FF] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#E0E0E0] text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link href="/services" className="inline-flex items-center text-[#8A84FF] hover:text-[#6C63FF] transition-colors text-base font-bold group">
                      <span>اعرف المزيد</span>
                      <motion.span
                        className="mr-3 text-2xl"
                        animate={{ x: [0, -8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </div>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                    }}
                    animate={{
                      x: ["-100%", "200%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                  
                  {/* 3D depth layers */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" style={{
                    boxShadow: "0 30px 60px rgba(108, 99, 255, 0.4), inset 0 0 40px rgba(138, 132, 255, 0.1)"
                  }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Development Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          {/* Animated code-like background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-5">
              <div className="text-[#6C63FF] font-mono text-xs leading-relaxed">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: [0, 0.5, 0], x: [-100, 0, 100] }}
                    transition={{ duration: 5, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {`function createPlatform() { return innovation(); } // ${i}`}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Floating code symbols */}
            <div className="absolute inset-0 pointer-events-none">
              {['</', '{', '}', '()', '=>', '[]', '...', '&&'].map((symbol, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl md:text-6xl font-mono text-[#6C63FF]/20 font-bold"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -100, 0],
                    rotate: [0, 360],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-6xl">💻</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                بنطور <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#8A84FF] to-[#6C63FF] animate-text-glow">منصات ديجيتال</span> متكاملة
              </h2>
              
              <p className="text-xl md:text-2xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed">
                من الفكرة للتنفيذ، بنبني منصات تعليمية، تجارية، وتطبيقات مخصصة بأحدث التكنولوجيا
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left side - Code editor mockup */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 border-2 border-[#6C63FF]/30 overflow-hidden relative"
                  whileHover={{ borderColor: "rgba(108, 99, 255, 0.6)", scale: 1.02 }}
                  style={{
                    boxShadow: "0 20px 60px rgba(108, 99, 255, 0.3), inset 0 0 30px rgba(138, 132, 255, 0.1)"
                  }}
                >
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#6C63FF]/20">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-xs text-[#8A84FF] font-mono ml-4">zentra-platform.tsx</span>
                  </div>
                  
                  {/* Code content */}
                  <div className="font-mono text-sm space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">platform</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-yellow-400">{'{'}</span>
                    </motion.div>
                    
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-400">type:</span>{" "}
                      <span className="text-orange-400">"تعليمية"</span>,
                    </motion.div>
                    
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-400">features:</span>{" "}
                      <span className="text-white">[</span>
                      <span className="text-orange-400">"LMS"</span>,{" "}
                      <span className="text-orange-400">"Live Classes"</span>
                      <span className="text-white">]</span>,
                    </motion.div>
                    
                    <motion.div
                      className="pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-green-400">tech:</span>{" "}
                      <span className="text-white">[</span>
                      <span className="text-orange-400">"React"</span>,{" "}
                      <span className="text-orange-400">"Node.js"</span>
                      <span className="text-white">]</span>,
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-yellow-400">{'}'}</span>
                      <span className="text-white">;</span>
                    </motion.div>
                    
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-gray-500">// ✨ نحول أفكارك إلى واقع رقمي</span>
                    </motion.div>
                  </div>
                  
                  {/* Typing cursor */}
                  <motion.div
                    className="inline-block w-2 h-4 bg-[#6C63FF] ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              {/* Right side - Platform types */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: "🎓",
                    title: "منصات تعليمية",
                    description: "سيستم تعليم كامل مع كلاسات أونلاين واختبارات تفاعلية",
                    gradient: "from-blue-500/20 to-cyan-500/20",
                    tech: ["LMS", "Video Streaming", "Gamification"]
                  },
                  {
                    icon: "🛍️",
                    title: "متاجر إلكترونية",
                    description: "متجر أونلاين متكامل مع بوابات دفع وإدارة مخزون ذكية",
                    gradient: "from-purple-500/20 to-pink-500/20",
                    tech: ["E-commerce", "Payment Gateway", "Analytics"]
                  },
                  {
                    icon: "📱",
                    title: "تطبيقات مخصصة",
                    description: "أبليكيشنات موبايل وويب مصممة على مقاسك",
                    gradient: "from-orange-500/20 to-red-500/20",
                    tech: ["Mobile Apps", "Web Apps", "APIs"]
                  },
                  {
                    icon: "🏢",
                    title: "حلول للشركات",
                    description: "أنظمة إدارة وأتمتة تخلي شغلك أسهل وأسرع",
                    gradient: "from-green-500/20 to-teal-500/20",
                    tech: ["ERP", "CRM", "Automation"]
                  }
                ].map((platform, index) => (
                  <motion.div
                    key={index}
                    className={`relative group bg-gradient-to-br ${platform.gradient} p-6 rounded-2xl border-2 border-[#6C63FF]/20 hover:border-[#6C63FF]/60 cursor-pointer overflow-hidden`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    style={{
                      boxShadow: "0 10px 30px rgba(108, 99, 255, 0.2)"
                    }}
                  >
                    {/* Hover shine effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                      }}
                      animate={{
                        x: ["-100%", "200%"]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {platform.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8A84FF] transition-colors">
                          {platform.title}
                        </h3>
                        <p className="text-[#E0E0E0] text-sm mb-3 leading-relaxed">
                          {platform.description}
                        </p>
                        
                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2">
                          {platform.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/40 text-[#8A84FF] font-mono"
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(108, 99, 255, 0.3)" }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Tech stack showcase */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-[#8A84FF]">
                التكنولوجيا اللي بنشتغل بيها 🚀
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Next.js", icon: "▲" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "TypeScript", icon: "📘" },
                  { name: "Python", icon: "🐍" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "AWS", icon: "☁️" },
                  { name: "Docker", icon: "🐳" },
                  { name: "AI/ML", icon: "🤖" }
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5 }}
                  >
                    <div className="px-5 py-3 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#6C63FF]/30 group-hover:border-[#6C63FF]/80 transition-all">
                      <span className="text-2xl mr-2">{tech.icon}</span>
                      <span className="text-sm font-mono text-white group-hover:text-[#8A84FF] transition-colors">
                        {tech.name}
                      </span>
                    </div>
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#6C63FF]/20 blur-xl opacity-0 group-hover:opacity-100 -z-10"
                      animate={{
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: 12, label: "عملاء سعداء", icon: "😊" },
                { number: 24, label: "مشروع مكتمل", icon: "🎯" },
                { number: 98, label: "رضا العملاء", icon: "⭐", suffix: "%" },
                { number: 2, label: "سنين خبرة", icon: "📈" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-6 text-center border border-[#6C63FF]/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] mb-2">
                    <Counter value={stat.number} suffix={stat.suffix || ""} />
                  </div>
                  <div className="text-[#E0E0E0] text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 text-center relative overflow-hidden">
          {/* Multiple animated background layers */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/20 via-[#8A84FF]/20 to-[#6C63FF]/20"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{ backgroundSize: "200% 100%" }}
            />
            <motion.div
              className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-transparent rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />
          </div>
          
          <motion.div 
            className="container mx-auto max-w-4xl relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a1a3a] to-[#1a1a2a] p-16 rounded-[3rem] border-2 backdrop-blur-xl overflow-hidden"
              style={{
                borderImage: "linear-gradient(45deg, #6C63FF, #8A84FF, #6C63FF) 1",
                boxShadow: "0 30px 80px rgba(108, 99, 255, 0.4), inset 0 0 60px rgba(138, 132, 255, 0.1)"
              }}
              whileHover={{ scale: 1.02, rotateX: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Rotating gradient border */}
              <motion.div
                className="absolute inset-0 opacity-50"
                style={{
                  background: "conic-gradient(from 0deg, #6C63FF, #8A84FF, #6C63FF, #8A84FF, #6C63FF)"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner container */}
              <div className="relative z-10 bg-[#0E0E0E]/80 rounded-[2.5rem] p-12 backdrop-blur-sm">
                {/* Floating emoji particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {['🚀', '✨', '💫', '⭐', '🎯'].map((emoji, i) => (
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
                
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold mb-6 relative"
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
                    مستعد تطور براندك؟
                  </motion.span>
                  <motion.span
                    className="inline-block mr-3 text-5xl"
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  className="text-xl md:text-2xl text-[#E0E0E0] mb-12 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  انضم لمئات العملاء السعداء اللي حولوا وجودهم الديجيتال معانا في زنترا.
                </motion.p>
                
                <motion.div
                  className="relative inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Crazy animated rings around button */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border-2 border-[#6C63FF]/30"
                      style={{
                        padding: `${i * 20}px`
                      }}
                      animate={{
                        scale: [1, 1.5 + i * 0.3],
                        opacity: [0.5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                    />
                  ))}
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact" className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#6C63FF] via-[#8A84FF] to-[#6C63FF] text-white px-12 py-6 rounded-full text-xl font-bold transition-all shadow-2xl">
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        ✨
                      </motion.span>
                      <span>ابدأ مشروعك النهاردة</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        💫
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
        
        <Footer />
        
        {/* Chatbot */}
        <Chatbot />
      </div>
    </div>
  );
}