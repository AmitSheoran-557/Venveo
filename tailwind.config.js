module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
       "darkCyan":"#097980",
       "yellowGreen":"#D2F038",
      },
      backgroundImage: {
        cardImgOne: "url('/src/assets/image/png/client-card-one-bg.png')",
        cardImgTwo: "url('/src/assets/image/png/client-card-two-bg.png')",
        cardImgThree: "url('/src/assets/image/png/client-card-three-bg.png')",
      },
    },
  },
  plugins: [],
};
