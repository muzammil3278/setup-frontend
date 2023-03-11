import React from "react";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("../components/services"));
const Hero = dynamic(() => import("../components/hero"));

export default function index() {
  return (
    <>
      <Hero head="Our Services" />
     <Services />
    </>
  );
}
