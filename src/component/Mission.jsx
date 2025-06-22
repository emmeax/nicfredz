import React from 'react';
// import RightPics from '../assets/image/IMG-20250616-WA0007.png'
import MobileImg from '../assets/image/Image2025.png'

const MissionSection = () => {
  return (
    <section className="w-full flex font-cabinet font-bold flex-col md:flex-row">
      {/* Left Side - Text */}
      <div className="md:bg-gradient-to-b from-[#D29C4C] to-black bg-[#694E26]  text-white md:w-[47%] w-full px-6 md:px-16 py-12 flex items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="text-base leading-relaxed ">
            At <span className="font-semibold">NICFREDZ BLS CLASS</span>, our mission is to raise a new
            standard of emergence preparedness by equipping healthcare professionals with the skills,
            confidence, and clarity needed to respond effectively in life-threatening situations. We believe
            that CPR and Basic Life Support training should go beyond checking boxes, it should empower
            individuals to stay calm under pressure, think critically, and act decisively when every heartbeat
            matters. That’s why we focus on practical, hand-on sessions backed by evidence-based instruction
            and real-world scenarios. Our commitment is to deliver training that is accessible, engaging, and
            tailored to the evolving demands of today’s healthcare landscape.
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
      <div className="md:w-1/2 w-full md:hidden block">
        <img
          src={MobileImg}
          alt="Mission Classroom"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MissionSection;
