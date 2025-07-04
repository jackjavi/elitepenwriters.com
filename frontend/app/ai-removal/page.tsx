import Link from "next/link";
import Header from "./_components/header-bg";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/footer-2";
import ContactForm from "./_components/contact";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
// import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Removal Services | Elite Brains Consulting",
  description: "Expert AI Removal Services for Academic Integrity",
  openGraph: {
    title: "AI Removal Services | Elite Brains Consulting",
    description: "Expert AI Removal Services for Academic Integrity",
    url: "https://elitebrainsconsulting.com/ai-removal",
  },
  keywords: [
    "AI removal, academic integrity, humanized content, plagiarism-free",
  ],
};

export default function AIRemoval() {
  return (
    <>
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      <Header />
      <div className="flex gap-8 pt-4 md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto font-[family-name:var(--font-geist-sans)]">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content */}
        <div className="p-6 mb-20">
          {/* Navigation */}
          <div className="flex justify-between items-center text-gray-500 text-xs 2xl:text-sm">
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
              AI Removal & Humanized Content Optimization
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
            ELITE BRAINS CONSULTING – AI Removal Experts
          </h1>

          {/* Overview Section */}
          <div className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg bg-gray-100 border-l-4 border-teal-500 p-4 italic text-gray-500">
            Need to eliminate AI traces from your content? Our AI removal
            services ensure that your work is fully humanized, making it
            undetectable by AI detection tools while maintaining its academic
            integrity and quality.
          </div>

          {/* Why AI Removal? */}
          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Why Remove AI from Your Content?
          </h2>
          <ul className="list-disc pl-6 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed mt-4">
            <li>Ensure compliance with academic integrity policies.</li>
            <li>Improve readability and natural language flow.</li>
            <li>Enhance originality and uniqueness.</li>
            <li>Meet strict university and publication standards.</li>
            <li>Reduce risks of AI-generated content being flagged.</li>
          </ul>

          {/* Contact Form */}
          <div className="mt-8">
            <ContactForm />
          </div>

          {/* How We Do It */}
          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Our AI Removal Process
          </h2>
          <p className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed">
            Our experts thoroughly review your content, replace AI-generated
            structures with natural human expressions, and refine sentence
            construction to ensure originality. We guarantee a human-like tone
            while preserving the core message of your document.
          </p>

          {/* Who Needs This Service? */}
          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Who Benefits from AI Removal?
          </h2>
          <p className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed">
            Whether you&apos;re a student, researcher, or professional, our AI
            removal service helps ensure your work meets originality standards
            and remains credible in academic and corporate settings.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
