// vite.config.js
import dns from "dns";
import { defineConfig } from "vite";
import { createServer as createViteServer } from "vite";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  // omit
  //   server: {
  // origin: 'http://127.0.0.1:8080',
  // },
  root: "src",
  server: {
    // middlewareMode: true,
    // async middleware(app, server) {
    // insert server.js middleware into here
    //   app.use(server.middlewares);
    // },
    port: 3030,
  },
  preview: {
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: "./src/index.html",
        onboarding: "./src/pages/2_onboarding/onboarding.html",
        sketch: "./src/pages/3_sketch/sketch.html",
        thank_you: "./src/pages/4_thank_you/thankYou.html",
        error: "./src/404.html",
        // List all files you want in your build
      },
    },
  },
});

// async function createServer() {
//   const app = express()

//   // Create Vite server in middleware mode
//   const vite = await createViteServer({
//     server: { middlewareMode: true },
//     appType: 'custom', // don't include Vite's default HTML handling middlewares
//   })
//   // Use vite's connect instance as middleware
//   app.use(vite.middlewares)

//   app.use('*', async (req, res) => {
//     // Since `appType` is `'custom'`, should serve response here.
//     // Note: if `appType` is `'spa'` or `'mpa'`, Vite includes middlewares to handle
//     // HTML requests and 404s so user middlewares should be added
//     // before Vite's middlewares to take effect instead
//   })
// }
