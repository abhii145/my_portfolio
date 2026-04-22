import Image from "next/image";
import { icons } from "../constant/assets";

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

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell section-panel scroll-mt-24 rounded-[36px] px-6 py-14 sm:px-10 lg:px-12"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker text-xs font-semibold">Tech stack</p>
          <h2 className="section-title mt-3 font-[family:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            Tools I rely on to build fast, testable products.
          </h2>
        </div>
        <p className="section-copy max-w-xl text-sm leading-7 sm:text-base">
          I care about maintainable systems just as much as polished UI, so my
          stack leans toward frontend quality, predictable state, and reliable
          delivery workflows.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
        {iconsList.map((icon) => (
          <div
            key={icon.name}
            className="group rounded-[28px] border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/8"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.18)]">
              <Image
                src={
                  icon.src && typeof icon.src === "object" && "src" in icon.src
                    ? icon.src.src
                    : icon.src
                }
                alt={icon.name}
                width={34}
                height={34}
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-white">{icon.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
