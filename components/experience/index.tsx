"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks";
import { experiencesData } from "@/lib";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Experience() {
  const { ref } = useSectionInView({ sectionName: "Experience" });
  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 text-center sm:mb-0 scroll-mt-28"
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute bg-gray-300 h-full border w-1 rounded-full"
            style={{ left: "49.9%" }}
          ></div>
          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
            <TimelineTick value={experiencesData[0].icon} />
            <TimelineCard value={experiencesData[0]} />
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={3}
          >
            <TimelineTick value={"2"} />
            <TimelineCard value={experiencesData[1]} />
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between items-center w-full right-timeline"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={5}
          >
            <TimelineTick value={"3"} />
            <TimelineCard value={experiencesData[0]} />
          </motion.div>

          <motion.div
            className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={7}
          >
            <TimelineTick value={"4"} />
            <TimelineCard value={experiencesData[0]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineTick({ value }: { value: any }) {
  return (
    <>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{value}</h1>
      </div>
    </>
  );
}

function TimelineCard({ value }: { value: any }) {
  return (
    <div className="order-1 bg-white border border-black/[0.1] rounded-xl w-5/12 px-6 py-4">
      <h3>{value.title}</h3>
      <p>{value.location}</p>
      <p>{value.date}</p>
      <p>{value.description}</p>
    </div>
  );
}
