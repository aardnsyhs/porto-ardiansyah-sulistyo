import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Handshake, MessageCircle, Rocket } from "lucide-react";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";
import ScrambleHeading from "./ScrambleHeading";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "ardiansyahsulistyo@gmail.com",
      link: "mailto:ardiansyahsulistyo@gmail.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
      label: "WhatsApp",
      value: "+62 895-4160-79900",
      link: "https://wa.me/62895416079900",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/aardnsyhs",
      link: "https://github.com/aardnsyhs",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Ardiansyah Sulistyo",
      link: "https://linkedin.com/in/ardiansyah-sulistyo",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const heading = section.querySelector<HTMLElement>(".contact-heading");
    const cards = section.querySelectorAll<HTMLElement>(".contact-card");
    const cta = section.querySelector<HTMLElement>(".contact-cta");
    const buttons = section.querySelectorAll<HTMLElement>(".contact-btn");

    if (heading) {
      heading.style.opacity = "0";
      heading.style.transform = "translateY(30px)";
    }
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(50px) scale(0.9)";
    });
    if (cta) {
      cta.style.opacity = "0";
      cta.style.transform = "translateY(30px)";
    }
    buttons.forEach((b) => {
      b.style.opacity = "0";
      b.style.transform = "scale(0.9)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animate(heading, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            ease: "outCubic",
          });

          animate(cards, {
            opacity: [0, 1],
            translateY: [50, 0],
            scale: [0.9, 1],
            duration: 650,
            delay: stagger(150, { start: 200 }),
            ease: "spring(1, 80, 10, 0)",
          });

          animate(cta, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            delay: 750,
            ease: "outCubic",
          });

          animate(buttons, {
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 500,
            delay: stagger(100, { start: 900 }),
            ease: "spring(1, 90, 12, 0)",
          });
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      className="section-padding bg-surface"
      ref={sectionRef}
    >
      <div className="container-portfolio">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 contact-heading">
            <ScrambleHeading
              as="h2"
              text="Get In Touch"
              className="portfolio-subheading mb-4"
              duration={700}
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="portfolio-body max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and
              projects. Let's connect and discuss how we can work together.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact) => (
              <a
                key={contact.label}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  contact.link.startsWith("http") ? "noopener noreferrer" : ""
                }
                className="contact-card portfolio-card text-center group hover:border-primary"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{contact.label}</h3>
                    <p className="text-muted-foreground text-sm break-all">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center contact-cta">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center leading-tight">
                <span className="md:hidden">
                  Let&apos;s build something great{" "}
                  <span className="inline-flex items-center gap-2 whitespace-nowrap align-middle">
                    together <Rocket className="w-5 h-5" />
                  </span>
                </span>
                <span className="hidden md:inline-flex items-center gap-3 align-middle">
                  <span>Let&apos;s build something great together</span>
                  <Rocket className="w-6 h-6" />
                </span>
              </h3>
              <p className="portfolio-body max-w-xl mx-auto text-center leading-relaxed">
                Got an exciting project or just want to chat about tech? I'm
                always up for a good conversation and new challenges. Coffee's
                on me if you're local!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:ardiansyahsulistyo@gmail.com"
                  className="portfolio-button-primary group contact-btn"
                >
                  <span className="group-hover:text-white transition-colors duration-300">
                    Let's Start the Conversation
                  </span>
                  <span className="ml-2 group-hover:translate-x-1 group-hover:text-white transition-transform duration-300">
                    <MessageCircle size={12} />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ardiansyah-sulistyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-button-secondary group flex items-center contact-btn"
                >
                  <span>Connect & Network</span>
                  <span className="ml-2 group-hover:scale-110 transition-transform duration-300">
                    <Handshake size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
