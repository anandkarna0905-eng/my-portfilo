const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/5 blur-[100px]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neon-purple/10 blur-[80px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-pink/10 blur-[60px] animate-float delay-300" />
      </div>

      {/* Orbiting particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
        <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-neon-cyan animate-orbit-one shadow-[0_0_15px_hsl(var(--neon-cyan))]" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-neon-purple animate-orbit-two shadow-[0_0_15px_hsl(var(--neon-purple))]" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-neon-pink animate-orbit-three shadow-[0_0_15px_hsl(var(--neon-pink))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-4 tracking-widest uppercase opacity-0 animate-fade-in-up">
          Welcome to my digital realm
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
          <span className="gradient-text">Alex Chen</span>
        </h1>
        
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 neon-text opacity-0 animate-fade-in-up delay-200">
          Full Stack Developer
        </h2>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-300">
          Crafting digital experiences at the intersection of elegant design and cutting-edge technology. 
          Building the future, one line of code at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-400">
          <a href="#projects" className="neon-btn">
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-lg font-display font-semibold uppercase tracking-wider border-2 border-glass-border text-foreground hover:border-neon-purple hover:text-neon-purple transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-500">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-neon-cyan animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
