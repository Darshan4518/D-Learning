import mongoose from "mongoose";

export const connetDB = async () => {
  try {
    await mongoose.connect(
      (process.env.MONGO_URI as string) ||
        "mongodb+srv://darshan:darshu45@cluster0.b2lddut.mongodb.net/d-learning"
    );
    console.log("database connected");
  } catch (error) {
    console.log("error on database");
    console.log(error);
  }
};
