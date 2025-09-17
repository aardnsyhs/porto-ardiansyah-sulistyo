import { useState } from "react";
import ProjectModal from "./ProjectModal";
import eCommercePhoto from "@/assets/e-commerce-photo.png";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      description:
        "A comprehensive learning management system built for educational institutions with course management, student tracking, and interactive features.",
      technologies: ["Laravel", "React.js", "MySQL", "TailwindCSS"],
      category: "Web Application",
      image: "/api/placeholder/400/300",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 2,
      title: "Restaurant Management System",
      description:
        "Full-stack restaurant management application with order processing, inventory management, and customer relationship features.",
      technologies: ["PHP", "Vue.js", "MySQL", "Bootstrap"],
      category: "Full Stack",
      image: "/api/placeholder/400/300",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern design principles and optimized user experience across all devices.",
      technologies: ["React.js", "TailwindCSS", "JavaScript"],
      category: "Frontend",
      image: "/api/placeholder/400/300",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and progress tracking features.",
      technologies: ["Laravel", "React.js", "PostgreSQL", "WebSocket"],
      category: "Web Application",
      image: "/api/placeholder/400/300",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 5,
      title: "API Service Platform",
      description:
        "RESTful API service with comprehensive documentation, authentication, and rate limiting for third-party integrations.",
      technologies: ["PHP", "Laravel", "MySQL", "Swagger"],
      category: "Backend",
      image: "/api/placeholder/400/300",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 6,
      title: "Shopenix",
      description:
        "Administrative dashboard for e-commerce platform with analytics, inventory management, and sales reporting.",
      technologies: ["Next.js", "TailwindCSS", "Sanity", "Clerk", "Stripe"],
      category: "e-commerce",
      image: eCommercePhoto,
      links: {
        live: "https://shopenix.vercel.app/",
        github: "https://github.com/aardnsyhs/e-commerce",
      },
    },
  ];

  const categories = [
    "All",
    "Web Application",
    "Full Stack",
    "Frontend",
    "Backend",
    "E-Commerce",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    activeCategory.toLowerCase() === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="portfolio-subheading mb-4">Portfolio</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="portfolio-body max-w-2xl mx-auto">
              A collection of projects that showcase my skills and experience in
              web development
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in fade-in-delay-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`portfolio-card group fade-in fade-in-delay-${
                  (index % 3) + 1
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100 h-48">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">
                        Project Image
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => openProjectModal(project)}
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 border border-white/30 transition-all duration-300 backdrop-blur-sm mix-blend-difference"
                        aria-label="View project details"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 border border-white/30 transition-all duration-300 backdrop-blur-sm mix-blend-difference"
                        aria-label="View live project"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 border border-white/30 transition-all duration-300 backdrop-blur-sm mix-blend-difference"
                        aria-label="View source code"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="portfolio-label text-primary">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="portfolio-body">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
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

          {/* Project Modal */}
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
