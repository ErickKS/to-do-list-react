/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      black: "#000",
      white: "#FFF",
      transparent: "transparent",

      purple: {
        200: "#7068FF",
        400: "#23233F",
        600: "#1F1F35",
        800: "#141323",
      },
    },
    extend: {
      backgroundImage: {
        main: "linear-gradient(116.82deg, #23233F 0%, #0C0C1A 38.02%, #000000 100%)",
      },
    },
  },
  plugins: [],
};
