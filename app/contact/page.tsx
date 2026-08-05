"use client";

import React, { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatusMessage(null);
    setStatusType(null);

    if (!name || !email || !message) {
      setStatusMessage("Please complete all fields before sending.");
      setStatusType("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setStatusMessage(data.message || "Message sent successfully!");
      setStatusType("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatusMessage("We could not send your message right now. Please try again later.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contact" className="bg-white min-h-screen py-20">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-6">
            Contact Us
          </h1>
          <p className="text-slate-500 text-lg font-medium">
            Have questions about a trip or need help with your booking? Our
            friendly team is here to help.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shadow-sm">
              <HiOutlineMail className="text-2xl" />
            </div>
            <span className="text-slate-500 font-bold text-lg">
              hello@travelmate-ai.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shadow-sm">
              <HiOutlinePhone className="text-2xl" />
            </div>
            <span className="text-slate-500 font-bold text-lg">
              +1 (555) 123-4567
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shadow-sm">
              <HiOutlineLocationMarker className="text-2xl" />
            </div>
            <span className="text-slate-500 font-bold text-lg">
              123 Travel Street, San Francisco, CA 94102
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {statusMessage && (
              <div
                className={`rounded-3xl px-6 py-4 font-semibold ${
                  statusType === "success"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "bg-red-50 text-red-700 border border-red-100"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700"
              />
            </div>

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700"
              />
            </div>

            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                rows={5}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium text-slate-700 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1e40af] text-white font-black py-5 rounded-2xl hover:bg-blue-800 transition-all text-xl shadow-lg shadow-blue-100 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
