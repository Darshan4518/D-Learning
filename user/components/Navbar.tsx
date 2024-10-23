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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

type SettingLink = {
  icon: any;
  label: string;
  href: string;
};

const Navbar = () => {
  const isLogined = true;
  const settingsLink: SettingLink[] = [
    {
      label: "My Courses",
      icon: <Book className=" size-4" />,
      href: "/courses",
    },
    {
      label: "My Purchases",
      icon: <IdCard className=" size-4" />,
      href: "/purchase",
    },
    {
      label: "My Whishlist",
      icon: <Heart className=" size-4" />,
      href: "/whishlist",
    },
    {
      label: "Settings",
      icon: <Settings className=" size-4" />,
      href: "/profile",
    },
  ];
  return (
    <header className=" sticky top-0 z-50 bg-white ">
      <nav className=" max-w-7xl mx-auto p-4 flex items-center justify-between">
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/auth">Become An Instututer</Link>
            </li>
          </ul>
        </nav>
        <div className=" flex gap-6 items-center">
          <div className=" relative">
            <ShoppingBagIcon className=" size-7" />
            <span className=" absolute -top-2 -right-1 rounded-full text-white bg-red-600 p-0.5 px-1.5 text-xs font-bold">
              0
            </span>
          </div>
          {!isLogined ? (
            <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400">
              Register
            </Button>
          ) : (
            <HoverCard>
              <HoverCardTrigger>
                <Avatar className=" w-9 h-9 cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent className=" max-w-md">
                <div className=" flex gap-2  items-center border-b border-gray-400">
                  <Avatar className=" w-9 h-9 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className=" text-xs space-y-2 py-1">
                    <p className=" text-base break-words">darshan</p>
                    <p>codewithdatshan45@gmail.com</p>
                  </div>
                </div>
                <div className=" border-b border-gray-400 my-1">
                  {settingsLink?.map(({ href, icon, label }: SettingLink) => (
                    <Link href={href} key={label}>
                      <Button
                        variant={"ghost"}
                        className=" w-full flex items-center gap-2 justify-start"
                      >
                        <span className=" ">{icon}</span>
                        <span className=" text-sm">{label}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
                <Button
                  variant={"ghost"}
                  className=" w-full flex justify-start"
                >
                  <LogOut />
                  <span className="mx-1">Logout</span>
                </Button>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
