/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontWeight: {
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      'extra-bold': 800,
      black: 900,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background' : {
        light: '#878BA6',
        DEFAULT: '#282A36',
        dark: '#14141B',
        inverted: '#D7D5C9',
      },
      'currentLine' : {
        light: '#9A9EB3',
        DEFAULT: '#44475A',
        dark: '#22232D',
        inverted: '#BBB8A5',
      },
      'foreground' : {
        light: '#FBFBF8',
        DEFAULT: '#F8F8F2',
        dark: '#9F9F55',
        inverted: '#07070D',
      },
      'comment' : {
        light: '#B0B8D1',
        DEFAULT: '#6272A4',
        dark: '#303852',
        inverted: '#9D8D5B',
      },
      'cyan' : {
        light: '#C4F3FE',
        DEFAULT: '#8BE9FD',
        dark: '#039FC0',
        inverted: '#741602',
      },
      'green' : {
        light: '#A7FCBD',
        DEFAULT: '#50FA7B',
        dark: '#04A02B',
        inverted: '#AF0584',
      },
      'orange' : {
        light: '#FFDBB5',
        DEFAULT: '#FFB86C',
        dark: '#B55D00',
        inverted: '#004793',
      },
      'pink' : {
        light: '#FFBCE2',
        DEFAULT: '#FF79C6',
        dark: '#BC006B',
        inverted: '#008639',
      },
      'purple' : {
        light: '#DEC8FC',
        DEFAULT: '#BD93F9',
        dark: '#530ABB',
        inverted: '#426C06',
      },
      'red' : {
        light: '#FFA9A9',
        DEFAULT: '#FF5555',
        dark: '#AA0000',
        inverted: '#00AAAA',
      },
      'vampire' : {
        light: '#8E91B8',
        DEFAULT: '#383A59',
        dark: '#1C1C2C',
        inverted: '#C7C5A6',
      },
      'yellow' : {
        light: '#F8FCC5',
        DEFAULT: '#F1FA8C',
        dark: '#ACBA08',
        inverted: '#0E0573',
      },
    },
    extend: {},
  },
  plugins: [],
}
