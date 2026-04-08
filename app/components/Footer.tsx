import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaPlaneDeparture } from "react-icons/fa";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="text-gray-500 leading-relaxed font-medium">
              Your AI-powered travel companion. Discover, plan, and book
              unforgettable trips with intelligent recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-slate-900 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/exploretips">Explore</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-black text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/privacy"> Privacy Policy</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/terms"> Terms of Service</Link>
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                <Link href="/cancellation"> Cancellation Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-black text-slate-900 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-3 text-gray-500 font-bold hover:text-blue-600 cursor-pointer group">
                <HiMail className="text-blue-600 text-xl group-hover:scale-110 transition-transform" />
                <span>hello@travelmate-ai.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 font-bold hover:text-blue-600 cursor-pointer group">
                <HiPhone className="text-blue-600 text-xl group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 font-bold hover:text-blue-600 cursor-pointer group">
                <HiLocationMarker className="text-blue-600 text-xl group-hover:scale-110 transition-transform" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-50 pt-10 text-center">
          <p className="text-gray-400 font-bold text-sm">
            © {new Date().getFullYear()} TravelMate AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
