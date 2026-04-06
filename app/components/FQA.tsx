"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

const faqData = [
  {
    question: "How does TravelMate AI personalize my trip?",
    answer:
      "Our intelligent AI analyzes your preferences, past travel history, and interests to suggest the most relevant destinations, accommodations, and activities tailored specifically for you.",
  },
  {
    question: "Can I modify my booking after confirmation?",
    answer:
      "Yes, you can modify most bookings through your dashboard. However, changes depend on the specific provider's policy and might involve additional fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and local payment gateways depending on your region.",
  },
  {
    question: "Is travel insurance included?",
    answer:
      "Basic travel assistance is included in some premium packages, but we highly recommend purchasing a comprehensive travel insurance policy separately through our partners.",
  },
  {
    question: "How do I contact support during my trip?",
    answer:
      "Our dedicated support team is available 24/7 via the live chat in the app, or you can call our international emergency hotline listed in your itinerary.",
  },
  {
    question: "Are group discounts available?",
    answer:
      "Absolutely! For groups of 8 or more, we offer exclusive discounts and personalized group planning services.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-black text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Everything you need to know
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-100 rounded-sm overflow-hidden transition-all duration-300 hover:border-blue-100 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white transition-colors"
              >
                <span className="text-lg md:text-xl font-bold text-slate-800">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronDown className="text-2xl text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-500 text-lg leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
