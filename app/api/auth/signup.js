// pages/api/auth/signup.js
import connectDB from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Validate request body
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = new User({ name, email, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    // Handle non-POST methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Method not allowed" });
  }
}
