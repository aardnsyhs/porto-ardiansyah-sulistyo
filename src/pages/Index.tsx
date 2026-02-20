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
import BrandingSection from "@/components/BrandingSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Analytics />
      <CommandPalette />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <BrandingSection />
        <SkillsSection />
        <StatsSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
