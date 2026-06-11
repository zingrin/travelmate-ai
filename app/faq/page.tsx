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
      "Our dedicated support team is available 24/7 via the live chat in the app.",
  },
  {
    question: "Are group discounts available?",
    answer:
      "For groups of 8 or more, we offer exclusive discounts and personalized group planning services.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-slate-50/50 min-h-screen">
      <div className="max-w-[800px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-base font-medium">
            Everything you need to know about your next journey
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="group border border-slate-200/50 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white transition-colors group-hover:bg-slate-50/50"
              >
                <span
                  className={`text-sm md:text-base font-bold transition-colors ${openIndex === index ? "text-orange-600" : "text-slate-800"}`}
                >
                  {faq.question}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <HiChevronDown
                    className={`text-2xl ${openIndex === index ? "text-orange-500" : "text-slate-400"}`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-slate-500 text-sm md:text-base leading-relaxed border-t border-slate-50 pt-4 bg-slate-50/30">
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
