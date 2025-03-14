"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  imageUrl?: string;
};

export default function Project({ title, imageUrl }: ProjectProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleClick = () => {
    console.log("Card clicked");
    // Delay navigation for 300ms so the tap animation can fully play out
    setTimeout(() => {
      router.push("/projects/ysl");
    }, 300);
  };

  return (
    <motion.div
      ref={ref}
      style={{ opacity: scrollOpacity }}
      className="mb-3 cursor-pointer last:mb-0 sm:mb-8"
    >
      <motion.div
        onClick={handleClick}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2, ease: "easeIn" },
        }}
        whileTap={{
          scale: 0.85,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        className="relative m-auto h-[26rem] w-[40rem] max-w-full overflow-hidden rounded-xl bg-gray-100/60 shadow-sm transition"
      >
        <Image
          src={
            imageUrl ||
            "https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/1.JPG"
          }
          alt="Project Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20" />
      </motion.div>
    </motion.div>
  );
}
