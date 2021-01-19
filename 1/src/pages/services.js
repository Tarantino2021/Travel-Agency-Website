import React from "react";
//framer motion
import { motion, useAnimation } from "framer-motion";
//components
import SectionOne from "../components/Services/SectionOne";
import SectionTwo from "../components/Services/SectionTwo";
import SectionThree from "../components/Services/SectionThree";
import BannerTwo from "../components/Shared__/bannerTwo";
import Footer from "../components/Shared__/footer";
import photo4 from "../assets/photo4.jpg";

const Services = () => {
  return (
    <div>
      <BannerTwo
        header="Services"
        lineOne="We offer a tailor-made solution"
        lineTwo="for every travel plan."
        img={photo4}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />

      <Footer path={"/about-us"} />
    </div>
  );
};

export default Services;
