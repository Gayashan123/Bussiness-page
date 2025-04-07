'use client';

import React, { useState, useEffect } from 'react';

export default function AddCategoryForm() {
  const [categoryNo, setCategoryNo] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/add_category');
      const data = await res.json();
      if (res.ok) {
        setCategories(data);
      } else {
        setCategories([]);
        setError('Failed to load categories.');
      }
    } catch (err) {
      setError('An error occurred while fetching categories.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/add_category', {
        method: editingCategory ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: editingCategory?._id,
          categoryNo,
          categoryName,
        }),
      });
      if (res.ok) {
        setCategoryNo('');
        setCategoryName('');
        setEditingCategory(null);
        fetchCategories();
      } else {
        setError(editingCategory ? 'Failed to update category' : 'Failed to add category');
      }
    } catch (err) {
      setError(editingCategory ? 'An error occurred while updating the category.' : 'An error occurred while adding the category.');
    }
  };

  const handleEdit = (category) => {
    setCategoryNo(category.categoryNo);
    setCategoryName(category.categoryName);
    setEditingCategory(category);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch('/api/add_category', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        fetchCategories();
      } else {
        setError('Failed to delete category');
      }
    } catch (err) {
      setError('An error occurred while deleting the category.');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">{editingCategory ? 'Edit Category' : 'Add New Category'}</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Category No</label>
            <input
              type="number"
              value={categoryNo}
              onChange={(e) => setCategoryNo(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              placeholder="Enter category number"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Category Name</label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
              placeholder="Enter category name"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            {editingCategory ? 'Update Category' : 'Save Category'}
          </button>
        </form>
        
        {/* Categories Grid Display */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Categories List</h3>
          {isLoading ? (
            <p>Loading categories...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <div key={category._id} className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
                    <h4 className="text-lg font-semibold text-gray-800">{category.categoryName}</h4>
                    <p className="text-gray-600">Category No: {category.categoryNo}</p>
                    <div className="mt-4 flex justify-between">
                      <button 
                        onClick={() => handleEdit(category)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(category._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-3">No categories found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
