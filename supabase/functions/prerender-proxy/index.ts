import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Bot detection patterns
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

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const targetUrl = url.searchParams.get('url');
    const userAgent = req.headers.get('user-agent') || '';

    if (!targetUrl) {
      return new Response('Missing url parameter', { 
        status: 400,
        headers: corsHeaders 
      });
    }

    console.log(`Proxy request for: ${targetUrl}, User-Agent: ${userAgent}`);

    // Check if request is from a bot
    if (!isBot(userAgent)) {
      console.log('Regular user detected, redirecting to original site');
      return Response.redirect(targetUrl, 302);
    }

    console.log('Bot detected, fetching prerendered content');

    // Get prerendered content from Prerender.io
    const prerenderToken = Deno.env.get('PRERENDER_API_KEY');
    if (!prerenderToken) {
      console.error('PRERENDER_API_KEY not found, redirecting to original site');
      return Response.redirect(targetUrl, 302);
    }

    const prerenderUrl = `https://service.prerender.io/${encodeURIComponent(targetUrl)}`;
    console.log(`Fetching from Prerender.io: ${prerenderUrl}`);

    const prerenderResponse = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': prerenderToken,
        'User-Agent': userAgent
      }
    });

    if (!prerenderResponse.ok) {
      console.error(`Prerender.io error: ${prerenderResponse.status}, falling back to original site`);
      return Response.redirect(targetUrl, 302);
    }

    const prerenderContent = await prerenderResponse.text();
    const contentType = prerenderResponse.headers.get('content-type') || 'text/html';
    
    console.log(`Successfully served prerendered content (${prerenderContent.length} chars)`);

    return new Response(prerenderContent, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        ...corsHeaders
      },
    });

  } catch (error) {
    console.error('Error in prerender-proxy:', error);
    // Fallback to redirect on any error
    const url = new URL(req.url);
    const targetUrl = url.searchParams.get('url');
    if (targetUrl) {
      return Response.redirect(targetUrl, 302);
    }
    return new Response('Internal Server Error', { 
      status: 500,
      headers: corsHeaders 
    });
  }
});