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
        darkAsh: '#020a19',
        cmnRed: '#dd0735',
        csAsh: '#556575',
        lightAsh: '#333333',
      },
    },
  },
  plugins: [],
}