import React from 'react';
import HeroSection from './section/hero-section/demo';
import FilterSection from './section/filter-section/demo';
import StickyCarousel from './section/caraousel/demo';
import VideoBanner from './section/videobanner/demo';
import SpecialSection from './section/special/demo';

const DigitalMarketingPage = () => {
  return (
    <>
      <HeroSection/>
      <SpecialSection/>
      <StickyCarousel/>
      <FilterSection/>
      <VideoBanner/>
    </>
  );
};

export default DigitalMarketingPage;