import { useEffect } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Lightweight analytics component - can be easily switched to any provider
const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 (replace with your tracking ID)
    const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 tracking ID
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    
    // Set gtag on window
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views
    const trackPageView = () => {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Track section views when scrolling
    const trackSectionView = (sectionName: string) => {
      gtag('event', 'section_view', {
        section_name: sectionName,
      });
    };

    // Set up intersection observer for section tracking
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            trackSectionView(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // Track initial page load
    trackPageView();

    return () => {
      observer.disconnect();
      // Clean up script
      const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;

// Analytics utility functions for manual tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackClick = (element: string, location?: string) => {
  trackEvent('click', {
    element_name: element,
    location: location || window.location.pathname,
  });
};

export const trackDownload = (fileName: string) => {
  trackEvent('download', {
    file_name: fileName,
  });
};

export const trackContactSubmission = () => {
  trackEvent('contact_form_submit', {
    form_location: 'contact_section',
  });
};