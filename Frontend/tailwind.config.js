/** @type {import('tailwindcss').Config} */
export default {
  
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
      screens: {
        'xs': {'max': '400px'}, // Custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
}