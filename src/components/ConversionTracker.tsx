"use client";

import { useEffect } from "react";

interface ConversionEvent {
  type: string;
  value?: number;
  currency?: string;
  timestamp: number;
  page: string;
  userAgent: string;
}

const ConversionTracker = () => {
  useEffect(() => {
    const isDevelopment = process.env.NODE_ENV === 'development';

    // Only track in production
    if (isDevelopment) return;

    const trackConversion = (event: ConversionEvent) => {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          event_category: 'Conversion',
          event_label: event.type,
          value: event.value,
          currency: event.currency,
        });
      }

      // Send to your analytics service
      sendConversionData(event);
    };

    const sendConversionData = async (event: ConversionEvent) => {
      try {
        console.log('Conversion event:', event);
        
        // Example: Send to your analytics endpoint
        // await fetch('/api/analytics/conversion', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     ...event,
        //     sessionId: getSessionId(),
        //     referrer: document.referrer,
        //     utm_source: getUrlParameter('utm_source'),
        //     utm_medium: getUrlParameter('utm_medium'),
        //     utm_campaign: getUrlParameter('utm_campaign'),
        //   })
        // });
      } catch (error) {
        console.error('Error sending conversion data:', error);
      }
    };

    // Track form submissions as conversions
    const trackFormConversions = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const formData = new FormData(form as HTMLFormElement);
          const formName = form.getAttribute('name') || form.getAttribute('id') || 'contact_form';
          
          trackConversion({
            type: 'form_submission',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
        });
      });
    };

    // Track button clicks as micro-conversions
    const trackButtonConversions = () => {
      const ctaButtons = document.querySelectorAll('button, a[href*="contact"], a[href*="pricing"], a[href*="demo"]');
      
      ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          const text = target.textContent?.trim() || target.getAttribute('aria-label') || 'Unknown CTA';
          
          // Only track if it's a clear CTA
          if (text.includes('اتصل') || text.includes('اشترك') || text.includes('ابدأ') || text.includes('احجز')) {
            trackConversion({
              type: 'cta_click',
              timestamp: Date.now(),
              page: window.location.pathname,
              userAgent: navigator.userAgent,
            });
          }
        });
      });
    };

    // Track email clicks
    const trackEmailConversions = () => {
      const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
      
      emailLinks.forEach(link => {
        link.addEventListener('click', () => {
          trackConversion({
            type: 'email_click',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
        });
      });
    };

    // Track phone clicks
    const trackPhoneConversions = () => {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      
      phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
          trackConversion({
            type: 'phone_click',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
        });
      });
    };

    // Track chatbot interactions
    const trackChatbotConversions = () => {
      const chatbotButton = document.querySelector('[aria-label*="دردشة"], [aria-label*="chat"]');
      if (chatbotButton) {
        chatbotButton.addEventListener('click', () => {
          trackConversion({
            type: 'chatbot_interaction',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
        });
      }
    };

    // Track portfolio views
    const trackPortfolioConversions = () => {
      const portfolioItems = document.querySelectorAll('[data-portfolio-item]');
      portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
          trackConversion({
            type: 'portfolio_view',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
        });
      });
    };

    // Track newsletter signups
    const trackNewsletterConversions = () => {
      const newsletterForms = document.querySelectorAll('form[action*="newsletter"], form[data-type="newsletter"]');
      newsletterForms.forEach(form => {
        form.addEventListener('submit', () => {
          trackConversion({
            type: 'newsletter_signup',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
        });
      });
    };

    // Track page engagement (time-based)
    const trackEngagementConversions = () => {
      const startTime = Date.now();
      let hasScrolled = false;
      let hasClicked = false;

      const trackEngagement = () => {
        const timeSpent = Date.now() - startTime;
        
        // Track as micro-conversion if user spent significant time
        if (timeSpent > 60000 && !hasScrolled) { // 1 minute
          trackConversion({
            type: 'page_engagement',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
          hasScrolled = true;
        }
      };

      // Track scroll engagement
      window.addEventListener('scroll', () => {
        if (!hasScrolled) {
          trackConversion({
            type: 'scroll_engagement',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
          hasScrolled = true;
        }
      }, { passive: true });

      // Track click engagement
      document.addEventListener('click', () => {
        if (!hasClicked) {
          trackConversion({
            type: 'click_engagement',
            timestamp: Date.now(),
            page: window.location.pathname,
            userAgent: navigator.userAgent,
          });
          hasClicked = true;
        }
      }, { passive: true });

      // Track time-based engagement
      setTimeout(trackEngagement, 60000);
    };

    // Initialize all tracking
    trackFormConversions();
    trackButtonConversions();
    trackEmailConversions();
    trackPhoneConversions();
    trackChatbotConversions();
    trackPortfolioConversions();
    trackNewsletterConversions();
    trackEngagementConversions();

  }, []);

  return null;
};

export default ConversionTracker;



