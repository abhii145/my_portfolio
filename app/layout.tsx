import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Yadav | Full Stack Developer",
  description:
    "Portfolio of Abhishek Yadav, a passionate Full Stack Developer with 6 years of experience in building robust web applications using the MERN stack and Next.js.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-[family:var(--font-manrope)]">
        {children}
      </body>
    </html>
  );
}
