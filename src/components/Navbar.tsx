  "use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الصفحة الرئيسية", href: "/" },
    { name: "عننا", href: "/about" },
    { name: "الخدمات", href: "/services" },
    { name: "شغلنا", href: "/portfolio" },
    { name: "كلمنا", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0A0A0F]/80 backdrop-blur-xl py-2 shadow-lg shadow-[#7C3AED]/10" 
          : "py-4 bg-transparent"
      }`}
      role="navigation"
      aria-label="التنقل الرئيسي"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative group" aria-label="انتقل إلى الصفحة الرئيسية">
          <motion.div
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo Image with blur effect */}
            <div className="relative">
              <motion.img
                src="/zentra-logo.svg"
                alt="Zentra Logo"
                width={40}
                height={40}
                className="w-10 h-10 md:w-12 md:h-12"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              {/* Blur effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/60 to-[#A78BFA]/60 rounded-full blur-2xl -z-10 scale-150" />
            </div>
            {/* Logo Text with styling similar to the image */}
            <div className="relative">
              <h1 className="text-2xl md:text-3xl font-bold tracking-wider bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent">
                ZENTRA
              </h1>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1" role="menubar">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                className={`relative px-4 py-2 rounded-lg transition-colors ${
                  pathname === item.href 
                    ? "text-[#A78BFA]" 
                    : "text-white hover:text-[#8B5CF6]"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                role="menuitem"
                aria-current={pathname === item.href ? "page" : undefined}
                tabIndex={0}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="relative overflow-hidden bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#7C3AED] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#7C3AED]/30 hover:shadow-[#7C3AED]/50"
            aria-label="ابدأ مشروعك - انتقل لصفحة التواصل"
          >
            <span className="relative z-10">ابدأ مشروعك ✨</span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden text-white relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#0A0A0F]/95 backdrop-blur-xl border-l border-[#7C3AED]/20 md:hidden shadow-2xl"
              role="menu"
              aria-label="قائمة التنقل المحمولة"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {navItems.map((item, index) => (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`py-4 border-b border-[#7C3AED]/10 ${
                        pathname === item.href
                          ? "text-[#A78BFA] font-medium"
                          : "text-white hover:text-[#8B5CF6]"
                      } transition-colors`}
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {pathname === item.href && (
                          <motion.div
                            layoutId="mobile-indicator"
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]"
                          />
                        )}
                      </div>
                    </motion.div>
                  </Link>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.button
                      className="w-full bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#7C3AED] text-white px-6 py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#7C3AED]/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ابدأ مشروعك ✨
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;