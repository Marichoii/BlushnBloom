/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#FFE9EE',
        'blush-accent': '#f8cfd4',
        'blush-deep': '#e39cae',
        'blush-gold': '#d1bfa7',
        'blush-white': '#fefefe',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'sans-serif'],
        fancy: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}