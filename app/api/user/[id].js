import mongoose from "mongoose";
import connectDB from "@/lib/db";
import User from "@/models/User";

connectDB();

export default async function handler(req, res) {
  const { id } = req.query;

  console.log("Received user ID:", id); // ✅ Debugging

  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error("Invalid user ID format:", id); // ❌ Debugging
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(id).select("_id name email image");

    if (!user) {
      console.error("User not found in database:", id); // ❌ Debugging
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user); // ✅ Debugging
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image || null,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error" });
  }
}
