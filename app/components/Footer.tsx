
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/abhii145"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm transition-colors duration-300 hover:text-gray-500"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhiy145/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm transition-colors duration-300 hover:text-blue-500"
            aria-label="LinkedIn"
          >
           Linkedin
          </a>
          <a
            href="https://www.instagram.com/abhii145/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm transition-colors duration-300 hover:text-orange-500"
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
