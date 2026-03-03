import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import {
  Code2,
  Palette,
  Zap,
  Cpu,
  Server,
  Database,
  GitBranch,
  Box,
  Globe,
  Layout,
  Layers,
  Router,
} from "lucide-react";
import SkillsVisualization from "./SkillsVisualization";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";
import ScrambleHeading from "./ScrambleHeading";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "HTML5", level: 95, icon: Code2 },
        { name: "CSS3", level: 90, icon: Palette },
        { name: "JavaScript", level: 85, icon: Zap },
        { name: "React.js", level: 80, icon: Cpu },
        { name: "Next.js", level: 85, icon: Router },
        { name: "Vue.js", level: 75, icon: Layers },
        { name: "TailwindCSS", level: 90, icon: Palette },
        { name: "Bootstrap", level: 85, icon: Layout },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "PHP", level: 85, icon: Code2 },
        { name: "Laravel", level: 80, icon: Server },
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, icon: Database },
        { name: "PostgreSQL", level: 80, icon: Database },
      ],
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 85, icon: GitBranch },
        { name: "Docker", level: 45, icon: Box },
        { name: "REST APIs", level: 80, icon: Globe },
      ],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const cards = section.querySelectorAll<HTMLElement>(".skill-card");
    const progressBars =
      section.querySelectorAll<HTMLElement>(".skill-bar-fill");
    const badges = section.querySelectorAll<HTMLElement>(".tech-badge");
    const vizSection = section.querySelector<HTMLElement>(".skills-viz");

    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(50px)";
    });
    progressBars.forEach((b) => {
      b.style.width = "0%";
    });
    badges.forEach((b) => {
      b.style.opacity = "0";
      b.style.transform = "translateY(15px) scale(0.9)";
    });
    if (vizSection) {
      vizSection.style.opacity = "0";
      vizSection.style.transform = "translateY(30px)";
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animate(cards, {
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 650,
            delay: stagger(120),
            ease: "outExpo",
          });

          progressBars.forEach((bar) => {
            const targetWidth = bar.dataset.width ?? "0";
            animate(bar, {
              width: ["0%", `${targetWidth}%`],
              duration: 1200,
              delay: stagger(40),
              ease: "outCubic",
            });
          });

          animate(vizSection, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            delay: 600,
            ease: "outCubic",
          });

          animate(badges, {
            opacity: [0, 1],
            translateY: [15, 0],
            scale: [0.9, 1],
            duration: 400,
            delay: stagger(35, { start: 800 }),
            ease: "outBack(1.5)",
          });
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
      ref={sectionRef}
    >
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrambleHeading
              as="h2"
              text="Skills & Technologies"
              id="skills-heading"
              className="portfolio-subheading mb-4"
              duration={850}
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="portfolio-body max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="portfolio-card skill-card group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 120}ms` }}
              >
                <div className="flex items-center justify-center mb-6">
                  <category.icon className="w-6 h-6 text-primary mr-2 group-hover:animate-pulse" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <skill.icon className="w-4 h-4 text-muted-foreground mr-2 group-hover:text-primary transition-colors" />
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="skill-bar-fill bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                          style={{ width: "0%" }}
                          data-width={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-16 skills-viz">
            <h3 className="text-center text-lg font-semibold mb-8">
              Core Skills Overview
            </h3>
            <div className="max-w-4xl mx-auto">
              <SkillsVisualization
                skills={[
                  { name: "Frontend", level: 88, category: "development" },
                  { name: "Backend", level: 78, category: "development" },
                  { name: "Database", level: 82, category: "data" },
                  {
                    name: "Problem Solving",
                    level: 90,
                    category: "soft-skills",
                  },
                ]}
                type="bar"
              />
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                { name: "HTML5", icon: Code2 },
                { name: "CSS3", icon: Palette },
                { name: "JavaScript", icon: Zap },
                { name: "React.js", icon: Cpu },
                { name: "Next.js", icon: Router },
                { name: "Vue.js", icon: Layers },
                { name: "PHP", icon: Code2 },
                { name: "Laravel", icon: Server },
                { name: "TailwindCSS", icon: Palette },
                { name: "MySQL", icon: Database },
                { name: "PostgreSQL", icon: Database },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="tech-badge group flex items-center px-4 py-2 rounded-lg cursor-pointer bg-muted hover:bg-primary hover:scale-105 transition-all duration-300"
                >
                  <tech.icon
                    className="w-4 h-4 mr-2 text-muted-foreground
                        transition-colors group-hover:text-primary-foreground"
                  />
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
