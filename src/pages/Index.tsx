import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import Analytics from "@/components/Analytics";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Analytics />
        <CommandPalette />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <StatsSection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
