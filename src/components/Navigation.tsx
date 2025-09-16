import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container-portfolio">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl tracking-tight">
            <span className="text-primary">A</span>rdiansyah
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'portfolio-link text-sm font-medium transition-colors duration-300',
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-foreground transition-all duration-300"></span>
              <span className="w-full h-0.5 bg-foreground transition-all duration-300"></span>
              <span className="w-full h-0.5 bg-foreground transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;