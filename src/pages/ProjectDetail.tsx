import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Lightbulb, Rocket } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Project data - should match PortfolioSection
const projects = [
  {
    id: 'summizeit',
    title: "SummizeIt",
    description: "AI-powered PDF summarization SaaS that helps users quickly extract key insights from uploaded documents.",
    technologies: ["Next.js", "Prisma", "Stripe", "UploadThing", "AI"],
    category: "SaaS / AI",
    image: "/src/assets/summizeit-photo.png",
    links: {
      live: "https://summizeit.vercel.app/",
      github: "https://github.com/aardnsyhs/summizeit",
    },
    caseStudy: {
      background: "Many professionals struggle to quickly extract key information from lengthy PDF documents. Reading through entire reports, research papers, or business documents takes time and can lead to information overload.",
      goal: "Create an AI-powered SaaS solution that can analyze PDF documents and generate accurate, concise summaries, saving users time while ensuring they don't miss critical information.",
      challenges: [
        {
          title: "PDF Processing at Scale",
          description: "Handling various PDF formats, sizes, and structures required robust file processing and validation systems."
        },
        {
          title: "AI Accuracy & Context",
          description: "Ensuring the AI model could understand context and generate meaningful summaries rather than just extracting random sentences."
        },
        {
          title: "Payment Integration",
          description: "Implementing a flexible pricing model with Stripe for different usage tiers and subscription management."
        }
      ],
      solutions: [
        "Implemented UploadThing for reliable file uploads with built-in validation and error handling.",
        "Used advanced AI models with custom prompts to ensure contextual understanding and high-quality summaries.",
        "Built a Prisma-based database schema to track user credits, upload history, and subscription status.",
        "Integrated Stripe webhooks for automated billing and subscription management."
      ],
      architecture: "Built with Next.js 14 for optimal performance and SEO. Prisma ORM manages PostgreSQL database interactions. UploadThing handles secure file storage. OpenAI API processes documents. Stripe manages payments and subscriptions.",
      results: [
        "Successfully deployed with high user satisfaction",
        "Processes documents in under 30 seconds on average",
        "Maintains 95%+ accuracy in summary quality",
        "Scalable architecture ready for growing user base"
      ],
      lessons: "This project taught me the importance of handling edge cases in file processing and the value of implementing robust error handling for external API integrations. User feedback early on was crucial for refining the AI prompts."
    }
  },
  {
    id: 'shopenix',
    title: "Shopenix",
    description: "Administrative dashboard for e-commerce platform with analytics, inventory management, and sales reporting.",
    technologies: ["Next.js", "TailwindCSS", "Sanity", "Clerk", "Stripe"],
    category: "E-Commerce & POS",
    image: "/src/assets/e-commerce-photo.png",
    links: {
      live: "https://shopenix.vercel.app/",
      github: "https://github.com/aardnsyhs/e-commerce",
    },
    caseStudy: {
      background: "E-commerce businesses need powerful admin tools to manage products, track inventory, analyze sales, and handle customer orders efficiently. Many existing solutions are either too complex or lack essential features.",
      goal: "Build a comprehensive yet intuitive admin dashboard that gives business owners complete control over their e-commerce operations with real-time insights and streamlined workflows.",
      challenges: [
        {
          title: "Real-Time Data Sync",
          description: "Keeping inventory, orders, and analytics synchronized across the admin panel and customer-facing store."
        },
        {
          title: "Complex Data Relationships",
          description: "Managing intricate relationships between products, variants, categories, orders, and customers."
        },
        {
          title: "Secure Access Control",
          description: "Implementing role-based access control to ensure only authorized users can perform sensitive operations."
        }
      ],
      solutions: [
        "Leveraged Sanity CMS for real-time content management with live preview capabilities.",
        "Implemented Clerk authentication with custom role management for secure, granular access control.",
        "Built comprehensive analytics dashboard using Chart.js and aggregated data queries.",
        "Integrated Stripe for seamless payment processing and financial reporting."
      ],
      architecture: "Next.js 14 powers the frontend with server-side rendering for optimal performance. Sanity provides the content layer with real-time sync. Clerk handles authentication and user management. Stripe manages payment processing. TailwindCSS ensures responsive, modern UI.",
      results: [
        "Reduced product management time by 60%",
        "Real-time inventory tracking prevents overselling",
        "Comprehensive analytics drive data-informed decisions",
        "Scalable architecture supports business growth"
      ],
      lessons: "Working with Sanity CMS deepened my understanding of structured content and real-time data synchronization. I learned the importance of designing intuitive admin interfaces that non-technical users can navigate easily."
    }
  },
  {
    id: 'nexabook',
    title: "NexaBook",
    description: "Full-stack hotel booking app with authentication, reservation management, Midtrans payments, and server-side validation.",
    technologies: ["Next.js", "TailwindCSS", "Prisma", "NextAuth", "Midtrans", "Zod"],
    category: "Full Stack Web",
    image: "/src/assets/nexabook-photo.png",
    links: {
      live: "https://nexabook.vercel.app/",
      github: "https://github.com/aardnsyhs/booking-hotel",
    },
    caseStudy: {
      background: "Hotels need reliable booking systems that handle reservations, payments, and guest management seamlessly. The system must be secure, user-friendly, and integrate with local payment gateways.",
      goal: "Develop a complete hotel booking platform that handles the entire guest journey from search to payment, with robust validation and secure payment processing via Midtrans.",
      challenges: [
        {
          title: "Complex Booking Logic",
          description: "Managing room availability, preventing double bookings, and handling date conflicts required careful database design and validation."
        },
        {
          title: "Payment Gateway Integration",
          description: "Integrating Midtrans payment gateway with proper security measures and handling various payment methods."
        },
        {
          title: "Data Validation",
          description: "Ensuring data integrity across client and server with comprehensive validation for all user inputs."
        }
      ],
      solutions: [
        "Implemented Prisma with PostgreSQL for robust data modeling and transactional booking operations.",
        "Used Zod for type-safe validation schemas shared between frontend and backend.",
        "Integrated NextAuth for secure authentication with email and social login options.",
        "Built custom booking logic with date range validation and availability checking."
      ],
      architecture: "Next.js 14 with App Router for modern full-stack development. Prisma ORM for type-safe database access. NextAuth handles authentication. Midtrans integration for payments. Zod ensures data validation. React Hook Form manages complex booking forms.",
      results: [
        "Zero double bookings with robust conflict detection",
        "Secure payment processing with Midtrans integration",
        "95% booking completion rate",
        "Fast, responsive interface on all devices"
      ],
      lessons: "This project taught me the critical importance of server-side validation and transaction handling for booking systems. I also gained deep experience with payment gateway integration and webhook handling."
    }
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen">
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
                <span className="text-primary text-sm font-medium mb-3 block">{project.category}</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                
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
                  <div key={index} className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors duration-300">
                    <h3 className="text-xl font-semibold mb-3">{challenge.title}</h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
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
                  <li key={index} className="flex gap-4 p-4 bg-surface rounded-lg border border-border">
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
                <h2 className="text-3xl font-bold">Architecture & Technologies</h2>
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
                  <div key={index} className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg border border-primary/20">
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
              <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
              <p className="text-muted-foreground mb-6">Let's discuss your next project</p>
              <div className="flex gap-4 justify-center">
                <Link to="/#contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300">
                  Get in Touch
                </Link>
                <Link to="/#portfolio" className="px-6 py-3 bg-surface border border-border rounded-lg hover:border-primary transition-all duration-300">
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
