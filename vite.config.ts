
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createRequire } from "module";



// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const require = createRequire(import.meta.url);
  const reactPlugins = react();
  const plugins = Array.isArray(reactPlugins) ? [...reactPlugins] : [reactPlugins];

  if (mode === 'development') {
    try {
      const { componentTagger } = require('lovable-tagger');
      plugins.push(componentTagger());
    } catch {
      // lovable-tagger is optional; ignore if not installed in non-dev envs
    }
  }

  return ({
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          // Enable proper asset hashing for long-term caching
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: (assetInfo: any) => {
            const info = assetInfo.name?.split('.') || [];
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            if (/css/i.test(ext)) {
              return `assets/css/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
          }
        }
      },
      cssCodeSplit: true,
      target: 'esnext',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // Optimize asset handling for better caching
      assetsInlineLimit: 4096, // Inline small assets as base64
      reportCompressedSize: false, // Disable gzip reporting for faster builds
    },
    // Copy static files including robots.txt and sitemap.xml
    publicDir: 'public'
  });
});
