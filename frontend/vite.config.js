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
        target: "http://13.49.202.23:5000",
      },
    },
  },
});
