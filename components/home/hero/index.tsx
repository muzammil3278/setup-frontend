import React from "react";
import Para from "./comp/para";
import Head from "./comp/head";
import Image from "./comp/image";


function index() {

  return (
    <>
      <div className="dark:bg-black bg-white md:pb-10 pb-4 md:pt-6 sm:pt-4 pt-0">
        <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto flex justify-between items-center flex-wrap">
          <div className="lg:w-6/12 w-full mt-2 text-white relative z-0 lg:flex  lg:justify-center  lg:flex-col flex-row pt-12">
            <Head />
            <Para />
          </div>
          <div className="lg:w-4/12 w-full ">
           <Image />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
