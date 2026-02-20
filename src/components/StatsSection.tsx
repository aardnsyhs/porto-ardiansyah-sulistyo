import { useState, useEffect, useRef } from "react";
import { Code, Calendar, Users, Award } from "lucide-react";

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
  duration = 2000,
}: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOutCubic * value));

      if (now >= endTime) {
        setCount(value);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <div
      ref={elementRef}
      className="text-center group hover:scale-105 transition-all duration-300"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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

  return (
    <section className="section-padding bg-background border-y border-border">
      <div className="container-portfolio">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
