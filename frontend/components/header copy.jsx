import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 h-40 fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/elite-pen-logo.png"
          alt="Elite Pen Consultancy Logo"
          width={200}
          height={200}
        />
        {/*<h1 className="text-xl font-bold">Elite Pen Writers</h1>*/}
      </div>
      {/* Nav Links */}
      <nav className="space-x-6 flex items-center text-sm ">
        <Link href="/research">
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
  );
};

export default Header;
