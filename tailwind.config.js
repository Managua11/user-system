/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" // Adjust the paths to your project structure
  ],
  theme: {
    colors: {
      black: "#000000", // primary-0
      white: "#ffffff", // primary-1
      primary: "#039855", // primary-2
      darkgreen: "#0D6326",
      red: "#c91f20", // primary-3
    },
    extend: {},
  },
  plugins: [],
};
