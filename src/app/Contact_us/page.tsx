"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            We&quot;e here to help. Reach out to us through any of the methods below, and we&#34;ll get back to you as soon as possible.
          </p>
        </section>

        <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-indigo-900 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Call Us</h2>
            <p className="text-lg text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaEnvelope className="text-indigo-900 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Email Us</h2>
            <p className="text-lg text-gray-600">info@yourcompany.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-indigo-900 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Visit Us</h2>
            <p className="text-lg text-gray-600">123 Main Street, Anytown, USA</p>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg text-gray-600 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-900"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-gray-600 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-900"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg text-gray-600 mb-2">Your Message</label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-indigo-900 h-40"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-900 text-white text-lg font-bold rounded-lg hover:bg-indigo-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">Our Location</h2>
          <div className="relative w-full h-64 sm:h-80 lg:h-96">
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.723631790666!2d-78.87921192317206!3d42.87867707114932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d31236c203b691%3A0x53bf7932ab372a6f!2s123%20Main%20St%2C%20Buffalo%2C%20NY%2014203%2C%20USA!5e0!3m2!1sen!2sin!4v1724306196844!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
