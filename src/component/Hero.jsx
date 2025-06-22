import React, { useState } from 'react';
import HeroPics from "../assets/image/HeroPics.png";
import icon from '../assets/image/icon.png';
import MobileStyle from '../assets/image/IMG-20250616-WA0005.png';
import { Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative font-cabinet w-full bg-white text-black md:text-white">
      {/* Background Image for Desktop */}
      <div className="hidden md:block absolute inset-0">
        <img src={HeroPics} alt="Training Class" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-4">
        {/* Logo and Links (left-aligned together with spacing) */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 font-bold text-xl">
            <img src={icon} alt="Logo" className="w-8 h-8 mt-1" />
            <span>MARINA MEDICALS</span>
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
        <button className="hidden md:inline-block px-5 font-bold py-2 bg-[#B46FEC] hover:bg-purple-600 rounded text-white text-sm">
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
        <div className="absolute top-16 right-2 z-20 bg-black/90 text-white p-4 rounded-lg space-y-4 text-center shadow-lg">
          <a href="#about" className="block text-lg hover:text-purple-400" onClick={toggleMenu}>About</a>
          <a href="#services" className="block text-lg hover:text-purple-400" onClick={toggleMenu}>Services</a>
          <a href="#bookings" className="block text-lg hover:text-purple-400" onClick={toggleMenu}>Bookings</a>
          <a href="#contact" className="block text-lg hover:text-purple-400" onClick={toggleMenu}>Contact Us</a>
          <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold" onClick={toggleMenu}>
            BOOK AN APPOINTMENT
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-10 space-y-6">
        {/* Mobile First: Show Image First */}
        <div className="block md:hidden w-full">
          <img src={MobileStyle} alt="Training Class" className="w-full h-auto object-cover rounded" />
        </div>

        {/* Text */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-400 via-amber-700 to-black md:text-white bg-clip-text text-transparent">
          CPR, FIRST AID & AED TRAINING
        </h1>

        <p className="text-lg md:text-xl font-bold text-[#3C3C3C] md:text-white">
          BE READY AND BE TRAINED
        </p>

        <p className="text-sm md:text-base font-bold hidden md:block">
          At NICFREDZ BLS CLASS, we train healthcare professionals with lifesaving CPR, AED, and BLS skills — including same-day certification.
        </p>
        <p className="text-sm md:text-base font-bold md:hidden text-[#3C3C3C]">
          At NICFREDZ BLS CLASS, we train healthcare professionals with lifesaving CPR, AED, and BLS skills with same-day certification.
        </p>

        {/* Button */}
        <button className="mt-4 px-6 py-3 font-bold bg-[#B46FEC] hover:bg-purple-600 rounded text-black">
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
