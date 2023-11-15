/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fonts:{
        "quick":['Quicksand', 'sans-serif']
      },
      colors:{
        'primary':['#1A4F81'],
        'secondary':['#DC9928']
      }
    },
  },
  plugins: [],
}

