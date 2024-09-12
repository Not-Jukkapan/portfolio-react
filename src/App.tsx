import { useRef } from "react";
import AboutMeSection from "./components/AboutMeSection";
// import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
// import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillSection";
import TimeLinePage from "./components/TimelinePage";

export default function App() {
  // Create references for each section
  const skillsRef = useRef<HTMLDivElement>(null);

  const journeyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const contactMe = () => {
    window.alert("Contact me");
  }
  return <>
    <div>
      <HeroSection

        scrollToJourney={() => scrollToSection(journeyRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToContact={() => contactMe()}
      />
      <div ref={aboutRef}>
        <AboutMeSection />
      </div>

      <div ref={skillsRef}>
        <SkillsSection />
      </div>

      <div ref={journeyRef}>
        <TimeLinePage />
      </div>


      <Footer />

    </div>
  </>
}
