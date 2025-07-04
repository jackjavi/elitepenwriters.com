"use client";
import React, { useState } from "react";

import Link from "next/link";
import Header from "../automation-bots/_components/header-bg";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/footer-2";
import ContactForm from "../automation-bots/_components/contact";
import { GoogleTagManager } from "@next/third-parties/google";

export default function AutomationBots() {
  const [formData, setFormData] = useState([{ userName: "", message: "" }]);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ userName: "", message: "" });
      } else {
        setResponseMessage(data.error || "Something went wrong");
      }
    } catch (error) {
      setResponseMessage("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <>
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      <Header />
      <div className="flex gap-8 pt-4 md:max-w-6xl mx-auto font-[family-name:var(--font-geist-sans)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="p-6 mb-20 w-full">
          {/* Navigation */}
          <div className="flex justify-between items-center text-gray-700 text-xs 2xl:text-sm">
            <Link href="/">
              <span className="cursor-pointer hover:underline">← Home</span>
            </Link>
            <Link href="/contact">
              <span className="cursor-pointer hover:underline">
                Contact Us →
              </span>
            </Link>
          </div>

          {/* Intro */}
          <div className="mt-6 text-center">
            <p className="text-sm md:text-md font-semibold text-indigo-700">
              Targeted Digital Growth Through Username Collection & X Engagement
              Tools
            </p>
            <div className="flex justify-center items-center mt-2">
              <div className="flex space-x-2">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-green-500"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-black text-center text-gray-800">
            GAIN TRAIN USERNAME COLLECTION - POWERED BY LMM @life_meth_money
          </h1>

          <div className="mt-10 flex justify-center items-center">
            <div className="w-full md:w-2/3 xl:w-1/2 bg-white p-6 md:p-10 rounded-lg shadow-md border">
              <h2 className="text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-800 mb-6 text-center">
                Submit Your X Username to Join the Train 🚀
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5 ">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your X username (e.g., @yourhandle)"
                  className="w-full p-4 border rounded-md text-gray-800"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Any extra info? (optional)"
                  className="w-full p-4 border rounded-md text-gray-800"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-semibold py-3 rounded hover:bg-indigo-800 transition"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Join the Gain Train"}
                </button>

                {responseMessage && (
                  <p className="text-green-600 text-center mt-2 font-medium">
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
