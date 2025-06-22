import React from 'react';
import RightPics from '../assets/image/IMG-20250616-WA0005.png';
import caseMedical from '../assets/image/Vector (3).png';
import HeartPulse from '../assets/image/Vector (4).png';
import Stethoscope from '../assets/image/Vector (5).png';

const CPRTrainingSection = () => {
  return (
    <section className="font-cabinet font-bold w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* ====== Mobile Layout (h2 → Image → Text → Icons) ====== */}
        <div className="md:hidden">
          {/* Heading First */}
<h1 className="text-2xl md:text-4xl text-center font-bold  mb-5 ">
   CERTIFIED  CPR  TRAINING
</h1>

          {/* Image Second */}
          <div className="-mx-6 mb-8">
            <img
              src={RightPics}
              alt="CPR Training Session"
              className="w-full h-auto object-cover shadow-md"
            />
          </div>

          {/* Paragraph Text */}
          <div className="mb-6">
            {/* <p className="text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p> */}
            <p className="text-gray-800 mb-2">
              We offer certified, hands-on CPR, AED, and Basic Life Support training tailored for healthcare
              professionals and first responders. Our sessions blend essential techniques with real-life scenarios,
              preparing you to act quickly and confidently in emergencies.
            </p>
            <p className="text-gray-800 mb-10">
              We cover care for adults, children, and infants, with flexible training formats and same-day
              certification. Whether you're new or renewing, you’ll gain practical skills and the mindset to respond
              with clarity. At <span className="font-semibold">NICFREDZ BLS CLASS</span>, we don’t just teach
              procedures, we help you become a trusted lifesaver in your community.
            </p>
          </div>

          {/* Icons Row */}
          <div className="flex justify-between bg-white shadow-lg rounded-xl p-6 items-start gap-4">
            <div className="flex flex-col items-center text-center">
              <img src={caseMedical} alt="Emergency Training" className="w-10 mb-2" />
              <p className="font-semibold text-sm">Emergency Training</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={HeartPulse} alt="Lifesaving Skills" className="w-10 mb-2" />
              <p className="font-semibold text-sm">Lifesaving Skills</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={Stethoscope} alt="CPR Certification" className="w-10 mb-2" />
              <p className="font-semibold text-sm">CPR Certification</p>
            </div>
          </div>
        </div>

        {/* ====== Desktop Layout (Text + Image) ====== */}
        <div className="hidden md:grid grid-cols-2 gap-10 items-center relative">
          {/* Text Section */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-2">What We Do</p>
            <h2 className="text-5xl font-bold  mb-6 leading-tight">
              Certified CPR <br /> Training
            </h2>
            <p className="text-gray-800 mb-2">
              We offer certified, hands-on CPR, AED, and Basic Life Support training tailored for healthcare
              professionals and first responders. Our sessions blend essential techniques with real-life scenarios,
              preparing you to act quickly and confidently in emergencies.
            </p>
            <p className="text-gray-800 mb-22">
              We cover care for adults, children, and infants, with flexible training formats and same-day
              certification. Whether you're new or renewing, you’ll gain practical skills and the mindset to respond
              with clarity. At <span className="font-semibold">NICFREDZ BLS CLASS</span>, we don’t just teach
              procedures, we help you become a trusted lifesaver in your community.
            </p>
          </div>

          {/* Image */}
          <div className="relative z-0">
            <img
              src={RightPics}
              alt="CPR Training Session"
              className=" w-full h-auto object-cover shadow-md mt-5"
            />
          </div>
        </div>

        {/* ====== Desktop Icons - Slight Overlap ====== */}
        <div className="hidden md:block">
          <div className="-mt-16 ml-0 max-w-3xl bg-white shadow-lg rounded-xl p-6 grid grid-cols-3 gap-6 z-10 relative">
            <div className="flex flex-col items-center text-center">
              <img src={caseMedical} alt="Emergency Training" className="w-10 mb-2" />
              <p className="font-semibold">Emergency Training</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={HeartPulse} alt="Lifesaving Skills" className="w-10 mb-2" />
              <p className="font-semibold">Lifesaving Skills</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src={Stethoscope} alt="CPR Certification" className="w-10 mb-2 text-[#B46FEC]" />
              <p className="font-semibold">CPR Certification</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CPRTrainingSection;
