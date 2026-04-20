"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0E0E0E] text-white flex flex-col relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 via-[#0E0E0E] to-[#8A84FF]/5 animate-gradient" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#8A84FF]/10 rounded-full blur-3xl animate-float-delayed" />
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
                عن <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">زنترا</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-[#E0E0E0] mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                احنا شركة تسويق ديجيتال بنظرة عصرية وذكية. 
                روحنا الإبداعية وخبرتنا بتساعد البراندات تلمع في العالم الديجيتال.
              </motion.p>
            </div>
          </section>

          {/* Brand Philosophy */}
          <section className="py-16 px-4 relative">
            <div className="container mx-auto max-w-4xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">فلسفتنا</span>
                  </h2>
                  <p className="text-[#E0E0E0] mb-5 leading-relaxed">
                    في زنترا، بنؤمن إن التسويق الناجح هو مزيج من الإبداع والاستراتيجية الذكية. 
                    مش بس بنعمل حملات، بنصنع تجارب حقيقية بتتفاعل مع جمهورك وتحقق نتايج فعلية.
                  </p>
                  <p className="text-[#E0E0E0] mb-5 leading-relaxed">
                    الطريقة بتاعتنا بتجمع بين التفكير المبتكر والتحليل الذكي عشان نضمن إن كل مشروع 
                    مش بس يبقى جميل، لكن كمان يحقق نتايج فعلية لبيزنسك.
                  </p>
                  <p className="text-[#E0E0E0] leading-relaxed">
                    احنا ملتزمين نبني علاقات طويلة مع عملائنا، عشان نبقى جزء من فريقهم 
                    ونساعدهم يتقدموا في العالم الديجيتال اللي دايماً بيتغير.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="glass rounded-xl p-6 border border-[#6C63FF]/20"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-5 text-[#8A84FF]">قيمنا الأساسية</h3>
                  <ul className="space-y-4">
                    {[
                      { title: "الإبداع", description: "حلول مبتكرة تخلي براندك يتميز", icon: "🎨" },
                      { title: "الأمانة", description: "علاقات شفافة وصادقة مع عملائنا", icon: "🤝" },
                      { title: "نتايج سريعة", description: "استراتيجيات فعالة تحقق نتايج حقيقية", icon: "🎯" },
                      { title: "تواصل فعّال", description: "كلام واضح وتواصل مستمر طول فترة الشغل", icon: "💬" },
                      { title: "تميّز بصري", description: "تصميمات مبهرة تجذب الانتباه وتحكي قصة براندك", icon: "✨" }
                    ].map((value, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="text-2xl">{value.icon}</div>
                        <div>
                          <h4 className="font-bold text-white">{value.title}</h4>
                          <p className="text-[#E0E0E0] text-sm">{value.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Team Preview */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                اتعرف على <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">فريقنا المبدع</span>
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* محمد - المبرمج */}
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] rounded-3xl p-8 border-2 border-[#6C63FF]/20 overflow-hidden group-hover:border-[#6C63FF]/60 transition-all duration-500">
                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%']
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    
                    {/* Profile Image with Code Icon */}
                    <div className="relative mb-6">
                      <motion.div 
                        className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#6C63FF] to-[#8A84FF] flex items-center justify-center text-6xl relative overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Floating code symbols */}
                        <div className="hidden md:block absolute inset-0 overflow-hidden">
                          {['</>', '{}', '()'].map((symbol, i) => (
                            <motion.div
                              key={i}
                              className="absolute text-white/20 text-xs font-mono"
                              style={{
                                left: `${20 + i * 30}%`,
                                top: `${30 + i * 20}%`
                              }}
                              animate={{
                                y: [-10, 10, -10],
                                opacity: [0.2, 0.5, 0.2]
                              }}
                              transition={{
                                duration: 2 + i,
                                repeat: Infinity,
                                delay: i * 0.3
                              }}
                            >
                              {symbol}
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.span
                          className="hidden md:inline"
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          👨‍💻
                        </motion.span>
                        <span className="md:hidden">👨‍💻</span>
                      </motion.div>
                      
                      {/* Glowing ring - desktop only */}
                      <motion.div
                        className="hidden md:block absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-[#6C63FF]/30"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    
                    <div className="text-center relative z-10">
                      <motion.h3 
                        className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        محمد
                      </motion.h3>
                      
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <motion.span 
                          className="text-[#8A84FF] text-lg hidden md:inline"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          💻
                        </motion.span>
                        <span className="text-[#8A84FF] text-lg md:hidden">💻</span>
                        <p className="text-[#E0E0E0] font-medium">مبرمج محترف</p>
                      </div>
                      
                      <p className="text-[#B0B0B0] text-sm leading-relaxed mb-6">
                        خبير في تطوير المواقع والأبليكيشنات بأحدث التكنولوجيا. بيحول الأفكار لواقع ديجيتال مميز بكود نظيف واحترافي.
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {['React', 'Next.js', 'TypeScript', 'Node.js'].map((skill, index) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-[#6C63FF]/20 border border-[#6C63FF]/30 text-[#8A84FF] text-xs font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(108, 99, 255, 0.3)' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* جمال - المصور */}
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] rounded-3xl p-8 border-2 border-[#8A84FF]/20 overflow-hidden group-hover:border-[#8A84FF]/60 transition-all duration-500">
                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#8A84FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%']
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    
                    {/* Profile Image with Camera Icon */}
                    <div className="relative mb-6">
                      <motion.div 
                        className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#8A84FF] to-[#6C63FF] flex items-center justify-center text-6xl relative overflow-hidden"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Camera flash effect - desktop only */}
                        <motion.div
                          className="hidden md:block absolute inset-0 bg-white/50"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />
                        
                        {/* Floating camera elements */}
                        <div className="hidden md:block absolute inset-0 overflow-hidden">
                          {['📸', '✨', '🎬'].map((icon, i) => (
                            <motion.div
                              key={i}
                              className="absolute text-2xl"
                              style={{
                                left: `${15 + i * 30}%`,
                                top: `${20 + i * 25}%`
                              }}
                              animate={{
                                y: [-15, 15, -15],
                                opacity: [0.2, 0.6, 0.2],
                                rotate: [0, 10, -10, 0]
                              }}
                              transition={{
                                duration: 2.5 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.4
                              }}
                            >
                              {icon}
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.span
                          className="hidden md:inline"
                          animate={{ 
                            rotate: [0, -10, 10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          📷
                        </motion.span>
                        <span className="md:hidden">📷</span>
                      </motion.div>
                      
                      {/* Glowing ring - desktop only */}
                      <motion.div
                        className="hidden md:block absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-[#8A84FF]/30"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>
                    
                    <div className="text-center relative z-10">
                      <motion.h3 
                        className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#8A84FF] to-[#6C63FF] bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        جمال
                      </motion.h3>
                      
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <motion.span 
                          className="text-[#8A84FF] text-lg hidden md:inline"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          📸
                        </motion.span>
                        <span className="text-[#8A84FF] text-lg md:hidden">📸</span>
                        <p className="text-[#E0E0E0] font-medium">مصور محترف</p>
                      </div>
                      
                      <p className="text-[#B0B0B0] text-sm leading-relaxed mb-6">
                        فنان بصري بيلتقط اللحظات بإبداع. متخصص في التصوير الفوتوغرافي والفيديو عشان يبرز جمال براندك.
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {['تصوير فوتوغرافي', 'مونتاج', 'إخراج', 'تصوير منتجات'].map((skill, index) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-[#8A84FF]/20 border border-[#8A84FF]/30 text-[#8A84FF] text-xs font-medium"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(138, 132, 255, 0.3)' }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}