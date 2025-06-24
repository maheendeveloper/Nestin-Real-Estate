import React, { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo-design.png";
import helpposter from "../assets/help-poster.jpg";

const HelpComponent = () => {
  const categories = [
    "Landlords",
    "Agents",
    "Lenders",
    "Nestin Home Loans",
    "Renters",
    "Homebuyers",
    "Homeowners",
    "Home Sellers",
    "Privacy",
    "Mobile Apps",
    "Nestin Canada",
  ];

  const [showLangs, setShowLangs] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Top bar */}
      <div className="pt-4 pb-3 px-6 md:px-10 lg:px-36 flex justify-between items-center">
        <img className="h-8 lg:h-12" src={logo} alt="Nestin logo" />
        <a
          href="#"
          className="font-semibold text-blue-600 hover:underline hover:text-blue-700 lg:text-lg"
        >
          Sign In
        </a>
      </div>


      <div className="relative w-full h-60 md:h-72 lg:h-80">
        <img className="w-full h-full object-cover" src={helpposter} alt="Help background" />
        <div className="absolute inset-0 flex justify-center items-center px-4">
          <div className="relative w-full max-w-2xl">
            <FaSearch className="absolute top-3.5 left-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 rounded-full shadow-lg text-gray-700 focus:outline-none text-base sm:text-lg"
            />
          </div>
        </div>
      </div>


      <div className="px-6 mt-10 py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="border border-blue-600 rounded-sm py-5 px-6 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>


      <hr className="mt-52 mb-10 text-gray-300" />
      <div className="flex justify-between px-6 md:px-32 pb-10 relative">
        <a className="text-sm text-gray-700 hover:underline cursor-pointer">Nestin Help Center</a>
        <a className="text-sm text-blue-600 hover:underline cursor-pointer">Privacy Policy</a>

        <div className="relative">
          <button
            onClick={() => setShowLangs(!showLangs)}
            className="text-sm flex items-center gap-2 text-gray-700 hover:underline"
          >
            English (US) <FaChevronDown className="text-xs" />
          </button>
          {showLangs && (
            <div className="absolute right-0 bottom-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-50">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Chinese</div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">French</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelpComponent;
