import React from "react";
import dynamic from "next/dynamic";

const Blog = dynamic(() => import("../components/blog"));
const Hero = dynamic(() => import("../components/hero"));

export default function index() {
  return (
    <>
      <Hero head="Our Blogs" />
     <Blog />
    </>
  );
}
