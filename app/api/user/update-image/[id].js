import mongoose from "mongoose";
import connectDB from "@/lib/db";
import User from "@/models/User";
import multer from "multer";
import nextConnect from "next-connect";

connectDB();

const upload = multer({ storage: multer.memoryStorage() });

const handler = nextConnect();

handler.use(upload.single("image"));

handler.post(async (req, res) => {
  const { id } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "No image uploaded" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        image: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Image updated successfully" });
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
