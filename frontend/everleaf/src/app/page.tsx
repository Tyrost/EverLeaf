
import OpeningSlide from "@/components/slides/OpeningSlide";
import Image from "next/image";
import NavBar from "@/components/navigation/NavBar";
import MissionSlide from "@/components/slides/MissionSlide";
import FooterSlide from "@/components/slides/FooterSlide";
import StatsSlide from "@/components/slides/StatsSlide";

export default function Home() {
  return (
    <>
      <NavBar hasLinks={true}/>
      <OpeningSlide/>
      <StatsSlide/>
      <MissionSlide/>
      <FooterSlide/>
    </>
  );
}
