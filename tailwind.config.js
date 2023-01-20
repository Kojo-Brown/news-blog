/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '160px',
      'md': '520px',
      'lg': '750px',
      'xl': '1000px'
    },
    extend: {},
  },
  plugins: [],
}
