import React from "react";
import bgImage from "@/assets/banner-img-1.png.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import AvatarCircles from "./ui/avatar-circles";
import book from "@/assets/book.png";
import cup from "@/assets/cup.png";

const HeroSection = () => {
  const avatarUrls: string[] = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-500 min-h-[90vh] flex  items-center relative">
      <div className=" max-w-7xl mx-auto  flex flex-col md:flex-row justify-between ">
        <div className="">
          <Image src={bgImage} alt="bg" width={600} height={600} />
        </div>
        <div className=" flex flex-col items-center">
          <h2 className=" font-bold xl:text-5xl text-3xl text-white">
            Improve Your Online
          </h2>
          <h2 className=" font-bold xl:text-5xl text-3xl text-white my-6">
            Learning Experience
          </h2>
          <h2 className=" font-bold xl:text-5xl text-3xl text-white ">
            Better Instantly
          </h2>
          <div className=" my-5 flex flex-col items-center w-full">
            <p className="  text-gray-100 font-bold text-center">
              We have <span className=" text-yellow-300">1k+</span> Online
              courses & <span className=" text-yellow-300">700+</span> online
              registered students.find your
            </p>
            <p className="  text-gray-100 font-bold ">
              desired courses from them.
            </p>
          </div>
          <div className=" flex items-center my-5">
            <input type="text" className="p-2 md:w-96 w-72 bg-slate-300/60 " />
            <Button className=" bg-yellow-400 text-black text-xs font-bold rounded-none">
              Search Now <Search className=" size-4 mx-1" />
            </Button>
          </div>
          <div className=" flex items-center my-2">
            <AvatarCircles numPeople={700} avatarUrls={avatarUrls} />
            <span className=" text-gray-100 font-bold px-3 text-sm">
              People Already trusted us.
              <Button variant={"link"} className="text-yellow-400 font-bold">
                View Courses
              </Button>
            </span>
          </div>
        </div>
      </div>
      <Image
        src={book}
        alt="Bookicon"
        className=" absolute bottom-5 right-5 hidden lg:block"
      />
      <Image
        src={cup}
        alt="cupicon"
        className=" absolute -bottom-16 left-10 hidden lg:block"
      />
    </div>
  );
};

export default HeroSection;
