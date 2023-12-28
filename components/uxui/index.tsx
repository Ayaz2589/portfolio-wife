"use client"

import React from 'react'
import { useSectionInView } from "@/hooks";
import { SectionHeading } from "@/components";

export default function UserExperience() {
  const { ref } = useSectionInView({ sectionName: "UX/UI", threshold: 0.1 });
  return (
    <section ref={ref} id="uxui" className="mb-28 max-w-[45rem] text-center leading-8 sm:leading-10 sm:mb-40 p-5 scroll-mt-28 sm:bg-gray-100/60 sm:rounded-2xl sm:shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading>UX/UI</SectionHeading>
            <p>
            I successfully completed an 8-week UX/UI immersive program at BrainStation, focusing on mastering the fundamentals of product design. The course covered key aspects, including user research, wireframing, prototyping, and usability testing. The hands-on and collaborative learning environment provided practical insights, equipping me with the skills to create user-centered digital experiences. This experience has not only enhanced my proficiency in UX/UI but has also prepared me for impactful contributions in the dynamic field of digital design.
            </p>
          </div>
          <button
            className="group flex items-center justify-center gap-2 h-[3rem] w-full bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-105 hover:bg-gray-950 active:scale-101 dark:bg-gray-800 disabled:scale-100 disabled:bg-opacity-65 mt-3"
          >
            View Case Study
          </button>
        </div>
      </div>
    </section>
  )
}
