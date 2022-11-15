/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui:{
    themes:[
      {
        doctorsTheme: {
          primary : "#0FCFEC",
          secondary: "#19D3AE",
          "base-100":"#FFFFFF",
          accent : "#3A4256"
        }
      }
    ]
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

