import {
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiC,
  SiGit,
  SiGithub,
  SiTypescript,
  SiStyledcomponents,
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
// import { SiRedux} from "react-icons/si";


import { TbBrandCSharp } from "react-icons/tb";
// SiCplusplus, SiPython, SiPostman, SiMongodb, SiHeroku, SiNextDotJs, SiApollographql, DiSass, SiNodeRed,
// import { SiStyledcomponents } from "react-icons/si";
// import { GrTest } from "react-icons/gr";
// import { IoLogoPwa } from "react-icons/io5";

import { SlChemistry } from "react-icons/sl";
import { GiTestTubes } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";

import { SiNetlify } from "react-icons/si";
import { FcProcess } from "react-icons/fc";
import { FcPlanner } from "react-icons/fc";
import { MdAccountBalance } from "react-icons/md";


import { DiMysql } from "react-icons/di";
// import { FaNode } from "react-icons/fa";

import { FaSchool, FaCertificate } from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";

// import { SiMaterialui } from "react-icons/si";
// import { DiVisualstudio } from "react-icons/di";
// import { SiMui } from 'react-icons/si';


// Certificates
import linux from "./images/LINUX.jpg";
import bbsydp from "./images/BBSYDP.jpg";
import cit from "./images/NOOR.jpg";
import sdc from "./images/SDC.jpg";
import sdc_ms from "./images/SDC_MS.jpg";
import agile from "./images/AGILESCRUM.jpg";
// import gd from "./images/GD.jpg";
import iso from "./images/ISO.jpg";
import haccp_1 from "./images/HACCP Level 1.png";
import h_v_t from "./images/HACCP,VACCP,TACCP.jpg";



// HeroSection

export const Name = "Ahmed Raza";

export const MainSkills = [
  "Applied Chemist 🥼",
  "Quality Control Inspector 🥼",
  "Quality Assurance Inspector 🧪",
  "Frontend Developer 💻"
];

export const githubURL = "https://github.com/ahmedraza17260";

export const linkedinURL = "https://www.linkedin.com/in/ahmedraza17260/";

export const mailtoURL = "mailto:ahmedraza17260@gmail.com";

export const fbURL = "https://www.facebook.com/ahmedraza1726";

export const instagramURL = "https://www.instagram.com/ahmedraza17260/";

export const twitterURL = "https://twitter.com/AhmedRaza17260";

export const pinterestURL = "https://pinterest.com/ahmedraz17260/";

export const resumeURL =
           "https://drive.google.com/file/d/1V_H6p9DV_7EwtQ26MTz7pFTJBeNoRRsR/view";
      //   "https://drive.google.com/file/d/1foVdPDuJGFtls-ociSXvZYut5hqpuBp1/view";

// Skills

export const Dyeing = [
  {
    icon: <FcPlanner className="icon" />,
    name: "Dyeing Planning",
  },
  {
    icon: <MdAccountBalance className="icon" />,
    name: "Dyeing Costing",
  },
  {
    icon: <FcProcess className="icon" />,
    name: "Process Control",
  },
  
];




export const Quality = [
  {
    icon: <SlChemistry className="icon" />,
    name: "Laboratory Skill",
  },
  {
    icon: <SlChemistry className="icon" />,
    name: "Analytical Skill",
  },
  {
    icon: <GiTestTubes className="icon" />,
    name: "Quality Control",
  },
  {
    icon: <FiPackage className="icon" />,
    name: "Quality Assurance",
  },
];

export const Languages = [
  {
    icon: <SiC className="icon" />,
    name: "C",
  },
  {
    icon: <TbBrandCSharp className="icon" />,
    name: "C#",
  },
  {
    icon: <SiJavascript className="icon" />,
    name: "Javascript",
  },
  {
    icon: <SiTypescript className="icon" />,
    name: "Typescript",
  },
];

export const FrontendTools = [
  {
    icon: <SiHtml5 className="icon" />,
    name: "HTML5",
  },
  {
    icon: <SiCss3 className="icon" />,
    name: "Css3",
  },
  {
    icon: <SiReact className="icon" />,
    name: "ReactJS",
  },
  {
    icon: <SiStyledcomponents className="icon" />,
    name: "Styled-components",
  },
  {
    icon: <SiBootstrap className="icon" />,
    name: "Bootstrap",
  },
];

export const BackendTools = [
  {
    icon: <SiFirebase className="icon" />,
    name: "Firebase",
  },
  {
    icon: <DiMysql className="icon" />,
    name: "MySQL",
  },
  {
    icon: <SiGit className="icon" />,
    name: "Git",
  },
  {
    icon: <SiNetlify  className="icon" />,
    name: "Netlify",
  },
];

// Experience

export const experience = [
  {
    id: 1,
    type: "education",
    date: "April 2002 - May 2015",
    icon: <FaSchool />,
    bckgrnd: false,
    title: "Academy of Islamic and Modern Studies",
    subtitle: "Secondary Education",
    desc: "Obtained: 78.%",
    workdesc: [],
  },
  {
    id: 2,
    type: "education",
    date: "June 2015 - May 2017",
    icon: <FaSchool />,
    bckgrnd: true,
    title: "Sir Adamjee Institute Karachi, Pakistan",
    subtitle: "Higher Secondary Education",
    desc: "Obtained: 66%",
    workdesc: [],
  },
  {
    id: 3,
    type: "education",
    date: "January 2019 - 2021",
    icon: <MdSchool />,
    bckgrnd: false,
    title: "Karachi University",
    subtitle: "BSC. HONS. APPLIED CHEMISTRY ",
    desc: "Obtained: 58.31 %",
    workdesc: [],
  },
  {
    id: 4,
    type: "education",
    date: "January 2022 - 2023",
    icon: <MdSchool />,
    bckgrnd: false,
    title: "Karachi University",
    subtitle: "MSC. HONS. APPLIED CHEMISTRY ",
    desc: "Obtained: 55.10 %",
    workdesc: [],
  },
];

export const work = [
  {
    id: 1,
    type: "work",
    date: "May 2017 - June 2018",
    icon: <MdWork />,
    bckgrnd: true,
    title: "Ayaan Corporation",
    subtitle: "Sale Supervisor",
    // desc: "Worked under Management to achieve sales targets and drive revenue growth",
    // desc1: "Learning Sales Processes and Strategies",
    // desc2: "Analyze Sales Data",
    // desc3: "Invoicing, Sales Reports",
    // desc4: "Managing Accounts",
    
    workdesc: [
      "Worked under Management to achieve sales targets and drive revenue growth",
      "Learning Sales Processes and Strategies",
      "Analyze Sales Data",
      "Invoicing, Sales Reports",
      "Managing Accounts"
    ],
  },
  {
    id: 2,
    type: "work",
    date: "20th January 2023 - 3rd March 2023",
    icon: <MdWork />,
    bckgrnd: true,
    title: "Dalda Food",
    subtitle: "Six Weeks Internship at Quality Department.",
    // desc: "Performed quality tests (FFA, Soap Content, M&I, SMP, FAME, POV, Citric Acid) on edible oil products, ensuring adherence to food safety standards.",
    // desc1: "Conducted Line and Packaging Quality Departure Inspections.",
    // desc2: "Collaborated with QA team to document findings.",
    // desc3: "",
    // desc4: "",
    workdesc: [
      "Performed quality tests (FFA, Soap Content, M&I, SMP, FAME, POV, Citric Acid) on edible oil products, ensuring adherence to food safety standards.",
      "Conducted Line and Packaging Quality Departure Inspections.",
      "Collaborated with QA team to document findings."
    ],
  },
  {
    id: 3,
    type: "work",
    date: "26th May 2023 - Dec 2024",
    icon: <MdWork />,
    bckgrnd: true,
    title: "Global Exports ",
    subtitle: "MTO",
    // desc: "Optimized dyeing performance by analyzing real-time data.",
    // desc1: "Conducted quality control tests (Formic Acid, Acetic Acid, Caustic Soda purity; absorbency and solid content analysis), ensuring 100% compliance with industry standards.",
    // desc2: "",
    // desc3: "",
    // desc4: "",
    workdesc: [
      "Optimized dyeing performance by analyzing real-time data.",
      "Conducted quality control tests (Formic Acid, Acetic Acid, Caustic Soda purity; absorbency and solid content analysis), ensuring 100% compliance with industry standards."
    ],
  },
  {
    id: 4,
    type: "work",
    date: "Jan 2025 - Feb 2026",
    icon: <MdWork />,
    bckgrnd: true,
    title: "Global Exports ",
    subtitle: "Ass.Manager Processing",
    // desc: "Managed production costing for dyeing operations.",
    // desc1: "Planned and scheduled dyeing operations, ensuring on-time delivery.",
    // desc2: "Created comprehensive production performance reports.",
    // desc3: "",
    // desc4: "",
    workdesc: [
      "Managed production costing for dyeing operations.",
      "Planned and scheduled dyeing operations, ensuring on-time delivery.",
      "Created comprehensive production performance reports."
    ],
  },
  
];

// Certificate
export const certificate = [
  {
    id: 1,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "Skill Development Council",
    image: [sdc],
  },
  {
    id: 2,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "SDC MarkSheet",
    image: [sdc_ms],
  },
  {
    id: 3,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "Linux",
    image: [linux],
  },
  {
    id: 4,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "Agile Scrum",
    image: [agile],
  },
  // {
  //   id: 5,
  //   icon: <FaCertificate />,
  //   bckgrnd: false,
  //   title: "Graphic Design",
  //   image: [gd],
  // },
  {
    id: 5,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "CIT",
    image: [cit],
  },
  {
    id: 6,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "BBSYDP",
    image: [bbsydp],
  },
  {
    id: 7,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "ISO 9001",
    image: [iso],
  },
  {
    id: 8,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "HACCP VACCP TACCP",
    image: [h_v_t],
  },
  {
    id: 9,
    icon: <FaCertificate />,
    bckgrnd: false,
    title: "HACCP LEVEL 1",
    image: [haccp_1],
  },
];

// Projects

export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    desc: "Personal portfolio build using ReactJS.",
    stacks: [<SiReact />, <SiStyledcomponents />, <SiGithub />],
    source: "https://github.com/ahmedraza17260/react-portfolio",
    demo: "https://ahmedraza-portfolio.netlify.app/",
  },
  {
    id: 2,
    title: "Magic Portfolio",
    desc: "Personal portfolio build using NextJS.",
    stacks: [<SiReact />, <SiNextdotjs />, <SiStyledcomponents />, <SiTypescript />, <BsFiletypeScss />, <SiGithub />],
    source: "https://github.com/ahmedraza17260/magic-portfolio",
    demo: "https://m-ahmedraza-portfolio.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "Amazon Clone",
  //   desc: "Clone of famous E-comm site Amazon with basic functionalities signup/login using mail and purchasing product.",
  //   stacks: [<SiReact />, <SiCss3 />, <SiFirebase />, <SiMui />],
  //   source: "https://github.com/ahmedraza17260/amazon-clone",
  //   demo: "https://clone-76219.web.app/",
  // },

  // {
  //   id: 3,
  //   title: "Linkedin Clone",
  //   desc: "Linkedin Clone with React Javascript & Redux",
  //   stacks: [
  //     <SiReact />,
  //     <SiCss3 />,
  //     <SiFirebase />,
  //     <SiMui />,
  //     <SiRedux />,
  //   ],
  //   source: "https://github.com/ahmedraza17260/linkedin-clone",
  //   demo: "https://linkedin-clone-874a2.web.app/",
  // },
  // {
  //   id: 4,
  //   title: "Ahmed Raza Electronics",
  //   desc: "Ahmed Raza Electronics with React Javascript ",
  //   stacks: [<SiReact />, <SiStyledcomponents />, <SiFirebase />],
  //   source: "https://github.com/ahmedraza17260/ahmedrazaelectronics",
  //   demo: "https://ahmedrazaelectronics-17.web.app/",
  // },

  // {
  //   id: 5,
  //   title: "Ecommerce Shopping Basket",
  //   desc: "Ecommerce Shopping Basket using React and Redux Toolkit with TypeScript ",
  //   stacks: [
  //     <SiReact />,
  //     <SiStyledComponents />,
  //     <SiFirebase />,
  //     <SiRedux />,
  //     <SiTypescript />,
  //   ],
  //   source: "https://github.com/ahmedraza17260/shopping-basket",
  //   demo: "https://shopping-basket-raza-app.netlify.app/",
  // },
  // {
  //   id: 6,
  //   title: "Space X React App",
  //   desc: "Space X Client Application with React, TypeScript, Apollo Client 3, and SpaceX API using Test-Driven Development (TDD) and deployed as a PWA ",
  //   stacks: [
  //     <SiReact />,
  //     <SiStyledComponents />,
  //     <SiTypescript />,
  //     <SiApollographql />,
  //   ],
  //   source: "https://github.com/ahmedraza17260/spacex-launches-app",
  //   demo: "https://spaces-x-react-app.netlify.app/",
  // },
  // {
  //   id: 7,
  //   title: "Quiz App",
  //   desc: "Quiz App with React/TypeScript it should be a Progressive Web App (PWA) with Offline Capability and Push Notifications",
  //   stacks: [
  //     <SiReact />,
  //     <SiStyledComponents />,
  //     <SiFirebase />,
  //     <SiTypescript />,
  //     <IoLogoPwa />,
  //   ],
  //   source: "https://github.com/ahmedraza17260/quiz-app-pwa",
  //   demo: "https://react-quiz-pwa.web.app/",
  // },
  // {
  //   id: 8,
  //   title: "Expense Tracker",
  //   desc: "Expense Tracker App with React/TypeScript it should be a Progressive Web App (PWA) with Offline Capability and Push Notifications",
  //   stacks: [
  //     <SiReact />,
  //     <SiStyledComponents />,
  //     <SiFirebase />,
  //     <SiTypescript />,
  //     <IoLogoPwa />,
  //   ],
  //   source: "https://github.com/ahmedraza17260/expense-tracker-pwa",
  //   demo: "https://expense-tracker-pwa-2fee8.web.app/",
  // },
  // {
  //   id: 9,
  //   title: "OLX Clone",
  //   desc: "OLX Clone with React Javascript ",
  //   stacks: [<SiReact />, <SiStyledComponents />, <SiFirebase />],
  //   source: "https://github.com/ahmedraza17260/olx-clone",
  //   demo: "https://olx-clone-raza-app.netlify.app/",
  // },
  // {
  //   id: 10,
  //   title: "COVID-19 Tracker",
  //   desc: "Case tracker for covid-19 showing active cases, deaths & recovery for whole world, with graph & map representation.",
  //   stacks: [
  //     <SiReact />,
  //     <SiStyledComponents />,
  //     <SiFirebase />,
  //     <SiMui />,
  //   ],
  //   source: "https://github.com/ahmedraza17260/covid-19-raza-app",
  //   // "https://github.com/phoenixx1/website-clones/tree/master/covid-19-tracker",
  //   demo: "http://covid-19-raza-app.surge.sh/",
  // },
];
