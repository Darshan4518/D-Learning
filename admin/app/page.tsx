import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full my-5 mx-3 p-3">
      <div className=" flex gap-3 flex-wrap">
        <div className=" h-[15vh] w-[15vw] flex justify-center flex-col items-center  space-y-1 bg-gradient-to-r from-lime-400 to-lime-500 rounded-md">
          <h3 className=" font-bold text-gray-950">Total Revenue</h3>
          <p className=" font-bold">2400 INR</p>
        </div>
        <div className=" h-[15vh] w-[15vw] flex justify-center flex-col items-center  space-y-1 bg-gradient-to-r from-amber-200 to-yellow-400 rounded-md">
          <h3 className=" font-bold text-gray-950">Total Students</h3>
          <p className=" font-bold">100</p>
        </div>
        <div className="  h-[15vh] w-[15vw] flex justify-center flex-col items-center space-y-1 bg-gradient-to-r from-violet-200 to-pink-200 rounded-md">
          <h3 className=" font-bold text-gray-950">Total Categories</h3>
          <p className=" font-bold">14</p>
        </div>
        <div className="  h-[15vh] w-[15vw] flex justify-center flex-col items-center space-y-1 bg-gradient-to-r from-teal-200 to-teal-500 rounded-md">
          <h3 className=" font-bold text-gray-950">Total Courses</h3>
          <p className=" font-bold">24</p>
        </div>
      </div>
    </div>
  );
}
