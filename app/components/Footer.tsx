export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-700">
        <p className="mb-4">© 2024 My Portfolio. All rights reserved.</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-slate-900 transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            GitHub
          </a>
        </div>
        <p className="text-sm">Designed & Built with ❤️</p>
      </div>
    </footer>
  );
}
