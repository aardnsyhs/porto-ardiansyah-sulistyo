import eCommercePhoto from "@/assets/optimized/e-commerce-photo-800w.webp";
import eCommercePhotoSm from "@/assets/optimized/e-commerce-photo-400w.webp";
import summizeItPhoto from "@/assets/optimized/summizeit-photo-800w.webp";
import summizeItPhotoSm from "@/assets/optimized/summizeit-photo-400w.webp";
import nexabookPhoto from "@/assets/optimized/nexabook-photo-800w.webp";
import nexabookPhotoSm from "@/assets/optimized/nexabook-photo-400w.webp";
import syncspacePhoto from "@/assets/optimized/syncspace-photo-800w.webp";
import syncspacePhotoSm from "@/assets/optimized/syncspace-photo-400w.webp";
import eksamPhoto from "@/assets/optimized/eksam-photo-800w.webp";
import eksamPhotoSm from "@/assets/optimized/eksam-photo-400w.webp";

export interface ProjectCaseStudy {
  background: string;
  goal: string;
  challenges: { title: string; description: string }[];
  solutions: string[];
  architecture: string;
  results: string[];
  lessons: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  imageSm: string;
  links: {
    live: string;
    github: string;
  };
  caseStudy: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "summizeit",
    title: "SummizeIt",
    description:
      "AI-powered PDF summarization SaaS that helps users quickly extract key insights from uploaded documents.",
    technologies: ["Next.js", "Prisma", "Stripe", "UploadThing", "AI"],
    category: "SaaS / AI",
    image: summizeItPhoto,
    imageSm: summizeItPhotoSm,
    links: {
      live: "https://summizeit.vercel.app/",
      github: "https://github.com/aardnsyhs/summizeit",
    },
    caseStudy: {
      background:
        "Many professionals struggle to quickly extract key information from lengthy PDF documents. Reading through entire reports, research papers, or business documents takes time and can lead to information overload.",
      goal: "Create an AI-powered SaaS solution that can analyze PDF documents and generate accurate, concise summaries, saving users time while ensuring they don't miss critical information.",
      challenges: [
        {
          title: "PDF Processing at Scale",
          description:
            "Handling various PDF formats, sizes, and structures required robust file processing and validation systems.",
        },
        {
          title: "AI Accuracy & Context",
          description:
            "Ensuring the AI model could understand context and generate meaningful summaries rather than just extracting random sentences.",
        },
        {
          title: "Payment Integration",
          description:
            "Implementing a flexible pricing model with Stripe for different usage tiers and subscription management.",
        },
      ],
      solutions: [
        "Implemented UploadThing for reliable file uploads with built-in validation and error handling.",
        "Used advanced AI models with custom prompts to ensure contextual understanding and high-quality summaries.",
        "Built a Prisma-based database schema to track user credits, upload history, and subscription status.",
        "Integrated Stripe webhooks for automated billing and subscription management.",
      ],
      architecture:
        "Built with Next.js 14 for optimal performance and SEO. Prisma ORM manages PostgreSQL database interactions. UploadThing handles secure file storage. OpenAI API processes documents. Stripe manages payments and subscriptions.",
      results: [
        "Successfully deployed with high user satisfaction",
        "Processes documents in under 30 seconds on average",
        "Maintains 95%+ accuracy in summary quality",
        "Scalable architecture ready for growing user base",
      ],
      lessons:
        "This project taught me the importance of handling edge cases in file processing and the value of implementing robust error handling for external API integrations. User feedback early on was crucial for refining the AI prompts.",
    },
  },
  {
    id: 2,
    slug: "shopenix",
    title: "Shopenix",
    description:
      "Administrative dashboard for e-commerce platform with analytics, inventory management, and sales reporting.",
    technologies: ["Next.js", "TailwindCSS", "Sanity", "Clerk", "Stripe"],
    category: "E-Commerce & POS",
    image: eCommercePhoto,
    imageSm: eCommercePhotoSm,
    links: {
      live: "https://shopenix.vercel.app/",
      github: "https://github.com/aardnsyhs/e-commerce",
    },
    caseStudy: {
      background:
        "E-commerce businesses need powerful admin tools to manage products, track inventory, analyze sales, and handle customer orders efficiently. Many existing solutions are either too complex or lack essential features.",
      goal: "Build a comprehensive yet intuitive admin dashboard that gives business owners complete control over their e-commerce operations with real-time insights and streamlined workflows.",
      challenges: [
        {
          title: "Real-Time Data Sync",
          description:
            "Keeping inventory, orders, and analytics synchronized across the admin panel and customer-facing store.",
        },
        {
          title: "Complex Data Relationships",
          description:
            "Managing intricate relationships between products, variants, categories, orders, and customers.",
        },
        {
          title: "Secure Access Control",
          description:
            "Implementing role-based access control to ensure only authorized users can perform sensitive operations.",
        },
      ],
      solutions: [
        "Leveraged Sanity CMS for real-time content management with live preview capabilities.",
        "Implemented Clerk authentication with custom role management for secure, granular access control.",
        "Built comprehensive analytics dashboard using Chart.js and aggregated data queries.",
        "Integrated Stripe for seamless payment processing and financial reporting.",
      ],
      architecture:
        "Next.js 14 powers the frontend with server-side rendering for optimal performance. Sanity provides the content layer with real-time sync. Clerk handles authentication and user management. Stripe manages payment processing. TailwindCSS ensures responsive, modern UI.",
      results: [
        "Reduced product management time by 60%",
        "Real-time inventory tracking prevents overselling",
        "Comprehensive analytics drive data-informed decisions",
        "Scalable architecture supports business growth",
      ],
      lessons:
        "Working with Sanity CMS deepened my understanding of structured content and real-time data synchronization. I learned the importance of designing intuitive admin interfaces that non-technical users can navigate easily.",
    },
  },
  {
    id: 3,
    slug: "nexabook",
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
    imageSm: nexabookPhotoSm,
    links: {
      live: "https://nexabook.vercel.app/",
      github: "https://github.com/aardnsyhs/booking-hotel",
    },
    caseStudy: {
      background:
        "Hotels need reliable booking systems that handle reservations, payments, and guest management seamlessly. The system must be secure, user-friendly, and integrate with local payment gateways.",
      goal: "Develop a complete hotel booking platform that handles the entire guest journey from search to payment, with robust validation and secure payment processing via Midtrans.",
      challenges: [
        {
          title: "Complex Booking Logic",
          description:
            "Managing room availability, preventing double bookings, and handling date conflicts required careful database design and validation.",
        },
        {
          title: "Payment Gateway Integration",
          description:
            "Integrating Midtrans payment gateway with proper security measures and handling various payment methods.",
        },
        {
          title: "Data Validation",
          description:
            "Ensuring data integrity across client and server with comprehensive validation for all user inputs.",
        },
      ],
      solutions: [
        "Implemented Prisma with PostgreSQL for robust data modeling and transactional booking operations.",
        "Used Zod for type-safe validation schemas shared between frontend and backend.",
        "Integrated NextAuth for secure authentication with email and social login options.",
        "Built custom booking logic with date range validation and availability checking.",
      ],
      architecture:
        "Next.js 14 with App Router for modern full-stack development. Prisma ORM for type-safe database access. NextAuth handles authentication. Midtrans integration for payments. Zod ensures data validation. React Hook Form manages complex booking forms.",
      results: [
        "Zero double bookings with robust conflict detection",
        "Secure payment processing with Midtrans integration",
        "95% booking completion rate",
        "Fast, responsive interface on all devices",
      ],
      lessons:
        "This project taught me the critical importance of server-side validation and transaction handling for booking systems. I also gained deep experience with payment gateway integration and webhook handling.",
    },
  },
  {
    id: 4,
    slug: "syncspace",
    title: "Syncspace",
    description:
      "Real-time collaborative workspace platform with document editing, team communication, and project management features.",
    technologies: [
      "React.js",
      "Laravel",
      "MySQL",
      "TailwindCSS",
      "Pusher",
      "Ably",
    ],
    category: "Full Stack Web",
    image: syncspacePhoto,
    imageSm: syncspacePhotoSm,
    links: {
      live: "https://syncspace-seven.vercel.app",
      github: "https://github.com/aardnsyhs/syncspace",
    },
    caseStudy: {
      background:
        "Remote teams need efficient ways to collaborate on projects, share documents, and communicate in real-time. Traditional tools often lack seamless integration between project management and communication features.",
      goal: "Build a unified collaborative workspace that combines real-time document editing, team chat, task management, and project tracking in one seamless platform.",
      challenges: [
        {
          title: "Real-Time Synchronization",
          description:
            "Ensuring multiple users can edit documents simultaneously without conflicts, requiring robust conflict resolution and state management.",
        },
        {
          title: "Performance at Scale",
          description:
            "Maintaining responsive real-time updates across multiple channels (documents, chat, tasks) without overwhelming the client or server.",
        },
        {
          title: "Data Consistency",
          description:
            "Keeping data synchronized between React frontend and Laravel backend while handling connection drops and network issues.",
        },
      ],
      solutions: [
        "Implemented dual real-time system using Pusher for critical updates and Ably for fallback reliability.",
        "Built Laravel API with optimized queries and caching strategies to handle concurrent requests efficiently.",
        "Used React context and custom hooks for managing complex real-time state across components.",
        "Implemented optimistic UI updates with automatic rollback on errors for seamless user experience.",
      ],
      architecture:
        "React 19 powers the frontend with modern hooks and concurrent features. Laravel backend provides RESTful API with authentication and authorization. MySQL handles relational data. Pusher and Ably enable bi-directional real-time communication. TailwindCSS ensures responsive design.",
      results: [
        "Real-time collaboration with sub-second latency",
        "Successfully handles multiple concurrent users per workspace",
        "99.9% message delivery reliability with dual provider setup",
        "Intuitive interface increases team productivity",
      ],
      lessons:
        "Building a real-time collaborative platform taught me the complexities of managing concurrent state and the importance of choosing the right real-time infrastructure. Implementing dual providers (Pusher + Ably) provided valuable insights into failover strategies and reliability.",
    },
  },
  {
    id: 5,
    slug: "eksam-edukasi",
    title: "Eksam.id - CMS & Dashboard Edukreator",
    description:
      "Integrated enterprise CMS and creator monetization platform powering multi-brand digital education portals with interactive exam tools and automated workflows.",
    technologies: [
      "PHP",
      "Laravel",
      "React.js",
      "Vite",
      "Redux Toolkit",
      "MySQL",
      "REST API",
      "Midtrans",
    ],
    category: "Full Stack Web",
    image: eksamPhoto,
    imageSm: eksamPhotoSm,
    links: {
      live: "https://eksam.id",
      github: "https://gitlab.com/reesv/cms_eksam_frontend",
    },
    caseStudy: {
      background:
        "PT Eksam Digital Edukasi operates multi-platform digital learning ecosystems (eksam.id, idcpns.com, belajarpppk.com). With a growing user base of students and educators, the platform needed a robust, centralized CMS and a dedicated 'Dashboard Edukreator' for content creators to manage courses, mock exams, and revenue sharing.",
      goal: "Architect and develop an integrated full-stack CMS and creator dashboard supporting math formulas (KaTeX), question bank authoring, exam grading, creator onboarding, and automated payment gateway processing.",
      challenges: [
        {
          title: "Multi-Platform Centralized CMS",
          description:
            "Managing tryout packages, questions, users, and transactions across 3 distinct domain platforms with unified data consistency and role-based permissions.",
        },
        {
          title: "Rich Interactive Content & KaTeX Support",
          description:
            "Handling complex mathematical formulas, scientific symbols, and rich media in real-time exam questions without compromising rendering performance.",
        },
        {
          title: "Creator Onboarding & Commission Automation",
          description:
            "Building end-to-end workflows for educator applications, mentor invitations, course publishing, and accurate commission distribution with payment gateways.",
        },
      ],
      solutions: [
        "Built responsive CMS frontends using React, Vite, and Redux Toolkit with modular layouts for Tryouts, Bimbel, and Transaction reporting.",
        "Engineered robust Laravel REST APIs with JWT & Sanctum authentication, optimized Eloquent queries, and background queues for email dispatches.",
        "Integrated custom CKEditor and KaTeX libraries for seamless mathematical notation and rich question composition.",
        "Developed full-stack Dashboard Edukreator supporting creator verification, course management, and Midtrans/Xendit payment integrations.",
      ],
      architecture:
        "Modern decoupled architecture: React (Vite) Single Page Application on the CMS frontend communicating with a high-performance Laravel 9 REST API. Relational data modeling with MySQL. Payment gateway webhooks via Midtrans and Xendit. Automated email notifications and background processing.",
      results: [
        "Successfully deployed and powering 3 major digital learning platforms (eksam.id, idcpns.com, belajarpppk.com)",
        "Streamlined question management and tryout creation time by over 50%",
        "Empowered hundreds of Edukreators to publish and monetize test preparation materials seamlessly",
        "Achieved high reliability and fast response times under heavy concurrent exam access",
      ],
      lessons:
        "Developing an education platform at scale highlighted the vital need for clear API contracts, modular state management with Redux Toolkit, and robust database indexing for high-traffic tryout sessions.",
    },
  },
];

export const projectCategories = [
  "All",
  "SaaS / AI",
  "E-Commerce & POS",
  "Full Stack Web",
  "Frontend & UI",
];
