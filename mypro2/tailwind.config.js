/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#b62641",
        dark:"#1d1d1d",
      },
      container:{
        center:true,
        padding: {
          DEFAULT:"1rem",
          sm:"1rem",
          
        },
      }
    },
  },
  plugins: [],
}

