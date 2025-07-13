
import { useEffect } from 'react';

const RobotsPage = () => {
  useEffect(() => {
    document.title = 'Robots.txt';
  }, []);

  const robotsContent = `User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Crawl-delay: 2

# Disallow admin and development paths
Disallow: /admin/
Disallow: /dev/
Disallow: /_next/
Disallow: /api/

Sitemap: https://nxtlvlhealth.com.au/sitemap.xml`;

  return (
    <div className="min-h-screen bg-background font-mono text-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-muted/30 p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Robots.txt</h1>
          <p className="text-muted-foreground mb-6">
            This file tells search engine crawlers which pages or files they can or can't request from your site.
          </p>
          <pre className="whitespace-pre-wrap bg-background p-4 rounded border">
            {robotsContent}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default RobotsPage;
