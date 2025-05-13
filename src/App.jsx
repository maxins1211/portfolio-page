import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import { BackgroundLines } from "./components/ui/background-lines";
import { useState, useEffect } from "react";
function App() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <BackgroundLines className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        <Footer />
      </BackgroundLines>
    </>
  );
}

export default App;
