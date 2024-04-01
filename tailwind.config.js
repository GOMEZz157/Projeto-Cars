/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'laranja': '#e28625',
      'verde':'#006971',
      'verde-escuro':'#004140',
      'branco-off':'rgba(255,255,255,0.75)',
      'white':'#FFF',
      'offwhitebg':'#f2f2f2',
    },
    fontFamily : {
      'shoulders':'"Big Shoulders Display"',
      'deca':'"Lexend Deca"',
    }
  },
  plugins: [],
}