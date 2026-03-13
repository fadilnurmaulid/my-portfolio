import AnimatedBackground from "@/components/background/AnimatedBackground"
import Hero from "@/components/hero/Hero"
import About from "@/components/sections/About"
import Activities from "@/components/sections/Activities"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Certifications from "@/components/sections/Certifications"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/ui/Footer"

export default function Home() {
  return (
    <main>

      <AnimatedBackground/>

      <Hero/>

      <About/>

      <Activities/>

      <Projects/>

      <Skills/>

      <Certifications/>

      <Contact/>

      <Footer/>

    </main>
  )
}