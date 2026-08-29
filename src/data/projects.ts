import eCommercePhoto from "@/assets/optimized/e-commerce-photo-1200w.webp";
import eCommercePhotoSm from "@/assets/optimized/e-commerce-photo-600w.webp";
import summizeItPhoto from "@/assets/optimized/summizeit-photo-1200w.webp";
import summizeItPhotoSm from "@/assets/optimized/summizeit-photo-600w.webp";
import nexabookPhoto from "@/assets/optimized/nexabook-photo-1200w.webp";
import nexabookPhotoSm from "@/assets/optimized/nexabook-photo-600w.webp";
import syncspacePhoto from "@/assets/optimized/syncspace-photo-1200w.webp";
import syncspacePhotoSm from "@/assets/optimized/syncspace-photo-600w.webp";
import eksamPhoto from "@/assets/optimized/eksam-photo-1200w.webp";
import eksamPhotoSm from "@/assets/optimized/eksam-photo-600w.webp";
import cmsEksamPhoto from "@/assets/optimized/cms-eksam-1200w.webp";
import cmsEksamPhotoSm from "@/assets/optimized/cms-eksam-600w.webp";
import cmsIdcpnsPhoto from "@/assets/optimized/cms-idcpns-1200w.webp";
import cmsIdcpnsPhotoSm from "@/assets/optimized/cms-idcpns-600w.webp";
import cmsPppkPhoto from "@/assets/optimized/cms-pppk-1200w.webp";
import cmsPppkPhotoSm from "@/assets/optimized/cms-pppk-600w.webp";

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
    slug: "dashboard-edukreator",
    title: "Dashboard Edukreator - Eksam.id",
    description:
      "Full-stack creator monetization and management portal for course creation, mentor onboarding, question authoring, and automated revenue settlements on eksam.id.",
    technologies: [
      "Laravel",
      "PHP",
      "Alpine.js",
      "MySQL",
      "Midtrans",
      "Xendit",
      "Bootstrap",
    ],
    category: "Full Stack Web",
    image: eksamPhoto,
    imageSm: eksamPhotoSm,
    links: {
      live: "",
      github: "",
    },
    caseStudy: {
      background:
        "Eksam.id needed a dedicated creator portal allowing educators to publish paid mock exams, invite co-mentors, and track revenue seamlessly across their courses.",
      goal: "Develop the end-to-end Dashboard Edukreator with creator verification workflows, tryout & course builders, and automated payment gateway integrations.",
      challenges: [
        {
          title: "Mentor & Team Invitation Isolation",
          description:
            "Ensuring assigned co-mentors and staff only access designated exam items without compromising the creator's full product catalog.",
        },
        {
          title: "Payment & Commission Settlements",
          description:
            "Automating commission calculations, platform fee deductions, and webhook verification across multiple payment gateways (Midtrans and Xendit).",
        },
        {
          title: "Seamless Creator Onboarding",
          description:
            "Building intuitive profile, CV, and bank account verification flows for aspiring educators.",
        },
      ],
      solutions: [
        "Built dynamic UI with Laravel Blade and Alpine.js for real-time reactivity without heavy client bundle overhead.",
        "Engineered transactional payout and commission ledger in MySQL to eliminate double-crediting.",
        "Implemented automated email notification pipelines for mentor invitations and course approval statuses.",
        "Integrated Midtrans and Xendit webhooks with strict signature validation.",
      ],
      architecture:
        "Full-stack Laravel 9 application leveraging Blade and Alpine.js on the client layer, MySQL relational database, Midtrans & Xendit payment gateways, and background queue workers for asynchronous notifications.",
      results: [
        "Empowered hundreds of Edukreators to monetize mock exams and learning modules",
        "Streamlined creator onboarding time from days to minutes",
        "Automated commission calculations with 100% financial reconciliation accuracy",
        "Successfully handled thousands of active student course enrollments",
      ],
      lessons:
        "Developing this marketplace portal provided deep experience in financial ledger design, role-based sub-account permissions, and building high-trust creator onboarding flows.",
    },
  },
  {
    id: 2,
    slug: "cms-eksam",
    title: "CMS Eksam.id",
    description:
      "Integrated enterprise CMS admin dashboard for Eksam.id managing exam packages, KaTeX mathematical question banks, tryout assignments, and student performance analytics.",
    technologies: [
      "React.js",
      "Vite",
      "Laravel",
      "MySQL",
      "KaTeX",
      "CKEditor5",
      "REST API",
      "Axios",
    ],
    category: "Enterprise CMS",
    image: cmsEksamPhoto,
    imageSm: cmsEksamPhotoSm,
    links: {
      live: "",
      github: "",
    },
    caseStudy: {
      background:
        "Eksam.id is a comprehensive digital education portal that requires administrators and educators to rapidly create, curate, and deploy complex examination packages.",
      goal: "Build a modern React Single Page Application CMS enabling math formula rendering (KaTeX), question bank authoring, tryout formation assigning, and student score analytics.",
      challenges: [
        {
          title: "Complex Math & Formula Composition",
          description:
            "Supporting LaTeX / KaTeX mathematical equations and rich media in real-time exam questions without performance bottlenecks.",
        },
        {
          title: "Multi-Step Form State Management",
          description:
            "Managing complex multi-step question and package creation wizards with extensive validation states.",
        },
        {
          title: "High-Volume Data Operations",
          description:
            "Handling thousands of questions and student submissions with responsive searching, filtering, and bulk operations.",
        },
      ],
      solutions: [
        "Developed responsive Single Page Application using React 18, Vite, and modular service-based API handlers.",
        "Integrated custom CKEditor5 build with live KaTeX preview for seamless formula editing.",
        "Built optimized Laravel REST APIs with JWT authentication, indexed database queries, and structured JSON responses.",
        "Implemented interactive charts (Chart.js / Recharts) for real-time exam metrics and score distributions.",
      ],
      architecture:
        "Decoupled architecture: React + Vite SPA on frontend communicating with Laravel 9 REST API backend via Axios. MySQL handles relational data with optimized indexing. Custom CKEditor5 with KaTeX for scientific notations.",
      results: [
        "Cut tryout authoring and package compilation time by 50%",
        "Zero rendering lag for complex mathematical and scientific questions",
        "Streamlined daily content management operations for education staff",
        "High Lighthouse performance and snappy client-side navigation",
      ],
      lessons:
        "This project deepened my expertise in rich-text AST manipulation, mathematical equation parsing, and building performant React single page applications.",
    },
  },
  {
    id: 3,
    slug: "cms-idcpns",
    title: "CMS IDCPNS.com",
    description:
      "Centralized civil service examination CMS for IDCPNS.com featuring SKD/CPNS formation modules, passing grade threshold calculators, and real-time applicant rankings.",
    technologies: [
      "React.js",
      "Vite",
      "Laravel",
      "MySQL",
      "REST API",
      "Bootstrap",
      "Axios",
    ],
    category: "Enterprise CMS",
    image: cmsIdcpnsPhoto,
    imageSm: cmsIdcpnsPhotoSm,
    links: {
      live: "",
      github: "",
    },
    caseStudy: {
      background:
        "IDCPNS.com prepares candidates for the official Indonesian Civil Servant (CPNS/SKD) examination, which requires strict time management, dynamic passing grade formulas, and ranking rules.",
      goal: "Engineer a dedicated CMS to manage CPNS formation packages (TIU, TWK, TKP), question pools, automated passing grade validation, and applicant performance metrics.",
      challenges: [
        {
          title: "Dynamic Passing Grade Matrix",
          description:
            "Applying customizable passing grade rules across various government formation categories with automatic pass/fail tagging.",
        },
        {
          title: "Leaderboard & Score Calculation",
          description:
            "Generating real-time national leaderboard rankings based on weighted sub-test scores under heavy exam traffic.",
        },
        {
          title: "Modular Package Configuration",
          description:
            "Allowing administrators to easily bundle, price, and schedule different mock test sets.",
        },
      ],
      solutions: [
        "Built intuitive React SPA admin interface utilizing Argon SCSS and Bootstrap components.",
        "Implemented standardized REST API endpoints in Laravel with JWT security.",
        "Engineered server-side scoring algorithms with optimized queries to compute instant leaderboards.",
        "Created flexible question categorization modules for rapid question bank searching.",
      ],
      architecture:
        "Modern React 18 + Vite frontend connected to a Laravel 9 REST API via Axios. Relational database in MySQL with dedicated scoring views.",
      results: [
        "Successfully managed hundreds of CPNS mock examination packages",
        "Instant score and ranking calculation across thousands of simultaneous test takers",
        "Simplified test configuration workflows for administrative staff",
      ],
      lessons:
        "Gained deep understanding of domain-specific scoring algorithms and designing modular admin UIs that non-technical operations teams can master effortlessly.",
    },
  },
  {
    id: 4,
    slug: "cms-belajarpppk",
    title: "CMS BelajarPPPK.com",
    description:
      "Specialized competency exam CMS for BelajarPPPK.com managing teacher & technical PPPK modules, live class schedules, and transaction reconciliation.",
    technologies: [
      "React.js",
      "Vite",
      "Laravel",
      "MySQL",
      "REST API",
      "Argon SCSS",
      "Axios",
    ],
    category: "Enterprise CMS",
    image: cmsPppkPhoto,
    imageSm: cmsPppkPhotoSm,
    links: {
      live: "",
      github: "",
    },
    caseStudy: {
      background:
        "BelajarPPPK.com delivers intensive training and mock simulations for government contractual employee exams (PPPK Guru, Teknis, Manajerial, and Sosio-Kultural).",
      goal: "Build an integrated CMS to manage tiered competency question matrices, bimbel webinar class calendars, student enrollment lists, and financial settlement summaries.",
      challenges: [
        {
          title: "Multi-Competency Question Matrices",
          description:
            "Organizing diverse question categories with distinct passing standards and weighted scoring schemes.",
        },
        {
          title: "Bimbel Webinar & Class Scheduling",
          description:
            "Coordinating online tutoring sessions, mentor assignments, and attendee rosters.",
        },
        {
          title: "Financial & Order Reconciliation",
          description:
            "Tracking package purchases, discount vouchers, and settlement reports in real time.",
        },
      ],
      solutions: [
        "Constructed a clean, high-contrast dark/light dashboard in React with modular view components.",
        "Built robust question pool manager with Excel import/export using PhpSpreadsheet on the Laravel backend.",
        "Designed live class scheduler with calendar views and automated participant sync.",
        "Implemented real-time financial reporting widgets with status filtering.",
      ],
      architecture:
        "React + Vite Single Page Application on the client, backed by Laravel 9 REST APIs and MySQL. Styled with Argon SCSS for cohesive design system consistency.",
      results: [
        "Streamlined administrative overhead for managing tens of thousands of PPPK test applicants",
        "Eliminated class scheduling conflicts with real-time mentor calendars",
        "Provided instant financial reconciliation for management accounting",
      ],
      lessons:
        "Strengthened skills in multi-category data modeling, bulk data import/export workflows, and crafting responsive analytics dashboards.",
    },
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
];

export const projectCategories = [
  "All",
  "Enterprise CMS",
  "Full Stack Web",
  "SaaS / AI",
  "E-Commerce & POS",
];
