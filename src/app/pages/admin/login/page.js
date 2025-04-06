'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: "url('/images/user/login.jpg')" }}
    >
      {/* Back to Home Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => router.push('/')}
          className="bg-white bg-opacity-70 hover:bg-opacity-90 text-blue-800 font-semibold px-4 py-2 rounded-xl shadow-md transition-all flex items-center space-x-2 hover:scale-105 text-sm md:text-base"
        >
          <span>🏠</span>
          <span>Back to Home</span>
        </button>
      </div>

      {/* Login Container */}
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        
        {/* Left - Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Admin Login</h2>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-base sm:text-lg"
              required
            />

            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all text-base sm:text-lg"
                required
              />
              <span
                className="absolute right-4 top-3.5 cursor-pointer text-gray-500 text-lg"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? '🙈' : '👁️'}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Login</span>
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/user/login.jpg"
            alt="Admin Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
