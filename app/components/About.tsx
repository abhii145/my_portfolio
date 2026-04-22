import Image from "next/image";
import workingMacImage from "../images/working_mac.png";

export default function About() {
  return (
    <section
      id="about"
      className="section-shell scroll-mt-24 rounded-[36px] px-6 py-14 sm:px-10 lg:px-12"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="section-panel relative overflow-hidden rounded-[30px] p-4">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-orange-400/10" />
          <div className="relative flex justify-center rounded-[24px]">
            <Image
              src={workingMacImage}
              alt="Working on a Mac"
              className="h-auto w-full max-w-full object-contain"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>

        <div>
          <p className="section-kicker text-xs font-semibold">About me</p>
          <h2 className="section-title mt-3 font-[family:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            I design frontend experiences that feel crisp, useful, and
            production-ready.
          </h2>
          <p className="section-copy mt-6 text-base leading-8 sm:text-lg">
            My work sits at the intersection of thoughtful interface design and
            reliable engineering. I enjoy translating complex workflows into
            clear product experiences, then backing them with reusable
            components, testing, and performance-focused implementation.
          </p>
          <p className="section-copy mt-4 text-base leading-8 sm:text-lg">
            Over the last 6 years, I&apos;ve worked across banking, ecommerce,
            event platforms, and location-based products. That range has helped
            me balance business needs, speed, and code quality without losing
            the details that make a UI feel premium.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-sky-300">
                Focus
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Design systems, product UI, and scalable frontend architecture
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-orange-300">
                Strength
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Turning complex flows into fast, accessible, maintainable apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
