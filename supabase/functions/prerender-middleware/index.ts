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
    const { url, userAgent } = await req.json();
    
    if (!url) {
      return new Response(JSON.stringify({ error: 'URL is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log(`Processing request for URL: ${url}, User-Agent: ${userAgent}`);

    // Check if request is from a bot
    if (!isBot(userAgent || '')) {
      console.log('Regular user detected, returning original content');
      return new Response(JSON.stringify({ 
        isBot: false,
        message: 'Regular user request - serve normal content' 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Bot detected, fetching prerendered content');

    // Get prerendered content from Prerender.io
    const prerenderToken = Deno.env.get('PRERENDER_API_KEY');
    if (!prerenderToken) {
      console.error('PRERENDER_API_KEY not found');
      return new Response(JSON.stringify({ error: 'Prerender service not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const prerenderUrl = `https://service.prerender.io/${encodeURIComponent(url)}`;
    console.log(`Fetching from Prerender.io: ${prerenderUrl}`);

    const prerenderResponse = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': prerenderToken,
        'User-Agent': userAgent || 'PreRender Bot'
      }
    });

    if (!prerenderResponse.ok) {
      console.error(`Prerender.io error: ${prerenderResponse.status} ${prerenderResponse.statusText}`);
      return new Response(JSON.stringify({ 
        error: 'Failed to fetch prerendered content',
        status: prerenderResponse.status 
      }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const prerenderContent = await prerenderResponse.text();
    console.log(`Successfully fetched prerendered content (${prerenderContent.length} chars)`);

    return new Response(JSON.stringify({
      isBot: true,
      content: prerenderContent,
      contentType: prerenderResponse.headers.get('content-type') || 'text/html'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in prerender-middleware:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error',
      message: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});