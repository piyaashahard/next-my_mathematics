import connectDB from "../../../lib/db";
import User from "../../../models/User.js";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await User.find({}, { _id: 1, image: 1, name: 1 });
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
