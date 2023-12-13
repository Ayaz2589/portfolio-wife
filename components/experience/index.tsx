"use client";

import React from "react";
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

const leftAlign =
  "mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline";

const rightAlign =
  "mb-8 flex justify-between items-center w-full right-timeline";

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
          {experiencesData.map((data, index) => (
            <motion.div
              key={index}
              className={index % 2 === 0 ? leftAlign : rightAlign}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <TimelineTick value={data.icon} />
              <TimelineCard value={data} />
            </motion.div>
          ))}
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
