
const plugin = require('tailwindcss/plugin')
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      backgroundImage: {
        'img-pc': "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.99)),url('../public/assets/img-phone-in-desktop.jpg')",
      },
      fontFamily: {
        'sans': ['Prata', 'serif'],
        'Relway': ['Raleway', 'sans-serif']
      },
      extend: {
        colors: {
          'white': '#ffffff',
          'black': '#000000',
          'cyan': '#06b6d4',
        },
      },
    },
    plugins: [
      plugin(function({ addBase, theme }) {
        addBase({
          'h1': { fontSize: theme('fontSize.3xl') },
          'h2': { fontSize: theme('fontSize.xl') },
          'h3': { fontSize: theme('fontSize.lg') },
        })
      })
    ],
  }