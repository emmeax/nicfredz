import React from 'react';
import AboutImage from '../assets/image/IMG-20250616-WA0006.png';

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-0 pb-16 px-0 md:px-16">
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left - Image */}
        <div className="w-full">
          <img
            src={AboutImage}
            alt="Dr. Ikponmwen and class"
            className="w-full h-auto object-cover shadow-md"
          />
        </div>

        {/* Right - Text */}
        <div className="px-6 md:px-0">
          <h2 className="text-2xl md:text-4xl md:text-left text-center font-cabinet font-bold text-black mb-4">
            About Dr. Ikponmwen O.
          </h2>
          <p className="text-gray-800 mb-4 text-xl">
            Hello! I am Oluwaseun Ikponmwen, the founder of NICFREDZ BLS CLASS. As a dedicated CPR instructor,
            I'm passionate about empowering healthcare professionals with skills and confidence to save lives.
            With a focus on hands-on training and same-day certification, I strive to make a difference in my
            community, one heartbeat at a time.
          </p>
          <p className="text-gray-800 mb-6">
            My goal is to provide top-notch training that meets the highest standards, so you can focus on what
            matters most – delivering exceptional patient care. Let’s work together to make a lifesaving impact!
          </p>
          <div className="flex md:justify-start justify-center">
            <button className="bg-[#7D00E3] text-white font-semibold py-4 px-6 rounded hover:bg-purple-600 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
