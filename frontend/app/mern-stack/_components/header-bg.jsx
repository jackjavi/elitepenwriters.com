"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-500 bg-opacity-50 p-6 h-20 md:h-32 lg:h-40 2xl:h-48 w-full z-50 bg-[url('http://res.cloudinary.com/popit/image/upload/v1743336476/abu8rkwrtf4gp0qi361p.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="hidden md:flex ju items-center space-x-2">
          <Link href="/">
            <Image
              src="http://res.cloudinary.com/popit/image/upload/v1743077745/dlzdw4v2n37g79bu6bls.png"
              alt="Elite BRAINS CONSULTING Logo White"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <Link href="/">
            <Image
              src="http://res.cloudinary.com/popit/image/upload/v1743077745/dlzdw4v2n37g79bu6bls.png"
              alt="Elite BRAINS CONSULTING Logo White"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
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
              <button className="hover:underline bg-gray-800 bg-opacity-80 text-[#e8f7f7] px-2 py-2 rounded text-startw-20 w-24 h-16 lg:w-24 lg:h-20 xl:w-28 xl:h-24 flex items-start justify-start">
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[whitesmoke] focus:outline-none z-50"
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
