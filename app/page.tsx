import {
  Intro,
  SectionDivder,
  AboutMe,
  Projects,
  Skills,
  Experience,
  Contact,
  Footer,
  Header,
} from "@/components";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <Header />
      </header>
      <main className="flex flex-col items-center pt-24 backdrop-blur-md md:p-24">
        <Intro />
        <SectionDivder />
        <AboutMe />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
