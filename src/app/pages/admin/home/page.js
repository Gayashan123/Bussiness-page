'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/admin/navbar';
import Addcate from '../add-category/addcategory';
import Addpro from '../add-products/addproducts';
import Viewme from '../view-messages/messages';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Back Button */}
      {activeSection !== '' && (
        <div className="flex justify-start p-4">
          <button
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
            onClick={() => setActiveSection('')}
          >
            🔙 Back
          </button>
        </div>
      )}

      {/* Header and Buttons */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          🛠️ Admin Dashboard
        </h1>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <button
            onClick={() => setActiveSection('AddProduct')}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ${activeSection === 'AddProduct' ? 'ring-4 ring-blue-300' : ''}`}
          >
            ➕ Add Product
          </button>

          <button
            onClick={() => setActiveSection('AddCategory')}
            className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ${activeSection === 'AddCategory' ? 'ring-4 ring-green-300' : ''}`}
          >
            🗂️ Add Category
          </button>

          <button
            onClick={() => setActiveSection('ViewMessages')}
            className={`bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ${activeSection === 'ViewMessages' ? 'ring-4 ring-purple-300' : ''}`}
          >
            📬 View Messages
          </button>
        </div>
      </div>

      {/* Section Display */}
      <div className="p-6 md:p-12">
        {activeSection === '' && (
          <div className="text-center text-gray-700 text-xl font-medium">
            Welcome Admin! Select an option to manage your system.
          </div>
        )}

        {activeSection === 'AddProduct' && (
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>
            <Addpro />
          </div>
        )}

        {activeSection === 'AddCategory' && (
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Category</h2>
            <Addcate />
          </div>
        )}

        {activeSection === 'ViewMessages' && (
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Customer Messages</h2>
            <Viewme />
          </div>
        )}
      </div>
    </div>
  );
}
