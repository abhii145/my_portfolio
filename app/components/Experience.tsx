"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences } from "../constant/workExperience";
import { education } from "../constant/education";

const tabs = [
  { id: "work", label: "Work Experience" },
  { id: "education", label: "Education" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabId>("work");
  const items = activeTab === "work" ? experiences : education;

  return (
    <section
      id="experience"
      className="section-shell section-panel scroll-mt-24 rounded-[36px] px-6 py-14 sm:px-10 lg:px-12"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="section-kicker text-xs font-semibold">Journey</p>
          <h2 className="section-title mt-3 font-[family:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            Experience shaped by product thinking and frontend ownership.
          </h2>
        </div>

        <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative mt-10">
        <div className=" absolute left-5 top-0 hidden h-full w-px lg:block" />
        <div className="space-y-6">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${item.date}-${index}`}
              className="relative grid gap-4 rounded-[30px] border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/[0.07] lg:grid-cols-[72px_1fr]"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_12px_28px_rgba(15,23,42,0.18)] lg:h-[72px] lg:w-[72px]">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <div>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-sky-300">
                      {item.date}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <h3 className="font-[family:var(--font-space-grotesk)] text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <span className="text-slate-500">|</span>
                      <p className="text-base text-slate-300">
                        {item.company_name}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    {activeTab === "work" ? "Professional" : "Academic"}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
