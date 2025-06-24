import React, { useState } from 'react';
import HeroPics from "../assets/image/HeroPics.png";
import icon from '../assets/image/icon.png';
import MobileStyle from '../assets/image/IMG-20250616-WA0005.png'
import { Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative font-cabinet w-full bg-white text-black md:text-white">
      {/* Background Image for Desktop */}
      <div className="hidden md:block absolute inset-0">
        <img
          src={HeroPics}
          alt="Training Class"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-4">
       <div className="flex items-center gap-0">
          <div className="flex items-center gap-2 font-bold text-xl">
            <img src={icon} alt="Logo" className="w-8 h-8 mt-1" />
            <span className='md:text-white text-[#7D00E3]'>NICFREDZ BLS CLASS</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-purple-400 transition">Services</a></li>
            <li><a href="#bookings" className="hover:text-purple-400 transition">Bookings</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:inline-block px-5 font-bold py-2 bg-[#7D00E3] hover:bg-purple-600 rounded text-white text-sm">
          BOOK AN APPOINTMENT
        </button>


        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-1 z-20 bg-black/90 text-white p-2 rounded-lg space-y-4 text-center shadow-lg">
          <a href="#about" className="block text-lg font-medium hover:text-purple-400 transition" onClick={toggleMenu}>About</a>
          <a href="#services" className="block text-lg font-medium hover:text-purple-400 transition" onClick={toggleMenu}>Services</a>
          <a href="#bookings" className="block text-lg font-medium hover:text-purple-400 transition" onClick={toggleMenu}>Bookings</a>
          <a href="#contact" className="block text-lg font-medium hover:text-purple-400 transition" onClick={toggleMenu}>Contact Us</a>
          <button className="mt-2 w-full px-4  font-bold py-2 bg-[#7D00E3] hover:bg-purple-600 rounded text-white text-base font-semibold" onClick={toggleMenu}>
            BOOK AN APPOINTMENT
          </button>
        </div>
      )}
        
        <div className="mt-6 w-screen md:hidden">
  <img 
    src={MobileStyle} 
    alt="Training Class" 
    className="w-screen h-auto object-cover" 
  />
</div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[80%] md:h-screen text-center px-6 space-y-6 py-10 md:py-0">
        <h1 className="text-3xl md:text-5xl  font-bold text-3xl md:text-5xl font-bold leading-tight ">
          CPR, FIRST AID & AED TRAINING
        </h1>
        <p className="text-lg md:text-xl font-bold md:text-white text-[#3C3C3C] ">
          BE READY AND BE TRAINED
        </p>
        <p className="text-sm md:text-base font-bold md:block hidden  ">
          At NICFREDZ BLS CLASS, we train healthcare professionals with lifesaving CPR, AED, and BLS skills — including same-day certification.
        </p>
        <p className="text-sm md:text-base md:hidden block font-bold md:text-white text-[#3C3C3C] ">
          At NICFREDZ BLS CLASS, we train healthcare professionals with lifesaving CPR, AED, and BLS skills with same-day certification.
        </p>
        <button className="mt-4 px-6 py-3 font-bold bg-[#7D00E3] hover:bg-purple-600 rounded text-white font-semibold">
          BOOK AN APPOINTMENT
        </button>

        {/* Mobile image below text */}

      </div>
    </div>
  );
};

export default HeroSection;
