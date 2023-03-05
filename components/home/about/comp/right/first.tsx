import React from 'react'
import Image from "next/image";
import Social from '@/components/layout/footer/Social';
import Para from '@/components/home/hero/comp/para';
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

export default function first() {
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
    <div className=" dark:text-white text-black">
      <motion.div
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
    <h6 className="pt-1 text-md uppercase mb-2">
      Hello Everybody, i am{" "}
    </h6>
    <h3 className="pt-2 text-5xl uppercase mb-4 font-bold">
      Muhammad Muzammil Safdar
    </h3>
    <h4 className="text-base font-medium uppercase mb-5 text-red-500">
      Junior Frontend Web Developer
    </h4>
  </motion.div>
    <Para />
   <div className='py-7'>
   <Social />
   </div>
  </div>
  )
}
