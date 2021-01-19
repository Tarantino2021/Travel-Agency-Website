import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function PagesOverlay() {
  const [overlay, setOverlay] = useState(false);

  return (
    <>
      <motion.div
        className="banner_Overlay"
        initial={{ height: "100vh", bottom: 0 }}
        animate={{ height: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0.87, 0, 0.13, 1],
        }}
      />
    </>
  );
}

export default PagesOverlay;
