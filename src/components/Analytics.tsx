"use client";

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const Analytics = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views
    const trackPageView = (url: string) => {
      gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };

    // Track custom events
    const trackEvent = (action: string, category: string, label?: string, value?: number) => {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    };

    // Track button clicks
    const trackButtonClicks = () => {
      const buttons = document.querySelectorAll('button, a[href^="/"], a[href^="mailto:"], a[href^="tel:"]');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          const text = target.textContent?.trim() || target.getAttribute('aria-label') || 'Unknown Button';
          const href = target.getAttribute('href');
          
          if (href) {
            if (href.startsWith('mailto:')) {
              trackEvent('email_click', 'Contact', href);
            } else if (href.startsWith('tel:')) {
              trackEvent('phone_click', 'Contact', href);
            } else if (href.startsWith('/')) {
              trackEvent('internal_link_click', 'Navigation', href);
            } else {
              trackEvent('external_link_click', 'Navigation', href);
            }
          } else {
            trackEvent('button_click', 'Interaction', text);
          }
        });
      });
    };

    // Track form submissions
    const trackFormSubmissions = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          const formData = new FormData(form as HTMLFormElement);
          const formName = form.getAttribute('name') || form.getAttribute('id') || 'Unknown Form';
          
          trackEvent('form_submit', 'Contact', formName);
        });
      });
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      
      const trackScroll = () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          if (scrollPercent >= 25 && scrollPercent < 50) {
            trackEvent('scroll', 'Engagement', '25%');
          } else if (scrollPercent >= 50 && scrollPercent < 75) {
            trackEvent('scroll', 'Engagement', '50%');
          } else if (scrollPercent >= 75 && scrollPercent < 90) {
            trackEvent('scroll', 'Engagement', '75%');
          } else if (scrollPercent >= 90) {
            trackEvent('scroll', 'Engagement', '90%');
          }
        }
      };

      window.addEventListener('scroll', trackScroll, { passive: true });
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const trackTime = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        
        if (timeSpent === 30) {
          trackEvent('time_on_page', 'Engagement', '30_seconds');
        } else if (timeSpent === 60) {
          trackEvent('time_on_page', 'Engagement', '1_minute');
        } else if (timeSpent === 180) {
          trackEvent('time_on_page', 'Engagement', '3_minutes');
        } else if (timeSpent === 300) {
          trackEvent('time_on_page', 'Engagement', '5_minutes');
        }
      };

      const interval = setInterval(trackTime, 1000);
      
      // Cleanup on page unload
      window.addEventListener('beforeunload', () => {
        clearInterval(interval);
      });
    };

    // Initialize tracking
    trackButtonClicks();
    trackFormSubmissions();
    trackScrollDepth();
    trackTimeOnPage();

    // Track chatbot interactions
    const trackChatbotInteractions = () => {
      const chatbotButton = document.querySelector('[aria-label*="دردشة"], [aria-label*="chat"]');
      if (chatbotButton) {
        chatbotButton.addEventListener('click', () => {
          trackEvent('chatbot_open', 'Engagement', 'Chatbot');
        });
      }
    };

    trackChatbotInteractions();

    // Track portfolio interactions
    const trackPortfolioInteractions = () => {
      const portfolioItems = document.querySelectorAll('[data-portfolio-item]');
      portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
          const title = item.getAttribute('data-title') || 'Unknown Item';
          trackEvent('portfolio_view', 'Engagement', title);
        });
      });
    };

    trackPortfolioInteractions();

  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default Analytics;



