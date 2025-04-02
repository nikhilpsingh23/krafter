import React from "react";

import { LampDemo } from "../HomePage/highlight/demo";
import { TabsDemo } from "./productTab/demo";

import BannerGrid from "./component/banner-grid";
import InfiniteCarousel from "./component/mobile";




const AboutPage = () => {
  return (
    <>
    <div className="space-y-20 pb-0 bg-gray-300">
      <div className="pt-5"> <LampDemo/></div>
   
    <TabsDemo/>
    
    <BannerGrid/>
    <InfiniteCarousel/>
    </div>
    
    </>
  );
};

export default AboutPage;