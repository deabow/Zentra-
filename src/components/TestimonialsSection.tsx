"use client";

import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialCard = ({ name, role, company, content, avatar, rating }: TestimonialProps) => {
  return (
    <motion.div
      className="glass rounded-2xl p-6 border border-[#6C63FF]/20 bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            ⭐
          </motion.span>
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-[#E0E0E0] text-lg leading-relaxed mb-6 italic">
        "{content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <LazyImage
          src={avatar}
          alt={`صورة ${name}`}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h4 className="text-white font-bold text-lg">{name}</h4>
          <p className="text-[#8A84FF] text-sm">{role}</p>
          <p className="text-[#E0E0E0] text-sm">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مدير التسويق",
      company: "شركة التقنية المتقدمة",
      content: "زنترا غيرت مفهومنا للتسويق الرقمي. النتائج كانت مذهلة والخدمة احترافية جداً.",
      avatar: "/testimonials/ahmed.jpg",
      rating: 5
    },
    {
      name: "فاطمة علي",
      role: "مالكة متجر إلكتروني",
      company: "متجر الأزياء الأنيقة",
      content: "من خلال زنترا، زادت مبيعاتنا بنسبة 300% في 6 أشهر فقط. فريق مبدع ومحترف.",
      avatar: "/testimonials/fatima.jpg",
      rating: 5
    },
    {
      name: "محمد حسن",
      role: "رئيس قسم التسويق",
      company: "مؤسسة التعليم الحديث",
      content: "الهوية البصرية التي صمموها لنا كانت نقطة تحول في حضورنا الرقمي.",
      avatar: "/testimonials/mohamed.jpg",
      rating: 5
    },
    {
      name: "سارة أحمد",
      role: "مديرة العلامة التجارية",
      company: "مطعم الذواقة",
      content: "إنتاج الفيديو كان احترافياً جداً. المحتوى جذب عملاء جدد وزاد من شهرتنا.",
      avatar: "/testimonials/sara.jpg",
      rating: 5
    },
    {
      name: "علي محمود",
      role: "المدير التنفيذي",
      company: "شركة العقارات الذكية",
      content: "الموقع الذي طوروه لنا سهل على عملائنا عملية البحث والشراء بشكل كبير.",
      avatar: "/testimonials/ali.jpg",
      rating: 5
    },
    {
      name: "نور الدين",
      role: "مؤسس منصة تعليمية",
      company: "أكاديمية المستقبل",
      content: "منصة التعلم التي طوروها لنا ساعدت آلاف الطلاب في تحقيق أهدافهم التعليمية.",
      avatar: "/testimonials/nour.jpg",
      rating: 5
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

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ماذا يقول عملاؤنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF]">عنّا؟</span>
          </h2>
          <p className="text-[#E0E0E0] text-xl max-w-3xl mx-auto leading-relaxed">
            انضموا إلى مئات العملاء الراضين الذين حققوا نجاحاً مذهلاً مع زنترا
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "200+", label: "عميل راضي" },
            { number: "500+", label: "مشروع مكتمل" },
            { number: "98%", label: "معدل الرضا" },
            { number: "24/7", label: "دعم فني" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-[#E0E0E0] text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

