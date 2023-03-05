import React from "react";
import dynamic from "next/dynamic";

const Portofolio = dynamic(() => import("../components/portofolio"));
const Hero = dynamic(() => import("../components/hero"));

export default function index() {
  return (
    <>
      <Hero head="Our Portofolio" />
      <Portofolio />
    </>
  );
}
