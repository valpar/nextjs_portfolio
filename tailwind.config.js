/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sourceLight: 'sourceLight',
        sourceBold: 'sourceBold',
        sourceReg: 'sourceReg',
      },
    },
  },
  plugins: [],
};
