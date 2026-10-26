import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md. Ahbab Hussain Arabi | Full Stack Web Developer",
  description: "Portfolio of Md. Ahbab Hussain Arabi - Full Stack Web Developer specializing in Next.js, React, and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0B0F19] text-gray-100">{children}</body>
    </html>
  );
}