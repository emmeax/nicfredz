import React from "react";
import { FaPhoneAlt, FaInstagram,FaFacebookF} from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { BsHeartPulseFill } from "react-icons/bs";
import Facebook from "../assets/image/Frame (1).png";
import Instagram from "../assets/image/Instagram_logo.png";
// import X from "../assets/image/Frame (4).png";
import MailIcon from "../assets/image/Vector (6).png";
import icon from '../assets/image/icon.png';
// import Youtube from "../assets/image/Layer_1.png";

const Footer = () => {
  return (
    <footer className="bg-[#9100D4] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Logo + Brand above divider */}
        <div className="hidden md:flex items-center gap-2 font-semibold text-white text-sm mb-6">
  <img src={icon} className="text-yellow-300 text-xl mt-2" />
  NICFREDZ BLS CLASS
</div>

        {/* ✅ MOBILE LAYOUT */}
        <div className="md:hidden flex flex-col items-center text-center gap-6">
          <div className="">
            <p className="text-2xl font-semibold mb-3">Ready to get started?</p>
            <button className="bg-white text-black  mb-6 font-semibold px-6 py-4 ">
              BOOK YOUR FREE CONSULTATION
            </button>
             <p className="text-base  ml-10 text-left leading-relaxed">
            44, Glenwood Ave, East-<br />
            Orange NJ 07017 Suite 201.
          </p>

          <div className="flex items-center gap-2  ml-10  text-left text-lg font-bold">
            <FaPhoneAlt />
            862-215-6009
          </div>

          <div className="flex  ml-10 items-center gap-2">
            <img src={MailIcon} className="text-lg" />
            info@nicfredzlic.com
          </div>

          <div className="flex  ml-10 items-center gap-3 mt-3">
            <p>Follow us:</p>
            <img src={Facebook} alt="" className="text-white w-[15%]  rounded-full p-1 text-xl" />
            <img src={Instagram} alt="" className="text-white w-[15%]  rounded-md p-1 text-xl" />
          </div>
          </div>

         
        </div>

        {/* ✅ DESKTOP LAYOUT */}
        <div className="hidden md:grid border-t border-white/30 pt-6 grid-cols-3 gap-10 text-sm">
          {/* Column 1 */}
          <div className="space-y-4">
            <p className="text-white text-base">
              Keep in touch with us, let’s <br />
              make a difference together:
            </p>
            <div className="flex items-center gap-3 text-lg font-bold">
              <FaPhoneAlt />
              862-215-6009
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <p className="text-base">
              44, Glenwood Ave, East-<br />
              Orange NJ 07017 Suite 201.
            </p>
            <div className="flex items-center gap-3">
              <img src={MailIcon} className="text-lg" />
              <span>info@nicfredzlic.com</span>
            </div>
            <div className="flex items-center gap-3">
              <p>Follow us:</p>
              <img src={Facebook} alt="" className="text-white   rounded-full p-1 text-xl" />
            <img src={Instagram} alt="" className="text-white   rounded-md p-1 text-xl" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-end justify-between space-y-6">
            <div>
              <p className="text-xl font-semibold mb-4">Ready to get started?</p>
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg">
                BOOK YOUR FREE CONSULTATION
              </button>
            </div>
            <div className="text-sm text-white/80 mr-[33%]">
              <p className="">© NICFREDZ BLS CLASS.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
