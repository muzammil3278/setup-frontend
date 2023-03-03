import React from "react";
import Image from "next/image";
import Para from "./comp/para";
import Head from "./comp/head";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// right to left
const image = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
  hidden: {
    opacity: 0,
    x: 50,
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
          <div className="text lg:w-6/12 w-full mt-2 text-white relative z-0 lg:flex  lg:justify-center  lg:flex-col flex-row pt-12">
            <Head />
            <Para />
          </div>
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
