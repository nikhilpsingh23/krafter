


import Overlay from "./HomePage/overlay";
import { HeroParallaxDemo } from "./HomePage/heroParllax/demo";
import { StickyScrollRevealDemo } from "./HomePage/scroll/demo";
import { SplineSceneBasic } from "./HomePage/Automation/demo";
import TrustedBy from "./HomePage/trusted";
import FooterNav from "@/components/Footer/FooterNav";
//import { LampDemo } from "./HomePage/highlight/demo";
import BannerGrid from "./HomePage/certificate/allBanner";
import { HeroDemo } from "./HomePage/spotlight/demo";







export default function Home() {
  return (
    <>
    <HeroParallaxDemo/>
    <SplineSceneBasic/>
      <div className="space-y-13 pb-0 bg-[#f2f3f4]">
        
        <StickyScrollRevealDemo/>
        {/*<LampDemo/> */}
        <HeroDemo/>
        <Overlay/>
        <BannerGrid/>
        <TrustedBy/>
        
       {/* <DharmaERP/>
        
         <HeroSection/> 
        <MobileCarousel/>
        <FeatureCards/>
        <VerticalMenu/>
        <ImageSection/> */}
        
        <div className="-mb-24">
          <FooterNav/>
        </div>
      </div>
    </>
  );
}
