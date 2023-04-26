/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "740px",
      },
      colors: {
        primary: "#e50914",
      },
      fontSize: {
        h1: "32px",
      },
    },
  },
  plugins: [],
};
