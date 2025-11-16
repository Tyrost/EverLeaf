import Image from "next/image";
import HomeMainSlide from "@/components/slides/HomeMainSlide";
import NavBar from "@/components/navigation/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeMainSlide/>
    </>
  );
}
