"use client";

import { useEffect } from "react";

interface HeatmapData {
  x: number;
  y: number;
  timestamp: number;
  element: string;
  page: string;
}

const HeatmapTracker = () => {
  useEffect(() => {
    const heatmapData: HeatmapData[] = [];
    const isDevelopment = process.env.NODE_ENV === 'development';

    // Only track in production
    if (isDevelopment) return;

    const trackClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      
      const data: HeatmapData = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        element: target.tagName.toLowerCase(),
        page: window.location.pathname
      };

      heatmapData.push(data);

      // Send data in batches
      if (heatmapData.length >= 10) {
        sendHeatmapData([...heatmapData]);
        heatmapData.length = 0;
      }
    };

    const trackMouseMove = (e: MouseEvent) => {
      // Only track every 10th mouse move to reduce data
      if (Math.random() < 0.1) {
        const data: HeatmapData = {
          x: e.clientX,
          y: e.clientY,
          timestamp: Date.now(),
          element: 'mousemove',
          page: window.location.pathname
        };

        heatmapData.push(data);
      }
    };

    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      const data: HeatmapData = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        timestamp: Date.now(),
        element: `scroll_${scrollPercent}`,
        page: window.location.pathname
      };

      heatmapData.push(data);
    };

    const sendHeatmapData = async (data: HeatmapData[]) => {
      try {
        // In a real implementation, you would send this to your analytics service
        console.log('Heatmap data:', data);
        
        // Example: Send to your analytics endpoint
        // await fetch('/api/analytics/heatmap', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     data: data,
        //     sessionId: getSessionId(),
        //     userAgent: navigator.userAgent,
        //     viewport: {
        //       width: window.innerWidth,
        //       height: window.innerHeight
        //     }
        //   })
        // });
      } catch (error) {
        console.error('Error sending heatmap data:', error);
      }
    };

    // Add event listeners
    document.addEventListener('click', trackClick, { passive: true });
    document.addEventListener('mousemove', trackMouseMove, { passive: true });
    window.addEventListener('scroll', trackScroll, { passive: true });

    // Send remaining data before page unload
    const handleBeforeUnload = () => {
      if (heatmapData.length > 0) {
        sendHeatmapData([...heatmapData]);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Send data periodically
    const interval = setInterval(() => {
      if (heatmapData.length > 0) {
        sendHeatmapData([...heatmapData]);
        heatmapData.length = 0;
      }
    }, 30000); // Every 30 seconds

    // Cleanup
    return () => {
      document.removeEventListener('click', trackClick);
      document.removeEventListener('mousemove', trackMouseMove);
      window.removeEventListener('scroll', trackScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(interval);
    };
  }, []);

  return null;
};

export default HeatmapTracker;



