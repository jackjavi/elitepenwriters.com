import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden md:block md:max-w-md p-6">
      {/* Sidebar Title */}
      <h2 className="text-lg font-bold text-gray-900">AI REMOVAL SERVICES</h2>

      {/* Navigation Links */}
      <ul className="mt-4 space-y-2 text-gray-700">
        {[
          { name: "Academic Research", href: "/academic-writing" },
          { name: "Dissertation Consulting", href: "/research" },
          { name: "AI Removal", href: "/ai-removal" },
        ].map((item, index) => (
          <li
            key={index}
            className={`${
              item.name === "AI Removal"
                ? "bg-gray-700 text-white px-3 py-2 rounded"
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
      <blockquote className="mt-6 p-4 bg-gray-200 border-l-4 border-blue-600 italic text-gray-800">
        “AI-generated content detection is more rigorous than ever. At Elite
        Brains Consulting, we transform AI-generated text into authentic,
        humanized content—ensuring originality, readability, and compliance with
        academic and professional standards.”
      </blockquote>
    </div>
  );
}
