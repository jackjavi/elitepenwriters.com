"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/header-bg";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/footer-2";

export default function LiteratureReview() {
  return (
    <>
      <Header />
      <div className="flex gap-8 pt-4 md:max-w-4xl mx-auto font-[family-name:var(--font-geist-sans)]">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content */}
        <div className=" p-6 ">
          {/* Navigation */}
          <div className="flex justify-between items-center text-gray-700 text-sm">
            <Link href="/">
              <span className="cursor-pointer hover:underline">
                ← Introduction
              </span>
            </Link>
            <Link href="/">
              <span className="cursor-pointer hover:underline">
                Systematic Literature Review →
              </span>
            </Link>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-indigo-700">
              Where are you in the dissertation process?
            </p>
            <div className="flex justify-center items-center mt-2">
              <div className="flex space-x-2">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === 2 ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="mt-8 text-2xl md:text-2xl font-black text-gray-700">
            LITERATURE REVIEW ASSISTANCE – COMPREHENSIVE, ANALYTICAL, AND
            APPROVAL-READY
          </h1>

          {/* Highlighted Section */}
          <div className="mt-4 bg-gray-100 border-l-4 border-teal-500 p-4 italic text-gray-500">
            Get a literature review that does more than summarize—it establishes
            your study’s significance, meets the highest standards, and
            positions you for success.
          </div>

          {/* Expert Support Section */}
          <h2 className="mt-8 text-xl font-bold text-gray-700">
            Expert Support for Your Literature Review
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            For nearly 20 years, thousands of doctoral candidates have relied on
            our consulting services to create impactful, approval-ready
            literature reviews. Our services are fully customized to fit your
            needs, timeline, and budget—simply reach out to discuss how we can
            support you.
          </p>

          {/* Step 1 */}
          <h3 className="mt-6 text-lg font-semibold text-blue-700">
            Step 1: Comprehensive Literature Search
          </h3>
          <div className="mt-2 bg-gray-100 border-l-4 border-teal-500 p-3 italic text-gray-800">
            “Our in-depth literature search leaves no critical study overlooked,
            creating a thorough foundation for your review.”
          </div>
          <p className="mt-4 text-gray-700">
            We begin with an extensive literature search to ensure a
            comprehensive review of existing studies. Using targeted keyword
            searches on major databases like ProQuest, EBSCOHost, and
            ScienceDirect, we gather a wide range of sources. For full
            transparency, we document each search term and method, making it
            easy for you to replicate or validate our findings.
          </p>

          {/* Step 2 */}
          <h3 className="mt-6 text-lg font-semibold text-blue-700">
            Step 2: Identifying Themes and Research Gaps
          </h3>
          <div className="mt-2 bg-gray-100 border-l-4 border-teal-500 p-3 italic text-gray-800">
            “We identify key themes and pinpoint the research gap, highlighting
            the unique value of your study.”
          </div>
          <p className="mt-4 text-gray-700">
            With 75-100 peer-reviewed sources selected around your topic and
            theoretical framework, we identify essential themes and sub-themes.
            Guided by your research questions, we then define the specific
            research gap your study will address. This careful analysis sets a
            solid foundation for your research’s unique contribution.
          </p>

          {/* Step 3 */}
          <h3 className="mt-6 text-lg font-semibold text-blue-700">
            Step 3: Supporting Your Research Design
          </h3>
          <div className="mt-2 bg-gray-100 border-l-4 border-teal-500 p-3 italic text-gray-800">
            “We ensure the literature clearly supports your research design,
            strengthening both its credibility and relevance.”
          </div>
          <p className="mt-4 text-gray-700">
            After organizing sources by theme, we review the literature to
            directly support your research design. We select and analyze studies
            that validate your chosen methodology as a proven approach within
            your field—especially if it hasn’t yet been applied to your research
            question. This approach underscores both the originality and
            importance of your study.
          </p>

          {/* Expert Drafting Section */}
          <h3 className="mt-6 text-lg font-semibold text-blue-700">
            Expert Drafting, Revision, and Editing in Your Required Reference
            Style
          </h3>
          <div className="mt-2 bg-gray-100 border-l-4 border-teal-500 p-3 italic text-gray-800">
            “Each paragraph is crafted to meet the highest academic standards,
            creating a clear, concise, and polished review.”
          </div>
          <p className="mt-4 text-gray-700">
            Throughout the process, we provide expert drafting, revision, and
            editing support in APA or any required reference style. We ensure
            your literature review is written in precise academic prose, using
            past tense for published work and focusing on synthesis and critical
            analysis.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
