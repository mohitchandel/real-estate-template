"use client";
import React, { useState } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "@/components/ui/Dashbaord/sidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <header className="bg-gradient-to-t from-blue-900 to-blue-400 shadow-md p-4 mb-6 rounded-lg  text-white">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
            <GiHamburgerMenu className="mr-4 text-xl" />
            Property Dashboard
          </h3>{" "}
        </header>
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Total Properties
            </h3>
            <p className="text-2xl font-bold text-indigo-600">1,234</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Revenue
            </h3>
            <p className="text-2xl font-bold text-green-600">$12.5M</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Avg. Value
            </h3>
            <p className="text-2xl font-bold text-blue-600">$425K</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Satisfaction
            </h3>
            <p className="text-2xl font-bold text-yellow-600">94%</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Revenue Trend
            </h3>
            <div className="h-[300px]">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                  datasets: [
                    {
                      label: "Revenue",
                      data: [500, 800, 700, 850, 750, 900],
                      borderColor: "#87ceeb",
                      backgroundColor: "rgba(79, 70, 229, 0.2)",
                      fill: true,
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Quarterly Performance
            </h3>
            <div className="h-[300px]">
              <Bar
                data={{
                  labels: ["Q1", "Q2", "Q3", "Q4"],
                  datasets: [
                    {
                      label: "Sales",
                      data: [1800, 2100, 1950, 2300],
                      backgroundColor: "#10B981",
                    },
                    {
                      label: "Rentals",
                      data: [1200, 1400, 1300, 1600],
                      backgroundColor: "#F59E0B",
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Property Types
            </h3>
            <div className="h-[300px]">
              <Doughnut
                data={{
                  labels: ["Residential", "Commercial", "Industrial"],
                  datasets: [
                    {
                      data: [55, 30, 15],
                      backgroundColor: ["#2f6fab ", "#10B981", "#F59E0B"],
                    },
                  ],
                }}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md ">
            <h3 className="text-xl font-semibold  mb-4">Recent Transactions</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Property</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">123 Main St</td>
                    <td className="px-4 py-2">Residential</td>
                    <td className="px-4 py-2">$450,000</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                        Sold
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">456 Oak Ave</td>
                    <td className="px-4 py-2">Commercial</td>
                    <td className="px-4 py-2">$1,200,000</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">123 Main St</td>
                    <td className="px-4 py-2">Residential</td>
                    <td className="px-4 py-2">$450,000</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                        Sold
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">456 Oak Ave</td>
                    <td className="px-4 py-2">Commercial</td>
                    <td className="px-4 py-2">$1,200,000</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">123 Main St</td>
                    <td className="px-4 py-2">Residential</td>
                    <td className="px-4 py-2">$450,000</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                        Sold
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">456 Oak Ave</td>
                    <td className="px-4 py-2">Commercial</td>
                    <td className="px-4 py-2">$1,200,000</td>
                    <td className="px-4 py-2">
                      <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
