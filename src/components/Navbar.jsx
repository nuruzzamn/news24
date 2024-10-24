// src/components/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <h1 className="text-white text-2xl font-bold ">News App</h1> */}
        <a href="/" className="text-white text-2xl font-bold">
          News App
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="/"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
          </li>

          {/* Categories Dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a className="text-white hover:text-blue-400 transition duration-300">
              Categories
            </a>
            {isDropdownOpen && (
              <ul className="absolute bg-slate-300 text-black rounded-lg shadow-md z-50 py-2 w-36">
                <li className="px-4 py-2 hover:bg-gray-600 hover:text-white">
                  <a href="/technology">Technology</a>
                  {/* <a href="#">Technology</a> */}
                </li>
                <li className="px-4 py-2 hover:bg-gray-600 hover:text-white">
                  <a href="/under-construction">Politics</a>

                  {/* <a href="#">Politics</a> */}
                </li>
                <li className="px-4 py-2 hover:bg-gray-600 hover:text-white">
                  <a href="/under-construction">Sports</a>
                  {/* <a href="#">Sports</a> */}
                </li>
                <li className="px-4 py-2 hover:bg-gray-600 hover:text-white">
                  <a href="/under-construction">Entertainment</a>
                  {/* <a href="#">Entertainment</a> */}
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="/about-us"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="text-white hover:text-blue-400 transition duration-300"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white mt-2 py-2 space-y-2">
          <a href="/" className="block px-4 py-2 hover:bg-gray-600">
            Home
          </a>
          {/* <Link href="#" className="block px-4 py-2 hover:bg-gray-600">
            Categories
          </Link> */}
          <a href="/about-us" className="block px-4 py-2 hover:bg-gray-600">
            About
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-600">
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
