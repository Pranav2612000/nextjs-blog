module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sfproregular':['SFProDisplay-Regular'],
        'sfprobold': ['SFProDisplay-Bold'],
        'sfprolight': ['SFProDisplay-Light'],
        'sfprosemibold':['SFProDisplay-SemiBold']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
