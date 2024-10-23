import BecomeIstituter from "@/components/BecomeIstituter";
import ChooseContainer from "@/components/ChooseContainer";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MostViewdCourses from "@/components/MostViewdCoures";
import PopulurCourses from "@/components/PopulurCourses";
import Transform from "@/components/Transform";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopulurCourses />
      <FeaturedCourses />
      <MostViewdCourses />
      <Transform />
      <ChooseContainer />
      <BecomeIstituter />
    </main>
  );
}
