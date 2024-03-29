/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        wordleGray: '#86888a',
        wordleDarkgray: '#939598',
        wordleYellow: '#c9b458',
        wordleDarkyellow: '#b59f3b',
        wordleGreen: '#6aaa64',
        wordleDarkgreen: '#538d4e',
        wordleBlack: '#121213',
      },
      maxWidth: {
        'screen-xs': '414px',
      },
    },
  },
  plugins: [],
};
