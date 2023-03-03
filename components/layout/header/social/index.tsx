import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    transition: { duration: 1 },
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -60,
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
  return (
    <motion.div className="social flex items-center justify-center  dark:text-white text-black">
      <motion.div
        className="px-2"
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Tooltip hasArrow label="Facebook" bg="red.500" closeDelay={200}>
          <Link href="">
            <FaFacebookF />
          </Link>
        </Tooltip>
      </motion.div>
      <motion.div
        className=" px-2"
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Tooltip hasArrow label="You Tube" bg="red.500" closeDelay={200}>
          <Link href="">
            <FaYoutube />
          </Link>
        </Tooltip>
      </motion.div>
      <motion.div
        className=" px-2"
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Tooltip hasArrow label="Linkedin" bg="red.500" closeDelay={200}>
          <Link href="">
            <FaLinkedin />
          </Link>
        </Tooltip>
      </motion.div>
      <motion.div
        className=" px-2"
        ref={ref}
        variants={btn}
        initial="hidden"
        animate={control}
      >
        <Tooltip hasArrow label="Instragram" bg="red.500" closeDelay={200}>
          <Link href="">
            <FaInstagram />
          </Link>
        </Tooltip>
      </motion.div>
    </motion.div>
  );
}
