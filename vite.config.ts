import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
});
