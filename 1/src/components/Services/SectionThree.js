import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SectionThree() {
  //1
  const textAnimation = useAnimation();
  const [textOneRef, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      textAnimation.start("upOne");
    }
  }, [textAnimation, inView]);

  //2
  const textAnimationTwo = useAnimation();
  const [textTwoRef, inViewTwo] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewTwo) {
      textAnimationTwo.start("upTwo");
    }
  }, [textAnimationTwo, inViewTwo]);

  //3
  const textAnimationTree = useAnimation();
  const [textTreeRef, inViewTree] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewTree) {
      textAnimationTree.start("upTree");
    }
  }, [textAnimationTree, inViewTree]);

  //4
  const textAnimationFour = useAnimation();
  const [textFourRef, inViewFour] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewFour) {
      textAnimationFour.start("upFour");
    }
  }, [textAnimationFour, inViewFour]);

  return (
    <section className="Services_Two_page">
      <div className="Services_Two_container">
        <div className="Services_Two_container_line">
          <motion.span
            ref={textOneRef}
            initial="hidden"
            animate={textAnimation}
            variants={{
              upOne: {
                opacity: 1,
                y: 0,
                stagger: {
                  amount: 0.7,
                },
                transition: {
                  duration: 1.8,
                  type: "tween",
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              },
              hidden: { opacity: 1, y: "120%" },
            }}
          >
            Inspiration
          </motion.span>
        </div>
        <div className="Services_Two_container_lineTWO">
          <motion.span
            ref={textTwoRef}
            initial="hidden"
            animate={textAnimationTwo}
            variants={{
              upTwo: {
                opacity: 1,
                y: 0,

                transition: {
                  duration: 1.8,

                  type: "tween",
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              },
              hidden: { opacity: 1, y: "100%" },
            }}
          >
            of
          </motion.span>
          <motion.span
            ref={textTreeRef}
            initial="hidden"
            animate={textAnimationTree}
            variants={{
              upTree: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.8,
                  delay: 0.1,
                  type: "tween",
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              },
              hidden: { opacity: 1, y: "100%" },
            }}
          >
            your
          </motion.span>
        </div>
        <div className="Services_Two_container_line">
          <motion.span
            ref={textFourRef}
            initial="hidden"
            animate={textAnimationFour}
            variants={{
              upFour: {
                opacity: 1,
                y: 0,

                transition: {
                  duration: 1.8,
                  type: "tween",
                  ease: [0.6, 0.01, -0.05, 0.9],
                },
              },
              hidden: { opacity: 1, y: "120%" },
            }}
          >
            travel.
          </motion.span>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
