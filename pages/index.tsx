import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/home/hero"));

export default function index() {
  return (
    <>
      <Hero />
    </>
  );
}
