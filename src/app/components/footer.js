"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white p-10 mt-16 shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-300">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link href="/pages/about-us" className="block hover:text-blue-400">About Us</Link>
            </li>
            <li>
              <Link href="/pages/services" className="block hover:text-blue-400">Services</Link>
            </li>
            <li>
              <Link href="/pages/careers" className="block hover:text-blue-400">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-300">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/pages/contact-us" className="block hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link href="/pages/basic-prices" className="block hover:text-blue-400">About us</Link>
            </li>
            <li>
              <Link href="/pages/basic-rates" className="block hover:text-blue-400">Contact us</Link>
            </li>
            <li>
              <Link href="/pages/activities" className="block hover:text-blue-400">Products</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-300">Newsletter</h3>
          <p className="text-gray-400 text-sm">Stay updated with our latest news and offers. Subscribe to our newsletter!</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-gray-800 border-2 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200">
            Subscribe
          </button>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-300">Follow Us</h3>
          <div className="flex flex-col space-x-6 gap-3" >
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-200">Instagram</a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>© 2025 Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
}
