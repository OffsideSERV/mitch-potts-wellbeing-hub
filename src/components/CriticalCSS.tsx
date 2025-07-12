import React from 'react';

const CriticalCSS = () => {
  return (
    <style>{`
      /* Critical above-the-fold styles */
      .hero-section {
        background: linear-gradient(135deg, hsl(174 100% 29% / 0.1), hsl(174 60% 51% / 0.1));
        padding: 5rem 1rem;
      }
      
      .hero-title {
        font-size: clamp(2.5rem, 8vw, 6rem);
        font-weight: 700;
        line-height: 1.1;
        color: hsl(var(--foreground));
      }
      
      .hero-highlight {
        color: hsl(var(--primary));
      }
      
      .btn-primary {
        background: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: background-color 0.2s ease;
      }
      
      .btn-primary:hover {
        background: hsl(var(--primary) / 0.9);
      }
      
      /* Prevent layout shift for images */
      .lazy-image-container {
        aspect-ratio: 4/3;
        background: hsl(var(--muted));
        border-radius: 1rem;
        overflow: hidden;
      }
      
      .lazy-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `}</style>
  );
};

export default CriticalCSS;