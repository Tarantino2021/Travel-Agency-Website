import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../assets/arrow-right.svg";

function SectionOne() {
  return (
    <div className="imagesSection_page">
      <div className="imagesSection_container">
        <div className="imagesSection_columnOne">
          <blockquote className="imagesSection_quote">
            <p className="imagesSection_P">
              We created Travel on a simple premise: to provide people with an
              opportunity to go on a journey in a world of beauty. We offer all
              kinds of solutions to your dream travel plans. Ourservices tailor
              to all kinds of visions from our costumers. We create unique
              travel guides and a plan based on your own ideas.
            </p>
          </blockquote>
          <strong className="imagesSection_strong">
            <div className="imagesSection_cover">
              <motion.div className="imagesSection_strong_text">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4.4,
                    ease: [0.6, 0.01, -0.05, 0.9],
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 2,
                  }}
                >
                  J
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4.4,
                    delay: 1,
                    ease: [0.6, 0.01, -0.05, 0.9],
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 2,
                  }}
                >
                  o
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4.4,
                    delay: 1.5,
                    ease: [0.6, 0.01, -0.05, 0.9],
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 2,
                  }}
                >
                  u
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4.4,
                    delay: 2,
                    ease: [0.6, 0.01, -0.05, 0.9],
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 2,
                  }}
                >
                  r
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4.4,
                    delay: 2.5,
                    ease: [0.6, 0.01, -0.05, 0.9],
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 2,
                  }}
                >
                  n
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4.4,
                    delay: 3,
                    ease: [0.6, 0.01, -0.05, 0.9],
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 2,
                  }}
                >
                  e
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 4.4,
                    delay: 3.5,
                    ease: [0.6, 0.01, -0.05, 0.9],
                    type: "tween",
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 2,
                  }}
                >
                  y
                </motion.span>
              </motion.div>
            </div>
          </strong>
        </div>
        <div className="imagesSection_columnTwo">
          <div className="imagesSection_columnTwo_wrapper">
            <h3 className="imagesSection_columnTwo_h3">Services</h3>
            <ul className="imagesSection_columnTwo_ul">
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="imagesSection_columnTwo_li"
              >
                Travel Strategy
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="imagesSection_columnTwo_li"
              >
                Journey Design
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="imagesSection_columnTwo_li"
              >
                Travel Development
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="imagesSection_columnTwo_li"
              >
                Content Creation
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="imagesSection_columnTwo_li"
              >
                Marketing
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="imagesSection_columnTwo_li"
              >
                Conversion Optimisation
              </motion.li>
            </ul>
            <div className="imagesSection_columnTwo_BtnRow">
              <Link className="imagesSection_columnTwo_Link" to="/about-us">
                About us <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
