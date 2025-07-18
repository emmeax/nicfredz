/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ['"Cabinet Grotesk"', 'sans-serif'],
        general: ['"General Sans"', 'sans-serif'],
        open: ['"Open Sans"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
