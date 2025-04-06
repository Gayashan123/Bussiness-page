'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductForm() {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Add New Product</h2>

        <form className="space-y-6">
          {/* Category */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Category</label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300">
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Accessories</option>
              <option>Other</option>
            </select>
          </div>

          {/* Product Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Product Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Product Price (LKR)</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Stock In and Stock Out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Stock In</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                placeholder="Enter stock in"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700 mb-1">Stock Out</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                placeholder="Enter stock out"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              placeholder="Write a short description..."
              rows={4}
              required
            ></textarea>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            {previewImage && (
              <Image
                src={previewImage}
                alt="Preview"
                width={200}
                height={200}
                className="rounded-xl shadow-lg"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}
