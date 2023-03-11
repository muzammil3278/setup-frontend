import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
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
    <motion.div ref={ref} variants={btn} initial="hidden" animate={control}>
      <Link href="/">
        <Image
          src="/logo/logo.png"
          alt="muzammil logo"
          title="muzammil logo"
          height="150"
          width="150"
        />
      </Link>
    </motion.div>
  );
}
