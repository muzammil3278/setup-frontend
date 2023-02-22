import React from "react";
import Typewriter from "typewriter-effect";

export default function index() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Hello", "World"],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}
