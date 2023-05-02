/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./*/*.html",
    "./public/pages/*",
    "./public/index.html",
    "./public/**/*.{js,html}",
    "./pages/*",
    "./pages/index.html",
    "./pages/**/*.{js,html}",
    "./index.html",
    "../node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
