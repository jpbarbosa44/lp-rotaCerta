/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['balloo2']
      },
      backgroundImage: {
        'module1': "url('/imgs/module1.png')"
      }
    },
  },
  plugins: [],
}