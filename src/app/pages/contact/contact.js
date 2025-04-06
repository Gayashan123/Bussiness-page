"use client";

import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="uppercase bg-gradient-to-b from-gray-50 to-gray-200 py-16">
      {/* Title Section */}
      <div className="container mx-auto relative w-full flex justify-center items-center mb-12">
        <h1 className="w-full rounded-2xl text-5xl font-extrabold text-white py-8 text-center shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
          Contact Us
        </h1>
      </div>

      {/* Subtitle Section */}
      <div className="container mx-auto text-center mb-12 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold text-gray-900">Get in Touch</h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-lg">
          We'd love to hear from you! Reach out to us with any questions or feedback.
        </p>
      </div>

      {/* Contact Form and Details Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20">
        {/* Left Side - Form */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl transition-all hover:shadow-3xl">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Get In Touch</h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-lg"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all h-36 text-lg"
            ></textarea>
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <i className="fas fa-paper-plane"></i>
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="bg-white p-8 rounded-2xl shadow-xl flex justify-center items-center transition-all hover:shadow-2xl">
          <Image src="/images/user/login.jpg" alt="Contact Image" width={500} height={400} className="rounded-xl" />
        </div>
      </div>

      {/* Additional Contact Details Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20 mt-12">
        {/* Contact Details */}
        <div className="space-y-8">
          {/* WhatsApp */}
          <div className="flex items-center space-x-3 text-white p-6 bg-gradient-to-r from-white to-gray-100 rounded-full shadow-xl transition-all hover:shadow-2xl">
          <i className="fab fa-whatsapp text-green-500 text-3xl"></i>
            <a
              href="https://wa.me/94752069762"
              className="text-lg font-medium text-black hover:text-green-500 transition-colors"
            >
              WhatsApp: 0752069762
            </a>
          </div>

          {/* Gmail */}
          <div className="flex bg-gradient-to-r from-white to-gray-100 text-white items-center space-x-3 p-6 bg-gray-100  shadow-xl transition-all hover:shadow-2xl rounded-full">
            <i className="fas fa-envelope text-blue-500 text-3xl"></i>
            <a
              href="mailto:gayak3088@gmail.com"
              className="text-lg font-medium text-black hover:text-blue-500 transition-colors"
            >
              Email: gayak3088@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex bg-gradient-to-r from-white to-gray-100 text-white items-center space-x-3 p-6 bg-gray-100 rounded-full shadow-xl transition-all hover:shadow-2xl ">
            <i className="fas fa-map-marker-alt text-red-500 text-3xl"></i>
            <a
              href="https://www.google.com/maps?q=Your+Location"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-black hover:text-red-500 transition-colors"
            >
              View Location on Map
            </a>
          </div>
        </div>

        {/* Location Map (Embedded Google Map) */}
        <div className="w-full h-72 mt-6 rounded-xl shadow-xl transition-all hover:shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.889158904863!2d79.96818461432442!3d6.927078520675056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f8a0d63c47%3A0x7e7f004f84d71fe0!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1678893477163!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
