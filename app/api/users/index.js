import connectDB from "@lib/db";
import User from "@models/User.js";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
