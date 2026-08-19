import { useEffect } from 'react';

/**
 * The static <head> in index.html ships title/description/og/twitter tags so
 * non-JS crawlers have something to read. Once React mounts, react-helmet-async
 * injects its own per-route tags (marked with data-rh="true"), which leaves the
 * static ones behind as duplicates — and browsers/crawlers read the FIRST match,
 * i.e. the static default. This removes the static duplicates once on mount so
 * the per-route Helmet tags are the only ones in the document.
 */
const MANAGED_SELECTORS = [
  'meta[name="description"]',
  'meta[name="keywords"]',
  'meta[name="robots"]',
  'meta[name="author"]',
  'meta[name="language"]',
  'meta[name="geo.region"]',
  'meta[name="geo.placename"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:type"]',
  'meta[property="og:url"]',
  'meta[property="og:image"]',
  'meta[property="og:site_name"]',
  'meta[name="twitter:card"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:image"]',
  'link[rel="canonical"]',
];

const HeadDedupe = () => {
  useEffect(() => {
    const clean = () => {
      MANAGED_SELECTORS.forEach((selector) => {
        document.head.querySelectorAll(selector).forEach((el) => {
          if (!el.hasAttribute('data-rh')) {
            el.parentNode?.removeChild(el);
          }
        });
      });
    };

    // Run immediately and again after Helmet has flushed its tags.
    clean();
    const t = window.setTimeout(clean, 0);
    return () => window.clearTimeout(t);
  }, []);

  return null;
};

export default HeadDedupe;
