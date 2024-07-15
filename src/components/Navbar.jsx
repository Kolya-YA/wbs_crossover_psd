import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiHome, FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#">Logo</a>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Our Cycle
          </a>
          <a href="#" className="hover:text-gray-300">
            Shop
          </a>
          <a href="#" className="hover:text-gray-300">
            News
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Login
          </a>
          <a href="#" className="hover:text-gray-300">
            <FiShoppingCart />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FiHome />
          </a>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Our Cycle
          </a>
          <a href="#" className="hover:text-gray-300">
            Shop
          </a>
          <a href="#" className="hover:text-gray-300">
            News
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact Us
          </a>
          <a href="#" className="hover:text-gray-300">
            Login
          </a>
          <a href="#" className="hover:text-gray-300">
            <FiShoppingCart />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FiHome />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
