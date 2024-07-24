import React, { useState } from 'react';
import {useTheme} from '../context/ColorContext';
import DarkLightToggleButton from './DarkLightToggleButton';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {theme, toggleTheme, color, changeColor } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MyWebsite
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
            
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <a href="/" className="text-gray-300 hover:text-white block md:inline-block">Home</a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-white block md:inline-block">About</a>
          </li>
          <li>
            <a href="/services" className="text-gray-300 hover:text-white block md:inline-block">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-300 hover:text-white block md:inline-block">Contact</a>
          </li>
        </ul>
        <DarkLightToggleButton/>
        <input    
  type="color"
  id="colorPicker"
  onChange={(e) => changeColor(e.target.value)}
  value={color}
  className="h-7 w-7  cursor-pointer rounded-full bg-transparent"
/>
      </div>
    </nav>
  );
}

export default Navbar;
