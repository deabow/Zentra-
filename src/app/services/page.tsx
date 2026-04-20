"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export default function Services() {
  const services = [
    {
      title: "الهوية البصرية",
      description: "بنصمملك هويات بصرية مميزة تنقل قيمك وتتواصل مع جمهورك بشكل قوي.",
      icon: "🎨",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "التسويق عبر السوشيال ميديا",
      description: "حملات استراتيجية على السوشيال ميديا تزود التفاعل، وتبني كوميونيتي، وتزود المبيعات.",
      icon: "📱",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "إنتاج الفيديو",
      description: "محتوى فيديو عالي الجودة يحكي قصة براندك، من الفكرة للإنتاج النهائي، مصمم لجمهورك.",
      icon: "🎬",
      gradient: "from-pink-500/10 to-orange-500/10"
    },
    {
      title: "كتابة المحتوى",
      description: "محتوى مكتوب ومرئي ومتعدد الوسائط يخلي براندك مرجع في مجالك.",
      icon: "✍️",
      gradient: "from-green-500/10 to-blue-500/10"
    },
    {
      title: "تحسين محركات البحث والاستراتيجية الديجيتال",
      description: "استراتيجيات تسويق ديجيتال وSEO مبنية على البيانات تحسن الظهور، وتجذب زوار، وتزود العائد.",
      icon: "🔍",
      gradient: "from-yellow-500/10 to-red-500/10"
    },
    {
      title: "تطوير المواقع",
      description: "مواقع عصرية وسريعة تستجيب لكل الأجهزة ومصممة عشان تحول الزوار لعملاء.",
      icon: "💻",
      gradient: "from-indigo-500/10 to-purple-500/10"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0E0E0E] text-white flex flex-col relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 via-[#0E0E0E] to-[#8A84FF]/5 animate-gradient" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#8A84FF]/10 rounded-full blur-3xl animate-float-delayed" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">خدماتنا</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-[#E0E0E0] mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                حلول تسويق ديجيتال متكاملة مصممة خصيصاً عشان تطوّر براندك وتحقق أهدافك.
              </motion.p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`glass rounded-xl p-6 border border-[#6C63FF]/20 bg-gradient-to-br ${service.gradient} group`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#8A84FF] transition-colors">{service.title}</h3>
                    <p className="text-[#E0E0E0] text-sm mb-4 leading-relaxed">{service.description}</p>
                    <Link href="#" className="inline-flex items-center text-[#8A84FF] hover:text-[#6C63FF] font-medium transition-colors text-sm group">
                      اعرف أكثر
                      <motion.span
                        className="mr-2"
                        animate={{ x: [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 px-4 relative">
            <div className="container mx-auto max-w-4xl">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">منهجيتنا</span>
              </motion.h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "الاكتشاف", description: "نغوص في بيزنسك، وأهدافك، وجمهورك المستهدف عشان نفهم إيه اللي يميزك.", icon: "🔍" },
                  { step: "02", title: "الاستراتيجية", description: "فريقنا بيطور استراتيجية تسويقية مخصصة تتماشى مع أهدافك وهوية براندك.", icon: "📊" },
                  { step: "03", title: "الإنتاج", description: "بنحول الأفكار لحقيقة من خلال محتوى جذاب وتصميمات مبهرة وتجارب ممتعة.", icon: "🎨" },
                  { step: "04", title: "الإطلاق", description: "بننفذ الحملات على كل القنوات بدقة توقيتية واستهداف مظبوط.", icon: "🚀" },
                  { step: "05", title: "التحسين", description: "بنراقب الأداء باستمرار ونحسن الاستراتيجيات عشان نحقق أقصى نتائج وعائد.", icon: "📈" }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-xl p-6 border border-[#6C63FF]/20"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(108, 99, 255, 0.5)" }}
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]"
                          whileHover={{ scale: 1.2 }}
                        >
                          {process.step}
                        </motion.div>
                        <div className="text-3xl">{process.icon}</div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-[#8A84FF]">{process.title}</h3>
                        <p className="text-[#E0E0E0] leading-relaxed">{process.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <motion.div 
              className="container mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl p-12 border border-[#6C63FF]/30 bg-gradient-to-br from-[#6C63FF]/10 to-[#8A84FF]/10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  مستعد تطوّر براندك؟ 🚀
                </h2>
                <p className="text-[#E0E0E0] text-lg mb-8">
                  يلا نتكلم ونشوف ازاي خدماتنا ممكن تساعدك تحقق أهدافك
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] hover:from-[#8A84FF] hover:to-[#6C63FF] text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-[#6C63FF]/30"
                  >
                    ابدأ مشروعك دلوقتي ✨
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </section>
          
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}