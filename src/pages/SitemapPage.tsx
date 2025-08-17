
import { useEffect } from 'react';

const SitemapPage = () => {
  useEffect(() => {
    // Set proper headers for XML sitemap
    document.title = 'Sitemap';
    const metaContentType = document.createElement('meta');
    metaContentType.httpEquiv = 'Content-Type';
    metaContentType.content = 'application/xml; charset=utf-8';
    document.head.appendChild(metaContentType);
    
    return () => {
      // Cleanup
      if (metaContentType.parentNode) {
        metaContentType.parentNode.removeChild(metaContentType);
      }
    };
  }, []);

  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Home Page -->
  <url>
    <loc>https://nxtlvlhealth.com.au/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Category Pages -->
  <url>
    <loc>https://nxtlvlhealth.com.au/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/about-us</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Specific Services -->
  <url>
    <loc>https://nxtlvlhealth.com.au/services/mls-laser-therapy-treatment-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/services/personal-trainer-newstead</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/services/live-blood-analysis-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/services/nutritionist-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Health Conditions We Treat -->
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/gut-health-naturopath-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/gut-health-specialist</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/gut-health-video</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/weight-loss-naturopath-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/naturopath-thyroid-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/naturopath-diabetes-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/childrens-naturopath-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/adhd-naturopath</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/naturopath-anxiety</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/naturopathic-sports-medicine</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/ibs-naturopath</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/sibo-naturopath</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/wellness-clinic-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/ibs-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/ibs-clinic</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/naturopathy-for-skin</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/naturopath-eczema</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/acne-naturopathy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/hormonal-acne-naturopath</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/allergy-naturopath</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/what-we-treat/naturopath-for-athletes</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Areas We Serve -->
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve/naturopath-north-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve/naturopath-newstead</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve/naturopath-new-farm</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve/naturopath-morningside</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve/naturopath-hamilton</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve/naturopath-clayfield-brisbane</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve/naturopath-windsor</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/areas-we-serve/naturopath-indooroopilly</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Specialized Pages -->
  <url>
    <loc>https://nxtlvlhealth.com.au/naturopathic-nutritionist</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/functional-medicine</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Blog Section -->
  <url>
    <loc>https://nxtlvlhealth.com.au/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/blog/gut-health/best-tea-for-stomach-pain-and-bloating</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/blog/naturopathy/how-to-flush-salicylates-from-your-body</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/blog/gut-health/7-worst-foods-for-gut-health</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/blog/naturopathy/naturopathy-for-weight-loss</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/blog/gut-health/gut-health-101-why-your-stomach-might-be-behind-your-brain-fog-and-fatigue</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/blog/naturopathy/naturopathy-vs-homeopathy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/blog/weight-loss/embracing-natural-weight-loss-with-ozempic-a-naturopaths-approach</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/blog/gut-health/gut-brain-connection-how-your-gut-affects-mental-health</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Utility Pages -->
  <url>
    <loc>https://nxtlvlhealth.com.au/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/book-now</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/nxtlvl-tonics</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/gut-freedom</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Legal Pages -->
  <url>
    <loc>https://nxtlvlhealth.com.au/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/website-disclaimer</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>https://nxtlvlhealth.com.au/cancellation-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>`;

  // For better SEO, render raw XML when accessed by crawlers
  const isBot = typeof navigator !== 'undefined' && 
    /bot|crawler|spider|crawling/i.test(navigator.userAgent);
  
  if (isBot) {
    return (
      <div dangerouslySetInnerHTML={{ __html: sitemapContent }} />
    );
  }

  return (
    <div className="min-h-screen bg-background font-mono text-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-muted/30 p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">XML Sitemap</h1>
          <p className="text-muted-foreground mb-6">
            This sitemap contains all the important pages on nxtlvlhealth.com.au for search engines to crawl and index.
          </p>
          <div className="mb-4">
            <a 
              href="/sitemap.xml" 
              className="text-primary hover:underline font-semibold"
              download="sitemap.xml"
            >
              Download Raw XML Sitemap
            </a>
          </div>
          <pre className="whitespace-pre-wrap text-xs overflow-x-auto bg-background p-4 rounded border max-h-96 overflow-y-auto">
            {sitemapContent}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
