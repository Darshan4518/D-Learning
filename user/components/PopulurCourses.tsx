import { Course, courses } from "@/lib/course";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const PopulurCourses = () => {
  return (
    <div className=" max-w-7xl mx-auto my-10">
      <div>
        <h3 className=" text-base text-green-500 font-bold mt-3 text-center">
          Populur Courses
        </h3>
        <div className=" flex flex-col items-center my-3 ">
          <h2 className=" text-4xl font-bold text-center">
            Expand Your Carrer Opertunitity
          </h2>
          <h2 className=" text-4xl font-bold ">With Our Courses</h2>
        </div>
      </div>
      <div className=" flex flex-wrap gap-3">
        {courses.map((course: Course, ind: number) => (
          <div key={ind} className="">
            <Image
              src={course.image}
              width={300}
              height={300}
              alt={course.title}
              className=" w-full object-cover rounded-md"
            />
            <h3 className=" font-bold text-gray-900 text-base text-center break-words line-clamp-1 py-2">
              {course.title}
            </h3>
            <div className=" flex gap-2 items-center p-2">
              <Avatar className=" w-8 h-8 my-2">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4>By Darshan</h4>
            </div>
            <h3 className=" text-blue-500 text-base font-bold px-2">$22.00</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulurCourses;
