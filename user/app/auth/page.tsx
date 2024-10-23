"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import img1 from "@/assets/page-banner-shape-1.svg.png";
import img2 from "@/assets/page-banner-shape-2.svg.png";
import Image from "next/image";
import registerImage from "@/assets/register-img.png.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { userI } from "@/models/user";
import { register } from "@/lib/userServerAction";
const Authentication = () => {
  const [tab, setTab] = useState("register");
  const [formData, setFormData] = useState<userI>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (formdata: FormData) => {
    await register(formdata);
  };

  return (
    <div>
      <div className=" bg-gradient-to-r from-emerald-400 to-cyan-400 p-5 py-20 relative w-full">
        <h1 className=" text-white  md:text-4xl text-2xl  text-center font-bold">
          Athentication
        </h1>
        <div className=" max-w-7xl w-full  bottom-1 xl:flex justify-between absolute  hidden ">
          <Image src={img1} alt="img1" />
          <Image src={img2} alt="img2" className="w-[6vw] h-[10vh] mt-10" />
        </div>
      </div>
      <div className=" my-20 md:px-10 px-5 flex flex-col md:flex-row items-center">
        <div>
          <Image src={registerImage} alt="register" />
        </div>
        <form
          className=" md:w-[50%] w-full"
          action={(FormData) => handleSubmit(FormData)}
        >
          <h1 className=" font-bold md:text-4xl text-2xl my-2 ">
            {tab == "login" ? "Sign in to D-Learning" : "Create your account"}
          </h1>
          <div className=" max-w-4xl border border-gray-100 shadow-md px-5 py-4 rounded-full flex  justify-between items-center my-6">
            <Button
              onClick={() => setTab("register")}
              type="button"
              variant={"ghost"}
              className={`${
                tab == "register"
                  ? "bg-gradient-to-r from-teal-400 to-teal-600 font-bold rounded-full duration-150"
                  : " bg-transparent hover:bg-transparent text-black font-bold text-lg duration-150"
              } px-10 py-5`}
            >
              Register
            </Button>
            <Button
              onClick={() => setTab("login")}
              type="button"
              variant={"ghost"}
              className={`${
                tab == "login"
                  ? "bg-gradient-to-r from-teal-400 to-teal-600 font-bold rounded-full duration-150"
                  : " bg-transparent hover:bg-transparent text-black font-bold text-lg duration-150"
              } px-10 py-5`}
            >
              Login
            </Button>
          </div>
          <div className=" space-y-6">
            {tab === "register" ? (
              <div>
                <Input
                  placeholder="First Name"
                  required
                  name="firstName"
                  onChange={handleChange}
                  className="h-12 w-[100%] bg-[#F2F0EF]"
                />
                <Input
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                  name="lastName"
                  className="h-12 w-[100%] bg-[#F2F0EF] mt-6"
                />
              </div>
            ) : null}
            <Input
              placeholder="Enter Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              className="h-12 w-[100%] bg-[#F2F0EF]"
            />
            <Input
              placeholder="Enter Password"
              type="password"
              required
              name="password"
              onChange={handleChange}
              className="h-12 w-[100%] bg-[#F2F0EF]"
            />
          </div>
          <Button className="bg-gradient-to-r from-blue-300 to-blue-500 font-bold h-12  my-5 px-10 w-full">
            {tab == "login" ? "Login Now" : "Register Now"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
