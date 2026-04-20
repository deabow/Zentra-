"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LazyImage from "./LazyImage";

interface CaseStudyProps {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
  link: string;
}

const CaseStudyCard = ({ 
  title, 
  client, 
  industry, 
  challenge, 
  solution, 
  results, 
  image, 
  tags, 
  link 
}: CaseStudyProps) => {
  return (
    <motion.div
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
        
        {/* Tags */}
        <div className="absolute top-4 right-4 flex gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-[#6C63FF]/20 backdrop-blur-sm border border-[#6C63FF]/40 text-[#8A84FF] text-sm rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8A84FF] transition-colors">
            {title}
          </h3>
          <p className="text-[#8A84FF] font-medium">{client}</p>
          <p className="text-[#E0E0E0] text-sm">{industry}</p>
        </div>

        {/* Challenge & Solution */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-white font-bold mb-2">التحدي:</h4>
            <p className="text-[#E0E0E0] text-sm leading-relaxed">{challenge}</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-2">الحل:</h4>
            <p className="text-[#E0E0E0] text-sm leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <h4 className="text-white font-bold mb-3">النتائج:</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 text-[#E0E0E0] text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-[#6C63FF]">✓</span>
                {result}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-[#8A84FF] hover:text-[#6C63FF] font-bold transition-colors group"
        >
          <span>اقرأ القصة كاملة</span>
          <motion.span
            className="text-xl"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "تحويل متجر إلكتروني إلى منصة رائدة",
      client: "متجر الأزياء الأنيقة",
      industry: "التجارة الإلكترونية",
      challenge: "كان المتجر يعاني من معدل تحويل منخفض وعدم وجود هوية بصرية مميزة",
      solution: "قمنا بتطوير هوية بصرية شاملة، تحسين تجربة المستخدم، وإنشاء استراتيجية تسويق رقمي متكاملة",
      results: [
        "زيادة المبيعات بنسبة 300%",
        "تحسين معدل التحويل من 1.2% إلى 4.8%",
        "زيادة حركة المرور بنسبة 250%",
        "تحسين تصنيف Google من الصفحة 5 إلى الصفحة 1"
      ],
      image: "/case-studies/fashion-store.jpg",
      tags: ["هوية بصرية", "تسويق رقمي", "SEO"],
      link: "/case-studies/fashion-store"
    },
    {
      title: "إنشاء منصة تعليمية متطورة",
      client: "أكاديمية المستقبل",
      industry: "التعليم الإلكتروني",
      challenge: "الحاجة إلى منصة تعليمية تدعم الفصول الافتراضية وإدارة الطلاب",
      solution: "تطوير منصة LMS متكاملة مع نظام دفع، فصول افتراضية، وتتبع التقدم",
      results: [
        "تسجيل 5000+ طالب في أول 6 أشهر",
        "معدل إكمال الدورات 85%",
        "تقييم المستخدمين 4.9/5",
        "زيادة الإيرادات بنسبة 400%"
      ],
      image: "/case-studies/education-platform.jpg",
      tags: ["تطوير منصات", "LMS", "فصول افتراضية"],
      link: "/case-studies/education-platform"
    },
    {
      title: "إعادة إحياء علامة تجارية تقليدية",
      client: "مطعم الذواقة",
      industry: "المطاعم والضيافة",
      challenge: "علامة تجارية قديمة تحتاج إلى تحديث لاستهداف جيل جديد من العملاء",
      solution: "تحديث الهوية البصرية، إنشاء حضور رقمي قوي، وإنتاج محتوى فيديو جذاب",
      results: [
        "زيادة المبيعات بنسبة 180%",
        "زيادة المتابعين على وسائل التواصل بنسبة 500%",
        "تحسين تقييمات Google من 3.2 إلى 4.7",
        "زيادة الحجوزات عبر الإنترنت بنسبة 300%"
      ],
      image: "/case-studies/restaurant.jpg",
      tags: ["هوية بصرية", "إنتاج فيديو", "وسائل التواصل"],
      link: "/case-studies/restaurant"
    },
    {
      title: "تطوير تطبيق عقاري ذكي",
      client: "شركة العقارات الذكية",
      industry: "العقارات",
      challenge: "الحاجة إلى تطبيق يسهل عملية البحث عن العقارات وربط العملاء بالوسطاء",
      solution: "تطوير تطبيق موبايل وويب مع نظام ذكي للمطابقة وتقنية الواقع المعزز",
      results: [
        "تحميل التطبيق 50,000+ مرة",
        "معدل استخدام يومي 70%",
        "زيادة المبيعات بنسبة 250%",
        "تقييم المستخدمين 4.8/5"
      ],
      image: "/case-studies/real-estate.jpg",
      tags: ["تطبيقات موبايل", "تطوير ويب", "تقنيات متقدمة"],
      link: "/case-studies/real-estate"
    }
  ];

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
            دراسات <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">الحالة</span>
          </h2>
          <p className="text-[#E0E0E0] text-xl max-w-3xl mx-auto leading-relaxed">
            اكتشف كيف ساعدنا عملاءنا في تحقيق نجاحات مذهلة وتحويل تحدياتهم إلى فرص
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              {...caseStudy}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] hover:from-[#8A84FF] hover:to-[#6C63FF] text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50"
          >
            <span>شاهد جميع أعمالنا</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

