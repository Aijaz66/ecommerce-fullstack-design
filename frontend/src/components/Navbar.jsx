import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('English, USD');
  const [selectedShipTo, setSelectedShipTo] = useState('Ship to 🇩🇪');

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Left Navigation */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              <Menu className="w-4 h-4" />
              <span>All category</span>
            </button>
            <button className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Hot offers
            </button>
            <button className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Gift boxes
            </button>
            <button className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Projects
            </button>
            <button className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              Menu item
            </button>
            <div className="px-3 py-2 text-gray-700 hover:text-blue-500 transition-colors">
              
            </div>
          </div>

          {/* Right Options */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
              >
                <option>English, USD</option>
                <option>Spanish, EUR</option>
                <option>French, EUR</option>
                <option>German, EUR</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={selectedShipTo}
                onChange={(e) => setSelectedShipTo(e.target.value)}
                className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
              >
                <option>Ship to 🇩🇪</option>
                <option>Ship to 🇺🇸</option>
                <option>Ship to 🇬🇧</option>
                <option>Ship to 🇫🇷</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}