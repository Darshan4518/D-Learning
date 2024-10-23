"use server";

import { connectDB } from "@/lib/db";
import { Category } from "@/models/category";

export const createCategory = async (formdata: FormData) => {
  const category = formdata.get("category") as string;
  try {
    await connectDB();
    await Category.create({
      category: category.toLowerCase().trim(),
    });
    return JSON.parse(JSON.stringify(category));
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategory = async () => {
  try {
    await connectDB();
    const categories = await Category.find();
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (id: string) => {
  try {
    await connectDB();
    const categories = await Category.findById(id);
    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (formdata: FormData, id: string) => {
  const category = formdata.get("category") as string;
  try {
    await connectDB();
    await Category.findByIdAndUpdate(id, {
      category: category.toLowerCase().trim(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id: any) => {
  try {
    await connectDB();
    await Category.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
