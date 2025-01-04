import React from 'react';
import { Search, Bell, Settings, MessageCircle, ChevronDown, Layout, Users } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center w-full justify-between px-4 py-3 bg-white text-black shadow-md border-b border-gray-200">
      {/* Left section */}
      <div className="flex mx-2 items-center space-x-10">
        {/* Logo */}
        <div className="text-blue-500 font-bold">
          <Layout size={30} />
        </div>
        
        {/* Search bar */}
        <div className="relative">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 border border-gray-300">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none text-sm ml-2 w-64 text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Center section */}
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 px-3 py-2">
          <span>Demo</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        
        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 px-3 py-2">
          <span>Pages</span>
          <ChevronDown className="h-4 w-4" />
        </button>

        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 px-3 py-2">
          <span>Account</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-[40px] mx-2">
        <button className="text-gray-500 hover:text-black">
          <Users className="h-6 w-6" />
        </button>
        
        <button className="text-gray-500 hover:text-black">
          <MessageCircle className="h-6 w-6" />
        </button>
        
        <button className="text-gray-500 hover:text-black">
          <Settings className="h-6 w-6" />
        </button>

        <div className="relative">
          <button className="text-gray-500 hover:text-black">
            <Bell className="h-6 w-6 -mb-1" />
          </button>
        </div>

        <div className="h-8 w-8 rounded-lg bg-gray-200 overflow-hidden">
          <img
            src="/images/Avatar.jpeg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
