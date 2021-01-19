import React, { useEffect } from "react";
//observer
import { useInView } from "react-intersection-observer";
//framermotion
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";

function SectionFour() {
  //animation
  const animation = useAnimation();
  const [instictRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "-5px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
  }, [animation, inView]);

  return (
    <section className="Approach_Four_page">
      <div className="Approach_Four_container">
        <div className="Approach_Four_Column">
          <h2 className="Approach_Four_H2">Why this approach</h2>
        </div>
        <div className="Approach_Four_Column_Two">
          <p className="Approach_Four_p">
            The Human brain is divided in a rational and an emotional part. Most
            companies decide to work on the emotional part to create a deeper
            and more meaningful relationship with customers. But we think that
            emotion is just a small part that hides a bigger lever:
          </p>
        </div>
        <div className="Approach_Four_Column_Tree">
          <strong className="Approach_Four_strong">
            <div className="Approach_Four_strong_cover">
              <motion.div
                ref={instictRef}
                initial="hidden"
                animate={animation}
                variants={{
                  show: {
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    stagger: {
                      amount: 0.7,
                    },
                    transition: {
                      duration: 2.9,
                      type: "spring",
                      ease: [0.6, 0.01, -0.05, 0.9],
                    },
                  },
                  hidden: { opacity: 1, y: "100%", skewY: 9 },
                }}
                className="Approach_Four_strong_text"
              >
                Instinct
              </motion.div>
            </div>
          </strong>
          <p className="Approach_Four_pTwo">
            We believe that the more a we work on an instinctive level,
            <br /> the more we talk to the hearts of humankind.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
