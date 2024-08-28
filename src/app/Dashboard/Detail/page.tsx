"use client";
import React from "react";
import Sidebar from "@/components/ui/Dashbaord/sidebar";

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
  {
    id: 1,
    name: "Sunset Villa",
    location: "Malibu, CA",
    price: "$2,500,000",
    image: "/Image/hero_bg_1.jpg",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3500,
    type: "Ranch",
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
    type: "Villa",
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
    type: "House",
  },
  {
    id: 4,
    name: "Skyline Office",
    location: "Chicago, IL",
    price: "$5,000,000",
    image: "/Image/hero_bg_1.jpg",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 4000,
    type: "Residential",
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
    type: "House",
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
    type: "House",
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
    type: "House",
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
    type: "Ranch",
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
    type: "House",
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
    type: "House",
  },
  {
    id: 11,
    name: "Oceanfront Condo",
    location: "Miami, FL",
    price: "$2,800,000",
    image: "/Image/hero_bg_2.jpg",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2000,
    type: "Villa",
  },
];

const Detail: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-50">
    <Sidebar />

    <div className="flex-grow bg-blue-50 p-4">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-400 to-blue-700 shadow-md p-4 mb-6 rounded-lg text-white">
        <h3 className="text-2xl font-bold flex items-center">
          Properties Details
        </h3>
      </header>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white text-blue-900 md:text-base p-4 rounded-lg shadow-md sm:text-sm">
        <div className="min-w-full">
          {/* Grid Header */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 text-center ">
            <div className="font-semibold text-lg border-b border-gray-200 py-2 sm:text-xs md:text-lg">Name</div>
            <div className="font-semibold text-lg border-b border-gray-200 py-2 sm:text-xs md:text-lg ">Location</div>
            <div className="font-semibold text-lg border-b border-gray-200 py-2 sm:text-xs md:text-lg">Price</div>
            <div className="font-semibold text-lg border-b border-gray-200 py-2 sm:text-xs md:text-lg">Bedrooms</div>
            <div className="font-semibold text-lg border-b border-gray-200 py-2 sm:text-xs md:text-lg">Bathrooms</div>
            <div className="font-semibold text-lg border-b border-gray-200 py-2 sm:text-xs md:text-lg">SquareFeet</div>
            <div className="font-semibold text-lg border-b border-gray-200 py-2 sm:text-xs md:text-lg">Type</div>
          </div>

          {/* Property Data Rows */}
          {properties.map((property) => (
            <div key={property.id} className="grid grid-cols-1 md:grid-cols-7 gap-4 text-center">
          
              <div className="p-2 border-b border-gray-200 truncate py-14">{property.name}</div>
              <div className="p-2 border-b border-gray-200 truncate py-14">{property.location}</div>
              <div className="p-2 border-b border-gray-200 truncate py-14">{property.price}</div>
              <div className="p-2 border-b border-gray-200 truncate py-14">{property.bedrooms}</div>
              <div className="p-2 border-b border-gray-200 truncate py-14">{property.bathrooms}</div>
              <div className="p-2 border-b border-gray-200 truncate py-14">{property.squareFeet}</div>
              <div className="p-2 border-b border-gray-200 truncate py-14">{property.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Detail;
