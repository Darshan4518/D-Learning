import courseImg1 from "@/assets/courseimg.png";
import courseImg2 from "@/assets/courseimg2.png";
import { StaticImageData } from "next/image";

export type Course = {
  image: StaticImageData;
  title: string;
  price: number;
  owner: string;
  description: string;
};

export const courses: Course[] = [
  {
    image: courseImg1,
    title: "Mastering TypeScript",
    price: 49.99,
    owner: "John Doe",
    description:
      "A comprehensive course designed for developers looking to master TypeScript. It covers in-depth features and advanced techniques, ideal for those with a basic understanding of JavaScript or TypeScript.",
  },
  {
    image: courseImg2,
    title: "Advanced TypeScript Techniques",
    price: 59.99,
    owner: "Jane Smith",
    description:
      "This course focuses on advanced TypeScript techniques, such as type inference, generics, and decorators. Suitable for experienced developers aiming to take their TypeScript skills to the next level.",
  },
  {
    image: courseImg1,
    title: "TypeScript for Beginners",
    price: 29.99,
    owner: "Alice Johnson",
    description:
      "A beginner-friendly course that introduces the core concepts of TypeScript, providing a strong foundation for those new to the language.",
  },
  {
    image: courseImg2,
    title: "Building Full-Stack Apps with TypeScript",
    price: 69.99,
    owner: "Bob Brown",
    description:
      "A practical course that teaches how to build full-stack web applications using TypeScript, covering both frontend and backend development with modern tools.",
  },
];
