import Image from "next/image";
import HomePage from "@/components/pages/HomePage";
import NavBar from "@/components/navigation/NavBar";
import HomeStats from "@/components/pages/HomeStats";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage/>
      <HomeStats/>
    </>
  );
}
