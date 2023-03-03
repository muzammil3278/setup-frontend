import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Para from "./comp/para";
import Btn from "./comp/button/btn";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};
// left to right
const heading = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    x: -10,
  },
};
// right to left
const image = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    x: 10,
  },
};

function index() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <div className="dark:bg-black bg-white md:pb-10 pb-4 md:pt-6 sm:pt-4 pt-0">
        <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto flex justify-between items-center flex-wrap">
          <motion.div
            ref={ref}
            variants={heading}
            initial="hidden"
            animate={control}
            className="text lg:w-6/12 w-full mt-2 text-white relative z-0 lg:flex  lg:justify-center  lg:flex-col flex-row pt-12"
          >
            <span className="subheading font-bold text-orange-400 text-sm mb-1 relative z-0 w-24 inline-block dark:bg-white bg-orange-100 rounded py-1 px-2">
              Hi There!
            </span>
            <h1 className="mb-4 font-normal lg:text-6xl md:text-4xl text-2xl text-black dark:text-white">
              I am Muhammad Muzammil Safdar
              <br />
              <span className="typewrite">
                <span className="wrap text-xl text-orange-400">
                  <Typewriter
                    options={{
                      strings: [
                        "Frontend Developer",
                        "Graphic Designer",
                        "Data Entry",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </span>
            </h1>
            <motion.div
              className=" mb-4"
              ref={ref}
              variants={btn}
              initial="hidden"
              animate={control}
            >
              <Para />
              <p className="pt-5">
                <Btn />
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-4/12 w-full "
            ref={ref}
            variants={image}
            initial="hidden"
            animate={control}
          >
            <Image
              src="/hero/hero_bg.webp"
              height="999"
              width="999"
              className="h-full w-full"
              alt="hero bg"
              title="hero bg"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default index;
