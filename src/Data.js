import {
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiBootstrap,
  SiC,
  SiGit,
  SiGithub,
  SiCss,
  SiReact, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiFramer, SiNodedotjs, SiTypescript,SiVercel, 
  SiNetlify,
  SiNetlify as FcProcess, // Fallback alias if missing
  SiNetlify as FcPlanner  // Fallback alias if missing
} from "react-icons/si";

import { DiMysql } from "react-icons/di";
import { AiOutlineAudit } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";
import { GiTestTubes } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { MdAccountBalance, MdSchool, MdWork } from "react-icons/md";
import { FaSchool, FaCertificate } from "react-icons/fa";

// Next.js static asset routes (Images now live inside public/images/)
const linux = "/images/LINUX.jpg";
const bbsydp = "/images/BBSYDP.jpg";
const cit = "/images/NOOR.jpg";
const sdc = "/images/SDC.jpg";
const agile = "/images/AGILESCRUM.jpg";
const iso = "/images/ISO.jpg";
const haccp_1 = "/images/HACCP Level 1.png";
const h_v_t = "/images/HACCP,VACCP,TACCP.jpg";
const Food_Labeling = "/images/Food Labeling.png";
const Food_Fraud_Preventive_Approach = "/images/Food_Fraud_Preventive_Approach.png";

// HeroSection Data
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
export const resumeURL = "https://drive.google.com/file/d/1QxReNRgc34TyhY5i9SUIyozU9SdgbGKy/view";

// Skills Sections
export const Quality = [
  { icon: <SlChemistry className="icon" />, name: "Laboratory Skill" },
  { icon: <SlChemistry className="icon" />, name: "Good Laboratory Practices (GLP)" },
  { icon: <GiTestTubes className="icon" />, name: "Quality Control" },
  { icon: <SlChemistry className="icon" />, name: "Analytical Skill" },
  { icon: <FiPackage className="icon" />, name: "Quality Assurance" },
  { icon: <AiOutlineAudit className="icon" />, name: "Internal Audits" }
];

export const Dyeing = [
  { icon: <FcPlanner className="icon" />, name: "Dyeing Planning" },
  { icon: <MdAccountBalance className="icon" />, name: "Dyeing Costing" },
  { icon: <FcProcess className="icon" />, name: "Process Control" },
  { icon: <FiPackage className="icon" />, name: "Quality Assurance" },
  { icon: <GiTestTubes className="icon" />, name: "Quality Control" }
];

export const Languages = [
  { icon: <SiC className="icon" />, name: "C" },
  { icon: <TbBrandCSharp className="icon" />, name: "C#" },
  { icon: <SiJavascript className="icon" />, name: "Javascript" },
  { icon: <SiTypescript className="icon" />, name: "Typescript" }
];

export const FrontendTools = [
  { icon: <SiHtml5 className="icon" />, name: "HTML5" },
  { icon: <SiCss className="icon" />, name: "Css" },
  { icon: <SiReact className="icon" />, name: "ReactJS" },
  { icon: <SiStyledcomponents className="icon" />, name: "Styled-components" },
  { icon: <SiBootstrap className="icon" />, name: "Bootstrap" }
];

export const BackendTools = [
  { icon: <SiFirebase className="icon" />, name: "Firebase" },
  { icon: <DiMysql className="icon" />, name: "MySQL" },
  { icon: <SiGit className="icon" />, name: "Git" },
  { icon: <SiNetlify className="icon" />, name: "Netlify" }
];

// Education Timeline Data
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
    workdesc: []
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
    workdesc: []
  },
  {
    id: 3,
    type: "education",
    date: "January 2019 - 2021",
    icon: <MdSchool />,
    bckgrnd: false,
    title: "Karachi University",
    subtitle: "BSC. HONS. APPLIED CHEMISTRY",
    desc: "Obtained: 58.31 %",
    workdesc: []
  },
  {
    id: 4,
    type: "education",
    date: "January 2022 - 2023",
    icon: <MdSchool />,
    bckgrnd: false,
    title: "Karachi University",
    subtitle: "MSC. HONS. APPLIED CHEMISTRY",
    desc: "Obtained: 55.10 %",
    workdesc: []
  }
];

