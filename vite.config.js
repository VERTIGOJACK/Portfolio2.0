import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import basicSsl from "@vitejs/plugin-basic-ssl";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [vue(), basicSsl()],
  base: "/",
  resolve: {
    extensions: [".js", ".vue", ".json", ".svg", ".gltf"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
