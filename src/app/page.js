"use client";

import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import AboutPage from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Services from "./pages/services/services";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="container mx-auto relative w-full h-[50vh]">
        {/* Background Image */}
        <Image
          src="/images/user/download (2).jpg" // Ensure the correct image path
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            We provide the best services for you
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-white rounded-full shadow-md transition-all duration-300 hover:bg-green-700">
              More
            </button>

            <button className="px-6 py-3 bg-red-600 text-white rounded-full shadow-md transition-all duration-300 hover:bg-red-700">
              Services
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <AboutPage />
      <Contact />
      <Services />

      <Footer />
    </div>
  );
}
