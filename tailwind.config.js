/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:'Roboto, sans-serif',
      }
    },
    backgroundImage: {
      app: 'url(/app-BG.png)'
    },
     
  },
  plugins: [],
}
