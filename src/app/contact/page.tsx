"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function Contact() {

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0E0E0E] text-white flex flex-col relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 via-[#0E0E0E] to-[#8A84FF]/5 animate-gradient" />
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-[#8A84FF]/10 rounded-full blur-3xl animate-float-delayed" />
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">تواصل</span> معانا
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-[#E0E0E0] mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                مستعد تطوّر براندك؟ يلا نتكلم ونشوف ازاي نقدر نساعدك تحقق أهدافك التسويقية.
              </motion.p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">يلا نبدأ الكلام</span>
                  </h2>
                  <p className="mb-8 text-[#E0E0E0] leading-relaxed">
                    فريقنا مستعد يساعدك تعمل استراتيجية تسويقية تحقق نتائج فعلية. 
                    املأ الفورم وهنتواصل معاك خلال 24 ساعة.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: "📧", title: "راسلنا على الإيميل", text: "diabm4930@gmail.com", gradient: "from-blue-500/10 to-purple-500/10" },
                      { icon: "📞", title: "كلمنا", text: "01015916082", gradient: "from-green-500/10 to-teal-500/10" },
                      { icon: "📍", title: "زورنا", text: "السادات، المنوفية - مول سايلو الدور الثالث", gradient: "from-orange-500/10 to-red-500/10" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={`glass rounded-xl p-5 border border-[#6C63FF]/20 bg-gradient-to-br ${item.gradient}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        whileHover={{ x: 5, borderColor: "rgba(108, 99, 255, 0.5)" }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="text-3xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {item.icon}
                          </motion.div>
                          <div>
                            <h3 className="font-bold mb-1 text-[#8A84FF]">{item.title}</h3>
                            <p className="text-[#E0E0E0] text-sm">{item.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="mt-8">
                    <h3 className="text-lg font-bold mb-4">تابعنا</h3>
                    <div className="flex gap-4">
                      {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                        <motion.a
                          key={social}
                          href={`#${social}`}
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C63FF]/20 to-[#8A84FF]/20 border border-[#6C63FF]/30 flex items-center justify-center hover:from-[#6C63FF]/40 hover:to-[#8A84FF]/40 transition-all"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.6 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="text-[#8A84FF]">🔗</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">الأسئلة الشائعة</span>
              </motion.h2>
              
              <div className="space-y-5">
                {[
                  {
                    question: "المشروع العادي بياخد قد إيه؟",
                    answer: "مدة المشروع بتختلف حسب التفاصيل. الهوية البصرية بتاخد عادة 4-6 أسابيع، والمشاريع المستمرة بتبقى على الأقل 3 شهور.",
                    icon: "⏱️"
                  },
                  {
                    question: "بتشتغلوا في أنهي صناعات؟",
                    answer: "بنشتغل مع عملاء في كل المجالات زي التعليم، المطاعم، التجارة، التكنولوجيا، الصحة، والبراندات الشخصية. طريقتنا المرنة بتخلينا نتميز في أي مجال.",
                    icon: "🎯"
                  },
                  {
                    question: "بتشتغلوا مع الستارت أب والشركات الكبيرة؟",
                    answer: "أيوة طبعاً! بنحب نشتغل مع الستارت أب والشركات القايمة. استراتيجياتنا مصممة خصيصاً لاحتياجات وأهداف وميزانية ومرحلة نمو كل عميل.",
                    icon: "🚀"
                  },
                  {
                    question: "إيه اللي يخلي زنترا مختلفة عن غيرها؟",
                    answer: "المزيج بتاعنا من التميز الإبداعي والاستراتيجية الذكية. مش بس بنعمل حملات جميلة؛ بنضمن كمان إننا نحقق نتايج حقيقية لبيزنسك.",
                    icon: "✨"
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="glass rounded-xl p-6 border border-[#6C63FF]/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ borderColor: "rgba(108, 99, 255, 0.5)", scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="text-3xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {faq.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 text-[#8A84FF]">{faq.question}</h3>
                        <p className="text-[#E0E0E0] text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
}