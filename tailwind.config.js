/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background': '#eff0f3',
        'headline': '#0d0d0d',
        'paragraph': '#2a2a2a',
        'button': '#ff8e3c',
        'button-text': '#0d0d0d',
        'stroke': '#0d0d0d',
        'main': '#eff0f3',
        'highlight': '#ff8e3c',
        'secondary': '#fffffe',
        'tertiary': '#d9376e'
      },
      textColor: {
        'background': '#eff0f3',
        'headline': '#0d0d0d',
        'paragraph': '#2a2a2a',
        'button': '#ff8e3c',
        'button-text': '#0d0d0d',
        'stroke': '#0d0d0d',
        'main': '#eff0f3',
        'highlight': '#ff8e3c',
        'secondary': '#fffffe',
        'tertiary': '#d9376e'
      },
    },
  },
  plugins: [],
}

