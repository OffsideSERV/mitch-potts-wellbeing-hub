import '@/src/index.css'
import type { AppProps } from 'next/app'
import { Toaster } from "@/src/components/ui/toaster";
import { Toaster as Sonner } from "@/src/components/ui/sonner";
import { TooltipProvider } from "@/src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "@/src/components/Layout";
import CriticalCSS from "@/src/components/CriticalCSS";
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CriticalCSS />
          <Toaster />
          <Sonner />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  )
}