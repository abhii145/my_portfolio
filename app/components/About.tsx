export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            I&apos;m a full-stack developer with 5+ years of experience building
            web applications. I&apos;m passionate about creating elegant
            solutions to complex problems.
          </p>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open source, or sharing knowledge with
            the community.
          </p>
          <div className="flex gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <p className="text-slate-700">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">100+</div>
              <p className="text-slate-700">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <p className="text-xl font-semibold">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
