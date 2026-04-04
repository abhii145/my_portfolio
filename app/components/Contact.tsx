export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-slate-700 mb-12">
          I&apos;m interested in freelance opportunities and exciting projects.
          Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:your.email@example.com"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Send Me An Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-slate-300 hover:bg-slate-100 font-semibold transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border-2 border-slate-300 hover:bg-slate-100 font-semibold transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
