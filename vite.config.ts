import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: true,
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@icons": "/src/icons",
      "@ui-kit": "/src/ui-kit",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
  },
});
