import Image from "next/image";
import me from "../images/me.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 sm:py-32 flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-80px)] gap-12"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-block">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
            Welcome to my portfolio
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Hi, I&apos;m a{" "}
          <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-slate-800 max-w-3xl leading-relaxed">
          I craft beautiful and functional web applications. With expertise in
          modern web technologies, I turn ideas into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border-2 border-slate-300 hover:bg-slate-100 font-semibold transition-colors text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="hero-image">
          <Image
            src={me}
            alt="Profile photo"
            width={370}
            height={370}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
