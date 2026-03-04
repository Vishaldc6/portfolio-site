import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishal Chaudhary | Software Developer",
  description: "Portfolio of Vishal Chaudhary, a passionate React Native and Next.js Software Developer based in Surat, India. Explore my mobile apps, web projects, skills, and experience.",
  keywords: ["Vishal Chaudhary", "Software Developer", "React Native", "Next.js", "Portfolio", "Mobile App Developer", "Surat"],
  openGraph: {
    title: "Vishal Chaudhary | Software Developer",
    description: "Explore my mobile and web development portfolio.",
    url: "https://vishal-chaudhary-portfolio-site.vercel.app/",
    siteName: "Vishal Chaudhary Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
