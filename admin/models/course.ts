import { tr } from "framer-motion/client";
import mongoose, { Schema } from "mongoose";

interface CourseSchema {
  name: string;
  description: string;
  oldPrice?: number;
  newPrice: number;
  totalStudents?: [Schema.Types.ObjectId];
  author: string;
  overView: string;
  liveClass: boolean;
  duration: number;
  durationUnit: string;
  access: number;
  accessUnit: string;
  category: Schema.Types.ObjectId;
  image: string | File;
}

const courseSchema = new Schema<CourseSchema>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  oldPrice: { type: Number, required: true },
  newPrice: { type: Number, required: true },
  totalStudents: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: { type: String, required: true },
  overView: { type: String, default: "" },
  liveClass: { type: Boolean, default: false },
  duration: { type: Number, default: 0 },
  access: { type: Number, default: 0 },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  image: { type: String, required: true },
  accessUnit: { type: String, default: "months" },
  durationUnit: { type: String, default: "weeks" },
});

export const Course =
  mongoose.models.Course ||
  mongoose.model<CourseSchema>("Course", courseSchema);
