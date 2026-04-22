const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-[family:var(--font-space-grotesk)] text-lg font-bold">
            Abhishek Yadav
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="https://github.com/abhii145"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors duration-300 hover:bg-white/10"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhiy145/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors duration-300 hover:bg-white/10"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/abhii145/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors duration-300 hover:bg-white/10"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
