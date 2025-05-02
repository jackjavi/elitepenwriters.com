import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    message: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
