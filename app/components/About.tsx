import Image from "next/image";
import workingMacImage from "../images/working_mac.png";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            👋 Hey there! I&apos;m Abhishek Yadav, a passionate Full Stack
            Developer with 6 years of hands-on experience in crafting
            captivating web experiences.
          </p>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            🚀 My journey began with HTML and CSS, and over the years, I&apos;ve
            honed my skills in JavaScript and TypeScript, using them to bring
            ideas to life and create dynamic user interfaces.
          </p>
          <p className="text-lg text-slate-700 mb-4 leading-relaxed">
            ⚛️ I thrive in the world of React.js and Next.js, utilizing these
            powerful tools to build responsive, performant, and user-friendly
            applications that leave a lasting impression.
          </p>
        </div>
        <div>
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src={workingMacImage}
              alt="Working on a Mac"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
