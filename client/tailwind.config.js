/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1920px",
        xl: "1280px",
        lg: "960px",
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
      backgroundImage: {
        model_s: "url('./src/assets/images/register-devices.png')",
      },
    },
  },
  plugins: [],
};
