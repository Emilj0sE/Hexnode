/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        mulish: ["'Mulish'"],
      },
      colors: {
        lightAsh: '#020a19',
        cmnRed: '#dd0735',
      },
    },
  },
  plugins: [],
}