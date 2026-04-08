import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiStar,
} from "react-icons/hi";

const packages = [
  {
    id: 1,
    title: "Bali Paradise Retreat",
    description:
      "7-day luxury retreat with temples, beaches, and rice terraces",
    location: "Bali, Indonesia",
    duration: "7 Days",
    rating: "4.8 (234)",
    price: "$1299",
    image: "https://i.ibb.co.com/wh75S36v/Screenshot-2026-04-06-175407.png",
  },
  {
    id: 2,
    title: "Santorini Sunset Tour",
    description:
      "5-day Greek island escape with sunset sailing and wine tasting",
    location: "Santorini, Greece",
    duration: "5 Days",
    rating: "4.9 (189)",
    price: "$1599",
    image:
      "https://i.ibb.co.com/S4ygRYrH/Gemini-Generated-Image-94lmil94lmil94lm.png",
  },
  {
    id: 3,
    title: "Japanese Culture Explorer",
    description: "10-day journey through Kyoto, Tokyo, and Osaka",
    location: "Kyoto, Japan",
    duration: "10 Days",
    rating: "4.7 (156)",
    price: "$2499",
    image:
      "https://i.ibb.co.com/pv0WB9nn/Gemini-Generated-Image-77xjb977xjb977xj.png",
  },
  {
    id: 4,
    title: "Maldives Overwater Villa",
    description: "6-day overwater villa stay with all-inclusive luxury",
    location: "Male Atoll, Maldives",
    duration: "6 Days",
    rating: "4.9 (312)",
    price: "$3299",
    image:
      "https://i.ibb.co.com/mrXk5Mst/Gemini-Generated-Image-m63waim63waim63w.png",
  },
  {
    id: 5,
    title: "African Safari Experience",
    description: "8-day wild adventure across the Serengeti plains",
    location: "Serengeti, Tanzania",
    duration: "8 Days",
    rating: "4.8 (142)",
    price: "$3999",
    image:
      "https://i.ibb.co.com/M5Zj5WQk/Gemini-Generated-Image-1ycz7s1ycz7s1ycz.png",
  },
  {
    id: 6,
    title: "Swiss Alps Adventure",
    description: "6-day skiing and mountain hiking experience",
    location: "Zermatt, Switzerland",
    duration: "6 Days",
    rating: "4.9 (215)",
    price: "$2899",
    image:
      "https://i.ibb.co.com/M5Zj5WQk/Gemini-Generated-Image-1ycz7s1ycz7s1ycz.png",
  },
];

const FeaturedPackages = () => {
  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Featured Packages
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Hand-picked trips loved by our travelers
          </p>
        </div>

        {/* Responsive Grid: Mobile-1, Tablet-2, Desktop-3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              {/* Image Section */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Price Badge */}
                <div className="absolute top-5 right-5 bg-orange-500 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                  {pkg.price}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 mb-6 line-clamp-2 font-medium">
                  {pkg.description}
                </p>

                {/* Info Row */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-semibold mb-8">
                  <div className="flex items-center gap-1">
                    <HiOutlineLocationMarker className="text-orange-500 text-lg" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <HiOutlineClock className="text-orange-500 text-lg" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <HiStar className="text-orange-500 text-lg" />
                    {pkg.rating}
                  </div>
                </div>

                {/* Button Section */}
                <Link href={`/package/${pkg.id}`} className="block w-full">
                  <button className="w-full py-4 bg-slate-50 text-slate-900 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 border border-slate-100 hover:border-orange-500 shadow-sm cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
