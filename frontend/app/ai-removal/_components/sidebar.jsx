import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden md:block md:max-w-md p-6">
      {/* Sidebar Title */}
      <h2 className="text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
        AI REMOVAL SERVICES
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
              item.name === "AI Removal"
                ? "bg-gray-800 bg-opacity-30 text-white px-3 py-2 rounded"
                : "hover:text-indigo-600 cursor-pointer"
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Sidebar Image */}
      <div className="mt-12">
        <Image
          src="http://res.cloudinary.com/popit/image/upload/v1742369063/i8tzcfw8ewtedrgn3xac.png"
          alt="Academic Research"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>

      {/* Sidebar Quote */}
      <blockquote className="mt-6 p-4 bg-gray-200 border-l-4 border-blue-600 italic text-gray-500 text-xs lg:text-sm xl:text-md 2xl:text-lg">
        “AI-generated content detection is more rigorous than ever. At Elite
        Brains Consulting, we transform AI-generated text into authentic,
        humanized content—ensuring originality, readability, and compliance with
        academic and professional standards.”
      </blockquote>
    </div>
  );
}
