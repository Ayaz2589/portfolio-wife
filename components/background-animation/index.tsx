"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div>
      <motion.div
        className="bg-[#ddcff8] fixed -z-10 left-[11rem] h-[31.25rem] w-[21.25rem] rounded-full blur-[3rem] dark:bg-[#d3bfe6]"
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="bg-[#ddcff8] fixed -z-10 left-[25rem] h-[24.25rem] w-[35.25rem] top-[15rem] rounded-full blur-[5rem] dark:bg-[#678cdb]"
        animate={{ rotate: -180 }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="bg-[#fbe2e3] fixed top-[0rem] -z-10 right-[11rem] h-[51.25rem] w-[31.25rem] rounded-full blur-[4rem] dark:bg-[#d3a1a2]"
        animate={{ rotate: 180 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      ></motion.div>
    </div>
  );
}
