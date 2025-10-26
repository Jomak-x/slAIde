"use client"; // required for useState in Next.js App Router

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", { name, email, message });
    // Clear fields after submit
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl text-white shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
