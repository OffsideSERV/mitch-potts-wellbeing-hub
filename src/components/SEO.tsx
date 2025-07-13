
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
}

const SEO = ({ 
  title = "Best Naturopath Brisbane | Book a FREE 15-Min Consult!",
  description = "Feel like something's wrong but no one's listening? NXTLVL Health is the best Naturopath in Brisbane and is here to give you the answers you've been looking for",
  canonical,
  ogImage = "https://nxtlvlhealth.com.au/wp-content/uploads/2025/06/Naturopath-having-consult-with-female-patient-scaled.jpeg",
  ogType = "website",
  keywords = "naturopath Brisbane, best naturopath Brisbane, natural medicine Brisbane, functional medicine Brisbane, gut health Brisbane",
  noindex = false
}: SEOProps) => {
  // Fix canonical URL construction to avoid /index.html
  const currentPath = window.location.pathname;
  const cleanPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
  const fullCanonical = canonical ? `https://nxtlvlhealth.com.au${canonical}` : `https://nxtlvlhealth.com.au${cleanPath}`;
  
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
      <meta property="og:site_name" content="NXTLVL Health" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="NXTLVL Health" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="AU-QLD" />
      <meta name="geo.placename" content="Brisbane, Queensland" />
      <meta name="geo.position" content="-27.4698;153.0251" />
      <meta name="ICBM" content="-27.4698, 153.0251" />
    </Helmet>
  );
};

export default SEO;
