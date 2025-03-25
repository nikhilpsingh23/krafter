

import FeatureCards from "./HomePage/card";
import VerticalMenu from "./HomePage/vertical-menu";
import DharmaERP from "./HomePage/dharma-erp";
import { ImageSection } from "./HomePage/img";
import Overlay from "./HomePage/overlay";
import { HeroParallaxDemo } from "./HomePage/heroParllax/demo";
import { StickyScrollRevealDemo } from "./HomePage/scroll/demo";
import MobileCarousel from "./HomePage/mobileCaraousel";





export default function Home() {
  return (
    <>
      <div className="space-y-24">
        <HeroParallaxDemo/>
        <DharmaERP/>
        <StickyScrollRevealDemo/>
        {/* <HeroSection/> */}
        <MobileCarousel/>
        <FeatureCards/>
        <VerticalMenu/>
        <ImageSection/>
        <Overlay/>
      </div>
    </>
  );
}
