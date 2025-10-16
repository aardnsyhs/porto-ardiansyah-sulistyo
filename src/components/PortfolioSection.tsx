import { useState } from "react";
import ProjectModal from "./ProjectModal";
import eCommercePhoto from "@/assets/e-commerce-photo.png";
import summizeItPhoto from "@/assets/summizeit-photo.png";
import nexabookPhoto from "@/assets/nexabook-photo.png";
import { Eye, ExternalLink } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "SummizeIt",
      description:
        "AI-powered PDF summarization SaaS that helps users quickly extract key insights from uploaded documents.",
      technologies: ["Next.js", "Prisma", "Stripe", "UploadThing", "AI"],
      category: "SaaS / AI",
      image: summizeItPhoto,
      links: {
        live: "https://summizeit.vercel.app/",
        github: "https://github.com/aardnsyhs/summizeit",
      },
    },
    {
      id: 2,
      title: "Shopenix",
      description:
        "Administrative dashboard for e-commerce platform with analytics, inventory management, and sales reporting.",
      technologies: ["Next.js", "TailwindCSS", "Sanity", "Clerk", "Stripe"],
      category: "E-Commerce & POS",
      image: eCommercePhoto,
      links: {
        live: "https://shopenix.vercel.app/",
        github: "https://github.com/aardnsyhs/e-commerce",
      },
    },
    {
      id: 3,
      title: "NexaBook",
      description:
        "Full-stack hotel booking app with authentication, reservation management, Midtrans payments, and server-side validation.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Prisma",
        "NextAuth",
        "Midtrans",
        "Zod",
      ],
      category: "Full Stack Web",
      image: nexabookPhoto,
      links: {
        live: "https://nexabook.vercel.app/",
        github: "https://github.com/aardnsyhs/booking-hotel",
      },
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern design principles and optimized user experience across all devices.",
      technologies: ["React.js", "TailwindCSS", "JavaScript"],
      category: "Frontend & UI",
      image: "/api/placeholder/400/300",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 5,
      title: "Restaurant Management System",
      description:
        "Full-stack restaurant management application with order processing, inventory management, and customer relationship features.",
      technologies: ["PHP", "Vue.js", "MySQL", "Bootstrap"],
      category: "Admin & Dashboard",
      image: "/api/placeholder/400/300",
      links: {
        live: "#",
        github: "#",
      },
    },
    {
      id: 6,
      title: "E-Learning Platform",
      description:
        "A comprehensive learning management system built for educational institutions with course management, student tracking, and interactive features.",
      technologies: ["Laravel", "React.js", "MySQL", "TailwindCSS"],
      category: "Full Stack Web",
      image: "/api/placeholder/400/300",
      links: {
        live: "#",
        github: "#",
      },
    },
  ];

  const categories = [
    "All",
    "SaaS / AI",
    "E-Commerce & POS",
    "Admin & Dashboard",
    "Full Stack Web",
    "Frontend & UI",
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
    <section id="portfolio" className="section-padding" aria-labelledby="portfolio-heading">
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 id="portfolio-heading" className="portfolio-subheading mb-4">Portfolio</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="portfolio-body max-w-2xl mx-auto">
              A collection of projects that showcase my skills and experience in
              web development
            </p>
          </div>

          {/* Filter Tabs */}
          <nav className="flex flex-wrap justify-center gap-4 mb-12 fade-in fade-in-delay-1" role="tablist" aria-label="Project categories filter">
            {categories.map((category) => (
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

          {/* Projects Grid */}
          <div id="projects-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr" role="tabpanel" aria-live="polite">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`portfolio-card group fade-in fade-in-delay-${
                  (index % 3) + 1
                } h-full min-h-[430px] md:min-h-[450px] flex flex-col`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <OptimizedImage
                    src={project.image}
                    alt={`Screenshot of ${project.title} project showing ${project.description.split('.')[0]}`}
                    className="object-cover w-full h-full"
                    containerClassName="w-full h-full"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="flex space-x-4">
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

                <div className="space-y-3 flex-1 grid grid-rows-[auto_1fr_auto]">
                  <div className="flex items-center justify-between">
                    <span className="portfolio-label text-primary">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="portfolio-body" aria-describedby={`project-${project.id}-tech`}>{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2" id={`project-${project.id}-tech`} aria-label="Technologies used">
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
