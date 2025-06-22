import React from 'react';
import AboutImage from '../assets/image/IMG-20250616-WA0006.png'; // replace with actual image path

const About = () => {
  return (
    <section  id="about" className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left - Image */}
        <div>
          <img
            src={AboutImage}
            alt="Dr. Ikponmwen and class"
            className="w-full h-20 w-20 md:h-auto object-cover  shadow-md"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-2xl md:text-4xl text-left font-cabinet font-bold text-[#FC7826] mb-4">
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
            <button className="bg-[#F37022] text-white font-semibold py-3 px-6 rounded hover:bg-[#d95e1e] transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
