import React from "react";
import { SectionHeading, Project } from "@/components";
import { projectsData } from "@/lib";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
