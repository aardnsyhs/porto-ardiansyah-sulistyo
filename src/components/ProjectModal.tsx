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
      "Next.js": "bg-slate-700/20 text-slate-300 border-slate-700/30",
      "Vue.js": "bg-green-500/20 text-green-400 border-green-500/30",
      Laravel: "bg-red-500/20 text-red-400 border-red-500/30",
      PHP: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Node.js": "bg-green-600/20 text-green-300 border-green-600/30",
      "Express.js": "bg-gray-600/20 text-gray-300 border-gray-600/30",
      MySQL: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      PostgreSQL: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      MongoDB: "bg-green-700/20 text-green-400 border-green-700/30",
      Prisma: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      TailwindCSS: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      Bootstrap: "bg-purple-600/20 text-purple-300 border-purple-600/30",
      JavaScript: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      TypeScript: "bg-blue-700/20 text-blue-300 border-blue-700/30",
      Stripe: "bg-violet-500/20 text-violet-400 border-violet-500/30",
      Midtrans: "bg-blue-400/20 text-blue-300 border-blue-400/30",
      Pusher: "bg-purple-400/20 text-purple-300 border-purple-400/30",
      Ably: "bg-orange-400/20 text-orange-300 border-orange-400/30",
      "Socket.io": "bg-slate-600/20 text-slate-300 border-slate-600/30",
      Sanity: "bg-red-400/20 text-red-300 border-red-400/30",
      Firebase: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      Clerk: "bg-indigo-400/20 text-indigo-300 border-indigo-400/30",
      NextAuth: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      Zod: "bg-blue-600/20 text-blue-400 border-blue-600/30",
      SWR: "bg-slate-500/20 text-slate-300 border-slate-500/30",
      "Radix UI": "bg-violet-600/20 text-violet-300 border-violet-600/30",
      UploadThing: "bg-teal-500/20 text-teal-400 border-teal-500/30",
      AI: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30",
    };
    return colors[tech] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
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
