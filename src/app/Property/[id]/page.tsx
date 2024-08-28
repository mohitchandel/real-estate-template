"use client"; 

import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from "@/components/common/Navbar";
import Footer from '@/components/common/Footer';

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

const properties: Property[] = [
    { id: 1, name: "Sunset Villa", location: "Malibu, CA", price: "$2,500,000", image: "/Image/hero_bg_1.jpg", bedrooms: 4, bathrooms: 3, squareFeet: 3500 },
    { id: 2, name: "Downtown Loft", location: "New York, NY", price: "$1,200,000", image: "/Image/hero_bg_2.jpg", bedrooms: 2, bathrooms: 2, squareFeet: 1500 },
    { id: 3, name: "Meadow Ranch", location: "Montana", price: "$3,750,000", image: "/Image/hero_bg_3.jpg", bedrooms: 5, bathrooms: 4, squareFeet: 5000 },
    { id: 4, name: "Skyline Office", location: "Chicago, IL", price: "$5,000,000", image: "/Image/hero_bg_1.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 4000 },
    { id: 5, name: "Oceanfront Condo", location: "Miami, FL", price: "$2,800,000", image: "/Image/hero_bg_2.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 2000 },
    { id: 6, name: "Mountain Cabin", location: "Aspen, CO", price: "$1,500,000", image: "/Image/hero_bg_3.jpg", bedrooms: 2, bathrooms: 1, squareFeet: 1200 },
    { id: 7, name: "City Penthouse", location: "San Francisco, CA", price: "$3,200,000", image: "/Image/hero_bg_2.jpg", bedrooms: 4, bathrooms: 3, squareFeet: 2500 },
    { id: 8, name: "Suburban Home", location: "Dallas, TX", price: "$900,000", image: "/Image/hero_bg_2.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 1800 },
    { id: 9, name: "Country Estate", location: "Nashville, TN", price: "$4,000,000", image: "/Image/hero_bg_1.jpg", bedrooms: 6, bathrooms: 5, squareFeet: 6000 },
    { id: 10, name: "Corporate Tower", location: "Los Angeles, CA", price: "$10,000,000", image: "/Image/hero_bg_3.jpg", bedrooms: 10, bathrooms: 7, squareFeet: 10000 },
    { id: 11, name: "Oceanfront Condo", location: "Miami, FL", price: "$2,800,000", image: "/Image/hero_bg_2.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 2000 },
    { id: 12, name: "Mountain Cabin", location: "Aspen, CO", price: "$1,500,000", image: "/Image/hero_bg_3.jpg", bedrooms: 2, bathrooms: 1, squareFeet: 1200 },
    { id: 13, name: "City Penthouse", location: "San Francisco, CA", price: "$3,200,000", image: "/Image/hero_bg_2.jpg", bedrooms: 4, bathrooms: 3, squareFeet: 2500 },
    { id: 14, name: "Suburban Home", location: "Dallas, TX", price: "$900,000", image: "/Image/hero_bg_2.jpg", bedrooms: 3, bathrooms: 2, squareFeet: 1800 },
    { id: 15, name: "Country Estate", location: "Nashville, TN", price: "$4,000,000", image: "/Image/hero_bg_1.jpg", bedrooms: 6, bathrooms: 5, squareFeet: 6000 },
    { id: 16, name: "Corporate Tower", location: "Los Angeles, CA", price: "$10,000,000", image: "/Image/hero_bg_3.jpg", bedrooms: 10, bathrooms: 7, squareFeet: 10000 },
];

const PropertyDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const id = parseInt(params.id);
  const [property, setProperty] = useState<Property | undefined>(undefined);

  useEffect(() => {
    const selectedProperty = properties.find(p => p.id === id);
    setProperty(selectedProperty);
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-40 mt-5">
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-700 mb-8 sm:mb-10 lg:mb-12 text-center">{property.name}</h1>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
    <div className="space-y-6">
      <Image src={property.image} alt={property.name} width={500} height={500} className="w-full h-96 object-cover rounded-lg shadow-xl" />
     
    </div>
    <div className="flex flex-col justify-between">
      <div>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <p className="text-lg text-gray-700"><strong>Location:</strong> {property.location}</p>
          <p className="text-lg text-gray-700"><strong>Price:</strong> {property.price}</p>
          <p className="text-lg text-gray-700"><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p className="text-lg text-gray-700"><strong>Bathrooms:</strong> {property.bathrooms}</p>
          <p className="text-lg text-gray-700"><strong>Square Feet:</strong> {property.squareFeet} sq ft</p>
        </div>
      </div>
      <div className="space-y-4">
        <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300 text-lg font-semibold">
          Schedule a Viewing
        </button>
        <button className="w-full bg-white text-indigo-600 py-3 px-6 rounded-md border-2 border-indigo-600 hover:bg-indigo-50 transition duration-300 text-lg font-semibold">
          Download Brochure
        </button>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Property Highlights</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Panoramic city skyline views</li>
        <li>Gourmet kitchen with high-end appliances</li>
        <li>Private rooftop terrace</li>
        <li>Smart home technology throughout</li>
        <li>Eco-friendly solar panel system</li>
        <li>Custom-designed walk-in closets</li>
      </ul>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Neighborhood</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Walking distance to top-rated restaurants</li>
        <li>Proximity to public transportation</li>
        <li>Highly-rated school district</li>
        <li>Nearby parks and recreational facilities</li>
        <li>Vibrant local arts and culture scene</li>
        <li>Safe and family-friendly community</li>
      </ul>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Recent Upgrades</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Newly renovated spa-like bathrooms</li>
        <li>Fresh interior paint and flooring</li>
        <li>Updated HVAC system for efficiency</li>
        <li>Enhanced home security system</li>
        <li>Landscaped garden with irrigation</li>
        <li>Energy-efficient window upgrades</li>
      </ul>
    </div>
  </div>

  <div className="mb-16">
    <h2 className="text-3xl font-semibold text-indigo-600 mb-6">About This Luxurious Property</h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      Nestled in the heart of {property.location}, this extraordinary {property.bedrooms}-bedroom, {property.bathrooms}-bathroom residence offers an unparalleled living experience. With {property.squareFeet} square feet of meticulously designed space, this home seamlessly blends modern luxury with timeless elegance.
    </p>
    <p className="text-gray-700 leading-relaxed mb-4">
      As you enter, you are greeted by soaring ceilings and floor-to-ceiling windows that flood the space with natural light, offering breathtaking views of the surrounding landscape. The open-concept living area is perfect for both intimate gatherings and large-scale entertaining, featuring a state-of-the-art kitchen equipped with top-of-the-line appliances and custom cabinetry.
    </p>
    <p className="text-gray-700 leading-relaxed mb-4">
      The primary suite is a true retreat, boasting a spacious bedroom, a luxurious en-suite bathroom with a deep soaking tub and rainfall shower, and a walk-in closet that dreams are made of. Additional bedrooms offer comfort and privacy for family members or guests.
    </p>
    <p className="text-gray-700 leading-relaxed">
      Outdoor living is equally impressive, with a beautifully landscaped garden, a private pool, and a covered patio area perfect for al fresco dining. This property not only offers a home but a lifestyle, situated in one of the most sought-after neighborhoods with easy access to premier shopping, dining, and cultural attractions.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <div className="bg-indigo-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Schedule a Private Viewing</h2>
      <p className="text-gray-700 mb-6">
        Experience the grandeur of this exceptional property firsthand. Our luxury real estate specialists are available to arrange a private viewing at your convenience.
      </p>
      <button className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300 text-lg font-semibold">
        Request Viewing
      </button>
    </div>
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Financing Options</h2>
      <p className="text-gray-700 mb-6">
        Explore tailored financing solutions to make this dream home yours. Our financial advisors are ready to discuss options that suit your unique situation.
      </p>
      <button className="bg-white text-indigo-600 py-3 px-6 rounded-md border-2 border-indigo-600 hover:bg-indigo-50 transition duration-300 text-lg font-semibold">
        Discuss Financing
      </button>
    </div>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-indigo-600 mb-6 text-center">Why Choose This Property</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="text-4xl text-indigo-500 mb-4">🏆</div>
        <h3 className="text-xl font-semibold mb-2">Award-Winning Design</h3>
        <p className="text-gray-600">Recognized for its innovative architecture and interior design excellence.</p>
      </div>
      <div className="text-center">
        <div className="text-4xl text-indigo-500 mb-4">🌿</div>
        <h3 className="text-xl font-semibold mb-2">Eco-Friendly Living</h3>
        <p className="text-gray-600">Sustainable features reduce environmental impact and lower utility costs.</p>
      </div>
      <div className="text-center">
        <div className="text-4xl text-indigo-500 mb-4">🔒</div>
        <h3 className="text-xl font-semibold mb-2">Ultimate Privacy</h3>
        <p className="text-gray-600">Secure gated community with 24/7 surveillance for peace of mind.</p>
      </div>
    </div>
  </div>
</div>

<Footer/>
    </>
  );
};

export default PropertyDetails;
