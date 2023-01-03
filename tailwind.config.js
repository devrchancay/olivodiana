/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rob-roy": {
          50: "#fdf9ed",
          100: "#f7edce",
          200: "#efda98",
          300: "#e9c872",
          400: "#e1ac3e",
          500: "#d88f28",
          600: "#bf6e20",
          700: "#9f501e",
          800: "#82401e",
          900: "#6b361c",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
