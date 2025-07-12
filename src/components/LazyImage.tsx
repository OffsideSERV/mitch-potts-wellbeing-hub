import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="100%25" height="100%25" fill="%23f3f4f6"/%3E%3C/svg%3E',
  width,
  height,
  sizes = '100vw',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate responsive srcSet for images
  const generateSrcSet = (originalSrc: string) => {
    if (!originalSrc.includes('/lovable-uploads/')) return undefined;
    
    const baseSrc = originalSrc.replace(/\.(png|jpg|jpeg)$/i, '');
    const ext = originalSrc.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'png';
    
    const imageSizes = [400, 800, 1200];
    return imageSizes.map(size => `${baseSrc}.${ext}?w=${size} ${size}w`).join(', ');
  };

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const srcSet = generateSrcSet(src);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : placeholder}
      srcSet={isInView && srcSet ? srcSet : undefined}
      sizes={isInView && srcSet ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
      onLoad={() => setIsLoaded(true)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
};

export default LazyImage;