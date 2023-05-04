/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myfont': [ 'Nanum Myeongjo', 'serif'],
        'fonty': ['Poppins', 'sans-serif']
      },
     colors: {  
        "Tp": "rgba(0, 0, 0, 0.9)",
        "T": "rgba(0, 0, 0, .8)",
        "Contact": "rgba(0, 0, 0, .7)",
        "Icon": "rgba(0, 0, 0, .3)",
      }
  },
  plugins: [],
}}