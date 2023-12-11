"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="flex items-center justify-center">
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
    </section>
  );
}
