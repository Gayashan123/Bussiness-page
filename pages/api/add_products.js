import { Formidable } from 'formidable';
import cloudinary from '../../lib/cloudinary';
import connectDB from '../../lib/mongodb';
import Product from '../../models/add_products';

export const config = {
    api: {
        bodyParser: false,
    },
};

const parseForm = (req) => {
    const form = new Formidable({
        multiples: false,
        keepExtensions: true,
    });

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error('Form parsing error:', err);
                reject(new Error('Form parsing error'));
            } else {
                resolve({ fields, files });
            }
        });
    });
};

const getFieldValue = (field) => {
    return Array.isArray(field) ? field[0] : field;
};

export default async function handler(req, res) {
    try {
        await connectDB();

        if (req.method === 'GET') {
            const products = await Product.find().sort({ createdAt: -1 });
            return res.status(200).json({ message: 'Products fetched successfully', products });
        }

        if (req.method === 'POST') {
            const { fields, files } = await parseForm(req);

            const name = getFieldValue(fields.name || '').trim();
            const category = getFieldValue(fields.category || '').trim();
            const price = parseFloat(getFieldValue(fields.price));
            const stock = parseInt(getFieldValue(fields.stock));
            const description = getFieldValue(fields.description || '').trim();
            const brandName = getFieldValue(fields.brandName || '').trim();

            const imageFile = files.image;

            if (!name || !category || !price || !stock || !description || !imageFile) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            let uploadResult;
            try {
                uploadResult = await cloudinary.uploader.upload(imageFile[0].filepath, { folder: 'products' });
                console.log('Upload successful:', uploadResult.secure_url);
            } catch (error) {
                console.error('Upload failed:', error.message);
                return res.status(500).json({ message: 'Error uploading image to Cloudinary', error: error.message });
            }

            const newProduct = new Product({
                name,
                category,
                price,
                stock,
                description,
                image: uploadResult.secure_url,
                brandName,
            });

            let savedProduct;
            try {
                savedProduct = await newProduct.save();
                return res.status(201).json({ message: 'Product created successfully', newProduct: savedProduct });
            } catch (dbError) {
                console.error('Database save error:', dbError.message);
                return res.status(500).json({ message: 'Error saving product to the database', error: dbError.message });
            }
        }

        if (req.method === 'PUT') {
            const { fields, files } = await parseForm(req);
            const id = getFieldValue(fields.id)?.trim();

            if (!id) return res.status(400).json({ message: 'Missing product ID for update' });

            const updatedFields = {
                name: getFieldValue(fields.name || '').trim(),
                category: getFieldValue(fields.category || '').trim(),
                price: parseFloat(getFieldValue(fields.price)),
                stock: parseInt(getFieldValue(fields.stock)),
                description: getFieldValue(fields.description || '').trim(),
                brandName: getFieldValue(fields.brandName || '').trim(),
            };

            if (files.image) {
                let uploadResult;
                try {
                    uploadResult = await cloudinary.uploader.upload(files.image[0].filepath, { folder: 'products' });
                    updatedFields.image = uploadResult.secure_url;
                    console.log('Image updated successfully:', updatedFields.image);
                } catch (cloudinaryError) {
                    console.error('Upload failed:', cloudinaryError.message);
                    return res.status(500).json({ message: 'Error uploading image to Cloudinary', error: cloudinaryError.message });
                }
            }

            let updatedProduct;
            try {
                updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, { new: true });
                return res.status(200).json({ message: 'Product updated successfully', updatedProduct });
            } catch (dbError) {
                console.error('Database update error:', dbError.message);
                return res.status(500).json({ message: 'Error updating product in the database', error: dbError.message });
            }
        }

        if (req.method === 'DELETE') {
            const { id } = JSON.parse(req.body);

            if (!id) return res.status(400).json({ message: 'Product ID is required for deletion' });

            let deletedProduct;
            try {
                deletedProduct = await Product.findByIdAndDelete(id);
                if (!deletedProduct) {
                    return res.status(404).json({ message: 'Product not found' });
                }
                return res.status(200).json({ message: 'Product deleted successfully' });
            } catch (dbError) {
                console.error('Database delete error:', dbError.message);
                return res.status(500).json({ message: 'Error deleting product from the database', error: dbError.message });
            }
        }

        return res.status(405).json({ message: `Method ${req.method} Not Allowed` });

    } catch (error) {
        console.error('Unhandled error:', error);
        res.status(500).json({ message: 'Error processing request', error: error.message });
    }
}