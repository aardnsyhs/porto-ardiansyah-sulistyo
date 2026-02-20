const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="container-portfolio">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 id="about-heading" className="portfolio-subheading mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in fade-in-delay-1">
              <h3 className="text-2xl font-semibold">
                Web Developer with a passion for clean code
              </h3>
              <div className="space-y-4 portfolio-body">
                <p>
                  I'm a graduate of SMKN 2 Cimahi with a major in Software
                  Engineering (RPL). My journey in web development started
                  during my studies, where I discovered my passion for creating
                  digital solutions that solve real-world problems.
                </p>
                <p>
                  I completed a 5-month internship at PT Javan Cipta Solusi,
                  where I honed my skills in full-stack web development.
                  Currently, I'm working as a Web Developer at PT Eksam Digital
                  Edukasi, where I continue to grow and contribute to meaningful
                  projects in the education technology sector.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying
                  up-to-date with the latest web technologies. My goal is to
                  create user-centric applications that provide exceptional
                  experiences while solving complex business challenges.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 fade-in fade-in-delay-2">
              <div className="portfolio-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
              </div>
              <div className="portfolio-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
