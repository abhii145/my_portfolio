import Image from "next/image";
import LocationIcon from "../icon/location.svg";
import MailIcon from "../icon/mail.svg";

export default function ContactPage({ id }: { id?: string }) {
  return (
    <section
      className="section-shell section-panel rounded-[36px] px-6 py-14 sm:px-10 lg:px-12"
      id={id ?? "contact"}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-kicker text-xs font-semibold">Contact</p>
          <h2 className="section-title mt-3 font-[family:var(--font-space-grotesk)] text-3xl font-bold sm:text-4xl">
            Let&apos;s build something clean, modern, and genuinely useful.
          </h2>
          <p className="section-copy mt-6 max-w-xl text-base leading-8 sm:text-lg">
            If you&apos;re hiring, collaborating, or just want to talk product and
            frontend engineering, I&apos;m always happy to connect.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_10px_24px_rgba(15,23,42,0.16)]">
                <Image
                  src={MailIcon}
                  alt="Mail Icon"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-sky-300">
                  Email
                </p>
                <a
                  href="mailto:abhiy145@gmail.com"
                  className="mt-2 block text-lg font-semibold text-white transition-colors duration-300 hover:text-sky-300"
                  aria-label="Email Abhishek Yadav"
                >
                  abhiy145@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_10px_24px_rgba(15,23,42,0.16)]">
                <Image
                  src={LocationIcon}
                  alt="Location Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-orange-300">
                  Location
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-dashed border-white/12 bg-slate-950/40 p-5 text-sm leading-7 text-slate-300 sm:p-6">
            Available for frontend-heavy full stack roles, freelance product
            work, and collaborative UI engineering projects.
          </div>
        </div>
      </div>
    </section>
  );
}
