"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LazyImage from "./LazyImage";

interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

const BlogPostCard = ({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  image, 
  category, 
  slug 
}: BlogPostProps) => {
  return (
    <motion.article
      className="glass rounded-2xl overflow-hidden border border-[#6C63FF]/20 bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <LazyImage
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 to-transparent" />
        
        {/* Category */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-[#6C63FF]/20 backdrop-blur-sm border border-[#6C63FF]/40 text-[#8A84FF] text-sm rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#8A84FF] transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-[#E0E0E0] text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-[#8A84FF] mb-4">
          <span>{author}</span>
          <div className="flex items-center gap-4">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-[#8A84FF] hover:text-[#6C63FF] font-bold transition-colors group"
        >
          <span>اقرأ المزيد</span>
          <motion.span
            className="text-lg"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: "دليل شامل للتسويق الرقمي في 2024",
      excerpt: "اكتشف أحدث استراتيجيات التسويق الرقمي التي ستساعدك في تحقيق أهدافك التجارية هذا العام.",
      author: "فريق زنترا",
      date: "15 يناير 2024",
      readTime: "8 دقائق",
      image: "/blog/digital-marketing-guide.jpg",
      category: "تسويق رقمي",
      slug: "digital-marketing-guide-2024"
    },
    {
      title: "كيفية إنشاء هوية بصرية قوية لعلامتك التجارية",
      excerpt: "تعلم الخطوات الأساسية لتصميم هوية بصرية مميزة تترك انطباعاً قوياً في أذهان عملائك.",
      author: "مصمم زنترا",
      date: "12 يناير 2024",
      readTime: "6 دقائق",
      image: "/blog/brand-identity.jpg",
      category: "تصميم",
      slug: "creating-strong-brand-identity"
    },
    {
      title: "أهمية إنتاج الفيديو في التسويق الحديث",
      excerpt: "لماذا أصبح الفيديو المحرك الرئيسي للمحتوى التسويقي وكيفية الاستفادة منه بفعالية.",
      author: "فريق الإنتاج",
      date: "10 يناير 2024",
      readTime: "5 دقائق",
      image: "/blog/video-marketing.jpg",
      category: "إنتاج فيديو",
      slug: "video-production-marketing"
    },
    {
      title: "تحسين محركات البحث: دليل المبتدئين",
      excerpt: "تعلم أساسيات SEO وكيفية تحسين موقعك لظهور أفضل في نتائج البحث على Google.",
      author: "خبير SEO",
      date: "8 يناير 2024",
      readTime: "10 دقائق",
      image: "/blog/seo-guide.jpg",
      category: "SEO",
      slug: "seo-beginners-guide"
    },
    {
      title: "تطوير منصات تعليمية: التحديات والحلول",
      excerpt: "اكتشف التحديات الشائعة في تطوير منصات التعلم الإلكتروني والحلول المبتكرة لها.",
      author: "فريق التطوير",
      date: "5 يناير 2024",
      readTime: "7 دقائق",
      image: "/blog/elearning-platforms.jpg",
      category: "تطوير منصات",
      slug: "elearning-platform-development"
    },
    {
      title: "استراتيجيات التسويق عبر وسائل التواصل الاجتماعي",
      excerpt: "كيفية بناء حضور قوي على وسائل التواصل الاجتماعي وتحقيق تفاعل عالي مع جمهورك.",
      author: "خبير وسائل التواصل",
      date: "3 يناير 2024",
      readTime: "9 دقائق",
      image: "/blog/social-media-strategies.jpg",
      category: "وسائل التواصل",
      slug: "social-media-marketing-strategies"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/5 via-[#0E0E0E] to-[#8A84FF]/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#8A84FF]/10 rounded-full blur-3xl animate-float-delayed" />
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
            مدونة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">زنترا</span>
          </h2>
          <p className="text-[#E0E0E0] text-xl max-w-3xl mx-auto leading-relaxed">
            نصائح ومعلومات مفيدة في عالم التسويق الرقمي والتطوير والتصميم
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-3xl overflow-hidden border border-[#6C63FF]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E] group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <LazyImage
                  src="/blog/featured-post.jpg"
                  alt="المقال المميز"
                  width={600}
                  height={400}
                  className="w-full h-96 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 to-transparent" />
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-2 bg-[#6C63FF]/20 backdrop-blur-sm border border-[#6C63FF]/40 text-[#8A84FF] text-sm rounded-full font-bold">
                    مقال مميز
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#8A84FF] transition-colors">
                  مستقبل التسويق الرقمي: الاتجاهات والتقنيات الجديدة
                </h3>
                <p className="text-[#E0E0E0] text-lg leading-relaxed mb-6">
                  استكشف أحدث الاتجاهات في عالم التسويق الرقمي وكيفية الاستعداد للمستقبل مع الذكاء الاصطناعي والتقنيات الناشئة.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#8A84FF] mb-6">
                  <span>فريق زنترا</span>
                  <span>20 يناير 2024</span>
                  <span>12 دقيقة قراءة</span>
                </div>
                <Link
                  href="/blog/future-digital-marketing"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] hover:from-[#8A84FF] hover:to-[#6C63FF] text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50"
                >
                  <span>اقرأ المقال</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              {...post}
            />
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-3xl p-12 border border-[#6C63FF]/30 bg-gradient-to-br from-[#6C63FF]/10 to-[#8A84FF]/10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              اشترك في نشرتنا الإخبارية 📧
            </h3>
            <p className="text-[#E0E0E0] text-lg mb-8">
              احصل على أحدث المقالات والنصائح في التسويق الرقمي مباشرة في بريدك الإلكتروني
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-6 py-4 rounded-full bg-[#1a1a1a] border border-[#6C63FF]/30 text-white focus:outline-none focus:border-[#6C63FF] transition-colors"
                aria-label="البريد الإلكتروني"
              />
              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] text-white font-bold transition-all shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                اشترك
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;

