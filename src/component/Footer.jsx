import React from "react";
import { MdEmail } from "react-icons/md";
import Facebook from "../assets/image/Frame (1).png";
import LinkedinIn from "../assets/image/Frame (3).png";
import x from "../assets/image/Frame (4).png"
import Mail from "../assets/image/Vector (6).png"
import Youtube from "../assets/image/Layer_1.png"

const Footer = () => {
  return (
    <footer className="bg-[#7F00FF] text-white px-6 md:px-14 py-12">
      <div className="md:max-w-7xl max-w-full mx-auto grid md:grid-cols-2 gap-10 md:gap-20">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Desktop version */}
          <div className="hidden md:block space-y-2 ">
            <p className="text-lg leading-relaxed">
              Keep in touch with us, let’s
              <br /> make a difference together:
            </p>
            <div className="flex items-center gap-2 text-white">
              <MdEmail className="text-2xl" />
              <a
                href="mailto:info@nicfredzlic.com"
                className="underline"
              >
                info@nicfredzlic.com
              </a>
            </div>
            <div className="mt-4 flex gap-2">
              <p className="text-lg font-medium mb-2">Follow us:</p>
              <div className="flex items-center gap-4 text-white">
                <a href="#" aria-label="Facebook">
                  <img src={Facebook} className="w-6 h-6" alt="Facebook" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <img src={LinkedinIn} className="w-6 h-6" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className="md:hidden flex flex-col items-center space-y-6 ">
            <p className="text-2xl font-semibold text-center">
              Ready to get started?
            </p>
            <button className=" bg-white text-black font-semibold py-4 px-6  hover:bg-gray-100 transition w-full max-w-[350px]">
              BOOK YOUR FREE CONSULTATION
            </button>
            <div className="flex items-center gap-2 text-2xl">
              <img
               src={Mail}
               className="text-2xl w-8" />
              <a
                href="mailto:info@nicfredzlic.com"
                className="underline"
              >
                info@nicfredzlic.com
              </a>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-xl font-medium">Follow us:</p>
              <a href="#" aria-label="Facebook">
                <img src={Facebook} className="w-6 h-6" alt="Facebook" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={LinkedinIn} className="w-6 h-6" alt="LinkedIn" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={Youtube} className="w-6 h-6" alt="LinkedIn" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={x} className="w-6 h-6" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between md:ml-[42%] ml-0 space-y-6 text-white">
          <div className="md:space-y-4 space-y-0 hidden md:flex flex-col items-start">
            <p className="text-2xl font-semibold">Ready to get started?</p>
            <button className="bg-white text-black font-semibold md:py-3 md:px-6 px-10 rounded-md w-fit hover:bg-gray-100 transition">
              BOOK YOUR FREE CONSULTATION
            </button>
          </div>
          <div className="text-sm mt-10 md:block hidden">
            <p>© NICFREDZ BLS CLASS.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
