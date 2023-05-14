// vite.config.js
// vite.config.js
import { defineConfig } from 'vite'
import dns from 'dns'
import { createServer as createViteServer } from 'vite'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    // omit
    //   server: {
    // origin: 'http://127.0.0.1:8080',
    // },
    root: 'src',
    server: {
        port: 3030,
    },
    preview: {
        port: 8080,
    },
})


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