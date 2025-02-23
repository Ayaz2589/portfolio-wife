"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div>
      <div>
        <motion.div
          className="fixed -z-10 block rounded-full bg-[#a8e6cf] blur-[1rem] dark:bg-[#56ab91] sm:hidden"
          style={{
            left: "-10%",
            top: "75%",
            transform: "translate(-50%, -50%)",
            height: "30rem",
            width: "30rem",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed -z-20 block rounded-full bg-[#b3e5c8] blur-[0.5rem] sm:hidden"
          style={{
            left: "-18%",
            top: "60%",
            transform: "translate(-50%, -50%)",
            height: "35rem",
            width: "35rem",
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Desktop version: Multiple circles */}
      <div className="hidden sm:block">
        <motion.div
          className="fixed -z-10 rounded-full bg-[#a8e6cf] blur-[1rem] dark:bg-[#56ab91]"
          style={{
            left: "16%",
            top: "38%",
            height: "14rem",
            width: "14rem",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed -z-10 rounded-full bg-[#ddcff8] blur-[1rem] dark:bg-[#d3bfe6]"
          style={{
            left: "24%",
            top: "29%",
            transform: "translate(-50%, -40%)",
            height: "24rem",
            width: "24rem",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed -z-10 rounded-full bg-[#fbe2e3] blur-[1rem] dark:bg-[#d3a1a2]"
          style={{
            left: "38%",
            top: "16%",
            height: "31rem",
            width: "31rem",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed -z-10 rounded-full bg-[#ffe4e1] blur-[1rem] dark:bg-[#f08080]"
          style={{
            left: "43%",
            top: "47%",
            transform: "translate(-60%, -50%)",
            height: "22rem",
            width: "22rem",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed -z-10 rounded-full bg-[#e6e6fa] blur-[1rem] dark:bg-[#9370db]"
          style={{
            left: "60%",
            top: "33%",
            transform: "translate(-40%, -50%)",
            height: "19rem",
            width: "19rem",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed -z-10 rounded-full bg-[#fff8e1] blur-[1rem] dark:bg-[#ffe08d]"
          style={{
            left: "35%",
            top: "23%",
            height: "8rem",
            width: "8rem",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="fixed -z-10 rounded-full bg-[#e1f4ff] blur-[1rem] dark:bg-[#8dd5ff]"
          style={{
            left: "63%",
            top: "72%",
            transform: "translate(-40%, -50%)",
            height: "8rem",
            width: "8rem",
          }}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
