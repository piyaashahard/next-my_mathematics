import connectDB from "./../../../../lib/db";
import User from "./../../../../models/User";
import multer from "multer";

connectDB();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error uploading image" });
    }

    try {
      const user = await User.findByIdAndUpdate(
        id,
        {
          image: {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          },
        },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Image uploaded successfully" });
    } catch (error) {
      console.error("Error uploading image:", error);
      res.status(500).json({ message: "Error uploading image" });
    }
  });
}
