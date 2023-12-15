import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    company: "Dev Bootcamp",
    location: "New York, NY",
    description:
      "I graduated after 6 months of studying. During the course I learned Javascript React and Ruby on Rails.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Front-End Developer Apprentice",
    company: "Calvin Klein",
    location: "New York, NY",
    description:
      "I worked as a front-end developer apprentice. I worked on the Calvin Klein website and the Calvin Klein Underwear website.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Web Developer",
    company: "The Bacon",
    location: "New York, NY",
    description:
      "I worked as a web developer. I worked on the frontend website and their backend Ruby on Rails API.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "Frontend Software Engineer",
    company: "Goldman Sachs",
    location: "New York, NY",
    description:
      "Developed the GSenarios securities dashboard using React, Redux, and ag-grid. Collaborated on UX design and contributed to the Delphi Inventory Management System for streamlined processes.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2020",
  },
  {
    title: "Fullstack Software Engineer",
    company: "K Health",
    location: "New York, NY",
    description:
      "Developed Medical History UI in React, integrated K Accounts Service v2 with Ping Identity, and revamped legacy accounts logic. Led planning for v3 of Accounts Service, optimized speed, and facilitated user migration. Provided key support in creating K Health's React component library. Gain insights in agile planning through shadowing a Technical Product Manager.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "UX/UI Course completed",
    company: "Brain Station",
    location: "New York, NY",
    description:
      "Completed an 8 Week immersive to learn the fundamentals of UX/UI design.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "The Dashboard",
    description:
      "The Dashboard showcases React and TypeScript's capabilities in a clean and maintainable codebase for a responsive and interactive user interface.",
    tags: ["React", "Material UI", "ReCharts", "AG-Grid", "JWT Auth", "Axios"],
    imageUrl: corpcommentImg,
    repository: "https://github.com/Ayaz2589/streaming-subscription-dashboard",
    link: "https://streaming-subscription-dashboard.vercel.app/dashboard",
  },
  {
    title: "Node Services",
    description:
      "The NodeJS backend powers 'The Dashboard' web app's authentication and data fetching, using MongoDB Atlas for user data storage.",
    tags: ["Node", "Express", "Bcrpyt", "JWT", "Mongo DB", "Mongoose"],
    imageUrl: rmtdevImg,
    repository: "https://github.com/Ayaz2589/app-backend-api",
    link: "app-backend-api-jet.vercel.app",
  },
  {
    title: "Portfolio",
    description:
      "User Portfolio that allows users to learn about my skills and experience, As well as contact me.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    repository: "https://github.com/Ayaz2589/portfolio",
    link: "https://portfolio-ayaz2589.vercel.app/",
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Material UI",
  "Chakra UI",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Storybook",
  "Framer Motion",
] as const;
