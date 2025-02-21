import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable.");
  }

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
