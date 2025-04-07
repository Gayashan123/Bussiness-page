import connectDB from '../../lib/mongodb'; // MongoDB connection
import Category from '../../models/add_category'; // Category model

// Default API handler function
export default async function handler(req, res) {
  await connectDB(); // Connect to the database

  switch (req.method) {
    case 'GET':
      try {
        // Fetch all categories from the database
        const categories = await Category.find({});
        return res.status(200).json(categories);
      } catch (error) {
        return res.status(500).json({ message: 'Error fetching categories', error: error.message });
      }

    case 'POST':
      try {
        const { categoryNo, categoryName } = req.body;

        if (!categoryNo || !categoryName) {
          return res.status(400).json({ message: 'Missing required fields' });
        }

        // Create a new category
        const newCategory = new Category({
          categoryNo,
          categoryName,
        });

        await newCategory.save();
        return res.status(201).json({ message: 'Category created successfully', newCategory });
      } catch (error) {
        return res.status(500).json({ message: 'Error creating category', error: error.message });
      }

    case 'PUT':
      try {
        const { id, categoryNo, categoryName } = req.body;

        if (!id) {
          return res.status(400).json({ message: 'Missing category ID' });
        }

        const updatedCategory = await Category.findByIdAndUpdate(
          id,
          { categoryNo, categoryName },
          { new: true }
        );

        if (!updatedCategory) {
          return res.status(404).json({ message: 'Category not found' });
        }

        return res.status(200).json({ message: 'Category updated', updatedCategory });
      } catch (error) {
        return res.status(500).json({ message: 'Error updating category', error: error.message });
      }

    case 'DELETE':
      try {
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ message: 'Missing ID for deletion' });
        }

        await Category.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Category deleted successfully' });
      } catch (error) {
        return res.status(500).json({ message: 'Error deleting category', error: error.message });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
