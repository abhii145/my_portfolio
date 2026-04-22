"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects, technologyIcons } from "../constant/project";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="section-shell scroll-mt-24 rounded-[36px] px-6 py-14 sm:px-10 lg:px-12"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker text-xs font-semibold">Projects</p>
          <h2 className="section-title mt-3 font-[family:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            A few builds that show how I approach product UI and engineering.
          </h2>
        </div>
        <p className="section-copy max-w-xl text-sm leading-7 sm:text-base">
          These projects highlight full stack execution, strong frontend
          structure, and an eye for interfaces that feel refined instead of
          generic.
        </p>
      </div>

      <div className="project-slider mt-10">
        <Slider {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-1 pb-14">
              <article className="section-panel overflow-hidden rounded-[32px] border border-white/10">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-[280px] bg-gradient-to-br from-sky-400/12 via-slate-950 to-orange-400/12 p-5 sm:min-h-[360px] sm:p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
                    <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/80">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                          Featured project
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-5 font-[family:var(--font-space-grotesk)] text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div className="flex flex-wrap gap-3">
                        {project.technology.map((techKey) => {
                          const iconSrc =
                            technologyIcons[
                              techKey as keyof typeof technologyIcons
                            ];

                          return (
                            <div
                              key={techKey}
                              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_10px_24px_rgba(15,23,42,0.16)]"
                              title={techKey
                                .replace("Icon", "")
                                .replace("icon", "")}
                            >
                              <Image
                                src={iconSrc}
                                alt={techKey}
                                width={26}
                                height={26}
                                className="object-contain"
                              />
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
                        >
                          Live demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                        >
                          View code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
