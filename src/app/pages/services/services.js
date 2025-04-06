'use client';

import React from 'react';
import Image from 'next/image';
import Import from './../../../../public/images/user/import.jpg';
import Export from './../../../../public/images/user/export.jpg';
import Download from './../../../../public/images/user/download (2).jpg';

function Services() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-16 px-6">
      {/* Header Section */}
      <div className="container mx-auto relative w-full flex justify-center items-center mb-12">
        <h1 className="w-full rounded-2xl text-5xl font-extrabold text-white py-8 text-center shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
          Services
        </h1>
      </div>


      {/* Services Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: 'Import',
            image: Import,
            description:
              'We provide seamless import services ensuring quality and compliance with international standards.',
          },
          {
            title: 'Export',
            image: Export,
            description:
              'Our export services help businesses expand globally with efficiency and reliability.',
          },
          {
            title: 'Repair',
            image: Download,
            description:
              'Professional repair solutions for all your needs with high-quality service and expertise.',
          },
        ].map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={service.image}
              width={250}
              height={250}
              className="object-cover w-full h-52 rounded-xl mb-4"
              alt={service.title}
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h2>
            <p className="text-gray-600 text-center px-3 mb-4">{service.description}</p>
            <button className="px-5 py-2 text-white bg-indigo-600 rounded-full shadow-md transition-all duration-300 hover:bg-indigo-700">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;