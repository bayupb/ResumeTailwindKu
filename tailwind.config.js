module.exports = {
  purge: [
    '*'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: '4rem',
    colors:{
      abuabu : '#EAE4E9',
      hitam : '#000000',
      putihJoin: '#FFFFFF'
    },
    fontSize:{
      'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem',
      'besar30' : '1.88rem',
      'besar25' : '1.56rem',
      'besar15' : '0.94rem',
    },
    fontFamily:{
      poppins: ['Poppins', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
