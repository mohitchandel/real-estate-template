"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaStar } from "react-icons/fa";

interface Agent {
  id: number;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  rating: number;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Sophia Rodriguez",
    role: "Luxury Property Specialist",
    image: "/Image/agent1.jpg",
    specialties: ["Residential Sales", "Home Staging", "Neighborhood Expert"],
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Commercial Real Estate Expert",
    image: "/Image/agent2.jpg",
    specialties: ["Luxury Homes", "New Construction", "Relocation Services"],
    rating: 4.5,
  },
  {
    id: 3,
    name: "Emily Clark",
    role: "Residential Advisor",
    image: "/Image/agent1.jpg",
    specialties: ["Senior Real Estate", "Estate Sales", "Home Valuation Expert"],
    rating: 4.8,
  },
];

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="relative h-48 sm:h-64">
      <Image
        src={agent.image}
        alt={agent.name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
        {agent.name}
      </h3>
      <p className="text-sm sm:text-base font-medium text-indigo-900 mb-3">
        {agent.role}
      </p>
      <div className="flex items-center text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < agent.rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {agent.specialties.map((specialty, index) => (
          <span
            key={index}
            className="bg-indigo-100 text-indigo-900 text-xs font-semibold px-2.5 py-0.5 rounded"
          >
            {specialty}
          </span>
        ))}
      </div>
      <div className="flex space-x-4 mt-4">
        <FaPhoneAlt className="text-indigo-900 hover:text-indigo-800 cursor-pointer" />
        <FaEnvelope className="text-indigo-900 hover:text-indigo-800 cursor-pointer" />
        <FaLinkedin className="text-indigo-900 hover:text-indigo-800 cursor-pointer" />
      </div>
    </div>
  </motion.div>
);

export default function AgentShowcase() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 lg:px-72 mb-20">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-indigo-900 py-10">
          Our Elite Agents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
