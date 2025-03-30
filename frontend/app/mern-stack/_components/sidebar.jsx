"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden md:block md:max-w-md p-6">
      {/* Sidebar Title */}
      <h2 className="text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-900">
        MERN STACK WEB & API DEVELOPMENT
      </h2>
      {/* Navigation Links */}
      <ul className="mt-4 space-y-2 text-gray-700 text-xs 2xl:text-sm">
        {[{ name: "MERN Stack Development", href: "/mern-stack" }].map(
          (item, index) => (
            <li
              key={index}
              className={`${
                item.name === "MERN Stack Development"
                  ? "bg-gray-800 bg-opacity-30 text-white px-3 py-2 rounded"
                  : "hover:text-indigo-600 cursor-pointer"
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          )
        )}
      </ul>

      {/* Sidebar Image */}
      <div className="mt-12">
        <Image
          src="http://res.cloudinary.com/popit/image/upload/v1743336476/abu8rkwrtf4gp0qi361p.png"
          alt="Academic Research"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>

      {/* Sidebar Quote */}
      <blockquote className="mt-6 p-4 bg-gray-200 border-l-4 border-blue-600 italic text-gray-800 text-xs lg:text-sm xl:text-md 2xl:text-lg">
        “Elite Brains Consulting engineers cutting-edge, scalable, and secure
        MERN stack applications tailored for startups, SMEs, and enterprise
        clients globally. From robust APIs to responsive UIs — we've got it
        covered.”
      </blockquote>
    </div>
  );
}
