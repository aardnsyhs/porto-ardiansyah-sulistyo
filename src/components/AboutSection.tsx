import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";
import ScrambleHeading from "./ScrambleHeading";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const heading = section.querySelector<HTMLElement>(".about-heading");
    const divider = section.querySelector<HTMLElement>(".about-divider");
    const leftCol = section.querySelector<HTMLElement>(".about-left");
    const statCards = section.querySelectorAll<HTMLElement>(".about-stat-card");

    if (heading) {
      heading.style.opacity = "0";
      heading.style.transform = "translateY(30px)";
    }
    if (divider) {
      divider.style.opacity = "0";
      divider.style.transform = "scaleX(0)";
      divider.style.transformOrigin = "left";
    }
    if (leftCol) {
      leftCol.style.opacity = "0";
      leftCol.style.transform = "translateX(-40px)";
    }
    statCards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "scale(0.85) translateY(20px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animate(heading, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 700,
            ease: "outCubic",
          });
          animate(divider, {
            opacity: [0, 1],
            scaleX: [0, 1],
            duration: 600,
            delay: 200,
            ease: "outCubic",
          });
          animate(leftCol, {
            opacity: [0, 1],
            translateX: [-40, 0],
            duration: 700,
            delay: 300,
            ease: "outExpo",
          });
          animate(statCards, {
            opacity: [0, 1],
            scale: [0.85, 1],
            translateY: [20, 0],
            duration: 600,
            delay: stagger(100, { start: 500 }),
            ease: "outBack(1.4)",
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
      id="about"
      className="section-padding bg-surface"
      aria-labelledby="about-heading"
      ref={sectionRef}
    >
      <div className="container-portfolio">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <ScrambleHeading
              as="h2"
              text="About Me"
              id="about-heading"
              className="portfolio-subheading mb-4 about-heading"
              duration={750}
            />
            <div className="w-20 h-1 bg-primary mx-auto about-divider"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 about-left">
              <h3 className="text-2xl font-semibold">
                Web Developer with a passion for clean code
              </h3>
              <div className="space-y-4 portfolio-body">
                <p>
                  I'm a graduate of SMKN 2 Cimahi with a major in Software
                  Engineering (RPL). My journey in web development started
                  during my studies, where I discovered my passion for creating
                  digital solutions that solve real-world problems.
                </p>
                <p>
                  I&apos;m based in Cimahi, West Java, Indonesia, and open to
                  remote collaboration across Indonesia.
                </p>
                <p>
                  I completed a 5-month internship at PT Javan Cipta Solusi,
                  where I honed my skills in full-stack web development.
                  Currently, I'm working as a Web Developer at PT Eksam Digital
                  Edukasi, where I continue to grow and contribute to meaningful
                  projects in the education technology sector.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying
                  up-to-date with the latest web technologies. My goal is to
                  create user-centric applications that provide exceptional
                  experiences while solving complex business challenges.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="portfolio-card text-center about-stat-card">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="portfolio-card text-center about-stat-card">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="portfolio-card text-center about-stat-card">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
              <div className="portfolio-card text-center about-stat-card">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
