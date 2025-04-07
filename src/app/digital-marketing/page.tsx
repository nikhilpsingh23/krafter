import React from "react";
import { AnimatedBeamDemo } from "./annimated-beam/demo";
import { CompareDemo } from "./code/demo";
import { HeroDemo1 } from "./hero-1/demo";
import {  DisclosureCardGrid } from "./card/demo";
import { MagnetLinesDemo } from "./magnet-line/demo";
import { TabsDemo } from "../about/productTab/demo";
import { Feature108Demo } from "./feacture/demo";
import { BentoGridGalleryDemo } from "./gallery/demo";
import { HeroScrollDemo } from "./scroll-tab/demo";
import { ScrollVelocityDemo } from "./Scroll-velocity/demo";
import { HeroHighlightDemo } from "./hero-heighlight.tsx/demo";
import { SkeletonDemo } from "./skeleton/demo";




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
        <HeroScrollDemo/>
        <ScrollVelocityDemo/>
        <HeroHighlightDemo/>
        <SkeletonDemo/>
    </>
  );
};

export default DigitalMarketing;