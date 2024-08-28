"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { FaCheckCircle, FaUserTie, FaCog, FaChartLine } from 'react-icons/fa';

export default function Services() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">Our Comprehensive Services</h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          We offer a wide range of cutting-edge services tailored to meet your specific needs. Our team of experts is dedicated to delivering innovative solutions that drive your business forward.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {[1, 2, 3, 4, 5, 6].map((service) => (
          <div key={service} className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image src="/Image/services.webp" alt="" width={500} height={300} className="rounded-lg mb-4 object-cover" />
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Service {service}</h2>
            <p className="text-lg text-gray-600 mb-4">
              Detailed description of Service {service}. Explain its features, benefits, and how it addresses specific client needs.
            </p>
            <button className="text-xl font-bold border rounded-md py-2 px-4 text-white bg-indigo-900 hover:bg-indigo-800 transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Why Choose Us?</h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          We are committed to delivering exceptional service with a focus on quality, innovation, and customer satisfaction. Our track record of success and dedication to excellence sets us apart in the industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaUserTie, title: "Expert Team", description: "Our team consists of experienced professionals who are experts in their fields, ensuring top-notch service." },
            { icon: FaCog, title: "Custom Solutions", description: "We offer tailored solutions to meet your specific needs, ensuring the best possible outcomes." },
            { icon: FaCheckCircle, title: "Satisfaction Guarantee", description: "We prioritize your satisfaction and work tirelessly to exceed your expectations on every project." },
            { icon: FaChartLine, title: "Proven Results", description: "Our track record speaks for itself, with a history of delivering measurable results for our clients." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl">
              <item.icon className="text-4xl text-indigo-900 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Our Process</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {["Consultation", "Analysis", "Implementation", "Support"].map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{step}</h3>
              <p className="text-center text-gray-600 max-w-xs">Brief description of the this step.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-indigo-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Ready to Get Started?</h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Contact us today to discuss how our services can benefit your business. We&quot;re here to help you achieve your goals and drive success.
        </p>
        <div className="text-center">
          <button className="text-xl font-bold border rounded-md py-3 px-6 text-white bg-indigo-900 hover:bg-indigo-800 transition duration-300">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}