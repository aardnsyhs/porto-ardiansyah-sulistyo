import { useState } from "react";
import {
  Calendar,
  MapPin,
  Building2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  type: "education" | "work" | "internship";
  description: string[];
  technologies?: string[];
  location?: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "PT Eksam Digital Edukasi",
    period: "June 2025 – Present",
    type: "work",
    description: [
      "Developing and maintaining web applications using modern technologies",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing responsive designs and optimizing application performance",
    ],
    technologies: ["Laravel", "React.js", "MySQL", "Bootstrap"],
    location: "Cimahi, Indonesia",
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "PT Javan Cipta Solusi",
    period: "July 2024 – November 2024",
    type: "internship",
    description: [
      "Gained hands-on experience in web development using PHP and modern frameworks",
      "Participated in code reviews and learned industry best practices",
      "Contributed to various client projects and internal tools development",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "JavaScript",
      "Bootstrap",
      "TailwindCSS",
      "React.js",
      "Vue.js",
      "PostgreSQL",
      "Camunda",
      "Docker",
    ],
    location: "Cimahi, Indonesia",
  },
  {
    id: 3,
    title: "Junior Coder",
    company: "SMK Negeri 2 Cimahi",
    period: "2022 – 2025",
    type: "education",
    description: [
      "Focused on software engineering and web development technologies",
      "Completed various projects in data structures, algorithms, and web development",
      "Maintained strong academic performance while pursuing practical experience",
    ],
    technologies: [
      "Java",
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "Database Design",
    ],
    location: "Cimahi, Indonesia",
  },
];

const InteractiveTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4" />;
      case "work":
        return <Briefcase className="w-4 h-4" />;
      case "internship":
        return <Building2 className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "work":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "internship":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`relative pl-20 transition-all duration-300 cursor-pointer ${
              selectedItem === item.id
                ? "transform scale-[1.02]"
                : "hover:transform hover:scale-[1.01]"
            }`}
            onClick={() =>
              setSelectedItem(selectedItem === item.id ? null : item.id)
            }
          >
            <div
              className={`absolute left-6 w-4 h-4 rounded-full border-2 bg-background transition-all duration-300 ${
                selectedItem === item.id
                  ? "border-primary shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "border-muted-foreground hover:border-primary"
              }`}
            ></div>
            <div
              className={`portfolio-card transition-all duration-300 ${
                selectedItem === item.id
                  ? "bg-card border-primary shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                  : "hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                      item.type,
                    )}`}
                  >
                    {getTypeIcon(item.type)}
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                </div>
                {item.location && (
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-primary font-medium">{item.company}</p>
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  selectedItem === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 mb-4 text-muted-foreground">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                {item.technologies && (
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  {selectedItem === item.id
                    ? "Click to collapse"
                    : "Click to expand details"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;
