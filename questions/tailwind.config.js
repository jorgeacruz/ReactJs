/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "Primary":"#151515",
        "Secondary":"#5C0459",

      },
      fontFamily:{
        "Raleway":["Raleway","sans-serif"],
      }
    },
  },
  plugins: [],
}

