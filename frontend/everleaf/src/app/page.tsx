import Image from "next/image";
import HomePage from "@/components/pages/HomePage";
import NavBar from "@/components/navigation/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage/>
    </>
  );
}
