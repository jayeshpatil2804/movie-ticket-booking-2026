/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom BookMyShow inspired colors
        'bms-red': '#f84464',      // The primary pinkish-red
        'bms-grey': '#333545',     // Dark grey text/footer
        'bms-light': '#f5f5f5',    // Background grey
        'bms-green': '#00b900',    // Available seat green
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}