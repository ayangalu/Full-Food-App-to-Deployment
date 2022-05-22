module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1448px'
    },
    extend: {
      colors: {
        searchBg: 'rgb(224,217,217)',
        playStoreBtn: 'rgb(21,29,41)',
        brightRed: 'hsl(12, 88%, 59%)',
        popularRecipe: 'rgb(255,249,241)',
        cartPadding: 'rgb(254,182,80)',
        cartPadding2: 'rgb(253,212,154)',
        bgTone: 'FFFEFC',
        brightYellow: 'rgb(255,147,2)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}