"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-start py-16 px-4">
      <div className="max-w-4xl w-full text-slate-700 leading-relaxed">
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="mb-6 italic text-slate-400">Last Updated: April 2026</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information that you provide to us such as
              name, email address, and payment details when you book a trip
              through our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              Your data is used to process bookings, send confirmations, and
              provide personalized travel recommendations. We do not sell your
              data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              3. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access or disclosure.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
