import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import OptimizedImage from "@/components/OptimizedImage";
import { projects } from "@/data/projects";

const serviceItems = [
  "Website untuk tugas akhir (TA) / skripsi dan project kampus",
  "Landing page promosi produk, event, atau personal brand",
  "Company profile website untuk UMKM dan bisnis lokal",
  "Dashboard sederhana untuk operasional internal",
  "Perbaikan, maintenance, dan pengembangan fitur website",
];

const techStack = [
  "Laravel",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "MySQL",
];

const faqs = [
  {
    question: "Bagaimana cara menentukan harga project?",
    answer:
      "Harga disesuaikan dengan scope, jumlah halaman/fitur, integrasi, dan timeline. Saya biasanya mulai dengan diskusi kebutuhan lalu memberikan estimasi transparan.",
  },
  {
    question: "Berapa lama pengerjaan website?",
    answer:
      "Landing page sederhana biasanya 3-7 hari. Website company profile 1-2 minggu. Sistem dengan dashboard menyesuaikan kompleksitas fiturnya.",
  },
  {
    question: "Apakah ada revisi?",
    answer:
      "Ya, revisi termasuk dalam paket kerja. Jumlah revisi disepakati di awal agar proses tetap efisien dan terarah.",
  },
  {
    question: "Apakah ada layanan maintenance setelah rilis?",
    answer:
      "Ada. Saya menyediakan opsi maintenance berkala untuk update konten, perbaikan bug, dan dukungan teknis setelah website online.",
  },
];

const FreelanceCimahi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Freelance Web Developer in Cimahi"
        description="Freelance web developer di Cimahi, West Java, Indonesia. Jasa pembuatan website Cimahi untuk TA/skripsi, landing page, company profile, dan dashboard sederhana."
        path="/freelance-web-developer-cimahi"
      />
      <Navigation />
      <main className="pt-20">
        <section className="section-padding bg-surface/30">
          <div className="container-portfolio max-w-5xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              Home / Freelance Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Freelance Web Developer in Cimahi
            </h1>
            <p className="portfolio-body max-w-3xl mb-4">
              Saya membantu pembuatan website sederhana dan sistem web praktis
              untuk kebutuhan personal, akademik, dan bisnis kecil. Mulai dari
              website TA/kuliah, landing page, company profile, sampai dashboard
              operasional ringan.
            </p>
            <p className="text-muted-foreground mb-8">
              Service Area: Cimahi, Bandung, West Java, Remote (Indonesia)
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:ardiansyahsulistyo@gmail.com"
                className="portfolio-button-secondary"
                aria-label="Contact via Email"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/ardiansyah-sulistyo"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button-secondary"
                aria-label="Contact via LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-portfolio max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="portfolio-subheading mb-4">Services</h2>
              <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                {serviceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="portfolio-subheading mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-portfolio max-w-6xl mx-auto">
            <h2 className="portfolio-subheading mb-8">Portfolio Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project) => (
                <article
                  key={project.id}
                  className="portfolio-card h-full flex flex-col"
                >
                  <div className="h-40 rounded-lg overflow-hidden mb-4">
                    <OptimizedImage
                      src={project.image}
                      alt={`${project.title} portfolio highlight preview`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <Link
                    to={`/project/${project.slug}`}
                    className="text-primary text-sm hover:underline"
                  >
                    View Case Study
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-portfolio max-w-5xl mx-auto">
            <h2 className="portfolio-subheading mb-8">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="portfolio-card">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreelanceCimahi;
