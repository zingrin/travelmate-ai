"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUsers,
  HiOutlineGlobe,
  HiOutlineBadgeCheck,
} from "react-icons/hi";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <section id="about" className="bg-[#1e40af] py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-5xl md:text-6xl font-black mb-6"
        >
          About TravelMate AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium"
        >
          We're on a mission to make travel planning effortless, affordable, and
          deeply personal using the power of artificial intelligence.
        </motion.p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-slate-500 text-lg leading-relaxed space-y-8 font-medium">
        <p>
          Founded in 2024, TravelMate AI was born from a simple observation:
          planning a trip should be as exciting as the trip itself. Our team of
          travel enthusiasts and AI engineers came together to build a platform
          that understands your travel style and delivers personalized
          recommendations instantly.
        </p>
        <p>
          Whether you're a solo backpacker looking for hidden gems in Southeast
          Asia or a family searching for the perfect beach resort, our AI
          assistant analyzes thousands of options to find exactly what suits
          you.
        </p>
      </section>

      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* ৫0,000+ Travelers */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <HiOutlineUsers className="text-3xl" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                50,000+ Travelers
              </h3>
              <p className="text-slate-500 font-bold">
                Trusted by adventurers worldwide
              </p>
            </motion.div>

            {/* 150+ Destinations */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <HiOutlineGlobe className="text-3xl" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                150+ Destinations
              </h3>
              <p className="text-slate-500 font-bold">
                Covering every corner of the globe
              </p>
            </motion.div>

            {/* Award Winning */}
            <motion.div
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <HiOutlineBadgeCheck className="text-3xl" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Award Winning
              </h3>
              <p className="text-slate-500 font-bold">
                Recognized for innovation in travel tech
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
