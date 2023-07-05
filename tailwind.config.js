/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        main: "#05668D",
        secondary: "#028090",
        third: "#00A896",
        fourth: "#02C39A",
        fifth: "#F0F3BD",
        semiWhite: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
