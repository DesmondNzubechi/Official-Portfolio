/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myfont': [ 'Nanum Myeongjo', 'serif']
      },
     colors: {  
        "Tp": "rgba(0, 0, 0, 0.9)",
      }
  },
  plugins: [],
}}