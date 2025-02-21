import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  const uri =
    "mongodb+srv://shreyandeyrudra:9HyWSSo9aakYK6fe@cluster0.gpt22.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable.");
  }

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
