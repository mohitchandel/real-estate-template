"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaBed, FaBath, FaRegSquare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className="bg-white rounded-md shadow-xl overflow-hidden">
    <img
      src={property.image}
      alt={property.name}
      className="w-full h-48 md:h-60 lg:h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-indigo-900">{property.name}</h3>
      <p className="text-gray-600">{property.location}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-green-600">
          {property.price}
        </span>
        <Link
          href={`/Property/${property.id}`}
          className="bg-indigo-900 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          View Details
        </Link>
      </div>
      <div className="mt-4 flex justify-between text-gray-600">
        <div className="flex items-center">
          <FaBed className="text-indigo-900 mr-1" />
          <span>{property.bedrooms} Beds</span>
        </div>
        <div className="flex items-center">
          <FaBath className="text-indigo-900 mr-1" />
          <span>{property.bathrooms} Baths</span>
        </div>
        <div className="flex items-center">
          <FaRegSquare className="text-indigo-900 mr-1" />
          <span>{property.squareFeet} sq ft</span>
        </div>
      </div>
    </div>
  </div>
);

export default function RealEstateShowcase() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const properties: Property[] = [
    {
      id: 1,
      name: "Sunset Villa",
      location: "Malibu, CA",
      price: "$2,500,000",
      image: "/Image/hero_bg_1.jpg",
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 3500,
    },
    {
      id: 2,
      name: "Downtown Loft",
      location: "New York, NY",
      price: "$1,200,000",
      image: "/Image/hero_bg_2.jpg",
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1500,
    },
    {
      id: 3,
      name: "Meadow Ranch",
      location: "Montana",
      price: "$3,750,000",
      image: "/Image/hero_bg_3.jpg",
      bedrooms: 5,
      bathrooms: 4,
      squareFeet: 5000,
    },
    {
      id: 4,
      name: "Skyline Office",
      location: "Chicago, IL",
      price: "$5,000,000",
      image: "/Image/hero_bg_1.jpg",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 3000,
    },
    {
      id: 5,
      name: "Oceanfront Condo",
      location: "Miami, FL",
      price: "$2,800,000",
      image: "/Image/hero_bg_2.jpg",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2000,
    },
    {
      id: 6,
      name: "Mountain Cabin",
      location: "Aspen, CO",
      price: "$1,500,000",
      image: "/Image/hero_bg_3.jpg",
      bedrooms: 2,
      bathrooms: 1,
      squareFeet: 1200,
    },
    {
      id: 7,
      name: "City Penthouse",
      location: "San Francisco, CA",
      price: "$3,200,000",
      image: "/Image/hero_bg_2.jpg",
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2500,
    },
    {
      id: 8,
      name: "Suburban Home",
      location: "Dallas, TX",
      price: "$900,000",
      image: "/Image/hero_bg_2.jpg",
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 1800,
    },
    {
      id: 9,
      name: "Country Estate",
      location: "Nashville, TN",
      price: "$4,000,000",
      image: "/Image/hero_bg_1.jpg",
      bedrooms: 6,
      bathrooms: 5,
      squareFeet: 6000,
    },
    {
      id: 10,
      name: "Corporate Tower",
      location: "Los Angeles, CA",
      price: "$10,000,000",
      image: "/Image/hero_bg_3.jpg",
      bedrooms: 10,
      bathrooms: 7,
      squareFeet: 10000,
    },
  ];

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-32 ">
      <div className="relative flex justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-900">
          Our Properties
        </h1>
        <Link
          href="/Property"
          className="bg-indigo-900 content-center justify-center text-white px-4 py-2 sm:px-1 sm:py-2 text-sm sm:text-base rounded-md shadow-lg hover:bg-indigo-700 transition duration-300 lg:px-4"
        >
          View All Properties
        </Link>
      </div>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper mb-8"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={prevRef}
          className="hidden md:block absolute top-1/2 left-0 transform -translate-y-1/2 text-indigo-900 bg-transparent text-4xl px-4 py-2 rounded-md shadow-lg transition duration-300"
        >
          &lt;
        </button>
        <button
          ref={nextRef}
          className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 text-indigo-900 bg-transparent text-4xl px-4 py-2 rounded-md shadow-lg transition duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
