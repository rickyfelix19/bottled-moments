// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    'index.html', './src/**/*.{js,html}',
    './node_modules/preline/dist/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}
