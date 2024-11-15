"use server";
import { readFileAsDataUrl } from "@/lib/utils";
import { Course } from "@/models/course";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRETE,
});

export const createCourse = async (
  formdata: FormData,
  selectedImage: string
) => {
  try {
    const name = formdata.get("name") as string;
    const description = formdata.get("description") as string;
    const oldPrice = formdata.get("oldPrice");
    const newPrice = formdata.get("newPrice");
    const author = formdata.get("author");
    const access = formdata.get("access");
    const accessUnit = formdata.get("accessUnit");
    const duration = formdata.get("duration");
    const durationUnit = formdata.get("durationUnit");
    const category = formdata.get("category");
    const livecclass = formdata.get("liveornot");
    const overView = formdata.get("overView");

    let cloudResponse;
    try {
      if (selectedImage) {
        cloudResponse = (await cloudinary.uploader.upload(selectedImage))
          .secure_url;
      }
    } catch (error) {
      console.log(error);
    }
    await Course.create({
      name,
      description,
      newPrice,
      oldPrice,
      access,
      accessUnit,
      duration,
      overView,
      durationUnit,
      category,
      livecclass,
      author,
      image: cloudResponse,
    });
    revalidatePath("/courses");
  } catch (error) {
    console.log(error);
  }
};
