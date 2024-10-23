"use client";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Profile = () => {
  const handleFileUpload = (files: File[]) => {
    console.log(files);
  };
  return (
    <div className=" max-w-5xl mt-10 mx-auto">
      <h1 className=" md:text-3xl text-2xl my-4 font-bold">
        Profile & Setting
      </h1>
      <form className=" space-y-6 my-6">
        <Input
          placeholder="Enter Name"
          required
          className="h-12 w-[100%] bg-[#F2F0EF]"
        />
        <Input
          placeholder="Last Name"
          required
          className="h-12 w-[100%] bg-[#F2F0EF] "
        />
        <Input
          placeholder="Enter Email"
          type="email"
          required
          className="h-12 w-[100%] bg-[#F2F0EF]"
        />
        <Input
          placeholder="Enter Password"
          type="password"
          required
          className="h-12 w-[100%] bg-[#F2F0EF]"
        />
        <div>
          <textarea
            name=""
            id=""
            className=" w-full bg-[#F2F0EF] p-2 "
            rows={8}
            placeholder="bio "
          ></textarea>
          <p>
            Your biography should have at least 50 characters, links and coupon
            codes are not permitted.
          </p>
        </div>
        <div className=" my-3">
          <Select>
            <SelectTrigger className="max-w-[280px] bg-[#F2F0EF] ">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="my-2">
          <FileUpload onChange={handleFileUpload} />
        </div>
        <Button className="bg-gradient-to-r from-blue-300 to-blue-500 font-bold h-12  my-5 px-10">
          save
        </Button>
      </form>
    </div>
  );
};

export default Profile;
