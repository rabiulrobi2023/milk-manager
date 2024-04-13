/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "baseColor":"#f3f1e4",
        "btnHoverBase": "#f6f1d1"
      },
    },
  },
  plugins: [require("daisyui")],
}

