


import Overlay from "./HomePage/overlay";
import { HeroParallaxDemo } from "./HomePage/heroParllax/demo";
import { StickyScrollRevealDemo } from "./HomePage/scroll/demo";
import { SplineSceneBasic } from "./HomePage/Automation/demo";
import TrustedBy from "./HomePage/trusted";
import FooterNav from "@/components/Footer/FooterNav";






export default function Home() {
  return (
    <>
      <div className="space-y-20 pb-0 bg-[#f2f3f4]">
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
        <div className="-mb-24">
          <FooterNav/>
        </div>
      </div>
    </>
  );
}
