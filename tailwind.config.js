/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "display": ['"Arial", "sans-serif"'],
        "marca": ['"Poppins", "sans-serif"'],
      },
      colors: {
        "carmen-primary": "#FF6363",
        "carmen-secondary": {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
}