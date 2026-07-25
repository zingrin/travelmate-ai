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
    <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source
          src="https://pixabay.com/videos/download/video-201308_medium.mp4"
          type="video/mp4"
        />
      </video> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => console.log("Video failed to load")}
      >
        <source
          src="https://pixabay.com/videos/download/video-201308_medium.mp4"
          type="video/mp4"
        />
      </video>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 backdrop-blur-[1px]"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl px-4 text-center text-white space-y-8">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter drop-shadow-2xl italic">
          EXPLORE THE <span className="text-orange-500">BEYOND</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
          Experience AI-crafted journeys designed around your unique wanderlust.
        </p>

        {/* Search Bar Container */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-center gap-3 bg-white/10 backdrop-blur-xl p-2 rounded-2xl md:rounded-full border border-white/20 max-w-3xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:bg-white/20"
        >
          <div className="flex items-center flex-1 w-full px-6 py-4 bg-white/90 rounded-xl md:rounded-full shadow-inner">
            <FaSearch className="text-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full bg-transparent text-slate-900 focus:outline-none text-lg placeholder:text-slate-400"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-xl md:rounded-full font-black text-lg transition-all active:scale-95 shadow-xl whitespace-nowrap uppercase tracking-wider"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
