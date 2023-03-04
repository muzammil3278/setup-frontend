import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Image from "next/image";
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
    <motion.div
      className=""
      ref={ref}
      animate={control}
      initial="hidden"
      variants={image}
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
  );
}

export default index;
