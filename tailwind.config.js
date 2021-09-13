module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'bg-clr' : '#1F273C',
      'wrap-clr' : '#26304B',
      'title-clr' : '#92BFF6',
      'h3-clr' : '#DDE0E3',
      'note-clr' : '#8494BB',
      'label-clr' : '#919DAD',
      'start-gr-clr' : '#4366CB',
      'mid-gr-clr' : '#8079FF',
      'end-gr-clr' : '#92BFF6',
      'input-clr' : '#2E3858',
      'placeholder-clr': '#55698B',
      'row-clr' : '#2E3858',
      'comb-clr' : '#4466CC'
    },
    shadows: {
      'wrap-sh' : '0 0 30 0 (0,0,0,.1)'
    },
    fontFamily: {
      'montserrat' : "'Montserrat', sans-serif"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
