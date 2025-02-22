"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent p-6 h-32 md:h-60 w-full z-50">
      <div className="flex justify-between pt-4 h-full">
        {/* Logo */}
        <div className="hidden md:flex align-top space-x-2 w-100 h-100">
          <Link href="/">
            <Image
              src="/elite-brains-logo-white.png"
              alt="Elite Pen Consultancy Logo"
              width={250}
              height={250}
            />
          </Link>
        </div>
        <div className="md:hidden flex  space-x-2">
          <Link href="/">
            <Image
              src="/elite-brains-logo-white.png"
              alt="Elite Pen Consultancy Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {[
            {
              label: "Academic Research and Dissertation Consulting",
              link: "/research",
            },
            { label: "Programming and Web Development", link: "#" },
            { label: "Editing Services", link: "#" },
            { label: "Contact Us", link: "#" },
            { label: "Home", link: "#" },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <button className="hover:underline bg-gray-800 bg-opacity-80 text-white px-2 py-2 rounded text-start w-28 h-24 flex items-start justify-start">
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none z-50"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-90 absolute top-20 left-0 w-full flex flex-col items-center space-y-4 py-6">
          {[
            { label: "Academic Research", link: "/research" },
            { label: "Web Development", link: "#" },
            { label: "Editing Services", link: "#" },
            { label: "Contact Us", link: "#" },
            { label: "Home", link: "#" },
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
