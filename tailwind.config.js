/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "media", // or 'class'
  content: [
    'index.html', './src/**/*.{js,html}',
    './node_modules/preline/dist/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Quicksand", "sans-serif"],
      },
    },
    plugins: [
      require('preline/plugin'),
    ],
  }
}
