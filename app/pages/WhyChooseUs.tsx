import React from "react";
import { TbRobot, TbShieldCheck, TbHeadset, TbWallet } from "react-icons/tb";

const WhyChooseUs = () => {
  const features = [
    {
      title: "AI-Powered Planning",
      icon: <TbRobot />,
      description:
        "Get personalized trip recommendations from our intelligent travel assistant.",
    },
    {
      title: "Secure Booking",
      icon: <TbShieldCheck />,
      description:
        "Your payments and data are protected with industry-standard encryption.",
    },
    {
      title: "24/7 Support",
      icon: <TbHeadset />,
      description:
        "Our dedicated team is available around the clock to assist you anytime.",
    },
    {
      title: "Best Price Guarantee",
      icon: <TbWallet />,
      description:
        "We match any lower price you find, ensuring you always get the best deal.",
    },
  ];

  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium">
            What sets TravelMate AI apart
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-sm border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-center flex flex-col items-center justify-center"
            >
              <div className="text-4xl text-blue-600 mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
