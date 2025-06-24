import React from "react";
import contactBg from "../assets/image/IMG-20250616-WA0007 2.png";

const Contact = () => {
  return (
<section className=" font-cabinet relative w-full bg-[#7D00E3] text-white px-6 pt-12 pb-6 md:pt-24 md:pb-12">
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-[#7D00E3]/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6 text-white md:ml-0 ml-5">
          <h2 className="text-3xl md:text-5xl font-bold">CONTACT US</h2>
          <p className="text-md leading-relaxed font-light">
            <span className="font-semibold text-xl text-white">
              Ready to take the first step toward becoming a lifesaver?
            </span>{" "}
            Whether you have questions, want to schedule a class, or simply
            need guidance we're here to help.
          </p>
          {/* Desktop Image */}
          <img
            src={contactBg}
            alt="CPR class"
            className="rounded-lg shadow-lg hidden md:block"
          />
        </div>

        {/* Right Contact Form */}
        <form className=" p-4  text-black space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-10 rounded-md bg-gray-100 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2  rounded-lg md:bg-black bg-white md:text-white text-[#941EF3] font-semibold text-lg hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
