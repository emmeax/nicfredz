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
        <h2 className="text-center text-2xl md:text-4xl font-bold text-[#7F00FF] mb-12">
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
          <div className="space-y-5 md:space-y-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-4 flex gap-4 items-start"
              >
                <div className="p-2 bg-[#F4F4FF] rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-14 p-6 md:p-8 border border-[#D0B4FF] rounded-xl bg-white space-y-5 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold">
            <div className="flex justify-center md:justify-start">
            Join Our Community of Lifesavers
              <button className="bg-[#7F00FF] hover:bg-purple-700 text-white font-semibold text-sm md:text-base px-6 py-1 rounded-md  ml-[50%] transition-all w-[20%]">
                BOOK AN APPOINTMENT
              </button>
            </div>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto md:mx-0 ">
            Let’s work together to make a difference, one heartbeat at a time. Contact us to <br /> schedule your CPR Training!
          </p>
          </h3>
          

          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mt-4">
            {/* Button */}
           

            {/* Tags Section */}
            <div className="w-full flex justify-center md:justify-start">
              <div className="flex flex-wrap justify-center gap-2">
                {["HealthCare", "LifesavingSkills", "TrainingMatters", "BLS", "CPR"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E4EEFF] text-[#4A6EE0] text-sm px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
