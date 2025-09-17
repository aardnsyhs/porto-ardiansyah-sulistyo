import profilePhoto from "@/assets/profile-photo.jpg";
import TypingEffect from "./TypingEffect";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground className="z-0" particleCount={60} speed={0.3} />

      <div className="container-portfolio relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Photo */}
          <div className="fade-in">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-border shadow-lg">
              <img
                src={profilePhoto}
                alt="Ardiansyah Sulistyo - Web Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4 fade-in fade-in-delay-1">
            <h1 className="portfolio-heading">Ardiansyah Sulistyo</h1>
            <div className="portfolio-subheading text-muted-foreground">
              <TypingEffect
                texts={[
                  "Web Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "Full Stack Developer",
                ]}
                speed={120}
                deleteSpeed={60}
                delayBetween={2500}
              />
            </div>
            <p className="portfolio-body max-w-2xl mx-auto">
              Passionate web developer with expertise in modern web
              technologies. Currently working at PT Eksam Digital Edukasi,
              crafting digital solutions that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in fade-in-delay-2">
            <button
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="portfolio-button-primary"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="portfolio-button-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
