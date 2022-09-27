/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "543px",
      // => @media (min-width: 543px) { ... }

      md: "767px",
      // => @media (min-width: 767px) { ... }

      lg: "1010px",
      // => @media (min-width: 1010px) { ... }
    },
  },
  plugins: [],
};
