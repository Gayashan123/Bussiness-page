import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryNo: { type: Number, required: true, unique: true },
  categoryName: { type: String, required: true },
});

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
