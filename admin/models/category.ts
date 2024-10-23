import mongoose, { Schema } from "mongoose";

interface categoryI {
  category: string;
}

const categorySchema = new Schema<categoryI>({
  category: {
    type: String,
    required: true,
  },
});

export const Category =
  mongoose.models.Category ||
  mongoose.model<categoryI>("Category", categorySchema);
