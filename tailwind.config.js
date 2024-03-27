/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'}, // 1.5
        'tallscreen': {'raw': '(min-aspect-ratio: 13/20)'}, // 0.65
      },
      /* Animation Frames */
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

