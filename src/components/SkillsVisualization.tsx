import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsVisualizationProps {
  skills: Skill[];
  type?: "radar" | "bar";
}

const SkillsVisualization = ({
  skills,
  type = "bar",
}: SkillsVisualizationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const colors = [
    "hsl(var(--primary))",
    "hsl(var(--accent))",
    "hsl(var(--muted-foreground))",
    "hsl(var(--border))",
  ];

  if (type === "bar") {
    return (
      <div ref={containerRef} className="space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full bg-primary transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  width: isVisible ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 100}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-auto">
        {[20, 40, 60, 80, 100].map((radius) => (
          <circle
            key={radius}
            cx="100"
            cy="100"
            r={radius * 0.8}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity="0.3"
          />
        ))}
        {skills.map((skill, index) => {
          const angle = (index * 360) / skills.length;
          const x1 = 100;
          const y1 = 100;
          const x2 = 100 + Math.cos(((angle - 90) * Math.PI) / 180) * 80;
          const y2 = 100 + Math.sin(((angle - 90) * Math.PI) / 180) * 80;

          return (
            <line
              key={skill.name}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}
        <polygon
          points={skills
            .map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const distance = (skill.level / 100) * 80;
              const x =
                100 + Math.cos(((angle - 90) * Math.PI) / 180) * distance;
              const y =
                100 + Math.sin(((angle - 90) * Math.PI) / 180) * distance;
              return `${x},${y}`;
            })
            .join(" ")}
          fill="hsl(var(--primary))"
          fillOpacity="0.2"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        {skills.map((skill, index) => {
          const angle = (index * 360) / skills.length;
          const distance = (skill.level / 100) * 80;
          const x = 100 + Math.cos(((angle - 90) * Math.PI) / 180) * distance;
          const y = 100 + Math.sin(((angle - 90) * Math.PI) / 180) * distance;

          return (
            <circle
              key={skill.name}
              cx={x}
              cy={y}
              r="4"
              fill="hsl(var(--primary))"
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            />
          );
        })}
        {skills.map((skill, index) => {
          const angle = (index * 360) / skills.length;
          const distance = 95;
          const x = 100 + Math.cos(((angle - 90) * Math.PI) / 180) * distance;
          const y = 100 + Math.sin(((angle - 90) * Math.PI) / 180) * distance;

          return (
            <text
              key={skill.name}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs fill-muted-foreground"
              fontSize="10"
            >
              {skill.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default SkillsVisualization;
