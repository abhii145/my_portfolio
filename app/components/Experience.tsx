"use client";

import { useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constant/workExperience";
import { education } from "../constant/education";

const highlightKeywords = (text: string, keywords: string[]) => {
  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
  return text.replace(
    regex,
    (match) =>
      `<span style="text-decoration: underline; color: #20a7db">${match}</span>`,
  );
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  const keywordsToHighlight = ["Banking Domain", "Ecommerce site", "map-based"];

  return (
    <section id="experience" className="py-20 sm:py-32 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between gap-6 mb-12">
          <button
            className={`text-xl font-semibold pb-2 transition-colors ${
              activeTab === "work"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-slate-600 hover:text-slate-700"
            }`}
            onClick={() => setActiveTab("work")}
          >
            Work Experience
          </button>
          <button
            className={`text-xl font-semibold pb-2 transition-colors ${
              activeTab === "education"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-slate-600 hover:text-slate-700"
            }`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>

        {activeTab === "work" && (
          <VerticalTimeline animate>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: experience.iconBg,
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${experience.iconBg}`,
                }}
                date={experience.date}
                iconStyle={{
                  background: experience.iconBg,
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                }}
                icon={
                  <Image
                    src={experience.icon}
                    alt="Company Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                }
              >
                <h4 className="vertical-timeline-element-subtitle font-bold">
                  {experience.company_name} <span className="mr-1">|</span>
                  <span className="vertical-timeline-element-title font-light">
                    {experience.title}
                  </span>
                </h4>

                <ul className="list-disc pl-5 mt-2">
                  {experience.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-slate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(point, keywordsToHighlight),
                      }}
                    />
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        )}

        {activeTab === "education" && (
          <VerticalTimeline animate>
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{
                  background: edu.iconBg,
                  color: "#000",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${edu.iconBg}`,
                }}
                date={edu.date}
                iconStyle={{
                  background: edu.iconBg,
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                }}
                icon={
                  <Image
                    src={edu.icon}
                    alt="Education Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                }
              >
                <h4 className="vertical-timeline-element-subtitle font-bold">
                  {edu.company_name} <span className="ml-3">|</span>
                  <span className="vertical-timeline-element-title font-light ml-3">
                    {edu.title}
                  </span>
                </h4>

                <ul className="list-disc pl-5 mt-2">
                  {edu.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-slate-700 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(point, keywordsToHighlight),
                      }}
                    />
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        )}
      </div>
    </section>
  );
}
