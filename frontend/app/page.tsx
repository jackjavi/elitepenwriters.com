"use client";

import Header from "../components/header";
import Header2 from "../components/header-bg";
import Footer from "../components/footer-2";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <div className="h-screen flex flex-col font-[family-name:var(--font-geist-sans)] ">
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      {/* Header */}
      <div className="md:hidden">
        <Header2 />
      </div>
      <div className="hidden md:flex">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center  text-center h-full md:h-[75vh] text-[whitesmoke] bg-gray-700 bg-opacity-50">
        {/* Video Background */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="/videos/elite-brains-consulting-home-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Opacity Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-extrabold bg-opacity-50"></div>
        </div>

        {/* Overlay Content */}
        <div className="z-10 bg-opacity-110 p-10 rounded-lg md:pl-[25%]">
          <h2 className="text-sm md:text-md lg:text-lg xl:text-2xl 2xl:text-4xl drop-shadow-lg drop-shadow-gray-200 text-start font-bold lg:font-black mb-4">
            ELITE BRAINS CONSULTING
          </h2>
          <h2 className="text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-2xl md:shadow-sm shadow-gray-300 md:text-start  mb-4">
            Let Us Be Your Teammate
          </h2>
          {/*<p className="text-lg text-start">
            Expert consulting in research, statistical analysis, and academic
            editing.
          </p>*/}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
