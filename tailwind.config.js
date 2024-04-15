/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colorBase":"#f3f1e4",
        "colorBtnHoverBase": "#f6f1d1",
        "colorHighLight":"#ffd000"

        
      },
    },
  },
  plugins: [require("daisyui")],
}

