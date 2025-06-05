/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        // Definimos h-18 = 4.5rem (72px), que es el 75 % de h-24 (6rem = 96px)
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
