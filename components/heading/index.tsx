import React from "react";

function index(props: { head: string }) {
  return (
    <div className="heading-section relative text-center my-20">
      <h2 className="mb-4 font-bold text-5xl text-orange-400">{props.head}</h2>
    </div>
  );
}

export default index;
