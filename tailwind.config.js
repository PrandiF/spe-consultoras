/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1A56D0",
        orange: "#FF7C28",
      },
      fontFamily: {
        fira: ["var(--font-fira-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
