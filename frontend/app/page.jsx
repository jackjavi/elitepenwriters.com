"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex justify-between items-center p-6 h-40 fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/elite-pen-logo.png"
            alt="Elite Pen Writers Logo"
            width={200}
            height={200}
          />
          {/*<h1 className="text-xl font-bold">Elite Pen Writers</h1>*/}
        </div>
        {/* Nav Links */}
        <nav className="space-x-6 flex items-center text-sm ">
          <Link href="#">
            <button className="hover:underline bg-gray-800 bg-opacity-80 text-white px-2 py-2 rounded text-start w-28 h-24 flex items-start justify-start">
              Academic Research and Dissertation Consulting
            </button>
          </Link>
          <Link href="#">
            <button className="hover:underline bg-gray-800 bg-opacity-80 text-white px-2 py-2 rounded text-start w-28 h-24 flex items-start justify-start">
              Programming and Web Development
            </button>
          </Link>
          <Link href="#">
            <button className="hover:underline bg-gray-800 bg-opacity-80 text-white px-2 py-2 rounded text-start w-28 h-24 flex items-start justify-start">
              Editing Services
            </button>
          </Link>
          <Link href="#">
            <button className="hover:underline bg-gray-800 bg-opacity-80 text-white px-2 py-2 rounded text-start w-28 h-24 flex items-start justify-start">
              Contact Us
            </button>
          </Link>
          <Link href="#">
            <button className="hover:underline bg-gray-800 bg-opacity-80 text-white px-2 py-2 rounded text-start w-28 h-24 flex items-start justify-start">
              Home
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex items-center text-center h-[75vh]">
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
        <div className="z-10 bg-black bg-opacity-0 p-10 rounded-lg pl-[65vw]">
          <h2 className="text-6xl  text-start font-black mb-4">
            ELITE PEN WRITERS
          </h2>
          <h2 className="text-3xl  text-start  mb-4">
            Let Us Be Your Teammate
          </h2>
          {/*<p className="text-lg text-start">
            Expert consulting in research, statistical analysis, and academic
            editing.
          </p>*/}
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-white h-[25vh] bg-gray-900 bg-opacity-20 flex flex-col fixed bottom-0 left-0 w-full z-50">
        {/* Top Section */}
        <div className="flex justify-center items-center  py-4 space-x-10 ">
          <a href="#" className="hover:underline bg-gray-800 p-4 px-10">
            Blog
          </a>
          <a href="#" className="hover:underline bg-gray-800 py-4 px-10">
            Client List
          </a>
          <a href="#" className="hover:underline bg-gray-800 py-4 px-10">
            In The Press
          </a>
        </div>

        {/* Middle Section */}
        <div className="bg-gray-800 py-2 text-center text-sm flex items-center justify-center grow">
          <div className="text-sm flex flex-col items-center justify-center gap-2">
            <p>ELITE PEN WRITERS</p>

            <div className="flex justify-center items-center space-x-4 w-full">
              <p>EMAIL: elitepenwriters@gmail.com</p>
              <p>PHONE: (254) 708 313 804</p>
              <p>30367-00100 NAIROBI, KENYA</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-900 py-2 text-center text-xs  ">
          <p className="flex gap-4 justify-center items-center">
            <span>
              Copyright © 2025 Elite Pen Writers.™ All rights reserved.
            </span>
            •
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            •{" "}
            <a href="#" className="hover:underline">
              Data Security Policy
            </a>{" "}
            •{" "}
            <a href="#" className="hover:underline">
              Site Map
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
