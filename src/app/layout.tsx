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
  title: "Muhammad Zeeshan Sadiq | Backend Software Engineer",
  description: "Backend Software Engineer specializing in scalable architectures, multi-tenant systems, and AI integrations (Python, Django, FastAPI, Java RMI). Focused on building robust, performant APIs.",
  keywords: ["Muhammad Zeeshan Sadiq", "Backend Engineer", "Software Engineer", "Python", "Django", "FastAPI", "PostgreSQL", "Java RMI", "Multi-Tenant SaaS", "Grad-CAM", "Islamabad", "Rawalpindi", "Pakistan"],
  authors: [{ name: "Muhammad Zeeshan Sadiq" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg-dark text-text-primary grid-background selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
