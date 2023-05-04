/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        bg: '#0f0f0f',
        overlay: 'rgba(0, 0, 0, 0.8)'
      },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
    },
  },
  plugins: [],
};
