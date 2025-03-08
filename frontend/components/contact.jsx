import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (send to backend, show confirmation, etc.)
    console.log("Form Submitted", formData);
  };

  return (
    <div className="bg-gray-900 text-white p-6 shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center">Get in Touch with Us</h2>
      <p className="text-center mt-2">
        We typically respond within 1 hour during business hours.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
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
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-bold">Other Ways to Contact Us:</h3>
        <ul className="mt-2">
          <li className="mt-2">
            <strong>1.</strong> Fill out the form above, and we’ll reach out
            within an hour.
          </li>
          <li className="mt-2">
            <strong>2.</strong> Schedule a Google Meet call at your convenience.{" "}
            <a href="#" className="text-teal-300 underline">
              Click here to schedule.
            </a>
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
