/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#262a36',
        'dark-nav': '#313449',
        'dark-logo': '#1e2030',
        'light-bg': '#f7f8fc',
      },
    },
  },
  plugins: [],
};
