import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/hero"));
const About = dynamic(() => import("../components/home/about"));

export default function index() {
  return (
    <>
      <Hero head="Our Resume"/>
      <About />
    </>
  );
}
