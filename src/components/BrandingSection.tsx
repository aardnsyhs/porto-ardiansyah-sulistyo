import { Code2, Zap, Users, Sparkles } from 'lucide-react';

const BrandingSection = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that's easy to understand and collaborate on."
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimizing every aspect for speed, efficiency, and the best user experience."
    },
    {
      icon: Users,
      title: "Accessible UI",
      description: "Building interfaces that everyone can use, with WCAG standards and inclusive design."
    },
    {
      icon: Sparkles,
      title: "Modern Approach",
      description: "Using cutting-edge tools and best practices to create future-proof solutions."
    }
  ];

  return (
    <section className="py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-3">What Makes Me Different</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I focus on the details that matter — creating web experiences that are fast, accessible, and built to last.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-surface/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
