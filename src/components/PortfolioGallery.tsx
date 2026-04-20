"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "./LazyImage";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  client: string;
  year: string;
}

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ["الكل", "هوية بصرية", "تطوير مواقع", "تطبيقات موبايل", "تسويق رقمي", "إنتاج فيديو"];

  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "هوية بصرية لمطعم الذواقة",
      category: "هوية بصرية",
      description: "تصميم هوية بصرية شاملة لمطعم متخصص في المأكولات التقليدية، تشمل الشعار والبطاقات والمنيو والمواد التسويقية.",
      image: "/portfolio/restaurant-branding.jpg",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Guidelines"],
      link: "/portfolio/restaurant-branding",
      client: "مطعم الذواقة",
      year: "2024"
    },
    {
      id: "2",
      title: "منصة تعليمية متطورة",
      category: "تطوير مواقع",
      description: "تطوير منصة تعليمية متكاملة مع نظام LMS، فصول افتراضية، ونظام دفع آمن.",
      image: "/portfolio/education-platform.jpg",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      link: "/portfolio/education-platform",
      client: "أكاديمية المستقبل",
      year: "2024"
    },
    {
      id: "3",
      title: "تطبيق عقاري ذكي",
      category: "تطبيقات موبايل",
      description: "تطبيق موبايل للعقارات مع تقنية الواقع المعزز ونظام ذكي للمطابقة بين العملاء والوسطاء.",
      image: "/portfolio/real-estate-app.jpg",
      technologies: ["React Native", "AR Kit", "Firebase", "Google Maps"],
      link: "/portfolio/real-estate-app",
      client: "شركة العقارات الذكية",
      year: "2023"
    },
    {
      id: "4",
      title: "حملة تسويقية لمتجر أزياء",
      category: "تسويق رقمي",
      description: "حملة تسويقية شاملة عبر وسائل التواصل الاجتماعي مع إنتاج محتوى مرئي جذاب.",
      image: "/portfolio/fashion-campaign.jpg",
      technologies: ["Facebook Ads", "Instagram", "TikTok", "Content Creation"],
      link: "/portfolio/fashion-campaign",
      client: "متجر الأزياء الأنيقة",
      year: "2023"
    },
    {
      id: "5",
      title: "إنتاج فيديو ترويجي",
      category: "إنتاج فيديو",
      description: "إنتاج فيديو ترويجي احترافي لشركة تقنية مع استخدام تقنيات الرسوم المتحركة المتقدمة.",
      image: "/portfolio/tech-video.jpg",
      technologies: ["After Effects", "Premiere Pro", "Cinema 4D", "Motion Graphics"],
      link: "/portfolio/tech-video",
      client: "شركة التقنية المتقدمة",
      year: "2023"
    },
    {
      id: "6",
      title: "موقع تجارة إلكترونية",
      category: "تطوير مواقع",
      description: "تطوير موقع تجارة إلكترونية متكامل مع نظام إدارة المخزون ونظام دفع آمن.",
      image: "/portfolio/ecommerce-website.jpg",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      link: "/portfolio/ecommerce-website",
      client: "متجر الأزياء الأنيقة",
      year: "2023"
    },
    {
      id: "7",
      title: "هوية بصرية لشركة تقنية",
      category: "هوية بصرية",
      description: "تصميم هوية بصرية عصرية لشركة تقنية ناشئة مع نظام ألوان متطور وطباعة احترافية.",
      image: "/portfolio/tech-branding.jpg",
      technologies: ["Adobe Illustrator", "Figma", "Brand Strategy"],
      link: "/portfolio/tech-branding",
      client: "شركة التقنية المتقدمة",
      year: "2023"
    },
    {
      id: "8",
      title: "تطبيق توصيل طعام",
      category: "تطبيقات موبايل",
      description: "تطبيق موبايل لتوصيل الطعام مع نظام تتبع في الوقت الفعلي ونظام تقييم العملاء.",
      image: "/portfolio/food-delivery-app.jpg",
      technologies: ["Flutter", "Google Maps", "Firebase", "Payment Gateway"],
      link: "/portfolio/food-delivery-app",
      client: "مطعم الذواقة",
      year: "2023"
    }
  ];

  const filteredItems = selectedCategory === "الكل" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const PortfolioModal = ({ item }: { item: PortfolioItem }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => setSelectedItem(null)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-[#0E0E0E] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#6C63FF]/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-[#6C63FF]/20">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{item.title}</h2>
                <p className="text-[#8A84FF] text-lg">{item.client} • {item.year}</p>
              </div>
              <motion.button
                onClick={() => setSelectedItem(null)}
                className="w-10 h-10 bg-[#6C63FF]/20 rounded-full flex items-center justify-center text-white hover:bg-[#6C63FF]/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative">
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">وصف المشروع</h3>
                  <p className="text-[#E0E0E0] leading-relaxed">{item.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">التقنيات المستخدمة</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-[#6C63FF]/20 border border-[#6C63FF]/40 text-[#8A84FF] text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={item.link}
                    className="flex-1 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] text-white px-6 py-3 rounded-xl font-bold text-center transition-all hover:shadow-lg hover:shadow-[#6C63FF]/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    عرض المشروع
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-3 border-2 border-[#6C63FF] text-[#6C63FF] rounded-xl font-bold transition-all hover:bg-[#6C63FF]/10"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    إغلاق
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 via-[#0E0E0E] to-[#8A84FF]/5" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#8A84FF]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            معرض <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">أعمالنا</span>
          </h2>
          <p className="text-[#E0E0E0] text-xl max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعة متنوعة من المشاريع التي نفخر بها والتي تعكس إبداعنا وخبرتنا
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-bold transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] text-white shadow-lg shadow-[#6C63FF]/30"
                  : "bg-[#1a1a1a] border border-[#6C63FF]/30 text-[#E0E0E0] hover:border-[#6C63FF]/60"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="glass rounded-2xl overflow-hidden border border-[#6C63FF]/20 bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] group-hover:border-[#6C63FF]/60 transition-all">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#6C63FF]/20 backdrop-blur-sm border border-[#6C63FF]/40 text-[#8A84FF] text-sm rounded-full">
                        {item.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#6C63FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <span className="text-white text-2xl">👁️</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#8A84FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#E0E0E0] text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-[#8A84FF] text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-[#8A84FF] text-xs rounded-full">
                          +{item.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex justify-between items-center text-sm text-[#8A84FF]">
                      <span>{item.client}</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-[#E0E0E0] text-lg mb-6">
            هل لديك مشروع مميز تريد تنفيذه؟
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] hover:from-[#8A84FF] hover:to-[#6C63FF] text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>ابدأ مشروعك الآن</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedItem && <PortfolioModal item={selectedItem} />}
    </section>
  );
};

export default PortfolioGallery;



