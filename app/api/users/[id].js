import connectDB from "../../../lib/db";
import User from "../../../models/User.js";

connectDB();

export default async function handler(req, res) {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  switch (req.method) {
    case "GET":
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
          private: user.private,
        });
      } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
      }
      break;

    case "DELETE":
      try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Account deleted successfully" });
      } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Server error", error });
      }
      break;

    case "PATCH":
      try {
        const { private: newPrivacyStatus } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { private: newPrivacyStatus },
          { new: true }
        );
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ private: updatedUser.private });
      } catch (error) {
        console.error("Error updating privacy status:", error);
        res.status(500).json({ message: "Internal server error" });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}
