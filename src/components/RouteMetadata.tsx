import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_METADATA, ROUTE_METADATA } from "@/lib/routeMetadata";

const SITE_URL = "https://nxtlvlhealth.com.au";
const INDEX_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

const setMetaContent = (selector: string, content: string) => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
};

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalisedPath = pathname === "/index.html" ? "/" : pathname.replace(/\/$/, "") || "/";
    const metadata = ROUTE_METADATA[normalisedPath] ?? DEFAULT_METADATA;
    const canonicalUrl = normalisedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalisedPath}`;

    document.title = metadata.title;
    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);
    setMetaContent('meta[name="robots"]', metadata.noindex ? "noindex, nofollow" : INDEX_ROBOTS);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
};

export default RouteMetadata;