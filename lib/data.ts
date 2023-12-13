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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer Apprentice",
    company: "Calvin Klein",
    location: "New York, NY",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Web Developer",
    company: "The Bacon",
    location: "New York, NY",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2017 - 2018",
  },
  {
    title: "Frontend Software Engineer",
    company: "Goldman Sachs",
    location: "New York, NY",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2018 - 2020",
  },
  {
    title: "Fullstack Software Engineer",
    company: "K Health",
    location: "New York, NY",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "The Dashboard",
    description:
      "The Dashboard showcases React and TypeScript's capabilities in a clean and maintainable codebase for a responsive and interactive user interface.",
    tags: ["React", "Material UI", "ReCharts", "AG-Grid", "JWT Auth", "Axios"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Node Services",
    description:
      "The NodeJS backend powers 'The Dashboard' web app's authentication and data fetching, using MongoDB Atlas for user data storage.",
    tags: ["Node", "Express", "Bcrpyt", "JWT", "Mongo DB", "Mongoose"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Portfolio",
    description:
      "User Portfolio that allows users to learn about my skills and experience, As well as contact me.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
