import React from "react";
//components
import SectionOne from "../components/About/SectionOne";
import SectionTwo from "../components/About/SectionTwo";
import SectionThree from "../components/About/SectionThree";
import BannerTwo from "../components/Shared__/bannerTwo";
import Footer from "../components/Shared__/footer";
import photo6 from "../assets/photo6.jpg";

function About() {
  return (
    <>
      <BannerTwo
        header="About"
        lineOne="We are a team of travelers"
        lineTwo="determined to inspire you"
        img={photo6}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer path={"/"} />
    </>
  );
}

export default About;
