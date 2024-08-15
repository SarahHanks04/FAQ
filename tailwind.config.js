/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  darkMode: "class", // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        BrightBlue: "hsl(220, 98%, 61%)",
        CheckBackground:
          "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",

        // Light Theme Colors
        VeryLightGray: "hsl(0, 0%, 98%)",
        VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LightGrayishBlue: "hsl(233, 11%, 84%)",
        DarkGrayishBlue: "hsl(236, 9%, 61%)",
        VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

        // Dark Theme Colors
        VeryDarkBlue: "hsl(235, 21%, 11%)",
        VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        LightGrayishBlueDark: "hsl(234, 39%, 85%)",
        LightGrayishBlueHover: "hsl(236, 33%, 92%)",
        DarkGrayishBlueDark: "hsl(234, 11%, 52%)",
        VeryDarkGrayishBlueDark: "hsl(233, 14%, 35%)",
      },
    },
  },
  plugins: [],
};
