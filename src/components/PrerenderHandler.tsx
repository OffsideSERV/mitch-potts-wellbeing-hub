import { useEffect } from 'react';

// Bot detection patterns (must match server-side)
const BOT_USER_AGENTS = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'redditbot',
  'applebot',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'google page speed',
  'qwantify'
];

function isBot(userAgent: string): boolean {
  if (!userAgent) return false;
  const lowerUserAgent = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => lowerUserAgent.includes(bot));
}

interface PrerenderHandlerProps {
  children: React.ReactNode;
}

const PrerenderHandler: React.FC<PrerenderHandlerProps> = ({ children }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const userAgent = navigator.userAgent;
    const currentUrl = window.location.href;
    
    // If this is a bot, redirect to prerender proxy
    if (isBot(userAgent)) {
      const prerenderProxyUrl = `https://cmvowywabqjbijbnypdr.supabase.co/functions/v1/prerender-proxy?url=${encodeURIComponent(currentUrl)}`;
      console.log('Bot detected, redirecting to prerender proxy:', prerenderProxyUrl);
      window.location.replace(prerenderProxyUrl);
      return;
    }

    // For regular users, add prerender meta tags dynamically
    const addMetaTags = () => {
      // Add fragment meta tag for AJAX crawling
      const fragmentMeta = document.createElement('meta');
      fragmentMeta.name = 'fragment';
      fragmentMeta.content = '!';
      document.head.appendChild(fragmentMeta);

      // Add prerender meta tag
      const prerenderMeta = document.createElement('meta');
      prerenderMeta.name = 'prerender-status-code';
      prerenderMeta.content = '200';
      document.head.appendChild(prerenderMeta);
    };

    // Wait for initial render to complete
    setTimeout(addMetaTags, 100);
  }, []);

  return <>{children}</>;
};

export default PrerenderHandler;