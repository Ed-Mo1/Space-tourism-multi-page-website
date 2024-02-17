/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      colors: {
        black: "#0B0D17",
        light_shade_blue: "#D0D6F9",
        white: "#FFFFFF",
      },
      backgroundColor: {
        black: "#0B0D17",
        light_shade_blue: "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        barlow_condensed: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
