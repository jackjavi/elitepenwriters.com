"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center h-[75vh]">
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            src="/videos/elite-writers-bg-home.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Opacity Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-extrabold bg-opacity-50"></div>
        </div>

        {/* Overlay Content */}
        <div className="z-10 bg-opacity-110 p-10 rounded-lg md:pl-[58vw]">
          <h2 className="text-4xl  text-start font-black mb-4">
            ELITE BRAINS CONSULTING
          </h2>
          <h2 className="text-2xl  text-start  mb-4">
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
