import React from "react";
import Link from "next/link";
import { FaHome, FaChartLine, FaUsers, FaCog, FaList } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-gradient-to-r from-blue-500 to-blue-900 text-white p-4">
      <Link
        href="/"
        className="text-2xl sm:text-3xl font-bold cursor-pointer hover:text-pink-300 transition-colors duration-300"
      >
        Dream<span className="text-pink-300">Home</span>
      </Link>
      <nav className="mt-10">
        <a
          href="/Dashboard"
          className="flex items-center py-2 px-4 text-xl hover:bg-indigo-700 rounded mb-6"
        >
          <FaHome className="mr-3" /> Dashboard
        </a>
        <a
          href="/Dashboard/Detail"
          className="flex items-center py-2 px-4 text-xl hover:bg-indigo-700 rounded mb-6"
        >
          <FaList className="mr-3 text-white" /> Property Detail
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-xl hover:bg-indigo-700 rounded mb-6"
        >
          <FaChartLine className="mr-3" /> Analytics
        </a>

        <a
          href="#"
          className="flex items-center py-2 px-4 text-xl hover:bg-indigo-700 rounded mb-6"
        >
          <FaUsers className="mr-3" /> Clients
        </a>
        <a
          href="#"
          className="flex items-center py-2 px-4 text-xl hover:bg-indigo-700 rounded"
        >
          <FaCog className="mr-3" /> Settings
        </a>
      </nav>
    </aside>
  );
}
