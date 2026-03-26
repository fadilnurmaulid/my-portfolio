import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/ui/Navbar";
import MusicPlayer from "@/components/ui/MusicPlayer";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Activities from "@/components/sections/Activities";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Activities />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}