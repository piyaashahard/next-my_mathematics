import mongoose from "mongoose";
import connectDB from "@/lib/db";
import User from "@/models/User";
import nextConnect from "next-connect";

connectDB();

const handler = nextConnect();

handler.get(async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const user = await User.findById(id).select("image");

    if (!user || !user.image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.setHeader("Content-Type", user.image.contentType);
    res.send(user.image.data);
  } catch (error) {
    console.error("Error fetching user image:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default handler;
