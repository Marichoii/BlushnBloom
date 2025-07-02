/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#fff1f5',
        'blush-accent': '#f9cbd3',
        'blush-deep': '#d97a91',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'sans-serif'],
        fancy: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}