import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 text-white">
      <div className="container mx-auto flex items-center justify-between p-5">
        
        {/* Logo */}
        <a href="#home" className="text-4xl font-bold italic ml-10">
          Portfolio
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <FiMenu className="w-8 h-8" />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-7 mr-6">
          <a href="#home" className="text-lg hover:text-gray-500">Home</a>
          <a href="#about" className="text-lg hover:text-gray-500">About</a>
          <a href="#skills" className="text-lg hover:text-gray-500">Skills</a>
          <a href="#projects" className="text-lg hover:text-gray-500">My Projects</a>

          <a
            href="#contact"
            className="border-2 py-2 px-6 rounded-full hover:bg-purple-800"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#5f326c] fixed top-0 right-0 w-[300px] h-screen
          flex flex-col items-center justify-center space-y-8 shadow-lg">
          
          {/* Close button */}
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <FiX className="w-8 h-8" />
          </button>

          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>My Projects</a>

          <a
            href="#contact"
            className="border-2 py-2 px-6 rounded-full hover:bg-purple-800"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
