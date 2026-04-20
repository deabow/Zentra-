"use client";

import { useEffect, useState } from "react";

const AccessibilityEnhancer = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Check for user preferences
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setIsHighContrast(prefersHighContrast);
    
    // Apply reduced motion if preferred
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }

    // Keyboard navigation improvements
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
        const skipLink = document.getElementById('skip-to-main');
        if (skipLink) {
          skipLink.focus();
        }
      }
      
      // Escape key to close modals/menus
      if (e.key === 'Escape') {
        const openModal = document.querySelector('[aria-modal="true"]');
        if (openModal) {
          (openModal as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
    document.documentElement.classList.toggle('high-contrast', !isHighContrast);
  };

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 2, 24));
    document.documentElement.style.fontSize = `${fontSize + 2}px`;
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 2, 12));
    document.documentElement.style.fontSize = `${fontSize - 2}px`;
  };

  return (
    <>
      {/* Skip to main content link */}
      <a
        id="skip-to-main"
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#7C3AED] text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white"
        tabIndex={1}
      >
        انتقل إلى المحتوى الرئيسي
      </a>

      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-40 space-y-2">
        <button
          onClick={toggleHighContrast}
          className="bg-[#7C3AED] text-white p-2 rounded-full shadow-lg hover:bg-[#8B5CF6] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="تبديل التباين العالي"
          title="تبديل التباين العالي"
        >
          <span className="text-lg">🔆</span>
        </button>
        
        <div className="flex flex-col space-y-1">
          <button
            onClick={increaseFontSize}
            className="bg-[#7C3AED] text-white p-2 rounded-full shadow-lg hover:bg-[#8B5CF6] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="تكبير الخط"
            title="تكبير الخط"
          >
            <span className="text-lg">A+</span>
          </button>
          
          <button
            onClick={decreaseFontSize}
            className="bg-[#7C3AED] text-white p-2 rounded-full shadow-lg hover:bg-[#8B5CF6] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="تصغير الخط"
            title="تصغير الخط"
          >
            <span className="text-lg">A-</span>
          </button>
        </div>
      </div>

      {/* Screen reader announcements */}
      <div
        id="announcements"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      />
    </>
  );
};

export default AccessibilityEnhancer;

