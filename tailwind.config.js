/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // 'black': '',
        'indigo': {
          light: 'rgb(239 239 252)',
          200: 'rgb(159 145 185)',
          400: 'rgb(56 55 102)',
          dark: 'rgb(129 127 247)',
        },
        'yellow': '#ffbc18'
      }
    },


  },
  plugins: [],
}