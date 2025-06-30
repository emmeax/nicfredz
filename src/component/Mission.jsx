import React from 'react';
import RightPics from '../assets/image/IMG-20250616-WA0007.png';
import MobileImg from '../assets/image/IMG-20250616-WA0009 2.png';

const MissionSection = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row font-bold mt-0">
      {/* Left Side - Text */}
      <div className="bg-[#7D00E3] text-white md:w-[47%] w-full px-6 md:px-16 py-12 flex items-center">
        <div className="max-w-prose">
          <h2 className="text-4xl font-cabinet font-semibold md:text-left text-center mb-6">Our Mission</h2>
          <p
            className="text-base font-cabinet leading-relaxed font-normal"
            style={{ textAlign: 'justify' }}
          >
            At NICFREDZ BLS CLASS, our mission is to raise a new standard of emergence preparedness by equipping healthcare professionals with the skills, confidence, and clarity needed to respond effectively in life-threatening situations. We believe that CPR and Basic Life Support training should go beyond checking boxes, it should empower individuals to stay calm under pressure, think critically, and act decisively when every heartbeat matters. That’s why we focus on practical, hand-on sessions backed by evidence-based instruction and real-world scenarios. Our commitment is to deliver training that is accessible, engaging, and tailored to the evolving demands of today’s healthcare landscape.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-[53%] w-full md:block hidden">
        <img
          src={MobileImg}
          alt="Mission Classroom"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="w-full md:hidden block">
        <img
          src={RightPics}
          alt="Mission Classroom"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MissionSection;
