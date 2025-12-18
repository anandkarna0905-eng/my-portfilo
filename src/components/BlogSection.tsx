const blogPosts = [
  {
    title: "Building Scalable APIs with GraphQL",
    excerpt: "Learn how to design and implement efficient GraphQL APIs that can handle millions of requests.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Backend"
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the next decade of web development.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Industry"
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how to use them to write more reusable code.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Frontend"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Blog
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my journey in tech
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="glass-card p-6 group cursor-pointer"
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-display uppercase tracking-wider text-neon-purple px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10">
                  {post.category}
                </span>
                <span className="text-xs font-body text-muted-foreground">
                  {post.readTime}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                {post.title}
              </h3>

              <p className="font-body text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-glass-border/50">
                <span className="text-sm font-body text-muted-foreground">
                  {post.date}
                </span>
                <span className="flex items-center gap-2 text-sm font-body text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300">
                  Read More
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
