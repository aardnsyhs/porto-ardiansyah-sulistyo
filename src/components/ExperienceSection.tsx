const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "PT Eksam Digital Edukasi",
      period: "July 2024 - Present",
      type: "Full-time",
      description: [
        "Developing and maintaining web applications for education technology platforms",
        "Collaborating with cross-functional teams to deliver high-quality software solutions",
        "Implementing responsive designs and optimizing application performance",
        "Working with modern web technologies to enhance user experience"
      ],
      technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "TailwindCSS"]
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "PT Javan Cipta Solusi",
      period: "February 2024 - June 2024",
      type: "Internship",
      description: [
        "Completed a comprehensive 5-month internship program",
        "Developed full-stack web applications using modern frameworks",
        "Participated in code reviews and learned industry best practices",
        "Contributed to various client projects and gained real-world experience"
      ],
      technologies: ["PHP", "Laravel", "React.js", "MySQL", "Bootstrap"]
    },
    {
      id: 3,
      title: "Software Engineering Student",
      company: "SMKN 2 Cimahi",
      period: "2021 - 2024",
      type: "Education",
      description: [
        "Majored in Software Engineering (RPL - Rekayasa Perangkat Lunak)",
        "Learned fundamental programming concepts and web development",
        "Completed various projects using different programming languages",
        "Graduated with strong foundation in software development principles"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Java"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-surface">
      <div className="container-portfolio">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="portfolio-subheading mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="portfolio-body max-w-2xl mx-auto">
              My professional journey and educational background in web development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } fade-in fade-in-delay-${index + 1}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-6"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <div className="portfolio-card">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="portfolio-label text-primary">{exp.type}</span>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4 portfolio-body">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;