"use server";
import { User } from "@/models/user";
import { connetDB } from "./db";

export const register = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  try {
    await connetDB();
    const isuserExist = await User.findOne({ email });
    if (isuserExist) throw new Error("user Already Exist");
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
