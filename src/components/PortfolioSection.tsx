import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal";
import { projects, projectCategories, type Project } from "@/data/projects";
import { Eye, ExternalLink, ArrowRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory.toLowerCase() === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="portfolio"
      className="section-padding"
      aria-labelledby="portfolio-heading"
    >
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 id="portfolio-heading" className="portfolio-subheading mb-4">
              Portfolio
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="portfolio-body max-w-2xl mx-auto">
              A collection of projects that showcase my skills and experience in
              web development
            </p>
          </div>
          <nav
            className="flex flex-wrap justify-center gap-4 mb-12 fade-in fade-in-delay-1"
            role="tablist"
            aria-label="Project categories filter"
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls="projects-grid"
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 portfolio-button-focus ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                aria-label={`Filter projects by ${category}`}
              >
                {category}
              </button>
            ))}
          </nav>
          <div
            id="projects-grid"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
            role="tabpanel"
            aria-live="polite"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`portfolio-card group fade-in fade-in-delay-${
                  (index % 3) + 1
                } h-full min-h-[430px] md:min-h-[450px] flex flex-col`}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <OptimizedImage
                    src={project.image}
                    alt={`Screenshot of ${project.title} project showing ${project.description.split(".")[0]}`}
                    className="object-cover w-full h-full"
                    containerClassName="w-full h-full"
                    loading="lazy"
                    srcSet={`${project.imageSm} 400w, ${project.image} 800w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center z-10">
                    <div className="flex space-x-4">
                      {project.slug && (
                        <Link
                          to={`/project/${project.slug}`}
                          className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 border border-white/30 transition-all duration-300 backdrop-blur-sm mix-blend-difference portfolio-button-focus"
                          aria-label={`View case study for ${project.title} project`}
                        >
                          <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </Link>
                      )}
                      <button
                        onClick={() => openProjectModal(project)}
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 border border-white/30 transition-all duration-300 backdrop-blur-sm mix-blend-difference portfolio-button-focus"
                        aria-label={`View details for ${project.title} project`}
                      >
                        <Eye className="w-5 h-5" aria-hidden="true" />
                      </button>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 border border-white/30 transition-all duration-300 backdrop-blur-sm mix-blend-difference portfolio-link-focus"
                        aria-label={`View live ${project.title} project`}
                      >
                        <ExternalLink className="w-5 h-5" aria-hidden="true" />
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 border border-white/30 transition-all duration-300 backdrop-blur-sm mix-blend-difference portfolio-link-focus"
                        aria-label={`View source code for ${project.title} project`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-2 mb-3 md:hidden"
                  role="toolbar"
                  aria-label={`Actions for ${project.title}`}
                >
                  {project.slug && (
                    <Link
                      to={`/project/${project.slug}`}
                      className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] bg-primary/10 text-primary rounded-lg text-xs font-medium transition-colors hover:bg-primary/20"
                      aria-label={`View case study for ${project.title}`}
                    >
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      <span>Details</span>
                    </Link>
                  )}
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] bg-muted text-muted-foreground rounded-lg text-xs font-medium transition-colors hover:bg-muted/80"
                    aria-label={`View live ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] bg-muted text-muted-foreground rounded-lg text-xs font-medium transition-colors hover:bg-muted/80"
                    aria-label={`View source for ${project.title}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>
                </div>
                <div className="space-y-3 flex-1 grid grid-rows-[auto_1fr_auto]">
                  <div className="flex items-center justify-between">
                    <span className="portfolio-label text-primary">
                      {project.category}
                    </span>
                  </div>
                  <div>
                    {project.slug ? (
                      <Link to={`/project/${project.slug}`}>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    )}
                    <p
                      className="portfolio-body"
                      aria-describedby={`project-${project.id}-tech`}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div
                    className="flex flex-wrap gap-2"
                    id={`project-${project.id}-tech`}
                    role="list"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        role="listitem"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 fade-in fade-in-delay-3">
            <a
              href="https://github.com/aardnsyhs"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button-secondary"
            >
              View More on GitHub
            </a>
          </div>
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
