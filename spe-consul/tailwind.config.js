/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#003DA6",
      },
      fontFamily: {
        fira: ["var(--font-fira-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
