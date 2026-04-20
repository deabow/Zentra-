"use client";

import { useEffect } from "react";

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preconnect to critical domains
    const preconnectDomains = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // Optimize images with better loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        // Prioritize first 3 images
        if (index < 3) {
          img.setAttribute('loading', 'eager');
          img.setAttribute('fetchpriority', 'high');
        } else {
          img.setAttribute('loading', 'lazy');
        }
        
        img.setAttribute('decoding', 'async');
      });
    };

    // Reduce animations based on device performance
    const optimizeAnimations = () => {
      // Check for low-end devices
      const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
      const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (isLowEnd || hasReducedMotion) {
        document.documentElement.style.setProperty('--animation-duration', '0.01s');
        
        // Disable expensive animations
        const expensiveAnimations = document.querySelectorAll(
          '.animate-morphing, .animate-liquid, .animate-rotate, .animate-gradient'
        );
        expensiveAnimations.forEach(el => {
          (el as HTMLElement).style.animation = 'none';
        });
      }
    };

    // Debounced scroll handler
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Lazy load images in viewport
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
          if (img.getBoundingClientRect().top < window.innerHeight + 300) {
            img.setAttribute('loading', 'eager');
          }
        });
      }, 100);
    };

    // Service Worker registration with better error handling
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
            updateViaCache: 'none'
          });
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker?.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, refresh page
                if (confirm('تحديث جديد متاح! هل تريد تحديث الصفحة؟')) {
                  window.location.reload();
                }
              }
            });
          });
        } catch (error) {
          console.warn('Service Worker registration failed:', error);
        }
      }
    };

    // Resource hints for faster loading
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preconnectDomains();
    addResourceHints();
    optimizeImages();
    optimizeAnimations();
    registerServiceWorker();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;

