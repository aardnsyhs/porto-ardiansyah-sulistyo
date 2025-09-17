import InteractiveTimeline from './InteractiveTimeline';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-surface">
      <div className="container-portfolio">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="portfolio-subheading mb-4">Experience & Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="portfolio-body max-w-2xl mx-auto">
              My professional journey and educational background that shaped my career in web development
            </p>
          </div>

          {/* Interactive Timeline */}
          <InteractiveTimeline />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;