import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-amber-400 selection:text-black">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      {/* <Projects /> */}
      <Projects></Projects>
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}