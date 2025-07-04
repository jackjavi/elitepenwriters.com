import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template:
      "%s | Professional Research, Writing & Full Stack Web Development Services",
    default: "Elite Brains Consulting",
  },
  description:
    "Professional Research & Writing Services for Global Clients. We provide high-quality research, writing, and editing services to clients worldwide.",
  authors: [
    {
      name: "Elite Brains Consulting",
      url: "https://elitebrainsconsulting.com",
    },
  ],
  creator: "Elite Brains Consulting",
  publisher: "Elite Brains Consulting",
  applicationName: "Elite Brains Consulting",
  generator: "Next.js",
  themeColor: "#000000",
  colorScheme: "dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Research, Writing, Editing, Consulting, Full Stack Development, Web Development",
    "Professional Services, Global Clients, High-Quality Research, Writing Services",
    "Elite Brains Consulting, Research and Writing, Professional Research",
    "Dissertation Writing, Thesis Writing, Academic Research, Professional Editing",
    "Technical Writing, Business Writing, Content Writing, Copywriting",
    "Nursing Research",
    "Social Science Research",
    "Business Research",
    "Market Research",
    "Data Analysis",
    "Statistical Analysis",
    "Academic Writing, Research Proposals, Literature Reviews",
    "Research Methodology, Research Design, Data Collection",
    "Data Analysis, Research Reports, Research Presentations",
    "Research Papers, Research Articles, Research Journals",
    "Research Grants, Research Funding, Research Ethics",
    "Research Collaboration, Research Partnerships, Research Networks",
    "Research Communities, Research Organizations, Research Institutions",
    "Research Conferences, Research Workshops, Research Seminars",
    "political science",
    "programming",
    "computer science",
    "data science",
    "essay writing",
    "sociology",
    "psychology",
    "nursing",
    "healthcare",
    "business",
    "economics",
    "finance",
    "marketing",
    "management",
    "education",
    "history",
    "literature",
    "philosophy",
    "law",
    "engineering",
    "technology",
    "environmental science",
    "public health",
    "research writing",
    "academic writing",
    "technical writing",
    "Professional Writing, Editing Services, Global Research, Writing Consulting",
    "Full Stack Web Development, Web Development Services, Professional Consulting",
    "Next.js, React, JavaScript, TypeScript, Software Development",
    "Web Applications, Software Engineering, Technology Consulting",
  ],
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
