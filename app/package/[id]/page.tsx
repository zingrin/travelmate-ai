"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowLeft,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiStar,
} from "react-icons/hi";

const packages = [
  {
    id: 1,
    title: "Bali Paradise Retreat",
    location: "Bali, Indonesia",
    days: 7,
    rating: 4.8,
    reviews: 234,
    price: 1299,
    category: "Luxury",
    description:
      "Experience the magic of Bali with this 7-day retreat. Visit ancient temples, relax on pristine beaches, explore lush rice terraces, and immerse yourself in Balinese culture. Includes accommodation at a luxury resort, daily breakfast, guided tours to Ubud, Tanah Lot Temple, and Uluwatu, plus a traditional cooking class.",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ca1",
    ],
  },
  {
    id: 2,
    title: "Santorini Sunset Escape",
    location: "Santorini, Greece",
    days: 5,
    rating: 4.9,
    reviews: 189,
    price: 1599,
    category: "Romantic",
    description:
      "5-day Greek island escape with sunset sailing and wine tasting. Explore whitewashed villages, relax on volcanic beaches, and enjoy breathtaking caldera views.",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    ],
  },
  {
    id: 3,
    title: "Japanese Culture Explorer",
    location: "Kyoto, Japan",
    days: 10,
    rating: 4.7,
    reviews: 156,
    price: 2499,
    category: "Cultural",
    description:
      "10-day journey through Kyoto, Tokyo, and Osaka. Discover ancient temples, taste authentic sushi, and experience Japan’s modern and traditional fusion.",
    images: [
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      "https://images.unsplash.com/photo-1526481280691-3c9f3e9dbe1c",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    ],
  },
  {
    id: 4,
    title: "Maldives Overwater Villa",
    location: "Male Atoll, Maldives",
    days: 6,
    rating: 4.9,
    reviews: 312,
    price: 3299,
    category: "Luxury",
    description:
      "6-day overwater villa stay with all-inclusive luxury. Crystal-clear waters, private pools, snorkeling, and sunset dinners on pristine beaches.",
    images: [
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb2109d",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1505881502353-a1986add3732",
    ],
  },
  {
    id: 5,
    title: "African Safari Adventure",
    location: "Serengeti, Tanzania",
    days: 8,
    rating: 4.8,
    reviews: 142,
    price: 3999,
    category: "Adventure",
    description:
      "8-day wild safari across the Serengeti plains. Witness the Big Five, enjoy guided tours, and experience the thrill of nature up close.",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      "https://images.unsplash.com/photo-1523805081446-ed9a96a2b5d9",
    ],
  },
  {
    id: 6,
    title: "Swiss Alps Adventure",
    location: "Zermatt, Switzerland",
    days: 6,
    rating: 4.9,
    reviews: 215,
    price: 2899,
    category: "Adventure",
    description:
      "6-day skiing and mountain hiking experience in the Swiss Alps. Enjoy breathtaking views, cable car rides, and cozy alpine villages.",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e",
    ],
  },
];

export default function PackageDetails() {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === Number(id));

  if (!pkg) {
    return (
      <div className="py-20 text-center font-bold">Package not found!</div>
    );
  }

  return (
    <main className="bg-white min-h-screen pb-20 font-sans">
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        {/* ১. Back Link */}
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-all font-medium mb-8 group w-fit"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Explore
        </Link>

        {/* ২. Image Gallery (Modern Layout) */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative w-full md:w-[65%] h-[450px] rounded-lg overflow-hidden shadow-sm">
            <Image
              src={pkg.images[0]}
              alt="Main"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
          <div className="relative w-full md:w-[35%] h-[300px] rounded-[2.5rem] overflow-hidden shadow-sm self-start">
            <Image
              src={pkg.images[1] || pkg.images[0]}
              alt="Side"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        {/* ৩. Content Section */}
        <div className="max-w-4xl">
          <h1 className="text-[42px] font-black text-slate-900 mb-4 leading-tight">
            {pkg.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-500 font-bold mb-8">
            <div className="flex items-center gap-1.5">
              <HiOutlineLocationMarker className="text-xl text-slate-400" />
              {pkg.location}
            </div>
            <div className="flex items-center gap-1.5">
              <HiOutlineClock className="text-xl text-slate-400" />
              {pkg.days} Days
            </div>
            <div className="flex items-center gap-1.5">
              <HiStar className="text-orange-500 text-xl" />
              {pkg.rating} ({pkg.reviews} reviews)
            </div>
          </div>

          <p className="text-slate-500 text-lg leading-[1.8] mb-12">
            {pkg.description}
          </p>

          {/* ৪. Reviews Box */}
          <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Reviews</h3>
            <p className="text-slate-400 font-medium">
              Reviews will be available once you connect Lovable Cloud.
            </p>
          </div>

          {/* Booking Section  */}
          <div className="bg-white border border-slate-100 rounded-lg p-6 md:p-8 shadow-xl text-center w-full mb-10">
            <span className="text-slate-400 font-bold text-xs tracking-wider uppercase">
              Starting from
            </span>

            <div className="text-5xl font-black text-[#1e40af] leading-none my-2">
              ${pkg.price}
            </div>

            <p className="text-slate-400 font-bold text-sm mb-6">per person</p>

            <button className="w-full py-4 bg-[#f97316] text-white font-black rounded-xl hover:bg-orange-600 transition-all text-xl shadow-lg shadow-orange-100 cursor-pointer active:scale-95">
              Book Now
            </button>

            <p className="text-slate-400 text-[10px] font-medium mt-4">
              Free cancellation up to 48 hours before
            </p>
          </div>
          {/* ৬. Related Trips */}
          <div className="mt-20">
            <h2 className="text-[38px] font-black text-slate-900 mb-10">
              Related Trips
            </h2>

            <div className="max-w-[420px] bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-lg group cursor-pointer">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800"
                  alt="Related"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="420px"
                />
                <div className="absolute top-4 right-4 bg-[#f97316] text-white font-bold px-3 py-1 rounded-full text-xs shadow-lg">
                  $2499
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-black text-slate-900 mb-2">
                  Japanese Culture Explorer
                </h4>
                <p className="text-slate-400 font-medium mb-5">
                  10-day journey through Kyoto, Tokyo, and Osaka
                </p>
                <div className="flex gap-4 text-slate-400 text-xs font-bold">
                  <span className="flex items-center gap-1">
                    📍 Kyoto, Japan
                  </span>
                  <span className="flex items-center gap-1">🕒 10 Days</span>
                  <span className="flex items-center gap-1">⭐ 4.7 (156)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
