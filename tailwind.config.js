/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#0F0D38",
        "primary-bg": "#0F0E45",
        secondary: "#FF0512"
      },
  },
  plugins: [],
}}