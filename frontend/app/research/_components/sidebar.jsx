import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden md:block md:max-w-md p-6">
      {/* Sidebar Title */}
      <h2 className="font-bold text-gray-900 text-sm lg:text-md xl:text-lg 2xl:text-xl">
        ACADEMIC RESEARCH AND DISSERTATION CONSULTING
      </h2>

      {/* Navigation Links */}
      <ul className="mt-4 space-y-2 text-gray-700 text-xs 2xl:text-sm">
        {[
          { name: "Academic Research", href: "/academic-writing" },
          { name: "Dissertation Consulting", href: "/research" },
          { name: "AI Removal", href: "/ai-removal" },
        ].map((item, index) => (
          <li
            key={index}
            className={`${
              item.name === "Dissertation Consulting"
                ? "bg-gray-800 bg-opacity-30 text-white px-3 py-2 rounded"
                : "hover:text-indigo-600 cursor-pointer"
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Sidebar Image 
      <div className="mt-6">
        <Image
          src="/acad-research.png"
          alt="Academic Research"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>*/}

      {/* Sidebar Quote */}
      <blockquote className="mt-12 p-4 bg-gray-200 border-l-4 border-blue-600 italic text-gray-800 text-xs lg:text-sm xl:text-md">
        “Completing a dissertation is a marathon, not a sprint. At Elite Brains
        Consulting, we provide strategic guidance, expert research support, and
        meticulous editing to help you cross the finish line with confidence.”
      </blockquote>
    </div>
  );
}
