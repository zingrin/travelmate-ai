"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiStar,
  HiArrowLeft,
} from "react-icons/hi";

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
    description:
      "Discover the breathtaking beauty of Santorini over 5 unforgettable days. Wander through the iconic white-washed villages of Oia and Fira, enjoy wine tasting at local vineyards, sail around the caldera at sunset, and relax on unique volcanic beaches.",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
    ],
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
    description:
      "Experience the ultimate luxury in a private overwater villa. Wake up to the sound of turquoise waves, enjoy world-class snorkeling, and witness the most stunning coral reefs in the heart of the Maldives.",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=800",
    ],
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
    description:
      "Embark on a thrilling journey through the wild Savannah. Witness the Big Five in their natural habitat, enjoy luxury tented stays, and experience the magnificent Great Migration across the Masai Mara plains.",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=800",
    ],
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
    description:
      "Reconnect with yourself in the lush greenery of Ubud and the golden beaches of Seminyak. This retreat features yoga sessions, traditional Balinese spa treatments, and visits to ancient cliffside temples.",
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
    ],
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
    description:
      "Experience the majestic Swiss mountains. From skiing in Jungfrau to taking a scenic train ride through the Alps, this adventure offers breathtaking views of glaciers and alpine villages.",
    images: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800",
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800",
    ],
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
    description:
      "Immerse yourself in the rich history of Japan. Explore the ancient temples of Kyoto, the vibrant streets of Tokyo, and enjoy authentic tea ceremonies while witnessing the harmony of tradition and technology.",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800",
    ],
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
    description:
      "Chase the magical Aurora Borealis across the Icelandic sky. Explore frozen waterfalls, soak in the Blue Lagoon, and witness the power of geysers in this land of fire and ice.",
    images: [
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=800",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800",
    ],
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
    description:
      "Hike the historic Inca Trail to the lost city of Machu Picchu. Discover the archaeological wonders of Cusco and enjoy the breathtaking mountain vistas of the Peruvian Andes.",
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800",
    ],
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
    description:
      "Drive along the world's most beautiful coastline. Stay in luxury boutique hotels in Positano, explore the ruins of Pompeii, and enjoy fresh seafood while overlooking the Mediterranean sea.",
    images: [
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=800",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800",
    ],
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
    description:
      "Witness the immense scale of the Grand Canyon. Enjoy guided hiking tours, helicopter rides for a bird's-eye view, and stargazing in one of the most iconic natural wonders of the world.",
    images: [
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=800",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
    ],
  },
];

export default function TripDetailsPage() {
  const { id } = useParams();

  const trip = tripsData.find((t) => t.id === Number(id));

  if (!trip) {
    return <div className="py-20 text-center font-bold">Trip not found!</div>;
  }

  return (
    <main className="bg-white min-h-screen pb-20">
      <div className="max-w-[1200px] mx-auto px-6 pt-10">
        <Link
          href="/exploretips"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-all font-medium mb-8"
        >
          <HiArrowLeft /> Back to Explore
        </Link>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative w-full md:w-[65%] h-[450px] rounded-lg overflow-hidden shadow-sm">
            <Image
              src={trip.images[0]}
              alt="Main"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-[35%] h-[300px] rounded-lg overflow-hidden shadow-sm self-start">
            <Image
              src={trip.images[1]}
              alt="Side"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-[42px] font-black text-slate-900 mb-4 leading-tight">
            {trip.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-500 font-bold mb-8">
            <div className="flex items-center gap-1.5">
              <HiOutlineLocationMarker className="text-xl text-slate-400" />{" "}
              {trip.location}
            </div>
            <div className="flex items-center gap-1.5">
              <HiOutlineClock className="text-xl text-slate-400" /> {trip.days}{" "}
              Days
            </div>
            <div className="flex items-center gap-1.5">
              <HiStar className="text-orange-500 text-xl" /> {trip.rating} (
              {trip.reviews} reviews)
            </div>
          </div>

          <p className="text-slate-500 text-lg leading-[1.8] mb-12">
            {trip.description}
          </p>

          {/* ৪. Reviews Box  */}
          <div className="bg-white border border-slate-200 rounded-lg p-8 mb-12 shadow-sm">
            <h3 className="text-2xl font-black text-slate-900 mb-4">Reviews</h3>
            <p className="text-slate-400 font-medium">
              Reviews will be available once you connect Lovable Cloud.
            </p>
          </div>

          {/* ৫. Booking Section */}
          <div className="bg-white border border-slate-100 rounded-lg p-6 md:p-8 shadow-xl text-center w-full mb-10">
            <span className="text-slate-400 font-bold text-sm tracking-wide uppercase">
              Starting from
            </span>
            <div className="text-[64px] font-black text-[#1e40af] leading-none my-4">
              ${trip.price}
            </div>
            <p className="text-slate-400 font-bold mb-8">per person</p>

            <button className="w-full py-5 bg-[#f97316] text-white font-black rounded-lg hover:bg-orange-600 transition-all text-2xl shadow-xl shadow-orange-200 cursor-pointer">
              Book Now
            </button>
            <p className="text-slate-400 text-sm font-medium mt-6">
              Free cancellation up to 48 hours before
            </p>
          </div>

          {/* ৬. Related Trips */}
          <div className="mt-20">
            <h2 className="text-[38px] font-black text-slate-900 mb-10">
              Related Trips
            </h2>

            <div className="max-w-[420px] bg-white border border-slate-100 rounded-lg overflow-hidden shadow-lg group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800"
                  alt="Related"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
