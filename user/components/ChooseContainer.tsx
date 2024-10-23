import React from "react";
import choose1 from "@/assets/choose1.png";
import choose2 from "@/assets/choose2.png";
import choose3 from "@/assets/choose3.png";
import choose4 from "@/assets/choose4.png";
import Image, { StaticImageData } from "next/image";
const ChooseContainer = () => {
  return (
    <div className="bg-[#F1EFEE] py-10 px-3">
      <div className="max-w-7xl mx-auto">
        <p className=" text-center my-2 text-blue-400 font-bold text-base">
          Our Feutures
        </p>
        <h2 className=" font-bold md:text-4xl text-2xl text-center">
          Why You Should Choose D-Learning
        </h2>
        <div className=" flex gap-2 flex-col md:flex-row items-center justify-evenly my-5">
          {[choose1, choose2, choose3, choose4].map(
            (item: StaticImageData, ind: number) => (
              <Image src={item} key={ind} alt={""} width={250} height={200} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseContainer;
