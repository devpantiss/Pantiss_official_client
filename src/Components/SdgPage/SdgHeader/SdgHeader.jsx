import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const SdgHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-white shadow-md border-b border-red-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="https://i.postimg.cc/7hhdCGBj/Untitled-design-2-removebg-preview.png" 
            alt="Logo"
            className="h-16"
          />
          <p className="text-sm font-light">We support the Sustainable Development Goals</p>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-pink-600 font-medium">Home</a>
          {/* <a href="#" className="text-pink-600 font-medium">SDGs at Halftime</a> */}
          {/* <a href="#" className="text-pink-600 font-medium">Bangladesh and SDGs</a> */}
          {/* <a href="#" className="text-pink-600 font-medium">SDGs and PANTISS</a> */}
          {/* <a href="#" className="text-pink-600 font-medium">Methodology</a> */}
          {/* <a href="#" className="text-pink-600 font-medium">Way Forward</a> */}
        </nav>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <IconContext.Provider value={{ color: 'pink', size: '24px' }}>
            <button onClick={toggleNav}>
              {navOpen ? <FaTimes /> : <FaBars />}
            </button>
          </IconContext.Provider>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          navOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-md p-4 space-y-4`}
      >
        <a href="#" className="block text-pink-600 font-medium">Home</a>
        {/* <a href="#" className="block text-pink-600 font-medium">SDGs at Halftime</a> */}
        {/* <a href="#" className="block text-pink-600 font-medium">Bangladesh and SDGs</a> */}
        {/* <a href="#" className="block text-pink-600 font-medium">SDGs and PANTISS</a> */}
        {/* <a href="#" className="block text-pink-600 font-medium">Methodology</a> */}
        {/* <a href="#" className="block text-pink-600 font-medium">Way Forward</a> */}
      </div>
    </header>
  );
};

export default SdgHeader;
