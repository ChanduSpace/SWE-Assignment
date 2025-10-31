import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ZoomOnScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"], // start zoom when element enters view
  });

  // Map scroll progress (0 → 1) to scale (1 → 1.5)
  const scale = useTransform(scrollYProgress, [0.5, 0.55], [1, 1.2]);

  return (
    <div className="h-[200vh] flex items-center justify-center">
      <motion.div
        ref={ref}
        style={{ scale }}
        className="w-64 h-64 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-xl"
      >
        Zoom on Scroll
      </motion.div>
    </div>
  );
};

export default ZoomOnScroll;
