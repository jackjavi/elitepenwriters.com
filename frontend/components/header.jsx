"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent p-6 h-32 md:h-60 w-full z-50">
      <div className="flex justify-between h-full">
        {/* Logo */}

        <div className="hidden md:flex align-top space-x-2">
          <Link href="/">
            <Image
              src="http://res.cloudinary.com/popit/image/upload/v1743077745/dlzdw4v2n37g79bu6bls.png"
              alt="Elite Brains Consulting Logo"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="md:hidden flex  space-x-2">
          <Link href="/">
            <Image
              src="http://res.cloudinary.com/popit/image/upload/v1742460748/tgzzheu9qd0uq5qokfnc.png"
              alt="Elite Brains Consulting Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm pt-4">
          {[
            {
              label: "Full Stack Software Development",
              link: "/mern-stack",
            },
            {
              label: "Automation Bots",
              link: "/automation-bots",
            },
            {
              label: "Academic Research",
              link: "/academic-writing",
            },
            { label: "Dissertation Consulting", link: "research" },
            { label: "AI Removal", link: "ai-removal" },
            { label: "Contact Us", link: "contact" },
            { label: "Home", link: "/" },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <button className="hover:underline bg-gray-800 bg-opacity-80 text-[#e8f7f7] px-2 py-2 rounded text-start text-sm  w-20 h-16 lg:w-24 lg:h-20 xl:w-28 xl:h-24 flex items-start justify-start">
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[white-smoke] focus:outline-none z-50"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 absolute top-20 left-0 w-full flex flex-col items-center space-y-4 py-6">
          {[
            {
              label: "Full Stack Software Development",
              link: "/mern-stack",
            },
            {
              label: "Automation Bots",
              link: "/automation-bots",
            },
            {
              label: "Academic Research",
              link: "/academic-writing",
            },
            { label: "Dissertation Consulting", link: "research" },
            { label: "AI Removal", link: "ai-removal" },
            { label: "Contact Us", link: "contact" },
            { label: "Home", link: "/" },
          ].map((item, index) => (
            <Link key={index} href={item.link} onClick={() => setIsOpen(false)}>
              <button className="text-white text-lg hover:underline">
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
