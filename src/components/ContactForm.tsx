"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  timeline: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    timeline: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "الهوية البصرية",
    "التسويق عبر السوشيال ميديا",
    "إنتاج الفيديو",
    "كتابة المحتوى",
    "تطوير المواقع",
    "تحسين محركات البحث",
    "تطوير منصات",
    "استشارة تسويقية"
  ];

  const budgets = [
    "أقل من 5,000 جنيه",
    "5,000 - 15,000 جنيه",
    "15,000 - 30,000 جنيه",
    "30,000 - 50,000 جنيه",
    "أكتر من 50,000 جنيه"
  ];

  const timelines = [
    "أقل من شهر",
    "1-3 شهور",
    "3-6 شهور",
    "6-12 شهر",
    "أكتر من سنة"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!/^(\+20|0)?1[0-9]{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "رقم الهاتف غير صحيح";
    }

    if (!formData.service) {
      newErrors.service = "يرجى اختيار الخدمة";
    }

    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
      
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        timeline: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-12 text-center border border-[#6C63FF]/30 bg-gradient-to-br from-[#6C63FF]/10 to-[#8A84FF]/10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-6xl mb-6"
        >
          ✅
        </motion.div>
        <h3 className="text-3xl font-bold text-white mb-4">
          تم إرسال رسالتك بنجاح!
        </h3>
        <p className="text-[#E0E0E0] text-lg mb-6">
          شكراً ليك! هنتواصل معاك خلال 24 ساعة للرد على استفسارك.
        </p>
        <motion.button
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] text-white rounded-full font-bold transition-all shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          إرسال رسالة تانية
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 border border-[#6C63FF]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0E0E0E]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-white font-bold mb-2">
            الاسم الكامل *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 text-white transition-colors focus:outline-none ${
              errors.name ? "border-red-500" : "border-[#6C63FF]/30 focus:border-[#6C63FF]"
            }`}
            placeholder="أدخل اسمك الكامل"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <motion.p
              id="name-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-white font-bold mb-2">
            البريد الإلكتروني *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 text-white transition-colors focus:outline-none ${
              errors.email ? "border-red-500" : "border-[#6C63FF]/30 focus:border-[#6C63FF]"
            }`}
            placeholder="example@email.com"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <motion.p
              id="email-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-white font-bold mb-2">
            رقم الهاتف *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 text-white transition-colors focus:outline-none ${
              errors.phone ? "border-red-500" : "border-[#6C63FF]/30 focus:border-[#6C63FF]"
            }`}
            placeholder="01012345678"
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <motion.p
              id="phone-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.phone}
            </motion.p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-white font-bold mb-2">
            اسم الشركة
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 border-[#6C63FF]/30 text-white transition-colors focus:outline-none focus:border-[#6C63FF]"
            placeholder="اسم شركتك أو مؤسستك"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-white font-bold mb-2">
            الخدمة المطلوبة *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 text-white transition-colors focus:outline-none ${
              errors.service ? "border-red-500" : "border-[#6C63FF]/30 focus:border-[#6C63FF]"
            }`}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">اختر الخدمة</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <motion.p
              id="service-error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.service}
            </motion.p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-white font-bold mb-2">
            الميزانية المتوقعة
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 border-[#6C63FF]/30 text-white transition-colors focus:outline-none focus:border-[#6C63FF]"
          >
            <option value="">اختر الميزانية</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-white font-bold mb-2">
            الجدول الزمني المطلوب
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 border-[#6C63FF]/30 text-white transition-colors focus:outline-none focus:border-[#6C63FF]"
          >
            <option value="">اختر الجدول الزمني</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-white font-bold mb-2">
          تفاصيل المشروع *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 rounded-xl bg-[#0E0E0E] border-2 text-white transition-colors focus:outline-none resize-none ${
            errors.message ? "border-red-500" : "border-[#6C63FF]/30 focus:border-[#6C63FF]"
          }`}
          placeholder="أخبرنا عن مشروعك بالتفصيل..."
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <motion.p
            id="message-error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1"
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] hover:from-[#8A84FF] hover:to-[#6C63FF] text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-3">
            <motion.div
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            جاري الإرسال...
          </div>
        ) : (
          "إرسال الرسالة"
        )}
      </motion.button>

      <p className="text-[#E0E0E0] text-sm text-center mt-4">
        * الحقول المطلوبة
      </p>
    </motion.form>
  );
};

export default ContactForm;



