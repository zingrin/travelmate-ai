"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue) alert(`Searching for: ${searchValue}`);
  };

  return (
    <section className="relative h-[95vh] md:h-screen w-full flex items-center justify-center overflow-hidden mt-[-80px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/tdw2V1g/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg')`,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl px-4 text-center text-white space-y-6 pt-20">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-7xl lg:text-5xl font-bold tracking-tight drop-shadow-lg">
          Discover Your Next <span className="text-orange-500">Adventure</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
          AI-powered travel planning that finds the perfect trip for your
          budget, style, and dreams.
        </p>

        {/* Search Bar Container */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-3xl md:rounded-full border border-white/30 max-w-3xl mx-auto shadow-2xl transition-all hover:bg-white/15"
        >
          <div className="flex items-center flex-1 w-full px-6 py-4 bg-white rounded-2xl md:rounded-full shadow-inner">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full bg-transparent text-gray-800 focus:outline-none text-lg"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl md:rounded-full font-bold text-lg transition-all active:scale-95 shadow-lg whitespace-nowrap"
          >
            Explore Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
