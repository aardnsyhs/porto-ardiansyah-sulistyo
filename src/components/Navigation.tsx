import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import EasterEgg from "./EasterEgg";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ticking = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);

        const scrollPosition = window.scrollY + 100;
        for (let i = navItems.length - 1; i >= 0; i--) {
          const section = document.getElementById(navItems[i].id);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container-portfolio">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl tracking-tight">
            <EasterEgg>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition-colors duration-300"
              >
                <span className="text-primary">A</span>rdiansyah
              </button>
            </EasterEgg>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "portfolio-link text-sm font-medium transition-colors duration-300 focus-ring rounded",
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  aria-label={`Navigate to ${item.label} section`}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            id="mobile-nav-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="container-portfolio py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-left py-2 text-base font-medium transition-colors duration-300",
                      activeSection === item.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
