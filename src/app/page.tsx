


import Overlay from "./HomePage/overlay";
import { HeroParallaxDemo } from "./HomePage/heroParllax/demo";
import { StickyScrollRevealDemo } from "./HomePage/scroll/demo";
import { SplineSceneBasic } from "./HomePage/Automation/demo";
import TrustedBy from "./HomePage/trusted";






export default function Home() {
  return (
    <>
      <div className="space-y-24">
        <HeroParallaxDemo/>
        <SplineSceneBasic/>
        <StickyScrollRevealDemo/>
        <TrustedBy/>
       {/* <DharmaERP/>
        
         <HeroSection/> 
        <MobileCarousel/>
        <FeatureCards/>
        <VerticalMenu/>
        <ImageSection/> */}
        <Overlay/>
      </div>
    </>
  );
}
