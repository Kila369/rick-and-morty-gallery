/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: "#FF9800",
      darkGray: "#272B33",
      gray: "#3C3E44",
      lightGray: "#9E9E9E",
      white: "#F5F5F5",
      green: "#55CC44",
      red: "#CC5544",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
