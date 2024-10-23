import { Book, CheckSquare, Home, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className=" max-w-sm">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-4 mt-3">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Home className="h-5 w-5" />
          Dashboard
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <User className="h-5 w-5" /> Students
        </Link>
        <Link
          href="/categories"
          className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        >
          <CheckSquare className="h-5 w-5" /> Category
        </Link>
        <Link
          href="/courses"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Book className="h-5 w-5" /> Courses
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
