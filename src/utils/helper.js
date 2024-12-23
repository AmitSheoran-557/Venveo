import logoImgOne from '../../src/assets/image/png/client-card-logo-1.png'
import logoImgTwo from '../../src/assets/image/png/client-card-logo-2.png'
import logoImgThree from '../../src/assets/image/png/client-card-logo-3.png'
import { cplIcon, crossIcon, trafficIcon, leadsIcon, } from "./icons";

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
    logo: <trafficIcon />,
    title: "My website isn’t getting enough traffic",
    description:
      "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
    listOne: "Boost your presence in search results",
    listTwo: "Capture targeted site traffic",
    listThree: "Turn site visitors into customers",
    btn: "Explore SEO Services ",
  },
  {
    logo: <cplIcon />,
    title: "My CPL from digital ad campaigns is too high",
    description:
      "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
    listOne: "Refine ad targeting",
    listTwo: "Engage your audience where they browse online",
    listThree: "Maximize paid ad budget",
    btn: "Explore SEO Services ",
  },
  {
    logo: <leadsIcon />,
    title: "My website isn’t generating enough leads",
    description:
      "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
    listOne: "Fill up your lead pipeline",
    listTwo: "Reach your most valuable audience",
    listThree: "Maximize conversion opportunities",
    btn: "Explore SEO Services ",
  },
  {
    logo: <crossIcon />,
    title: "My marketing and sales data is disconnected",
    description:
      "Without consistent site traffic, you’re missing out on valuable visitors, leads, and revenue. Thankfully, custom SEO solutions can get you back on track by boosting your presence in search engine results, so more people can find and visit your site.",
    listOne: "Unify sales and marketing data",
    listTwo: "Prioritize leads with data-backed insights",
    listThree: "Turn opportunities into closed deals",
    btn: "Explore SEO Services ",
  },
];