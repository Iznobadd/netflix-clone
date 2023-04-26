/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "740px",
        sm: "500px",
      },
      colors: {
        primary: "#e50914",
        input: "#333",
        gray: "#8c8c8c",
      },
      fontSize: {
        h1: "32px",
      },
    },
  },
  plugins: [],
};
