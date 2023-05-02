// vite.config.js
import { defineConfig } from "vite";
// import dns from "dns";

// dns.setDefaultResultOrder("verbatim");

// const path = require("path");

export default defineConfig({
  server: {
    // starting point, use only for 'resolume-base' branch
    // open: "/src/pages/sketch.html", // comment this if this features is completed
    // set port number
    // port: "8080",

    // starting point for main
    open: "/src/index.html", // default opening
    // set port number
    port: "5173",

    // this does not work
    // origin: 'http://127.0.0.1:8080',
  },
});
