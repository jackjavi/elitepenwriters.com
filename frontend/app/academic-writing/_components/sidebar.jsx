import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden md:block md:max-w-md p-6">
      {/* Sidebar Title */}
      <h2 className="text-lg font-bold text-gray-900">
        ACADEMIC RESEARCH AND COURSEWORK HELP
      </h2>

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
              item.name === "Academic Research"
                ? "bg-gray-700 text-white px-3 py-2 rounded"
                : "hover:text-indigo-600 cursor-pointer"
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Sidebar Image */}
      <div className="mt-6">
        <Image
          src="http://res.cloudinary.com/popit/image/upload/v1742305472/wy4tczfczwhxhk8gors0.png"
          alt="Academic Research"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>

      {/* Sidebar Quote */}
      <blockquote className="mt-6 p-4 bg-gray-200 border-l-4 border-blue-600 italic text-gray-800">
        “For years, Elite Brains Consulting has provided expert academic writing
        assistance, helping students and professionals craft high-quality
        essays, research papers, and reports. We are committed to delivering
        AI-free, customized content that meets the highest academic standards.”
      </blockquote>
    </div>
  );
}
