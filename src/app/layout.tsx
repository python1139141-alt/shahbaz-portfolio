import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { MediaLightboxProvider } from "@/components/MediaLightbox";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://shahbaz-ahmed.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shahbaz Ahmed — Full-Stack Mobile & Backend Engineer",
    template: "%s · Shahbaz Ahmed",
  },
  description:
    "Shahbaz Ahmed is a Software Engineering student and Full-Stack Mobile & Backend Engineer building scalable systems, useful applications, and seamless experiences across Flutter, Python, Django, FastAPI, and the web.",
  keywords: [
    "Shahbaz Ahmed",
    "Full-Stack Engineer",
    "Flutter Developer",
    "Backend Engineer",
    "Python",
    "Django",
    "FastAPI",
    "Mobile App Developer",
    "Software Engineering Student",
  ],
  authors: [{ name: "Shahbaz Ahmed" }],
  openGraph: {
    title: "Shahbaz Ahmed — Full-Stack Mobile & Backend Engineer",
    description:
      "Scalable systems, useful applications, and seamless digital experiences across mobile, backend, and web.",
    url: siteUrl,
    siteName: "Shahbaz Ahmed",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans bg-background text-ink antialiased">
        <MediaLightboxProvider>{children}</MediaLightboxProvider>
      </body>
    </html>
  );
}
