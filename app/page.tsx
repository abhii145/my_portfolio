"use client";

import { useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import me from "./images/me.jpg";
import { icons } from "./constant/assets";
import { experiences } from "./constant/workExperience";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const iconsList = [
    { name: "HTML", src: icons.htmlIcon },
    { name: "CSS", src: icons.cssIcon },
    { name: "Tailwind CSS", src: icons.tailwindIcon },
    { name: "Storybook", src: icons.storybook },
    { name: "JavaScript", src: icons.jsIcon },
    { name: "TypeScript", src: icons.tsIcon },
    { name: "React", src: icons.reactIcon },
    { name: "Next.js", src: icons.nextjsIcon },
    { name: "Redux", src: icons.reduxIcon },
    { name: "React Query", src: icons.reactqueryIcon },
    { name: "Node", src: icons.node },
    { name: "MongoDB", src: icons.mongoDBIcon },
    { name: "Jest", src: icons.jest },
    { name: "Playwright", src: icons.playwright },
    { name: "Docker", src: icons.docker },
    { name: "Git", src: icons.gitIcon },
  ];

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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          id="home"
          className="py-20 sm:py-32 flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-80px)] gap-12"
        >
          <div className="flex-1 space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              Hi, I&apos;m a{" "}
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              I craft beautiful and functional web applications. With expertise
              in modern web technologies, I turn ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold transition-colors text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="hero-image">
              <Image
                src={me}
                alt="Profile photo"
                width={370}
                height={370}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-32 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                I&apos;m a full-stack developer with 5+ years of experience
                building web applications. I&apos;m passionate about creating
                elegant solutions to complex problems.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open source, or sharing knowledge
                with the community.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">100+</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Happy Clients
                  </p>
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

        {/* Skills Section */}
        <section id="skills" className="py-20 sm:py-32 scroll-mt-20">
          <div className="py-1">
            <div className="container mx-auto">
              <h2 className="text-3xl font-semibold mb-6 text-blue-600">
                Tech Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                {iconsList.map((icon) => (
                  <div
                    key={icon.name}
                    className="w-28 h-28 flex items-center justify-center bg-white dark:bg-slate-900 rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105"
                  >
                    <Image
                      src={
                        icon.src &&
                        typeof icon.src === "object" &&
                        "src" in icon.src
                          ? icon.src.src
                          : icon.src
                      }
                      alt={icon.name}
                      width={80}
                      height={80}
                      className="w-20 h-20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 sm:py-32 scroll-mt-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-left">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            <VerticalTimeline>
              {experiences.map((exp, idx) => (
                <VerticalTimelineElement
                  key={idx}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(248 250 252)",
                    color: "#0f172a",
                    border: "1px solid rgb(226 232 240)",
                    borderRadius: "0.75rem",
                    boxShadow:
                      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgb(248 250 252)",
                  }}
                  date={exp.date}
                  iconStyle={{
                    background:
                      "linear-gradient(to bottom right, #2563eb, #9333ea)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                  icon={
                    <div className="flex items-center justify-center w-full h-full">
                      <Image
                        src={exp.icon}
                        alt={`${exp.company_name} logo`}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                  }
                >
                  <div className="p-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6">
                        <Image
                          src={exp.icon}
                          alt={`${exp.company_name} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </span>
                      {exp.company_name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.points}
                    </p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 sm:py-32 scroll-mt-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-left">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-6xl">💼</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-32 scroll-mt-20">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
              I&apos;m interested in freelance opportunities and exciting
              projects. Feel free to reach out!
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
                className="px-8 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 font-semibold transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-600 dark:text-slate-400">
          <p className="mb-4">© 2024 My Portfolio. All rights reserved.</p>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="#"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-sm">Designed & Built with ❤️</p>
        </div>
      </footer>
    </div>
  );
}
