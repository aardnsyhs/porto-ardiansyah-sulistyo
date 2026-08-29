import { useState, useRef, useEffect } from "react";
import { animate } from "animejs";
import {
  Award,
  CheckCircle2,
  Calendar,
  Building2,
  Copy,
  Check,
  ShieldCheck,
  Code2,
  FileCheck,
} from "lucide-react";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";
import ScrambleHeading from "./ScrambleHeading";

interface CertificationItem {
  id: string;
  title: string;
  scheme: string;
  field: string;
  issuer: string;
  authorizedBy: string;
  certificateNo: string;
  registrationNo: string;
  issueDate: string;
  validUntil: string;
  status: "Active" | "Expired";
  competencies: string[];
}

const certificationsData: CertificationItem[] = [
  {
    id: "bnsp-junior-programmer",
    title: "Junior Programmer (Junior Coder) Certificate of Competence",
    scheme: "Junior Programmer Occupational Certification Scheme (Junior Coder)",
    field: "Software Development",
    issuer: "Professional Certification Agency (LSP) SMKN 2 Cimahi",
    authorizedBy: "Indonesian Professional Certification Authority (BNSP)",
    certificateNo: "62010 2512 2 0000107 2025",
    registrationNo: "Reg. J 2125 00040 2025",
    issueDate: "2 June 2025",
    validUntil: "2 June 2028 (3 Years)",
    status: "Active",
    competencies: [
      "Implement Structured Programming & clean architecture principles",
      "Design and execute efficient software algorithms",
      "Write maintainable code adhering to industry Clean Code standards",
      "Implement modern User Interface (UI) components & interactivity",
      "Perform code testing, debugging, and robust error handling",
      "Integrate relational databases and backend API services",
    ],
  },
];

const CertificationsSection = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const cards = section.querySelectorAll<HTMLElement>(".cert-card");

    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(40px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(cards, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 700,
            ease: "outCubic",
          });
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      className="section-padding bg-surface/50 border-t border-border"
      aria-labelledby="certifications-heading"
      ref={sectionRef}
    >
      <div className="container-portfolio">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <ScrambleHeading
              as="h2"
              text="Certifications & Credentials"
              id="certifications-heading"
              className="portfolio-subheading mb-4"
              duration={800}
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="portfolio-body max-w-2xl mx-auto">
              Nationally accredited certifications verifying professional
              programming competencies and industry software development standards.
            </p>
          </div>

          <div className="space-y-8">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="cert-card portfolio-card relative overflow-hidden p-6 md:p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-300"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 shadow-inner">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Officially Certified
                        </span>
                        <span className="px-2.5 py-0.5 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                          {cert.field}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {cert.scheme}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 md:items-end flex-shrink-0">
                    <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-lg border border-border">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>Valid: {cert.validUntil}</span>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 py-6 text-sm border-b border-border">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-muted-foreground block">
                          Issuing & Assessment Body:
                        </span>
                        <span className="font-medium text-foreground">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-xs text-muted-foreground block">
                          National Authority (On Behalf of):
                        </span>
                        <span className="font-medium text-foreground">
                          {cert.authorizedBy}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 bg-muted/30 p-4 rounded-xl border border-border">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-xs text-muted-foreground block">
                          Registration No:
                        </span>
                        <span className="font-mono text-xs md:text-sm font-semibold text-foreground">
                          {cert.registrationNo}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          handleCopy(cert.registrationNo, "regNo")
                        }
                        className="p-1.5 hover:bg-muted rounded-md text-muted-foreground hover:text-foreground transition-colors"
                        title="Copy Registration Number"
                        aria-label="Copy Registration Number"
                      >
                        {copiedId === "regNo" ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/60">
                      <div>
                        <span className="text-xs text-muted-foreground block">
                          Certificate No:
                        </span>
                        <span className="font-mono text-xs md:text-sm font-semibold text-foreground">
                          {cert.certificateNo}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          handleCopy(cert.certificateNo, "certNo")
                        }
                        className="p-1.5 hover:bg-muted rounded-md text-muted-foreground hover:text-foreground transition-colors"
                        title="Copy Certificate Number"
                        aria-label="Copy Certificate Number"
                      >
                        {copiedId === "certNo" ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-primary" />
                    Verified Competency Standards (SKKNI):
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {cert.competencies.map((comp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
