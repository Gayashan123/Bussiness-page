"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  
  const [successMessage, setSuccessMessage] = useState(false); // State for success message visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = [
      {
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        message: formData.message,
      },
    ];

    try {
      const response = await fetch("/api/view_messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        // Handle successful response
        setSuccessMessage(true); // Show success message
        setTimeout(() => setSuccessMessage(false), 1000); // Hide success message after 1 second

        // Clear form fields
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      } else {
        // Handle error response
        console.log("Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

      {/* Success Message */}
      {successMessage && (
        <div className="w-full bg-green-500 text-white text-center py-2 rounded-xl mb-6">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {/* Contact Form and Details Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20">
        {/* Left Side - Form */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl transition-all hover:shadow-3xl">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">Get In Touch</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-lg"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all h-36 text-lg"
            ></textarea>
            <button
              type="submit"
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
    </div>
  );
}
