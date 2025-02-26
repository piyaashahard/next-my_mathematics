import mongoose from "mongoose";
import connectDB from "@/lib/db";
import User from "@/models/User";
import nextConnect from "next-connect";

connectDB();

const handler = nextConnect();

handler.get(async (req, res) => {
  try {
    const users = await User.find({}, { _id: 1, image: 1, name: 1 });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

export default handler;
