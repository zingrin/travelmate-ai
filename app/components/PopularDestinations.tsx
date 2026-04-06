import Image from "next/image";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const destinations = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    trips: "45 trips",
    image: "https://i.ibb.co.com/wh75S36v/Screenshot-2026-04-06-175407.png",
  },
  {
    id: 2,
    name: "Santorini",
    location: "Greece",
    trips: "32 trips",
    image:
      "https://i.ibb.co.com/S4ygRYrH/Gemini-Generated-Image-94lmil94lmil94lm.png",
  },
  {
    id: 3,
    name: "Kyoto",
    location: "Japan",
    trips: "28 trips",
    image:
      "https://i.ibb.co.com/pv0WB9nn/Gemini-Generated-Image-77xjb977xjb977xj.png",
  },
  {
    id: 4,
    name: "Machu Picchu",
    location: "Peru",
    trips: "19 trips",
    image:
      "https://i.ibb.co.com/M5Zj5WQk/Gemini-Generated-Image-1ycz7s1ycz7s1ycz.png",
  },
  {
    id: 5,
    name: "Maldives",
    location: "Maldives",
    trips: "37 trips",
    image:
      "https://i.ibb.co.com/mrXk5Mst/Gemini-Generated-Image-m63waim63waim63w.png",
  },
  {
    id: 6,
    name: "Swiss Alps",
    location: "Switzerland",
    trips: "22 trips",
    image:
      "https://i.ibb.co.com/M5Zj5WQk/Gemini-Generated-Image-1ycz7s1ycz7s1ycz.png",
  },
];

const PopularDestinations = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1550px] mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 w-full">
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Popular Destinations
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 rounded-full mb-6"></div>{" "}
          <p className="text-gray-500 text-xl md:text-xl font-medium max-w-2xl">
            Explore the world&apos;s most loved travel spots
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative w-full aspect-[4/3] sm:aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={dest.id <= 3}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

              {/* Content Box */}
              <div className="absolute bottom-8 left-8 text-white z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-1 drop-shadow-lg">
                  {dest.name}
                </h3>
                <div className="flex items-center gap-2 text-base md:text-lg text-gray-100 opacity-90 font-medium">
                  <HiOutlineLocationMarker className="text-xl" />
                  <span>
                    {dest.location} • {dest.trips}
                  </span>
                </div>
              </div>

              {/* Hover Effect Layer */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
