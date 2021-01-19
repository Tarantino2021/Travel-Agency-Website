import React, { useState } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-router-dom";

import { motion, useTransform } from "framer-motion";

function Footer({ path }) {
  const [hover, setHover] = useState(false);

  return (
    <section className="footer">
      <div className="footer_wrapper">
        <div className="footer_text_wrapper">
          <motion.span
            animate={{ y: hover ? "-95%" : 0 }}
            transition={{ duration: 0.1 }}
            className="footer_text_span"
          >
            Next Page
          </motion.span>
          <motion.span
            animate={{ y: hover ? "-95%" : 0 }}
            transition={{ duration: 0.1 }}
            className="footer_text_span"
          >
            Click Here
          </motion.span>
        </div>
        <Link to={path}>
          <motion.div
            onHoverStart={() => setHover(!hover)}
            onHoverEnd={() => setHover(!hover)}
            className="footer_btn_wrapper"
          >
            Next Page
            <HiOutlineArrowNarrowDown className="footer_btn_arrow" />
          </motion.div>
        </Link>
        <svg className="svg_wave" viewBox="0 0 1440 478">
          <path d="M0,2.9c239.7-18.1,477.8,48.7,707.6,165.8c229.3,105.1,440.1,259.7,657,241.2 c28.5-2.7,53.5-8.5,75.4-16.7l0,763.9c-239.7,18.1-477.8-48.7-707.6-165.8C496.9,886.1,286.1,731.5,81.6,750 c-31.1,2.8-58.2,8.6-81.6,17L0,2.9z"></path>
        </svg>
        <svg className="svg_waveTwo" viewBox="0 0 1440 509.9">
          <path d="M932.3,18.1c175.5,17.3,350.3,60.5,507.7,54.7l0,316.1l0,0l0,141l0,141l0,0l0,316.1 c-155.7-5.7-328.6,36.5-502.4,54.2l-5.3,0.5c-310,43.7-607.6,13.2-860.8-145.9c-24.7-15-48.6-31.6-71.5-49.7l0,0l0-316.2l0-316.2 c22.9-18,46.8-34.6,71.5-49.7C324.8,4.9,622.3-25.6,932.3,18.1z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Footer;
