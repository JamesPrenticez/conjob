module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        screenNav: "calc(100vh - 4rem)",
      },
      fontFamily: {
        poppins: ['Poppins'],
        racing: ['Racing Sans One'],
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
