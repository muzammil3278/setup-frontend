import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Facebook
import {
  FaFacebookF,
  FaFacebookSquare,
  FaFacebook,
  FaYoutube,
  FaBootstrap,
  FaAngular,
  FaAndroid,
  FaCss3,
  FaCss3Alt,
  FaDiscord,
  FaFacebookMessenger,
  FaGithubSquare,
  FaGithub,
  FaGoogle,
  FaDribbble,
  FaFigma,
  FaGitSquare,
  FaLinkedinIn,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaGit,
  FaGooglePlay,
  FaGooglePlusG,
  FaHtml5,
  FaInstagram,
  FaJs,
} from "react-icons/fa";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const btn = {
  visible: {
    opacity: 1,
      // x: 0,
      // y: -34,
      // rotate: 0,
      // scale: 1.1,
      x: 0,
      y: -34,
      scale: 1.1,
      rotate: 0,
    // transition: { duration: 1.5 },
  },
  hidden: {
    opacity: 0,
      x: -100,
      y: -100,
      scale: 0.3,
      rotate: 0,
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
    // <motion.div
    // whileHover={{ scale: 1.2 }}
    // whileTap={{ scale: 1.1 }}
    // drag="x"
    // dragConstraints={{ left: -100, right: 100 }}
    // >
    //   <FaGoogle />
    //   <FaDribbble />
    //   <FaFigma />
    //   <FaLinkedinIn />
    //   <FaHtml5 />
    //   <FaGitSquare />
    //   <FaLinkedin />
    //   <FaGooglePlusG />
    //   <FaGooglePlay />
    //   <FaGit />
    //   <FaReact />
    //   <FaNodeJs />
    //   <FaJs />
    //   <FaInstagram />
    //   <FaFacebookF />
    //   <FaFacebookSquare />
    //   <FaFacebook />
    //   <FaYoutube />
    //   <FaBootstrap />
    //   <FaAngular />
    //   <FaAndroid />
    //   <FaCss3 />
    //   <FaCss3Alt />
    //   <FaDiscord />
    //   <FaFacebookMessenger />
    //   <FaGithubSquare />
    //   <FaGithub />
    // </motion.div>
    <motion.div ref={ref} variants={btn} initial="hidden" animate={control}>
     <Box maxW='32rem'>
  <Heading mb={4}>Modern online and offline payments for Africa</Heading>
  <Text fontSize='xl'>
    Paystack helps businesses in Africa get paid by anyone, anywhere in the
    world
  </Text>
  <Button size='lg' colorScheme='green' mt='24px'>
    Create a free account
  </Button>
</Box>
    </motion.div>
   
  );
}
