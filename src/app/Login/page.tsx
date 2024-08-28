"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      router.push("/Dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4 pt-20">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side */}
            <div className="w-full md:w-1/2 bg-blue-100 p-8 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-blue-700 font-bold text-2xl mb-4">Dream Home</div>
              <p className="text-blue-700 mb-6">
                A house is made of bricks and beams. A home is made of hopes and dreams. We&rdquo;ll help you find your home.
              </p>
              <div className="w-full h-64 md:h-auto rounded-lg flex items-center justify-center">
                <img
                  src="/Image/house.jpeg"
                  alt="House Illustration"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            {/* Right Side */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Login</h2>
              <div className="flex flex-col space-y-4 mb-6">
                <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <FaGoogle className="w-5 h-5 mr-2" />
                  Sign up with Google
                </button>
                <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  <FaFacebookF className="w-5 h-5 mr-2" />
                  Sign up with Facebook
                </button>
              </div>
              <div className="relative mb-6">
                <hr className="border-gray-300" />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500 text-sm">
                  or
                </span>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-indigo-900 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 transition duration-300"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;