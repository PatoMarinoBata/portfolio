/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  
    theme: {
      extend: {
        height: {
          18: '4.5rem', // 75% de 6rem (h-24)
        },
      },
    },
  
  theme: {
    extend: {},
  },
  plugins: [],
};
