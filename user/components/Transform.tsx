import React from "react";
import { Button } from "./ui/button";
import transformImg from "@/assets/transform-img.png.png";
import Image from "next/image";

const Transform = () => {
  return (
    <div className=" max-w-7xl mx-auto my-10 flex flex-col-reverse gap-3 xl:flex-row justify-between items-center p-3">
      <div>
        <h2 className=" font-bold text-3xl max-w-md text-center md:text-start">
          Transform Your Life Through Online Education
        </h2>

        <p className=" font-bold text-gray-400 text-sm max-w-xl my-3">
          Instructors from around the world teach millions of students on
          D-Learning. We provide the tools and skills to teach what you love.
          And you can also achieve your goal.
        </p>
        <div className=" w-full flex justify-center md:justify-start mx-auto">
          <Button className=" bg-gradient-to-r from-emerald-400 to-cyan-400 ">
            Find out How
          </Button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-teal-100 to-teal-100 rounded-full">
        <Image src={transformImg} alt="transform-img" />
      </div>
    </div>
  );
};

export default Transform;
