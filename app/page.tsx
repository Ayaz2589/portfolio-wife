import {
  Intro,
  SectionDivder,
  AboutMe,
  Projects,
  Skills,
  Experience,
  Contact,
  Footer,
  UserExperience
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:p-24 backdrop-blur-md">
      <Intro />
      <SectionDivder />
      <AboutMe />
      <Projects />
      <Skills />
      <Experience />
      <UserExperience />
      <Contact />
      <Footer />
    </main>
  );
}
