import React from "react";
//components
import BannerTwo from "../components/Shared__/bannerTwo";
import SectionOne from "../components/Approach/SectionOne";
import SectionTwo from "../components/Approach/SectionTwo";
import SectionThree from "../components/Approach/SectionThree";
import SectionFour from "../components/Approach/SectionFour";
import Footer from "../components/Shared__/footer";
//photo
import photo5 from "../assets/photo5.jpg";

const Approach = () => {
  return (
    <div>
      <BannerTwo
        header="Approach"
        lineOne="We look to transform"
        lineTwo="your journey into a dream."
        img={photo5}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer path={"/services"} />
    </div>
  );
};

export default Approach;
