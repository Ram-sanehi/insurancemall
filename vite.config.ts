import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8081,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "ES2020",
    minify: "terser",
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: mode === "production",
        drop_debugger: true,
        passes: 2,          // extra compression pass
        pure_funcs: mode === "production" ? ["console.log", "console.info"] : [],
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Framer-motion in its own deferred chunk
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-framer";
          }
          // Radix UI components — deferred with pages
          if (id.includes("node_modules/@radix-ui")) {
            return "vendor-radix";
          }
          // Lucide icons — shared
          if (id.includes("node_modules/lucide-react")) {
            return "vendor-lucide";
          }
          // All remaining node_modules (react, react-dom, react-router, etc.) → single vendor chunk
          // avoids circular dependency warnings from react/scheduler internals
          if (id.includes("node_modules/")) {
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
    ],
  },
}));

