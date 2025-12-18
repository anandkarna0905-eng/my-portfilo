const projects = [
  {
    title: "NeuroSync AI",
    description: "An AI-powered productivity platform that learns your work patterns and optimizes your daily workflow with smart automation.",
    tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
    link: "https://github.com"
  },
  {
    title: "CryptoVault",
    description: "Secure cryptocurrency portfolio tracker with real-time analytics, price alerts, and multi-wallet management.",
    tech: ["Next.js", "Node.js", "Redis", "WebSocket"],
    link: "https://github.com"
  },
  {
    title: "CloudDeploy",
    description: "One-click deployment platform for containerized applications with automated scaling and monitoring.",
    tech: ["Go", "Docker", "Kubernetes", "AWS"],
    link: "https://github.com"
  },
  {
    title: "DataStream",
    description: "Real-time data visualization dashboard for IoT devices with customizable widgets and alerting system.",
    tech: ["Vue.js", "GraphQL", "InfluxDB", "MQTT"],
    link: "https://github.com"
  },
  {
    title: "SecureAuth",
    description: "Enterprise-grade authentication microservice with OAuth2, MFA, and biometric support.",
    tech: ["TypeScript", "NestJS", "MongoDB", "JWT"],
    link: "https://github.com"
  },
  {
    title: "CodeCollab",
    description: "Real-time collaborative code editor with video chat, version control, and AI-assisted code review.",
    tech: ["React", "WebRTC", "Socket.io", "OpenAI"],
    link: "https://github.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-neon-purple/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built, from AI applications to cloud infrastructure
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 group block"
            >
              {/* Project icon placeholder */}
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  className="w-6 h-6 text-neon-cyan" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                  />
                </svg>
              </div>

              <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="font-body text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-body px-2 py-1 rounded bg-glass/50 text-neon-cyan/80 border border-neon-cyan/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link indicator */}
              <div className="flex items-center gap-2 text-sm font-body text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300">
                <span>View Project</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
