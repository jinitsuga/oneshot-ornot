const { readBuilderProgram } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        purp: "#5800FF",
        plink: "#E900FF",
        yello: "#FFC600",
      },
    },
  },
  plugins: [],
};
