// Place this inside the return(), right after <div className="bg-gray-50 min-h-screen flex flex-col">
import React from 'react'

export default function navbar() {
  return (
    <div>

<nav className="bg-white shadow-md w-full">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      {/* Left - Brand Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-indigo-600 text-2xl font-bold">🔧</span>
        <span className="text-xl font-semibold text-gray-800">Admin Panel</span>
      </div>

      {/* Right - Optional Future Controls */}
      <div className="flex items-center space-x-4">
        {/* Example: Admin name or logout button */}
         <span className="text-gray-700 font-medium">Hello, Admin</span> 
         <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow">
          Logout
        </button>
      </div>
    </div>
  </div>
</nav>









    </div>
  )
}
