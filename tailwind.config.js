/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'}, // 1.5
        'tallscreen': {'raw': '(min-aspect-ratio: 13/20)'}, // 0.65
      }
    },
  },
  plugins: [],
}

