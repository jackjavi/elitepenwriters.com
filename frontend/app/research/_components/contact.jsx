"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
    fromPage: "disso-research",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // Handle form submission logic (send to backend, show confirmation, etc.)
  // console.log("Form Submitted", formData);
  // };

  return (
    <div className="bg-gray-700 text-white p-6 shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-center">
        Get in Touch with Us
      </h2>
      <p className="text-center text-xs lg:text-sm xl:text-md 2xl:text-lg mt-2">
        We typically respond within 1 hour during business hours.
      </p>
      <form
        action="https://getform.io/f/ae834033-cf08-4bdf-abdc-879e5999abb2"
        method="POST"
        className="mt-6 flex flex-col gap-4 text-xs lg:text-sm xl:text-md 2xl:text-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="p-2 w-full border text-black"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="p-2 w-full border text-black"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 w-full border mt-4 text-black"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-2 w-full border mt-4 text-black"
        />
        <textarea
          name="description"
          placeholder="Briefly describe your research and required support"
          value={formData.description}
          onChange={handleChange}
          required
          className="p-2 w-full border mt-4 text-black h-24"
        ></textarea>
        <input type="hidden" name="fromPage" value={formData.fromPage} />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-bold text-sm lg:text-md xl:text-lg 2xl:text-xl">
          Other Ways to Contact Us:
        </h3>
        <ul className="mt-2 text-xs lg:text-sm xl:text-md 2xl:text-lg">
          <li className="mt-2">
            <strong>1.</strong> Fill out the form above, and we’ll reach out
            within an hour.
          </li>
          <li className="mt-2">
            <strong>2.</strong> Contact us on WhatsApp at{" "}
            <Link
              href="https://wa.me/254115005343"
              target="_blank"
              className="text-teal-300 underline"
            >
              here.
            </Link>
          </li>
          <li className="mt-2">
            <strong>3.</strong> Email us at{" "}
            <a
              href="mailto:elitebrainsconsulting@gmail.com"
              className="text-teal-300 underline"
            >
              elitebrainsconsulting@gmail.com
            </a>
            . We respond to urgent queries 365 days a year, including weekends.
          </li>
        </ul>
      </div>
    </div>
  );
}
