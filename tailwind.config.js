/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  safelist: [
    'slick-prev',
    'slick-next',
    'rotate',
    'rotate-active',
    'scrolled',
  ],
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
        offWhite: '#f7f7f7',
        hoverRed: '#bb022a'
      },
      zIndex: {
        '-1': '-1',
        '1': '1',
        '2': '2',
        '3': '3',
      },
    },
  },
  plugins: [],
}