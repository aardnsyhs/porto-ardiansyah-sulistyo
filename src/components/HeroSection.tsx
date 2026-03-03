import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import profilePhoto from "@/assets/optimized/profile-photo-400w.webp";
import { Download } from "lucide-react";
import TypingEffect from "./TypingEffect";
import ParticleBackground from "./ParticleBackground";
import OptimizedImage from "./OptimizedImage";
import { Link } from "react-router-dom";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

const splitLetters = (el: HTMLElement) => {
  const text = el.textContent ?? "";
  el.innerHTML = text
    .split("")
    .map((ch) =>
      ch === " "
        ? `<span class="letter-space" style="display:inline-block">&nbsp;</span>`
        : `<span class="letter" style="display:inline-block;opacity:0;transform:translateY(60px) rotate(8deg)">${ch}</span>`,
    )
    .join("");
  return el.querySelectorAll<HTMLElement>(".letter");
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      const avatar =
        containerRef.current?.querySelector<HTMLElement>(".hero-avatar");
      const heading =
        containerRef.current?.querySelector<HTMLElement>(".hero-heading");
      if (avatar) {
        avatar.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
      }
      if (heading) {
        heading.style.transform = `translate(${dx * -4}px, ${dy * -4}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return;

    const avatar = container.querySelector<HTMLElement>(".hero-avatar");
    const nameEl = nameRef.current;
    const subheading = container.querySelector<HTMLElement>(".hero-subheading");
    const body = container.querySelector<HTMLElement>(".hero-body");
    const buttons = container.querySelectorAll<HTMLElement>(".hero-btn");

    let letters: NodeListOf<HTMLElement> | null = null;
    if (nameEl) letters = splitLetters(nameEl);

    if (avatar) {
      avatar.style.opacity = "0";
      avatar.style.transform = "scale(0.5)";
    }
    if (subheading) {
      subheading.style.opacity = "0";
      subheading.style.transform = "translateY(25px)";
    }
    if (body) {
      body.style.opacity = "0";
      body.style.transform = "translateY(25px)";
    }
    buttons.forEach((b) => {
      b.style.opacity = "0";
      b.style.transform = "translateY(20px) scale(0.9)";
    });

    const tl = createTimeline({ defaults: { ease: "outExpo" } });

    tl.add(avatar, {
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 900,
      ease: "spring(1, 80, 12, 0)",
    })
      .add(
        letters,
        {
          opacity: [0, 1],
          translateY: [60, 0],
          rotate: [8, 0],
          duration: 600,
          delay: stagger(35, { from: "center" }),
          ease: "spring(1, 70, 14, 0)",
        },
        200,
      )
      .add(
        subheading,
        { opacity: [0, 1], translateY: [25, 0], duration: 600 },
        500,
      )
      .add(body, { opacity: [0, 1], translateY: [25, 0], duration: 600 }, 650)
      .add(
        buttons,
        {
          opacity: [0, 1],
          translateY: [20, 0],
          scale: [0.9, 1],
          duration: 500,
          delay: stagger(80),
        },
        800,
      );

    return () => {
      tl.pause();
    };
  }, []);

  const mag1 = useMagneticEffect(0.3);
  const mag2 = useMagneticEffect(0.3);
  const mag3 = useMagneticEffect(0.3);
  const mag4 = useMagneticEffect(0.3);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
      aria-label="Hero section - Ardiansyah Sulistyo Portfolio"
    >
      <ParticleBackground className="z-0" particleCount={60} speed={0.3} />
      <div className="container-portfolio relative z-10" ref={containerRef}>
        <div className="text-center space-y-8">
          <div className="hero-avatar">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-border shadow-lg">
              <OptimizedImage
                src={profilePhoto}
                alt="Professional headshot of Ardiansyah Sulistyo, Full Stack Web Developer"
                className="w-full h-full object-cover"
                priority
                width="160"
                height="160"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="portfolio-heading relative group hero-heading">
              <span className="relative" ref={nameRef}>
                Ardiansyah Sulistyo
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-700 group-hover:w-full" />
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 to-accent/20 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </span>
            </h1>
            <div className="portfolio-subheading text-muted-foreground hero-subheading">
              <TypingEffect
                texts={[
                  "Web Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Full Stack Developer",
                ]}
                speed={120}
                deleteSpeed={60}
                delayBetween={2500}
              />
            </div>
            <p className="portfolio-body max-w-2xl mx-auto hero-body">
              Passionate web developer with expertise in modern web
              technologies. Currently working at PT Eksam Digital Edukasi,
              crafting digital solutions that make a difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              ref={mag1}
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="portfolio-button-primary hover:text-white transition-colors duration-300 portfolio-button-focus hero-btn"
              aria-label="Navigate to portfolio section to view my projects"
            >
              View My Work
            </button>
            <button
              ref={mag2}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="portfolio-button-secondary portfolio-button-focus hero-btn"
              aria-label="Navigate to contact section to get in touch"
            >
              Get In Touch
            </button>
            <a
              ref={mag3}
              href="/cv.pdf"
              download
              className="portfolio-button-secondary portfolio-button-focus inline-flex items-center gap-2 hero-btn"
              aria-label="Download Ardiansyah Sulistyo's CV as PDF"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download CV
            </a>
            <Link
              ref={mag4}
              to="/freelance-web-developer-cimahi"
              className="portfolio-button-secondary portfolio-button-focus hero-btn"
              aria-label="View freelance web developer services in Cimahi"
            >
              Freelance Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
