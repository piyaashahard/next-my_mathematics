import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please provide a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  private: {
    type: Boolean,
    default: false,
  },
  image: {
    data: Buffer, // Store image data as binary
    contentType: String,
  },
});

// Use an existing model if it exists, otherwise create a new model
export default mongoose.models.User || mongoose.model("User", userSchema);
