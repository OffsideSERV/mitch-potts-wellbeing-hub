# Prerender.io Integration with Supabase

## Overview

This project now has Prerender.io integration using Supabase Edge Functions for SEO optimization. The integration automatically serves pre-rendered HTML to search engine bots while maintaining the regular React experience for users.

## How It Works

### 1. Client-Side Bot Detection
- `PrerenderHandler` component detects bot user agents on the client side
- When a bot is detected, it redirects to the Supabase Edge Function
- Regular users continue with the normal React application

### 2. Edge Functions

#### `prerender-middleware`
- **URL**: `https://cmvowywabqjbijbnypdr.supabase.co/functions/v1/prerender-middleware`
- **Purpose**: API endpoint for programmatic bot detection and content fetching
- **Usage**: Accepts JSON with `url` and `userAgent` parameters

#### `prerender-proxy` 
- **URL**: `https://cmvowywabqjbijbnypdr.supabase.co/functions/v1/prerender-proxy?url={ENCODED_URL}`
- **Purpose**: Public endpoint that bots are redirected to
- **Behavior**: 
  - Detects bots via User-Agent header
  - Fetches pre-rendered content from Prerender.io for bots
  - Redirects regular users back to the original site

### 3. Bot Detection

The following user agents are detected as bots:
- Googlebot, Bingbot, DuckDuckBot
- Social media crawlers (Facebook, Twitter, LinkedIn)
- SEO tools (Ahrefs, Moz, etc.)
- And many more...

## Configuration

### Prerender.io API Key
- Stored securely in Supabase secrets as `PRERENDER_API_KEY`
- Value: `QeugJA4NZLtA9fTh4OuK`

### Headers
- Added SEO-friendly headers in `public/_headers`
- Includes Prerender.io version header for compatibility

## Testing

### Test Bot Detection:
```bash
# Test with Googlebot user agent
curl -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" \
     "https://cmvowywabqjbijbnypdr.supabase.co/functions/v1/prerender-proxy?url=https://yoursite.com"
```

### Test Regular User:
```bash
# Test with regular browser user agent
curl -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
     "https://cmvowywabqjbijbnypdr.supabase.co/functions/v1/prerender-proxy?url=https://yoursite.com"
```

## SEO Benefits

1. **Search Engine Crawling**: Bots receive fully rendered HTML with all content
2. **Social Media Previews**: Social platforms get proper meta tags and content
3. **Performance**: Regular users get the fast React experience
4. **Fallback**: If Prerender.io is unavailable, requests fallback to the original site

## Monitoring

- Check Edge Function logs in Supabase dashboard
- Monitor Prerender.io usage in their dashboard
- Review bot vs user traffic patterns

## Notes

- Edge Functions are deployed automatically
- No server configuration needed on Lovable hosting
- Works with any domain/hosting setup
- Completely transparent to end users