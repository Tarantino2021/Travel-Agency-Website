import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

function Accordion({ info, active, setActive }) {
  const isOpen = info.id === active;

  return (
    <>
      <motion.div
        onClick={() => setActive(isOpen ? null : info.id)}
        animate={{ backgroundColor: isOpen ? "#000000" : "#fcfcfc" }}
        transition={{
          duration: 0.1,
          ease: [0.25, 0.25, 1.0, 0.65],
        }}
        className="accordion_header"
      >
        <h3 className="accordion_header_text"> {info.title}</h3>
        <div className="accordion_icon">
          <motion.div
            className="accordion_btn-row"
            animate={{
              rotate: isOpen ? 0 : 180,
              opacity: isOpen ? 1 : 0.9,
            }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <HiOutlineArrowNarrowDown className="accordion_btn_arrow" />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        key="infoContent"
        animate={{
          height: isOpen ? "100%" : "0",
        }}
        transition={{
          duration: 0.6,
          ease: [0.42, 0.0, 0.96, 0.065],
        }}
        className="accordion_content"
      >
        {info.results.map((result, index) => (
          <p key={index} className="accordion_content_text">
            {result}
          </p>
        ))}
      </motion.div>
    </>
  );
}

export default Accordion;
