import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  vite: {
    server: {
      host: true,
      port: 3000,
      hmr: {
        port: 4000
      },
      watch: {
        usePolling: true,
        interval: 1500
      }
    }
  }
});
