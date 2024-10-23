import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Courses = () => {
  return (
    <div className=" ">
      <div className=" bg-gradient-to-r from-emerald-400 to-cyan-400 p-5 py-20">
        <h1 className=" text-white  md:text-4xl text-2xl  text-center font-bold">
          Courses
        </h1>
      </div>
      <div className="max-w-7xl mx-auto  my-20 p-4">
        <div className=" flex justify-center">
          <h2 className=" text-center text-2xl md:text-4xl max-w-xl font-bold">
            Expand Your Career Opportunity With Our Courses
          </h2>
        </div>
        <div className=" my-5">
          <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
            <p>We found 13 courses available for you </p>
            <div className=" flex items-center gap-3">
              <Input placeholder="Search Courses.." />
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High To Low</SelectItem>
                  <SelectItem value="low">Low To High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
