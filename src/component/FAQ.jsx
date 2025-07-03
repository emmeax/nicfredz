import React from "react";
import {
  FaUserMd,
  FaUsers,
  FaCertificate,
  FaHandsHelping,
} from "react-icons/fa";
import Image from "../assets/image/IMG-20250616-WA0005.png"; // Replace with your actual image path

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaUserMd className="text-2xl text-[#7F00FF]" />,
      title: "Certified Expertise",
      text: "Learn from experienced, licensed professionals who guide you every step of the way.",
    },
    {
      icon: <FaUsers className="text-2xl text-[#7F00FF]" />,
      title: "All Ages Covered",
      text: "Hands-on training for adults, children and infants. Customized to each learner.",
    },
    {
      icon: <FaCertificate className="text-2xl text-[#7F00FF]" />,
      title: "Instant Certification",
      text: "Get certified the same day. No delay, no stress.",
    },
    {
      icon: <FaHandsHelping className="text-2xl text-[#7F00FF]" />,
      title: "Confidence Through Care",
      text: "We ensure personal attention so you leave every session ready to save lives.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] px-6 md:px-14 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="md:text-center font-cabinet text-left text-3xl md:text-4xl font-bold text-[#7F00FF] mb-12">
          WHY CHOOSE NICFREDZ BLS CLASS?
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image Column */}
          <div className="md:order-2">
            <img
              src={Image}
              alt="CPR Training"
              className="w-full h-auto rounded-xl object-cover"
            />
            
          </div>

          {/* Reasons Column */}
          <div className="space-y-5 font-open md:space-y-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-4 flex gap-4 items-start"
              >
                <div className="p-2 bg-[#F4F4FF] rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-cabinet font-semibold">{item.title}</h3>
                  <p className="text-sm font-open font-regular text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
<div className="mt-14 p-6 md:p-8 border border-[#D0B4FF] rounded-xl bg-white">
  {/* Heading and Button */}
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div>
      <h3 className="text-lg md:text-2xl font-cabinet font-semibold text-center md:text-left">
        Join Our Community of Lifesavers
      </h3>
      <p className="text-sm md:text-base font-open font-regular text-gray-700 mt-2 text-center md:text-left max-w-xl">
        Let’s work together to make a difference, one heartbeat at a time. <br className="hidden md:block" />
        Contact us to schedule your CPR Training!
      </p>
    </div>

    {/* Appointment Button */}
    <div className="flex justify-center md:justify-end">
      <button className="bg-[#7F00FF] hover:bg-purple-700 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-lg transition-all w-full md:w-auto">
        BOOK AN APPOINTMENT
      </button>
    </div>
  </div>

  {/* Tags Section */}
  <div className="mt-6 font-open font-light flex flex-wrap justify-center md:block hidden md:justify-start gap-3">
    {["CPR", "BLS", "LifesavingSkills", "HealthCare", "TrainingMatters"].map((tag, index) => (
      <span
        key={index}
        className="bg-[#E4EEFF] text-[#7F00FF] text-sm px-4 py-1.5 rounded-full font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
  <div className="mt-6 flex flex-wrap justify-center md:hidden block md:justify-start gap-3">
    {["HealthCare", "LifesavingSkills", "TrainingMatters", "BLS", "CPR"   ].map((tag, index) => (
      <span
        key={index}
        className="bg-[#E4EEFF] text-[#7F00FF] text-sm px-4 py-1.5 rounded-full font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
