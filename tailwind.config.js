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
        yellowGreen: "url('./assets/images/png/outsmart-bg-img.png')",
        tabBgOne: "url('./assets/images/png/tabs-bg-1-img.png')",
        tabOneSmBg: "url('./assets/images/png/tab-one-sm-img.png')",
        tabBgTwo: "url('./assets/images/png/tabs-bg-2-img.png')",
        tabTwoSmBg: "url('./assets/images/png/tab-two-sm-img.png')",
        tabBgThree: "url('./assets/images/png/tabs-bg-3-img.png')",
        greenBg: "url('./assets/images/png/green-lines-bg.png')",
        cardImgOne: "url('./assets/images/png/client-card-one-bg.png')",
        cardImgTwo: "url('./assets/images/png/client-card-two-bg.png')",
        cardImgThree: "url('./assets/images/png/client-card-three-bg.png')",
        tabThreeSmBg: "url('./assets/images/png/tab-three-sm-bg.png')",
        sliderBg: "url('./assets/images/png/slider-bg-img.png')",
        goalsBg: "url('./assets/images/png/goals-sec-bg.png')",
        LearnFormBg: "url('./assets/images/png/learn-form-img.png')",
        LearnCardImgOne: "url('./assets/images/png/learn-card-img-1.png')",
        LearnCardImgTwo: "url('./assets/images/png/learn-card-img-2.png')",
        LearnCardImgThree: "url('./assets/images/png/learn-card-img-3.png')",
      },
    },
  },
  plugins: [],
};
