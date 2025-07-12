import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Add resource hints for better performance
    const head = document.head;
    
    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];
    
    preconnectDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = domain;
        link.crossOrigin = 'anonymous';
        head.appendChild(link);
      }
    });
    
    // Add DNS prefetch for image domains
    const dnsPrefetchDomains = [
      'https://images.unsplash.com'
    ];
    
    dnsPrefetchDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"][rel="dns-prefetch"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        head.appendChild(link);
      }
    });
    
    // Add viewport meta if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
      head.appendChild(viewport);
    }
    
    // Add theme-color meta for better mobile experience
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#059669'; // Using primary color
      head.appendChild(themeColor);
    }
    
    // Preload critical fonts
    const criticalFonts = [
      '/fonts/inter-var.woff2'
    ];
    
    criticalFonts.forEach(fontUrl => {
      if (!document.querySelector(`link[href="${fontUrl}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = fontUrl;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        head.appendChild(link);
      }
    });
  }, []);

  return null;
};

export default PerformanceOptimizer;