/**
 * Maps technology names to modern, brand-accurate Tailwind CSS color tokens.
 * Consistent across Portfolio cards, Project Modal, and Project Detail page.
 */
export const getTechColor = (tech: string): string => {
  const normalized = tech.trim();
  const colors: Record<string, string> = {
    // Frontend Frameworks & Languages
    "React.js": "bg-sky-500/15 text-sky-400 border-sky-500/30",
    "React": "bg-sky-500/15 text-sky-400 border-sky-500/30",
    "Next.js": "bg-zinc-700/25 text-zinc-200 border-zinc-500/30",
    "Vue.js": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    "Alpine.js": "bg-teal-500/15 text-teal-300 border-teal-500/30",
    "JavaScript": "bg-amber-400/15 text-amber-300 border-amber-400/30",
    "TypeScript": "bg-blue-600/15 text-blue-300 border-blue-500/30",
    "HTML5 & CSS3": "bg-orange-500/15 text-orange-400 border-orange-500/30",
    "HTML/CSS": "bg-orange-500/15 text-orange-400 border-orange-500/30",
    "Vite": "bg-violet-500/15 text-violet-300 border-violet-500/30",

    // Backend & API
    "Laravel": "bg-red-500/15 text-red-400 border-red-500/30",
    "PHP": "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    "Node.js": "bg-green-600/15 text-green-300 border-green-500/30",
    "Express.js": "bg-slate-600/20 text-slate-300 border-slate-500/30",
    "REST API": "bg-emerald-600/15 text-emerald-400 border-emerald-500/30",
    "REST APIs": "bg-emerald-600/15 text-emerald-400 border-emerald-500/30",
    "Axios": "bg-purple-500/15 text-purple-300 border-purple-500/30",

    // Databases & ORM
    "MySQL": "bg-cyan-600/15 text-cyan-300 border-cyan-500/30",
    "PostgreSQL": "bg-blue-500/15 text-blue-300 border-blue-500/30",
    "MongoDB": "bg-emerald-600/15 text-emerald-300 border-emerald-600/30",
    "Prisma": "bg-teal-600/15 text-teal-300 border-teal-600/30",

    // Styling & UI Libraries
    "TailwindCSS": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    "Bootstrap": "bg-purple-600/15 text-purple-300 border-purple-500/30",
    "Argon SCSS": "bg-pink-500/15 text-pink-400 border-pink-500/30",
    "Radix UI": "bg-violet-600/15 text-violet-300 border-violet-500/30",

    // Content & Specialized Tools
    "KaTeX": "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    "CKEditor5": "bg-sky-500/15 text-sky-400 border-sky-500/30",
    "Sanity": "bg-red-500/15 text-red-400 border-red-500/30",
    "UploadThing": "bg-rose-500/15 text-rose-400 border-rose-500/30",
    "AI": "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30",

    // Payment & Auth
    "Midtrans": "bg-blue-600/15 text-blue-300 border-blue-500/30",
    "Xendit": "bg-cyan-600/15 text-cyan-300 border-cyan-500/30",
    "Stripe": "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    "NextAuth": "bg-pink-500/15 text-pink-400 border-pink-500/30",
    "Clerk": "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    "Zod": "bg-blue-500/15 text-blue-400 border-blue-500/30",

    // Real-time & Cloud
    "Pusher": "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
    "Ably": "bg-orange-500/15 text-orange-400 border-orange-500/30",
    "Socket.io": "bg-slate-600/15 text-slate-300 border-slate-500/30",
    "Firebase": "bg-amber-500/15 text-amber-300 border-amber-500/30",
    "SWR": "bg-zinc-600/15 text-zinc-300 border-zinc-500/30",

    // DevOps & Infra
    "Git": "bg-orange-600/15 text-orange-400 border-orange-600/30",
    "Nginx": "bg-green-600/15 text-green-400 border-green-600/30",
    "Ubuntu Server": "bg-amber-600/15 text-amber-300 border-amber-600/30",
    "Docker": "bg-sky-500/15 text-sky-300 border-sky-500/30",
  };

  return colors[normalized] || "bg-primary/10 text-primary border-primary/20";
};
