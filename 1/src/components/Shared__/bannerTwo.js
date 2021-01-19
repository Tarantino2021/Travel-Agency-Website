import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import PagesOverlay from "./pagesOverlay";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function BannerTwo({ header, lineOne, lineTwo, lineTree, img }) {
  //useEffect(() => {
  //  tl.from(".BannerTwo_line span", {
  //    duration: 1.8,
  //    ease: "power4.out",
  //    delay: 4,
  //    skewY: 7,
  //   stagger: {
  //     amount: 0.3,
  //  });
  //}, []);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.55]);

  return (
    <>
      <div className="BannerTwo_page">
        <div className="img_wrapper">
          <motion.img
            style={{ scale: scale }}
            transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
            className="BannerTwo_img"
            src={img}
          />
        </div>

        <div className="BannerTwo_container">
          <div className="BannerTwo__row">
            <h2>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 2.7,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
                className="BannerTwo_h3"
              >
                {header}
              </motion.h3>
              <div className="BannerTwo_line">
                <motion.span
                  initial={{ y: "150%", skewY: 7 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{
                    duration: 4,
                    delay: 3.1,
                    type: "spring",
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }}
                >
                  {lineOne}
                </motion.span>
              </div>
              <div className="BannerTwo_line">
                <motion.span
                  initial={{ y: "155%", skewY: 7 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{
                    duration: 3.8,
                    delay: 3.5,
                    type: "spring",
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }}
                >
                  {lineTwo}
                </motion.span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.3,
                  ease: [0.6, 0.01, -0.05, 0.9],
                  delay: 2.7,
                }}
                className="BannerTwo_btn-row"
              >
                <h4 className="BannerTwo_btn">Scroll Down</h4>
                <HiOutlineArrowNarrowDown className="BannerTwo_btn_arrow" />
              </motion.div>
            </h2>
          </div>
        </div>
        <PagesOverlay />
      </div>
    </>
  );
}

export default BannerTwo;
