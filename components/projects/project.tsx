"use client";

import React, { useRef, useState } from "react";
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

  // State to control the flip
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    // Trigger the flip animation
    setFlipped(true);
    console.log("Card clicked");
  };

  // When the flip animation completes and the card is flipped, navigate to /project
  const handleAnimationComplete = () => {
    if (flipped) {
      router.push("/projects/ysl");
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ opacity: scrollOpacity, perspective: 1000 }}
      className="mb-3 cursor-pointer last:mb-0 sm:mb-8"
    >
      <motion.div
        onClick={handleClick}
        animate={
          flipped ? { rotateY: 180, scale: 1.8 } : { rotateY: 0, scale: 1 }
        }
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        onAnimationComplete={handleAnimationComplete}
        style={{ transformStyle: "preserve-3d" }}
        className="relative m-auto h-[26rem] w-[40rem] max-w-full overflow-hidden rounded-xl bg-gray-100/60 shadow-sm transition"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          animate={{ opacity: flipped ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={
              imageUrl ||
              "https://ayaz2589-images.s3.us-east-1.amazonaws.com/tasnuva/portfolio-site/projects/ysl/1.JPG"
            }
            alt="Front Face Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-20" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
