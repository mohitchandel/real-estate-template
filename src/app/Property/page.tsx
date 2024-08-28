"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaRegSquare } from 'react-icons/fa';
import Navbar from "@/components/common/Navbar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/common/Footer";

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  type: string; 

}

const properties: Property[] = [
  { id: 1, name: "Sunset Villa", location: "Malibu, CA", price: "$2,500,000", image: "/Image/hero_bg_1.jpg", bedrooms: 4, bathrooms: 3, squareFeet: 3500 , type: "Ranch"},
  { id: 2, name: "Downtown Loft", location: "New York, NY", price: "$1,200,000", image: "/Image/hero_bg_2.jpg", bedrooms: 2, bathrooms: 2, squareFeet: 1500 , type: "Villa"},
  { id: 3, name: "Meadow Ranch", location: "Montana", price: "$3,750,000", image: "/Image/hero_bg_3.jpg", bedrooms: 5, bathrooms: 4, squareFeet: 5000 , type: "House"},
  { id: 4, name: "Skyline Office", location: "Chicago, IL", price: "$5,000,000", image: "/Image/hero_bg_1.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 4000  ,type: "Residential"},
  { id: 5, name: "Oceanfront Condo", location: "Miami, FL", price: "$2,800,000", image: "/Image/hero_bg_2.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 2000  ,type: "House"},
  { id: 6, name: "Mountain Cabin", location: "Aspen, CO", price: "$1,500,000", image: "/Image/hero_bg_3.jpg", bedrooms: 2, bathrooms: 1, squareFeet: 1200  ,type: "House",},
  { id: 7, name: "City Penthouse", location: "San Francisco, CA", price: "$3,200,000", image: "/Image/hero_bg_2.jpg", bedrooms: 4, bathrooms: 3, squareFeet: 2500 ,type: "House"},
  { id: 8, name: "Suburban Home", location: "Dallas, TX", price: "$900,000", image: "/Image/hero_bg_2.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 1800  ,type: "Ranch"},
  { id: 9, name: "Country Estate", location: "Nashville, TN", price: "$4,000,000", image: "/Image/hero_bg_1.jpg", bedrooms: 6, bathrooms: 5, squareFeet: 6000 ,type: "House" },
  { id: 10, name: "Corporate Tower", location: "Los Angeles, CA", price: "$10,000,000", image: "/Image/hero_bg_3.jpg", bedrooms: 10, bathrooms: 7, squareFeet: 10000  ,type: "House"},
  { id: 11, name: "Oceanfront Condo", location: "Miami, FL", price: "$2,800,000", image: "/Image/hero_bg_2.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 2000 ,type: "Villa" },
  { id: 12, name: "Mountain Cabin", location: "Aspen, CO", price: "$1,500,000", image: "/Image/hero_bg_3.jpg", bedrooms: 2, bathrooms: 1, squareFeet: 1200 ,type: "House"},
  { id: 13, name: "City Penthouse", location: "San Francisco, CA", price: "$3,200,000", image: "/Image/hero_bg_2.jpg", bedrooms: 4, bathrooms: 3, squareFeet: 2500 ,type: "Ranch"},
  { id: 14, name: "Suburban Home", location: "Dallas, TX", price: "$900,000", image: "/Image/hero_bg_2.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 1800 ,type: "Residential"},
  { id: 15, name: "Country Estate", location: "Nashville, TN", price: "$4,000,000", image: "/Image/hero_bg_1.jpg", bedrooms: 6, bathrooms: 5, squareFeet: 6000 ,type: "House"},
  { id: 16, name: "Corporate Tower", location: "Los Angeles, CA", price: "$10,000,000", image: "/Image/hero_bg_3.jpg", bedrooms: 10, bathrooms: 7, squareFeet: 10000 ,type: "Ranch"},
];

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <motion.div
    className="bg-white rounded-md shadow-xl overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-indigo-700">{property.name}</h3>
      <p className="text-gray-600">{property.location}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-green-600">{property.price}</span>
      </div>
      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-gray-600">
        <div className="flex items-center">
          <FaBed className="text-indigo-600 mr-1" />
          <span>{property.bedrooms} Beds</span>
        </div>
        <div className="flex items-center">
          <FaBath className="text-indigo-600 mr-1" />
          <span>{property.bathrooms} Baths</span>
        </div>
        <div className="flex items-center">
        <FaRegSquare  className="text-indigo-600 mr-1" />
          <span>{property.squareFeet} sq ft</span>
        </div>
      </div>
      <Link href={`/Property/${property.id}`}
         className="text-xl font-bold border rounded-md py-2 px-2 text-white bg-indigo-700 mb-12 block text-center">
          View Property
      </Link>
    </div>
  </motion.div>
);


export default function AllProperties() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-700 mb-8 sm:mb-10 lg:mb-12">All Properties</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
    {properties.map((property) => (
      <PropertyCard key={property.id} property={property} />
    ))}
  </div>
</div>
<Footer/>
    </>
  );
}
