"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Team from "@/components/ui/About/Team";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 lg:mt-9 sm:mt-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            About Us
          </h1>
          <p className="text-base sm:text-base text-gray-600 ">
            We are committed to excellence and dedicated to providing top-notch
            services and products that meet the highest standards of quality.
            Our mission is to create lasting value for our customers, partners,
            and community.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                Our Story
              </h2>
              <p className=" text-base text-gray-600 mb-6">
                Founded in [Year], we have grown from a small startup to an
                industry leader. Our journey is one of passion, dedication and
                innovation. We believe in fostering strong relationships and
                delivering exceptional results.
              </p>
              <p className="text-base text-gray-600">
                Over the years, we have expanded our offerings, embraced new
                challenges, and constantly evolved to meet the ever-changing
                needs of our clients. Our team is driven by a shared vision to
                make a meaningful impact.
              </p>
            </div>
            <div className="relative w-full h-64 sm:h-80 lg:order-2">
              <Image
                src="/Image/story.png"
                alt="Our Story"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 lg:order-1">
              <Image
                src="/Image/mission.webp"
                alt="Our Mission"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:order-2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
                Our Mission
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Our mission is to innovate and deliver solutions that empower
                our customers to succeed. We strive to set new standards of
                excellence in everything we do, from product development to
                customer service.
              </p>
              <p className="text-base text-gray-600">
                We are committed to sustainability, integrity, and continuous
                improvement. Our goal is to create a positive impact on the
                world through our actions and our products.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-8">
            Meet Our Team
          </h2>

          <div className="py-10 px-4 bg-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <Image
                      src="/Image/person1.jpeg"
                      alt="John Doe"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    John Doe
                  </h3>
                  <p className="text-gray-600">CEO & Founder</p>
                </div>
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <Image
                      src="/Image/person_2-min.jpg"
                      alt="Jane Smith"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">Chief Marketing Officer</p>
                </div>
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <Image
                      src="/Image/person_3-min.jpg"
                      alt="Michael Johnson"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    Michael Johnson
                  </h3>
                  <p className="text-gray-600">Head of Development</p>
                </div>
                <div className="text-center">
                  <div className="relative w-56 h-56 mx-auto mb-4">
                    <Image
                      src="/Image/agent1.jpg"
                      alt="Emily Davis"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900">
                    Emily Davis
                  </h3>
                  <p className="text-gray-600">Chief Financial Officer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Team />
      </div>
      <Footer />
    </>
  );
}
