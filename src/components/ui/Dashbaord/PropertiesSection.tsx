// components/PropertiesSection.tsx
import React from 'react';

const PropertiesSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-indigo-900 mb-4">Properties</h2>
      {/* Property details table */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Property Name</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Location</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Price</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-200">Sunset Villa</td>
            <td className="py-2 px-4 border-b border-gray-200">Malibu, CA</td>
            <td className="py-2 px-4 border-b border-gray-200">$2,500,000</td>
            <td className="py-2 px-4 border-b border-gray-200">House</td>
          </tr>
          {/* Add more properties here */}
        </tbody>
      </table>
    </div>
  );
};

export default PropertiesSection;
