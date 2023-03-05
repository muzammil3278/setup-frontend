import React from "react";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("../components/contact/form"));
const Map = dynamic(() => import("../components/contact/map"));
const Hero = dynamic(() => import("../components/hero"));

export default function index() {
  return (
    <>
      <Hero head="Contact Us" />
      <Form />
      <Map />
    </>
  );
}
