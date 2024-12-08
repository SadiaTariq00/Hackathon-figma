"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import {  AiOutlineClose,
    AiOutlineMenu,
    AiOutlineShoppingCart,
  
    AiOutlineSearch,

  } from 'react-icons/ai';

  import { FaRegUserCircle } from "react-icons/fa";
  import { RiArrowDropDownLine } from "react-icons/ri";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    
  
    <div>
      <nav className="relative bg-white text-black w-full z-10 border">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center  text-2xl font-extrabold px-10">SHOP.CO</div>

          {/* Links for Desktop */}
          <div className="hidden md:flex gap-2 text-md font-medium  text-gray-500 items-center relative right-10 top-2">
            <ul className="flex gap-10 relative right-10">
              <li className="transition-colors left-8 relative duration-200 hover:underline">
                <Link href="#shop">Shop    <RiArrowDropDownLine  className='relative left-12 bottom-5'/></Link>
             
              </li>
              <li className="transition-colors duration-200 left-10 relative hover:underline">
                <Link href="#onsale">On Sale</Link>
              </li>
              <li className="transition-colors duration-200 left-12 relative hover:underline">
                <Link href="#newarrivals">New Arrivals</Link>
              </li>
              <li className="transition-colors duration-200 left-14 relative hover:underline">
                <Link href="#brands">Brands</Link>
              </li>
            </ul>
          </div>

          {/* Icons and Search */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearch}
                className="p-1 border bg-gray-200 rounded-full focus:outline-none focus:ring focus:ring-gray-700 pr-64 pl-14 top-2 right-39 relative"
              />
              <AiOutlineSearch
                size={20}
                className=" bottom-5 left-3 relative text-gray-500"
              />
            </div>

            {/* Icons */}
           
            <button className="rounded-lg p-1">
              <AiOutlineShoppingCart size={24} />
            </button>
            
            <button className="rounded-lg p-1">
              <FaRegUserCircle  size={24} />
            </button>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <AiOutlineClose size={30} />
              ) : (
                <AiOutlineMenu size={30} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col items-center gap-6 py-8 bg-gray-800 text-white text-lg font-medium">
            <li>
              <Link
                href="#shop"
                onClick={toggleMenu}
                className="hover:underline transition-colors duration-200"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="#onsale"
                onClick={toggleMenu}
                className="hover:underline transition-colors duration-200"
              >
           On Sale
              </Link>
            </li>
            <li>
              <Link
                href="#newarrivals"
                onClick={toggleMenu}
                className="hover:underline transition-colors duration-200"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="#brands"
                onClick={toggleMenu}
                className="hover:underline transition-colors duration-200"
              >
               Brands
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

         