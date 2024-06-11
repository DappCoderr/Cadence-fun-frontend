/** @type {import('tailwindcss').Config} */
const colors = {
  red: "#be2e2e",
  black: "#000000",
  white: "#ffffff",
  bg: "#f0f0f0",
  bg2: "#e9e9e9",
  bgOrange: "#e49257",
  yellow: "#fdc32e",
  accent: "#d0effb",
  primary: "#fea15d",
  secondary: "#ffc8a1",
  brown: "#8d7761",
  lightBrown: "#D8CDC6",
  dark: "#363737",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      spacing: {
        1: "5px",
        2: "10px",
        3: "15px",
        4: "20px",
        5: "25px",
        6: "30px",
        7: "35px",
        8: "40px",
        9: "45px",
        10: "50px",
      },
    },
  },
  plugins: [],
};
