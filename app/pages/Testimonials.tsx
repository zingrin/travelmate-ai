"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    name: "Marco Fischer",
    location: "Berlin, Germany",
    image: "https://i.pravatar.cc/150?u=marco",
    rating: 5,
    text: "Outstanding service from start to finish...",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "London, UK",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    text: "The AI recommendations were spot on!",
  },
  {
    id: 3,
    name: "Arif Ahmed",
    location: "Dhaka, Bangladesh",
    image: "https://i.pravatar.cc/150?u=arif",
    rating: 5,
    text: "অসাধারণ অভিজ্ঞতা!",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: "https://i.pravatar.cc/150?u=yuki",
    rating: 5,
    text: "The precision of the itinerary was impressive.",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    image: "https://i.pravatar.cc/150?u=elena",
    rating: 4,
    text: "Great platform with competitive prices.",
  },
  {
    id: 6,
    name: "David Wilson",
    location: "New York, USA",
    image: "https://i.pravatar.cc/150?u=david",
    rating: 5,
    text: "Safe, secure, and smart.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    if (index + visibleCards >= testimonials.length) {
      setIndex(0);
    } else {
      setIndex(index + visibleCards);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(testimonials.length - visibleCards);
    } else {
      setIndex(index - visibleCards);
    }
  };

  const visibleTestimonials = testimonials.slice(index, index + visibleCards);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-3">
            What Our Travelers Say
          </h2>
          <p className="text-gray-500">Real stories from real users</p>
        </div>

        {/* Wrapper (IMPORTANT) */}
        <div className="relative">
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-md border"
              >
                {/* Top */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-xs text-gray-400">{item.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <HiStar key={i} className="text-orange-500" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Buttons (LEFT - RIGHT) */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white text-gray-600 flex items-center justify-center shadow-lg hover:bg-orange-600 hover:text-white"
          >
            <HiChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white border text-gray-600 flex items-center justify-center shadow-lg hover:bg-orange-500  hover:text-white"
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
