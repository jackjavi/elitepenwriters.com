import Link from "next/link";
import Header from "./_components/header-bg";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/footer-2";
import ContactForm from "./_components/contact";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
// import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "MERN Stack Development Services | Elite Brains Consulting",
  description:
    "Professional MERN Stack Development Services for Scalable Web Solutions",
  openGraph: {
    title: "MERN Stack Development Services | Elite Brains Consulting",
    description:
      "Professional MERN Stack Development Services for Scalable Web Solutions",
    url: "https://elitebrainsconsulting.com/mern-stack",
  },
  keywords: [
    "mern stack, web development, scalable solutions, mongodb, express, react, node.js",
  ],
};

export default function MernStackPage() {
  return (
    <>
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      <Header />
      <div className="flex gap-8 pt-4 md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl mx-auto font-[family-name:var(--font-geist-sans)]">
        <Sidebar />

        <main className="p-6 mb-20">
          <div className="flex justify-between items-center text-gray-700 text-xs 2xl:text-sm">
            <Link href="/">
              <span className="cursor-pointer hover:underline">← Home</span>
            </Link>
            <Link href="/contact">
              <span className="cursor-pointer hover:underline">
                Contact Us →
              </span>
            </Link>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs lg:text-sm xl:text-md 2xl:text-lg font-semibold text-indigo-700">
              Professional Full-Stack Web & API Development with MERN
              Technologies
            </p>
            <div className="flex justify-center items-center mt-2">
              <div className="flex space-x-2">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-green-500"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-black text-gray-700">
            ELITE BRAINS CONSULTING – YOUR TRUSTED PARTNER IN SCALABLE MERN
            STACK DEVELOPMENT
          </h1>

          <div className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg bg-gray-100 border-l-4 border-teal-500 p-4 italic text-gray-500">
            The company builds high-performance, scalable, and maintainable web
            solutions using the power of MongoDB, Express, React, and Node.js
            (MERN Stack). From API development to full-scale SaaS and web
            platforms, Elite Brains Consulting empowers clients with innovative,
            secure, and customized digital tools.
          </div>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Our MERN Stack Web & API Development Services Include:
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg">
            <li>
              <span className="font-semibold text-blue-700">
                Custom Web App Development:
              </span>{" "}
              We design dynamic, responsive, and business-ready web apps using
              the latest MERN frameworks.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                API Design & Integration:
              </span>{" "}
              Seamless development of RESTful APIs and third-party integrations
              for enhanced functionality.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Enterprise Solutions:
              </span>{" "}
              Tailored solutions for startups, SMEs, and large-scale enterprises
              that require scalable infrastructure.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                E-Commerce & Booking Platforms:
              </span>{" "}
              Full-featured marketplaces, dashboards, and admin portals built
              for speed and security.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Maintenance & Scaling:
              </span>{" "}
              Continuous support, server-side optimization, and scaling
              strategies to keep your solution future-proof.
            </li>
            <li>
              <span className="font-semibold text-blue-700">UI/UX Design:</span>{" "}
              Clean and modern design interfaces that ensure great user
              experience and engagement.
            </li>
          </ul>

          <div className="mt-8">
            <ContactForm />
          </div>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Agile, Secure & Client-Focused Development
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-xs lg:text-sm xl:text-md 2xl:text-lg">
            The company utilizes agile methodologies to ensure client
            involvement throughout the development cycle. Every solution is
            crafted with strong security practices, optimal performance, and
            modularity to ensure ease of maintenance.
          </p>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Why Choose Elite Brains Consulting?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg">
            <li>Experienced MERN Stack Developers & Architects</li>
            <li>Competitive Pricing with Global Quality Standards</li>
            <li>Dedicated Support & Transparent Communication</li>
            <li>Rapid Turnaround Without Compromising Quality</li>
            <li>Proven Record in Delivering High-Impact Web Solutions</li>
          </ul>
        </main>
      </div>
      <Footer />
    </>
  );
}
