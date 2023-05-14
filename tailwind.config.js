/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media", // or 'class'
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
    extend: {
      fontFamily: {
        poppins: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
