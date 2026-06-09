"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/exploretips" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons & Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-50 text-red-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-red-100 transition-all"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 text-3xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden w-64 bg-white shadow-2xl transition duration-300 ease-in-out z-50`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-10">
            <Logo />
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

            {isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-600 text-white w-full py-3 rounded-lg font-bold"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="bg-blue-700 text-white w-full py-3 rounded-lg font-bold">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

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
