"use client";

import React, { useEffect } from "react";
import { SectionHeading, Project } from "@/components";
import { projectsData } from "@/lib";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/hooks";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
