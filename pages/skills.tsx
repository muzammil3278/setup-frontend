import React from 'react'
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("../components/hero"));
const Heading = dynamic(() => import("../components/heading"));
const About = dynamic(() => import("../components/home/about/comp/right/second"));
const Technology = dynamic(() => import("../components/technology"));

export default function skills() {
  return (
    <>
    <Hero head="Our Skills" />
   <div className='dark:bg-black bg-white py-16'>
    <Heading head='Skills' />
   <About />
   </div>
   
   <div className='py-20'>
   <Technology />
   </div>
    </>
  )
}
