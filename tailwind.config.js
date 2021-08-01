module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    width: {
      500: '500px',
      600: '600px',
      700: '700px'
    },
    height: {
      500: '500px',
      600: '600px',
      700: '700px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
