import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { experiences } from "../constant/workExperience";

export default function Experience() {
  return (
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
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  {exp.title}
                </h3>
                <h4 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
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
                <p className="text-slate-700 leading-relaxed">{exp.points}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
