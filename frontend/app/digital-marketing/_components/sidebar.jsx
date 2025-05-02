import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden md:block md:max-w-md p-6">
      {/* Sidebar Title */}
      <h2 className="text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-900">
        DIGITAL & DEV SOLUTIONS
      </h2>

      {/* Navigation Links */}
      <ul className="mt-4 space-y-2 text-gray-700 text-xs 2xl:text-sm">
        {[
          { name: "MERN Stack Dev", href: "/mern-stack" },
          { name: "Automation Bots", href: "/automation-bots" },
          { name: "Digital Marketing", href: "/digital-marketing" },
        ].map((item, index) => (
          <li
            key={index}
            className={`${
              item.name === "Digital Marketing"
                ? "bg-gray-800 bg-opacity-30 text-white px-3 py-2 rounded"
                : "hover:text-indigo-600 cursor-pointer"
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Quote */}
      <blockquote className="mt-6 p-4 bg-gray-200 border-l-4 border-green-600 italic text-gray-800 text-xs lg:text-sm xl:text-md 2xl:text-lg">
        “From follower growth to username collection, Elite Brains helps digital
        creators tap into smart automation for X success. Let your brand ride
        the Gain Train.”
      </blockquote>
    </div>
  );
}
