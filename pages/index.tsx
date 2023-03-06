import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/home/hero"));
const Freelancing = dynamic(() => import("../components/freelancing"));
const About = dynamic(() => import("../components/home/about"));
const Service = dynamic(() => import("../components/services"));
const Technology = dynamic(() => import("../components/technology"));

export default function index() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Technology />
      <Freelancing />
    </>
  );
}
