import {
  Intro,
  SectionDivder,
  AboutMe,
  Projects,
  Skills,
  Experience,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:p-24">
      <Intro />
      <SectionDivder />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
