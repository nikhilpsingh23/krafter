import React from "react";
import { AnimatedBeamDemo } from "./annimated-beam/demo";
import { CompareDemo } from "./code/demo";
import { HeroDemo1 } from "./hero-1/demo";
import {  DisclosureCardGrid } from "./card/demo";
import { MagnetLinesDemo } from "./magnet-line/demo";
import { TabsDemo } from "../about/productTab/demo";
import { Feature108Demo } from "./feacture/demo";
import { BentoGridGalleryDemo } from "./gallery/demo";




const DigitalMarketing = () => {
  return (
    <>
   
        <AnimatedBeamDemo/>
        <TabsDemo/>
        <CompareDemo/>
        <HeroDemo1/>
        <DisclosureCardGrid/>
        <MagnetLinesDemo/>
        <Feature108Demo/>
        <BentoGridGalleryDemo/>
    </>
  );
};

export default DigitalMarketing;