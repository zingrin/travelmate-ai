import React from "react";
import {
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaHiking,
  FaHistory,
  FaPaw,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Beach",
    trips: "124 trips",
    icon: <FaUmbrellaBeach />,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Mountain",
    trips: "89 trips",
    icon: <FaMountain />,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: 3,
    name: "City",
    trips: "156 trips",
    icon: <FaCity />,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    name: "Adventure",
    trips: "67 trips",
    icon: <FaHiking />,
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    name: "Cultural",
    trips: "93 trips",
    icon: <FaHistory />,
    color: "from-amber-500 to-amber-600",
  },
  {
    id: 6,
    name: "Wildlife",
    trips: "45 trips",
    icon: <FaPaw />,
    color: "from-red-500 to-red-600",
  },
];

const TravelCategories = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Travel Categories
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium max-w-xl leading-relaxed">
            Find your perfect type of getaway and start your next journey.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative flex flex-col items-center justify-center text-center 
                         bg-white p-8 rounded-sm border border-slate-100
                         shadow-sm hover:shadow-xl transition-all duration-500 
                         cursor-pointer hover:-translate-y-1.5"
            >
              <div
                className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center 
                           bg-gradient-to-br ${cat.color} text-white text-xl 
                           shadow-md transition-transform duration-500 group-hover:scale-110`}
              >
                {cat.icon}
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight group-hover:text-orange-500 transition-colors">
                {cat.name}
              </h3>

              {/* Trips Count */}
              <div className="text-sm font-semibold text-slate-400 group-hover:text-orange-400 transition-colors duration-500">
                {cat.trips}
              </div>

              <div className="absolute top-4 right-6 text-slate-50 text-5xl font-black -z-10 select-none">
                0{cat.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
