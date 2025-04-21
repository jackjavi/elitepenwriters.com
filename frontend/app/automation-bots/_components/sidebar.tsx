import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden md:block md:max-w-md p-6">
      <h2 className="text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-900">
        OUR TECH SERVICES
      </h2>

      {/* Navigation Links */}
      <ul className="mt-4 space-y-2 text-gray-700 text-xs 2xl:text-sm">
        {[
          { name: "MERN Stack Dev", href: "/mern-stack" },
          { name: "Automation Bots", href: "/automation-bots" },
        ].map((item, index) => (
          <li
            key={index}
            className={`${
              item.name === "Automation Bots"
                ? "bg-gray-800 bg-opacity-30 text-white px-3 py-2 rounded "
                : "hover:text-indigo-600 cursor-pointer"
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* <div className="mt-12">
        <Image
          src="http://res.cloudinary.com/popit/image/upload/v1742305472/wy4tczfczwhxhk8gors0.png"
          alt="EBC Automation Bots"
          width={500}
          height={500}
          layout="responsive"
        />
      </div> */}

      <blockquote className="mt-6 p-4 bg-gray-200 border-l-4 border-blue-600 italic text-gray-800 text-xs lg:text-sm xl:text-md 2xl:text-lg">
        “EBC Developers crafts smart automation tools—from X bots to academic
        bidding systems—empowering our clients to win time, clients, and peace
        of mind.”
      </blockquote>
    </div>
  );
}
