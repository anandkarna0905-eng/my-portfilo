const skills = [
  "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
  "AWS", "Docker", "GraphQL", "Next.js", "TailwindCSS", "Redis"
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Industries",
    period: "2022 - Present",
    description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies."
  },
  {
    title: "Full Stack Developer",
    company: "StartupX",
    period: "2020 - 2022",
    description: "Built and scaled multiple SaaS products from zero to thousands of users."
  },
  {
    title: "Frontend Developer",
    company: "DigitalAgency",
    period: "2018 - 2020",
    description: "Created responsive web applications and interactive user interfaces for various clients."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio and Skills */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-semibold mb-4 neon-text">
                Who I Am
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with over 5 years of experience building 
                web applications that make a difference. I specialize in creating seamless 
                user experiences backed by robust, scalable architectures.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, 
                contributing to open-source projects, or mentoring aspiring developers. 
                I believe in the power of clean code and continuous learning.
              </p>
            </div>

            {/* Skills */}
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 neon-text-purple">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="skill-badge"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="glass-card p-8">
            <h3 className="font-display text-2xl font-semibold mb-8 neon-text">
              Experience
            </h3>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="mb-1">
                    <span className="font-body text-sm text-neon-cyan">{exp.period}</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    {exp.title}
                  </h4>
                  <p className="font-body text-neon-purple mb-2">{exp.company}</p>
                  <p className="font-body text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
