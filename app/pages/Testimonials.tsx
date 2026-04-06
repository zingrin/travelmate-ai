"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    name: "Marco Fischer",
    location: "Berlin, Germany",
    image: "https://i.pravatar.cc/150?u=marco",
    rating: 5,
    text: "Outstanding service from start to finish. The Swiss Alps package was perfectly organized, and the mountain lodges were breathtaking. TravelMate AI is now my go-to travel platform.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "London, UK",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    text: "The AI recommendations were spot on! I found hidden gems in Bali that I never would have discovered otherwise. Truly a game-changer for modern travelers.",
  },
  {
    id: 3,
    name: "Arif Ahmed",
    location: "Dhaka, Bangladesh",
    image: "https://i.pravatar.cc/150?u=arif",
    rating: 5,
    text: "অসাধারণ অভিজ্ঞতা! তাদের কাস্টমার সাপোর্ট এবং ট্রাভেল প্ল্যানিং আমাকে অনেক সাহায্য করেছে। যারা বিদেশ ভ্রমণের কথা ভাবছেন, তাদের জন্য ট্রাভেলমেট এআই সেরা চয়েস হতে পারে।",
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: "https://i.pravatar.cc/150?u=yuki",
    rating: 5,
    text: "The precision of the itinerary was impressive. Every detail of my Nordic tour was covered. I saved hours of planning time using their AI dashboard.",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    image: "https://i.pravatar.cc/150?u=elena",
    rating: 4,
    text: "Great platform with competitive prices. The booking process for my Mediterranean cruise was seamless and the support team was very responsive to my queries.",
  },
  {
    id: 6,
    name: "David Wilson",
    location: "New York, USA",
    image: "https://i.pravatar.cc/150?u=david",
    rating: 5,
    text: "Safe, secure, and smart. I really appreciated the 'Best Price Guarantee' which actually worked for my African Safari trip. Highly recommended for families.",
  },
  {
    id: 7,
    name: "Fatima Al-Sayed",
    location: "Dubai, UAE",
    image: "https://i.pravatar.cc/150?u=fatima",
    rating: 5,
    text: "Professional service and high-quality packages. My luxury stay in Paris was organized to perfection. The interactive pricing page made it very clear what I was paying for.",
  },
  {
    id: 8,
    name: "Liam O'Connor",
    location: "Sydney, Australia",
    image: "https://i.pravatar.cc/150?u=liam",
    rating: 5,
    text: "TravelMate AI helped me plan a solo trip to Iceland without any stress. The community reviews and AI-driven insights gave me the confidence to explore remote areas safely.",
  },
];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Real stories from real adventurers
          </p>
        </div>

        {/* Testimonial Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 text-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center"
              >
                {/* User Image */}
                <div className="w-24 h-24 relative rounded-full overflow-hidden mb-6 border-4 border-slate-50">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <HiStar key={i} className="text-orange-500 text-2xl" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-500 text-xl md:text-2xl italic leading-relaxed mb-10 font-medium">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                {/* User Info */}
                <div className="mb-10">
                  <h4 className="text-2xl font-black text-slate-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400 font-bold tracking-wide">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons (Floating at bottom center) */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
              >
                <HiChevronLeft className="text-3xl" />
              </button>
              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-2xl border-2 border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-md"
              >
                <HiChevronRight className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
