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
          default: '#817ff7',
          100: '#efeffc',
          200: '#9f91b9',
          400: '#383766'
        },
        'yellow': '#ffbc18'
      }
    },


  },
  plugins: [],
}