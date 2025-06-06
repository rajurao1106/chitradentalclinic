import React from 'react';
import doctor from "../assets/AboutUs/aboutdoctor.png";

export default function OurAim() {
  return (
    <section className="bg-white py-12 px-4 flex justify-center items-center">
      <div className="max-w-[1200px] w-full flex flex-row-reverse justify-center items-center gap-12">
        {/* Doctor Image */}
        <div className="flex-shrink-0">
          <img
            src={doctor}
            alt="Dr. Chitra Gohil"
            className="w-[30rem] h-[20rem] rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-4xl font-extrabold text-[#007b7f] mb-4">Our Aim</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Dr. Chitra Endocare, we are committed to listening carefully to your concerns and needs. 
            We strive to provide clear explanations, transparent treatment plans, and high-quality care with compassion. 
            Our goal is to support you at every step of your journey toward a healthy, confident smile.
          </p>
        </div>
      </div>
    </section>
  );
}
