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
      spacing: {
        74: "19rem",
      },
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(0eg)" },
          "75%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        shake: "shake .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
