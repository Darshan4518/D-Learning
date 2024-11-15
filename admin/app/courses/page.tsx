import CourseForm from "@/components/CourseAddFormModel";
import React from "react";

const page = () => {
  return (
    <div className=" max-w-6xl mx-auto my-2 p-3">
      <div className=" w-full items-center flex  justify-between">
        <h1 className=" md:text-3xl text-2xl font-bold text-gray-950">
          Courses
        </h1>
        <CourseForm />
      </div>
    </div>
  );
};

export default page;
