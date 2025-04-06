'use client';

import React, { useState } from 'react';

export default function AddCategoryForm() {
  const [categoryNo, setCategoryNo] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to save category here
    console.log('Category No:', categoryNo);
    console.log('Category Name:', categoryName);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Add New Category</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Category No */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Category No</label>
            <input
              type="number"
              value={categoryNo}
              onChange={(e) => setCategoryNo(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              placeholder="Enter category number"
              required
            />
          </div>

          {/* Category Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Category Name</label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              placeholder="Enter category name"
              required
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all hover:scale-105 shadow-lg"
          >
            Save Category
          </button>
        </form>
      </div>
    </div>
  );
}
