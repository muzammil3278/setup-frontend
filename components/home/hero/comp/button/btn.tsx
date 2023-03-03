import React from "react";
import dynamic from "next/dynamic";
const Btn1 = dynamic(() => import("./btn1"));
const Btn2 = dynamic(() => import("./btn2"));

function btn() {
  return (
    <>
      <Btn1 />
      <Btn2 />
    </>
  );
}

export default btn;
