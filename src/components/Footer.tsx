"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerVariants}
      className="relative bg-[#0a0a0a] border-t border-[#6C63FF]/20 py-16 px-4 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C63FF]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8A84FF]/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link href="/" className="inline-block group">
              <motion.h3
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                زنترا
              </motion.h3>
            </Link>
            <p className="text-[#E0E0E0] text-sm leading-relaxed mb-6">
              شريكك في التسويق الإبداعي عشان نبني براندات مميزة.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 flex items-center justify-center hover:bg-[#6C63FF]/20 hover:border-[#6C63FF]/50 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-[#8A84FF] text-sm">🔗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-white">الخدمات</h4>
            <ul className="space-y-3">
              {[
                "الهوية البصرية",
                "التسويق عبر وسائل التواصل",
                "إنتاج الفيديو",
                "إنتاج المحتوى",
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="/services"
                    className="text-[#E0E0E0] hover:text-[#8A84FF] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]/50 group-hover:bg-[#8A84FF]"
                      whileHover={{ scale: 1.5 }}
                    />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Pages Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-white">الصفحات</h4>
            <ul className="space-y-3">
              {[
                { name: "الصفحة الرئيسية", href: "/" },
                { name: "عننا", href: "/about" },
                { name: "الخدمات", href: "/services" },
                { name: "شغلنا", href: "/portfolio" },
                { name: "كلمنا", href: "/contact" },
              ].map((page, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={page.href}
                    className="text-[#E0E0E0] hover:text-[#8A84FF] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]/50 group-hover:bg-[#8A84FF]"
                      whileHover={{ scale: 1.5 }}
                    />
                    {page.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4 text-white">تواصل معنا</h4>
            <ul className="space-y-3 text-[#E0E0E0] text-sm">
              {[
                { icon: "📧", text: "diabm4930@gmail.com" },
                { icon: "📞", text: "01015916082" },
                { icon: "📍", text: "السادات، المنوفية - مول سايلو الدور الثالث" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Newsletter */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#6C63FF]/30 text-white text-sm focus:outline-none focus:border-[#6C63FF] transition-colors"
                />
                <motion.button
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8A84FF] text-white text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  إشتراك
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-[#6C63FF]/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p
            className="text-[#E0E0E0] text-sm text-center md:text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            © {currentYear} زنترا. كل الحقوق محفوظة.
          </motion.p>

          <div className="flex gap-6 text-sm">
            {[
              { name: "سياسة الخصوصية", href: "#" },
              { name: "شروط الاستخدام", href: "#" },
            ].map((link, index) => (
              <motion.div key={index} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className="text-[#E0E0E0] hover:text-[#8A84FF] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#6C63FF]/5 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;