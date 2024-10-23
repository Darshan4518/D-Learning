import {
  Book,
  BookCopy,
  Heart,
  IdCard,
  LogOut,
  Settings,
  ShoppingBagIcon,
} from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const isLogined = true;

  return (
    <header className=" sticky top-0 z-50 bg-white  ">
      <nav className=" p-4 md:px-10 flex items-center justify-between">
        <div className=" flex items-center gap-4">
          <h1 className=" font-bold flex gap-2">
            <BookCopy className=" fill-yellow-500" /> D-LEARNING
          </h1>
          <Input
            placeholder="Search Courses..."
            className=" w-72 hidden md:block"
          />
        </div>
        <nav className="hidden lg:block">
          <ul className=" flex items-center gap-4">
            <li>
              <Link href="/">Dashboard</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
        <div className=" flex gap-6 items-center">
          {!isLogined ? (
            <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400">
              Register
            </Button>
          ) : (
            <Avatar className=" w-9 h-9 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
