import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="uppercase bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      {/* Title Section with Enhanced Design */}
      <div className="container mx-auto relative w-full flex justify-center items-center mb-12">
        <h1 className="w-full rounded-2xl text-5xl font-extrabold text-white py-8 text-center shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
          About Us
        </h1>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* About Us */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-indigo-700">About Us</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We are a passionate team dedicated to making a difference. Our goal is to provide innovative solutions
            that help businesses and individuals thrive in today's fast-paced world.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-500">
          <Image src="/images/user/about.jpg" alt="About Us Image" layout="fill" objectFit="cover" className="rounded-xl" />
        </div>
      </div>

      {/* Vision Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-500">
          <Image src="/images/user/Vision.jpg" alt="Vision Image" layout="fill" objectFit="cover" className="rounded-xl" />
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-purple-700">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To be a global leader in creating impactful solutions that enhance lives and drive progress.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
        {/* Text Content */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-pink-700">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            To empower people and businesses with cutting-edge solutions that drive growth and innovation.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-500">
          <Image src="/images/user/Mission.jpg" alt="Mission Image" layout="fill" objectFit="cover" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}