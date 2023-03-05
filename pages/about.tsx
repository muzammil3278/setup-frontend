import React from "react";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../components/about"));
const Team = dynamic(() => import("../components/about/team"));
const Hero = dynamic(() => import("../components/hero"));
const Counter = dynamic(() => import("../components/counter"));

export default function index() {
  return (
    <>
      <Hero head="About Us" />
      <About />
      <Counter />
      <Team />
    </>
  );
}
