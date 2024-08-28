"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../common/Navbar";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const reasons: Reason[] = [
  {
    title: "Exceptional Quality",
    description:
      "We deliver exceptional service and innovative products that surpass industry benchmarks.",
    icon: "🏆",
  },
  {
    title: "Customer-Driven",
    description:
      "Our clients are at the heart of everything we do, ensuring personalized and attentive service.",
    icon: "🤝",
  },
  {
    title: "Innovative Solutions",
    description:
      "We leverage cutting-edge technology and creative solutions to meet your needs.",
    icon: "💡",
  },
  {
    title: "Reliable Support",
    description:
      "Our dedicated support team is available 24/7 to assist you with any concerns.",
    icon: "🛠️",
  },
];

const WhyChooseUs: React.FC = () => (
  <>
    <Navbar />
    <div className="bg-indigo-900 text-white py-10 px-8 lg:px-40">
      <h2 className="text-5xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-white text-indigo-900 p-6 rounded-lg shadow-lg flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-5xl mb-4">{reason.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-700 text-center">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

export default WhyChooseUs;
