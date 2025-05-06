import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Project section */}
      <ProjectSection />
      {/* Skill section */}
      <SkillSection />
      {/* About me section */}
      <AboutMe />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
