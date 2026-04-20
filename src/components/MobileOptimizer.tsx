"use client";

import { useEffect, useState } from "react";

const MobileOptimizer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    // Detect touch device
    const checkTouch = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
    };

    checkMobile();
    checkTouch();

    // Add mobile-specific classes
    if (isMobile) {
      document.documentElement.classList.add('mobile-device');
    }

    if (isTouchDevice) {
      document.documentElement.classList.add('touch-device');
    }

    // Optimize viewport for mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    }

    // Prevent zoom on input focus (iOS)
    const preventZoom = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
      }
    };

    const restoreZoom = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
        }
      }
    };

    document.addEventListener('focusin', preventZoom);
    document.addEventListener('focusout', restoreZoom);

    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add smooth scrolling for mobile
          document.documentElement.style.scrollBehavior = 'smooth';
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });

    // Add touch feedback
    const addTouchFeedback = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
      
      interactiveElements.forEach(element => {
        element.addEventListener('touchstart', () => {
          element.classList.add('touch-active');
        }, { passive: true });

        element.addEventListener('touchend', () => {
          setTimeout(() => {
            element.classList.remove('touch-active');
          }, 150);
        }, { passive: true });
      });
    };

    // Run after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addTouchFeedback);
    } else {
      addTouchFeedback();
    }

    // Cleanup
    return () => {
      document.removeEventListener('focusin', preventZoom);
      document.removeEventListener('focusout', restoreZoom);
      window.removeEventListener('scroll', optimizeScroll);
    };
  }, [isMobile, isTouchDevice]);

  // Add mobile-specific optimizations
  useEffect(() => {
    // Disable hover effects on touch devices
    if (isTouchDevice) {
      const style = document.createElement('style');
      style.textContent = `
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-105:hover { transform: scale(1) !important; }
          .hover\\:text-\\[\\#8A84FF\\]:hover { color: inherit !important; }
          .group:hover .group-hover\\:text-\\[\\#8A84FF\\] { color: inherit !important; }
          .group:hover .group-hover\\:scale-110 { transform: scale(1) !important; }
        }
      `;
      document.head.appendChild(style);
    }

    // Optimize animations for mobile
    if (isMobile) {
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 768px) {
          .animate-float,
          .animate-float-delayed,
          .animate-morphing,
          .animate-liquid {
            animation-duration: 20s !important;
          }
          
          .blur-3xl {
            filter: blur(20px) !important;
          }
          
          .animate-gradient {
            animation: none !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, [isMobile, isTouchDevice]);

  return null;
};

export default MobileOptimizer;



