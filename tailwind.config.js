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
        yellowGreen: "url('/src/assets/image/png/outsmart-bg-img.png')",
        tabBgOne: "url('/src/assets/image/png/tabs-bg-1-img.png')",
        tabOneSmBg: "url('/src/assets/image/png/tab-one-sm-img.png')",
        tabBgTwo: "url('/src/assets/image/png/tabs-bg-2-img.png')",
        tabTwoSmBg: "url('/src/assets/image/png/tab-two-sm-img.png')",
        tabBgThree: "url('/src/assets/image/png/tabs-bg-3-img.png')",
        greenBg: "url('/src/assets/image/png/green-lines-bg.png ')",
        cardImgOne: "url('/src/assets/image/png/client-card-one-bg.png')",
        cardImgTwo: "url('/src/assets/image/png/client-card-two-bg.png')",
        cardImgThree: "url('/src/assets/image/png/client-card-three-bg.png')",
        tabThreeSmBg: "url('/src/assets/image/png/tab-three-sm-bg.png')",
        sliderBg: "url('/src/assets/image/png/slider-bg-img.png')",
      },
    },
  },
  plugins: [],
};
