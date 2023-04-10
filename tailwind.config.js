/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens:{

      sl: "320",

      sm: "280px",


      md: "768px",


      lg: "1024px",


      xl: "1280px",


      '2xl': '1536px'

    },
    extend: {

       fontFamily: {
        'Sora':  'Sora'
       },
    },
  },
  plugins: [],
}
