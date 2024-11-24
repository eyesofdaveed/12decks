import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";
import FeaturesSection from "@components/sections/Features";

const HeroSlider = dynamic(() => import("@components/sliders/Hero"), {
  ssr: false,
});
const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});
const ProjectsSlider = dynamic(() => import("@components/sliders/Projects"), {
  ssr: false,
});

const Home1 = () => {
  return (
    <Layouts transparent>
      <>
        <HeroSlider />
        <ServicesSection />
        <AboutSection />
        <CountersSection />
        <ProjectsSlider />
        <FeaturesSection />
        <PartnersSlider />
      </>
    </Layouts>
  );
};
export default Home1;
