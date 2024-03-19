import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import StarsCanvas from "./components/StarBackground";
import Skills from './components/SkillsSection';
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="z-50">
        <Navbar />
        <div className="container mx-auto mt-24 px-12 py-3">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <Skills />
          <ProjectsSection />
          <EmailSection />
        </div>
      </div>
      <Footer />
      <StarsCanvas />
    </main>
  );
}
