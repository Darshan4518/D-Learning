import React from "react";
import SpaceImage from "@/assets/teaching-img-shape.png.png";
import teachingImage from "@/assets/teaching-img.png.png";
import Image from "next/image";
import { Button } from "./ui/button";
const BecomeIstituter = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto my-10 flex flex-col-reverse md:flex-row gap-4 justify-between items-center p-3">
        <div>
          <h2 className=" md:text-4xl text-2xl font-bold max-w-md">
            Become An Instructor Today And Start Teaching
          </h2>
          <p className=" max-w-md my-4">
            Instructors from around the world teach millions of students on
            Edmy. We provide the tools and skills to teach what you love. And
            you can also achieve your goal with us.
          </p>
          <div className=" flex flex-wrap md:max-w-sm gap-2 p-3">
            {[
              "Expert instruction",
              "Lifetime Access",
              "Remote Learning",
              "Self Development",
            ].map((item: string) => (
              <Button
                key={item}
                className="bg-gradient-to-r from-neutral-300 to-stone-400"
              >
                {item}
              </Button>
            ))}
          </div>
          <div className=" w-full flex justify-center md:justify-start mx-auto my-5">
            <Button className=" bg-gradient-to-r from-teal-200 to-teal-500 font-bold ">
              Become An Instructor
            </Button>
          </div>
        </div>
        <div>
          <Image src={SpaceImage} alt="Space Image" />
          <Image src={teachingImage} alt="teaching Image" />
        </div>
      </div>
    </div>
  );
};

export default BecomeIstituter;
