import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    // Ensure these packages are not externalized during SSG
    noExternal: ['@supabase/supabase-js'],
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    dirStyle: 'nested',
    includeAllRoutes: true,
    onBeforePageRender: (route: string) => {
      console.log(`Pre-rendering: ${route}`);
    },
    onPageRendered: (route: string, html: string) => {
      console.log(`Rendered: ${route} (${html.length} bytes)`);
      return html;
    },
  },
}));
