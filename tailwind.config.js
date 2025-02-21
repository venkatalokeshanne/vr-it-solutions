/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E94D35',
        'primary-hover': '#e62c13',
        'primary-light': '#fff1f0',
      }
    }
  },
  plugins: [],
}