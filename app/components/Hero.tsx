import Image from "next/image";
import me from "../images/me.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 sm:py-32 flex flex-col md:flex-row justify-center items-center min-h-[calc(100vh-80px)] gap-12"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins capitalize text-4xl lg:max-w-lg font-bold text-gray-700">
          Full Stack Developer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-lg mb-4 info-text font-medium text-gray-500">
          Hi, I&apos;m Abhishek Yadav. A passionate Full Stack Developer with 6
          years of professional experience in building robust Full Stack web
          applications using the <b>MERN stack & Next.js</b>. I specialize in
          creating intuitive and visually engaging web applications, with a
          strong emphasis on optimizing code for enhanced performance
        </p>

        <div className="mt-11">
          <a
            href="/Full_Stack_Developer.pdf"
            download="Abhishek_Yadav_Resume.pdf"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors inline-block"
          >
            Resume
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
