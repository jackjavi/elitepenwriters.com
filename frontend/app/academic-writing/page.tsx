import Link from "next/link";
import Header from "@/components/header-bg";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/footer-2";
import ContactForm from "./_components/contact";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
// import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academic Writing Services | Elite Brains Consulting",
  description:
    "Expert Academic Writing Services for Essays, Research Papers, and More",
  keywords: [
    "academic writing, essays, research papers, case studies, thesis, dissertations",
  ],
  openGraph: {
    title: "Academic Writing Services | Elite Brains Consulting",
    description:
      "Expert Academic Writing Services for Essays, Research Papers, and More",
    url: "https://elitebrainsconsulting.com/academic-writing",
  },
};

export default function AcademicWritingServices() {
  return (
    <>
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      <Header />
      <div className="flex gap-8 pt-4 md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto font-[family-name:var(--font-geist-sans)]">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content */}
        <main className="p-6 mb-20">
          {/* Navigation */}
          <div className="flex justify-between items-center text-gray-700 text-xs 2xl:text-sm">
            <Link href="/">
              <span className="cursor-pointer hover:underline">← Home</span>
            </Link>
            <Link href="contact">
              <span className="cursor-pointer hover:underline">
                Contact Us →
              </span>
            </Link>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 text-center">
            <p className="text-xs lg:text-sm xl:text-md 2xl:text-lg font-semibold text-indigo-700">
              Comprehensive Academic Writing Assistance for Bachelor’s, Master’s
              & PhD
            </p>
            <div className="flex justify-center items-center mt-2">
              <div className="flex space-x-2">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-blue-500"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-black text-gray-700">
            ELITE BRAINS CONSULTING – YOUR PARTNER IN ACADEMIC EXCELLENCE
          </h1>

          {/* Overview Section */}
          <div className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg bg-gray-100 border-l-4 border-teal-500 p-4 italic text-gray-500">
            Navigating academic writing can be challenging. At Elite Brains
            Consulting, we provide expert guidance on essays, research papers,
            reports, case studies, and more. Our services are AI-free, uniquely
            tailored, and designed to meet top academic standards.
          </div>

          {/* Services Breakdown */}
          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Our Academic Writing Services Cover:
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg">
            <li>
              <span className="font-semibold text-blue-700">Essays:</span>{" "}
              Crafting well-structured and original essays for any subject.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Research Papers:
              </span>{" "}
              Conducting in-depth analysis with credible sources.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Case Studies:</span>{" "}
              Developing detailed case studies with critical insights.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Thesis & Dissertations:
              </span>{" "}
              Comprehensive writing support from topic selection to final edits.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Coursework & Assignments:
              </span>{" "}
              Assisting with mid-term and end-of-term projects.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Editing & Proofreading:
              </span>{" "}
              Refining content for clarity, coherence, and academic rigor.
            </li>
          </ul>

          {/* Contact Form */}
          <div className="mt-8">
            <ContactForm />
          </div>

          {/* AI-Free & Customization */}
          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            100% AI-Free, Original & Tailored Academic Writing Services
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-xs lg:text-sm xl:text-md 2xl:text-lg">
            We prioritize authenticity and academic integrity. Every paper is
            meticulously crafted by our experts, ensuring originality, critical
            analysis, and compliance with top-tier academic guidelines.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
