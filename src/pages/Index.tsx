import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import StatsSection from '@/components/StatsSection';
import ExperienceSection from '@/components/ExperienceSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import CustomCursor from '@/components/CustomCursor';
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <CustomCursor />
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
        <CommandPalette />
      </div>
    </ThemeProvider>
  );
};

export default Index;