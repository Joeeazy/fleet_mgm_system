import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host : true,
    port : 80,
    proxy: {
      "/api": {
        target: "http://18.207.123.151:5000",
      },
    },
  },
});
