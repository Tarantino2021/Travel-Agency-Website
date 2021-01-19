import React, { useState } from "react";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";
import { slidesInfo } from "../../utils/data";
import { motion } from "framer-motion";

function SectionTwo() {
  //slider
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % slidesInfo.length);
  };

  return (
    <div className="about_page_slider">
      <div className="about_container_slider">
        <div className="about_slider_head">
          <h3 className="about_slider_headH3">Values</h3>
        </div>
        <div className="about_slider_indic">
          0<span>{index + 1} </span>/ 0<span>{slidesInfo.length}</span>
        </div>
        <div className="about_slider_nav">
          <RightArrow onClick={next} className="about_slider_arrow" />
        </div>
        <div className="about_slider_slides">
          {slidesInfo.map((slide, slideIndex) => (
            <div id={slide.id} className="about_slider_slide">
              <div className="about_slider_slide_outer">
                <div className="about_slider_slide_column">
                  <h2 className="about_slider_slide_columnH2">
                    <div className="about_slider_slide_columnOverlayLine">
                      <motion.div
                        initial={{
                          y: slideIndex === index ? 0 : "150%",
                        }}
                        animate={{
                          y: slideIndex === index ? 0 : "150%",
                        }}
                        transition={{
                          duration: 2,
                          type: "tween",
                          ease: "easeInOut",
                        }}
                        className="about_slider_slide_columnOverlayTextMotion"
                      >
                        {slide.header}
                      </motion.div>
                    </div>
                  </h2>
                </div>
                <div className="about_slider_slide_columnTwo">
                  <p className="about_slider_slide_columnTwoP">
                    <motion.div
                      initial={{
                        opacity: slideIndex === index ? 1 : 0,
                      }}
                      animate={{
                        opacity: slideIndex === index ? 1 : 0,
                      }}
                      transition={{
                        duration: 1.5,
                        delay: 1,
                        type: "spring",
                      }}
                      className="about_slider_slide_columnTwoText"
                    >
                      {slide.text}
                    </motion.div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
