import {
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiStyledComponents,
  SiBootstrap,
  SiPostman,
  SiC,
  SiGit,
  SiMongodb,
  SiHeroku,
  SiRedux,
  SiGithub,
  SiTypescript,
  SiNextDotJs,
  SiApollographql,
} from "react-icons/si";
import { IoLogoPwa } from "react-icons/io5";

import { DiMysql, DiSass } from "react-icons/di";
import { FaNode } from "react-icons/fa";

import { FaSchool } from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";

import { SiMaterialUi, SiNodeRed } from "react-icons/si";

// HeroSection

export const Name = "Ahmed Raza";

export const MainSkills = [
  "a Web Developer💻",
  2000,
  "a Frontend Developer💻",
  2000,
];

export const githubURL = "https://github.com/ahmedraza17260";

export const linkedinURL = "https://www.linkedin.com/in/ahmed-raza-17260a/";

export const mailtoURL = "mailto:ahmedraza17260@gmail.com";

export const fbURL = "https://www.facebook.com/ahmedraza1626";

export const instagramURL = "https://www.instagram.com/ahmedraza17260/";

export const twitterURL = "https://twitter.com/AhmedRaza17260";

export const resumeURL =
  "https://drive.google.com/file/d/1fb9mK1l6KILIsaLiy1u16dvx3UU_QqTf/view?usp=sharing";
// "https://drive.google.com/file/d/1a8OEERo6VZbneOW52PRN19rJ34k89_ZI/view?usp=sharing";

// Skills

export const Languages = [
  {
    icon: <SiC className="icon" />,
    name: "C",
  },
  {
    icon: <SiCsharp className="icon" />,
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
    icon: <SiNextDotJs className="icon" />,
    name: "NextJS",
  },
  {
    icon: <SiStyledComponents className="icon" />,
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
    date: "January 2019 - Continue",
    icon: <MdSchool />,
    bckgrnd: false,
    title: "Karachi University",
    subtitle: "BSC. APPLIED CHEMISTRY ",
    desc: "Continue",
    workdesc: [],
  },
  // {
  //   id: 4,
  //   type: "work",
  //   date: "May 2020 - June 2020",
  //   icon: <MdWork />,
  //   bckgrnd: true,
  //   title: "SmartBridge Educational Services Pvt. Ltd. Hyderabad, Telangana",
  //   subtitle: "Internship",
  //   desc: "Project Internship",
  //   workdesc: [
  //     "Used IBM Watson to write the ML code.",
  //     "NodeRed to deploy the application.",
  //   ],
  // },
];

// Projects

export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    desc: "Personal portfolio build using ReactJS.",
    stacks: [<SiReact />, <SiStyledComponents />, <SiGithub />],
    source: "https://github.com/ahmedraza17260/react-portfolio",
    demo: "https://ahmedraza-portfolio.netlify.app/",
  },
  {
    id: 2,
    title: "Amazon Clone",
    desc: "Clone of famous E-comm site Amazon with basic functionalities signup/login using mail and purchasing product.",
    stacks: [<SiReact />, <SiCss3 />, <SiFirebase />, <SiMaterialUi />],
    source: "https://github.com/ahmedraza17260/amazon-clone",
    demo: "https://clone-76219.web.app/",
  },

  {
    id: 3,
    title: "Linkedin Clone",
    desc: "Linkedin Clone with React Javascript & Redux",
    stacks: [
      <SiReact />,
      <SiCss3 />,
      <SiFirebase />,
      <SiMaterialUi />,
      <SiRedux />,
    ],
    source: "https://github.com/ahmedraza17260/linkedin-clone",
    demo: "https://linkedin-clone-874a2.web.app/",
  },
  {
    id: 4,
    title: "Ahmed Raza Electronics",
    desc: "Ahmed Raza Electronics with React Javascript ",
    stacks: [<SiReact />, <SiStyledComponents />, <SiFirebase />],
    source: "https://github.com/ahmedraza17260/ahmedrazaelectronics",
    demo: "https://ahmedrazaelectronics-17.web.app/",
  },
  {
    id: 5,
    title: "Ecommerce Shopping Basket",
    desc: "Ecommerce Shopping Basket using React and Redux Toolkit with TypeScript ",
    stacks: [
      <SiReact />,
      <SiStyledComponents />,
      <SiFirebase />,
      <SiRedux />,
      <SiTypescript />,
    ],
    source: "https://github.com/ahmedraza17260/shopping-basket",
    demo: "https://shopping-basket-raza-app.netlify.app/",
  },
  {
    id: 6,
    title: "Space X React App",
    desc: "Space X Client Application with React, TypeScript, Apollo Client 3, and SpaceX API using Test-Driven Development (TDD) and deployed as a PWA ",
    stacks: [
      <SiReact />,
      <SiStyledComponents />,
      <SiTypescript />,
      <SiApollographql />,
    ],
    source: "https://github.com/ahmedraza17260/spacex-launches-app",
    demo: "https://spaces-x-react-app.netlify.app/",
  },
  {
    id: 7,
    title: "Quiz App",
    desc: "Quiz App with React/TypeScript it should be a Progressive Web App (PWA) with Offline Capability and Push Notifications",
    stacks: [
      <SiReact />,
      <SiStyledComponents />,
      <SiFirebase />,
      <SiTypescript />,
      <IoLogoPwa />,
    ],
    source: "https://github.com/ahmedraza17260/quiz-app-pwa",
    demo: "https://react-quiz-pwa.web.app/",
  },
  {
    id: 8,
    title: "Expense Tracker",
    desc: "Expense Tracker App with React/TypeScript it should be a Progressive Web App (PWA) with Offline Capability and Push Notifications",
    stacks: [
      <SiReact />,
      <SiStyledComponents />,
      <SiFirebase />,
      <SiTypescript />,
      <IoLogoPwa />,
    ],
    source: "https://github.com/ahmedraza17260/expense-tracker-pwa",
    demo: "https://expense-tracker-pwa-2fee8.web.app/",
  },
  {
    id: 9,
    title: "OLX Clone",
    desc: "OLX Clone with React Javascript ",
    stacks: [<SiReact />, <SiStyledComponents />, <SiFirebase />],
    source: "https://github.com/ahmedraza17260/olx-clone",
    demo: "https://olx-clone-raza-app.netlify.app/",
  },
  {
    id: 10,
    title: "COVID-19 Tracker",
    desc: "Case tracker for covid-19 showing active cases, deaths & recovery for whole world, with graph & map representation.",
    stacks: [
      <SiReact />,
      <SiStyledComponents />,
      <SiFirebase />,
      <SiMaterialUi />,
    ],
    source: "https://github.com/ahmedraza17260/covid-19-raza-app",
    // "https://github.com/phoenixx1/website-clones/tree/master/covid-19-tracker",
    demo: "http://covid-19-raza-app.surge.sh/",
  },
];