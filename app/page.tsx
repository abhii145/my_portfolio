"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <div className="bg-slate-50">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
        </main>
      </div>

      <div className="bg-slate-100">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skills />
        </main>
      </div>

      <div className="bg-slate-50">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
        </main>
      </div>

      <div className="bg-slate-100">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Experience />
        </main>
      </div>

      <div className="bg-slate-50">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Projects />
        </main>
      </div>

      <div className="bg-slate-100">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  );
}
