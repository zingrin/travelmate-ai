"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiSearch,
  HiOutlineAdjustments,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiStar,
} from "react-icons/hi";
import Link from "next/link";

const tripsData = [
  {
    id: 1,
    title: "Santorini Sunset Tour",
    location: "Santorini, Greece",
    days: 5,
    rating: 4.9,
    reviews: 189,
    price: 1599,
    category: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800",
  },
  {
    id: 2,
    title: "Maldives Overwater Villa",
    location: "Malé Atoll, Maldives",
    days: 6,
    rating: 4.9,
    reviews: 312,
    price: 3299,
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
  },
  {
    id: 3,
    title: "African Safari Experience",
    location: "Masai Mara, Kenya",
    days: 7,
    rating: 4.9,
    reviews: 176,
    price: 3999,
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
  },
  {
    id: 4,
    title: "Bali Paradise Retreat",
    location: "Bali, Indonesia",
    days: 7,
    rating: 4.8,
    reviews: 234,
    price: 1299,
    category: "Relaxation",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
  },
  {
    id: 5,
    title: "Swiss Alps Adventure",
    location: "Interlaken, Switzerland",
    days: 8,
    rating: 4.8,
    reviews: 98,
    price: 2499,
    category: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800",
  },
  {
    id: 6,
    title: "Japanese Culture Explorer",
    location: "Kyoto, Japan",
    days: 10,
    rating: 4.7,
    reviews: 156,
    price: 2199,
    category: "Trending",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
  },
  {
    id: 7,
    title: "Iceland Northern Lights",
    location: "Reykjavik, Iceland",
    days: 6,
    rating: 4.7,
    reviews: 134,
    price: 2799,
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800",
  },
  {
    id: 8,
    title: "Machu Picchu Trek",
    location: "Cusco, Peru",
    days: 5,
    rating: 4.6,
    reviews: 145,
    price: 1899,
    category: "Trending",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800",
  },
  {
    id: 9,
    title: "Amalfi Coast Wonders",
    location: "Positano, Italy",
    days: 7,
    rating: 4.9,
    reviews: 210,
    price: 1999,
    category: "Luxury",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=800",
  },
  {
    id: 10,
    title: "Grand Canyon Discovery",
    location: "Arizona, USA",
    days: 4,
    rating: 4.8,
    reviews: 420,
    price: 899,
    category: "Adventure",
    image:
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=800",
  },
];

export default function ExploreTipsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTrips = useMemo(() => {
    return tripsData.filter((trip) => {
      const matchesSearch =
        trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || trip.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="exploretips" className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-[1300px] mx-auto px-6">
        <h2 className="text-4xl font-black text-slate-900 mb-8 pt-10">
          Explore Trips
        </h2>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-700 shadow-sm"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm font-bold text-slate-700 cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Luxury">Luxury</option>
            <option value="Adventure">Adventure</option>
            <option value="Trending">Trending</option>
          </select>

          <button className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-8 py-4 font-bold text-slate-700 hover:bg-slate-100 transition-all shadow-sm">
            <HiOutlineAdjustments className="text-xl" />
            Filters
          </button>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTrips.map((trip) => (
              <motion.div
                layout
                key={trip.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden border border-slate-100 shadow-sm group hover:shadow-xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="h-[280px] relative overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 bg-[#f97316] text-white font-black py-1.5 px-4 rounded-full text-sm shadow-lg">
                    ${trip.price}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-slate-500 font-medium mb-6 line-clamp-1">
                    Experience the ultimate {trip.category.toLowerCase()}{" "}
                    journey in {trip.location}.
                  </p>

                  <div className="flex flex-wrap items-center gap-y-4 gap-x-6 text-slate-400 font-bold text-sm mb-8">
                    <div className="flex items-center gap-1.5">
                      <HiOutlineLocationMarker className="text-blue-600 text-lg" />
                      {trip.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HiOutlineClock className="text-blue-600 text-lg" />
                      {trip.days} Days
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HiStar className="text-orange-500 text-lg" />
                      <span className="text-slate-900">{trip.rating}</span>
                      <span className="font-medium text-gray-400">
                        ({trip.reviews})
                      </span>
                    </div>
                  </div>

                  <Link href={`/exploretips/${trip.id}`} className="w-full">
                    <button className="w-full py-4 border border-slate-200 rounded-2xl font-black text-slate-900 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
                      View Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredTrips.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-bold text-xl">
            No results found for &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </section>
  );
}
