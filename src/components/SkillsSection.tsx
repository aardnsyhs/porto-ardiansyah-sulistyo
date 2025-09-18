import { 
  Code2, 
  Palette, 
  Zap, 
  Cpu, 
  Server, 
  Database, 
  GitBranch, 
  Box, 
  Globe,
  Layout,
  Layers
} from 'lucide-react';
import SkillsVisualization from './SkillsVisualization';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "HTML5", level: 95, icon: Code2 },
        { name: "CSS3", level: 90, icon: Palette },
        { name: "JavaScript", level: 85, icon: Zap },
        { name: "React.js", level: 80, icon: Cpu },
        { name: "Vue.js", level: 75, icon: Layers },
        { name: "TailwindCSS", level: 90, icon: Palette },
        { name: "Bootstrap", level: 85, icon: Layout }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "PHP", level: 85, icon: Code2 },
        { name: "Laravel", level: 80, icon: Server },
        { name: "Node.js", level: 70, icon: Cpu }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, icon: Database },
        { name: "PostgreSQL", level: 80, icon: Database }
      ]
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 85, icon: GitBranch },
        { name: "Docker", level: 70, icon: Box },
        { name: "REST APIs", level: 80, icon: Globe }
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className={`portfolio-card fade-in fade-in-delay-${categoryIndex + 1} group hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center justify-center mb-6">
                  <category.icon className="w-6 h-6 text-primary mr-2 group-hover:animate-pulse" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <skill.icon className="w-4 h-4 text-muted-foreground mr-2 group-hover:text-primary transition-colors" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Visualization */}
          <div className="mb-16 fade-in fade-in-delay-4">
            <h3 className="text-center text-lg font-semibold mb-8">
              Core Skills Overview
            </h3>
            <div className="max-w-4xl mx-auto">
              <SkillsVisualization 
                skills={[
                  { name: 'Frontend', level: 88, category: 'development' },
                  { name: 'Backend', level: 78, category: 'development' },
                  { name: 'Database', level: 82, category: 'data' },
                  { name: 'DevOps', level: 70, category: 'infrastructure' },
                  { name: 'UI/UX', level: 75, category: 'design' },
                  { name: 'Problem Solving', level: 90, category: 'soft-skills' }
                ]}
                type="bar"
              />
            </div>
          </div>

          {/* Tech Icons */}
          <div className="fade-in fade-in-delay-5">
            <h3 className="text-center text-lg font-semibold mb-8 text-muted-foreground">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                { name: 'HTML5', icon: Code2 }, 
                { name: 'CSS3', icon: Palette }, 
                { name: 'JavaScript', icon: Zap }, 
                { name: 'React', icon: Cpu }, 
                { name: 'Vue.js', icon: Layers }, 
                { name: 'PHP', icon: Code2 }, 
                { name: 'Laravel', icon: Server }, 
                { name: 'TailwindCSS', icon: Palette }, 
                { name: 'MySQL', icon: Database }, 
                { name: 'PostgreSQL', icon: Database }
              ].map((tech, index) => (
                <div 
                  key={tech.name}
                  className="flex items-center px-4 py-2 bg-muted rounded-lg hover:bg-accent hover:scale-105 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <tech.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary mr-2 transition-colors group-hover:animate-pulse" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
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