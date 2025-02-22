export default function Sidebar() {
  return (
    <div className="hidden md:block md:max-w-md p-6">
      {/* Sidebar Title */}
      <h2 className="text-lg font-bold text-gray-900">
        ACADEMIC RESEARCH AND DISSERTATION CONSULTING
      </h2>

      {/* Navigation Links */}
      <ul className="mt-4 space-y-2 text-gray-700">
        {[
          "Coursework Assistance",
          "Comprehensive Exams",
          "Topic Development",
          "Prospectus/Concept Paper",
          "Introduction",
          "Literature Review",
          "Systematic Literature Review",
          "Qualitative Methodology",
          "Quantitative Methodology",
          "Power Analysis",
          "IRB",
          "Transcription",
          "Qualitative Analysis",
          "Statistical Analysis",
          "Discussion Section",
          "Dissertation Defense",
          "Virtual Tutoring and Coaching",
          "Thesis Consulting",
          "Journal Article Assistance",
          "Medium Article Assistance",
          "Data Collection",
          "AI Removal",
        ].map((item, index) => (
          <li
            key={index}
            className={`${
              item === "Literature Review"
                ? "bg-gray-700 text-white px-3 py-2 rounded"
                : "hover:text-indigo-600 cursor-pointer"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Sidebar Quote */}
      <blockquote className="mt-6 p-4 bg-gray-200 border-l-4 border-blue-600 italic text-gray-800">
        “For almost two decades, Precision’s dissertation consultants have
        assisted with the research and analysis required for a compelling
        literature review for thousands of doctoral candidates.”
      </blockquote>
    </div>
  );
}