// Professional Work Experience Data
export const work = [
  {
    id: 1,
    type: "work",
    date: "May 2017 - June 2018",
    icon: <MdWork />,
    bckgrnd: true,
    title: "Ayaan Corporation",
    subtitle: "Sale Supervisor",
    workdesc: [
      "Managed daily commercial operations, overseeing client ledger accounting, processing accurate invoicing, and maintaining systematic financial records.",
      "Compiled and structured comprehensive daily and monthly sales performance reports to evaluate target achievements and pipeline health.",
      "Actively studied and implemented modern sales processes and corporate negotiation strategies to improve B2B client acquisition and retention rates.",
      "Collaborated directly with upper management to streamline regional sales operations, analyze performance metrics, and execute strategic growth initiatives to consistently meet corporate revenue targets."
    ]
  },
  {
    id: 2,
    type: "work",
    date: "20th January 2023 - 3rd March 2023",
    icon: <MdWork />,
    bckgrnd: true,
    title: "Dalda Foods Ltd.",
    subtitle: "Six Weeks Internship at Quality Department.",
    workdesc: [
      "Conducted daily floor visits, line inspections, and Finished Goods Stores (FGS) audits to verify quality stock, storage practices, and packaging integrity.",
      "Performed analytical food safety testing (FFA, Soap Content, POV, SMP) on edible oil products, collaborating with the core QA team to document findings against food safety benchmarks."
    ]
  },
  {
    id: 3,
    type: "work",
    date: "26th May 2023 - Dec 2024",
    icon: <MdWork />,
    bckgrnd: true,
    title: "Global Exports Apparel Experts",
    subtitle: "MTO",
    workdesc: [
      "Conducted analytical quality control testing and chemical purity analysis (Formic Acid, Acetic Acid, Caustic Soda), ensuring 100% compliance with raw material specifications and standard operating procedures.",
      "Provided basic training to floor staff on process controls, workplace organization (5S), and operational safety standards."
    ]
  },
  {
    id: 4,
    type: "work",
    date: "Jan 2025 - Feb 2026",
    icon: <MdWork />,
    bckgrnd: true,
    title: "Global Exports Apparel Experts",
    subtitle: "Ass.Manager Processing",
    workdesc: [
      "Coordinated extensively with cross-functional units (Production, Supply Chain, Operation, and Engineering) to optimize dyeing schedules, monitor costing parameters, and ensure on-time delivery.",
      "Analyze process system gaps using real-time data, compiling comprehensive production performance and trend reports to drive efficiency and reduce chemical waste."
    ]
  },
  {
    id: 5,
    type: "work",
    date: "Feb 2026 - Present",
    icon: <MdWork />,
    bckgrnd: true,
    title: "A&Z AGRO INDUSTRIES PVT LTD (Shafaq Cooking Oil)",
    subtitle: "Shift Lab Chemist",
    workdesc: [
      "Oversee daily activities of the QA laboratory, managing consumable chemical inventory, and ensuring calibration verification tracking, and documentation of analytical equipment.",
      "Perform daily floor visits to verify implemented Quality Assurance (QA) checks, cross-verify laboratory reports, and enforce strict GMP, hygiene, and safety compliance across filling and packing lines.",
      "Perform trend analysis and compile comprehensive reports on GMP compliance, Process Controls, and Non-Conformances (NCs) to identify operational system gaps and propose solutions for continuous improvement.",
      "Manage and support shift-based laboratory analysts and line inspectors, ensuring seamless analytical testing (FFA, Moisture, SMP, POV, Color) of raw, in-process, and finished edible oil products.",
      "Coordinate with refinery and production stakeholders to resolve batch deviations and assist directly in maintaining documentation traceability for internal and external regulatory audits."
    ]
  }
];

// Certificates UI Grid Data
export const certificate = [
  { id: 1, icon: <FaCertificate />, bckgrnd: false, title: "Skill Development Council", image: [sdc] },
  { id: 2, icon: <FaCertificate />, bckgrnd: false, title: "ISO 9001", image: [iso] },
  { id: 3, icon: <FaCertificate />, bckgrnd: false, title: "HACCP VACCP TACCP", image: [h_v_t] },
  { id: 4, icon: <FaCertificate />, bckgrnd: false, title: "HACCP LEVEL 1", image: [haccp_1] },
  { id: 5, icon: <FaCertificate />, bckgrnd: false, title: "Food Labeling", image: [Food_Labeling] },
  { id: 6, icon: <FaCertificate />, bckgrnd: false, title: "Food Fraud Preventive Approach", image: [Food_Fraud_Preventive_Approach] },
  { id: 7, icon: <FaCertificate />, bckgrnd: false, title: "Linux", image: [linux] },
  { id: 8, icon: <FaCertificate />, bckgrnd: false, title: "Agile Scrum", image: [agile] },
  { id: 9, icon: <FaCertificate />, bckgrnd: false, title: "CIT", image: [cit] },
  { id: 10, icon: <FaCertificate />, bckgrnd: false, title: "BBSYDP", image: [bbsydp] }
];

// Projects Grid Data
export const projects = [
  {
    id: "b2b-portal",
    title: "B2B Trading Portal Template",
    desc: "A highly optimized, premium B2B e-commerce and trading portal built for seamless supplier-to-buyer transactions.",
    source: "https://ahmedraza17260.gumroad.com/l/epoaay",
    demo: "https://b2b-trading-portal.vercel.app/",
    stacks: [<SiNextdotjs />, <SiNodedotjs />, <SiTailwindcss />, <SiTypescript />, <SiVercel/>]
  },
  {
    id: "qc-console",
    title: "Refinery QC Console",
    desc: "A specialized full-stack SaaS platform engineered for automated laboratory calculations and industrial quality control.",
    source: "#",
    demo: "https://oil-quality-guardian.lovable.app/",
    stacks: [<SiReact/>, <SiNodedotjs />, <SiTailwindcss />, <SiTypescript />]
  },
  {
    id: "email-gen",
    title: "Email Signature Generator",
    desc: "Premium responsive email signature generator with real-time preview and one-click HTML copy-to-clipboard engine.",
    source: "#",
    demo: "https://email-signaturegenerator.vercel.app/",
    stacks: [<SiNodedotjs />, <SiTailwindcss />, <SiTypescript />, <SiVercel/>]
  },
  {
    id: "raza-portfolio-next",
  title: "Ahmed Raza | Personal Portfolio",
  desc: "Personal portfolio website migrated to Next.js for optimized performance and SEO. Features professional project showcases, resume integration, and a responsive dark/light mode interface.",
  source: "https://github.com/ahmedraza17260/raza-portfolio",
  demo: "https://ahmedrazaportfolio.netlify.app/",
  stacks: [<SiNextdotjs />, <SiReact />, <SiStyledcomponents />, <SiFramer />, <SiNetlify/>]
  },
];