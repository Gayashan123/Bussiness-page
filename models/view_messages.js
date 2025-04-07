import mongoose from "mongoose";

const ViewidSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, min: 0 },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }  // Enable timestamps for createdAt and updatedAt
);

export default mongoose.models.ViewidData || mongoose.model("ViewidData", ViewidSchema);
