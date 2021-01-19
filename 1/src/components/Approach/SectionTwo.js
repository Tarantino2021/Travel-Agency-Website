import React from "react";
//framermotion
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";

function SectionTwo() {
  return (
    <section className="Approach_Two_page">
      <div className="Approach_Two_list_mobile">
        <h1>YOUR TRAVEL IDEA</h1>
        <ul>
          <li>..is our destination</li>
          <li>..is our goal</li>
          <li>..is our inspiration</li>
        </ul>
      </div>
      <div className="Approach_Two_container">
        <div className="Approach_Two_column_One">
          <h3 className="Approach_Two_H3">A travel idea is</h3>

          <div className="Approach_Two_list">
            <motion.ul
              initial={{ y: 0 }}
              animate={{ y: [-700, 60] }}
              transition={{ yoyo: Infinity, duration: 5, type: "spring" }}
              className="Approach_Two_list_Ul"
            >
              <li>a color.</li>
              <li>a corporate identiy.</li>
              <li>a product.</li>
              <li>a jingle.</li>
              <li>an icon.</li>
              <li>a packaging.</li>
              <li>a smell.</li>
              <li>a definied imagery.</li>
              <li>an animation.</li>
              <li>a color.</li>
              <li>a corporate identiy.</li>
              <li>a product.</li>
              <li>a jingle.</li>
              <li>an icon.</li>
              <li>a packaging.</li>
              <li>a smell.</li>
              <li>a definied imagery.</li>
              <li>an animation.</li>
              <li>a color.</li>
              <li>a corporate identiy.</li>
              <li>a product.</li>
              <li>a jingle.</li>
              <li>an icon.</li>
              <li>a packaging.</li>
              <li>a smell.</li>
              <li>a definied imagery.</li>
              <li>an animation.</li>
            </motion.ul>
          </div>
        </div>
        <div className="Approach_Two_column_Two">
          <div className="Approach_Two_column_Two_inner">
            <div className="Approach_block">
              <h3 className="Approach_Two_h3"> A idea is </h3>
              <p className="Approach_Two_p"> a road</p>
            </div>
            <div className="Approach_block">
              <h3 className="Approach_Two_h3">Travel plan</h3>
              <p className="Approach_Two_p"> a journey</p>
            </div>
            <div className="Approach_block">
              <h3 className="Approach_Two_h3"> others</h3>
              <p className="Approach_Two_p"> a hiking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
