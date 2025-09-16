const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "TailwindCSS", level: 90 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "Node.js", level: 70 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "REST APIs", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="portfolio-subheading mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="portfolio-body max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className={`portfolio-card fade-in fade-in-delay-${categoryIndex + 1}`}
              >
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Icons */}
          <div className="mt-16 fade-in fade-in-delay-3">
            <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Tech logos would go here - using text for now */}
              {[
                'HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 
                'PHP', 'Laravel', 'TailwindCSS', 'MySQL', 'PostgreSQL'
              ].map((tech) => (
                <div 
                  key={tech}
                  className="px-4 py-2 bg-surface rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;