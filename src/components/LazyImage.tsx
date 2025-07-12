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
  const pictureRef = useRef<HTMLPictureElement>(null);

  // Generate responsive srcSet with WebP support for better compression
  const generateSrcSet = (originalSrc: string) => {
    if (!originalSrc.includes('/lovable-uploads/')) return undefined;
    
    const baseSrc = originalSrc.replace(/\.(png|jpg|jpeg)$/i, '');
    const ext = originalSrc.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'png';
    
    // Generate multiple sizes with format optimization
    const sizes = [400, 800, 1200];
    return sizes.map(size => `${baseSrc}.${ext}?w=${size}&f=webp ${size}w`).join(', ');
  };

  // Generate fallback srcSet for browsers that don't support WebP
  const generateFallbackSrcSet = (originalSrc: string) => {
    if (!originalSrc.includes('/lovable-uploads/')) return undefined;
    
    const baseSrc = originalSrc.replace(/\.(png|jpg|jpeg)$/i, '');
    const ext = originalSrc.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'png';
    
    const sizes = [400, 800, 1200];
    return sizes.map(size => `${baseSrc}.${ext}?w=${size} ${size}w`).join(', ');
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

    // Observe the appropriate element
    const elementToObserve = pictureRef.current || imgRef.current;
    if (elementToObserve) {
      observer.observe(elementToObserve);
    }

    return () => observer.disconnect();
  }, [priority]);

  const webpSrcSet = generateSrcSet(src);
  const fallbackSrcSet = generateFallbackSrcSet(src);

  // Use picture element for WebP support with fallback
  if (webpSrcSet && fallbackSrcSet) {
    return (
      <picture ref={pictureRef}>
        {isInView && (
          <source
            srcSet={webpSrcSet}
            sizes={sizes}
            type="image/webp"
          />
        )}
        <img
          src={isInView ? src : placeholder}
          srcSet={isInView ? fallbackSrcSet : undefined}
          sizes={isInView ? sizes : undefined}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority || isInView ? "high" : "low"}
        />
      </picture>
    );
  }

  // Fallback to regular img for non-lovable-uploads images
  return (
    <img
      ref={imgRef}
      src={isInView ? src : placeholder}
      alt={alt}
      width={width}
      height={height}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
      onLoad={() => setIsLoaded(true)}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority || isInView ? "high" : "low"}
    />
  );
};

export default LazyImage;