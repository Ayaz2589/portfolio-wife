"use client";

import React from "react";
import { SectionHeading } from "@/components";
import { useSectionInView } from "@/hooks";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact" });
  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(95%,38rem)] mt-28"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-center">
        Please contact me directly at{" "}
        <a href="mailto:ayaz2589@gmail.com" className="underline">
          ayaz2589@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Your mail"
          className="h-14 rounded-lg borderBlack p-4"
        />
        <textarea
          placeholder="Your Message"
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:border-none"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 trasition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </section>
  );
}
