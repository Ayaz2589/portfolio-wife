"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/picture.JPG"
            alt="Ayaz's profile picture"
            height={192}
            width={192}
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
          />
        </motion.div>

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Ayaz.</span> I'm a{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span className="font-bold">7 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React</span>.
        </motion.h1>
      </div>
    </section>
  );
}
