/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background' : {
        light: '#878ba6',
        DEFAULT: '#282a36',
        dark: '#14141b',
        inverted: '#d7d5c9',
      },
      'currentLine' : {
        light: '#9a9eb3',
        DEFAULT: '#44475a',
        dark: '#22232d',
        inverted: '#bbb8a5',
      },
      'foreground' : {
        light: '#fbfbf8',
        DEFAULT: '#f8f8f2',
        dark: '#9f9f55',
        inverted: '#07070d',
      },
      'comment' : {
        light: '#b0b8d1',
        DEFAULT: '#6272a4',
        dark: '#303852',
        inverted: '#9d8d5b',
      },
      'cyan' : {
        light: '#c4f3fe',
        DEFAULT: '#8be9fd',
        dark: '#039fc0',
        inverted: '#741602',
      },
      'green' : {
        light: '#a7fcbd',
        DEFAULT: '#50fa7b',
        dark: '#04a02b',
        inverted: '#af0584',
      },
      'orange' : {
        light: '#ffdbb5',
        DEFAULT: '#ffb86c',
        dark: '#b55d00',
        inverted: '#004793',
      },
      'pink' : {
        light: '#ffbce2',
        DEFAULT: '#ff79c6',
        dark: '#bc006b',
        inverted: '#008639',
      },
      'purple' : {
        light: '#dec8fc',
        DEFAULT: '#bd93f9',
        dark: '#530abb',
        inverted: '#426c06',
      },
      'red' : {
        light: '#ffa9a9',
        DEFAULT: '#ff5555',
        dark: '#aa0000',
        inverted: '#00aaaa',
      },
      'yellow' : {
        light: '#f8fcc5',
        DEFAULT: '#f1fa8c',
        dark: '#f8fcc5',
        inverted: '#0e0573',
      },
      'vampire' : {
        light: '#8e91b8',
        DEFAULT: '#383a59',
        dark: '#1c1c2c',
        inverted: '#c7c5a6',
      },
    },
    extend: {},
  },
  plugins: [],
}
