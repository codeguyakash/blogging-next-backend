import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectedInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/blogs`
    );
    console.log(
      `MongoDB Connected 🥳🥳 DB name :`,
      connectedInstance.connection.name
    );
  } catch (error) {
    console.log(`MongoDB connection Failed 🙁🙁`, error);
    process.exit(1);
  }
};
export default connectDB;
