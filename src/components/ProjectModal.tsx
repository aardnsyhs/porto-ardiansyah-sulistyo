import { ExternalLink, Github, Code, Database, Palette } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { getTechColor } from "@/lib/tech-colors";

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryIcon(
                  project.category,
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
            {(project.links?.live || project.links?.github) && (
              <div className="absolute inset-0 bg-gray-900/80 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-all duration-300 border border-foreground/20 mix-blend-difference"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-all duration-300 border border-foreground/20 mix-blend-difference"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              About This Project
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-2 text-sm rounded-lg border ${getTechColor(
                    tech,
                  )}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
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
          {project.links?.live || project.links?.github ? (
            <div className="flex flex-col sm:flex-row gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Project</span>
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground border border-border rounded-lg hover:bg-muted transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          ) : (
            <div className="p-3.5 bg-muted/40 rounded-lg border border-border text-center text-xs text-muted-foreground">
              🔒 Internal Production Project — Source repository & live portal are private to internal company infrastructure.
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
