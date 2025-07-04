import Link from "next/link";
import Header from "./_components/header-bg";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/footer-2";
import ContactForm from "./_components/contact";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Automation Bots | Elite Brains Consulting",
  description:
    "Custom Automation Bots for Academic, Business, and Social Platforms",
  openGraph: {
    title: "Automation Bots | Elite Brains Consulting",
    description:
      "Custom Automation Bots for Academic, Business, and Social Platforms",
    url: "https://www.elitebrainsconsulting.com/automation-bots",
  },
  keywords: [
    "automation bots, academic bots, business automation, social media bots",
  ],
};

export default function AutomationBots() {
  return (
    <>
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      <Header />
      <div className="flex gap-8 pt-4 md:max-w-6xl mx-auto font-[family-name:var(--font-geist-sans)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="p-6 mb-20">
          {/* Navigation */}
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

          {/* Intro */}
          <div className="mt-6 text-center">
            <p className="text-xs lg:text-sm xl:text-md 2xl:text-lg font-semibold text-indigo-700">
              Custom Automation Bots for Academic, Business, and Social
              Platforms
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
            EBC DEVELOPERS – YOUR AUTOMATION PARTNER
          </h1>

          <div className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg bg-gray-100 border-l-4 border-teal-500 p-4 italic text-gray-500">
            We create smart, affordable automation bots that help you grow, save
            time, and win more clients—whether for academic platforms, Telegram,
            WhatsApp, or X (Twitter).
          </div>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Our Custom Bot Solutions:
          </h2>
          <ul className="list-disc pl-6 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed mt-4">
            <li>
              <span className="font-semibold text-blue-700">
                AI-Integrated X.com Bots:
              </span>{" "}
              Automate posts, increase engagement, and grow your follower base.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Academic Writing Bidding Bots:
              </span>{" "}
              Smart bidding systems to secure more projects on freelance and
              academic writing platforms.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                WhatsApp Automation Bots:
              </span>{" "}
              Run customer support, marketing, or order management—automated
              directly on WhatsApp.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Telegram Bots:
              </span>{" "}
              Build fully custom bots for notifications, services, and chat
              automation.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Task Automation Bots:
              </span>{" "}
              Automate repetitive workflows so you can focus on growth.
            </li>
          </ul>

          <div className="mt-8">
            <ContactForm />
          </div>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Let’s Build Something Smart Together
          </h2>
          <p className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed">
            Whether you&apos;re a solopreneur, student, or business, EBC
            Developers will tailor the perfect automation tool for your needs.
            Our prices are flexible, our delivery is fast, and our solutions
            work while you sleep.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
