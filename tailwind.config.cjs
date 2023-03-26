const { readBuilderProgram } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#393E46",
        text: "#AAD8D3",
        emphasis: "#00ADB5",
        lighter: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
