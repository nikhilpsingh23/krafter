import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import HeroSection from "./HomePage/hero";
import FeatureCards from "./HomePage/card";
import VerticalMenu from "./HomePage/vertical-menu";
import DharmaERP from "./HomePage/dharma-erp";
import { ImageSection } from "./HomePage/img";
import Overlay from "./HomePage/overlay";

export default function Home() {
  return (
    
    <>
    <HeroSection/>
    <FeatureCards/>
    <VerticalMenu/>
    <DharmaERP/>
    <ImageSection/>
    <Overlay/>
    </>
  );
}
