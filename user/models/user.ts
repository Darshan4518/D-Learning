import mongoose, { Schema } from "mongoose";

export interface userI {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  bio?: string;
  imageUrl?: string;
  gender?: string;
}

const userSchema = new Schema<userI>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  imageUrl: { type: String },
  gender: { type: String, enum: ["male", "female", "other"] },
});

export const User =
  mongoose.models.User || mongoose.model<userI>("User", userSchema);
