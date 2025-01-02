import logoImgOne from '../../src/assets/image/png/client-card-logo-1.png'
import logoImgTwo from '../../src/assets/image/png/client-card-logo-2.png'
import logoImgThree from '../../src/assets/image/png/client-card-logo-3.png'
import sliderImgOne from '../../src/assets/image/png/slider-img-1.png'
import sliderImgTwo from '../../src/assets/image/png/slider-img-3.png'
import sliderImgThree from '../../src/assets/image/png/slider-img-2.png'
import { CplIcon, CrossIcon, TrafficIcon, LeadsIcon, AngleIcon, FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon, YoutubeIcon, } from "./icons";
import cardImgOne from './../assets/image/png/learn-card-img-1.png'
import cardImgTwo from './../assets/image/png/learn-card-img-2.png'
import cardImgThree from './../assets/image/png/learn-card-img-3.png'

export const HEADER_DATA_LIST = [
  {
    url: "/",
    name: "How We Help",
    icon: "▼",
    submenu: [
      "Account",
      "Marketing",
      "Document",
    ]
  },
  {
    url: "/",
    name: "Who We Help",
    icon: "▼",
    submenu: [
      "Dummy",
      "lorem",
      "Travel",
    ]
  },
  {
    url: "/",
    name: "Why Venveo",
    icon: "▼",
    submenu: [
      "lorem",
      "Dummy",
      "lorem",
    ]
  },
  {
    url: "/",
    name: "Resources",
    icon: "▼",
    submenu: [
      "lorem",
      "lorem",
      "lorem",
    ]
  },
];
export const CLIENTS_DATA_LIST = [
  {
    tittle: "Education Company",
    bgBlack: "#000000",
    color: "#ffffff",
    logo: logoImgOne,
    maxWidth: "131px",
    heading: "Driving digital revenue for over 1,000+ satisfied clients.",
    Description: "Elevate your business with our top-tier services and tech",
    btnPara: "Learn More",
    leadsValue: "80%",
    adLeadsValue: "2X",
    trafficValue: "520%",
    leads: "Leads",
    adLeads: "Ad Leads",
    traffic: "Web Traffic",
  },
  {
    tittle: "HVAC Marketing",
    logo: logoImgTwo,
    maxWidth: "149px",
    heading: "Driving digital revenue for over 1,000+ satisfied clients.",
    Description: "Elevate your business with our top-tier services and tech",
    btnPara: "Learn More",
    leadsValue: "80%",
    adLeadsValue: "2X",
    trafficValue: "520%",
    leads: "Leads",
    adLeads: "Ad Leads",
    traffic: "Web Traffic",
  },
  {
    logo: logoImgThree,
    maxWidth: "49px",
    heading: "Driving digital revenue for over 1,000+ satisfied clients.",
    Description: "Elevate your business with our top-tier services and tech",
    btnPara: "Learn More",
    leadsValue: "80%",
    adLeadsValue: "2X",
    trafficValue: "520%",
    leads: "Leads",
    adLeads: "Ad Leads",
    traffic: "Web Traffic",
  }
];
export const MARKETING_CARD_LIST = [
  {
    logo: <TrafficIcon />,
    title: "My website isn’t getting enough traffic",
    description:
      "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
    listOne: "Boost your presence in search results",
    listTwo: "Capture targeted site traffic",
    listThree: "Turn site visitors into customers",
    btn: "Explore SEO Services ",
  },
  {
    logo: <CplIcon />,
    title: "My CPL from digital ad campaigns is too high",
    description:
      "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
    listOne: "Refine ad targeting",
    listTwo: "Engage your audience where they browse online",
    listThree: "Maximize paid ad budget",
    btn: "Explore SEO Services ",
  },
  {
    logo: <LeadsIcon />,
    title: "My website isn’t generating enough leads",
    description:
      "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
    listOne: "Fill up your lead pipeline",
    listTwo: "Reach your most valuable audience",
    listThree: "Maximize conversion opportunities",
    btn: "Explore SEO Services ",
  },
  {
    logo: <CrossIcon />,
    title: "My marketing and sales data is disconnected",
    description:
      "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
    listOne: "Unify sales and marketing data",
    listTwo: "Prioritize leads with data-backed insights",
    listThree: "Turn opportunities into closed deals",
    btn: "Explore SEO Services ",
  },
];
export const RESULT_SLIDER_LIST = [
  {
    image: sliderImgOne,
    description:
      "They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.",
    name: "Jon Vaughan",
    title: "REGIONAL VP-SE AT US LBM",
  },
  {
    image: sliderImgTwo,
    description:
      "They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.",
    name: "Jon Vaughan",
    title: "REGIONAL VP-SE AT US LBM",
  },
  {
    image: sliderImgThree,
    description:
      "They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.",
    name: "Jon Vaughan",
    title: "REGIONAL VP-SE AT US LBM",
  },
  {
    image: sliderImgOne,
    description:
      "They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.",
    name: "Jon Vaughan",
    title: "REGIONAL VP-SE AT US LBM",
  },
  {
    image: sliderImgTwo,
    description:
      "They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.",
    name: "Jon Vaughan",
    title: "REGIONAL VP-SE AT US LBM",
  },
  {
    image: sliderImgThree,
    description:
      "They are really aligned with how we are building the business from a strategic standpoint and from branding, messaging and cultural standpoint.",
    name: "Jon Vaughan",
    title: "REGIONAL VP-SE AT US LBM",
  },
];
export const LEARN_FORM_LIST = [
  {
    category: "guides",
    tittle: "Marketing to Contractors and Installers:",
    tittleTwo: " The Ultimate Guide",
    description: "Understanding the process and maximize the opportunities",
    btn: "Read More",
    arrow: <AngleIcon />,
  },
];
export const LEARN_FORM_SECOND_LIST = [
  {
    bgImg: cardImgOne,
    category: "multi-channel marketing",
    tittle: "How to Get Your Product into Lowe's",
    description: "Understanding the process and maximize the opportunities",
    btn: "Read More",
    arrow: <AngleIcon />,
  },
  {
    bgImg: cardImgTwo,
    category: "lead-gen",
    tittle: "Get Your Sales Team Ready for Digital Leads",
    description: "unlock substantial business growth by enhancing collaboration skills and digital marketing expertise",
    btn: "Read More",
    arrow: <AngleIcon />,
  },
  {
    bgImg: cardImgThree,
    category: "ecommerce",
    tittle: "How to Sell Building Materials Online",
    description: "Explore how selling building materials online opens up wider audiences, efficient sales and insightful data,",
    btn: "Read More",
    arrow: <AngleIcon />,
  },
];
export const FOOTER_LIST = [
  {
    tittle: "how we help",
    links: [
      { name: "Drive More Awareness", url: "/awareness" },
      { name: "Get more Customers", url: "/customers" },
      { name: "Build Your Brand", url: "/build" },
      { name: "Improve your reputation", url: "/improve" },
      { name: "Track Results", url: "/result" },
    ]
  },
  {
    tittle: "who we help",
    links: [
      { name: "Digital Advertising", url: "/advertising" },
      { name: "Search Engine Ranking", url: "/ranking" },
      { name: "Content Marketing", url: "/contentMarketing" },
      { name: "Programic Advertising", url: "/advertising" },
      { name: "Email Marketing", url: "/emailMarketing" },
    ]
  },
  {
    tittle: "why venveo",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Growth Studies", url: "/growth" },
      { name: "Testimonials", url: "/Testimonials" },
    ]
  },
  {
    tittle: "why venveo",
    links: [
      { name: "Articles", url: "/Articles" },
      { name: "News", url: "/News" },
      { name: "Webinars", url: "/Webinars" },
      { name: "eBooks", url: "/eBooks" },
      { name: "Podcast", url: "/Podcast" },
    ]
  }
];
export const MEDIA_ICON_LIST = [
  {
      icon: <FacebookIcon/>,
      link: "https://www.facebook.com",
  },
  {
      icon: <InstagramIcon/>,
      link: "https://www.instagram.com",
  },
  {
      icon: <TwitterIcon/>,
      link: "https://www.twitter.com",
  },
  {
      icon: <LinkedInIcon/>,
      link: "https://www.linkedin.com",
  },
  {
      icon: <YoutubeIcon/>,
      link: "https://www.youtube.com",
  },
];
