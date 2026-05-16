import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Rahul R | Senior AI Systems Engineer & Fullstack Architect",
  description: "Specializing in autonomous agentic systems, RAG pipelines, and high-performance fullstack architectures. Explore the portfolio of Rahul R, AI Engineer at Botminds.ai.",
  keywords: ["AI Engineer", "LLMs", "LangGraph", "RAG", "Agentic Workflows", "Fullstack Developer", "Python", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
