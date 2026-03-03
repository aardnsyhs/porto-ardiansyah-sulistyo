import { useState, useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { Code, Calendar, Award } from "lucide-react";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatItem = ({
  icon,
  value,
  label,
  suffix = "",
  duration = 1800,
}: StatItemProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const iconEl = el.querySelector<HTMLElement>(".stat-icon");
          if (iconEl) {
            iconEl.style.transform = "scale(0)";
            iconEl.style.opacity = "0";
            animate(iconEl, {
              scale: [0, 1],
              opacity: [0, 1],
              duration: 700,
              ease: "spring(1, 80, 10, 0)",
            });
          }

          const obj = { val: 0 };
          animate(obj, {
            val: value,
            duration,
            ease: "outCubic",
            onUpdate: () => setCount(Math.round(obj.val)),
            onComplete: () => setCount(value),
          });
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div
      ref={elementRef}
      className="text-center group hover:scale-105 transition-all duration-300"
    >
      <div className="stat-icon w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const stats = [
    {
      icon: <Code className="w-8 h-8" />,
      value: 15,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      value: 2,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 8,
      label: "Technologies Mastered",
      suffix: "+",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const cards = section.querySelectorAll<HTMLElement>(".stat-card-wrapper");
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(30px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(cards, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            delay: stagger(150),
            ease: "outCubic",
          });
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section-padding bg-background border-y border-border"
      ref={sectionRef}
    >
      <div className="container-portfolio">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card-wrapper">
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
