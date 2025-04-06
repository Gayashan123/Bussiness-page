import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/navbar'
import Footer from '@/app/components/footer'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      
      {/* Navbar at the top */}
      <Navbar />
   
      {/* Main Content (Flexes between Navbar and Footer) */}
      <div className="flex-grow">
        
        {/* Hero Section */}
        <div className=" relative w-full h-[50vh]">
          {/* Background Image */}
          <Image
            src="/images/user/Shop.jpg" // Ensure the correct image path
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />

          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>

        {/* Products Section */}
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
          {/* Title Section with Enhanced Design */}
          <div className="container mx-auto flex justify-center items-center mb-12">
            <h1 className="w-full rounded-2xl text-5xl font-extrabold text-white py-8 text-center shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
              Products Section
            </h1>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}
