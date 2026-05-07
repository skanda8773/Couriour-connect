/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './index.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: 'royalblue',
        primaryDark: 'midnightblue',
        primarySoft: 'aliceblue',
        background: 'ghostwhite',
        card: 'white',
        text: 'midnightblue',
        muted: 'slategray',
        border: 'gainsboro',
        line: 'lightgray',
        success: 'seagreen',
        info: 'dodgerblue',
        warning: 'orange',
        orange: 'darkorange',
        red: 'crimson',
        dark: 'midnightblue',
        dark2: 'navy',
        darkCard: 'darkslateblue',
        darkLine: 'slategray',
        softRed: 'mistyrose',
        softGreen: 'honeydew',
        softOrange: 'moccasin',
        softBlue: 'aliceblue',
        softGray: 'whitesmoke',
        white: 'white',
      },
    },
  },
  plugins: [],
};

