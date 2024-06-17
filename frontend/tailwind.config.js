/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      heading : ["Poetsen One", "sans-serif"],
      normal : ["Freeman", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}