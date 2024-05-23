/** @type {import('tailwindcss').Config} */

const { colors } = require("./theme/colors");
const { borderRadius } = require("./theme/borderRadius");
const fontFamily = {
  gilRegular: ["gil"],
  gilMedium: ["gil-m"],
  gilSemiBold: ["gil-sb"],
  gilBold: ["gil-b"],
};

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors,
    borderRadius,
    extend: {
      // fontSize,
      fontFamily
    },
  },
  plugins: [],
}

