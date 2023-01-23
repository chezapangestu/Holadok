const plugin = require("tailwindcss/plugin");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        sans: ["Source Sans Pro", "sans-serif"]
      },
        "colors": {
          "purple": {
            50: "#DEE4F7",
            100: "#B9C5EF",
            200: "#768FDF",
            300: "#3055CF",
            400: "#203271",
            500: "#101C45",
            600: "#0C1636",
            700: "#0A1129",
            800: "#070C1D",
            900: "#03050C"
          },
          
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      const utilities = {
        ".bg-hero": {
          "background-image": "url(./Rectangle 1.svg)",
          "position": "absolute",
          "width": "590px",
          "height": "847px",
          "left": "764px",
          "top": "18px"
        }
      };
      addUtilities(utilities);
    })
  ],
}
