import { useState } from "react";
import First from "./first";
import Second from "./second";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    x: 80,
  },
};

export default function index() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <motion.div
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
        className=" flex"
      >
        <button
          className={
            toggleState === 1
              ? "p-3 text-center w-4/12 bg-white mr-4 cursor-pointer  outline-none font-bold"
              : " p-3 font-bold text-center w-3/12 bg-orange-400 mr-4 cursor-pointer  outline-none"
          }
          onClick={() => toggleTab(1)}
        >
          {" "}
          My Bio
        </button>
        <button
          className={
            toggleState === 2
              ? "p-3 text-center w-4/12 bg-white mr-4 cursor-pointer relative outline-none font-bold"
              : " p-3 font-bold text-center w-3/12 bg-orange-400 mr-4 cursor-pointer relative outline-none"
          }
          onClick={() => toggleTab(2)}
        >
          SKILLS
        </button>
      </motion.div>

      <div className="content-tabs flex-grow ">
        <div
          className={
            toggleState === 1
              ? "p-4 w-full h-full  block"
              : "  p-4 hidden w-full h-full"
          }
        >
          <First />
        </div>
        <div
          className={
            toggleState === 2
              ? " p-4 w-full h-full  block"
              : " p-4 hidden w-full h-full"
          }
        >
          <Second />
        </div>
      </div>
    </div>
  );
}
