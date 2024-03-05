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
    name: "UX/UI",
    hash: "#uxui",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Jr. Frontend Web Developer",
    company: "Greensbury Market",
    location: "New York, NY",
    description:
      "Refined e-commerce grocery store frontend with a focus on JavaScript and Shopify integration. Specialized in enhancing styling and optimizing checkout functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2016 - March 2017",
  },
  {
    title: "Frontend Web Developer",
    company: "The Bacon",
    location: "New York, NY",
    description:
      "Contributed to React frontend development for a same-day service platform. Developed diverse features such as task management and payment processing. Collaborated with an off-site team to assist in the construction of the React Native platform.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2017 - July 2018",
  },
  {
    title: "Frontend Software Engineer",
    company: "Goldman Sachs",
    location: "New York, NY",
    description:
      "Implemented a securities dashboard utilizing React and Redux, with a focus on performance and optimization. Collaborated with the UX/UI team to enhance various dashboard tools for improved usability. Designed and developed an Inventory Management System using a frontend micro-framework.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2018 - October 2020",
  },
  {
    title: "Fullstack Software Engineer",
    company: "K Health",
    location: "New York, NY",
    description:
      "Developed a React-based questionnaire service to match users effectively with suitable physicians. Prioritized accurate collection of medical history and symptoms during user signup. Managed updates to the identity service and migration of the user database to an external partner. Contributed to the development of a component library. Additionally, served as an adjunct scrum master, leading sprint planning, grooming, and retrospective sessions.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2020 - June 2023",
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
