import React from "react";
import Left from "./comp/left";
import Right from "./comp/right";

function index() {
  return (
    <>
      <div className=" dark:bg-black bg-white">
      <div className="container mx-auto lg:px-8 md:px-6 sm:px-4 px-2 gap-8 flex lg:flex-row flex-col dark:bg-black bg-white">
       <div className="w-full"> <Left /></div>
       <div className="w-full  py-6"><Right /></div>
      </div>
      </div>
    </>
  );
}

export default index;
