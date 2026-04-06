"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineCalendar, HiOutlineUser } from "react-icons/hi";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hidden Gems in Southeast Asia",
    excerpt:
      "Discover off-the-beaten-path destinations that most travelers overlook. From secret beaches in the Philippines to ancient temples in Myanmar.",
    category: "Destinations",
    date: "Mar 15, 2024",
    author: "Emma Wilson",
    image:
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=800",
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Travel Planning",
    excerpt:
      "Learn how artificial intelligence is making travel planning smarter, faster, and more personalized than ever before.",
    category: "Technology",
    date: "Mar 10, 2024",
    author: "David Chen",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800",
  },
  {
    id: 3,
    title: "Budget Travel Guide: Europe Under $50/Day",
    excerpt:
      "Yes, it's possible! Here's your complete guide to exploring Europe on a shoestring budget without missing the best experiences.",
    category: "Tips",
    date: "Mar 5, 2024",
    author: "Lisa Anderson",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800",
  },
];

export default function TravelBlog() {
  return (
    <section id="blog" className="py-20 bg-white min-h-screen">
      <div className="max-w-[1300px] mx-auto px-6">
        <h1 className="text-4xl font-black text-slate-900 mb-12">
          Travel Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-slate-400 text-sm font-bold border-t border-slate-50 pt-6">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineCalendar className="text-lg" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    • {post.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
