

import FeatureCards from "./HomePage/card";
import VerticalMenu from "./HomePage/vertical-menu";
import DharmaERP from "./HomePage/dharma-erp";
import { ImageSection } from "./HomePage/img";
import Overlay from "./HomePage/overlay";
import { HeroParallaxDemo } from "./HomePage/heroParllax/demo";
import { StickyScrollRevealDemo } from "./HomePage/scroll/demo";
import MobileCarousel from "./HomePage/mobileCaraousel";
import { SplineSceneBasic } from "./HomePage/Automation/demo";






export default function Home() {
  return (
    <>
      <div className="space-y-24">
        <HeroParallaxDemo/>
        <SplineSceneBasic/>
        <StickyScrollRevealDemo/>
        <DharmaERP/>
        
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
