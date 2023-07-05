/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        main: "#0A2647",
        secondary: "#144272",
        third: "#205295",
        fourth: "#2C74B3",
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
