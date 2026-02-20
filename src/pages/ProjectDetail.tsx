import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Lightbulb,
  Rocket,
} from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import SEO from "@/components/SEO";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen">
      <SEO
        title={project.title}
        description={project.description}
        path={`/project/${project.slug}`}
        image={project.image}
      />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-surface/30">
          <div className="container-portfolio max-w-6xl mx-auto">
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Portfolio
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-primary text-sm font-medium mb-3 block">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-lg hover:border-primary transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border border-border shadow-2xl">
                <OptimizedImage
                  src={project.image}
                  alt={`${project.title} project showcase`}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Sections */}
        <section className="section-padding">
          <div className="container-portfolio max-w-4xl mx-auto space-y-16">
            {/* Background & Goal */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-bold">Background & Goal</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {caseStudy.background}
                </p>
              </div>

              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <h3 className="text-xl font-semibold mb-2">Project Goal</h3>
                <p className="text-muted-foreground">{caseStudy.goal}</p>
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Challenges</h2>
              </div>
              <div className="grid gap-6">
                {caseStudy.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3">
                      {challenge.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Rocket className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Solutions</h2>
              </div>
              <ul className="space-y-4">
                {caseStudy.solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex gap-4 p-4 bg-surface rounded-lg border border-border"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground pt-1">{solution}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">
                  Architecture & Technologies
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed p-6 bg-surface rounded-lg border border-border">
                {caseStudy.architecture}
              </p>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Results & Impact</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg border border-primary/20"
                  >
                    <p className="text-foreground font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons Learned */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Lessons Learned</h2>
              <p className="text-lg text-muted-foreground leading-relaxed p-6 bg-surface rounded-lg border border-border italic">
                {caseStudy.lessons}
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-border">
              <h3 className="text-2xl font-bold mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your next project
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/#portfolio"
                  className="px-6 py-3 bg-surface border border-border rounded-lg hover:border-primary transition-all duration-300"
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
