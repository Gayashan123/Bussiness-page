import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ProductForm() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        name: '',
        brandName: '',
        price: '',
        stock: '',
        description: '',
        image: null,
    });
    const [editingProduct, setEditingProduct] = useState(null);

    // Fetch categories
    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch('/api/add_category');
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
        fetchCategories();
    }, []);

    // Fetch products
    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/add_products');
            const data = await res.json();
            setProducts(data.products); // Access the products array correctly
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle image preview
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
            setFormData({ ...formData, image: file });
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission (POST/PUT)
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const url = '/api/add_products';
      const method = editingProduct ? 'PUT' : 'POST';
  
      // Create FormData to send the data, including the image
      const formDataToSend = new FormData();
      formDataToSend.append('category', formData.category);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('brandName', formData.brandName || '');
      formDataToSend.append('price', formData.price);
      formDataToSend.append('stock', formData.stock);
      formDataToSend.append('description', formData.description);
  
      // Make sure the image is appended
      if (formData.image) {
          console.log("Appending image:", formData.image); // Check if the image is properly appended
          formDataToSend.append('image', formData.image);
      } else {
          console.warn('No image to upload');
      }
  
      try {
          const res = await fetch(url, {
              method,
              body: formDataToSend,
          });
  
          const result = await res.json();
  
          if (res.ok) {
              setFormData({
                  category: '',
                  name: '',
                  brandName: '',
                  price: '',
                  stock: '',
                  description: '',
                  image: null,
              });
              setPreviewImage(null);
              setIsFormOpen(false);
              setEditingProduct(null);
              fetchProducts();
          } else {
              console.error('Failed to save product:', result.message);
          }
      } catch (error) {
          console.error('Error saving product:', error);
      }
  };

    // Handle editing a product
    const handleEdit = (product) => {
        setFormData({
            category: product.category,
            name: product.name,
            brandName: product.brandName,
            price: product.price,
            stock: product.stock,
            description: product.description,
            image: null, // Don't pre-fill file input
        });
        setPreviewImage(product.image); // Update preview image
        setIsFormOpen(true);
        setEditingProduct(product);
    };

    // Handle deleting a product
    const handleDelete = async (id) => {
        try {
            const res = await fetch('/api/add_products', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (res.ok) {
                fetchProducts();
            } else {
                console.error('Failed to delete product');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Toggle form visibility
    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    return (
      <div className="min-h-screenbg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-4xl">
        {/* Button to toggle the form */}
        <button
          onClick={toggleForm}
          className="mb-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all hover:scale-105 shadow-lg text-lg"
        >
          {isFormOpen ? 'Close Form' : 'Add New Product'}
        </button>
    
        {/* Form for adding products */}
        {isFormOpen && (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-xl mb-2 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category.categoryName}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
    
            {/* Product Name */}
            <div>
              <label className="block text-gray-700 text-xl mb-2 font-medium">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter product name"
                required
              />
            </div>
    
            {/* Brand Name */}
            <div>
              <label className="block text-gray-700 text-xl mb-2 font-medium">Brand Name (Optional)</label>
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter brand name"
              />
            </div>
    
            {/* Product Price */}
            <div>
              <label className="block text-gray-700 text-xl mb-2 font-medium">Product Price (LKR)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter price"
                required
              />
            </div>
    
            {/* Stock Quantity */}
            <div>
              <label className="block text-gray-700 text-xl mb-2 font-medium">Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter stock quantity"
                required
              />
            </div>
    
            {/* Description */}
            <div>
              <label className="block text-gray-700 text-xl mb-2 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write a short description..."
                rows={4}
                required
              ></textarea>
            </div>
    
            {/* Upload Image */}
            <div>
              <label className="block text-gray-700 text-xl mb-2 font-medium">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-lg"
              />
              {previewImage && (
                <div className="mt-4">
                  <Image
                    src={previewImage}
                    alt="Preview"
                    width={200}
                    height={200}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              )}
            </div>
    
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-all hover:scale-105 shadow-lg mt-6 text-lg"
            >
              {editingProduct ? 'Update Product' : 'Save Product'}
            </button>
          </form>
        )}
    
        {/* Table to display products */}
        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white shadow-lg rounded-xl">
            <thead className="bg-indigo-600 text-white text-left">
              <tr>
                <th className="p-4 text-lg">Category</th>
                <th className="p-4 text-lg">Product Name</th>
                <th className="p-4 text-lg">Brand Name</th>
                <th className="p-4 text-lg">Price (LKR)</th>
                <th className="p-4 text-lg">Stock</th>
                <th className="p-4 text-lg">Description</th>
                <th className="p-4 text-lg">Image</th>
                <th className="p-4 text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id} className="border-b hover:bg-gray-100">
                    <td className="p-4 text-lg">{product.category}</td>
                    <td className="p-4 text-lg">{product.name}</td>
                    <td className="p-4 text-lg">{product.brandName || 'N/A'}</td>
                    <td className="p-4 text-lg">{product.price}</td>
                    <td className="p-4 text-lg">{product.stock}</td>
                    <td className="p-4 text-lg">{product.description}</td>
                    <td className="p-4 text-lg">
                      {product.image && (
                        <Image
                          src={product.image}
                          alt="Product Image"
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      )}
                    </td>
                    <td className="p-4 text-lg">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-blue-500 mr-3 text-lg hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-500 text-lg hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="p-4 text-center text-lg text-gray-500">
                    No products available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
           
    );
}
