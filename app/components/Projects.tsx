const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payments, inventory management, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task management tool with drag-and-drop functionality.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather application with location-based forecasts and history tracking.",
    tech: ["React", "APIs", "Tailwind CSS", "Next.js"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Content management system with markdown support and SEO optimization.",
    tech: ["Next.js", "MDX", "Vercel", "PostgreSQL"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 scroll-mt-20">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-left">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-xl transition-shadow"
          >
            <div className="h-48 bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <div className="text-white text-6xl">💼</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
