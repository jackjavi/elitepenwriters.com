import Link from "next/link";
import Header from "./_components/header-bg";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/footer-2";
import ContactForm from "./_components/contact";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
// import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dissertation Services | Elite Brains Consulting",
  description: "Expert Dissertation Services for Academic Excellence",
  openGraph: {
    title: "Dissertation Services | Elite Brains Consulting",
    description: "Expert Dissertation Services for Academic Excellence",
    url: "https://elitebrainsconsulting.com/research",
  },
  keywords: [
    "dissertation services, academic writing, research assistance, thesis writing, dissertation editing",
  ],
};

export default function DissertationServices() {
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
              Expert Dissertation Assistance from Start to Finish
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
            ELITE BRAINS CONSULTING – YOUR PARTNER IN THE DISSERTATION JOURNEY
          </h1>

          {/* Overview Section */}
          <div className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg bg-gray-100 border-l-4 border-teal-500 p-4 italic text-gray-500">
            Every stage of your dissertation process is crucial. At Elite Brains
            Consulting, we provide expert guidance from the introduction to the
            conclusion. Our services are AI-free, uniquely tailored, and
            designed to meet top academic standards.
          </div>

          {/* Stages of Dissertation */}
          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Our Services Cover:
          </h2>
          <ul className="list-disc pl-6 text-gray-500 leading-relaxed mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg">
            <li>
              <span className="font-semibold text-blue-700">Introduction:</span>
              Establishing research objectives, significance, and structure.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Literature Review:
              </span>
              A comprehensive, analytical review identifying gaps in existing
              research.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Methodology:</span>
              Crafting a robust research design, data collection, and analysis
              plan.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Results & Analysis:
              </span>
              Interpreting findings with clarity and academic precision.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Discussion:</span>
              Linking findings to research questions and theoretical frameworks.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Recommendations:
              </span>
              Offering practical insights and areas for further research.
            </li>
            <li>
              <span className="font-semibold text-blue-700">Conclusion:</span>
              Summarizing key insights and emphasizing research contributions.
            </li>
          </ul>

          {/* Contact Form */}
          <div className="mt-8">
            <ContactForm />
          </div>

          {/* AI-Free & Editing Section */}
          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            100% AI-Free, Customized, and Professional Editing Services
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-xs lg:text-sm xl:text-md 2xl:text-lg">
            We ensure your dissertation is meticulously crafted by subject
            matter experts. Our editing services refine your work, improving
            clarity, coherence, and adherence to academic standards.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
