// models/add_products.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  brandName: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

let Product;

try {
  Product = mongoose.model('Product');
} catch (e) {
  Product = mongoose.model('Product', productSchema);
}

export default Product;
