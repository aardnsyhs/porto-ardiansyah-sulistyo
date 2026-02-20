import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const Analytics = () => {
  useEffect(() => {
    const GA_TRACKING_ID = "G-QMQHNEZQ7J";

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    const trackPageView = () => {
      gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    const trackSectionView = (sectionName: string) => {
      gtag("event", "section_view", {
        section_name: sectionName,
      });
    };

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            trackSectionView(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    trackPageView();

    return () => {
      observer.disconnect();
      const existingScript = document.querySelector(
        `script[src*="googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`,
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default Analytics;

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>,
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag!("event", eventName, parameters);
  }
};

export const trackClick = (element: string, location?: string) => {
  trackEvent("click", {
    element_name: element,
    location: location || window.location.pathname,
  });
};

export const trackProjectView = (projectId: string, projectTitle: string) => {
  trackEvent("project_view", {
    project_id: projectId,
    project_title: projectTitle,
  });
};

export const trackThemeToggle = (theme: string) => {
  trackEvent("theme_toggle", {
    new_theme: theme,
  });
};

export const trackDownload = (fileName: string) => {
  trackEvent("download", {
    file_name: fileName,
  });
};

export const trackContactSubmission = () => {
  trackEvent("contact_form_submit", {
    form_location: "contact_section",
  });
};
