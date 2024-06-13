"use client";
import React, { useState } from "react";
import { Menu, X, SquarePen,Search } from "lucide-react";
import  Link  from 'next/link'

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue,setSearchValue] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative md:hidden flex">
      <button onClick={toggleMenu} className="text-white focus:outline-none mr-8">
        {isOpen ? <X size={28}  /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-10 right-0 bg-blue-700/90 p-6 pr-10 rounded-lg shadow-lg mt-8">
          
          <ul className="flex flex-col items-center justify-center space-y-2">
            <li className="w-96 ">
              <Link
                href="#hero"
                className="text-white w-full hover:bg-yellow-300  p-4 rounded-lg block text-center font-semibold z-50"
              >
                Home
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="#about"
                className="text-white hover:bg-yellow-300 w-full p-4 rounded-lg block text-center z-50 font-semibold"
              >
               About
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="#skills"
                className="text-white hover:bg-yellow-300 w-full p-4 rounded-lg block text-center z-50 font-semibold"
              >
                Skills
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="#projects"
                className="text-white hover:bg-yellow-300 w-full p-4 rounded-lg block text-center z-50 font-semibold"
              >
                Projects
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="#experience"
                className="text-white hover:bg-yellow-300 w-full p-4 rounded-lg block text-center z-50 font-semibold"
              >
               Experience
              </Link>
            </li>
            <li className="w-96 ">
              <Link
                href="#contact"
                className="text-white hover:bg-yellow-300 w-full p-4 rounded-lg block text-center z-50"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;


