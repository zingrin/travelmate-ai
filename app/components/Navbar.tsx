"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <FaPlaneDeparture className="text-blue-700 text-3xl" />
            <h1 className="text-2xl font-bold flex items-center">
              <span className="text-slate-800">Travel</span>
              <span className="text-blue-700">Mate</span>
              <span className="text-orange-500 ml-1">AI</span>
            </h1>
          </div>

          {/* Desktop Navigation Links (Laptop/Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-700 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons & Button */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-gray-600 hover:text-blue-700 transition-all text-2xl">
              <MdOutlineDarkMode />
            </button>
            <button className="bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95">
              Explore Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <MdOutlineDarkMode className="text-2xl text-gray-600" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 text-3xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Phone) */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-64 bg-white shadow-2xl transition duration-300 ease-in-out z-50`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <FaPlaneDeparture className="text-blue-700 text-2xl" />
            <span className="font-bold text-xl">TravelMate AI</span>
          </div>

          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 text-lg font-medium hover:text-blue-700"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <button className="bg-blue-700 text-white w-full py-3 rounded-lg font-bold">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
