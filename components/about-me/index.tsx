"use client";

import React from "react";
import { SectionHeading } from "@/components";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";

export default function AboutMe() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.75 });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:leading-10 sm:mb-40 p-5 scroll-mt-28 sm:bg-gray-100/60 sm:rounded-2xl sm:shadow-sm"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Management Information Systems</span>, I
        decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also knowledgable with TypeScript, Prisma and Material UI.
      </p>
      <p>
        During my tenture as a programmer I had the oportunity to work on large{" "}
        <span className="font-medium">distributed teams</span> as well as{" "}
        <span className="font-medium">smaller startup teams</span>. My work
        includes building backend services such as large idenity services as
        well as client side application components and flows.
      </p>
    </motion.section>
  );
}
