/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      black: "#000000",
      white: "#F5F5F5",
      transparent: "transparent",

      primary: "#6D28D9",
      "primary-dark": "#430D99",

      gray: "#18181B",
      "gray-dark": "#13111B",

      red: "#DA1A3C",
    },
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(135deg, #6D28D9 -0.69%, #430D99 99.31%)",
      },
      boxShadow: {
        main: "0 2px 12px 0 #430D99;",
      },
    },
  },
  plugins: [],
};
