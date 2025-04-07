import connectDB from "../../lib/mongodb";  // MongoDB connection
import view_messages from "../../models/view_messages";

// Default API handler function
export default async function handler(req, res) {
  await connectDB();  // Connect to the database

  switch (req.method) {
    case "GET":
      try {
        // Fetch all messages from the database
        const items = await view_messages.find({});
        return res.status(200).json(items);
      } catch (error) {
        return res.status(500).json({ message: "Error fetching messages" });
      }

    case "POST":
      try {
        // Check if the request body is an array and not empty
        if (!Array.isArray(req.body) || req.body.length === 0) {
          return res.status(400).json({ message: "Expected a non-empty array of message data" });
        }

        // Insert the new records without deleting the existing ones
        await view_messages.insertMany(req.body);

        return res.status(201).json({ message: "Messages inserted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error saving messages" });
      }

    case "DELETE":
      try {
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ message: "Missing ID for deletion" });
        }

        await view_messages.findByIdAndDelete(id);
        return res.status(200).json({ message: "Message deleted successfully" });
      } catch (error) {
        return res.status(500).json({ message: "Error deleting messages" });
      }

    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}