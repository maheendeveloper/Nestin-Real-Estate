import React, { useState } from 'react';
import logo from '../assets/logo-design.png';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    {
      name: 'Buy',
      path: '/buy',
      subItems: ['Homes for Sale', 'Open Houses', 'New Listings']
    },
    {
      name: 'Rent',
      path: '/rent',
      subItems: ['Apartments for Rent', 'Houses for Rent', 'All Rentals']
    },
    {
      name: 'Sell',
      path: '/sell',
      subItems: ['Sell Your Home', 'Home Value Estimator']
    },
    {
      name: 'Get a mortgage',
      path: '/getamortage',
      subItems: ['Mortgage Rates', 'Affordability Calculator']
    },
    {
      name: 'Find an Agent',
      path: '/findanagent',
      subItems: ['Real Estate Agents', 'Mortgage Brokers']
    },
    {
      name: 'Manage Rentals',
      path: '/managerentals',
      subItems: ['List a Rental', 'Tenant Screening']
    },
    {
      name: 'Advertise',
      path: '/advertise',
      subItems: ['Advertising Solutions']
    },
    {
      name: 'Help',
      path: '/help',
      subItems: ['Support Center', 'Contact Us']
    }
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(null);

  const toggleDropdown = (item) => {
    setActiveDropDown(activeDropDown === item ? null : item);
  };

  const firstHalf = navItems.slice(0, 5);
  const secondHalf = navItems.slice(5);

  return (
    <div>
      <nav className="flex justify-between items-center p-4 shadow-sm relative">
        <div className="lg:hidden flex justify-between items-center w-full">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
          <img src={logo} alt="logo" className="h-6" />
          <a href="/" className="font-medium hover:text-blue-600">Sign In</a>
        </div>

        <div className="hidden lg:flex justify-between items-center w-full py-1.5 max-w-screen-xl mx-auto">
          <div className="flex gap-6 items-center">
            {firstHalf.map((item) => (
              <div key={item.name} className="relative group">
                <Link to={item.path} className="hover:text-blue-600 cursor-pointer xl:text-lg">{item.name}</Link>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded py-2 mt-1 w-48 z-50">
                  {item.subItems.map((sub, i) => (
                    <a key={i} href="/" className="block px-4 py-2 hover:bg-gray-100">{sub}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-10">
            <img src={logo} alt="logo" className="h-6 cursor-pointer xl:h-9" />
          </div>
          <div className="flex gap-6 items-center">
            {secondHalf.map((item) => (
              <div key={item.name} className="relative group">
                <Link to={item.path} className="hover:text-blue-600 cursor-pointer xl:text-lg">{item.name}</Link>
                <div className="absolute hidden group-hover:block bg-white shadow-md rounded py-2 mt-1 w-48 z-50">
                  {item.subItems.map((sub, i) => (
                    <a key={i} href="/" className="block px-4 py-2 hover:bg-gray-100">{sub}</a>
                  ))}
                </div>
              </div>
            ))}
            <a href="/" className="hover:text-blue-600 xl:text-lg">Sign In</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-white border-t shadow-sm">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-gray-200 px-4 py-3">
              <div className="flex justify-between items-center">
                <Link
                  to={item.path}
                  className="text-lg hover:text-blue-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
                <button onClick={() => toggleDropdown(item.name)}>
                  <FaChevronDown className="h-4 w-4 ml-2" />
                </button>
              </div>
              {activeDropDown === item.name && (
                <div className="mt-2 ml-4 flex flex-col">
                  {item.subItems.map((sub, i) => (
                    <a key={i} href="#" className="py-1 text-sm hover:underline cursor-pointer hover:text-blue-600">
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
