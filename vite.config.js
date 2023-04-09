import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  registerType: "prompt",
  includeAssets: ["./src/assets/img1.png", "./src/assets/img2.png", "./src/assets/img3.png"],
  manifest: {
    name: "Internet Speed",
    short_name: "Internet Speed",
    description: "An app that can get internet speed and router information.",
    icons: [
      {
        src: "./src/assets/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "./src/assets/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "./src/assets/icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
    ],
    theme_color: "#0b2239",
    background_color: "#0b2239",
    display: "standalone",
    scope: "/",
    start_url: "/",
  },
});