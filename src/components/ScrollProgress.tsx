"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C63FF] via-[#8A84FF] to-[#6C63FF] origin-left z-[9998]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
