/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
"./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fonts:{
        "quicksand":['Quicksand', 'sans-serif']
      },
      colors:{
        'primaria':['#1A4F81'],
        'secundaria':['#DC9928']
      },
      backgroundImage:{
        'BackImage':('../assets/slide1.png'),
        'BoxImage1':('../assets/boxImage.png'),
      }
    },
  },
  plugins: [],
}

