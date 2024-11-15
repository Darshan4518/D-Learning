"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import { PlusIcon } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllCategory } from "@/severActions/categoryAction";
import { Category } from "@/app/categories/page";
import { createCourse } from "@/severActions/courseAction";
import { readFileAsDataUrl } from "@/lib/utils";

const CourseForm = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getAllCategory(),
    staleTime: 300000,
  });

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const image = await readFileAsDataUrl(file);
    setSelectedImage(image);
  };

  const createCourseMution = useMutation({
    mutationFn: async (formdData: FormData) =>
      await createCourse(formdData, selectedImage),
  });

  return (
    <div className="flex items-center justify-center ">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white p-2 rounded-full flex justify-center items-center">
          <PlusIcon />
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="md:max-w-5xl w-full mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg overflow-y-auto">
            <form
              action={(FormdData) => createCourseMution.mutate(FormdData)}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Course Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter course name"
                  required
                  className="w-full"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium"
                >
                  Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Enter course description"
                  required
                  className="w-full"
                />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                {/* Old Price */}
                <div>
                  <label
                    htmlFor="oldPrice"
                    className="block text-sm font-medium"
                  >
                    Old Price
                  </label>
                  <Input
                    type="number"
                    id="oldPrice"
                    name="oldPrice"
                    placeholder="Enter old price"
                    required
                    className="w-full"
                  />
                </div>

                {/* New Price */}
                <div>
                  <label
                    htmlFor="newPrice"
                    className="block text-sm font-medium"
                  >
                    New Price
                  </label>
                  <Input
                    type="number"
                    id="newPrice"
                    name="newPrice"
                    placeholder="Enter new price"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              {/* Author */}
              <div>
                <label htmlFor="author" className="block text-sm font-medium">
                  Author
                </label>
                <Input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="Enter author name"
                  required
                  className="w-full"
                />
              </div>

              {/* Overview */}
              <div>
                <label htmlFor="overView" className="block text-sm font-medium">
                  Overview
                </label>
                <Textarea
                  id="overView"
                  name="overView"
                  placeholder="Enter course overview"
                  className="w-full"
                />
              </div>

              {/* Live Class Switch */}
              <div className="flex items-center space-x-2">
                <Switch id="liveClass" name="liveornot" />
                <label htmlFor="liveClass" className="text-sm">
                  Is this a live class?
                </label>
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium">
                  Duration
                </label>
                <div className="flex items-center gap-3 ">
                  <Input
                    type="number"
                    id="duration"
                    name="duration"
                    placeholder="Enter course duration"
                    className="w-full"
                  />
                  <select
                    name="durationUnit"
                    required
                    className="w-22 p-2 border border-gray-200 rounded-md"
                  >
                    {["days", "weeks", "months", "years"].map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Access */}
              <div>
                <label htmlFor="access" className="block text-sm font-medium">
                  Access
                </label>
                <div className="flex items-center gap-3">
                  <Input
                    type="text"
                    id="access"
                    name="access"
                    placeholder="Enter course access time"
                    className="w-full"
                  />
                  <select
                    name="accessUnit"
                    required
                    className="w-22 p-2 border border-gray-200 rounded-md"
                  >
                    {["days", "weeks", "months", "years"].map((unit) => (
                      <option key={unit} value={unit}>
                        {unit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium">
                  Category
                </label>
                <select
                  name="category"
                  className="w-32 p-2 border border-gray-400 my-1 rounded-md"
                >
                  {categories?.map((category: Category) => (
                    <option value={category._id} key={category._id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input type="file" accept="image/*" onChange={handleImage} />
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Submit Course
                </Button>
              </div>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CourseForm;
