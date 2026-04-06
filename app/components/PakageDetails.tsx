import React from "react";
import Image from "next/image";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiStar,
  HiOutlineArrowLeft,
} from "react-icons/hi";

const PackageDetails = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 1. Top Navigation & Back Button */}
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        <button className="flex items-center gap-2 text-gray-500 hover:text-slate-900 font-semibold transition-colors">
          <HiOutlineArrowLeft className="text-xl" />
          Back to Explore
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT SIDE: Content (8 Columns) */}
        <div className="lg:col-span-8">
          {/* 2. Image Gallery Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 h-[500px]">
            <div className="md:col-span-2 relative h-full rounded-[2rem] overflow-hidden shadow-lg">
              <Image
                src="https://i.ibb.co.com/pv0WB9nn/Gemini-Generated-Image-77xjb977xjb977xj.png"
                alt="Main"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col gap-4 h-full">
              <div className="relative h-1/2 rounded-[2rem] overflow-hidden shadow-md">
                <Image
                  src="https://i.ibb.co.com/S4ygRYrH/Gemini-Generated-Image-94lmil94lmil94lm.png"
                  alt="Side 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-1/2 rounded-[2rem] overflow-hidden shadow-md">
                <Image
                  src="https://i.ibb.co.com/wh75S36v/Screenshot-2026-04-06-175407.png"
                  alt="Side 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3. Title & Info */}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Japanese Culture Explorer
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 font-bold mb-8 text-lg">
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-orange-500 text-2xl" />
              Kyoto, Japan
            </div>
            <div className="flex items-center gap-2">
              <HiOutlineClock className="text-orange-500 text-2xl" />
              10 Days
            </div>
            <div className="flex items-center gap-2">
              <HiStar className="text-orange-500 text-2xl" />
              4.7 (156 reviews)
            </div>
          </div>

          {/* 4. Description */}
          <p className="text-gray-500 text-xl leading-relaxed mb-10">
            Immerse yourself in 10 days of Japanese culture, from the serene
            temples of Kyoto to the bustling streets of Tokyo. Experience a
            traditional tea ceremony, stay in a ryokan, visit Mount Fuji,
            explore Osaka&apos;s street food scene, and witness the beauty of
            bamboo groves. Includes bullet train passes and expert local guides.
          </p>

          {/* 5. Reviews Card Placeholder */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Reviews</h3>
            <p className="text-gray-400 font-medium italic">
              Reviews will be available once you connect Lovable Cloud.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Booking Sidebar (4 Columns) */}
        <div className="lg:col-span-4">
          <div className="sticky top-10 bg-white p-8 rounded-[3rem] border border-slate-100 shadow-2xl text-center">
            <p className="text-gray-400 font-bold mb-2">Starting from</p>
            <div className="flex flex-col items-center mb-8">
              <span className="text-6xl font-black text-slate-900">$2499</span>
              <span className="text-gray-400 font-bold">per person</span>
            </div>

            <button className="w-full py-5 bg-orange-500 text-white text-xl font-black rounded-2xl shadow-orange-200 shadow-xl hover:bg-orange-600 transition-all transform hover:-translate-y-1 mb-4">
              Book Now
            </button>

            <p className="text-gray-400 text-sm font-semibold">
              Free cancellation up to 48 hours before
            </p>
          </div>
        </div>
      </div>

      {/* 6. Related Trips Section */}
      <div className="max-w-[1400px] mx-auto px-6 mt-20">
        <h2 className="text-3xl font-black text-slate-900 mb-10">
          Related Trips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60">
          <div className="p-10 border rounded-[2rem] text-center font-bold text-gray-300">
            Related Card Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
