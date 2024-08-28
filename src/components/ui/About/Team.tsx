import React from "react";

export default function Team(){
    return(
        <section className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-4">
          Our Values
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We believe in integrity, innovation, and excellence. These values
          guide us in everything we do, helping us to create value for our
          customers and make a positive impact on the world.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">
         Integrity
            </h3>
            <p className="text-gray-600">
              We act with honesty and transparency, building trust with our
              clients and partners through ethical business practices.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We embrace creativity and challenge the status quo, constantly
              seeking better ways to serve our customers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">
              We are committed to delivering the highest quality in every
              aspect of our business, from products to customer service.
            </p>
          </div>
        </div>
      </section>
    )
}