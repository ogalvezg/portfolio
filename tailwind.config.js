module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'kaushan': ['Kaushan Script'],
    },
    boxShadow: {
      'custom-light':"0 0 10px #313131",
      'custom-dark':"5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
        dark:{
          DEFAULT: '#010101',
          100:'#1a1a1a',
          200:'#21242c',
          300:'#373c49',
          500:'#15181e',
          700:'#202125',
        }
      }
    },
  },
  variants: {
    extend: {
      boxShadow:['dark'],
    }
  },
  plugins: [],
}
