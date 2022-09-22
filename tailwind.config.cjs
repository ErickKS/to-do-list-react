/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    fontFamily :{
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        main: "linear-gradient(0deg, rgba(48,47,59,1) 0%, rgba(0,0,0,1) 30%)",
      }
    },
  },
  plugins: [],
}