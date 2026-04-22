import Image from "next/image";
import me from "../images/me.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell grid-pattern relative overflow-hidden rounded-[36px] px-6 py-16 sm:px-10 sm:py-20 lg:min-h-[calc(100vh-110px)] lg:px-14"
    >
      <div className="hero-orb left-0 top-16 h-40 w-40 bg-sky-500/35" />
      <div className="hero-orb bottom-10 right-16 h-48 w-48 bg-orange-500/25" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <div className="section-kicker mb-4 text-xs font-semibold">
            Full Stack Developer based in Mumbai
          </div>
          <h1 className="section-title font-[family:var(--font-space-grotesk)] text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Building sleek, scalable products with sharp frontend craft.
          </h1>
          <p className="section-copy mt-6 max-w-xl text-base leading-8 sm:text-lg">
            I&apos;m Abhishek Yadav, a full stack developer with 6 years of
            experience shipping modern web apps across fintech, ecommerce, and
            map-based platforms using React, Next.js, TypeScript, Node.js, and
            the MERN stack.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2">
              6+ years experience
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              React + Next.js
            </span>
            <span className="rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-2">
              Scalable product UI
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
            >
              View projects
            </a>
            <a
              href="/Full_Stack_Developer.pdf"
              download="Abhishek_Yadav_Resume.pdf"
              className="rounded-full border border-white/12 bg-white/5 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Download resume
            </a>
          </div>

          <div className="section-panel mt-12 grid max-w-2xl gap-6 rounded-[28px] p-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="mt-2 text-sm text-slate-400">
                polished UI features shipped for real users
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">4</p>
              <p className="mt-2 text-sm text-slate-400">
                domains across banking, ecommerce, maps, and events
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">90%+</p>
              <p className="mt-2 text-sm text-slate-400">
                test coverage on production-focused commerce flows
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="hero-image-shell w-full max-w-[460px]">
            <div className="hero-image">
              <Image
                src={me}
                alt="Profile photo"
                width={460}
                height={560}
                className="aspect-[4/5] object-cover"
                priority
              />
            </div>
            <div className="section-panel absolute -bottom-6 left-6 rounded-3xl px-5 py-4">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300">
                Current role
              </p>
              <p className="mt-1 font-semibold text-white">
                Software Engineer II at JP Morgan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
