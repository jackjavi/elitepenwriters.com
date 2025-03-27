"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center h-[75vh]">
       {/* Image Background */}
       <div className="hidden md:block absolute top-0 left-0 w-full h-full">
          <Image
            className="w-full h-full object-cover"
            src="http://res.cloudinary.com/popit/image/upload/v1742463526/brmzq8jzo3kqkv8cwmmv.jpg"
            alt="EBC Home Background"
            layout="fill"
          />
          {/* Opacity Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-extrabold bg-opacity-50"></div>
        </div>

        {/* Overlay Content */}
        <div className="z-10 bg-opacity-110 p-10 rounded-lg md:pl-[58vw]">
          <h2 className="text-4xl drop-shadow-lg text-start font-black mb-4">
            ELITE BRAINS CONSULTING
          </h2>
          <h2 className="text-2xl shadow-xl shadow-black text-start  mb-4">
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
