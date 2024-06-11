"use client"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex md:hidden">
      <div className="flex items-center mr-4">
        {!isOpen ? (
          <FaBars className="text-white text-2xl cursor-pointer" onClick={openMenu} />
        ) : (
          <FaTimes className="text-white text-2xl cursor-pointer" onClick={closeMenu} />
        )}
      </div>
      {isOpen && (
        <div className="z-20 top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-75 flex flex-col justify-center items-center space-y-6 pl-4 pr-4 fixed">
          <button
            className="text-white text-xl cursor-pointer hover:bg-yellow-400 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Home
          </button>
          <button
            className="text-white text-xl cursor-pointer hover:bg-yellow-400 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            About
          </button>
          <button
            className="text-white text-xl cursor-pointer hover:bg-yellow-400 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Skills
          </button>
          <button
            className="text-white text-xl cursor-pointer hover:bg-yellow-400 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Projects
          </button>
          <button
            className="text-white text-xl cursor-pointer hover:bg-yellow-400 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Experience
          </button>
          <button
            className="text-white text-xl cursor-pointer hover:bg-yellow-400 px-4 py-2 rounded"
            onClick={closeMenu}
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

