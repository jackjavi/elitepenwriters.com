"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[url('http://res.cloudinary.com/popit/image/upload/v1742495979/mwtbe2p6nwuyby2itemm.jpg')] bg-cover bg-center bg-no-repeat p-6 h-32 md:h-60 w-full z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="hidden md:flex ju items-center space-x-2">
          <Link href="/">
            <Image
              src="http://res.cloudinary.com/popit/image/upload/v1742460748/tgzzheu9qd0uq5qokfnc.png"
              alt="Elite BRAINS CONSULTING Logo White"
              width={350}
              height={350}
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <Link href="/">
            <Image
              src="http://res.cloudinary.com/popit/image/upload/v1742460748/tgzzheu9qd0uq5qokfnc.png"
              alt="Elite BRAINS CONSULTING Logo White"
              width={150}
              height={150}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {[
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
              <button className="hover:underline bg-gray-800 bg-opacity-80 text-[#e8f7f7] px-2 py-2 rounded text-start w-28 h-24 flex items-start justify-start">
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-500 focus:outline-none z-50"
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
