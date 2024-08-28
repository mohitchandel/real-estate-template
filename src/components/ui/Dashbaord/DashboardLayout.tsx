// components/DashboardLayout.tsx
import React from 'react';
import Image from 'next/image';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-4 font-bold text-xl">Dashboard</div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="py-2"><a href="#" className="hover:text-indigo-300">Properties</a></li>
            <li className="py-2"><a href="#" className="hover:text-indigo-300">Tasks</a></li>
            <li className="py-2"><a href="#" className="hover:text-indigo-300">Calendar</a></li>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-900">Property Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Image src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
              <span className="font-medium">John Doe</span>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
