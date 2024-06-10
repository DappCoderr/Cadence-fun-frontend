/** @type {import('tailwindcss').Config} */
const colors = {
  red: "#be2e2e",
  black: "#000000",
  white: "#ffffff",
  bg: "#f0f0f0",
  yellow: "#fdc32e",
  accent: "#d0effb",
  primary: "#fea15d",
  secondary: "#ffc8a1",
  brown: "#8d7761",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
