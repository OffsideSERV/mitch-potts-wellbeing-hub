
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  serviceSchema?: any;
}

const SEO = ({ 
  title = "Best Naturopath Brisbane | Online Consults | NXTLVL Health",
  description = "Brisbane naturopath Mitch Potts finds the root cause of bloating, fatigue and hormonal issues. Online consults Australia-wide. Book a free 15-min chat.",
  canonical,
  ogImage = "https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg",
  ogType = "website",
  keywords = "naturopath Brisbane, best naturopath Brisbane, natural medicine Brisbane, functional medicine Brisbane, gut health Brisbane",
  noindex = false,
  serviceSchema
}: SEOProps) => {
  // Fix canonical URL construction to ensure clean URLs and self-canonical pages
  const currentPath = window.location.pathname;
  
  let fullCanonical;
  if (canonical) {
    // If canonical is explicitly provided, use it as-is
    fullCanonical = canonical.startsWith('http') ? canonical : `https://nxtlvlhealth.com.au${canonical}`;
  } else {
    // For homepage, use clean root URL
    if (currentPath === '/' || currentPath === '/index.html') {
      fullCanonical = 'https://nxtlvlhealth.com.au';
    } else {
      // For other pages, remove trailing slash and use clean path
      const cleanPath = currentPath.replace(/\/$/, '');
      fullCanonical = `https://nxtlvlhealth.com.au${cleanPath}`;
    }
  }

  // Generate LocalBusiness schema for homepage
  const generateLocalBusinessSchema = () => {
    if (currentPath === '/' || currentPath === '/index.html') {
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://nxtlvlhealth.com.au/#organization",
        "name": "NXTLVL Health - Naturopath",
        "alternateName": "NXTLVL Health Brisbane",
        "description": "Brisbane-based online naturopathic practice specialising in gut health, hormonal imbalances, chronic fatigue, and natural healing. Led by qualified naturopath Mitch Potts.",
        "url": "https://nxtlvlhealth.com.au",
        "email": "info@nxtlvlhealth.com.au",
        "image": [
          "https://nxtlvlhealth.com.au/lovable-uploads/d4800494-c236-4cb2-be3b-0596f06a6964.png"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://nxtlvlhealth.com.au/lovable-uploads/e8ea191a-3d17-45b6-b926-fa1ce97867a9.png"
        },
        "currenciesAccepted": "AUD",
        "priceRange": "$$",

        "areaServed": [
          "Brisbane",
          "New Farm",
          "Fortitude Valley",
          "Newstead",
          "Teneriffe",
          "Kangaroo Point",
          "East Brisbane",
          "Norman Park",
          "Bulimba",
          "Hawthorne",
          "Morningside",
          "Ascot",
          "Hamilton",
          "Clayfield",
          "Wilston",
          "Windsor",
          "Kelvin Grove",
          "Paddington",
          "Red Hill",
          "Auchenflower",
          "Toowong",
          "Queensland"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Naturopathic Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Free 15-Minute Consultation",
                "description": "Complimentary initial consultation to discuss your health concerns"
              },
              "price": "0",
              "priceCurrency": "AUD"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "50",
          "bestRating": "5",
          "worstRating": "1"
        },
        "founder": {
          "@type": "Person",
          "name": "Mitch Potts",
          "jobTitle": "Naturopath & Nutritional Medicine Practitioner",
          "description": "Qualified naturopath specialising in gut health, hormonal imbalances, and natural healing approaches"
        },
        "sameAs": [
          "https://www.google.com/maps/place/NXTLVL+Health",
          "https://www.facebook.com/nxtlvlhealth",
          "https://www.instagram.com/nxtlvlhealth"
        ],
        "knowsAbout": [
          "Naturopathy",
          "Nutritional Medicine", 
          "Gut Health",
          "IBS Treatment",
          "SIBO Treatment",
          "Hormonal Imbalances",
          "Chronic Fatigue",
          "Eczema Treatment",
          "Anxiety Support",
          "Weight Management",
          "Metagenomic Stool Testing",
          "Functional Medicine Testing"
        ],
        "potentialAction": {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://calendly.com/nxtlvlhealth-info/15-min-consult",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "result": {
            "@type": "Reservation",
            "name": "Free 15-Minute Consultation"
          }
        }
      };
    }
    return null;
  };

  const localBusinessSchema = generateLocalBusinessSchema();
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots meta tag */}
      <meta 
        name="robots" 
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} 
      />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="NXTLVL Health - Naturopath" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="NXTLVL Health - Naturopath" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="AU-QLD" />
      <meta name="geo.placename" content="Brisbane, Queensland" />

      
      {/* LocalBusiness Schema Markup - Only on homepage */}
      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}
      
      {/* Service Schema Markup */}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
