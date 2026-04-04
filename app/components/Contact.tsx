import Image from "next/image";
import LocationIcon from "../icon/location.svg";
import MailIcon from "../icon/mail.svg";

export default function ContactPage({ id }: { id?: string }) {
  return (
    <div className="py-8" id={id ?? "contact"}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6 text-pblue">Contact Me</h2>
        <p>
          Don&apos;t be shy! Hit me up! <span className="text-2xl">👇</span>
        </p>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 mt-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 p-2 bg-slate-100 rounded-xl flex items-center justify-center">
              <Image
                src={MailIcon}
                alt="Mail Icon"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <a
              href="mailto:abhiy145@gmail.com"
              className="text-lg font-semibold text-blue-500 hover:underline transition-colors duration-300"
              aria-label="Email Abhishek Yadav"
            >
              abhiy145@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 p-2 bg-slate-100 rounded-xl flex items-center justify-center">
              <Image
                src={LocationIcon}
                alt="Location Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
