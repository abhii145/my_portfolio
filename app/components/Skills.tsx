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
    <section id="skills" className="py-20 sm:py-32 scroll-mt-20">
      <div className="py-1">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-3 text-pblue">
            Tech Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {iconsList.map((icon) => (
              <div
                key={icon.name}
                className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl hover:bg-slate-100 hover:scale-105"
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
  );
}
