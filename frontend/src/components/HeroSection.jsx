import React from 'react';
import heroImg from '../assets/hero-banner.png'; 

export default function HeroSection() {
  return (
    <div className="text-gray-700 max-w-7xl mx-auto px-4 py-8   bg-white">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 rounded-lg shadow-sm">

        {/* Left Sidebar */}
        <div className="md:col-span-1 bg-white rounded p-4 space-y-2 text-sm">
          {[
            "Automobiles",
            "Clothes and wear",
            "Home interiors",
            "Computer and tech",
            "Tools, equipments",
            "Sports and outdoor",
            "Animal and pets",
            "Machinery tools",
            "More category"
          ].map((category, idx) => (
            <button
              key={idx}
              className={`block w-full text-left px-3 py-2 rounded 
                 hover:bg-gray-100 
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Center Banner */}
        <div className="md:col-span-3 relative rounded overflow-hidden">
          <img
            src={heroImg}
            alt="Banner"
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute top-1/3 left-8">
            <p className="text-gray-700 text-lg">Latest trending</p>
            <h2 className="text-2xl md:text-4xl font-bold text-black">Electronic items</h2>
            <button className="mt-4 px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-1 space-y-4">
          <div className="bg-blue-100  rounded p-4 text-sm">
            <p className="text-gray-500">Hi, user</p>
            <p className="mb-3 text-gray-700">Let's get started</p>
            <button className="w-full bg-blue-500 text-white py-1.5 rounded hover:bg-blue-600 mb-2">
              Join now
            </button>
            <button className="w-full border border-blue-500 text-blue-500 py-1.5 rounded hover:bg-blue-50">
              Log in
            </button>
          </div>

          <div className="bg-orange-400 text-white h-24 rounded p-4 text-sm">
            <p className="font-semibold mb-1">Get US $10 off</p>
            <p className="text-xs">with a new supplier</p>
          </div>

          <div className="bg-teal-400 text-white h-24 rounded p-4 text-sm">
            <p className="text-xs">Send quotes with</p>
            <p className="font-semibold">supplier preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
}
