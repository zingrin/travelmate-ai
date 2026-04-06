"use client";
import React from "react";

const Newsletter = () => {
  return (
    <section className="">
      <div className="w-full bg-[#1e40af] py-20 px-8 md:px-16 text-center shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          Ready for Your Next Trip?
        </h2>

        <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Subscribe to get exclusive deals, travel tips, and AI-powered
          recommendations straight to your inbox.
        </p>

        <form
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:flex-1 bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
