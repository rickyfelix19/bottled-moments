// const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{js,html}",
    'node_modules/preline/dist/*.js',],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
};

