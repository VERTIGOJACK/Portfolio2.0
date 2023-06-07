import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  resolve: {
    extensions: [".js", ".vue", ".json", ".svg", ".gltf"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
