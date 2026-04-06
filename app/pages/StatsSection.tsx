"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { label: "Happy Travelers", value: 50000 },
    { label: "Trips Booked", value: 12000 },
    { label: "Destinations", value: 150 },
    { label: "5-Star Reviews", value: 8500 },
  ];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                ) : (
                  <span>0+</span>
                )}
              </div>
              <div className="text-gray-500 font-bold text-sm md:text-base tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
