import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

const Card = (props) => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "1 0"],
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log(scrollYProgress.get());
  });

  return (
    <div
      ref={targetRef}
      className="flex items-center justify-center h-full w-full flex-col"
    >
      {props.data.map((data, index) => {
        let start, end;
        if (index === 0) {
          start = 0;
          end = 0.47;
        } else {
          start = 0.47 + (index - 1) * 0.15;
          end = start + 0.2;
        }

        const scale = useTransform(
          scrollYProgress,
          [start, end],
          [1 - index * 0.05, 1 + index * 0.05]
        );

        return (
          <motion.div
            key={index}
            initial={{
              y: 20 + index * 25,
              scale: 1 - index * 0.05,
              zIndex: props.data.length - index,
            }}
            style={{
              scale,
            }}
            className="h-80 w-150 rounded-2xl shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] p-6 mb-6 sticky bottom-20 bg-white"
          >
            <div className="flex h-full justify-between">
              <div className="w-[50%] h-full rounded-full flex flex-col justify-between items-stretch">
                <h2 className="text-[#12205A] text-2xl mb-4 w-[60%]">
                  {data.title}
                </h2>
                <p className="text-[#8990AD] w-[80%]">{data.description}</p>
              </div>
              <div className="w-[50%] h-full rounded-full">
                <div className="bg-gray-200 w-full h-full rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Card;
