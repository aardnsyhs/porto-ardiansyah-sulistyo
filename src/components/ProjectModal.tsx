import { ExternalLink, Github, Code, Database, Palette } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  links: {
    live: string;
    github: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Palette className="w-4 h-4" />;
      case "Backend":
        return <Database className="w-4 h-4" />;
      case "Full Stack":
        return <Code className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      "React.js": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Vue.js": "bg-green-500/20 text-green-400 border-green-500/30",
      Laravel: "bg-red-500/20 text-red-400 border-red-500/30",
      PHP: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      MySQL: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      PostgreSQL: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      TailwindCSS: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      TypeScript: "bg-blue-700/20 text-blue-300 border-blue-700/30",
      Bootstrap: "bg-purple-600/20 text-purple-300 border-purple-600/30",
    };
    return colors[tech] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryIcon(
                  project.category
                )} bg-muted/50 text-muted-foreground border-border`}
              >
                {getCategoryIcon(project.category)}
                {project.category}
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Project Image */}
          <div className="relative mb-6">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="object-cover"
              />
            ) : (
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Project Preview</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gray-900/80 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-4">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-all duration-300 border border-foreground/20 mix-blend-difference"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-all duration-300 border border-foreground/20 mix-blend-difference"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              About This Project
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-2 text-sm rounded-lg border ${getTechColor(
                    tech
                  )}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Key Features
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Responsive design optimized for all devices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Modern UI/UX with clean and intuitive interface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Optimized performance and fast loading times</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Cross-browser compatibility and accessibility features
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live Project</span>
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg hover:bg-muted transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
