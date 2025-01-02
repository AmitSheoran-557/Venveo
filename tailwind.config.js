module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "darkCyan": "#097980",
        "yellowGreen": "#D2F038",
        "teal": "#00afb5",
      },
      backgroundImage: {
        yellowGreen: "url('./assets/image/png/outsmart-bg-img.png')",
        tabBgOne: "url('./assets/image/png/tabs-bg-1-img.png')",
        tabOneSmBg: "url('./assets/image/png/tab-one-sm-img.png')",
        tabBgTwo: "url('./assets/image/png/tabs-bg-2-img.png')",
        tabTwoSmBg: "url('./assets/image/png/tab-two-sm-img.png')",
        tabBgThree: "url('./assets/image/png/tabs-bg-3-img.png')",
        greenBg: "url('./assets/image/png/green-lines-bg.png')",
        cardImgOne: "url('./assets/image/png/client-card-one-bg.png')",
        cardImgTwo: "url('./assets/image/png/client-card-two-bg.png')",
        cardImgThree: "url('./assets/image/png/client-card-three-bg.png')",
        tabThreeSmBg: "url('./assets/image/png/tab-three-sm-bg.png')",
        sliderBg: "url('./assets/image/png/slider-bg-img.png')",
        goalsBg: "url('./assets/image/png/goals-sec-bg.png')",
        LearnFormBg: "url('./assets/image/png/learn-form-img.png')",
        LearnCardImgOne: "url('./assets/image/png/learn-card-img-1.png')",
        LearnCardImgTwo: "url('./assets/image/png/learn-card-img-2.png')",
        LearnCardImgThree: "url('./assets/image/png/learn-card-img-3.png')",
      },
    },
  },
  plugins: [],
};
