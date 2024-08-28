"use client";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaRegSquare } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

interface Property {
  id: number;
  name: string;
  location: string;
  image: string;
  price: string;
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
    type: "penthouses",
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
    type: "apartment",
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
    type: "commercial",
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
    type: "penthouses",
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
    type: "apartment",
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
    type: "commercial",
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
  {
    id: 12,
    name: "Mountain Cabin",
    location: "Aspen, CO",
    price: "$1,500,000",
    image: "/Image/hero_bg_3.jpg",
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1200,
    type: "apartment",
  },
  {
    id: 13,
    name: "City Penthouse",
    location: "San Francisco, CA",
    price: "$3,200,000",
    image: "/Image/hero_bg_2.jpg",
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2500,
    type: "Ranch",
  },
  {
    id: 14,
    name: "Suburban Home",
    location: "Dallas, TX",
    price: "$900,000",
    image: "/Image/hero_bg_2.jpg",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    type: "Residential",
  },
  {
    id: 15,
    name: "Country Estate",
    location: "Nashville, TN",
    price: "$4,000,000",
    image: "/Image/hero_bg_1.jpg",
    bedrooms: 6,
    bathrooms: 5,
    squareFeet: 6000,
    type: "penthouses",
  },
  {
    id: 16,
    name: "Corporate Tower",
    location: "Los Angeles, CA",
    price: "$10,000,000",
    image: "/Image/hero_bg_3.jpg",
    bedrooms: 10,
    bathrooms: 7,
    squareFeet: 10000,
    type: "Ranch",
  },
];

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Image
      src={property.image}
      alt={property.name}
      width={500}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className=" py-10 p-5">
      <h3 className="text-xl font-semibold text-indigo-700">{property.name}</h3>
      <p className="text-gray-600">{property.location}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-green-600">
          {property.price}
        </span>
      </div>
      <div className="py-4 flex flex-wrap gap-4 text-gray-600">
        <div className="flex items-center">
          <FaBed className="text-indigo-600 mr-1" />
          <span>{property.bedrooms} Beds</span>
        </div>
        <div className="flex items-center">
          <FaBath className="text-indigo-600 mr-1" />
          <span>{property.bathrooms} Baths</span>
        </div>
        <div className="flex items-center">
          <FaRegSquare className="text-indigo-600 mr-1" />
          <span>{property.squareFeet} sq ft</span>
        </div>
      </div>
      <Link
        href={`/Property/${property.id}`}
        className="mt-6 mb-6 text-xl font-bold border rounded-md py-2 px-4 text-white bg-indigo-700 hover:bg-indigo-800"
      >
        View Property
      </Link>
    </div>
  </motion.div>
);

const PropertyTypePage: React.FC = () => {
  const params = useParams();
  const type = params.type as string;
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);

  useEffect(() => {
    if (type) {
      const propertiesByType = properties.filter(
        (property) => property.type.toLowerCase() === type.toLowerCase()
      );
      setFilteredProperties(propertiesByType);
    }
  }, [type]);

  if (!type) return <p>Loading...</p>;

  return (
    <>
    <Navbar/>
    <div className="container mx-auto py-40 px-4 sm:px-6 lg:px-40">
      <Link
        href="/Property/Property_type/"
        className="mt-4 text-xl font-bold border rounded-md py-2 px-4 text-white bg-indigo-700 hover:bg-indigo-800"
      >
        back
      </Link>
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-12 mt-8">
        Properties of type: {type}
      </h1>
      {filteredProperties.length === 0 ? (
        <p className="text-lg text-gray-700">
          No properties found for this type.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default PropertyTypePage;
